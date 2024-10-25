public with sharing class GetAccountData {

    @AuraEnabled(cacheable=true)
       public static List<Account> getAccountList(){
           return[SELECT Id,Name,Rating,Type,Phone FROM Account LIMIT 20];
       } 
}