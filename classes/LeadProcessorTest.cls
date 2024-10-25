@isTest
public class LeadProcessorTest {
@isTest
    private static void testbatchClass(){
        
        //Load Test data 
        List<Lead> leads=new List<Lead>();
        for(Integer i=0; i<200; i++){
            leads.add(new Lead(LastName='connock',company='salesforce'));
        }
        insert leads;
        
        //Perform the Test
       Test.startTest();
        LeadProcessor lp=new LeadProcessor();
        Id batchId=Database.executeBatch(lp,200);
        Test.stopTest();
        
        // Check The Result
        List<Lead> updateLeads=[SELECT Id FROM Lead WHERE LeadSource='Dreamforce'];
    	System.assertEquals(200,updateLeads.size(),'Error: At lEast 1 Record is Updated Correctly');
    
    }
}