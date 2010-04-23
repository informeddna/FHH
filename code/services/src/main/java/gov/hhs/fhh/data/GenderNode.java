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
package gov.hhs.fhh.data;


/**
 * The representation of gender used for castor serialization.
 * @author dkokotov
 */
public class GenderNode {   
    private String code;
    private String codeSystemName;
    private String displayName;
    private String originalText;
    
    /**
     * Default constructor - for Castor use.
     */
    public GenderNode() {
        // empty on purpose
    }
    
    /**
     * Create a new gender node with given code, code system and display name.
     * @param code the code
     * @param codeSystemName the code system name
     * @param displayName the display name
     * @param userEntered boolean representing if Gender was user entered
     */
    public GenderNode(String code, String codeSystemName, String displayName, boolean userEntered) {
        this.code = code;
        this.codeSystemName = codeSystemName;
        this.displayName = displayName;
        if (userEntered) {
            this.originalText = displayName;
        }
    }

    /**
     * @param code the code to set
     */
    public void setCode(String code) {
        this.code = code;
    }

    /**
     * @param codeSystemName the codeSystemName to set
     */
    public void setCodeSystemName(String codeSystemName) {
        this.codeSystemName = codeSystemName;
    }

    /**
     * @param displayName the displayName to set
     */
    public void setDisplayName(String displayName) {
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

    /**
     * @return the originalText
     */
    public String getOriginalText() {
        return originalText;
    }

    /**
     * @param originalText the originalText to set
     */
    public void setOriginalText(String originalText) {
        this.originalText = originalText;
    }    
}
