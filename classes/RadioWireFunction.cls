public with sharing class RadioWireFunction {
    @AuraEnabled(cacheable=true)
    public static List<Account> getListOfAccounts() {
        return [SELECT Id, Name FROM Account LIMIT 5];
    }

    /**
     * This method is responsible to return contacts of account id passed 
     * as parameter and max number of contacts return depends on the
     * 'lmt' parameters value.
     */
    @AuraEnabled(cacheable=true)
    public static List<Contact> getListOfContacts(String accId, Integer lmt) {
        return [SELECT Id, Name, Email FROM Contact WHERE AccountId =:accId LIMIT :lmt];
    }
}