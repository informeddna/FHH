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
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertSame;
import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.UserEnteredDisease;
import gov.hhs.fhh.model.mfhp.LivingStatus;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

import org.junit.Test;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.mfhp.Height;
import com.fiveamsolutions.hl7.model.mfhp.HeightUnit;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;

/**
 * @author bpickeral
 *
 */
public class PersonUtilsTest {
    private final Integer AGE = 55;
    private final Integer HEIGHT_IN_INCHES = 60;
    private final Integer HEIGHT_IN_CMS = 181;
    private final Integer WEIGHT_IN_POUNDS = 100;
    private final Integer WEIGHT_IN_KILOS = 64;
    private final String XSS_INPUT = "<>";
    private final String FILTERED_XSS_INPUT = "&lt;&gt;";

    private static final String PERSON_NAME = "test name";
    private static final String DOC_NAME = "document.xml";

    @Test
    public void convertAgeToYearTest() {
        final Calendar calendar = Calendar.getInstance();
        assertEquals(FormatUtils.convertAgeToYear(AGE), Integer.toString(calendar.get(Calendar.YEAR) - AGE));
    }

    @Test
    public void testCheckAndCorrectUUID() {
        final List<Relative> relatives = new ArrayList<Relative>();
        final Person p1 = new Person();
        final UUID uuid = p1.getUuid();
        relatives.add(new Relative(p1, RelativeCode.BRO));
        relatives.add(new Relative(new Person(), RelativeCode.SIS));
        //creating 2nd person with same UUID
        final Relative p2 = new Relative(new Person(), RelativeCode.SIS);
        p2.setUuid(uuid);
        assertSame(p1.getUuid(), p2.getUuid());
        PersonUtils.checkAndCorrectUUID(p2, relatives);
        assertFalse(p1.getUuid().equals(p2.getUuid()));
    }

    @Test
    public void addRelativesTest() {
        final Person p = new Person();
        PersonUtils.addRelatives(p, 2, RelativeCode.NSIS);
        assertEquals(2, p.getRelatives().size());
        assertEquals(RelativeCode.NSIS.toString(), p.getRelatives().get(0).getCode());
        assertEquals(RelativeCode.NSIS.toString(), p.getRelatives().get(1).getCode());
    }

    @Test
    public void testMatchingUnitsBMI() {
        final DecimalFormat format = new DecimalFormat("0.0");
        final Person p = new Person();
        p.setHeight(new Height(HEIGHT_IN_INCHES));
        p.setWeight(new Weight(WEIGHT_IN_POUNDS, WeightUnit.US));

        double bmi = WEIGHT_IN_POUNDS * PersonUtils.US_BMI_NUMERATOR / (HEIGHT_IN_INCHES * HEIGHT_IN_INCHES);
        assertEquals(PersonUtils.calculateBmi(p), format.format(bmi));

        p.setHeight(new Height(HEIGHT_IN_CMS, HeightUnit.METRIC));
        p.setWeight(new Weight(WEIGHT_IN_KILOS, WeightUnit.METRIC));


        bmi = WEIGHT_IN_KILOS / (Math.pow((HEIGHT_IN_CMS / 100.0), 2));

        assertEquals(format.format(bmi), PersonUtils.calculateBmi(p));
    }

    @Test
    public void testNotMatchingUnitsBMI() {
        final DecimalFormat format = new DecimalFormat("0.0");

        final Person p = new Person();
        p.setHeight(new Height(HEIGHT_IN_INCHES));
        p.setWeight(new Weight(WEIGHT_IN_KILOS, WeightUnit.METRIC));

        final double bmi = WEIGHT_IN_KILOS / Math.pow((HEIGHT_IN_INCHES * PersonUtils.INCH_TO_CMS) / 100.0, 2.0);
        assertEquals(format.format(bmi), PersonUtils.calculateBmi(p));

    }

    @Test
    public void testBadDataBMI() {
        final Person p = new Person();
        p.setHeight(new Height(null));
        p.setWeight(new Weight(WEIGHT_IN_KILOS, WeightUnit.METRIC));

        assertNull(PersonUtils.calculateBmi(p));

    }

    @Test
    public void testMetricHeightSquared() {
        final Person p = new Person();
        p.setHeight(new Height(60));

        assertEquals(2.322576, PersonUtils.getMetricHeightSquared(p), 0.01);
    }

    @Test
    public void testUSHeightSquared() {
        final Person p = new Person();
        p.setHeight(new Height(100, HeightUnit.METRIC));

        assertEquals(1550.00, PersonUtils.getUSHeightSquared(p), 0.01);
    }


    @Test
    public void testUSBMI() {
        final Person p = new Person();
        p.setHeight(new Height(HEIGHT_IN_INCHES));
        p.setWeight(new Weight(WEIGHT_IN_POUNDS, WeightUnit.US));

        double bmi = WEIGHT_IN_POUNDS * 703.0 / (HEIGHT_IN_INCHES * HEIGHT_IN_INCHES);
        assertEquals(PersonUtils.calculateUSBmi(p), bmi, 0.01);


        p.setHeight(new Height(HEIGHT_IN_CMS, HeightUnit.METRIC));
        bmi = WEIGHT_IN_POUNDS * PersonUtils.US_BMI_NUMERATOR / Math.pow(HEIGHT_IN_CMS / PersonUtils.INCH_TO_CMS, 2.0);
        assertEquals(PersonUtils.calculateUSBmi(p), bmi, 0.01);




    }

    @Test
    public void testMetricBMI() {
        final Person p = new Person();
        p.setHeight(new Height(HEIGHT_IN_CMS, HeightUnit.METRIC));
        p.setWeight(new Weight(WEIGHT_IN_KILOS, WeightUnit.METRIC));


        double bmi = WEIGHT_IN_KILOS  / (Math.pow(HEIGHT_IN_CMS / 100.0, 2));
        assertEquals(bmi, PersonUtils.calculateMetricBmi(p), 0.01);

        p.setHeight(new Height(HEIGHT_IN_INCHES));

        bmi = WEIGHT_IN_KILOS / Math.pow((HEIGHT_IN_INCHES * PersonUtils.INCH_TO_CMS) / 100.0, 2.0);
        assertEquals(bmi, PersonUtils.calculateMetricBmi(p), 0.01);

    }

    @Test
    public void testSetKnownParentsAndImmediateParents() {
        final Person p = new Person();
        final Relative relative = new Relative();
        addRequiredRelativesToTree(p);
        PersonUtils.setImmediateRelatives(p);

        relative.setCodeEnum(RelativeCode.MAUNT);
        PersonUtils.setKnownParents(p, relative);
        assertEquals(relative.getMother(), p.getMother().getMother());
        assertEquals(relative.getFather(), p.getMother().getFather());

        relative.setCodeEnum(RelativeCode.MUNCLE);
        PersonUtils.setKnownParents(p, relative);
        assertEquals(relative.getMother(), p.getMother().getMother());
        assertEquals(relative.getFather(), p.getMother().getFather());

        relative.setCodeEnum(RelativeCode.PAUNT);
        PersonUtils.setKnownParents(p, relative);
        assertEquals(relative.getMother(), p.getFather().getMother());
        assertEquals(relative.getFather(), p.getFather().getFather());

        relative.setCodeEnum(RelativeCode.PUNCLE);
        PersonUtils.setKnownParents(p, relative);
        assertEquals(relative.getMother(), p.getFather().getMother());
        assertEquals(relative.getFather(), p.getFather().getFather());

        relative.setCodeEnum(RelativeCode.NBRO);
        PersonUtils.setKnownParents(p, relative);
        assertEquals(relative.getMother(), p.getMother());
        assertEquals(relative.getFather(), p.getFather());

        relative.setCodeEnum(RelativeCode.NSIS);
        PersonUtils.setKnownParents(p, relative);
        assertEquals(relative.getMother(), p.getMother());
        assertEquals(relative.getFather(), p.getFather());
    }

    @Test
    public void testSetAllKnownParents() {
        final Person p = new Person();
        addRequiredRelativesToTree(p);
        PersonUtils.setImmediateRelatives(p);

        final Relative maunt = new Relative();
        maunt.setCodeEnum(RelativeCode.MAUNT);
        p.getRelatives().add(maunt);
        final Relative muncle = new Relative();
        muncle.setCodeEnum(RelativeCode.MUNCLE);
        p.getRelatives().add(muncle);
        final Relative paunt = new Relative();
        paunt.setCodeEnum(RelativeCode.PAUNT);
        p.getRelatives().add(paunt);
        final Relative puncle = new Relative();
        puncle.setCodeEnum(RelativeCode.PUNCLE);
        p.getRelatives().add(puncle);
        final Relative nbro = new Relative();
        nbro.setCodeEnum(RelativeCode.NBRO);
        p.getRelatives().add(nbro);
        final Relative nsis = new Relative();
        nsis.setCodeEnum(RelativeCode.NSIS);
        p.getRelatives().add(nsis);

        PersonUtils.setAllKnownParents(p);

        assertEquals(maunt.getMother(), p.getMother().getMother());
        assertEquals(maunt.getFather(), p.getMother().getFather());

        assertEquals(muncle.getMother(), p.getMother().getMother());
        assertEquals(muncle.getFather(), p.getMother().getFather());

        assertEquals(paunt.getMother(), p.getFather().getMother());
        assertEquals(paunt.getFather(), p.getFather().getFather());

        assertEquals(puncle.getMother(), p.getFather().getMother());
        assertEquals(puncle.getFather(), p.getFather().getFather());

        assertEquals(nbro.getMother(), p.getMother());
        assertEquals(nbro.getFather(), p.getFather());

        assertEquals(nsis.getMother(), p.getMother());
        assertEquals(nsis.getFather(), p.getFather());
    }

    /**
     * Adds Mother, father, and grandparents to the family tree.
     * @param p <code>Person</code> object that the relatives will be added to.
     */
    private void addRequiredRelativesToTree(final Person p) {
        PersonUtils.addRelative(p, RelativeCode.NMTH);
        PersonUtils.addRelative(p, RelativeCode.NFTH);
        PersonUtils.addRelative(p, RelativeCode.MGRMTH);
        PersonUtils.addRelative(p, RelativeCode.MGRFTH);
        PersonUtils.addRelative(p, RelativeCode.PGRMTH);
        PersonUtils.addRelative(p, RelativeCode.PGRFTH);
    }

    @Test
    public void testXSSFilter() {
        final Person p = new Person();
        assertNotNull(p);

        p.setName(XSS_INPUT);
        final Relative mother = PersonUtils.addRelative(p, RelativeCode.NMTH);
        mother.setName(XSS_INPUT);
        mother.setLivingStatus(LivingStatus.NO.toString());

        final ClinicalObservation obs = new ClinicalObservation();
        final UserEnteredDisease disease = new UserEnteredDisease();
        disease.setOriginalText(XSS_INPUT);
        obs.setDisease(disease);
        obs.setAgeRange(AgeRangeEnum.FIFTIES);

        final UserEnteredDisease codDisease = new UserEnteredDisease();
        codDisease.setOriginalText(XSS_INPUT);
        mother.setCauseOfDeath(codDisease);
        mother.setAgeAtDeath(AgeRangeEnum.FIFTIES);

        final ClinicalObservation obs2 = new ClinicalObservation();
        final UserEnteredDisease disease2 = new UserEnteredDisease();
        disease2.setOriginalText(XSS_INPUT);
        obs2.setDisease(disease2);
        obs2.setAgeRange(AgeRangeEnum.FIFTIES);

        p.getObservations().add(obs);
        mother.getObservations().add(obs2);

        assertEquals(FILTERED_XSS_INPUT, p.getName());
        assertEquals(FILTERED_XSS_INPUT, p.getObservations().get(0).getDisease().getOriginalText());
        assertEquals(FILTERED_XSS_INPUT, mother.getName());
        assertEquals(FILTERED_XSS_INPUT, mother.getObservations().get(0).getDisease().getOriginalText());
        assertEquals(FILTERED_XSS_INPUT, mother.getCauseOfDeath().getOriginalText());
    }

    @Test
    public void getDocumentNameForPerson() {
        final Person p = new Person();
        p.setName(PERSON_NAME);
        String result = PersonUtils.getFileNameForPerson(p, DOC_NAME);
        assertEquals(PERSON_NAME.replaceAll(" ", "_") + "_" + DOC_NAME, result);
    }
}
