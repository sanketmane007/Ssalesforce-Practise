public class DMLOperationExample {
	
    public static void createAccount(String Name,String Phone){
      Account acc=new Account();
        acc.Name=Name;
        acc.Phone=Phone;
        insert acc;
        System.debug('Account Id :'+acc.Id);
        System.debug('Account Inserted :'+acc.Name);
        
    }
    
    
}