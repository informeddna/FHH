package gov.hhs.fhh.test.selenium;

import org.junit.Assert;
import org.junit.Test;

public class UnknownDiseaseTest extends AbstractFHHSeleniumTest {

    @Test
    public void testOpenUnknownDiseaseFile() throws Exception {
        openFHH();
        importXMLFile("unknown_Disease_Prod_FamilyHistory.xml");

        selenium.click("//table[@id='dataListing']/tbody/tr[4]/td[4]/a/img");
        selenium.selectFrame("popupFrame");
        Thread.sleep(2000);

        Assert.assertEquals("Unknown Disease", selenium.getTable("healthHistoryTableList.1.0"));
    }

}
