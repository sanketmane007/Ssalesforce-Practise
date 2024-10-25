public class SetDataTypeDemo {
    public void SetMethod(){
        
        List<String> strList=new List<String>{'A','A'};  // List Contains Duplicate ||  Set Dosent Contain Duplicate
        
       //  strList.add('A');
        strList.add('A');
        
        Set<String> strSet=new Set<String>();  //Set Add List
        
        strSet.add('India');
        strSet.add('Norway');
    
       
        System.debug('Set:'+ strSet);
    	System.debug('List'+ strList);	
    
        System.debug(strSet.contains('A') );
    }
    
}