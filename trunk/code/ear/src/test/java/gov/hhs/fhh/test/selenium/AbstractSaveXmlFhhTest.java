package gov.hhs.fhh.test.selenium;

import gov.hhs.fhh.test.selenium.PersonalInformationConstants.Gender;
import gov.hhs.fhh.test.selenium.PersonalInformationConstants.Race;
import gov.hhs.fhh.test.selenium.PersonalInformationConstants.Twin;

public abstract class AbstractSaveXmlFhhTest extends AbstractFHHSeleniumTest {

    public AbstractSaveXmlFhhTest() {
        super();
    }

    protected void createFH() throws Exception {
        clickAndWaitForSubmodal("link=Create a Family Health History");
    	waitForText("Name");
    	Thread.sleep(2000);
    	PersonalInformationConstants.setName(PersonalInformationConstants.PERSON, selenium, "Test Family");
    	PersonalInformationConstants.setGender(PersonalInformationConstants.PERSON, selenium, Gender.MALE);
    	PersonalInformationConstants.setDateOfBirth(selenium, "12/11/1952");
    	PersonalInformationConstants.setTwinStatus(selenium,Twin.NO);
    	PersonalInformationConstants.setHeight(selenium, "5", "11");
    	
    	PersonalInformationConstants.setWeight(selenium, "200");
    	PersonalInformationConstants.setRace(selenium, Race.WHITE);
    	
    	clickAndWait("personForm_0");
    	selenium.type("familyTreeForm_brothers", "2");
    	selenium.type("familyTreeForm_sisters", "2");
    	selenium.type("familyTreeForm_sons", "2");
    	selenium.type("familyTreeForm_daughters", "2");
    	selenium.type("familyTreeForm_muncles", "2");
    	selenium.type("familyTreeForm_maunts", "2");
    	selenium.type("familyTreeForm_puncles", "2");
    	selenium.type("familyTreeForm_paunts", "2");
    	selenium.click("familyTreeNext");
    	
    		
    }

    protected void save() throws Exception {
        waitForText("Update");
        clickAndWaitForSubmodal("link=Save Family History");
        waitForText("save your family health history to your computer");
        clickAndWaitForSubmodal("link=Save to Computer");
    }

}