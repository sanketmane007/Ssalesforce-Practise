@isTest
public class TemperatureTest {
@isTest
    private static void warmTempTest(){
        
        Decimal res=Temperature.FtoC(70);
        System.assertEquals(21.11,res);
    
   }
    
    private static void coldTempTest(){
        Decimal res=Temperature.FtoC(32);
        System.assertEquals( 0, res); 
    }
}