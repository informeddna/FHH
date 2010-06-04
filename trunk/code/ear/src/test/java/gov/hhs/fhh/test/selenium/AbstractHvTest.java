package gov.hhs.fhh.test.selenium;

import gov.hhs.fhh.test.TestProperties;
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
        
        Thread.sleep(5000);
        Assert.assertTrue(selenium.isTextPresent("Copy Successful"));
        Assert.assertTrue(selenium.isTextPresent(TestProperties.getHvUserDisplayName()));
        clickAndWait("continue");
        selectParentWindow();
        waitForText("My Family Health History");
    }
    
    protected void loginToMshv() throws InterruptedException {
        // Try to enter email address if site doesn't recognize user.
        if (selenium.isTextPresent("Enter your e-mail address")) {
            selenium.type("ctl00_cphMainBody_txtEmail", TestProperties.getHVUserEmail());
            clickAndWait("xpath=//a[@id='ctl00_cphMainBody_btnContinue']/div[2]");
        }
        selenium.type("i0116", TestProperties.getHVUserEmail());
        selenium.type("i0118", TestProperties.getHVUserPW());
        clickAndWait("i0011");
        Thread.sleep(9000);
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
