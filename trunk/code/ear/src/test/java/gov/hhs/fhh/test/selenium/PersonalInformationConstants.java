package gov.hhs.fhh.test.selenium;

import com.thoughtworks.selenium.Selenium;

public class PersonalInformationConstants {
    
    public static final String DOB_ID = "personForm_dateOfBirthString";
    public static final String PERSON = "person";
    public static final String RELATIVE = "relative";
    
    enum Twin {
        NO, FRATERNAL, IDENTICAL;
    }
    
    enum Gender {
        MALE, FEMALE;
    }
    
    enum Race {
        WHITE;
    }
    
    static public void setTwinStatus(Selenium selenium, Twin status) {
        switch (status) {
        case NO : 
               selenium.click("twinStatusNO");
               break;
        case FRATERNAL:
                selenium.click("twinStatusFRATERNAL");
                break;
        case IDENTICAL:   
              selenium.click("twinStatusIDENTICAL");
              break;
        }
    }
    
    static public void setName(String personType, Selenium selenium, String name) {
        if (name != null) {
            selenium.type("personForm_" + personType + "_name", name);
        }
    }
    
    static public void setGender(String personType, Selenium selenium, Gender gender) {
        if ( gender != null) {
            switch(gender) {
            case MALE:
                selenium.click("personForm_" + personType + "_genderMALE");
              break;
            case FEMALE:
                selenium.click("personForm_" + personType + "_genderFEMALE");
                
              break;
            }
        }
    }

    public static void setDateOfBirth(Selenium selenium, String dob) {
        if ( dob != null ) {
            selenium.type("personForm_dateOfBirthString", dob);    
        }
    }

    public static void setHeight(Selenium selenium, String feet, String inches) {
        if ( feet != null ) {
            selenium.type("heightUnit1", feet);
        }
        
        if ( inches != null ) {
            selenium.type("heightUnit2", inches);
        }
        
    }

    public static void setWeight(Selenium selenium, String weight) {
        if ( weight != null ) {
            selenium.type("personForm_weightString", weight);
        }
    }

    public static void setRace(Selenium selenium, Race race) {
        if (race != null ) {
            switch(race) {
            case WHITE:
                selenium.click("selectedRaces-5");
                break;
            }
        }
        
    }
    
   
    
    

}
