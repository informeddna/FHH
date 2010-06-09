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
public class FHHChangeLanguageTest extends AbstractFHHSeleniumTest {
	
    @Test
    public void testChangeLanguage() throws Exception {
        openFHH();
        ChangeLanguage();
       }

        

   //This function changes the language of the site and asserts that the language has been changed
   private void ChangeLanguage() throws Exception {
	   	selenium.selectWindow("title=My Family Health Portrait - Welcome");
	   	waitForText("Using My");
		Thread.sleep(2000);
		selenium.click("xpath=//div[2]/table/tbody/tr/td[1]/div[3]/a");
		selenium.waitForPageToLoad("48000");
		waitForText("Preparar su historia familiar de salud");
		selenium.click("link=Crear una historia familiar de salud");
		selenium.waitForPageToLoad("48000");
		waitForText("Nombre");
		selenium.click("popCloseBox");
		waitForText("Preparar su historia familiar de salud");
		//these can not occur anymore due to user getting sent back to the home page after cancelling creating a family history.
//		selenium.click("navReindex");
//		selenium.waitForPageToLoad("48000");
//		waitForText("Usted puede");
//		selenium.click("navViewDiagram");
//		selenium.waitForPageToLoad("48000");
//		waitForText("Usted puede");
   }
    
    

    
    
}