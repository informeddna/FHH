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
public class OpenHistoryTest extends AbstractFHHSeleniumTest {
    private final String DATA_TABLE_XPATH = "xpath=//table[@id='dataListing']/tbody/tr[%s]/td[5]/a/img";

    @Test
    public void testImportBasicFamily() throws Exception {
        openFHH();
        importXMLFile("seleniumXML1.xml");
        checkFHHTable();
        checkEthnicities();
        AddRel();
    }

    @Test
    public void testImportAndCancel() throws Exception {
        openFHH();
        String filePath = ("mooo");
        clickAndWaitForSubmodal("link=Use a Saved History");
        waitForElementById("loadFromComputer");
        selenium.type("importedFile", filePath);
        clickAndWait("cancelButton");

        selectParentWindow();
        waitForText("Using My Family Health Portrait you can");

    }

    @Test
    public void testShowInstructions() throws Exception {
        openFHH();
        clickAndWaitForSubmodal("link=Use a Saved History");
        waitForText("Open From Computer");
        selenium.click("showHelp");
        Thread.sleep(1000);
        assertTrue(selenium.isVisible("howtoopen"));

    }

    private void checkEthnicities() throws InterruptedException {
        // father - ethnicity pulled in from code/codesystemname
        clickAndWaitForSubmodal("xpath=//table[@id='dataListing']/tbody/tr[2]/td[4]/a/img");
        Thread.sleep(1000);
        assertTrue(selenium.isChecked("selectedEthnicities-1"));
        assertTrue(selenium.isChecked("selectedRaces-1"));
        clickAndWait("personForm_0");
        Thread.sleep(1000);
        selectParentWindow();
        assertTrue(selenium.isTextPresent("My Family Health History"));

        // self - id present, using that.
        clickAndWaitForSubmodal("xpath=//table[@id='dataListing']/tbody/tr[4]/td[4]/a/img");
        Thread.sleep(1000);
        assertTrue(selenium.isChecked("selectedEthnicities-1"));
        assertTrue(selenium.isChecked("selectedRaces-1"));
        clickAndWait("personForm_0");
        Thread.sleep(1000);
        selectParentWindow();
        assertTrue(selenium.isTextPresent("My Family Health History"));

        // pgmother, no id, no matching code/codesystemname ethnicity.
        clickAndWaitForSubmodal("xpath=//table[@id='dataListing']/tbody/tr[11]/td[4]/a/img");
        Thread.sleep(1000);
        assertFalse(selenium.isChecked("selectedEthnicities-1"));
        assertFalse(selenium.isChecked("selectedRaces-1"));
        clickAndWait("personForm_0");
        Thread.sleep(1000);
        selectParentWindow();
        assertTrue(selenium.isTextPresent("My Family Health History"));
    }

    // This function adds a relative, selects the relatives parent, Saves and checks relatives information
    private void AddRel() throws Exception {
        clickAndWaitForSubmodal("link=Add Another Family Member");
        waitForText("Add an Individual Family Member");
        selenium.select("relativeForm_selectedCode", "value=NIECE");
        waitForText("Who is the parent of your");
        waitForElementById("relativeForm_parent", 5);
        selenium.select("relativeForm_parent", "value=00000006-0006-0006-0006-000000000006");
        selenium.click("submitRelative");
        waitForText("Personal Information");
        selenium.type("personForm_relative_name", "Myniece");
        selenium.click("personForm_relative_livingStatusUNKNOWN");
        selenium.click("twinStatusNO");
        selenium.click("selectedRaces-3");
        selenium.click("selectedEthnicities-3");
        clickAndWait("personForm_0");
        Thread.sleep(1000);
        selectParentWindow();
        waitForText("Update My Family History");
        clickAndWaitForSubmodal("xpath=//table[@id='dataListing']/tbody/tr[8]/td[4]/a/img");
        selenium.select("selectedDiseasesSelectedItem", "label=High Cholesterol");
        selenium.select("SelectedAge", "label=In Infancy");
        selenium.click("link=Add");
        waitForText("Remove");
        clickAndWait("personForm_0");
        Thread.sleep(1000);
        selectParentWindow();
        waitForText("Update My Family History");
        clickAndWaitForSubmodal("xpath=//table[@id='dataListing']/tbody/tr[8]/td[4]/a/img");
    }

    // Delete a relative
    private void deleteRelatives() {
        String deletedRelative = selenium
                .getText("xpath=//table[@id='dataListing']/tbody/tr[5]/td[2]/table/tbody/tr/td[2]");
        clickAndWait("xpath=//table[@id='dataListing']/tbody/tr[5]/td[5]/a/img");
        assertFalse(selenium.isTextPresent(deletedRelative));
        selectParentWindow();
        assertTrue(selenium.isTextPresent("My Family Health History"));
    }
}
