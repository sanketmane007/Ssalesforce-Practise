public class MapDataTypeDemo {
    public void MapDemoMethod(){
         
        
        /*   Map<Integer,String> intToStrMap=new Map<Integer,String>();
intToStrMap.put(1,'A');
intToStrMap.put(2,'B');

//  intToStrMap.remove(2);  //For Removing Value 
//   System.debug('Map Size Of Value :'+intToStrMap.size);  //To Know the Size of Values
System.debug('intToStrMap='+intToStrMap);
* / 
//   System.debug('intToStrMap='+intToStrMap.values()); //Get the Values in Map
/*
Set<Integer> intSet =new Set<Integer>();
intSet=intToStrMap.keySet();        
System.debug('intToStrMap KeySet='+ intSet); //if you know the Key Set
*/                 
        /*  	List<string> lst=new List<String>();
lst=intToStrMap.values();  
System.debug('InToStrMap:'+lst);
*/  
        
 	// Show Account Information 
       Map<Id,Account> accIdMap=new Map<Id,Account>([SELECT Id,Name FROM Account LIMIT 2]); 
      	System.debug('accIdMap'+accIdMap);  
        
        
    }
}