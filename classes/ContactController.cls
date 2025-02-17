public with sharing class ContactController {
    public class CustomException extends Exception {}
    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContacts() {
        List<Contact> contacts = [select id, name, email, CreatedDate from Contact order by CreatedDate desc];
        
        return (contacts);
    }

    @AuraEnabled(Cacheable=true)
    public static Contact getContact(String contactId) {
        Contact cont = [select id, name, email, CreatedDate 
                          from Contact 
                         where Id = : contactId];
        
        return (cont);
    }

    @AuraEnabled
    public static Contact saveContact(Contact cont){
        insert (cont);

        return (cont);
    }
}