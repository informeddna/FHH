package gov.hhs.fhh.test.selenium;

import org.junit.Assert;
import org.junit.Test;

public class AddRemoveUserEnterredConditionTest extends AbstractFHHSeleniumTest {

    @Test
    public void testAddRemoveUserEnterredCondition() throws Exception {
        openFHH();
        importXMLFile("Proband_RelativeCondition_FamilyHistory.xml");
        selenium.click("//table[@id='dataListing']/tbody/tr[2]/td[4]/a/img");
        selenium.selectFrame("popupFrame");
        Thread.sleep(3000);
        Assert.assertEquals("User-entered condition1", selenium.getTable("healthHistoryTableList.1.0"));
        Assert.assertEquals("Septicemia", selenium.getTable("healthHistoryTableList.2.0"));
        Assert.assertEquals("User-entered condition2", selenium.getTable("healthHistoryTableList.3.0"));
        Assert.assertEquals("Asthma", selenium.getTable("healthHistoryTableList.4.0"));
        selenium
                .click("//a[@onclick=\"ItemSelectorUtils.removeItemFromList('selectedDiseases', '16THIRTIESUser-entered condition2');\"]");
        Thread.sleep(1000);
        selenium.click("personForm_0");
        selenium.selectFrame("relative=parent");
        Thread.sleep(1000);
        selenium.click("//table[@id='dataListing']/tbody/tr[2]/td[4]/a/img");
        selenium.selectFrame("popupFrame");
        Thread.sleep(1000);
        Assert.assertEquals("User-entered condition1", selenium.getTable("healthHistoryTableList.1.0"));
        Assert.assertEquals("Septicemia", selenium.getTable("healthHistoryTableList.2.0"));
        Assert.assertEquals("Asthma", selenium.getTable("healthHistoryTableList.3.0"));
        
        selenium.click("cancelRelative");
        selenium.selectFrame("relative=parent");
        waitForText("Update My Family History");
    }

}
