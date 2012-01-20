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
package gov.hhs.fhh.web.action;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Ethnicity;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Race;
import gov.hhs.fhh.data.UserEnteredDisease;
import gov.hhs.fhh.data.util.DiseaseUtils;
import gov.hhs.fhh.data.util.FhhDataUtils;
import gov.hhs.fhh.data.util.FormatUtils;
import gov.hhs.fhh.service.PersonServiceLocal;
import gov.hhs.fhh.service.PersonServiceStub;
import gov.hhs.fhh.service.locator.FhhRegistry;
import gov.hhs.fhh.web.test.AbstractFhhWebTest;
import gov.hhs.fhh.web.test.MockServiceLocator;
import gov.hhs.fhh.web.util.FhhHttpSessionUtil;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import org.junit.Test;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.mfhp.Gender;
import com.fiveamsolutions.hl7.model.mfhp.Height;
import com.fiveamsolutions.hl7.model.mfhp.HeightUnit;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;

/**
 * @author bpickeral
 *
 */
public class AddPersonActionTest extends AbstractFhhWebTest {
	private final AddPersonAction action = new AddPersonAction();
	private final Weight DUMMY_WEIGHT = new Weight(180, WeightUnit.US);
	private final Height DUMMY_HEIGHT = new Height(60, HeightUnit.US);
	private final String DUMMY_NAME = "Name";
	private final String MIN_HEX = "80000000";
	private final String SUCCESS = "success";
	private final String FAMILY_TREE_ACTION = "addFamilyTree";
	private final String SUBMIT_ACTION = "submit";
	private final String INPUT_ACTION = "input";
	private final boolean TRUE = true;

	private final Gender DUMMY_GENDER = Gender.MALE;
	private final UserEnteredDisease DUMMY_DISEASE = new UserEnteredDisease();
	private final UserEnteredDisease DUMMY_DISEASE2 = new UserEnteredDisease();
	private final String DUMMY_DISEASE_VALUE = "current";
	private static final String OTHER_DISEASE = "Other Disease type";
	private static final String NOT_OTHER_DISEASE = "";
	private static final String DUMMY_DISEASE2_ORG_TEXT = "User entered disease";
	private static final String DOB_STRING = "01/01/1970";
	private final Ethnicity DUMMY_ETHNICITY = new Ethnicity();
	private final Race DUMMY_RACE = new Race();
	private final Date DUMMY_DATE = new Date();
	private final String INVALID_INT = "invalid";

	@Test
    public void testPrepare() throws Exception {
	    DUMMY_DISEASE2.setDisplayName(OTHER_DISEASE);
        DUMMY_DISEASE2.setCode(DiseaseUtils.DIABETES_CODE);
        DUMMY_DISEASE.setCode(null);
        DUMMY_DISEASE.setOriginalText(DUMMY_DISEASE2_ORG_TEXT);

	    // Test prepare with no person set in session
	    assertNull(action.getPerson());
	    action.prepare();
	    assertNull(action.getPerson());

	    // Test prepare with person in session without observations
	    Person p = new Person();
	    p.setName(DUMMY_NAME);
	    p.setDateOfBirth(DUMMY_DATE);
	    p.setWeight(DUMMY_WEIGHT);
	    p.setHeight(DUMMY_HEIGHT);
	    p.setGender(DUMMY_GENDER);
	    p.setEthnicities(new ArrayList<Ethnicity>());
	    p.getEthnicities().add(DUMMY_ETHNICITY);
	    p.setRaces(new ArrayList<Race>());
	    p.getRaces().add(DUMMY_RACE);
	    FhhHttpSessionUtil.getSession().setAttribute(MIN_HEX, p);
	    FhhHttpSessionUtil.getSession().setAttribute(FhhHttpSessionUtil.ROOT_KEY, MIN_HEX);

		action.prepare();

		assertEquals(DUMMY_NAME, action.getPerson().getName());
		assertEquals(DUMMY_DATE.toString(), action.getPerson().getDateOfBirth().toString());
		assertEquals(DUMMY_WEIGHT, action.getPerson().getWeight());
		assertEquals(DUMMY_HEIGHT, action.getPerson().getHeight());
        assertEquals(DUMMY_GENDER, action.getPerson().getGender());
        assertEquals(DUMMY_ETHNICITY, action.getPerson().getEthnicities().get(0));
        assertEquals(DUMMY_RACE, action.getPerson().getRaces().get(0));
        assertEquals(0, action.getPerson().getObservations().size());
        // Legacy warning message should not exist
        assertTrue(action.getLegacyWarningDiseases().isEmpty());

        // Test prepare with person containing observations
        List<ClinicalObservation> observations = new ArrayList<ClinicalObservation>();
        ClinicalObservation obs = new ClinicalObservation();
        ClinicalObservation obs2 = new ClinicalObservation();
        ClinicalObservation obs3 = new ClinicalObservation();
        obs.setDisease(DUMMY_DISEASE);
        obs.setAgeRange(AgeRangeEnum.THIRTIES);
        // Set one of the conditions as an unrecognized condition from legacy import
        obs2.setDisease(DUMMY_DISEASE2);
        obs2.setAgeRange(AgeRangeEnum.FIFTIES);
        obs2.setUnmatchedCondition(true);
        obs3.setDisease(DUMMY_DISEASE);
        obs3.setAgeRange(AgeRangeEnum.FIFTIES);
        obs3.setUnmatchedCondition(true);
        p.setUnmatchedCondition(true);
        observations.add(obs);
        observations.add(obs2);
        observations.add(obs3);
        p.setObservations(observations);
        // Case with no DOB
        p.setDateOfBirth(null);
        action.setDateOfBirthString(null);
        action.prepare();

        // Check Disease values
        assertEquals(DUMMY_DISEASE, action.getPerson().getObservations().get(0).getDisease());
        assertEquals(AgeRangeEnum.THIRTIES, action.getPerson().getObservations().get(0).getAgeRange());
        assertEquals(DUMMY_DISEASE2, action.getPerson().getObservations().get(1).getDisease());
        assertEquals(AgeRangeEnum.FIFTIES, action.getPerson().getObservations().get(1).getAgeRange());
        // Check other disease values
        assertEquals(DUMMY_DISEASE2_ORG_TEXT, action.getOtherDiseaseValues().get(0));
        //assertEquals(NOT_OTHER_DISEASE, action.getOtherDiseaseValues().get(1));
        // Legacy warning messages should exist
        assertTrue(action.getLegacyWarningDiseases().size() == 2);
        // DOB should not exist
        assertNull(action.getDateOfBirthString());
    }

	@Test
    public void testAddPerson() {
	    assertEquals(SUCCESS, action.addPerson());
	}
	@Test
    public void testSelectRelative() {
	    assertEquals(SUCCESS, action.selectRelative());
	}
	
	@Test
    public void testSubmitPersonValidateDOB() throws Exception{
	    // Test submit with DOB set
	    action.setPerson(new Person());
	    action.getPerson().setGender(DUMMY_GENDER);
	    action.setDateOfBirthString(DOB_STRING);
	    action.getPerson().setGender(DUMMY_GENDER);
	    SimpleDateFormat format = new SimpleDateFormat(FormatUtils.DATE_FORMAT_STRING, Locale.US);
        format.setLenient(false);
	    
	    assertEquals(FAMILY_TREE_ACTION, action.submitPerson());
	    assertEquals(format.parse(DOB_STRING), action.getPerson().getDateOfBirth());
        
        // Test submit with no age set (action errors should exist)
	    action.setDateOfBirthString(null);
        assertEquals(INPUT_ACTION, action.submitPerson());
        assertEquals(1, action.getFieldErrors().size());
        
        action.getFieldErrors().clear();
        
        // Test submit with invalid DOB
        action.setDateOfBirthString("invalid");
        assertEquals(INPUT_ACTION, action.submitPerson());
        assertEquals(1, action.getFieldErrors().size());
	}

	@Test
    public void testSubmitPerson() {
	    FhhRegistry.getInstance().setServiceLocator(new MockServiceLocator() {
	        @Override
	        public PersonServiceLocal getPersonService() {
	            return new PersonServiceStub() {
	                @Override
	                public List<Disease> getDiseaseByName(String diseaseName) {
	                    return new ArrayList<Disease>();
	                }
	            };
	        } 
	    });
	    FhhDataUtils.getInstance().setServiceLocator(FhhRegistry.getInstance().getServiceLocator());
	    
	    SimpleDateFormat format = new SimpleDateFormat(FormatUtils.DATE_FORMAT_STRING, Locale.US);
        format.setLenient(false);
	    DUMMY_DISEASE2.setDisplayName(OTHER_DISEASE);
	    action.setPerson(new Person());
	    action.getPerson().setGender(DUMMY_GENDER);
	    action.setDateOfBirthString(DOB_STRING);
	    action.setWeightString(DUMMY_WEIGHT.getValue().toString());
	    FhhHttpSessionUtil.getSession().setAttribute(MIN_HEX, action.getPerson());
        FhhHttpSessionUtil.getSession().setAttribute(FhhHttpSessionUtil.ROOT_KEY, MIN_HEX);
	    assertEquals(FAMILY_TREE_ACTION, action.submitPerson());
	    assertEquals(0, action.getPerson().getObservations().size());
	    assertEquals(DUMMY_WEIGHT.getValue(), action.getPerson().getWeight().getValue());
	    assertEquals(FormatUtils.convertStringToDate(DOB_STRING), action.getPerson().getDateOfBirth());
	    // Set unmatched legacy condition to true, submit should set it to false
        action.getPerson().setUnmatchedCondition(TRUE);

	    assertEquals(FAMILY_TREE_ACTION, action.submitPerson());
	    assertFalse(action.getPerson().isUnmatchedCondition());

	    action.setPerson(new Person());
	    action.getPerson().setGender(DUMMY_GENDER);
	    action.setDateOfBirthString(DOB_STRING);
	    action.setSelectedDiseases(new ArrayList<Disease>());
	    action.setOtherDiseaseValues(new ArrayList<String>());
	    // Add a disease
	    action.getSelectedDiseases().add(DUMMY_DISEASE);
	    action.getOtherDiseaseValues().add("");

	    // Add a user entered disease (Other)
	    action.getSelectedDiseases().add(DUMMY_DISEASE2);
	    action.getOtherDiseaseValues().add(DUMMY_DISEASE_VALUE);

	    action.setAgeOfDiagnosisList(new ArrayList<AgeRangeEnum>());
	    action.getAgeOfDiagnosisList().add(AgeRangeEnum.THIRTIES);
	    action.getAgeOfDiagnosisList().add(AgeRangeEnum.FIFTIES);
	    
        assertEquals(FAMILY_TREE_ACTION, action.submitPerson());
        assertEquals(DUMMY_DISEASE, action.getPerson().getObservations().get(0).getDisease());
        assertEquals(AgeRangeEnum.THIRTIES, action.getPerson().getObservations().get(0).getAgeRange());
        // New Disease with original text set
        assertEquals(DUMMY_DISEASE_VALUE, action.getPerson().getObservations().get(1).getDisease().getDisplayName());
        assertEquals(AgeRangeEnum.FIFTIES, action.getPerson().getObservations().get(1).getAgeRange());
        assertTrue(FhhHttpSessionUtil.getUserEnteredDiseases().containsKey(DUMMY_DISEASE_VALUE));
    }
	
	@Test
    public void testSubmitPersonValidation() {
	    action.setPerson(new Person());
	    FhhHttpSessionUtil.getSession().setAttribute(MIN_HEX, action.getPerson());
        FhhHttpSessionUtil.getSession().setAttribute(FhhHttpSessionUtil.ROOT_KEY, MIN_HEX);
        action.getPerson().setGender(DUMMY_GENDER);
        action.setDateOfBirthString(DOB_STRING);
        action.setHeightUnit1(INVALID_INT);
        action.setHeightUnit2(INVALID_INT);
        action.setHeightMetric(INVALID_INT);
        action.setWeightString(INVALID_INT);
        assertEquals(INPUT_ACTION, action.submitPerson());
        
        //assertEquals(action.getFieldErrors().toString(), "");
        assertEquals(4, action.getFieldErrors().size());
	}

	@Test
    public void testGetAgeRangeEnums() {
	    assertEquals(AgeRangeEnum.values()[0], action.getAgeRangeEnums()[0]);
	}

	@Test
    public void testGetAndSetCurrentDiseaseValue() {
        action.setCurrentDiseaseValue(DUMMY_DISEASE_VALUE);
        assertEquals(DUMMY_DISEASE_VALUE, action.getCurrentDiseaseValue());
    }

	@Test
    public void testRetrieveDiseaseSubTypes() {
	    action.setCurrentDiseaseValue("2");
	    assertEquals("2", action.getCurrentDiseaseValue());
        assertEquals("xmlDiseaseSubTypes", action.retrieveDiseaseSubTypes());
        assertNotNull(action.getDiseaseSubTypes());
    }

	@Test
    public void testGetDiseaseSubTypesAsXml() throws Exception{
	    assertNotNull(action.getDiseaseSubTypesAsXml());

	    List<Disease> diseaseList = new ArrayList<Disease>();
        diseaseList.add(DUMMY_DISEASE);
        action.setDiseaseSubTypes(diseaseList);
        assertNotNull(action.getDiseaseSubTypesAsXml());
	}
	
	@Test
    public void testRetrieveAutocompleteConditions() {
	    action.setAutocompleteDisease(DUMMY_DISEASE2_ORG_TEXT);
	    assertEquals(DUMMY_DISEASE2_ORG_TEXT, action.getAutocompleteDisease());
        assertEquals("xmlAutocomplete", action.retrieveAutocompleteConditions());
        assertNotNull(action.getAutoCompleteConditions());
    }

    @Test
    public void testGetAutocompleteAsXml() throws Exception{
        assertNotNull(action.getDiseaseSubTypesAsXml());

        List<Disease> diseaseList = new ArrayList<Disease>();
        diseaseList.add(DUMMY_DISEASE);
        action.setAutoCompleteConditions(diseaseList);
        assertNotNull(action.getDiseaseSubTypesAsXml());
    }

	@Test
    public void testGetlivingStatusEnums() {
	    assertNotNull(action.getLivingStatusEnums());
	}

	@Test
    public void testGetGenderEnums() {
        assertNotNull(action.getGenderEnums());
    }

	@Test
    public void testGetTwinStatusEnums() {
        assertNotNull(action.getTwinStatusEnums());
    }

	@Test
    public void testGetAndSetDiseases() {
        List<Disease> diseaseList = new ArrayList<Disease>();
        diseaseList.add(DUMMY_DISEASE);
        action.setDiseases(diseaseList);
        assertEquals(action.getDiseases().get(0), DUMMY_DISEASE);
    }

	@Test
    public void testGetAndSetOtherDiseaseValues() {
        List<String> otherDiseaseValues = new ArrayList<String>();
        otherDiseaseValues.add(DUMMY_DISEASE2_ORG_TEXT);
        action.setOtherDiseaseValues(otherDiseaseValues);
        assertEquals(DUMMY_DISEASE2_ORG_TEXT, action.getOtherDiseaseValues().get(0));
    }
	@Test
    public void testGetAndSetDiseaseSubTypes() {
        List<Disease> diseaseList = new ArrayList<Disease>();
        diseaseList.add(DUMMY_DISEASE);
        action.setDiseaseSubTypes(diseaseList);
        assertEquals(action.getDiseaseSubTypes().get(0), DUMMY_DISEASE);
    }

	@Test
    public void testGetAndSetRaces() {
        List<Race> raceList = new ArrayList<Race>();
        raceList.add(DUMMY_RACE);
        action.setRaces(raceList);
        assertEquals(action.getRaces().get(0), DUMMY_RACE);
    }

	@Test
    public void testGetAndSetAsianRaces() {
        List<Race> raceList = new ArrayList<Race>();
        raceList.add(DUMMY_RACE);
        action.setAsianRaces(raceList);
        assertEquals(action.getAsianRaces().get(0), DUMMY_RACE);
    }

	@Test
    public void testGetAndSetHawaiianRaces() {
        List<Race> raceList = new ArrayList<Race>();
        raceList.add(DUMMY_RACE);
        action.setHawaiianRaces(raceList);
        assertEquals(action.getHawaiianRaces().get(0), DUMMY_RACE);
    }
	
	@Test
    public void testGetAndSetSelectedRaces() {
        List<Race> raceList = new ArrayList<Race>();
        raceList.add(DUMMY_RACE);
        action.setSelectedRaces(raceList);
        assertEquals(action.getSelectedRaces().get(0), DUMMY_RACE);
    }

    @Test
    public void testGetAndSetSelectedAsianRaces() {
        List<Race> raceList = new ArrayList<Race>();
        raceList.add(DUMMY_RACE);
        action.setSelectedAsianRaces(raceList);
        assertEquals(action.getSelectedAsianRaces().get(0), DUMMY_RACE);
    }

    @Test
    public void testGetAndSetSelectedHawaiianRaces() {
        List<Race> raceList = new ArrayList<Race>();
        raceList.add(DUMMY_RACE);
        action.setSelectedHawaiianRaces(raceList);
        assertEquals(action.getSelectedHawaiianRaces().get(0), DUMMY_RACE);
    }

	@Test
    public void testGetAndSetEthnicities() {
        List<Ethnicity> ethnicityList = new ArrayList<Ethnicity>();
        ethnicityList.add(DUMMY_ETHNICITY);
        action.setEthnicities(ethnicityList);
        assertEquals(action.getEthnicities().get(0), DUMMY_ETHNICITY);
    }

	@Test
    public void testGetAndSetHispanicEthnicities() {
        List<Ethnicity> ethnicityList = new ArrayList<Ethnicity>();
        ethnicityList.add(DUMMY_ETHNICITY);
        action.setHispanicEthnicities(ethnicityList);
        assertEquals(action.getHispanicEthnicities().get(0), DUMMY_ETHNICITY);
    }
	
	@Test
    public void testGetAndSetSelectedEthnicities() {
        List<Ethnicity> ethnicityList = new ArrayList<Ethnicity>();
        ethnicityList.add(DUMMY_ETHNICITY);
        action.setSelectedEthnicities(ethnicityList);
        assertEquals(action.getSelectedEthnicities().get(0), DUMMY_ETHNICITY);
    }

    @Test
    public void testGetAndSetSelectedHispanicEthnicities() {
        List<Ethnicity> ethnicityList = new ArrayList<Ethnicity>();
        ethnicityList.add(DUMMY_ETHNICITY);
        action.setSelectedHispanicEthnicities(ethnicityList);
        assertEquals(action.getSelectedHispanicEthnicities().get(0), DUMMY_ETHNICITY);
    }

	@Test
    public void testGetAndSetHeightUnit1() {
        action.setHeightUnit1("5");
        assertEquals("5", action.getHeightUnit1());
    }
	
	@Test
    public void testGetAndSetHeightUnit2() {
        action.setHeightUnit2("0");
        assertEquals("0", action.getHeightUnit2());
    }
	
	@Test
    public void testGetAndSetHeightMetric() {
        action.setHeightMetric("150");
        assertEquals("150", action.getHeightMetric());
    }

	@Test
    public void testGetDiseases() throws Exception {
      List<Disease> diseases = FhhRegistry.getInstance().getServiceLocator().getPersonService().getDiseases();
      assertEquals(3, diseases.size());
    }

	@Test
    public void testGetDiseaseSubTypes() throws Exception {
      List<Disease> subTypes = FhhRegistry.getInstance().getServiceLocator().getPersonService().getDiseaseSubTypes(null);
      assertEquals(3, subTypes.size());
    }

	@Test
    public void testGetEthnicities() throws Exception {
      List<Ethnicity> ethnicities = FhhRegistry.getInstance().getServiceLocator().getPersonService().getEthnicities();
      assertEquals(3, ethnicities.size());
    }

	@Test
    public void testGetRaces() throws Exception {
      List<Race> races = FhhRegistry.getInstance().getServiceLocator().getPersonService().getRaces();
      assertEquals(3, races.size());
    }
}
