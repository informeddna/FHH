package gov.hhs.fhh.service.util;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.service.FhhWebException;
import gov.nih.nci.drc.util.FileLanguageCode;
import gov.nih.nci.drc.util.ValidCRCRAFileNames;
import gov.nih.nci.drc.util.ValidDRCFileNames;

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
    public void calculateColorectalRisk() throws FhhWebException {
        final RiskResponseBuilder builder = new RiskResponseBuilder();
        RiskClient.getInstance().calculateColorectalRisk(p, builder);
        assertEquals(ValidCRCRAFileNames.constructFileName(
                ValidCRCRAFileNames.LOW_UNDER_50, ValidCRCRAFileNames.PDF_EXT), builder.getPatient());
        assertEquals(ValidCRCRAFileNames.constructFileName(
                ValidCRCRAFileNames.LOW_UNDER_50, ValidCRCRAFileNames.HTML_EXT), builder.getMessage());
        assertEquals(ValidCRCRAFileNames.constructFileName(
                ValidCRCRAFileNames.PHY_LOW, ValidCRCRAFileNames.PDF_EXT), builder.getPhysician());
    }

    @Test
    public void calculateDiabetesRisk() throws FhhWebException {
        final RiskResponseBuilder builder = new RiskResponseBuilder();
        RiskClient.getInstance().calculateDiabetesRisk(p, builder);
        assertEquals(ValidDRCFileNames.constructFileName(
                ValidDRCFileNames.RISK_LOW, ValidDRCFileNames.PDF_EXT), builder.getPatient());
        assertEquals(ValidDRCFileNames.constructFileName(
                ValidDRCFileNames.RISK_LOW, ValidDRCFileNames.HTML_EXT), builder.getMessage());
        assertEquals(ValidDRCFileNames.constructFileName(
                ValidDRCFileNames.PHY_LOW, ValidDRCFileNames.PDF_EXT), builder.getPhysician());
    }

    @Test
    public void getRiskFile() throws Exception {
        byte[] b = RiskClient.getInstance().getRiskFile(ValidCRCRAFileNames.constructFileName(
                ValidCRCRAFileNames.LOW_UNDER_50, ValidCRCRAFileNames.PDF_EXT),
                FileLanguageCode.EN);
        assertTrue(b.length > 0);
    }
}
