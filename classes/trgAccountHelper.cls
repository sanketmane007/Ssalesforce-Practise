public class trgAccountHelper {
    
 public static void updateAccount(List<Account> lstAcc){
		
         for(Account acc : lstAcc)
        {
            if(acc.Industry == 'Banking' || acc.Industry == 'Agriculture')
            {
                acc.Rating ='Hot';
            }
            else
            {
                acc.Rating ='Cold';
            }
        }
        
    }
           
    public static void createChildRecord(List<Account> lstAcc){
        List<Contact> contactList = new List<Contact>();
        
        for(Account acc : lstAcc)
        {
            Contact c = new Contact();
            c.LastName = acc.Name;
            c.AccountId = acc.ID;
            contactList.add(c);
            
        }
        
        insert contactList;
    }
    
}