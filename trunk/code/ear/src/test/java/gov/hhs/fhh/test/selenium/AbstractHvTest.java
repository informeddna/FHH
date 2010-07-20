package gov.hhs.fhh.test.selenium;

import gov.hhs.fhh.test.ear.TestProperties;
import junit.framework.Assert;

public abstract class AbstractHvTest extends AbstractFHHSeleniumTest {

    
    protected void openFileAndSaveToHv(String fileName) throws Exception{
        importXMLFile(fileName);
        clickAndWaitForSubmodal("save_history");
        waitForText("Save Family Health History Information");
        clickAndWait("save_to_hv");
        waitForText("Please note: Joining a Non-Federal ");
        
        clickAndWait("continue");
        Thread.sleep(4000);

        loginToMshv();
        
        selenium.selectFrame("popupFrame");
        
        Assert.assertTrue(selenium.isTextPresent(TestProperties.getHvUserDisplayName()));
        selenium.click("save");
        
        waitForText("Copy Successful");
        Assert.assertTrue(selenium.isTextPresent(TestProperties.getHvUserDisplayName()));
        clickAndWait("continue");
        selectParentWindow();
        waitForText("My Family Health History");
    }
    
    protected void loginToMshv() throws InterruptedException {
        if (selenium.isTextPresent("My Family Health Portrait requires a free HealthVault account")) {
            selenium.click("ctl00_cphMainBody_continueButton");
            Thread.sleep(10000);
            if (selenium.isElementPresent("i1668")) {
                selenium.click("i1668");
                Thread.sleep(5000);
            }
        }
        
        selenium.type("i0116", TestProperties.getHVUserEmail());
        selenium.type("i0118", TestProperties.getHVUserPW());
        clickAndWait("idSIButton9");
        Thread.sleep(15000);
    }
    
    protected void prepareLoadFromMSHV() throws InterruptedException {
        openFHH();
        clickAndWaitForSubmodal("link=Use a Saved History");
        waitForText("Open From Computer");

        clickAndWait("loadFromMshv");
        Thread.sleep(1000);
        waitForText("Non-Federal Website");

        clickAndWait("loadFromMshv");
        Thread.sleep(6000);
        loginToMshv();
        waitForFrameAndSelectIt("popupFrame");
        Assert.assertTrue(selenium.isTextPresent(TestProperties.getHvUserDisplayName()));
        Assert.assertTrue(selenium.isTextPresent("information below will be copied from HealthVault"));
    }
}
