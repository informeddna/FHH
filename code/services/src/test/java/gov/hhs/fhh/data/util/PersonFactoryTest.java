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
package gov.hhs.fhh.data.util;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.model.mfhp.LivingStatus;
import gov.hhs.fhh.test.AbstractHibernateTestCase;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

import org.apache.commons.lang.StringUtils;
import org.junit.Assert;
import org.junit.Test;

import com.fiveamsolutions.hl7.model.AbstractProband;
import com.fiveamsolutions.hl7.model.Diagnosis;
import com.fiveamsolutions.hl7.model.FemaleRelative;
import com.fiveamsolutions.hl7.model.MaleRelative;
import com.fiveamsolutions.hl7.model.Pedigree;
import com.fiveamsolutions.hl7.model.ProbandFactoryImpl;
import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.age.DateBasedExactAge;
import com.fiveamsolutions.hl7.model.age.ValueBasedEstimateAgeRange;
import com.fiveamsolutions.hl7.model.age.YearBasedEstimateAge;
import com.fiveamsolutions.hl7.model.condition.MfhpTrackedCondition;
import com.fiveamsolutions.hl7.model.mfhp.Gender;
import com.fiveamsolutions.hl7.model.mfhp.Height;
import com.fiveamsolutions.hl7.model.mfhp.HeightUnit;
import com.fiveamsolutions.hl7.model.mfhp.MfhpDiagnosis;
import com.fiveamsolutions.hl7.model.mfhp.ProbandDemographics;
import com.fiveamsolutions.hl7.model.mfhp.TwinStatus;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;
import com.fiveamsolutions.hl7.model.mfhp.ethnicity.MfhpTrackedEthnicity;
import com.fiveamsolutions.hl7.model.race.MfhpTrackedRace;
import com.fiveamsolutions.hl7.model.snomed.SNOMEDCode;

/**
 * @author bpickeral
 * 
 */
public class PersonFactoryTest extends AbstractHibernateTestCase {
    private static final SimpleDateFormat FORMAT = new SimpleDateFormat("MM/dd/yyyy", Locale.US);
    private static final String DATE_STRING = "01/01/1970";
    private static final String RACE_CODE = "1002-5";
    private static final String RACE_VALUE = "American Indian or Alaska Native";
    private static final String UNKNOWN_CODE = "";
    private static final String UNKNOWN_VALUE = "value";

    private static final String DISEASE_CODE = "26929004";
    private static final String DISEASE_VALUE = "DisplayName0";

    private static final String USER_ENTERED_VALUE = "user entered";

    private static final String ETHNICITY_CODE = "2155-0";
    private static final String ETHNICITY_VALUE = "Central American";

    private static final Integer HEIGHT = 70;
    private static final Integer WEIGHT = 170;

    private static final Integer OBS_LOWER = 20;
    private static final Integer OBS_UPPER = 29;

    private static final String HL7 = "HL7";

    @Test
    public void pedigreeToPersonTest() throws Exception {
        Pedigree pedigree = createPedigree();
        PersonFactory factory = PersonFactory.getInstance();
        Person person = factory.createPerson(pedigree);
        checkDemographics(person);

        Relative relative = person.getRelativeOfType(RelativeCode.NFTH);
        relative.setLivingStatus(LivingStatus.UNKNOWN.toString());
        
        Assert.assertNotNull(relative);
        // default living status is null, not unknown, if you want unknown you gotta set it
        Assert.assertEquals(LivingStatus.UNKNOWN.toString(), relative.getDeceasedIndicator());
        
        Relative mother = person.getRelativeOfType(RelativeCode.NMTH);
        Assert.assertNotNull(mother);
        Assert.assertNull(mother.getDeceasedIndicator());
        
        pedigree = createPedigree();
        factory = PersonFactory.getInstance();
        person = factory.createPerson(pedigree);
        checkDemographics(person);
        relative = person.getRelativeOfType(RelativeCode.NFTH);
        
        Assert.assertNotNull(relative);
        Assert.assertNull(relative.getLivingStatus());
    }

    private Pedigree createPedigree() throws Exception {
        AbstractProband proband = ProbandFactoryImpl.getInstance().createMale();
        Pedigree pedigree = new Pedigree(proband);

        ProbandDemographics demographics = new ProbandDemographics();
        proband.setDemographics(demographics);
        demographics.setName("test");

        Weight weight = new Weight();
        weight.setUnit(WeightUnit.US);
        weight.setValue(WEIGHT);
        demographics.setWeight(weight);

        Height height = new Height();
        height.setValue(HEIGHT);
        height.setValue(HEIGHT);
        demographics.setHeight(height);

        demographics.setTwinStatus(TwinStatus.IDENTICAL);
        demographics.setAdopted(true);

        MfhpTrackedRace race = new MfhpTrackedRace();
        SNOMEDCode snomedRace = new SNOMEDCode(RACE_CODE, RACE_VALUE, HL7);
        race.addCode(snomedRace);
        demographics.addRace(race);

        MfhpTrackedRace race2 = new MfhpTrackedRace();
        SNOMEDCode snomedRace2 = new SNOMEDCode(UNKNOWN_CODE, UNKNOWN_VALUE, HL7);
        race2.addCode(snomedRace2);
        demographics.addRace(race2);

        MfhpTrackedEthnicity ethnicity = new MfhpTrackedEthnicity();
        SNOMEDCode snomedEthnicity = new SNOMEDCode(ETHNICITY_CODE, ETHNICITY_VALUE, HL7);
        ethnicity.addCode(snomedEthnicity);
        demographics.addEthnicity(ethnicity);

        MfhpTrackedEthnicity ethnicity2 = new MfhpTrackedEthnicity();
        SNOMEDCode snomedEthnicity2 = new SNOMEDCode(UNKNOWN_CODE, UNKNOWN_VALUE, HL7);
        ethnicity2.addCode(snomedEthnicity2);
        demographics.addEthnicity(ethnicity2);

        MfhpTrackedCondition condition = new MfhpTrackedCondition();
        SNOMEDCode code = new SNOMEDCode(DISEASE_CODE, DISEASE_VALUE, HL7);
        condition.addCode(code);
        ValueBasedEstimateAgeRange estimatedAgeRange = new ValueBasedEstimateAgeRange();
        estimatedAgeRange.setBounds(OBS_LOWER, OBS_UPPER);
        Diagnosis diagnosis = new MfhpDiagnosis(proband, estimatedAgeRange, condition);
        proband.addDiagnosis(diagnosis);

        MfhpTrackedCondition userEnteredCondition = new MfhpTrackedCondition();
        SNOMEDCode code2 = new SNOMEDCode(null, USER_ENTERED_VALUE, HL7);
        userEnteredCondition.addCode(code2);
        ValueBasedEstimateAgeRange estimatedAgeRange2 = new ValueBasedEstimateAgeRange();
        estimatedAgeRange2.setBounds(null, null);
        Diagnosis diagnosis2 = new MfhpDiagnosis(proband, estimatedAgeRange2, userEnteredCondition);
        proband.addDiagnosis(diagnosis2);

        FORMAT.setLenient(false);
        Date date = FORMAT.parse(DATE_STRING);
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        DateBasedExactAge age = new DateBasedExactAge();
        age.setDateOfBirth(cal);
        proband.setAge(age);

        MaleRelative father = pedigree.addFather(proband);
        father.setDemographics(new ProbandDemographics());

        FemaleRelative mother = pedigree.addMother(proband);
        mother.setAge(new YearBasedEstimateAge(1960));
        mother.setDemographics(new ProbandDemographics());
        mother.setAge(mother.getAge());

        return pedigree;
    }

    private void checkDemographics(Person person) {
        assertEquals(Gender.MALE, person.getGender());
        assertEquals(DATE_STRING, FORMAT.format(person.getDateOfBirth()));
        assertEquals(WEIGHT, person.getWeight().getValue());
        assertEquals(WeightUnit.US, person.getWeight().getUnit());
        assertEquals(HEIGHT, person.getHeight().getValue());
        assertEquals(HeightUnit.US, person.getHeight().getUnit());
        assertTrue(person.isAdopted());
        assertEquals(TwinStatus.IDENTICAL.toString(), person.getTwinStatus().toString());
        assertEquals(1, person.getRaces().size());
        assertEquals(RACE_VALUE, person.getRaces().get(0).getDisplayName());
        assertEquals(1, person.getEthnicities().size());
        assertEquals(ETHNICITY_VALUE, person.getEthnicities().get(0).getDisplayName());
        ClinicalObservation userEntered = null;
        ClinicalObservation systemDisease = null;

        assertEquals(2, person.getObservations().size());
        if (person.getObservations().get(0).getDisease().getCode() == null) {
            userEntered = person.getObservations().get(0);
            systemDisease = person.getObservations().get(1);
        } else {
            userEntered = person.getObservations().get(1);
            systemDisease = person.getObservations().get(0);
        }
        assertEquals(DISEASE_CODE, systemDisease.getDisease().getCode());
        assertEquals(AgeRangeEnum.TWENTIES, systemDisease.getAgeRange());
        assertNull(userEntered.getDisease().getCode());
        assertEquals(AgeRangeEnum.UNKNOWN, userEntered.getAgeRange());
    }

    @Test
    public void emptyPedigreeToPersonTest() throws Exception {
        Pedigree pedigree = createEmptyPedigree();
        PersonFactory factory = PersonFactory.getInstance();
        Person person = factory.createPerson(pedigree);
        assertEquals(Gender.MALE, person.getGender());
        assertTrue(StringUtils.isEmpty(person.getName()));
    }

    private Pedigree createEmptyPedigree() throws Exception {
        AbstractProband proband = ProbandFactoryImpl.getInstance().createMale();
        Pedigree pedigree = new Pedigree(proband);

        ProbandDemographics demographics = new ProbandDemographics();
        proband.setDemographics(demographics);
        return pedigree;
    }
}
