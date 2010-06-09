package gov.hhs.fhh.test.selenium.mshv;

import gov.hhs.fhh.test.ear.TestProperties;
import gov.hhs.fhh.test.selenium.AbstractHvTest;
import junit.framework.Assert;

import org.junit.Test;

public class HealthVaultSaveAndLoadTest extends AbstractHvTest {

    @Test
    public void test1SaveToHV() throws Exception {
        openFHH();
        importXMLFile("MSHVTestImport.xml");
        loginMHV();
    }
    
    // Log into Microsoft Health Vault from Family Health History
    private void loginMHV() throws InterruptedException {
        clickAndWaitForSubmodal("save_history");
        waitForText("Save Family Health History Information");
        clickAndWait("cancel");
        selectParentWindow();
        clickAndWaitForSubmodal("save_history");
        waitForText("Save Family Health History Information");
        clickAndWait("save_to_hv");
        waitForText("Please note: Joining a Non-Federal ");
        clickAndWait("cancel");
        waitForElementById("save_step1");
        waitForText("Your family health history information has not been saved.");
        clickAndWait("save_to_hv");
        waitForText("Please note: Joining a Non-Federal ");
        clickAndWait("continue");
        Thread.sleep(4000);

        loginToMshv();

        selenium.selectFrame("popupFrame");
        // Assert that the user is inside of Health Vault
        waitForElementById("cancel");
        clickAndWait("cancel");
        waitForText("Your family health history information has not been saved.");
        clickAndWait("save_to_hv");
        selenium.click("continue");
        Thread.sleep(5000);
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

    @Test
    public void test2ImportFromMshv() throws InterruptedException {
        prepareLoadFromMSHV();

        clickAndWait("openPedigreeFromMSHV");
        waitForText("Update My Family History");
    }

    @Test
    public void test3PreviewFromMshvAndCancel() throws InterruptedException {
        prepareLoadFromMSHV();

        clickAndWait("cancelButton");
        waitForText("Open From Computer");
    }
}
