package gov.hhs.fhh.test.selenium;

import java.io.File;

public class LoadHtmFileTest extends AbstractFHHSeleniumTest {

    public void testloadlegacy() throws Exception {
        openFHH();
        importHTMFile("Basic_HTM_Test.htm");
    }

    // Call Load HTM file and check that all data appears
    private void importHTMFile(String file) throws Exception {
        String filePath = (new File(ClassLoader.getSystemResource(file).toURI()).toString());
        clickAndWaitForSubmodal("loadExisting");
        assertTrue(selenium.isTextPresent("Open From Computer"));
        selenium.type("importedFile", filePath);
        clickAndWait("loadFromComputer");

        Thread.sleep(2000);
        // Check that the file has been loaded into FHH
        assertTrue(selenium.isTextPresent(("My Family Health History")));
        assertTrue(selenium.isTextPresent(("Father Name")));
        assertTrue(selenium.isTextPresent(("Mother Name")));
        assertTrue(selenium.isTextPresent(("My Name")));
        assertTrue(selenium.isTextPresent(("dauter2 Name")));
        assertTrue(selenium.isTextPresent(("Paternal Grandfather Name")));
        assertTrue(selenium.isTextPresent(("Paternal Grandmother Name")));
        assertTrue(selenium.isTextPresent(("Maternal Grandfather Name")));
        assertTrue(selenium.isTextPresent(("Maternal Grandmother Name")));
        assertTrue(selenium.isTextPresent(("mothersSister2 Name")));
        assertTrue(selenium.isTextPresent(("mothersSister1 Name")));
        assertTrue(selenium.isTextPresent(("maleCousin1 Name")));
    }

}
