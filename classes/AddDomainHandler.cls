public class AddDomainHandler {

      public static void addDomain(List<Contact> contacts){
        
        String contactUniqueDomains = '';
        List<String> listOfContactUniqueDomains = new List<String>();
        
        if(contacts[0].AccountId!=null){
            List<Contact> listOfContacts = [SELECT Id, Domain__c, AccountId FROM Contact where AccountId =: contacts[0].AccountId]; 
            
            for(Contact c : listOfContacts){
                if(!listOfContactUniqueDomains.contains(c.Domain__c)){
                    contactUniqueDomains += c.Domain__c + ' , '; 
                }
                listOfContactUniqueDomains.add(c.Domain__c);
            }
            
            contactUniqueDomains = contactUniqueDomains.removeEnd(' , ');
            
            Account acc = new Account(Id = listOfContacts[0].AccountId,
                                      Contact_Unique_Domains__c = contactUniqueDomains);
            update acc;
        }
    }

}