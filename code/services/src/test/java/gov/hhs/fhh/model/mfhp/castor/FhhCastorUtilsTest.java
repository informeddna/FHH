package gov.hhs.fhh.model.mfhp.castor;

import gov.hhs.fhh.xml.PatientPerson;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;

import junit.framework.Assert;

import org.exolab.castor.mapping.MappingException;
import org.exolab.castor.xml.MarshalException;
import org.exolab.castor.xml.ValidationException;
import org.junit.Test;

public class FhhCastorUtilsTest {

    @Test
    public void testGetXmlBody() {
        String xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><patient classCode=\"PAT\"><patientPerson>"
                + "<mooo></mooo></patientPerson></patient>";
        String result = FhhCastorUtils.getXmlBody(xml);
        Assert.assertEquals("<?xml version=\"1.0\" encoding=\"UTF-8\"?><patientPerson><mooo></mooo></patientPerson>",
                result);
    }

    @Test
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
        FhhCastorUtils.unmarshallXMLFile(fhString, patientPerson);
        Assert.assertNotNull(patientPerson);
    }

    @Test
    public void testMarshallXmlFileStringWriterObject() throws ValidationException, MarshalException, MappingException,
            IOException {
        StringWriter result = new StringWriter();
        PatientPerson person = new PatientPerson();
        person.setName("mooo");
        FhhCastorUtils.marshallXmlFile(result, person);
        Assert.assertTrue(result.toString().contains("mooo"));
    }

    @Test
    public void testConvertHTMLToXML() throws IOException {
        String html = FhhCastorUtils.convertHTMLToXML(FhhCastorUtils.getInputStreamAsString(FhhCastorUtilsTest.class
                .getResourceAsStream("/Basic_Test_FamilyHistory.xml")));
        Assert.assertNotNull(html);
    }

}
