public with sharing class LeadDeleteController2 {
    @AuraEnabled(cacheable=true)
    public static List<Lead> displayLeads(){
        return [select Id,Name from Lead];
    }
    @AuraEnabled
    public static List<Lead> delRecords(List<String> selecRecords){
        List<Lead> returnlist=new List<Lead>();
        for(Lead acc:[select Id,Name from Lead where Id in:selecRecords]){
            returnlist.add(acc);

        }
        if(returnlist.size()>0){
            try{
                delete returnlist;
            }
            catch(Exception  e){
           throw new AuraHandledException(e.getMessage());
            }
        }
        return displayLeads();
        
    }
    
}