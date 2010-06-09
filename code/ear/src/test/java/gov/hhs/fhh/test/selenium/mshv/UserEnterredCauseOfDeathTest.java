package gov.hhs.fhh.test.selenium.mshv;

import gov.hhs.fhh.test.selenium.AbstractHvTest;
import junit.framework.Assert;

import org.junit.Test;

public class UserEnterredCauseOfDeathTest extends AbstractHvTest{

    
    @Test
    public void testUserDefinedCodSaveToHv() throws Exception{
        openFHH();
        openFileAndSaveToHv("DeceasedFatherUserEnterredCod_FamilyHistory.xml");
    }
    
    @Test
    public void testUserDefinedCodLoadFromHv() throws InterruptedException{
        openFHH();
        prepareLoadFromMSHV();

        clickAndWait("openPedigreeFromMSHV");
        waitForText("Update My Family History");
        
        selenium.click("//table[@id='dataListing']/tbody/tr[2]/td[4]/a/img");
        Thread.sleep(2000);
        selenium.selectFrame("popupFrame");
        Thread.sleep(2000);
        String causeOfDeath = selenium.getValue("otherCOD");
        Assert.assertEquals("MOOOOOOOOOOOOOOOOOO", causeOfDeath);
    }
}
