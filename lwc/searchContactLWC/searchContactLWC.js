import { LightningElement,track,wire,api } from 'lwc';
import getContacts from '@salesforce/apex/SearchContactCorntroller.getContacts';
const DELAY=300;

export default class SearchContactLWC extends LightningElement {
contactName='';
@track contactList=[];
//  @api recordapi;
@wire(getContacts,{conName:'$contactName'})

retrieveAccounts({error,data}){
    if(data){
        this.contactList=data;
    }else if(error){
            
    }
}

handleKeyChange(event){
    const searchString=event.target.value;
    window.clearTimeout(this.delayTimeout)
this.delayTimeout=setTimeout(()=>{
this.contactName=searchString;
},DELAY);
    }
}