package gov.hhs.fhh.model.mfhp.castor;

import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Ethnicity;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Race;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.model.mfhp.LivingStatus;
import gov.hhs.fhh.service.FhhWebException;

import java.util.ArrayList;
import java.util.GregorianCalendar;

import org.junit.Assert;
import org.junit.Test;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.mfhp.Gender;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;

public class ExportUtilsTest {

    private final String MAUNT_NAME = "maunt name";
    private final String BASIC_TEST_ETHNICITY = "Hispanic of Latino";
    private final String BASIC_TEST_RACE = "American Indian or Alaska Native";
    private final String BASIC_TEST_DISEASE = "DisplayName7";
    private final String BASIC_TEST_DISEASE_CODE = "38341003";
    private final String DECEASED_STATUS = LivingStatus.NO.getResourceKey();
    private final Weight DUMMY_WEIGHT = new Weight(180, WeightUnit.US);;
    private final GregorianCalendar DUMMY_DATE = new GregorianCalendar(1970, 9, 7, 0, 0, 0);
    private final Gender DUMMY_GENDER = Gender.MALE;
    private final Disease DUMMY_DISEASE = new Disease();
    private final Disease DUMMY_DISEASE2 = new Disease();
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
    private final String BASIC_RELATIVE_DISEASE = "DisplayName18";
    private final Long BASIC_RELATIVE_DISEASE_ID = 18L;
    private final String BASIC_RELATIVE_DISEASE_CODE = "44054006";

    @Test
    public void testCreateXMLFile() throws FhhWebException {
        Person p = new Person();
        // Test p with null name to make sure default file name
        // is created
        DUMMY_ETHNICITY.setDisplayName(BASIC_TEST_ETHNICITY);
        DUMMY_RACE.setDisplayName(BASIC_TEST_RACE);
        DUMMY_DISEASE.setDisplayName(BASIC_TEST_DISEASE);
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
        DUMMY_DISEASE2.setId(BASIC_RELATIVE_DISEASE_ID);
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

        Assert.assertNotNull(ExportUtils.createXMLFile(p, true));

        Assert.assertNotNull(ExportUtils.createXMLFile(p, false));
    }

}
