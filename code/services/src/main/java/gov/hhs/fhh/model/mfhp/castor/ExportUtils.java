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
package gov.hhs.fhh.model.mfhp.castor;

import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.util.HL7ConversionUtils;
import gov.hhs.fhh.service.FhhWebException;

import java.io.StringWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * @author bpickeral
 *
 */
public final class ExportUtils {
    private static final String XML_FILE_FOOTER = "</patient></subject></FamilyHistory>";
    private static final String XML_COMMENT = "<!--This file was produced by the Family Health Portrait tool "
        + "at http://familyhistory.hhs.gov. You should not attempt to edit the file. "
        + "Visit http://familyhistory.hhs.gov to upload the file for viewing and editing. The web site also"
        + " can provide a viewable and printable chart and diagram of the family health history.-->";
    private static final String EXTENSION_ID = "718163810183";
    
    /**
     * Calls Castor to encode xml attributes from the Person Entity and output the xml to the OutputSteam.
     * @param p Person object to marshall
     * @param includeXML include the xml header and footer
     * @return xml file in String format.
     * @throws FhhWebException if Exception occurs during marshall
     */
    public static String createXMLFile(Person p, boolean includeXML) throws FhhWebException {
        StringWriter stringWriter = new StringWriter();
        StringBuilder sb = new StringBuilder();
        if (includeXML) {
            sb.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
        }

        sb.append(generateHistoryHeader());
        try {
            FhhCastorUtils.marshallXmlFile(stringWriter, HL7ConversionUtils
                    .patientPerson(p));
        } catch (Exception e) {
            throw new FhhWebException(e);
        }
        sb.append(stringWriter.toString());
       
        sb.append(XML_FILE_FOOTER);
        return sb.toString();
    }
    
    /**
     * Generates the family history header for the xml document. Todo: Once the FamilyHistory Class is implemented, do
     * not hardcode the values.
     **/
    private static String generateHistoryHeader() {
        Date today = new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd", Locale.US);
        return  XML_COMMENT
                + "<FamilyHistory classCode=\"OBS\" moodCode=\"EVN\" xmlns=\"urn:hl7-org:v3\">"
                + "<id extention=\"gov.hhs.fhh:" + EXTENSION_ID
                + "\" />" + "<effectiveTime value=\"" + format.format(today) + "\" />"
                + "<methodCode displayName=\"Surgeon General's Family Health History Tool\" />"
                + "<subject typeCode=\"SBJ\">" + "<patient classCode=\"PAT\">";
    }
}
