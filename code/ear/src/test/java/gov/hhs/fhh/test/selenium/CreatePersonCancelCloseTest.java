package gov.hhs.fhh.test.selenium;

import org.junit.Assert;
import org.junit.Test;

public class CreatePersonCancelCloseTest extends AbstractFHHSeleniumTest {

    @Test
    public void testCreatePersonCancel() throws InterruptedException {
        openFHH();
        clickAndWaitForSubmodal("createNew");
        Thread.sleep(4000);
        Assert.assertTrue(selenium.isTextPresent("Indicates required information"));
        selenium.click("cancelAndGoHome");
        Thread.sleep(4000);
        Assert.assertTrue(selenium.isTextPresent("Using My Family Health Portrait you can:"));
    }

    @Test
    public void testCreatePersonClose() throws InterruptedException {
        openFHH();
        selenium.click("createNew");
        Thread.sleep(4000);
        selenium.selectFrame("popupFrame");
        Assert.assertTrue(selenium.isTextPresent("Indicates required information"));
        selenium.selectFrame("relative=parent");
        selenium.click("popCloseBox");
        Thread.sleep(4000);
        
        Assert.assertTrue(selenium.isTextPresent("Using My Family Health Portrait you can:"));
    }

}
