public without sharing class AddPrimaryContact implements Queueable{
    private Contact contact;
    private String state;
    public AddPrimaryContact(Contact inputcontact,String inputstate){
        this.contact=inputcontact;
        this.state=inputstate;
    }
    public void execute(QueueableContext context){
        
        //Retrieve 200 Records
        List<Account> accounts=[SELECT Id FROM Account WHERE BillingSTate=:state LIMIT 200];
        
        //Create empty List of Contact Records
        List<Contact> contacts=new List<Contact>();
        
        //Iterate through the Account records
        for(Account acc:accounts){
            //Clone Copy the Contact record,Make the clone a child of the specific Account record
            //And add tho the list of Contact
        	
            Contact contactclone=Contact.clone();
            contactClone.AccountId=acc.Id;
            contacts.add(contactClone);
        
        }
        insert contacts;
        
    }

}