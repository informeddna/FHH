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

import gov.hhs.fhh.test.selenium.PersonalInformationConstants.Gender;

import org.junit.Test;

import com.fiveamsolutions.nci.commons.util.NCICommonsUtils;

/**
 * Tests XSS Filter.
 * @author bpickeral
 */
public class XSSFilterTest extends AbstractFHHSeleniumTest {
    private static final String MALICIOUS_INPUT = "<body>test</body>";
    private static final String FILTERED_INPUT = "&lt;body&gt;test&lt;/body&gt;";
    private static final String PERSONAL_INFO = "Personal Information";
    
    @Test
    public void testMaliciousInput() throws Exception {
        openFHH();
        clickAndWaitForSubmodal("createNew");
        waitForText(PERSONAL_INFO);
        Thread.sleep(2000);
        
        // Add malicious data for proband
        editProband();
        
        // Add malicious data for a relative
        editRelative();
        
        // Check that page is rendered correctly for relative and proband      
        checkProband("4");
        checkRelative("4");
        
        // Check that Reindex and View Diagram pages load correctly
        // If the <body> tag does not get escaped, the assert text will not be present.
        checkNavAndDiagram();
    }
    
    private void editProband() {
        addMaliciousData(PersonalInformationConstants.PERSON);
        
        clickAndWait("personForm_0");
        clickAndWait("familyTreeNext");
        selectParentWindow();
        waitForText("Update My Family History");
    }
    
    private void editRelative() throws Exception {
        selenium.click("xpath=//table[@id='dataListing']/tbody/tr[2]/td[3]/a/img");
        Thread.sleep(2000);
        
        addMaliciousData(PersonalInformationConstants.RELATIVE);
        selenium.click("personForm_relative_livingStatusNO");
        selenium.select("personForm_causeOfDeath", "label=Other - Add New");
        waitForAjax();
        selenium.type("otherCOD", MALICIOUS_INPUT);
        selenium.select("personForm_relative_ageAtDeath", "label=In Infancy");
        clickAndWait("personForm_0");
        Thread.sleep(2000);
        selectParentWindow();
    }
    
    private void addMaliciousData(String personType) {
        PersonalInformationConstants.setName(personType, selenium, MALICIOUS_INPUT);
        PersonalInformationConstants.setGender(personType, selenium, Gender.MALE);
        PersonalInformationConstants.setDateOfBirth(selenium, "12/11/1952");
        selenium.select("selectedDiseasesSelectedItem", "label=Other - Add New");
        waitForAjax();
        selenium.type("otherDisease", MALICIOUS_INPUT);
        selenium.select("SelectedAge", "label=40-49 years");
        selenium.click("link=Add");
    }
    
    private void checkProband(String col) throws Exception {
        clickAndWaitForSubmodal("xpath=//table[@id='dataListing']/tbody/tr[4]/td[" + col + "]/a/img");
        waitForText(PERSONAL_INFO);
        assertEquals(FILTERED_INPUT, selenium.getValue("personForm_person_name"));
        assertTrue(selenium.isTextPresent(MALICIOUS_INPUT));
        selenium.click("cancelRelative");
        Thread.sleep(2000);
        selectParentWindow();
        waitForText("My Family Health History");
    }
    
    private void checkRelative(String col) throws Exception {
        clickAndWaitForSubmodal("xpath=//table[@id='dataListing']/tbody/tr[2]/td[" + col + "]/a/img");
        waitForText(PERSONAL_INFO);
        assertEquals(FILTERED_INPUT, selenium.getValue("personForm_relative_name"));
        assertEquals(FILTERED_INPUT, selenium.getValue("otherCOD"));
        assertTrue(selenium.isTextPresent(MALICIOUS_INPUT));
        selenium.click("cancelRelative");
        Thread.sleep(2000);
        selectParentWindow();
        waitForText("My Family Health History");
    }
    
    private void checkNavAndDiagram() throws Exception {
        selenium.click("navReindex");
        waitForText("Generate family health history for");
        
        selenium.click("navViewDiagram");
        Thread.sleep(2000);
        waitForText("Diagram");
        assertTrue(selenium.isTextPresent(MALICIOUS_INPUT));
    }
    
    @Test
    public void testImportMaliciousXML() throws Exception {
        openFHH();
        importXMLFile("XSS_filter_FamilyHistory.xml");
        waitForText("Update My Family History");
        assertTrue(selenium.isTextPresent(NCICommonsUtils.performXSSFilter(MALICIOUS_INPUT)));
        
        // Check that page is rendered correctly for relative and proband      
        checkProband("4");
        checkRelative("4");
        
        // Check that Reindex and View Diagram pages load correctly
        // If the <body> tag does not get escaped, the assert text will not be present.
        checkNavAndDiagram();
    }
    
    @Test
    public void testImportMaliciousHTM() throws Exception {
        openFHH();
        importXMLFile("XSS_Filter_HTM.htm");
        waitForText("Update My Family History");
        assertTrue(selenium.isTextPresent(NCICommonsUtils.performXSSFilter(MALICIOUS_INPUT)));
        
        // Check that page is rendered correctly for relative and proband      
        checkProband("3");
        checkRelative("3");
        
        // Check that Reindex and View Diagram pages load correctly
        // If the <body> tag does not get escaped, the assert text will not be present.
        checkNavAndDiagram();
    }
}
