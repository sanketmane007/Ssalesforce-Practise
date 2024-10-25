import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordFormExample extends LightningElement {
    @api recordId;
    handleSubmit(event) {
        console.log(event.detail);
    }

    handleSuccess(event) {
       console.log('Record iD' + event.detail.id);
       const evt = new ShowToastEvent({
        title: 'Toast Success',
        message: 'Opearion sucessful',
        variant: 'success',
        mode: 'dismissable'
        });
        this.dispatchEvent(evt);
        }
 //     this.showSuccessToast();
        
    }
/*
    showSuccessToast() {
        const evt = new ShowToastEvent({
        title: 'Toast Success',
        message: 'Opearion sucessful',
        variant: 'success',
        mode: 'dismissable'
        });
        this.dispatchEvent(evt);
        }
*/