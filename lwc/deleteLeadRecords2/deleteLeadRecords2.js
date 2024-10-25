import { LightningElement, wire,api, track } from 'lwc';
import  displayLeads from '@salesforce/apex/LeadDeleteController2.displayLeads';
import delRecords from '@salesforce/apex/LeadDeleteController2.displayLeads';
import { refreshApex } from '@salesforce/apex';

export default class DeleteLeadRecords2 extends LightningElement {

    @api  columns =[
        { label: 'Name', fieldName: 'Name' }
    ];
             @wire(displayLeads) Leads;
             @api selectedLeadlist=[];
    @api errorMessage;
    getSelectedId(event){
        const selectedRows = event.detail.selectedRows;
        console.log('selectedRecordID'+JSON.stringify(selectedRows));
        this.selectedLeadlist=[];
        for (let i = 0; i<selectedRows.length; i++){
            this.selectedLeadlist.push(selectedRows[i].Id);
        }
    }

    handleDelete(){
        delRecords({selecRecords: this.selectedLeadlist })
        .then(()=>{
            this.template.querySelector('lightning-datatable').selectedRows=[];
            return refreshApex(this.Leads);
        })
        .catch((error)=>{
            this.errorMessage=error;
            console.log('unable to delete the record due to'+JSON.stringify(this.errorMessage));
        });

    }
  }