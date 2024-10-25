public with sharing class ShowDataOfContact {

    @AuraEnabled(cacheable=true)
    public static List<Contact>find(String accountId){
        return[SELECT Id,FirstName,LastName,Email,Phone FROM Contact WHERE AccountId=:accountId LIMIT 10];
   }

}