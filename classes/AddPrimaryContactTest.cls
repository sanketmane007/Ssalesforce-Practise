@isTest

public class AddPrimaryContactTest {
	@isTest
    private static void testqueueableClass(){
        //Load Test Data
		 List<Account> accounts=new List<Account>();
        for(Integer i=0;i<500;i++){
            Account acc=new Account(Name='Tes Account');
            if(i<250){
                acc.BillingState='NY';
            }else{
                acc.BillingState='CA';
            }
            accounts.add(acc);
        }
        INSERT accounts;
        Contact contact=new Contact(FirstName='Simmon',LastName='Cannon');
        INSERT contact;
        
        //Perform The Test
        Test.startTest();
        Id jobId=System.enqueueJob(new AddPrimaryContact(contact,'CA'));
        Test.stopTest();
        
        //check The Result
        List<Contact> contacts=[SELECT Id FROM Contact WHERE Contact.Account.BillingState='CA'];
        System.assertEquals(200,contacts.size(),'Error: Incorrect Number of Contact Found');
    }
}