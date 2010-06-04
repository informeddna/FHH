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
public class SaveDiagramTest extends AbstractFHHSeleniumTest {
	
	
	
    @Test
    public void testsavediagram() throws Exception {
        openFHH();
        CreateFSD();
        
        
   }
    
 //Create a family and save a diagram
    
    private void CreateFSD() throws Exception {
    	clickAndWait("link=Create a Family Health History");
    	waitForText("Name");
		Thread.sleep(2000);
		selenium.type("personForm_person_name", "test");
		selenium.click("personForm_person_genderMALE");
		selenium.type("personForm_dateOfBirthString", "02/01/1976");
		selenium.click("twinStatusNO");
		selenium.type("heightUnit1", "5");
		selenium.type("heightUnit2", "11");
		selenium.type("personForm_weightString", "100");
		selenium.click("selectedRaces-5");
		selenium.click("personForm_0");
		selenium.waitForPageToLoad("48000");
		selenium.type("familyTreeForm_brothers", "1");
		selenium.type("familyTreeForm_sisters", "1");
		selenium.type("familyTreeForm_sons", "1");
		selenium.type("familyTreeForm_daughters", "1");
		selenium.type("familyTreeForm_muncles", "1");
		selenium.type("familyTreeForm_maunts", "1");
		selenium.type("familyTreeForm_puncles", "1");
		selenium.type("familyTreeForm_paunts", "1");
		selenium.click("familyTreeNext");
		waitForText("My Family");
		Thread.sleep(2000);
        selenium.click("//form[@id='personForm']/div[1]/a[3]");
		waitForText("Table");
		Thread.sleep(2000);
		selenium.click("xpath=//div[@id='viewReportDetail']/div[3]/a[2]");
		Thread.sleep(2000);
		selenium.click("showChart");
		selenium.click("submitReportOptions");
		selenium.selectWindow("title=My Family Health Portrait");
		selenium.click("link=Print History");
	}
        
}
