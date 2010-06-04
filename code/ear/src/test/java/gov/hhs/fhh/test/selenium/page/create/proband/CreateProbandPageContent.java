package gov.hhs.fhh.test.selenium.page.create.proband;

import gov.hhs.fhh.test.selenium.page.Content;
import gov.hhs.fhh.test.selenium.page.create.Gender;
import gov.hhs.fhh.test.selenium.page.create.Race;
import gov.hhs.fhh.test.selenium.page.create.Twin;

public class CreateProbandPageContent implements Content {

    /**
     * @return
     */
    private String getTwinStatusIdentical() {
        return "twinStatusIDENTICAL";
    }

    /**
     * @return
     */
    private String getTwinStatusFraternal() {
        return "twinStatusFRATERNAL";
    }

    /**
     * @return
     */
    private String getTwinStatusNo() {
        return "twinStatusNO";
    }

    public String getName() {
        return "personForm_person_name";
    }
    
    public String getPageTitle() {
        return "Name";
    }

    /**
     * @return
     */
    private String getGenderFemale() {
        return "personForm_person_genderFEMALE";
    }

    /**
     * @return
     */
    private String getGenderMale() {
        return "personForm_person_genderMALE";
    }

    public String getDateOfBirth() {
        return "personForm_dateOfBirthString";
    }

    public String getFeet() {
        return "heightUnit1";
    }

    public String getInches() {
        return "heightUnit2";
    }

    public String getWeight() {
        return "personForm_weightString";
    }

    private String getRaceWhite() {
        return "selectedRaces-5";
    }

    final public String getRace(Race race) {
        String text = null;
        if (race != null) {
            switch (race) {
            case WHITE:
                text = getRaceWhite();
                break;
            }
        }
        return text;

    }

    final public String getGender(Gender gender) {
        String text = null;
        if (gender != null) {
            switch (gender) {
            case MALE:
                text = getGenderMale();
                break;
            case FEMALE:
                text = getGenderFemale();

                break;
            }
        }
        return text;
    }

    final public String getTwinStatusText(Twin status) {
        String text = null;
        switch (status) {
        case NO:
            text = getTwinStatusNo();
            break;
        case FRATERNAL:
            text = getTwinStatusFraternal();
            break;
        case IDENTICAL:
            text = getTwinStatusIdentical();
            break;
        }
        return text;
    }

    

}
