public class AccountUtility {
    public static void viewAnnualRevenue(){
    List<Account> accountsList=[SELECT Id,Name,AnnualRevenue FROM Account];
        for (Account a : accountsList){
            String acctRev = a.Name+':'+a.Annualrevenue;
            system.debug(acctRev);
        }
    
}
}