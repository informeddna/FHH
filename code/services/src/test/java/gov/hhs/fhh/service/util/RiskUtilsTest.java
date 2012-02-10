package gov.hhs.fhh.service.util;

import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.service.FhhWebException;
import gov.hhs.fhh.service.util.FhhUtils;
import gov.hhs.fhh.service.util.RiskUtils;

import java.util.GregorianCalendar;

import org.apache.commons.lang.StringUtils;
import org.junit.Test;

import com.fiveamsolutions.hl7.model.mfhp.Gender;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;

public class RiskUtilsTest {

    private final String DUMMY_NAME = "John Doe";
    public static final String DUMMY_KEY = "80000000";
    private final Gender DUMMY_GENDER = Gender.MALE;
    private final GregorianCalendar DUMMY_DATE = new GregorianCalendar(1970, 10, 7, 0, 0, 0);
    public static final String IMPORT_COMPLETE = "importComplete";
    public static final String BASIC_IMPORT_TEST = "/Basic_Test_FamilyHistory.xml";
    private final Weight BASIC_TEST_WEIGHT = new Weight(180, WeightUnit.METRIC);

    @Test
    public void testCreateXMLFile() throws FhhWebException {
        final Person p = new Person();
        p.setName(DUMMY_NAME);

        p.setDateOfBirth(DUMMY_DATE.getTime());
        p.setWeight(BASIC_TEST_WEIGHT);
        p.setGender(DUMMY_GENDER);

        FhhUtils.addRequiredRelativesToTree(p);

        assertTrue(StringUtils.contains(RiskUtils.getInstance().calculateColorectalRisk(p), "lowUnder50"));
    }

}
