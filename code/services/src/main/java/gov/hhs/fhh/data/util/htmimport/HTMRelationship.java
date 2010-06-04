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
package gov.hhs.fhh.data.util.htmimport;

import gov.hhs.fhh.data.RelativeCode;

import java.util.HashMap;
import java.util.Map;


/**
 * @author bpickeral
 *
 */
public enum HTMRelationship {
    /**
     * Note: Order of the enums matter.  Any relationship that appears at the beginning of another relationship
     * must appear at the end of the following enum list.  For example: 'father' must appear after 'fathersSister'.
     * This is important when deciphering what relationship appears at the beginning of an InputNode name.
     */
    
    /**
     * Daughter.
     */
    DAUGHTER("daughter", RelativeCode.DAU, true, false),
    
    /**
     * Son.
     */
    SON("son", RelativeCode.SON, true, false),
    
    /**
     * Sister.
     */
    SISTER("sister", RelativeCode.NSIS, true, false),
    
    /**
     * Brother.
     */
    BROTHER("brother", RelativeCode.NBRO, true, false),
    
    /**
     * Half Sister.
     */
    HSISTER("halfSister", RelativeCode.HSIS, true, true),
    
    /**
     * Half Brother.
     */
    HBROTHER("halfBrother", RelativeCode.HBRO, true, true),
    
    /**
     * Paternal Aunt.
     */
    PAUNT("fathersSister", RelativeCode.PAUNT, true, false),
    
    /**
     * Maternal Aunt.
     */
    MAUNT("mothersSister", RelativeCode.MAUNT, true, false),
    
    /**
     * Paternal Uncle.
     */
    PUNCLE("fathersBrother", RelativeCode.PUNCLE, true, false),
    
    /**
     * Maternal Uncle.
     */
    MUNCLE("mothersBrother", RelativeCode.MUNCLE, true, false),
    
    /**
     * Niece.
     */
    NIECE("niece", RelativeCode.NIECE, true, true),
    
    /**
     * Nephew.
     */
    NEPHEW("nephew", RelativeCode.NEPHEW, true, true),
    
    /**
     * Male Cousin.
     */
    MCOUSIN("femaleCousin", RelativeCode.COUSN, true, true),
    
    /**
     * Female cousin.
     */
    FCOUSIN("maleCousin", RelativeCode.COUSN, true, true),
    
    /**
     * Self.
     */
    SELF("self", RelativeCode.SELF, false, false),
    
    /**
     * Mother.
     */
    MOTHER("mother", RelativeCode.NMTH, false, false),
    
    /**
     * Father.
     */
    FATHER("father", RelativeCode.NFTH, false, false),
    
    /**
     * Maternal Grandmother.
     */
    MGRMTH("maternalGrandmother", RelativeCode.MGRMTH, false, false),
    
    /**
     * Maternal Grandfather.
     */
    MGRFTH("maternalGrandfather", RelativeCode.MGRFTH, false, false),
    
    /**
     * Paternal Grandmother.
     */
    PGRMTH("paternalGrandmother", RelativeCode.PGRMTH, false, false),
    
    /**
     * Paternal Grandfather.
     */
    PGRFTH("paternalGrandfather", RelativeCode.PGRFTH, false, false);
    
    private static final String COUSIN = "Cousin";
    
    private final String relationship;
    // Value true indicates possibility of 0+ relationships of this type, false implies 1
    private final RelativeCode relativeCode;
    private final boolean variableRelative;
    private final boolean parentRequired;
    private static final Map<RelativeCode, String> RELATIONSHIP_TO_RELATIVE_CODE = 
        new HashMap<RelativeCode, String>();
     
    HTMRelationship(String relationship, RelativeCode relativeCode, boolean variableRelative, boolean parentRequired) {
        this.relationship = relationship;
        this.relativeCode = relativeCode;
        this.variableRelative = variableRelative;
        this.parentRequired = parentRequired;
    }

    /**
     * @return the relationship
     */
    public String getRelationship() {
        return relationship;
    }

    /**
     * @return the variableRelative
     */
    public boolean isVariableRelative() {
        return variableRelative;
    }

    /**
     * @return the relativeCode
     */
    public RelativeCode getRelativeCode() {
        return relativeCode;
    }
    
    /**
     * Converts a RelativeCode to an HTMRelationship.relationship .
     * @param relativeCode RelativeCode object
     * @return HTMRelationship.relationship
     */
    public static String fromRelativeCode(RelativeCode relativeCode) {
        if (RELATIONSHIP_TO_RELATIVE_CODE.isEmpty()) {
            createRelationshipMap();
        }
        return RELATIONSHIP_TO_RELATIVE_CODE.get(relativeCode);
    }
    
    private static void createRelationshipMap() {
        for (HTMRelationship currRelationship : HTMRelationship.values()) {
            if (!currRelationship.getRelativeCode().equals(RelativeCode.COUSN)) {
                RELATIONSHIP_TO_RELATIVE_CODE.put(currRelationship.getRelativeCode(), 
                        currRelationship.getRelationship());
            }
        }
        RELATIONSHIP_TO_RELATIVE_CODE.put(RelativeCode.COUSN, COUSIN);
    }

    /**
     * @return the parentRequired
     */
    public boolean isParentRequired() {
        return parentRequired;
    }

}
