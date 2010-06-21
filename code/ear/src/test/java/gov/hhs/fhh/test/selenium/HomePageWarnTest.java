package gov.hhs.fhh.test.selenium;

import org.junit.Assert;
import org.junit.Test;

public class HomePageWarnTest extends AbstractFHHSeleniumTest {

    @Test
    public void testGoHomeWarnSpanish() throws Exception {
        openFHH();
        clickAndWait("es");
        Thread.sleep(2000);
        importXMLFile("seleniumXML1.xml");
        selenium.click("warnAndGoHome");
        Thread.sleep(1000);
        String alertText = selenium.getConfirmation();
        Assert.assertTrue(alertText.contains("Si regresa ahora a la"));

        Thread.sleep(2000);
        Assert.assertTrue(selenium.isTextPresent("Preparar su historia familiar de salud"));
    }
    
    @Test
    public void testGoHomeWarnPortugese() throws Exception {
        openFHH();
        clickAndWait("pt");
        Thread.sleep(2000);
        importXMLFile("seleniumXML1.xml");
        selenium.click("warnAndGoHome");
        Thread.sleep(1000);
        String alertText = selenium.getConfirmation();
        //TODO: needs to be changed once we get PT translation
        Assert.assertTrue(alertText.contains("Se voltar \u00E0 p\u00E1gina inicial"));
        
        Thread.sleep(2000);
        Assert.assertTrue(selenium.isTextPresent("Preparar seu hist\u00F3rico de sa\u00FAde familiar"));
    }
}
