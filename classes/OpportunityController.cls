public with sharing class OpportunityController {
    public OpportunityController() {

    }
    @AuraEnabled(cacheable=true)
 public static List<opportunity> fetchOpportunityList(){
 return [SELECT Id, Name, StageName,Amount From Opportunity LIMIT 20];
 }
 @AuraEnabled
 public static void deleteOpportunities(List<opportunity> oppList){
 delete oppList; 
 }
}