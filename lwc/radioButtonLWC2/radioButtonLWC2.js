import { LightningElement, wire, track } from 'lwc';
import getContactsJs from '@salesforce/apex/ContactController.getContacts';  
import getContacts from '@salesforce/apex/SearchContactCorntroller.getContacts';  //call Apex alass and Method.
const DELAY=300; // Dela in ml seconds to reduce process work
export default class RadioButtonLWC2 extends LightningElement {
 
 //Using this we select radio by default
    value = 'Show_Pattern_Contact';

    //Name of the radio Button
get options() {
    return [
        { label: 'Show Contact', value: 'Show_Contact' },
        { label: 'Show Pattern Contact', value: 'Show_Pattern_Contact' },
    ];
}

//Using this we select radio by default
Data_Contact=false;
Data_Pattern_Contact=true;

//Radio Code End--------------------


//Using Search Show Contacts Start

handleRadioChange(event) {
    const selectedOption = event.detail.value;
    //alert('selectedOption ' + selectedOption);
    if (selectedOption == 'Show_Contact'){
        this.Data_Contact = true;
    }else{
        this.Data_Contact = false;
    }
  
    
    if (selectedOption == 'Show_Pattern_Contact'){
        this.Data_Pattern_Contact = true;
    }else{
        this.Data_Pattern_Contact = false;
    }
}


contactName='';
@track contactList=[];
@wire(getContacts,{conName:'$contactName'})
retrieveContact({error,data}){
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
//Search COntact Code End Here


//Contats Show Start Here -code

contacts
//   @api recordId = '0035g000009hkc9AAA'
   
   @wire(getContactsJs) wiredContacts

  // @wire(getContactJs, {'contactId' : '$recordId'}) singleContact

 /*  handleClick() {
       console.log('came to handleClick')
       this.getContactsFromSalesforce()
   }
*/
   getContactsFromSalesforce() {
       getContactsJs()
       .then(response => {
           this.contacts = response;
       })
       .catch(error => {
           console.log(JSON.stringify(error));
       });
   }

   //Only Contacts Show End here

}