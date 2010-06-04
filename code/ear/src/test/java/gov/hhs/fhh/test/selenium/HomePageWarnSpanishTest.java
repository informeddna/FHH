package gov.hhs.fhh.test.selenium;

import org.junit.Assert;
import org.junit.Test;

public class HomePageWarnSpanishTest extends AbstractFHHSeleniumTest {

    @Test
    public void testGoHomeWarn() throws Exception {
        openFHH();
        selenium.click("changeLanguage_es");
        Thread.sleep(2000);
        importXMLFile("seleniumXML1.xml");
        selenium.click("warnAndGoHome");
        Thread.sleep(1000);
        String alertText = selenium.getConfirmation();
        Assert.assertTrue(alertText.contains("Si regresa ahora a la"));

        Thread.sleep(2000);
        Assert.assertTrue(selenium.isTextPresent("Preparar su historia familiar de salud"));
    }
}
