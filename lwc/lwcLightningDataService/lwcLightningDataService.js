import {LightningElement, api, track, wire } from 'lwc';
import Account_Namme from '@salesforce/schema/Account.Name';
import Account_Phone from '@salesforce/schema/Account.Phone';
import Account_Industry from '@salesforce/schema/Account.Industry';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';

export default class LwcLightningDataService extends NavigationMixin (LightningElement) {
    @api title;
    @api greetings;
    objectApiName='Account';
    fieldList = [Account_Name,Account_Phone,Account_Industry];
    handleAccountCreate(event){
    const evt = new ShowToastEvent({
    title:'Record Created Successfully',
    message:'Record Id: ' + event.detail.id,
    variant:'success',
    })
    this.dispatchEvent(evt);
    this[NavigationMixin.Navigate]({
    type: 'standard__recordPage',
    attributes: {
    recordId: event.detail.id,
    objectApiName: 'Account',
    actionName: 'view'
    },
    });
    }
}