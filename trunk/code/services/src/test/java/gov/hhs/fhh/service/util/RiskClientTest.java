package gov.hhs.fhh.service.util;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.service.FhhWebException;
import gov.nih.nci.drc.util.ValidRiskFileNames;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.GregorianCalendar;

import org.junit.Before;
import org.junit.Test;

import com.fiveamsolutions.hl7.model.mfhp.Gender;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;

public class RiskClientTest {

    private final Person p = new Person();

    private final String DUMMY_NAME = "John Doe";
    public static final String DUMMY_KEY = "80000000";
    private final Gender DUMMY_GENDER = Gender.MALE;
    private final GregorianCalendar DUMMY_DATE = new GregorianCalendar(1970, 10, 7, 0, 0, 0);
    public static final String IMPORT_COMPLETE = "importComplete";
    public static final String BASIC_IMPORT_TEST = "/Basic_Test_FamilyHistory.xml";
    private final Weight BASIC_TEST_WEIGHT = new Weight(180, WeightUnit.METRIC);

    @Before
    public void before() {
        p.setName(DUMMY_NAME);

        p.setDateOfBirth(DUMMY_DATE.getTime());
        p.setWeight(BASIC_TEST_WEIGHT);
        p.setGender(DUMMY_GENDER);

        FhhUtils.addRequiredRelativesToTree(p);
    }

    @Test
    public void calculateRisk() throws FhhWebException {
        final RiskResponseBuilder builder = new RiskResponseBuilder();
        RiskClient.getInstance().calculateRisk(p, builder);
        assertEquals(ValidRiskFileNames.LOW_UNDER_50.getName(), builder.getPatient());
        assertEquals(ValidRiskFileNames.LOW_UNDER_50.getName(), builder.getMessage());
        assertEquals(ValidRiskFileNames.PHY_LOW.getName(), builder.getPhysician());
    }

    @Test
    public void getRiskFile() throws Exception {
        byte[] b = RiskClient.getInstance().getRiskFile(ValidRiskFileNames.LOW_UNDER_50.getName());
        assertTrue(b.length > 0);
    }
}
