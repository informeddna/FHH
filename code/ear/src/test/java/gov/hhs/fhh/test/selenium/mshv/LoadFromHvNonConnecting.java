package gov.hhs.fhh.test.selenium.mshv;

import gov.hhs.fhh.test.selenium.AbstractFHHSeleniumTest;
import junit.framework.Assert;

import org.junit.Test;

public class LoadFromHvNonConnecting extends AbstractFHHSeleniumTest {

    @Test
    public void testLoadFromHvNoConnect() throws Exception {
        openFHH();
        clickAndWaitForSubmodal("link=Open a Saved History File");
        Thread.sleep(1000);
        waitForText("Open From Computer");

        clickAndWait("loadFromMshv");
        Thread.sleep(1000);
        Assert.assertTrue(selenium.isTextPresent("Please note: Joining a Non-Federal Website"));

        clickAndWait("cancelButton");
        waitForText("You cancelled connecting to HealthVault.");
        Assert.assertTrue(selenium.isTextPresent("Open From Computer"));
    }

}
