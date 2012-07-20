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
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.service.FhhWebException;
import gov.hhs.fhh.service.util.FhhUtils;
import gov.hhs.fhh.web.test.AbstractFhhWebTest;
import gov.hhs.fhh.web.util.FhhHttpSessionUtil;

import java.util.GregorianCalendar;

import org.apache.commons.lang.StringUtils;
import org.junit.Before;
import org.junit.Test;

import com.fiveamsolutions.hl7.model.mfhp.Gender;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;

/**
 * @author bpickeral
 *
 */
public class DiabetesRiskActionTest extends AbstractFhhWebTest {
    private final DiabetesRiskAction action = new DiabetesRiskAction();
    private final Person p = new Person();

    private final String SUCCESS = "success";
    private final String MIN_HEX = "80000000";

    private final String DUMMY_NAME = "John Doe";
    public static final String DUMMY_KEY = "80000000";
    private final Gender DUMMY_GENDER = Gender.MALE;
    private final GregorianCalendar DUMMY_DATE = new GregorianCalendar(1970, 10, 7, 0, 0, 0);
    public static final String IMPORT_COMPLETE = "importComplete";
    public static final String BASIC_IMPORT_TEST = "/Basic_Test_FamilyHistory.xml";
    private final Weight BASIC_TEST_WEIGHT = new Weight(180, WeightUnit.US);

    @Before
    public void before() throws FhhWebException {
        p.setName(DUMMY_NAME);

        p.setDateOfBirth(DUMMY_DATE.getTime());
        p.setWeight(BASIC_TEST_WEIGHT);
        p.setGender(DUMMY_GENDER);

        FhhUtils.addRequiredRelativesToTree(p);

        FhhHttpSessionUtil.getSession().setAttribute(MIN_HEX, p);
        FhhHttpSessionUtil.getSession().setAttribute(FhhHttpSessionUtil.ROOT_KEY, MIN_HEX);
        action.prepare();
    }

    @Test
    public void prepare() {
        FhhHttpSessionUtil.getSession().setAttribute(MIN_HEX, null);
        action.setDateOfBirthString(null);
        action.prepare();

        assertNull(action.getPerson());
        assertNull(action.getDateOfBirthString());

        FhhHttpSessionUtil.getSession().setAttribute(MIN_HEX, p);
        action.prepare();

        assertEquals(p, action.getPerson());
        assertNotNull(action.getDateOfBirthString());
        assertFalse(action.isGestationalDiabetes());
        assertFalse(action.isHypertension());
        assertFalse(action.isNuclearFamilyDiabetes());

    }

    @Test
    public void diabetes() throws Exception {
        assertEquals(SUCCESS, action.diabetesAdditionalInformation());
    }

    @Test
    public void diabetesRisk() {
        action.setDateOfBirthString("01/01/1980");
        action.setHeightUnit1("6");
        action.setHeightUnit2("2");
        action.setHeightMetric("");
        action.setWeightString("170");

        assertEquals(SUCCESS, action.diabetesRisk());
        assertTrue(StringUtils.contains(action.getRiskHTML(), "not elevated"));
    }

    @Test
    public void downloadDiabetesRisk() throws Exception {
        assertEquals("downloadDiabetesRiskFile", action.downloadDiabetesRisk());
        assertNotNull(action.getRiskFile());
        assertEquals("John_Doe_Diabetes_Risk.pdf", action.getFileName());
    }

    @Test
    public void downloadPhysicianLetter() throws Exception {
        assertEquals("downloadDiabetesRiskFile", action.downloadDiabetesLetter());
        assertNotNull(action.getRiskFile());
        assertEquals("John_Doe_Diabetes_Risk_Physician_Letter.pdf", action.getFileName());
    }

}