public class SobjectDemo {
    
    public void accObject(){
   /*     
    List<Account> accList=new List<Account>();  //List Of Account
    accList=[SELECT Id,Name,Phone FROM Account LIMIT 2];  //Show List Using Query Limit is 2
    //System.debug('accList= >'+accList);
     */
        
        List<Account> accList=new List<Account>();
        accList=[SELECT Id,Name FROM Account LIMIT 2];
        
        System.debug('accList');
        
        
        
    }
	
    
}