public without sharing class LeadProcessor implements Database.Batchable<sobject>, Database.stateful{
    
    public Database.QueryLocator start(Database.BatchableContext dbc){
        return Database.getQueryLocator([SELECT Id, Name FROM Lead]);

}
    public void execute(Database.BatchableContext dbc,List<Lead> leads){
        for(Lead l:leads){
            l.LeadSource='DreamForce';
        }
        UPDATE leads;
    }
    public void finish(Database.BatchableContext dbc){
        System.debug('Done');
    }
    
}