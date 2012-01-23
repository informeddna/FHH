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

import gov.hhs.fhh.test.ear.TestProperties;
import gov.hhs.fhh.test.selenium.util.FHHTableRow;

import java.io.File;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import org.apache.log4j.Logger;

/**
 * @author bpickeral
 *
 */
public abstract class AbstractFHHSeleniumTest extends AbstractSeleniumTest {
    private final String DATA_TABLE_XPATH = "xpath=//table[@id='dataListing']/tbody/tr[%s]/td[%s]";
    private final String IMG_TD_XPATH = "//table[@id='dataListing']/tbody/tr[%s]/td[%s]";
    private final String IMG_XPATH = IMG_TD_XPATH + "/a/img";
    private static final Logger LOG = Logger.getLogger(AbstractFHHSeleniumTest.class);
    
    private final int FIRST_DATA_ROW = 2;
    
    protected void openFHH() {
        try {
            String url = "http://" + TestProperties.getServerHostname() + ":" + TestProperties.getServerPort()
                    + "/fhh-web";
            URL server = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) server.openConnection();
            connection.connect();
        } catch (MalformedURLException e) {
            LOG.error(e);
            fail(e.getMessage());
        } catch (IOException e) {
            LOG.error(e);
            fail(e.getMessage());
        }
        
        selenium.open("/fhh-web");
        waitForText("My Family Health Portrait");
        }
    
    protected void importXMLFile(String file) throws Exception {
        String filePath = (new File(ClassLoader.getSystemResource(file).toURI()).toString());
        clickAndWaitForSubmodal("loadExisting");
        waitForElementById("loadFromComputer");
        selenium.type("importedFile", filePath);
        clickAndWait("loadFromComputer");
      
        selectParentWindow();
        Thread.sleep(4000);
        }
    
    
    /**
     * Checks the Family Health History main table for the correct row values.
     * @param rowMap map of either names of relatives or relative types to FHHTableRow objects
     * @param mappedRowCol the column that the keys are mapped to (either name - 1 or relationship - 2)
     *   Note: relationship must be used if any names are blank, name must be used if there are multiple relatives
     *   of the same type
     * @param numImmediate number of immediate family members (My Family)
     * @param numPaternal number of Paternal relatives (My Father's)
     * @param numMaternal number of maternal relatives (My Mother's)
     */
    protected void checkFHHTable(Map<String, FHHTableRow> rowMap, String mappedRowCol, int numImmediate, 
            int numPaternal, int numMaternal) {
        for (Integer i = FIRST_DATA_ROW; i < numImmediate + FIRST_DATA_ROW; i++) {
            String currMapping = selenium.getText(String.format(DATA_TABLE_XPATH, i.toString(), mappedRowCol));
            FHHTableRow currRow = rowMap.get(currMapping);
            checkPersonInTable(currRow, i);
            currRow.setRownum(i);
        }
        
        int currStartRow = FIRST_DATA_ROW + numImmediate + 1;
        for (Integer i = currStartRow; i < currStartRow + numPaternal; i++) {
            String currMapping = selenium.getText(String.format(DATA_TABLE_XPATH, i.toString(), mappedRowCol));
            FHHTableRow currRow = rowMap.get(currMapping);
            checkPersonInTable(currRow, i);
            currRow.setRownum(i);
        }
        
        currStartRow += numPaternal + 1;
        
        for (Integer i = currStartRow; i < currStartRow + numMaternal; i++) {
            String currMapping = selenium.getText(String.format(DATA_TABLE_XPATH, i.toString(), mappedRowCol));
            FHHTableRow currRow = rowMap.get(currMapping);
            checkPersonInTable(currRow, i);
            currRow.setRownum(i);
        }
        
    }
    
    protected void checkPersonInTable(FHHTableRow fhhTableRow, Integer tableRow) {
        assertEquals(fhhTableRow.getName(), selenium.getText(String.format(DATA_TABLE_XPATH, tableRow.toString(), "1")));
        assertEquals(fhhTableRow.getRelationship(), selenium.getText(String.format(DATA_TABLE_XPATH, tableRow.toString(), "2")));
        checkImageInTable(tableRow, fhhTableRow.isEdited(), fhhTableRow.isRemovable());
    }
    
    private void checkImageInTable(Integer tableRow, boolean edited, boolean removable) {
        if (edited) {
            assertEquals("", selenium.getText(String.format(IMG_XPATH, tableRow.toString(), "4")));
            assertEquals("", selenium.getText(String.format(IMG_TD_XPATH, tableRow.toString(), "3")));
            assertEquals("", selenium.getText(String.format(IMG_TD_XPATH, tableRow.toString(), "5")));
        } else {
            assertEquals("", selenium.getText(String.format(IMG_XPATH, tableRow.toString(), "3")));
            assertEquals("", selenium.getText(String.format(IMG_TD_XPATH, tableRow.toString(), "4")));
            assertEquals("", selenium.getText(String.format(IMG_TD_XPATH, tableRow.toString(), "5")));
        }
        if (removable) {
            assertEquals("", selenium.getText(String.format(IMG_XPATH, tableRow.toString(), "5")));
            assertEquals("", selenium.getText(String.format(IMG_TD_XPATH, tableRow.toString(), "3")));
            assertEquals("", selenium.getText(String.format(IMG_TD_XPATH, tableRow.toString(), "4")));
        }
    }

   

    private void loginMHV() {
    	clickAndWaitForSubmodal("xpath=//div[@id='familyHistoryDetail']/div/a[2]");
    	assertTrue(selenium.isTextPresent("Healthvault Manager"));
    	clickAndWait("link=Healthvault Manager");
    	selenium.waitForPageToLoad("48000");
    	selenium.type("ctl00_cphMainBody_txtEmail", "qa5am@live.com");
    	selenium.click("xpath=//a[@id='ctl00_cphMainBody_btnContinue']/span");
    	selenium.waitForPageToLoad("48000");
    	selenium.type("i0118", "testing123");
    	selenium.click("i0011");
    	selenium.waitForPageToLoad("48000");
    	//Assert that the user is inside of Health Vault
    	assertTrue(selenium.isTextPresent("Learn more about HealthVault"));
    	
    }

    protected void checkFHHTable() {
        Map<String, FHHTableRow> rowMap = new HashMap<String, FHHTableRow>();
        rowMap.put("Father", new FHHTableRow("Father Name", "Father", true, false));
        rowMap.put("Mother", new FHHTableRow("", "Mother", true, false));
        rowMap.put("Self", new FHHTableRow("Proband Name", "Self", true, false));
        rowMap.put("Son", new FHHTableRow("", "Son", false, true));
        rowMap.put("Daughter", new FHHTableRow("", "Daughter", false, true));
        rowMap.put("(full) Brother", new FHHTableRow("", "(full) Brother", false, true));
        rowMap.put("(full) Sister", new FHHTableRow("", "(full) Sister", false, true));
        rowMap.put("Paternal Grandmother", new FHHTableRow("PGrandmother Name", "Paternal Grandmother", true, false));
        rowMap.put("Paternal Grandfather", new FHHTableRow("", "Paternal Grandfather", false, false));
        rowMap.put("Paternal Aunt", new FHHTableRow("", "Paternal Aunt", false, true));
        rowMap.put("Paternal Uncle", new FHHTableRow("", "Paternal Uncle", false, true));
        rowMap.put("Maternal Grandfather", new FHHTableRow("", "Maternal Grandfather", false, false));
        rowMap.put("Maternal Grandmother", new FHHTableRow("", "Maternal Grandmother", false, false));
        rowMap.put("Maternal Aunt", new FHHTableRow("", "Maternal Aunt", false, true));
        rowMap.put("Maternal Uncle", new FHHTableRow("", "Maternal Uncle", false, true));
        checkFHHTable(rowMap, "2", 7, 4, 4);
    }
    
    
  
}