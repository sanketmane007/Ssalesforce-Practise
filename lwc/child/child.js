import { LightningElement, wire } from 'lwc';
import displayAccntRecords from '@salesforce/apex/AccountDemoController.displayAccntRecords';
export default class Child extends LightningElement {
   @wire(displayAccntRecords) accounts;
   accountId;
   handleClick(event){
       this.accountId=event.target.value;
       const sampledemoevent=new CustomEvent('samplevent',
       {
           detail:this.accountId
       });
       this.dispatchEvent(sampledemoevent);
   }

}