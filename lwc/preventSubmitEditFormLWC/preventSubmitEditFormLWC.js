import { LightningElement } from 'lwc';

export default class PreventSubmitEditFormLWC extends LightningElement {
    handleSubmit(event) {
        event.preventDefault(); // stop the form from submitting
        const fields = event.detail.fields;
        console.log(JSON.stringify(fields));
        fields.title = 'VP of Opearations';
        fields.MobilePhone = '2123123123213';
        fields.LeadSource = 'Web';
        this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        handleSuccess(event) {
        const payload = event.detail;
        console.log(JSON.stringify(payload));
        const updatedRecord = event.detail.id;
        console.log('onsuccess: ', updatedRecord);
        } 
       
}