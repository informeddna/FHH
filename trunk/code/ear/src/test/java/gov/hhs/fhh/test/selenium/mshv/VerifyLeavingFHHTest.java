package gov.hhs.fhh.test.selenium.mshv;

import gov.hhs.fhh.test.selenium.AbstractSaveXmlFhhTest;
import junit.framework.Assert;

import org.junit.Test;

public class VerifyLeavingFHHTest extends AbstractSaveXmlFhhTest {

    @Test
    public void testLeavingFhhPage() throws Exception {
        openFHH();
        createFH();
        waitForText("Update");
        clickAndWaitForSubmodal("link=Save Family History");
        selenium.click("save_to_hv");
        Thread.sleep(3000);
        Assert.assertTrue(selenium.isTextPresent("Joining a Non-Federal"));
        selenium.click("link=Cancel");
        Thread.sleep(3000);

        Assert.assertTrue(selenium.isTextPresent("Save to Computer"));
    }

}
