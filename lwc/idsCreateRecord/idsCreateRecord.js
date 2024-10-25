import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ContractTerm from '@salesforce/schema/Contract.ContractTerm';
export default class IdsCreateRecord extends LightningElement {
    strName;
    strAccountNumber;
    strPhone;

    //changeHandlers
    nameChangedHandler(event){
        this.strName=event.target.value;
    }
    numberChangedHandler(event){
        this.strAccountNumber=event.target.value;
    }
    phoneChangeHandler(event){
        strPhone=event.target.value;
    }

    //insert Record
    createAccount(){
        //Creating Mapping of fields of Account with values
        var fields={'Name':this.strName,'AccountNumber':this.strAccountNumber,'Phone':this.strPhone};

        //Record Details to pass to create method with api name of object.
        var objRecordInput={'apiName':'Account',fields};

        //LDS Method to Create record.
        createRecord(objRecordInput).then(response=>{alert('Account Created With Id'+response.id);
    }).catch(error=>{
            alert('Error:'+JSON.stringify(error));
        });
    }

}