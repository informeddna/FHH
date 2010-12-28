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
package gov.hhs.fhh.data;

/**
 * @author bpickeral
 * Enum containing the codes of single value clinical observations used
 * when generating the XML.
 */
@Deprecated
public enum ClinicalObservationCode {
    /**
     * Adopted Observation.
     */
    ADOPTED("160496001", "SNOMED_CT", "adopted"),
    
    /**
     * Weight Observation.
     */
    WEIGHT("107647005", "SNOMED_CT", "weight"),
    
    /**
     * Height Observation.
     */
    HEIGHT("271603002", "SNOMED_CT", "height");
    
    /**
     * OriginalText value for Consanguinity.
     */
    public static final String CONSANGUINITY_ORG_TEXT = "Parental consanguinity indicated";
    
    private final String code;
    private final String codeSystemName;
    private final String displayName;
    
    private ClinicalObservationCode(String code, String codeSystemName, String displayName) {
        this.code = code;
        this.codeSystemName = codeSystemName;
        this.displayName = displayName;
    }

    /**
     * @return the code
     */
    public String getCode() {
        return code;
    }

    /**
     * @return the codeSystemName
     */
    public String getCodeSystemName() {
        return codeSystemName;
    }

    /**
     * @return the displayName
     */
    public String getDisplayName() {
        return displayName;
    }
}
