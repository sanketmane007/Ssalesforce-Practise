public with sharing class SearchContactCorntroller {
    
    @AuraEnabled(cacheable=true)

    public static List<Contact> getContacts(string conName) {
        String keyString = '%' + conName + '%';
         return [Select id,Name From Contact WHERE Name LIKE : keyString];
       
    }
}