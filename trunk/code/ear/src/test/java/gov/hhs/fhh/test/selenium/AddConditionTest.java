/**
 * 
 * Family Health History Portal 
 * END USER AGREEMENT
 * 
 * The U.S. Department of Health & Human Services ("HHS") hereby irrevocably 
 * grants to the user a non-exclusive, royalty-free right to use, display, 
 * reproduce, and distribute this Family Health History portal software 
 * (the "software") and prepare, use, display, reproduce and distribute 
 * derivative works thereof for any commercial or non-commercial purpose by any 
 * party, subject only to the following limitations and disclaimers, which 
 * are hereby acknowledged by the user.  
 * 
 * User agrees that it will not degrade the standards-based format of the software 
 * by materially altering the program architecture or data structure in a way 
 * that would render the data generated by the altered software incompatible 
 * with the original software. The intention of this clause is to ensure the 
 * long-term interoperability of family history information gathered by different 
 * versions of the tool.
 * 
 * User agrees that this END USER AGREEMENT will be provided to any party to 
 * whom user distributes the software, and that it will apply to the distributee.
 * 
 * User agrees that it will not use the HHS or Surgeon General logo or any HHS 
 * trademarks without permission from HHS, and will not imply endorsement of 
 * its product by HHS or the Surgeon General.
 * 
 * THIS SOFTWARE IS PROVIDED TO USER WITH NO WARRANTIES, EXPRESS OR IMPLIED, 
 * INCLUDING ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, 
 * OR THAT THE USE OF THE SOFWARE WILL NOT INFRINGE ANY PATENT, COPYRIGHT, 
 * TRADEMARK OR OTHER PROPRIETARY RIGHTS.
 * 
 */
package gov.hhs.fhh.test.selenium;

import org.junit.Test;

/**
 * @author kelamin
 * 
 * 
 * 
 * 
 */
public class AddConditionTest extends AbstractFHHSeleniumTest {

    @Test
    public void testAddCondition() throws Exception {
        openFHH();
        importXMLFile("seleniumXML1.xml");
        AddDconditions();
    }

    // Add multiple conditions and delete multiple conditions
    private void AddDconditions() throws Exception {
        clickAndWaitForSubmodal("xpath=//table[@id='dataListing']/tbody/tr[11]/td[4]/a/img");
        // Add conditions
        selenium.select("selectedDiseasesSelectedItem", "label=Dementia/Alzheimer's");
        selenium.select("SelectedAge", "label=60 years and older");
        selenium.click("link=Add");
        Thread.sleep(2000);
        selenium.select("selectedDiseasesSelectedItem", "label=Lung Disease (more options...)");
        // Wait for Ajax for to load
        waitForAjax();
        Thread.sleep(2000);
        selenium.select("selectedSubType", "value=35");
        selenium.select("SelectedAge", "label=50-59 years");
        selenium.click("link=Add");
        selenium.select("selectedDiseasesSelectedItem", "label=Other - Add New");
        waitForAjax();
        selenium.type("otherDisease", "Aids");
        selenium.select("SelectedAge", "label=40-49 years");
        selenium.click("link=Add");
        clickAndWait("personForm_0");
        waitForText("Update My Family History");
        selenium.click("xpath=//table[@id='dataListing']/tbody/tr[11]/td[4]/a/img");
        waitForText("Name");
        Thread.sleep(2000);
        // Validate the disease are present
        waitForFrameAndSelectIt("popupFrame");
        assertTrue(selenium.isTextPresent("Dementia/Alzheimer's"));
        assertTrue(selenium.isTextPresent("60 years and older"));
        assertTrue(selenium.isTextPresent("Asthma"));
        assertTrue(selenium.isTextPresent("50-59 years"));
        assertTrue(selenium.isTextPresent("Aids"));
        assertTrue(selenium.isTextPresent("40-49 years"));
        selenium.click("personForm_0");
        Thread.sleep(2000);
        waitForText("Update My Family History");
        selenium.click("xpath=//table[@id='dataListing']/tbody/tr[11]/td[4]/a/img");
        Thread.sleep(2000);
        waitForText("Name");
        // Remove added diseases
        selenium.click("link=Remove");
        selenium.click("personForm_0");
        Thread.sleep(2000);
        selenium.waitForPageToLoad("48000");
        selenium.click("xpath=//table[@id='dataListing']/tbody/tr[11]/td[4]/a/img");
        Thread.sleep(2000);
        selenium.waitForPageToLoad("48000");
        waitForFrameAndSelectIt("popupFrame");
        selenium.click("link=Remove");
        selenium.click("personForm_0");
        Thread.sleep(2000);
        selenium.waitForPageToLoad("48000");
        selenium.click("xpath=//table[@id='dataListing']/tbody/tr[11]/td[4]/a/img");
        Thread.sleep(2000);
        selenium.waitForPageToLoad("48000");
        waitForFrameAndSelectIt("popupFrame");
        selenium.click("link=Remove");
        selenium.click("personForm_0");
        Thread.sleep(2000);
        waitForText("Update My Family History");
        selenium.click("xpath=//table[@id='dataListing']/tbody/tr[11]/td[4]/a/img");
        selenium.waitForPageToLoad("48000");
        // Validate diseases have been removed
        assertFalse(selenium.isTextPresent("Aids"));
        assertFalse(selenium.isTextPresent("Dementia/Alzheimer's"));
        assertFalse(selenium.isTextPresent("Asthma"));
        clickAndWait("personForm_0");
        Thread.sleep(2000);
        selectParentWindow();
        assertTrue(selenium.isTextPresent("My Family Health History"));
    }
}
