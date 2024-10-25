import { LightningElement, wire, api } from 'lwc';
import getContactsJs from '@salesforce/apex/ContactController.getContacts'
import getContactJs from '@salesforce/apex/ContactController.getContact'

export default class ShowContactsLwc extends LightningElement {

    contacts
    @api recordId = '0035g000009hkc9AAA'
    
    @wire(getContactsJs) wiredContacts

    @wire(getContactJs, {'contactId' : '$recordId'}) singleContact

    handleClick() {
        console.log('came to handleClick')
        this.getContactsFromSalesforce()
    }

    getContactsFromSalesforce() {
        getContactsJs()
        .then(response => {
            this.contacts = response;
        })
        .catch(error => {
            console.log(JSON.stringify(error));
        });
    }

}