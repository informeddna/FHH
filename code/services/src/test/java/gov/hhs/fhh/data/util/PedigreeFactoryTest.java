/**
 * The software subject to this notice and license includes both human readable
 * source code form and machine readable, binary, object code form. The fhh
 * Software was developed in conjunction with the National Cancer Institute 
 * (NCI) by NCI employees and 5AM Solutions, Inc. (5AM). To the extent 
 * government employees are authors, any rights in such works shall be subject 
 * to Title 17 of the United States Code, section 105. 
 *
 * This fhh Software License (the License) is between NCI and You. You (or 
 * Your) shall mean a person or an entity, and all other entities that control, 
 * are controlled by, or are under common control with the entity. Control for 
 * purposes of this definition means (i) the direct or indirect power to cause 
 * the direction or management of such entity, whether by contract or otherwise,
 * or (ii) ownership of fifty percent (50%) or more of the outstanding shares, 
 * or (iii) beneficial ownership of such entity. 
 *
 * This License is granted provided that You agree to the conditions described 
 * below. NCI grants You a non-exclusive, worldwide, perpetual, fully-paid-up, 
 * no-charge, irrevocable, transferable and royalty-free right and license in 
 * its rights in the fhh Software to (i) use, install, access, operate, 
 * execute, copy, modify, translate, market, publicly display, publicly perform,
 * and prepare derivative works of the fhh Software; (ii) distribute and 
 * have distributed to and by third parties the fhh Software and any 
 * modifications and derivative works thereof; and (iii) sublicense the 
 * foregoing rights set out in (i) and (ii) to third parties, including the 
 * right to license such rights to further third parties. For sake of clarity, 
 * and not by way of limitation, NCI shall have no right of accounting or right 
 * of payment from You or Your sub-licensees for the rights granted under this 
 * License. This License is granted at no charge to You.
 *
 * Your redistributions of the source code for the Software must retain the 
 * above copyright notice, this list of conditions and the disclaimer and 
 * limitation of liability of Article 6, below. Your redistributions in object 
 * code form must reproduce the above copyright notice, this list of conditions 
 * and the disclaimer of Article 6 in the documentation and/or other materials 
 * provided with the distribution, if any. 
 *
 * Your end-user documentation included with the redistribution, if any, must 
 * include the following acknowledgment: This product includes software 
 * developed by 5AM and the National Cancer Institute. If You do not include 
 * such end-user documentation, You shall include this acknowledgment in the 
 * Software itself, wherever such third-party acknowledgments normally appear.
 *
 * You may not use the names "The National Cancer Institute", "NCI", or "5AM" 
 * to endorse or promote products derived from this Software. This License does 
 * not authorize You to use any trademarks, service marks, trade names, logos or
 * product names of either NCI or 5AM, except as required to comply with the 
 * terms of this License. 
 *
 * For sake of clarity, and not by way of limitation, You may incorporate this 
 * Software into Your proprietary programs and into any third party proprietary 
 * programs. However, if You incorporate the Software into third party 
 * proprietary programs, You agree that You are solely responsible for obtaining
 * any permission from such third parties required to incorporate the Software 
 * into such third party proprietary programs and for informing Your 
 * sub-licensees, including without limitation Your end-users, of their 
 * obligation to secure any required permissions from such third parties before 
 * incorporating the Software into such third party proprietary software 
 * programs. In the event that You fail to obtain such permissions, You agree 
 * to indemnify NCI for any claims against NCI by such third parties, except to 
 * the extent prohibited by law, resulting from Your failure to obtain such 
 * permissions. 
 *
 * For sake of clarity, and not by way of limitation, You may add Your own 
 * copyright statement to Your modifications and to the derivative works, and 
 * You may provide additional or different license terms and conditions in Your 
 * sublicenses of modifications of the Software, or any derivative works of the 
 * Software as a whole, provided Your use, reproduction, and distribution of the
 * Work otherwise complies with the conditions stated in this License.
 *
 * THIS SOFTWARE IS PROVIDED "AS IS," AND ANY EXPRESSED OR IMPLIED WARRANTIES, 
 * (INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, 
 * NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE) ARE DISCLAIMED. IN NO 
 * EVENT SHALL THE NATIONAL CANCER INSTITUTE, 5AM SOLUTIONS, INC. OR THEIR 
 * AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, 
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, 
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; 
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, 
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR 
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF 
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
package gov.hhs.fhh.data.util;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Ethnicity;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Race;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.model.mfhp.LivingStatus;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import com.fiveamsolutions.hl7.model.AbstractCauseOfDeath;
import com.fiveamsolutions.hl7.model.AbstractDeceasedRelative;
import com.fiveamsolutions.hl7.model.AbstractDiagnosis;
import com.fiveamsolutions.hl7.model.AbstractProband;
import com.fiveamsolutions.hl7.model.AbstractRelative;
import com.fiveamsolutions.hl7.model.Deceased;
import com.fiveamsolutions.hl7.model.Male;
import com.fiveamsolutions.hl7.model.Pedigree;
import com.fiveamsolutions.hl7.model.Proband;
import com.fiveamsolutions.hl7.model.ProbandFactoryImpl;
import com.fiveamsolutions.hl7.model.age.Age;
import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.age.DateBasedExactAge;
import com.fiveamsolutions.hl7.model.age.ValueBasedEstimateAgeRange;
import com.fiveamsolutions.hl7.model.age.YearBasedEstimateAge;
import com.fiveamsolutions.hl7.model.condition.MfhpTrackedCondition;
import com.fiveamsolutions.hl7.model.mfhp.Gender;
import com.fiveamsolutions.hl7.model.mfhp.Height;
import com.fiveamsolutions.hl7.model.mfhp.ProbandDemographics;
import com.fiveamsolutions.hl7.model.mfhp.TwinStatus;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;
import com.fiveamsolutions.hl7.model.snomed.SNOMEDCode;

/**
 * @author bpickeral
 * 
 */
public class PedigreeFactoryTest {
    private final PedigreeFactory FACTORY = PedigreeFactory.getInstance();
    private final String PROBAND_NAME = "PROBAND_NAME";
    private final String MAUNT_NAME = "MAUNT_NAME";
    private final String MUNCLE_NAME = "MUNCLE_NAME";
    private final String PAUNT_NAME = "PAUNT_NAME";
    private final String PUNCLE_NAME = "PUNCLE_NAME";
    private final String MCOUSIN_NAME = "MCOUSIN_NAME";
    private final String PCOUSIN_NAME = "PCOUSIN_NAME";
    private final String FATHER_NAME = "FATHER_NAME";
    private final String MOTHER_NAME = "MOTHER_NAME";
    private final String MGRFTH_NAME = "MGRFTH_NAME";
    private final String MGRMTH_NAME = "MGRMTH_NAME";
    private final String PGRFTH_NAME = "PGRFTH_NAME";
    private final String PGRMTH_NAME = "PGRMTH_NAME";
    private final String SON_NAME = "SON_NAME";
    private final String DAU_NAME = "DAU_NAME";
    private final String GRNSON_NAME = "GRNSON_NAME";
    private final String GRNDAU_NAME = "GRNDAU_NAME";
    private final String HBRO_NAME = "HBRO_NAME";
    private final String HSIS_NAME = "HSIS_NAME";
    private final String NBRO_NAME = "NBRO_NAME";
    private final String NSIS_NAME = "NSIS_NAME";
    private final Date TEST_DOB = new Date();
    private final String RELATIVE_DOB = "01/01/1970";
    private final String RELATIVE_YOB = "1960";
    private final Weight TEST_WEIGHT = new Weight(180, WeightUnit.US);
    private final Height TEST_HEIGHT = new Height(72);
    private final List<Ethnicity> TEST_ETHNICITIES = new ArrayList<Ethnicity>();
    private final List<Race> TEST_RACES = new ArrayList<Race>();
    private final String RACE1_CODE = "0123456";
    private final String RACE1_DISPLAY = "race 1 display";
    private final String ETHNICITY_CODE = "012345";
    private final String ETHNICITY_DISPLAY = "ethnicity 1 display";
    private final boolean TEST_ADOPTED = true;
    private final List<ClinicalObservation> TEST_OBS = new ArrayList<ClinicalObservation>();
    private final TwinStatus TEST_TWIN_STATUS = TwinStatus.NO;
    private final Gender TEST_GENDER = Gender.MALE;
    private final Gender TEST_GENDER2 = Gender.FEMALE;
    private final Disease COD = new Disease();
    private final String COD_STR = "test disease";
    private final String COD_CODE = "01234";
    private final AgeRangeEnum AGE_AT_DEATH = AgeRangeEnum.FIFTIES;
    private final Date DATE_OF_BIRTH = FormatUtils.convertAgeToDOB(50);
    private final ClinicalObservation CLINICAL_OBSERVATION = new ClinicalObservation();

    @Before
    public void before() {
        Race race1 = new Race();
        race1.setCode(RACE1_CODE);
        race1.setDisplayName(RACE1_DISPLAY);
        TEST_RACES.add(race1);

        Ethnicity ethnicity = new Ethnicity();
        ethnicity.setCode(ETHNICITY_CODE);
        ethnicity.setDisplayName(ETHNICITY_DISPLAY);
        TEST_ETHNICITIES.add(ethnicity);

        CLINICAL_OBSERVATION.setDisease(COD);
        CLINICAL_OBSERVATION.setAgeRange(AGE_AT_DEATH);

        COD.setDisplayName(COD_STR);
        COD.setCode(COD_CODE);

        TEST_OBS.add(CLINICAL_OBSERVATION);
    }

    @Test
    public void convertPersonToPedigreeTest() {
        Proband emptyProband = ProbandFactoryImpl.getInstance().createMale();
        checkEmptyPedigree(emptyProband);

        Person proband = createPerson();

        Pedigree pedigree = FACTORY.createPedigree(proband);
        checkPedigree(pedigree);

        proband.setGender(TEST_GENDER2);
        pedigree = FACTORY.createPedigree(proband);
        checkPedigree(pedigree);
    }

    public Person createPerson() {
        Person proband = new Person();
        setPersonAttributes(proband);

        proband.getRelatives().add(createRelative(MAUNT_NAME, RelativeCode.MAUNT, true, RELATIVE_DOB));
        Relative mUncle = createRelative(MUNCLE_NAME, RelativeCode.MUNCLE, true, RELATIVE_YOB);
        proband.getRelatives().add(mUncle);
        Relative pAunt = createRelative(PAUNT_NAME, RelativeCode.PAUNT, false, null);
        proband.getRelatives().add(pAunt);
        proband.getRelatives().add(createRelative(PUNCLE_NAME, RelativeCode.PUNCLE, false, RELATIVE_DOB));
        proband.getRelatives().add(createChildRelative(MCOUSIN_NAME, RelativeCode.MCOUSN, mUncle, null));
        proband.getRelatives().add(createChildRelative(PCOUSIN_NAME, RelativeCode.PCOUSN, null, pAunt));
        proband.getRelatives().add(createRelative(FATHER_NAME, RelativeCode.NFTH, false, RELATIVE_YOB));
        proband.getRelatives().add(createRelative(MOTHER_NAME, RelativeCode.NMTH, false, null));
        proband.getRelatives().add(createRelative(MGRFTH_NAME, RelativeCode.MGRFTH, false, RELATIVE_DOB));
        proband.getRelatives().add(createRelative(MGRMTH_NAME, RelativeCode.MGRMTH, false, RELATIVE_YOB));
        proband.getRelatives().add(createRelative(PGRFTH_NAME, RelativeCode.PGRFTH, false, null));
        proband.getRelatives().add(createRelative(PGRMTH_NAME, RelativeCode.PGRMTH, false, RELATIVE_DOB));
        proband.getRelatives().add(createRelative(SON_NAME, RelativeCode.SON, false, RELATIVE_YOB));
        proband.getRelatives().add(createRelative(DAU_NAME, RelativeCode.DAU, false, null));
        proband.getRelatives().add(createRelative(GRNSON_NAME, RelativeCode.GRNSON, false, RELATIVE_DOB));
        proband.getRelatives().add(createRelative(GRNDAU_NAME, RelativeCode.GRNDAU, false, RELATIVE_YOB));
        proband.getRelatives().add(createRelative(NBRO_NAME, RelativeCode.NBRO, false, null));
        proband.getRelatives().add(createRelative(NSIS_NAME, RelativeCode.NSIS, false, RELATIVE_DOB));
        proband.getRelatives().add(createRelative(HBRO_NAME, RelativeCode.HBRO, false, RELATIVE_YOB));
        proband.getRelatives().add(createRelative(HSIS_NAME, RelativeCode.HSIS, false, null));
        return proband;
    }

    private Relative createRelative(String name, RelativeCode relCode, boolean isDeceased, String birthTime) {
        Relative rel = new Relative();
        rel.setCodeEnum(relCode);
        if (isDeceased) {
            rel.setLivingStatus(LivingStatus.NO.toString());
            rel.setAgeAtDeath(AGE_AT_DEATH);
            rel.setCauseOfDeath(COD);
            rel.getObservations().add(CLINICAL_OBSERVATION);
        } else {
            rel.setDateOfBirth(DATE_OF_BIRTH);
        }
        if (relCode.getImpliedGender() != null) {
            setRelativeAttributes(rel, relCode.getImpliedGender(), name, birthTime);
        } else {
            setRelativeAttributes(rel, TEST_GENDER, name, birthTime);
        }

        return rel;
    }

    private Relative createChildRelative(String name, RelativeCode relCode, Relative father, Relative mother) {
        Relative relative = createRelative(name, relCode, false, RELATIVE_DOB);
        if (father != null) {
            relative.setFather(father);
        }
        if (mother != null) {
            relative.setMother(mother);
        }
        return relative;
    }

    private void setPersonAttributes(Person p) {
        p.setName(PROBAND_NAME);
        p.setDateOfBirth(TEST_DOB);
        p.setGender(TEST_GENDER);
        p.setWeight(TEST_WEIGHT);
        p.setEthnicities(TEST_ETHNICITIES);
        p.setRaces(TEST_RACES);
        p.setAdopted(TEST_ADOPTED);
        p.setTwinStatus(TEST_TWIN_STATUS);
        p.setObservations(TEST_OBS);
        p.setHeight(TEST_HEIGHT);
    }

    private void setRelativeAttributes(Relative p, Gender gender, String name, String birthTime) {
        p.setName(name);
        if (birthTime != null) {
            p.setBirthTime(birthTime);
        } else {
            p.setEstimatedAgeRange(AgeRangeEnum.FORTIES);
        }
        
        p.setGender(gender);
        p.setEthnicities(TEST_ETHNICITIES);
        p.setRaces(TEST_RACES);
        p.setAdopted(TEST_ADOPTED);
        p.setTwinStatus(TEST_TWIN_STATUS);
        p.setObservations(TEST_OBS);
    }

    private void checkEmptyPedigree(Proband proband) {
        assertNull(FACTORY.getFixedRelative(proband, RelativeCode.MGRMTH));
        assertNull(FACTORY.getFixedRelative(proband, RelativeCode.MGRFTH));
        assertNull(FACTORY.getFixedRelative(proband, RelativeCode.PGRMTH));
        assertNull(FACTORY.getFixedRelative(proband, RelativeCode.PGRFTH));
    }

    private void checkPedigree(Pedigree pedigree) {
        AbstractProband proband = (AbstractProband) pedigree.getSelf();
        checkPersonAttributes(proband, proband.isMale());
        checkChildrensParents(proband);

        // Check correct parents
        checkRelativeAttributes(FACTORY.getFixedRelative(proband, RelativeCode.NMTH), MOTHER_NAME, false, false);
        checkRelativeAttributes(FACTORY.getFixedRelative(proband, RelativeCode.NFTH), FATHER_NAME, true, false);
        assertTrue(proband.getMother().getChildren().contains(proband));
        assertTrue(proband.getFather().getChildren().contains(proband));

        // Check correct Grandparents
        com.fiveamsolutions.hl7.model.AbstractRelative mGrandmother = FACTORY.getFixedRelative(proband,
                RelativeCode.MGRMTH);
        com.fiveamsolutions.hl7.model.AbstractRelative mGrandfather = FACTORY.getFixedRelative(proband,
                RelativeCode.MGRFTH);
        com.fiveamsolutions.hl7.model.AbstractRelative pGrandmother = FACTORY.getFixedRelative(proband,
                RelativeCode.PGRMTH);
        com.fiveamsolutions.hl7.model.AbstractRelative pGrandfather = FACTORY.getFixedRelative(proband,
                RelativeCode.PGRFTH);
        checkRelativeAttributes(mGrandmother, MGRMTH_NAME, false, false);
        assertTrue(mGrandmother.getChildren().contains(proband.getMother()));
        checkRelativeAttributes(mGrandfather, MGRFTH_NAME, true, false);
        assertTrue(mGrandfather.getChildren().contains(proband.getMother()));
        checkRelativeAttributes(pGrandmother, PGRMTH_NAME, false, false);
        assertTrue(pGrandmother.getChildren().contains(proband.getFather()));
        checkRelativeAttributes(pGrandfather, PGRFTH_NAME, true, false);
        assertTrue(pGrandfather.getChildren().contains(proband.getFather()));

        // Check correct aunt and uncle
        checkRelativeAttributes((AbstractRelative) FACTORY.getVariableRelatives(proband, RelativeCode.MAUNT).get(0),
                MAUNT_NAME, isMale(RelativeCode.MAUNT.getImpliedGender()), true);
        checkRelativeAttributes((AbstractRelative) FACTORY.getVariableRelatives(proband, RelativeCode.MUNCLE).get(0),
                MUNCLE_NAME, isMale(RelativeCode.MUNCLE.getImpliedGender()), true);
        checkRelativeAttributes((AbstractRelative) FACTORY.getVariableRelatives(proband, RelativeCode.PAUNT).get(0),
                PAUNT_NAME, isMale(RelativeCode.PAUNT.getImpliedGender()), false);
        checkRelativeAttributes((AbstractRelative) FACTORY.getVariableRelatives(proband, RelativeCode.PUNCLE).get(0),
                PUNCLE_NAME, isMale(RelativeCode.PUNCLE.getImpliedGender()), false);

        // Check Children
        checkRelativeAttributes((AbstractRelative) FACTORY.getVariableRelatives(proband, RelativeCode.SON).get(0),
                SON_NAME, isMale(RelativeCode.SON.getImpliedGender()), false);
        checkRelativeAttributes((AbstractRelative) FACTORY.getVariableRelatives(proband, RelativeCode.DAU).get(0),
                DAU_NAME, isMale(RelativeCode.DAU.getImpliedGender()), false);

        // Check links to cousins
        checkRelativeAttributes((AbstractRelative) FACTORY.getVariableRelatives(proband, RelativeCode.MCOUSN).get(0),
                MCOUSIN_NAME, true, false);
        checkRelativeAttributes((AbstractRelative) FACTORY.getVariableRelatives(proband, RelativeCode.PCOUSN).get(0),
                PCOUSIN_NAME, true, false);
    }

    private void checkPersonAttributes(com.fiveamsolutions.hl7.model.AbstractProband person, boolean isMale) {
        ProbandDemographics demographics = (ProbandDemographics) person.getDemographics();
        assertEquals(PROBAND_NAME, demographics.getName());
        assertEquals(TEST_DOB, ((DateBasedExactAge) person.getAge()).getDateOfBirth().getTime());
        assertEquals(TEST_HEIGHT.getValue(), demographics.getHeight().getValue());
        assertEquals(TEST_WEIGHT, demographics.getWeight());
        assertEquals(TEST_TWIN_STATUS, demographics.getTwinStatus());
        assertEquals(isMale, person.isMale());
        assertEquals(!isMale, person.isFemale());
        assertEquals(1, demographics.getRaces().size());
        assertEquals(1, demographics.getEthnicities().size());
        AbstractDiagnosis diagnosis = (AbstractDiagnosis) person.getDiagnoses().toArray()[0];
        ValueBasedEstimateAgeRange ageRange = (ValueBasedEstimateAgeRange) diagnosis.getAgeAtOnset();
        assertEquals(AgeRangeEnum.FIFTIES.getLowValue(), ageRange.getLowerBoundAge().toString());
        assertEquals(AgeRangeEnum.FIFTIES.getHighValue(), ageRange.getUpperBoundAge().toString());
        MfhpTrackedCondition condition = (MfhpTrackedCondition) diagnosis.getDiagnosedCondition();
        SNOMEDCode code = (SNOMEDCode) condition.getCodes().toArray()[0];
        assertEquals(COD_STR, code.getValue());
        assertEquals(COD_CODE, code.getCode());
    }

    private void checkRelativeAttributes(com.fiveamsolutions.hl7.model.AbstractRelative relative, String name,
            boolean isMale, boolean isDeceased) {
        ProbandDemographics demographics = (ProbandDemographics) relative.getDemographics();
        assertEquals(demographics.getName(), name);
        if (isDeceased) {
            assertTrue(relative instanceof Deceased);
            AbstractCauseOfDeath cod = (AbstractCauseOfDeath) ((AbstractDeceasedRelative) relative).getCauseOfDeath();
            SNOMEDCode code = (SNOMEDCode) ((MfhpTrackedCondition) cod.getCondition()).getCodes().toArray()[0];
            assertEquals(COD_STR, code.getValue());
            assertEquals(COD_CODE, code.getCode());

            ValueBasedEstimateAgeRange ageRange = (ValueBasedEstimateAgeRange) cod.getAgeAtDeath();
            assertEquals(AgeRangeEnum.FIFTIES.getLowValue(), String.valueOf(ageRange.getLowerBoundAge()));
        } else {
            assertFalse(relative instanceof Deceased);
        }

        assertEquals(TEST_TWIN_STATUS, demographics.getTwinStatus());
        assertEquals(isMale, relative.isMale());
        assertEquals(!isMale, relative.isFemale());
        
        Age age = relative.getAge();
        if (age instanceof DateBasedExactAge) {
            DateBasedExactAge exactAge = (DateBasedExactAge) age;
            assertEquals(RELATIVE_DOB, FormatUtils.format(exactAge.getDateOfBirth().getTime()));
        } else if (age instanceof ValueBasedEstimateAgeRange) {
            ValueBasedEstimateAgeRange ageRange = (ValueBasedEstimateAgeRange) age;
            assertEquals(AgeRangeEnum.FORTIES.getLowValue(), String.valueOf(ageRange.getLowerBoundAge()));
        } else if (age instanceof YearBasedEstimateAge) {
            YearBasedEstimateAge yearAge = (YearBasedEstimateAge) age;
            assertEquals(RELATIVE_YOB, String.valueOf(yearAge.getYear()));
        }
    }

    private void checkChildrensParents(com.fiveamsolutions.hl7.model.Person proband) {
        for (com.fiveamsolutions.hl7.model.Person currChild : proband.getChildren()) {
            if (proband instanceof Male) {
                assertEquals(proband, currChild.getFather());
            } else {
                assertEquals(proband, currChild.getMother());
            }
        }
    }

    private boolean isMale(Gender gender) {
        if (gender.equals(Gender.MALE)) {
            return true;
        } else {
            return false;
        }
    }

    @Test
    public void getFixedRelativeIllegalTest() {
        Proband proband = ProbandFactoryImpl.getInstance().createMale();
        try {
            FACTORY.getFixedRelative(proband, RelativeCode.COUSN);
            fail();
        } catch (Exception e) {
            // Expected
        }
    }
}
