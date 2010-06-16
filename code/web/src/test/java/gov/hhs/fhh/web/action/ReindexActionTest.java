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
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.DiseaseBean;
import gov.hhs.fhh.data.Ethnicity;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Race;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.UserEnteredDisease;
import gov.hhs.fhh.data.util.HL7ConversionUtils;
import gov.hhs.fhh.model.mfhp.LivingStatus;
import gov.hhs.fhh.model.mfhp.castor.FhhCastorUtils;
import gov.hhs.fhh.web.test.AbstractFhhWebTest;
import gov.hhs.fhh.web.util.FhhHttpSessionUtil;
import gov.hhs.fhh.xml.PatientPerson;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.GregorianCalendar;

import org.junit.Test;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.mfhp.Gender;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;

/**
 * @author bpickeral
 * 
 */
public class ReindexActionTest extends AbstractFhhWebTest {
    private final ReindexAction action = new ReindexAction();

    private final String MIN_HEX = "80000000";
    private final String EXTENSION = ".xml";
    private final String DEFAULT_FILE_NAME = "My_FamilyHistory" + EXTENSION;
    private final String CUSTOM_FILE_NAME = "custom name";
    private final String DOWNLOAD_FILE_ACTION = "downloadXMLFile";
    private final String BASIC_TEST_ETHNICITY = "Hispanic of Latino";
    private final String BASIC_TEST_RACE = "American Indian or Alaska Native";
    private final String BASIC_TEST_DISEASE = "Hypertension";
    private final String BASIC_TEST_DISEASE_CODE = "38341003";
    private final String DECEASED_STATUS = LivingStatus.NO.getResourceKey();
    private final Weight DUMMY_WEIGHT = new Weight(180, WeightUnit.US);;
    private final GregorianCalendar DUMMY_DATE = new GregorianCalendar(1970, 9, 7, 0, 0, 0);
    private final Gender DUMMY_GENDER = Gender.MALE;
    private final UserEnteredDisease DUMMY_DISEASE = new UserEnteredDisease();
    private final UserEnteredDisease DUMMY_DISEASE2 = new UserEnteredDisease();
    private final Ethnicity DUMMY_ETHNICITY = new Ethnicity();
    private final Ethnicity DUMMY_ETHNICITY2 = new Ethnicity();
    private final Ethnicity DUMMY_ETHNICITY3 = new Ethnicity();
    private final Race DUMMY_RACE = new Race();
    private final Race DUMMY_RACE2 = new Race();
    private final AgeRangeEnum DUMMY_AGE = AgeRangeEnum.FIFTIES;

    private final ClinicalObservation DUMMY_CLINICAL_OBSERVATION = new ClinicalObservation();
    private final ClinicalObservation DUMMY_CLINICAL_OBSERVATION2 = new ClinicalObservation();
    private final String BASIC_RELATIVE_NAME = "Basic Relative";
    private final RelativeCode BASIC_RELATIVE_CODE = RelativeCode.NMTH;
    private final String BASIC_RELATIVE_ETHNICITY = "Hispanic of Latino";
    private final String BASIC_RELATIVE_ETHNICITY2 = "Dominican";
    private final String BASIC_RELATIVE_RACE = "Asian";
    private final String BASIC_RELATIVE_DISEASE = "Type 2 Diabetes";
    private final String BASIC_RELATIVE_DISEASE_CODE = "44054006";

    private final String MAUNT_NAME = "maunt name";
    private final String MAUNT_FILE_NAME = "maunt_name_FamilyHistory.xml";

    @Test
    public void testPrepare() {
        // Test prepare with no person set in session
        action.prepare();
        assertNull(action.getPerson());

        Person p = new Person();
        FhhHttpSessionUtil.getSession().setAttribute(MIN_HEX, p);
        FhhHttpSessionUtil.getSession().setAttribute(FhhHttpSessionUtil.ROOT_KEY, MIN_HEX);

        action.prepare();
        assertEquals(p, action.getPerson());
    }

    @Test
    public void testSaveXmlDocument() throws Exception {
        // Set Person attributes
        Person p = new Person();
        // Test p with null name to make sure default file name
        // is created
        DUMMY_ETHNICITY.setDisplayName(BASIC_TEST_ETHNICITY);
        DUMMY_RACE.setDisplayName(BASIC_TEST_RACE);
        DUMMY_DISEASE.setDisplayName(BASIC_TEST_DISEASE);
        DUMMY_DISEASE.setOriginalText(BASIC_TEST_DISEASE);
        DUMMY_DISEASE.setCode(BASIC_TEST_DISEASE_CODE);
        DUMMY_CLINICAL_OBSERVATION.setAgeRange(AgeRangeEnum.TWENTIES);
        DUMMY_CLINICAL_OBSERVATION.setDisease(DUMMY_DISEASE);
        p.setDateOfBirth(DUMMY_DATE.getTime());
        p.setWeight(DUMMY_WEIGHT);
        p.setGender(DUMMY_GENDER);
        p.setEthnicities(new ArrayList<Ethnicity>());
        p.getEthnicities().add(DUMMY_ETHNICITY);
        p.setRaces(new ArrayList<Race>());
        p.getRaces().add(DUMMY_RACE);
        p.setObservations(new ArrayList<ClinicalObservation>());
        p.getObservations().add(DUMMY_CLINICAL_OBSERVATION);

        // Add Deceased relative
        Relative deseasedRelative = new Relative();
        DUMMY_ETHNICITY2.setDisplayName(BASIC_RELATIVE_ETHNICITY);
        DUMMY_ETHNICITY3.setDisplayName(BASIC_RELATIVE_ETHNICITY2);
        DUMMY_RACE2.setDisplayName(BASIC_RELATIVE_RACE);
        DUMMY_DISEASE2.setDisplayName(BASIC_RELATIVE_DISEASE);
        DUMMY_DISEASE2.setOriginalText(BASIC_RELATIVE_DISEASE);
        DUMMY_DISEASE2.setCode(BASIC_RELATIVE_DISEASE_CODE);
        DUMMY_CLINICAL_OBSERVATION2.setAgeRange(AgeRangeEnum.FORTIES);
        DUMMY_CLINICAL_OBSERVATION2.setDisease(DUMMY_DISEASE2);
        deseasedRelative.setName(BASIC_RELATIVE_NAME);
        deseasedRelative.setCodeEnum(BASIC_RELATIVE_CODE);
        deseasedRelative.setGender(DUMMY_GENDER);
        deseasedRelative.setEthnicities(new ArrayList<Ethnicity>());
        deseasedRelative.getEthnicities().add(DUMMY_ETHNICITY2);
        deseasedRelative.getEthnicities().add(DUMMY_ETHNICITY3);
        deseasedRelative.setRaces(new ArrayList<Race>());
        deseasedRelative.getRaces().add(DUMMY_RACE2);
        deseasedRelative.setAgeAtDeath(DUMMY_AGE);
        deseasedRelative.setCauseOfDeath(DUMMY_DISEASE);
        deseasedRelative.setLivingStatus(DECEASED_STATUS);
        deseasedRelative.setObservations(new ArrayList<ClinicalObservation>());
        deseasedRelative.getObservations().add(DUMMY_CLINICAL_OBSERVATION2);
        p.setRelatives(new ArrayList<Relative>());
        p.getRelatives().add(deseasedRelative);
        p.setMother(deseasedRelative);

        // Add Maternal Aunt
        Relative maunt = new Relative();
        maunt.setName(MAUNT_NAME);
        maunt.setGender(Gender.FEMALE);
        maunt.setCodeEnum(RelativeCode.MAUNT);
        p.getRelatives().add(maunt);

        // Add Paternal Uncle
        Relative puncle = new Relative();
        puncle.setGender(Gender.MALE);
        puncle.setCodeEnum(RelativeCode.PUNCLE);
        p.getRelatives().add(puncle);

        // Add Maternal Cousin
        Relative mcousin = new Relative();
        mcousin.setCodeEnum(RelativeCode.MCOUSN);
        mcousin.setGender(Gender.FEMALE);
        mcousin.setMother(maunt);
        p.getRelatives().add(mcousin);

        // Add Paternal Cousin
        Relative pcousin = new Relative();
        pcousin.setCodeEnum(RelativeCode.PCOUSN);
        pcousin.setGender(Gender.MALE);
        pcousin.setFather(puncle);
        p.getRelatives().add(pcousin);

        // Add Dad
        Relative dad = new Relative();
        dad.setGender(Gender.MALE);
        dad.setName("dad");
        dad.setCodeEnum(RelativeCode.NFTH);
        p.getRelatives().add(dad);
        p.setFather(dad);

        action.setPerson(p);
        assertEquals(DOWNLOAD_FILE_ACTION, action.saveXmlDocument());
        InputStream input = action.getDownloadFile();
        assertTrue(p.isXmlFileSaved());
        assertEquals(DEFAULT_FILE_NAME, action.getFileName());
        String xmlFileString = FhhCastorUtils.getInputStreamAsString(input);
        PatientPerson patientPerson = new PatientPerson();

        patientPerson = (PatientPerson) FhhCastorUtils.unmarshallXMLFile(xmlFileString, patientPerson);

        Person unmarshalledPerson = HL7ConversionUtils.person(patientPerson);

        // Check Person attributes
        assertNull(unmarshalledPerson.getName());
        assertEquals(DUMMY_DATE.getTime(), unmarshalledPerson.getDateOfBirth());
        assertEquals(DUMMY_GENDER.getDisplayName(), unmarshalledPerson.getGender().getDisplayName());
        assertEquals(DUMMY_ETHNICITY.getDisplayName(), unmarshalledPerson.getEthnicities().get(0).getDisplayName());
        assertEquals(DUMMY_RACE.getDisplayName(), unmarshalledPerson.getRaces().get(0).getDisplayName());
//        assertEquals(DUMMY_DISEASE.getDisplayName(), unmarshalledPerson.getObservations().get(0).getDisease()
//                .getDisplayName());
        assertEquals(DUMMY_DISEASE.getCode(), unmarshalledPerson.getObservations().get(0).getDisease()
                .getCode());
        assertEquals(AgeRangeEnum.TWENTIES, unmarshalledPerson.getObservations().get(0).getAgeRange());

        // Check deceased Relative attributes
        Relative importedRelative = unmarshalledPerson.getRelatives().get(0);
        assertEquals(BASIC_RELATIVE_NAME, importedRelative.getName());
        assertEquals(BASIC_RELATIVE_CODE, importedRelative.getCodeEnum());
        assertEquals(DUMMY_GENDER.getDisplayName(), importedRelative.getGender().getDisplayName());
        assertEquals(DUMMY_ETHNICITY2.getDisplayName(), importedRelative.getEthnicities().get(0).getDisplayName());
        assertEquals(DUMMY_ETHNICITY3.getDisplayName(), importedRelative.getEthnicities().get(1).getDisplayName());
        assertEquals(DUMMY_RACE2.getDisplayName(), importedRelative.getRaces().get(0).getDisplayName());
//        assertEquals(DUMMY_DISEASE2.getDisplayName(), importedRelative.getObservations().get(0).getDisease()
//                .getDisplayName());
        assertEquals(DUMMY_DISEASE2.getCode(), importedRelative.getObservations().get(0).getDisease()
                .getCode());
        assertEquals(AgeRangeEnum.FORTIES, importedRelative.getObservations().get(0).getAgeRange());

        // Check that the motherId/fatherId of the 2 cousins are set
        Relative importedAunt = unmarshalledPerson.getRelatives().get(1);
        Relative importedUncle = unmarshalledPerson.getRelatives().get(2);
        Relative importedMCOUSN = unmarshalledPerson.getRelatives().get(3);
        Relative importedPCOUSN = unmarshalledPerson.getRelatives().get(4);
        assertEquals(importedMCOUSN.getMotherId(), importedAunt.getUuid());
        assertEquals(importedPCOUSN.getFatherId(), importedUncle.getUuid());
        
        // Test user enters custom file name
        action.setFileName(CUSTOM_FILE_NAME);
        assertEquals(DOWNLOAD_FILE_ACTION, action.saveXmlDocument());
        assertEquals(CUSTOM_FILE_NAME + EXTENSION, action.getFileName());

        // Test re-index on Unmarshalled Aunt
        action.setRelativeId(importedAunt.getUuid().toString());
        action.setFileName(null);
        assertEquals(DOWNLOAD_FILE_ACTION, action.saveXmlDocument());
        input = action.getDownloadFile();
        xmlFileString = FhhCastorUtils.getInputStreamAsString(input);

        patientPerson = (PatientPerson) FhhCastorUtils.unmarshallXMLFile(xmlFileString, new PatientPerson());

        Person unmarshalledMaunt = HL7ConversionUtils.person(patientPerson);

        // Check Maunt attributes
        assertEquals(MAUNT_FILE_NAME, action.getFileName());
        assertEquals(MAUNT_NAME, unmarshalledMaunt.getName());

        // original relative should be a nephew
        Relative originalAsNephew = unmarshalledMaunt.getRelativeOfType(RelativeCode.NEPHEW);
        assertNull(originalAsNephew.getName());
        assertEquals(DUMMY_GENDER.getDisplayName(), originalAsNephew.getGender().getDisplayName());
        assertEquals(DUMMY_ETHNICITY.getDisplayName(), originalAsNephew.getEthnicities().get(0).getDisplayName());
        assertEquals(DUMMY_RACE.getDisplayName(), originalAsNephew.getRaces().get(0).getDisplayName());
        assertEquals(DUMMY_DISEASE.getCode(), originalAsNephew.getObservations().get(0).getDisease()
                .getCode());
        assertEquals(AgeRangeEnum.TWENTIES, originalAsNephew.getObservations().get(0).getAgeRange());

        // she should have original's cousin as daughter
        assertNotNull(unmarshalledMaunt.getRelativeOfType(RelativeCode.DAU));

        // she should have original's mom as sister
        assertNotNull(unmarshalledMaunt.getRelativeOfType(RelativeCode.NSIS));
        assertNull(unmarshalledMaunt.getRelativeOfType(RelativeCode.NBRO));

        // nephew's mom id should be set to original's mom id
        assertEquals(unmarshalledMaunt.getRelativeOfType(RelativeCode.NSIS).getUuid(), unmarshalledMaunt
                .getRelativeOfType(RelativeCode.NEPHEW).getMotherId());
    }

    @Test
    public void testgetAndSetProband() {
        Person p = new Person();
        action.setProband(p);
        assertEquals(p, action.getProband());
    }
}
