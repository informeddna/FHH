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

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fiveamsolutions.hl7.model.mfhp.Gender;

/**
 * @author bpickeral
 *
 */
@SuppressWarnings({ "PMD.ExcessiveParameterList", "ParameterNumber" })
public enum RelativeCode {
   
    /**
     * Sister -- display only.
     */
    SIS("sis", "Sister", null, null, true, true, Gender.FEMALE),
    
    /**
     * Brother -- display only.
     */
    BRO("bro", "Brother", null, null, true, true, Gender.MALE),
    
    /**
     * Natural sister.
     */
    NSIS("nsis", "Sister", null, null, true, false, Gender.FEMALE),

    /**
     * Natural brother.
     */
    NBRO("nbro", "Brother", null, null, true, false, Gender.MALE),
    
    /**
     * Half sister.
     */
    HSIS("hsis", "Half Sister", null, null, true, false, Gender.FEMALE),
    
    /**
     * Nephew.
     */
    NEPHEW("nephew", "Nephew", null, null, true, false, Gender.MALE),
    
    /**
     * Niece.
     */
    NIECE("niece", "Niece", null, null, true, false, Gender.FEMALE),

    /**
     * Half brother.
     */
    HBRO("hbro", "Half Brother", null, null, true, false, Gender.MALE),
    
    /**
     * Daughter.
     */
    DAU("dau", "Daughter", null, null, true, false, Gender.FEMALE),
    
    /**
     * Son.
     */
    SON("son", "Son", null, null, true, false, Gender.MALE),
    
    /**
     * Granddaughter.
     */
    GRNDAU("grndau", "Granddaughter", null, null, true, false, Gender.FEMALE),
    
    /**
     * Grandson.
     */
    GRNSON("grnson", "Grandson", null, null, true, false, Gender.MALE),
    
    /**
     * Grandfather - display only.
     */
    GRFTH("grfth", "Grandfather", "MGRFTH", "PGRFTH", true, true, Gender.MALE),
    
    /**
     * Maternal grandfather.
     */
    MGRFTH("mgrfth", "Maternal Grandfather", null, null, false, false, Gender.MALE),
   
    /**
     * Paternal Grandfather.
     */
    PGRFTH("pgrfth", "Paternal Grandfather", null, null, false, false, Gender.MALE),
    
    /**
     * Grandmother - display only.
     */
    GRMTH("grmth", "Grandmother", "MGRMTH", "PGRMTH", true, true, Gender.FEMALE),
    
    /**
     * Maternal Grandmother.
     */
    MGRMTH("mgrmth", "Maternal Grandmother", null, null, false, false, Gender.FEMALE),
   
    /**
     * Paternal Grandfather.
     */
    PGRMTH("pgrmth", "Paternal Grandmother", null, null, false, false, Gender.FEMALE),

    /**
     * Aunt - display only.
     */
    AUNT("aunt", "Aunt", "MAUNT", "PAUNT", true, true, Gender.FEMALE),

    /**
     * Maternal Aunt.
     */
    MAUNT("maunt", "Maternal Aunt", null, null, false, false, Gender.FEMALE),

    /**
     * Paternal Aunt.
     */
    PAUNT("paunt", "Paternal Aunt", null, null, false, false, Gender.FEMALE),
    
    /**
     * Uncle - display only, translates to PAUNT or MAUNT.
     */
    UNCLE("uncle", "Uncle", "MUNCLE", "PUNCLE", true, true, Gender.MALE),

    /**
     * Maternal Uncle.
     */
    MUNCLE("muncle", "Maternal Uncle", null, null, false, false, Gender.MALE),

    /**
     * Paternal Uncle.
     */
    PUNCLE("puncle", "Paternal Uncle", null, null, false, false, Gender.MALE),
    
    /**
     * Cousin - display only.
     */
    COUSN("cousn", "Cousin", "MCOUSN", "PCOUSN", true, true,  null),

    /**
     * Maternal Cousin.
     */
    MCOUSN("mcousn", "Maternal Cousin", null, null, false, false, null),

    /**
     * Paternal Cousin.
     */
    PCOUSN("pcousn", "Paternal Cousin", null, null, false, false, null),

    /**
     * Self.
     */
    SELF("self", "Self", null, null, false, false, null),
    
    /**
     * Natural mother.
     */
    NMTH("nmth", "Mother", null, null, true, false, Gender.FEMALE),

    /**
     * Natural father.
     */
    NFTH("nfth", "Father", null, null, true, false, Gender.MALE),
    
    
    /**
     * Unknown relative.
     */
    UNKNWN("unknwn", "Unknown", null, null, true, false, null);

    private static final String RESOURCE_KEY_PREFIX = "relativeCode.";
    private static final String RESOURCE_KEY_POS_PREFIX = "relativeCode.possessive.";
    
    private final String resourceKey;
    private final String displayValue;
    private final String maternalCode;
    private final String paternalCode;
    private boolean forDisplay;
    private boolean specifier;
    private final Gender impliedGender;
    private List<RelativeCode> possibleParents;

    private static Map<String, RelativeCode> valueToTypeMap = new HashMap<String, RelativeCode>();
    private static Map<RelativeCode, List<RelativeCode>> parentCodeToPossibleChildCodesMap = 
                                                    new HashMap<RelativeCode, List<RelativeCode>>();
    private static Map<RelativeCode, List<RelativeCode>> childCodeToPossibleParentMap = 
                                                    new HashMap<RelativeCode, List<RelativeCode>>();
    
    
    RelativeCode(String resourceKey, String displayValue, String maternalCode, String paternalCode, boolean forDisplay,
            boolean specifier, Gender impliedGender) {
        this.resourceKey = resourceKey;
        this.displayValue = displayValue;
        this.maternalCode = maternalCode;
        this.paternalCode = paternalCode;
        this.forDisplay = forDisplay;
        this.specifier = specifier;
        this.impliedGender = impliedGender;
    }
    
    
    /**
     * @return the possibleParents
     */
    public List<RelativeCode> getPossibleParents() {
        if (childCodeToPossibleParentMap.isEmpty()) {
            initChildToPossibleParentsMap();
        }
        return childCodeToPossibleParentMap.get(this);
    }
    
    /**
     * initialisez the possible parents for this relative code, can't do this in the constructor since possible parents
     * are also relativecodes. Used by the bastard handler.
     */
    private void initChildToPossibleParentsMap() {
        childCodeToPossibleParentMap = new HashMap<RelativeCode, List<RelativeCode>>();
        List<RelativeCode> curList = Arrays.asList(new RelativeCode[] {PGRFTH, PGRMTH, MGRFTH, MGRMTH });
        childCodeToPossibleParentMap.put(AUNT, curList);
        childCodeToPossibleParentMap.put(UNCLE, curList);
        
        curList = Arrays.asList(new RelativeCode[] {NMTH, NFTH });
        childCodeToPossibleParentMap.put(NBRO, curList);
        childCodeToPossibleParentMap.put(HBRO, curList);
        childCodeToPossibleParentMap.put(BRO, curList);
        childCodeToPossibleParentMap.put(NSIS, curList);
        childCodeToPossibleParentMap.put(HSIS, curList);
        childCodeToPossibleParentMap.put(SIS, curList);
        
        curList = Arrays.asList(new RelativeCode[] {PAUNT, PUNCLE, MAUNT, MUNCLE });
        childCodeToPossibleParentMap.put(COUSN, curList);
        
        curList = Arrays.asList(new RelativeCode[] {PAUNT, PUNCLE });
        childCodeToPossibleParentMap.put(PCOUSN, curList);
        
        curList = Arrays.asList(new RelativeCode[] {MAUNT, MUNCLE });
        childCodeToPossibleParentMap.put(MCOUSN, curList);
        
        curList = Arrays.asList(new RelativeCode[] {NBRO, HBRO, NSIS, HSIS });
        childCodeToPossibleParentMap.put(NIECE, curList);
        childCodeToPossibleParentMap.put(NEPHEW, curList);
        
        curList = Arrays.asList(new RelativeCode[] {SELF });
        childCodeToPossibleParentMap.put(SON, curList);
        childCodeToPossibleParentMap.put(DAU, curList);
        
        curList = Arrays.asList(new RelativeCode[] {SON, DAU });
        childCodeToPossibleParentMap.put(GRNDAU, curList);
        childCodeToPossibleParentMap.put(GRNSON, curList);
    }
    
    /**
     * Returns the <code>RelativeCode</code> corresponding to the given value. Returns null
     * for null value.
     *
     * @param value the value to match
     * @return the matching type.
     */
    public static RelativeCode getByValue(String value) {
        checkType(value);
        return getValueToTypeMap().get(value);
    }
    /**
     * Checks to see that the value given is a legal <code>RelativeCode</code> value.
     *
     * @param value the value to check;
     */

    public static void checkType(String value) {
        if (value != null && !getValueToTypeMap().containsKey(value)) {
            throw new IllegalArgumentException("No matching type for " + value);
        }
    }
 
 
    private static Map<String, RelativeCode> getValueToTypeMap() {
        if (valueToTypeMap.isEmpty()) {
            for (RelativeCode type : values()) {
                valueToTypeMap.put(type.toString(), type);
            }
        }
        return valueToTypeMap;
    }
    
    @SuppressWarnings("PMD.ExcessiveMethodLength")
    Map<RelativeCode, List<RelativeCode>> getParentCodeToPossibleChildCodesMap() {
        if (!parentCodeToPossibleChildCodesMap.isEmpty()) {
            return parentCodeToPossibleChildCodesMap;
        }
        Map<RelativeCode, List<RelativeCode>> retval = new HashMap<RelativeCode, List<RelativeCode>>();

        List<RelativeCode> curList = new ArrayList<RelativeCode>();
        curList.add(PUNCLE);
        curList.add(PAUNT);
        retval.put(PGRFTH, curList);
        retval.put(PGRMTH, curList);

        curList = new ArrayList<RelativeCode>();
        curList.add(MUNCLE);
        curList.add(MAUNT);
        retval.put(MGRFTH, curList);
        retval.put(MGRMTH, curList);

        curList = new ArrayList<RelativeCode>();
        curList.add(MCOUSN);
        retval.put(MUNCLE, curList);
        retval.put(MAUNT, curList);

        curList = new ArrayList<RelativeCode>();
        curList.add(PCOUSN);
        retval.put(PUNCLE, curList);
        retval.put(PAUNT, curList);

        curList = new ArrayList<RelativeCode>();
        curList.add(GRNSON);
        curList.add(GRNDAU);
        retval.put(SON, curList);
        retval.put(DAU, curList);

        curList = new ArrayList<RelativeCode>();
        curList.add(NEPHEW);
        curList.add(NIECE);
        retval.put(NSIS, curList);
        retval.put(HSIS, curList);
        retval.put(NBRO, curList);
        retval.put(HBRO, curList);

        curList = new ArrayList<RelativeCode>();
        curList.add(SON);
        curList.add(DAU);
        retval.put(SELF, curList);

        curList = new ArrayList<RelativeCode>();
        curList.add(HBRO);
        curList.add(HSIS);
        curList.add(NBRO);
        curList.add(NSIS);
        retval.put(NMTH, curList);
        retval.put(NFTH, curList);

        parentCodeToPossibleChildCodesMap = retval;
        return parentCodeToPossibleChildCodesMap;
    }
    
    /**
     * Determines if the implied gender of the <code>RelativeCode</code> is MALE.
     * @return true if the implied gender of the <code>RelativeCode</code> is MALE
     */
    public boolean isMale() {
        return getImpliedGender().equals(Gender.MALE);
    }
 

    /**
     * @return the forDisplay
     */
    public boolean isForDisplay() {
        return forDisplay;
    }


    /**
     * @return the resourceKey
     */
    public String getResourceKey() {
        return RESOURCE_KEY_PREFIX + resourceKey;
    }
    
    /**
     * @return the resourceKey
     */
    public String getPossessiveResourceKey() {
        return RESOURCE_KEY_POS_PREFIX + resourceKey;
    }


    /**
     * @return the maternalCode
     */
    public String getMaternalCode() {
        return maternalCode;
    }

    /**
     * @return the maternalCode
     */
    public RelativeCode getMaternalCodeEnum() {
        return RelativeCode.getByValue(maternalCode);
    }

    /**
     * @return the paternalCode
     */
    public String getPaternalCode() {
        return paternalCode;
    }
    
    /**
     * @return the paternalCode
     */
    public RelativeCode getPaternalCodeEnum() {
        return RelativeCode.getByValue(paternalCode);
    }
    
    /**
     * @param maternal whether to return the maternal branch version
     * @return if maternal is true, the maternal version of this code, otherwise the paternal
     */
    public RelativeCode getBranchSpecificVersion(boolean maternal) {
        return RelativeCode.getByValue(maternal ? maternalCode : paternalCode);
    }

    /**
     * @return the branch specific version
     */
    public boolean hasBranchSpecificVersion() {
        return maternalCode != null;
    }

    /**
     * @return the displayValue
     */
    public String getDisplayValue() {
        return displayValue;
    }
    
    /**
     * @return the specifier
     */
    public boolean isSpecifier() {
        return specifier;
    }

    /**
     * @return the gender implied by this relationship, or null if the relationship is ambiguous wrt gender.
     */
    public Gender getImpliedGender() {
        return impliedGender;
    }

    /**
     * Used in the HTM import to determine the maternal/paternal specifier for a cousin by
     *  using the <code>RelativeCode</code> of the cousin's parent.
     * @return true if maternal, otherwise false
     */
    public boolean isMothersSibling() {
        return (MAUNT.equals(this) || MUNCLE.equals(this));
    }
    
    
    
    /**
     * @return - the codes to which it is possible to add children, so it excludes grandchildren for example.
     */
    public static List<RelativeCode> getCodesThatCanBeParents() {
        List<RelativeCode> retval = new ArrayList<RelativeCode>();

        retval.addAll(Arrays.asList(values()));
        retval.remove(GRNSON);
        retval.remove(GRNDAU);
        retval.remove(NEPHEW);
        retval.remove(NIECE);
        retval.remove(PCOUSN);
        retval.remove(MCOUSN);
        retval.remove(COUSN);
        retval.remove(GRFTH);
        retval.remove(GRMTH);
        retval.remove(AUNT);
        retval.remove(UNCLE);
        retval.remove(UNKNWN);
        retval.remove(SIS);
        retval.remove(BRO);

        return retval;
    }
    
    /**
     * @param gender - your gender.
     * @param halfSibling - if this is a halfsibling, only applies to NMTH and NFTH.
     * @return - your relative code.
     */
    public RelativeCode getRelativeCodeForParentCode(Gender gender, 
            boolean halfSibling) {
        RelativeCode retval = null;

        List<RelativeCode> possibleCodes = getParentCodeToPossibleChildCodesMap().get(this);
        if (possibleCodes != null) {
            if (this == NMTH || this == NFTH) {
                List<RelativeCode> listToUse = new ArrayList<RelativeCode>(possibleCodes);
                if (halfSibling) {
                    listToUse.remove(NSIS);
                    listToUse.remove(NBRO);
                } else {
                    listToUse.remove(HSIS);
                    listToUse.remove(HBRO);
                }
                retval = getRelativeCodeOfGenderFromList(listToUse, gender);
            } else {
                retval = getRelativeCodeOfGenderFromList(possibleCodes, gender);
            }
        }

        return retval;
    }
    
    private RelativeCode getRelativeCodeOfGenderFromList(List<RelativeCode> list, Gender gender) {
        // if list contains only one possibility, its a cousin, which has no gender, so return it.
        if (list.size() == 1) {
            return list.get(0);
        }

        for (RelativeCode relativeCode : list) {
            if (relativeCode.getImpliedGender() == null || relativeCode.getImpliedGender() == gender) {
                return relativeCode;
            }
        }
        return null;
    }
    
    /**
     * Transform from canonical RelativeCode to MFHP RelativeCode.
     * @param code the hl7-canonical RelativeCode
     * @return the MFHP-based RelativeCode otherwise, null
     */
    public static RelativeCode getByCanonical(com.fiveamsolutions.hl7.model.mfhp.RelativeCode code) {
        if (code == null) {
            return null;
        } else {
            try {
                return RelativeCode.valueOf(code.name());
            } catch (IllegalArgumentException e) {
                return null;
            }
        }
    }
    
    /**
     * @return true if natural parent, otherwise false
     */
    public boolean isNaturalParent() {
        boolean result = false;
        switch (this) {
        case NMTH:
        case NFTH:
            result = true;
            break;
        default:
            break;
        }
        return result;
    }
    /**
     * @return true if natural grand parent, otherwise false
     */
    public boolean isNaturalGrandParent() {
        return isNaturalGrandFather() || isNaturalGrandMother();
    }
    
    /**
     * @return true if natural grand mother, otherwise false
     */
    public boolean isNaturalGrandMother() {
        boolean result = false;
        switch(this) {
        case MGRMTH:
        case PGRMTH:
            result = true;
            break;
        default:
            break;
        }
        return result;
    }
    
    /**
     * @return true if natural grand father, otherwise false
     */
    public boolean isNaturalGrandFather() {
        boolean result = false;
        switch(this) {
        case MGRFTH:
        case PGRFTH:
            result = true;
            break;
        default:
            break;
        }
        return result;
    }
    
    /**
     * @return true if natural aunt or uncle, otherwise false
     */
    public boolean isNaturalAuntOrUncle() {
        boolean result = false;
        switch(this) {
        case MAUNT:
        case PAUNT:
        case MUNCLE:
        case PUNCLE:
            result = true;
            break;
        default:
            break;
        }
        return result;
    }
}
