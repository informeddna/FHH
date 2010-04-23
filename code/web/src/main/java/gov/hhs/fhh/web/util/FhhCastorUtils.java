/**
 * 
 * Family Health History Portal 
 * END USER AGREEMENT
 * 
 * The U.S. Department of Health & Human Services (�HHS�) hereby irrevocably 
 * grants to the user a non-exclusive, royalty-free right to use, display, 
 * reproduce, and distribute this Family Health History portal software 
 * (the �software�) and prepare, use, display, reproduce and distribute 
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
package gov.hhs.fhh.web.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.io.StringWriter;

import org.apache.commons.lang.StringUtils;
import org.exolab.castor.mapping.Mapping;
import org.exolab.castor.mapping.MappingException;
import org.exolab.castor.xml.MarshalException;
import org.exolab.castor.xml.Marshaller;
import org.exolab.castor.xml.Unmarshaller;
import org.exolab.castor.xml.ValidationException;
import org.exolab.castor.xml.XMLContext;
import org.xml.sax.InputSource;

/**
 * @author bpickeral
 *
 */
public final class FhhCastorUtils {
    private static final String END_OF_XML_DECLARATION = "?>";
    private static final String BEG_OF_BODY = "<patientPerson>";
    private static final String END_OF_BODY = "</patient>";
    private static final String INPUT_FIELD = "<input";
    private static final String FIRST_INPUT_FIELD = "<input type=\"hidden\" name=\"self";
    
    
    /**
     * Calls Castor to encode xml attributes from the Person Entity and output the xml
     * to the OutputSteam.
     * @param stringWriter the stringWriter output stream to send the generated xml
     * @param mappingFilePath the path to the Castor mapping file for Object o
     * @param o the object to parse
     * @throws MappingException if mapping file does not exist
     * @throws IOException if problem occurs with input/output
     * @throws ValidationException if class is not valid
     * @throws MarshalException if error occurs during the Marshalling of the xml
     **/
    public static void marshallXmlFile(StringWriter stringWriter, String mappingFilePath, 
            Object o) throws MappingException, IOException, ValidationException, MarshalException {
        Mapping mapping = new Mapping();
        mapping.loadMapping(mappingFilePath);
        Marshaller marshaller = new Marshaller(stringWriter);
        marshaller.setSupressXMLDeclaration(true);
        marshaller.setMapping(mapping);
        marshaller.marshal(o);
    }
    
    /**
     * Removes the Header and the Footer from the xml file and returns the portion 
     * of the xml generated by Castor.
     * @param xml the xml file in String format
     * @return body the portion of the xml that was generated by Castor.
     */
    public static String getXmlBody(String xml) {
        StringBuffer body = new StringBuffer();
        body.append(xml.substring(0, xml.indexOf(END_OF_XML_DECLARATION) + END_OF_XML_DECLARATION.length()))
            .append(xml.substring(xml.indexOf(BEG_OF_BODY), xml.indexOf(END_OF_BODY)));
        return body.toString();
    }
    
    /**
     * Calls Castor to parse xml attributes from the xmlFile and create a Person
     *  object populated with the parsed attributes.
     * @param xmlFile the xml file to parse
     * @param mappingFilePath the path to the Castor mapping file for Object o
     * @param object the object class to be unmarshalled
     * @throws MappingException if mapping file does not exist
     * @throws IOException if problem occurs with input/output
     * @throws ValidationException if class is not valid
     * @throws MarshalException if error occurs during the Marshalling of the xml
     * @return Object the unmarshalled Object
     * */
    public static Object unmarshallXMLFile(String xmlFile, String mappingFilePath, Object object) 
            throws MappingException, IOException, ValidationException, MarshalException {
        Mapping mapping = new Mapping();
        mapping.loadMapping(mappingFilePath);

        // initialize and configure XMLContext
        XMLContext context = new XMLContext();
        context.addMapping(mapping);

        // Create a new Unmarshaller
        InputSource s = new InputSource(new StringReader(getXmlBody(xmlFile))); 
        Unmarshaller unmarshaller = context.createUnmarshaller();
        unmarshaller.setClass(object.getClass());
        return unmarshaller.unmarshal(s);
    }
    
    /**
     * Calls Castor to parse htm attributes from the htmFile and create a Person
     *  object populated with the parsed attributes.
     * @param htmFile the htm file to parse
     * @param mappingFilePath the path to the Castor mapping file for Object o
     * @param object the object class to be unmarshalled
     * @throws MappingException if mapping file does not exist
     * @throws IOException if problem occurs with input/output
     * @throws ValidationException if class is not valid
     * @throws MarshalException if error occurs during the Marshalling of the xml
     * @return Object the unmarshalled Object
     */
    public static Object unmarshallHTMFile(String htmFile, String mappingFilePath, Object object) 
            throws MappingException, IOException, ValidationException, MarshalException {
        String body = getHTMBody(htmFile);
        Mapping mapping = new Mapping();
        mapping.loadMapping(mappingFilePath);

        // initialize and configure XMLContext
        XMLContext context = new XMLContext();
        context.addMapping(mapping);

        // Create a new Unmarshaller
        InputSource s = new InputSource(new StringReader(body)); 
        Unmarshaller unmarshaller = context.createUnmarshaller();
        unmarshaller.setClass(object.getClass());
        return unmarshaller.unmarshal(s);
    }
    
    /**
     * Removes all extraneous data from the htm file and returns the portion 
     * of the htm to be parsed by by Castor.  The data consists of hidden input fields
     * excluding the last input field which is a submit button.
     * @param htm the htm file in String format
     * @return body the portion of the htm file to be parsed by Castor.
     */
    public static String getHTMBody(String htm) {
        StringBuffer body = new StringBuffer();
        body.append("<person><htmNode>");
        body.append(convertHTMLToXML(
                htm.substring(htm.indexOf(FIRST_INPUT_FIELD), htm.lastIndexOf(INPUT_FIELD))));
        body.append("</htmNode></person>");
        return body.toString();
    }
    
    /**
     * Converts the html from the legacy family history export into XML attributes.
     * @param html String containing the html to be converted.
     * @return xml String
     */
    public static String convertHTMLToXML(String html) {
        return StringUtils.replace(StringUtils.replace(html, "type=hidden", "type=\"hidden\""), ">", "/>");
    }
    
    /**
     * Reads the input stream into a String Buffer and returns the input as a string.
     * @param inputStream the file inputStream
     * @throws IOException if problem occurs with input/output
     * @return the input as a String
     * */
    public static String getInputStreamAsString(InputStream inputStream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        StringBuffer buffer = new StringBuffer();
        String currLine;
        while ((currLine = reader.readLine()) != null) {
          buffer.append(currLine);
        }
        return buffer.toString();
      }
}
