import { LightningElement,track } from 'lwc';

export default class EditFormLWC2 extends LightningElement {
    @track contactId;
    handleSuccess(event){
        this.contactid=event.detail.id;
    }
}