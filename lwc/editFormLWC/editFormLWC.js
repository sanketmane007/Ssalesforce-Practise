import { LightningElement,api } from 'lwc';

export default class EditFormLWC extends LightningElement {

    @api recordId;
    handleSubmit(event){
        console.log('onsubmit'+event.detail.fields);
    }
    handleSuccess(event){
        const updateRecord=event.detail.id;
        console.log('onSuccess',updateRecord);
    }


}