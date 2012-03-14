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
package gov.hhs.fhh.service.util;

import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.util.PersonUtils;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.fiveamsolutions.hl7.model.mfhp.Gender;

/**
 * @author bpickeral
 * Contains universal methods used in gov.hhs.web.* Most of the functions are tested in the methods in which 
 * the functions are called.
 */
@SuppressWarnings({ "PMD.CyclomaticComplexity", "PMD.TooManyMethods" })
public final class FhhUtils {
    
    private static final Integer INCHES_PER_FOOT = 12;
    
    /**
     * Function generates a list of valid relative codes that can be added to the 
     * family tree.   
     * @param existingCodes Existing relative codes in the tree
     * @return List of valid relatives the user can add to the tree
     */
    public static List<RelativeCode> generateValidRelativeList(List<String> existingCodes) {
        List<RelativeCode> relativeCodes = new ArrayList<RelativeCode>();
        addRelativesAlwaysDisplayed(relativeCodes);
        addConditionalRelatives(existingCodes, relativeCodes);
        return relativeCodes;
    }
    
    /**
     * Method Adds relatives that the user should always be able to add to their family Tree.
     * @param relativeCodes list to add relative codes
     */
    private static void addRelativesAlwaysDisplayed(List<RelativeCode> relativeCodes) {
        // Since the Mother and Father are automatically added to the family tree,
        // add all relatives directly linked to the Mother and Father.
        relativeCodes.add(RelativeCode.AUNT);
        relativeCodes.add(RelativeCode.UNCLE);
        relativeCodes.add(RelativeCode.DAU);
        relativeCodes.add(RelativeCode.SON);
        relativeCodes.add(RelativeCode.NBRO);
        relativeCodes.add(RelativeCode.NSIS);
    }
    
    /**
     * Function generates a list of valid relative codes that can be added to the 
     * family tree.  Cousins, nieces, nephews, and grandchildren must have a parent added
     * in the system before the user can add them to the tree.  
     * @param existingCodes List of existing relative codes in the tree
     * @param relativeCodes list of vaid relative codes that can be added to the tree
     */
    private static void addConditionalRelatives(List<String> existingCodes,
            List<RelativeCode> relativeCodes) {
        // Add Cousin if an Aunt or Uncle exists in the Tree
        if (existingCodes.contains(RelativeCode.MAUNT.toString())
                || existingCodes.contains(RelativeCode.MUNCLE.toString())
                || existingCodes.contains(RelativeCode.PAUNT.toString())
                || existingCodes.contains(RelativeCode.PUNCLE.toString())) {
            relativeCodes.add(RelativeCode.COUSN);
        }
        // Add Niece and Nephew if Siblings or Half siblings exist in the tree
        if (existingCodes.contains(RelativeCode.NBRO.toString())
                || existingCodes.contains(RelativeCode.NSIS.toString())
                || existingCodes.contains(RelativeCode.HBRO.toString())
                || existingCodes.contains(RelativeCode.HSIS.toString())) {
            relativeCodes.add(RelativeCode.NIECE);
            relativeCodes.add(RelativeCode.NEPHEW);
        }
        // Add Grandchildren if Son or Daughter exists in the Tree
        if (existingCodes.contains(RelativeCode.SON.toString())
                || existingCodes.contains(RelativeCode.DAU.toString())) {
            relativeCodes.add(RelativeCode.GRNDAU);
            relativeCodes.add(RelativeCode.GRNSON);
        }
        addImmediateConditionalRelatives(existingCodes, relativeCodes);
    }
    
    /**
     * Sub method of addConditionalRelatives. Handles Mother, Father, and half siblings.
     * @param existingCodes List of existing relative codes in the tree
     * @param relativeCodes list of vaid relative codes that can be added to the tree
     */
    private static void addImmediateConditionalRelatives(List<String> existingCodes,
            List<RelativeCode> relativeCodes) {
        // Add Mother if Mother is not yet added to the tree
        if (!existingCodes.contains(RelativeCode.NMTH.toString())) {
            relativeCodes.add(RelativeCode.NMTH);
        }
        // Add Father if Father is not yet added to the tree
        if (!existingCodes.contains(RelativeCode.NFTH.toString())) {
            relativeCodes.add(RelativeCode.NFTH);
        }
        // Add Half Siblings if Mother or Father exists in the Tree
        if (existingCodes.contains(RelativeCode.NMTH.toString())
                || existingCodes.contains(RelativeCode.NFTH.toString())) {
            relativeCodes.add(RelativeCode.HBRO);
            relativeCodes.add(RelativeCode.HSIS);
        }
    }
    
    /**
     * Method returns a list of Relative codes (coresponding to relatives) that 
     * are currently in the family tree.
     * @param relatives relatives to get codes
     * @return list of relative codes
     */
    public static List<String> getExistingCodes(List<Relative> relatives) {
        List<String> existingCodes = new ArrayList<String>();
        for (Relative relative : relatives) {
            if (!existingCodes.contains(relative.getCode())) {
                existingCodes.add(relative.getCode());
            }
        }
        return existingCodes;
    }
    
    /**
     * Function generates a list of Relative Codes representing maternal
     * and paternal specifiers that the user can select for the given
     * relative code.
     * @param relativeCode the relative code used to generate list
     * @return List of valid relative codes that represent maternal or paternal 
     * specifiers for the given relative code.
     */
    public static List<RelativeCode> getRelationshipSpecifiers(String relativeCode) {
        List<RelativeCode> relationshipSpecifiers = new ArrayList<RelativeCode>();
        if (relativeCode.equals(RelativeCode.GRFTH.toString())
                || relativeCode.equals(RelativeCode.GRMTH.toString())
                || relativeCode.equals(RelativeCode.AUNT.toString())
                || relativeCode.equals(RelativeCode.UNCLE.toString())) {
            relationshipSpecifiers.add(RelativeCode.NMTH);
            relationshipSpecifiers.add(RelativeCode.NFTH);
        } 
        return relationshipSpecifiers;
    }
    
    /**
     * Function generates a list of Relatives that could be the parent of the relative
     * with code relativeCode.  Cousin, niece, nephew, grandchildren, half siblings must
     * specify parent.
     * @param relativeCode the relative code with possible parents
     * @param relatives relatives of their person object
     * @return List of valid relative codes that could be the parent of the relative with 
     * code relativeCode.
     */
    public static List<Relative> getParents(String relativeCode, List<Relative> relatives) {
        List<Relative> parents = new ArrayList<Relative>();
        if (!relatives.isEmpty()) {
            List<String> validCodes = new ArrayList<String>();
            if (relativeCode.equals(RelativeCode.COUSN.toString())) {
                validCodes.add(RelativeCode.MAUNT.toString());
                validCodes.add(RelativeCode.PAUNT.toString());
                validCodes.add(RelativeCode.MUNCLE.toString());
                validCodes.add(RelativeCode.PUNCLE.toString());
                parents = getParentsFromCodes(validCodes, relatives);
            } else if (relativeCode.equals(RelativeCode.NIECE.toString())
                    || relativeCode.equals(RelativeCode.NEPHEW.toString())) {
                validCodes.add(RelativeCode.NBRO.toString());
                validCodes.add(RelativeCode.NSIS.toString());
                validCodes.add(RelativeCode.HBRO.toString());
                validCodes.add(RelativeCode.HSIS.toString());
                parents = getParentsFromCodes(validCodes, relatives);
            } else if (relativeCode.equals(RelativeCode.GRNSON.toString())
                    || relativeCode.equals(RelativeCode.GRNDAU.toString())) {
                validCodes.add(RelativeCode.SON.toString());
                validCodes.add(RelativeCode.DAU.toString());
                parents = getParentsFromCodes(validCodes, relatives);
            } else if (relativeCode.equals(RelativeCode.HBRO.toString())
                    || relativeCode.equals(RelativeCode.HSIS.toString())) {
                validCodes.add(RelativeCode.NMTH.toString());
                validCodes.add(RelativeCode.NFTH.toString());
                parents = getParentsFromCodes(validCodes, relatives);
            }
        }
        return parents;
    }
    /**
     * Function generates a list of Relatives from the tree with the relative code
     * code1 or code2.
     * @param validCodes list of valid relative codes to add
     * @param relatives Relatives in the person object
     * @return List of Relatives with relative code code1 or code2
     */
    private static List<Relative> getParentsFromCodes(List<String> validCodes, 
            List<Relative> relatives) {
        List<Relative> parents = new ArrayList<Relative>();
        for (Relative currRelative : relatives) {
            if (validCodes.contains(currRelative.getCode())) {
                parents.add(currRelative);
            }
        }
        return parents;
    }
    
    /**
     * Calculates total height in inches using height supplied in feet and inches.
     * @param feetIn height in feet
     * @param inchesIn height in inches
     * @return Integer representing total inches
     */
    public static Integer calculateHeightUS(Integer feetIn, Integer inchesIn) {
        // Initialize local variables so we don't modify variables passed in
        Integer feet = feetIn;
        Integer inches = inchesIn;
        if (feet == null) {
            // If both feet and inches are not specified, do not store height
            if (inches == null) {
                return null;
            }
            feet = 0;
        } 
        if (inches == null) {
            inches = 0;
        }
        return feet * INCHES_PER_FOOT + inches;
    }
    
    /**
     * Calculates total height in inches using height supplied in feet and inches.
     * @param feet height in feet
     * @param inches height in inches
     * @return Integer representing total inches
     */
    public static Integer calculateHeightUS(String feet, String inches) {
        Integer feetInt = null;
        Integer inchesInt = null;
        if (!StringUtils.isEmpty(feet)) {
            feetInt = Integer.valueOf(feet);
        }
        if (!StringUtils.isEmpty(inches)) {
            inchesInt = Integer.valueOf(inches);
        }
        return calculateHeightUS(feetInt, inchesInt);
    }
    
    /**
     * Sets the the links to mother and father based on the motherId and fatherId set by Castor.
     * @param person the Person for whom parents and grandparents should be set up
     * @return Person with parents and grandparents set up
     */
    @SuppressWarnings("PMD.AvoidReassigningParameters")
    public static Person setupParents(Person person) {
        
        for (Relative currRelative : person.getRelatives()) {
            resetChildId(currRelative);
            if (currRelative.getMotherId() != null) {
                currRelative.setMother(person.getRelative(currRelative.getMotherId()));
            } else if (currRelative.getFatherId() != null) {
                currRelative.setFather(person.getRelative(currRelative.getFatherId()));
            }
            if (RelativeCode.NMTH.toString().equals(currRelative.getCode())) {
                person.setMother(currRelative);
            } else if (RelativeCode.NFTH.toString().equals(currRelative.getCode())) {
                person.setFather(currRelative);
            }
        }
        // Add parents and grandparents if they do not exist.
        addRequiredRemoveUnknownParent(RelativeCode.NMTH, person);
        addRequiredRemoveUnknownGrandparent(RelativeCode.MGRMTH, person);
        addRequiredRemoveUnknownGrandparent(RelativeCode.MGRFTH, person);
        addOrphanedAuntUncle(person.getRelativeOfType(RelativeCode.MGRFTH), person
                .getRelativeOfType(RelativeCode.MGRMTH), person, RelativeCode.MUNCLE);
        addOrphanedAuntUncle(person.getRelativeOfType(RelativeCode.MGRFTH), person
                .getRelativeOfType(RelativeCode.MGRMTH), person, RelativeCode.MAUNT);

        addRequiredRemoveUnknownParent(RelativeCode.NFTH, person);
        addRequiredRemoveUnknownGrandparent(RelativeCode.PGRMTH, person);
        addRequiredRemoveUnknownGrandparent(RelativeCode.PGRFTH, person);
        addOrphanedAuntUncle(person.getRelativeOfType(RelativeCode.PGRFTH), person
                .getRelativeOfType(RelativeCode.PGRMTH), person, RelativeCode.PUNCLE);
        addOrphanedAuntUncle(person.getRelativeOfType(RelativeCode.PGRFTH), person
                .getRelativeOfType(RelativeCode.PGRMTH), person, RelativeCode.PAUNT);
        
        //remove non maternal/paternal grandparents we couldn't and won't be able to add.
        person.getUnrelatedRelatives().removeAll(person.getRelativesOfType(RelativeCode.GRFTH));
        person.getUnrelatedRelatives().removeAll(person.getRelativesOfType(RelativeCode.GRMTH));
        
        return person;
    }
    
    /**
     * Sets the parent ids of the children of proband to null.  The ids are set only for the HL7 file and are
     *  not needed by the application (parents must be of type Relative, not Person).
     * @param relative Relative to reset
     */
    private static void resetChildId(Relative relative) {
        if (relative.isChildOfProband()) {
            relative.setFatherId(null);
            relative.setMotherId(null);
        }
    }

    /**
     * If the person lacks a parent with parentcode a new one is added. any relatives with that parent code inside of
     * the persons unrelatedRelatives list are removed.
     * 
     * @param parentCode - NMTH or NFTH.
     * @param person - person to add parent to.
     */
    private static void addRequiredRemoveUnknownParent(RelativeCode parentCode, Person person) {
        if (parentCode == null || !parentCode.isNaturalParent()) {
            return;
        }
        // the pedigree transformer always grabs a father and mother, so we never have to copy them over from an
        // unrelated father/mother
        if (person.getRelativeOfType(parentCode) == null) {
            if (parentCode.getImpliedGender() == Gender.MALE) {
                person.setFather(PersonUtils.addRelative(person, parentCode));
            } else if (parentCode.getImpliedGender() == Gender.FEMALE) {
                person.setMother(PersonUtils.addRelative(person, parentCode));
            }
        }
        person.getUnrelatedRelatives().removeAll(person.getUnrelatedRelativesOfType(parentCode));
    }
    
    /**
     * if the needed grandparent exists in the relatives list it is used, otherwise(non-mfhp/orphaned gp case) the
     * unrelatedRelatives list is searched for the gp, the first one found gets used, if one is not found a new one is
     * created. In any case all unrelated gps are with the same code are removed so as not to show up as bastards going
     * forward.
     * 
     * @param grandParentCode - PGRMTH,PGRFTH,MGRMTH,MGRFTH.
     * @param person - person to add grandparents to.
     */
    private static void addRequiredRemoveUnknownGrandparent(RelativeCode grandParentCode, Person person) {
        if (grandParentCode == null || !grandParentCode.isNaturalGrandParent()) {
            return;
        }
        Relative relatedGrandParent = person.getRelativeOfType(grandParentCode);
        List<Relative> unrelatedGrandParentList = person.getUnrelatedRelativesOfType(grandParentCode);
        Relative unrelatedGrandParent = null;
        // if there are multiple orphaned or non-mfhp grandparents ignore all but the first one.
        if (unrelatedGrandParentList != null && !unrelatedGrandParentList.isEmpty()) {
            unrelatedGrandParent = unrelatedGrandParentList.get(0);
        }

        if (relatedGrandParent == null && unrelatedGrandParent == null) {
            // in this case there was no mfhp or orphaned grandparent, a new one is created for mfhp.
            PersonUtils.addRelative(person, grandParentCode);
        } else if (relatedGrandParent == null && unrelatedGrandParent != null) {
            // there is no related grandparent, but there is an orphaned or hv added one, we use it.
            person.getUnrelatedRelatives().removeAll(unrelatedGrandParentList);
            person.getRelatives().add(unrelatedGrandParent);
        } else if (relatedGrandParent != null && unrelatedGrandParent != null) {
            // there is an mfhp grandparent and an hv grandparent, time to merege the data in them
            mergeMfhpAndNonMfhpRelative(relatedGrandParent, unrelatedGrandParent);
            
            person.getUnrelatedRelatives().removeAll(unrelatedGrandParentList);
        }
    }

    /**
     * In the event that there is an mfhp grandparent and an hv grantparent we want to try and populate the mfhp one
     * with the data from the hv one. Only the data that is absent in the mfhp one is actually copied over to avoid
     * confusion. No mfhp relative data is ever overwritten.
     * 
     * @param mfhpDest - the mfhp relative to gently copy data into.
     * @param nonMfhpSource - the hv relative to grab data from.
     */
    private static void mergeMfhpAndNonMfhpRelative(Relative mfhpDest, Relative nonMfhpSource) {
        if (mfhpDest.getName() == null || mfhpDest.getName().length() == 0) {
            mfhpDest.setName(nonMfhpSource.getName());
        }

        if (mfhpDest.getLivingStatus() == null && nonMfhpSource.getLivingStatus() != null) {
            mfhpDest.setLivingStatus(nonMfhpSource.getLivingStatus());
            mfhpDest.setBirthTime(nonMfhpSource.getBirthTime());
        }
        
        // we only add observations if there are none to avoid confusion, no need for a hard copy, the nonMfhpSource is
        // going away anyhow.
        if ((mfhpDest.getObservations() == null || mfhpDest.getObservations().isEmpty())
                && nonMfhpSource.getObservations() != null && !nonMfhpSource.getObservations().isEmpty()) {
            mfhpDest.setObservations(nonMfhpSource.getObservations());
        }
    }
    
    
    /**
     * if a parent got removed in hv we need to add the aunts and uncles to the newly added grandparents so they show up
     * and preview and don't get labelled as bastards.
     * 
     * @param auFather - the father of the aunt/uncle, the grandfather of person
     * @param auMother - the mother of the aunt/uncle, the grandmother of person
     * @param person - the person
     * @param auCode - the code of the uncle
     */
    private static void addOrphanedAuntUncle(Relative auFather, Relative auMother, Person person, RelativeCode auCode) {
        if (auCode == null || !auCode.isNaturalAuntOrUncle()) {
            return;
        }

        if (auFather == null || auFather.getCodeEnum() == null || !auFather.getCodeEnum().isNaturalGrandFather()) {
            return;
        }

        if (auMother == null || auMother.getCodeEnum() == null || !auMother.getCodeEnum().isNaturalGrandMother()) {
            return;
        }
        
        List<Relative> unrelatedAuList = person.getUnrelatedRelativesOfType(auCode);
        for (Relative au : unrelatedAuList) {
            auMother.getDescendants().add(au);
            auFather.getDescendants().add(au);

            au.setMother(auMother);
            au.setFather(auFather);

            person.getUnrelatedRelatives().remove(au);
            person.getRelatives().add(au);
        }
        
    }
    
    
    /**
     * Adds Mother, father, and grandparents to the family tree.
     * @param p <code>Person</code> object that the relatives will be added to.
     */
    public static void addRequiredRelativesToTree(Person p) {
        Relative mother = PersonUtils.addRelative(p, RelativeCode.NMTH);
        Relative father = PersonUtils.addRelative(p, RelativeCode.NFTH);
        p.setMother(mother);
        p.setFather(father);
        Relative mGrandmother = PersonUtils.addRelative(p, RelativeCode.MGRMTH);
        Relative mGrandfather = PersonUtils.addRelative(p, RelativeCode.MGRFTH);
        Relative pGrandmother = PersonUtils.addRelative(p, RelativeCode.PGRMTH);
        Relative pGrandfather = PersonUtils.addRelative(p, RelativeCode.PGRFTH);
        mother.setMother(mGrandmother);
        mother.setFather(mGrandfather);
        father.setMother(pGrandmother);
        father.setFather(pGrandfather);
    }
}