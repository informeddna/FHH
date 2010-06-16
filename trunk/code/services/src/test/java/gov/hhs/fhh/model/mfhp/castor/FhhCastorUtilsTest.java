package gov.hhs.fhh.model.mfhp.castor;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.test.AbstractHibernateTestCase;
import gov.hhs.fhh.xml.PatientPerson;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;

import junit.framework.Assert;

import org.apache.log4j.Logger;
import org.exolab.castor.mapping.MappingException;
import org.exolab.castor.xml.MarshalException;
import org.exolab.castor.xml.ValidationException;
import org.junit.Test;

public class FhhCastorUtilsTest extends AbstractHibernateTestCase {
    
    private static final Logger LOG = Logger.getLogger(FhhCastorUtilsTest.class);


//    @Test
    public void testGetXmlBody() {
        String xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><patient classCode=\"PAT\"><patientPerson>"
                + "<mooo></mooo></patientPerson></patient>";
        String result = FhhCastorUtils.getXmlBody(xml);
        Assert.assertEquals("<?xml version=\"1.0\" encoding=\"UTF-8\"?><patientPerson><mooo></mooo></patientPerson>",
                result);
    }

//    @Test
    public void testGetInputStreamAsString() throws IOException {
        ByteArrayInputStream bis = new ByteArrayInputStream("mooo".getBytes());
        String result = FhhCastorUtils.getInputStreamAsString(bis);
        Assert.assertEquals("mooo", result);
    }

    @Test
    public void testUnmarshallXMLFile() throws ValidationException, MarshalException, MappingException, IOException {
        PatientPerson patientPerson = new PatientPerson();
        InputStream fhStream = FhhCastorUtilsTest.class.getResourceAsStream("/Basic_Test_FamilyHistory.xml");
        String fhString = FhhCastorUtils.getInputStreamAsString(fhStream);
        assertNotNull(fhString);
        LOG.debug(fhString);
        FhhCastorUtils.unmarshallXMLFile(fhString, patientPerson);
        assertNotNull(patientPerson);
        assertNotNull("gender node is null (this means marshalling failed)", patientPerson.getGenderNode());
        assertTrue("proband has the wrong code for Male", patientPerson.getGenderNode().getCode().equalsIgnoreCase("248153007"));
        assertNotNull(patientPerson.getRelatives());
        assertFalse(patientPerson.getRelatives().isEmpty());
    }

//    @Test
    public void testMarshallXmlFileStringWriterObject() throws ValidationException, MarshalException, MappingException,
            IOException {
        StringWriter result = new StringWriter();
        PatientPerson person = new PatientPerson();
        person.setName("mooo");
        FhhCastorUtils.marshallXmlFile(result, person);
        Assert.assertTrue(result.toString().contains("mooo"));
    }

//    @Test
    public void testConvertHTMLToXML() throws IOException {
        String html = FhhCastorUtils.convertHTMLToXML(FhhCastorUtils.getInputStreamAsString(FhhCastorUtilsTest.class
                .getResourceAsStream("/Basic_Test_FamilyHistory.xml")));
        Assert.assertNotNull(html);
    }

}
