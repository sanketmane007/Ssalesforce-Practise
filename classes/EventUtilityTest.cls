@isTest
public class EventUtilityTest {
@isTest
    private static void testEventStatusLength(){
	 String res=EventUtility.eventPriority('IND');	 
        System.assertEquals(null, res); 
} 
    @isTest
    private static void testCondition(){
		String res=EventUtility.eventPriority('CA');
        System.assertEquals('High', res);
    }
	@isTest
    private static void testCondition2(){
        String res=EventUtility.eventPriority('NA');
        System.assertEquals('Medium', res);
    }

}