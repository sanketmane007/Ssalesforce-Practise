import { LightningElement, wire } from 'lwc';


import getAccountList from '@salesforce/apex/GetAccountData.getAccountList';
export default class WireLWCExample extends LightningElement {
    @wire(getAccountList) accounts; 
}