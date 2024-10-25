public class EventUtility {
    public static String eventPriority(String eventstatus){
        String eventPri;
        
        if(String.isBlank(eventstatus) || eventstatus.length()>2){
            return null;
        }
        if(eventstatus=='CA'){
            eventPri='High';
            
        }else{
            eventPri='Medium';
        }
        return eventPri; 	
    }
}