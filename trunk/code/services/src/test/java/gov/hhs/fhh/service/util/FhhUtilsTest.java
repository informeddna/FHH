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

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.UserEnteredDisease;
import gov.hhs.fhh.data.util.PersonUtils;
import gov.hhs.fhh.model.mfhp.LivingStatus;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;

/**
 * @author bpickeral Tests for FhhUtils. Most of the tests are performed in the actions where the functions are called.
 *         More elaborate tests may be done here.
 */
public class FhhUtilsTest {
    private static final Integer DUMMY_FEET = 5;
    private static final Integer DUMMY_FEET_INCHES = 60;
    private static final Integer DUMMY_INCHES = 11;
    private static final Integer DUMMY_TOTAL = 71;

    @Test
    public void testCalculateHeightUS() {
        Integer feet = null;
        Integer inches = null;
        assertNull(FhhUtils.calculateHeightUS(feet, inches));
        assertEquals(FhhUtils.calculateHeightUS(DUMMY_FEET, null), DUMMY_FEET_INCHES);
        assertEquals(FhhUtils.calculateHeightUS(null, DUMMY_INCHES), DUMMY_INCHES);
        assertEquals(FhhUtils.calculateHeightUS(DUMMY_FEET, DUMMY_INCHES), DUMMY_TOTAL);

    }

    @Test
    public void testCalculateHeightUSString() {
        String feet = null;
        String inches = null;
        assertNull(FhhUtils.calculateHeightUS(feet, inches));
        assertEquals(FhhUtils.calculateHeightUS(DUMMY_FEET.toString(), null), DUMMY_FEET_INCHES);
        assertEquals(FhhUtils.calculateHeightUS(null, DUMMY_INCHES.toString()), DUMMY_INCHES);
        assertEquals(FhhUtils.calculateHeightUS(DUMMY_FEET.toString(), DUMMY_INCHES.toString()), DUMMY_TOTAL);

    }

    @Test
    public void testNoParents() {
        Person person = new Person();

        FhhUtils.setupParents(person);
        Assert.assertNotNull(person.getRelativeOfType(RelativeCode.NFTH));
        Assert.assertNotNull(person.getRelativeOfType(RelativeCode.PGRFTH));
        Assert.assertNotNull(person.getRelativeOfType(RelativeCode.PGRMTH));
        Assert.assertNotNull(person.getRelativeOfType(RelativeCode.NMTH));
        Assert.assertNotNull(person.getRelativeOfType(RelativeCode.MGRFTH));
        Assert.assertNotNull(person.getRelativeOfType(RelativeCode.MGRMTH));
    }

    @Test
    public void testDuplicateFather() {
        Person person = new Person();

        Relative trueFather = PersonUtils.addRelative(person, RelativeCode.NFTH);
        person.setFather(trueFather);

        Relative duplicateFather1 = new Relative();
        duplicateFather1.setCodeEnum(RelativeCode.NFTH);
        person.getUnrelatedRelatives().add(duplicateFather1);
        Assert.assertEquals(duplicateFather1.getUuid(), person.getUnrelatedRelativeOfType(RelativeCode.NFTH).getUuid());

        Relative duplicateFather2 = new Relative();
        duplicateFather2.setCodeEnum(RelativeCode.NFTH);
        person.getUnrelatedRelatives().add(duplicateFather2);
        Exception ex = null;
        try {
            person.getUnrelatedRelativeOfType(RelativeCode.NFTH);
        } catch (Exception e) {
            ex = e;
        }
        Assert.assertEquals("More than one relative of type " + RelativeCode.NFTH.toString(), ex.getMessage());
        Assert.assertEquals(duplicateFather2.getUuid(), person.getUnrelatedRelativesOfType(RelativeCode.NFTH).get(1)
                .getUuid());

        FhhUtils.setupParents(person);

        Assert.assertEquals(trueFather.getUuid(), person.getRelativeOfType(RelativeCode.NFTH).getUuid());
        Assert.assertNull(person.getRelative(duplicateFather1.getUuid()));
        Assert.assertNull(person.getRelative(duplicateFather2.getUuid()));
    }

    @Test
    public void testUnrelatedGrandParent() {
        Person person = new Person();

        Relative trueFather = PersonUtils.addRelative(person, RelativeCode.NFTH);
        person.setFather(trueFather);

        Relative unrelatedPaternalGrandFather = new Relative();
        unrelatedPaternalGrandFather.setCodeEnum(RelativeCode.PGRFTH);
        person.getUnrelatedRelatives().add(unrelatedPaternalGrandFather);

        FhhUtils.setupParents(person);

        Assert.assertEquals(unrelatedPaternalGrandFather.getUuid(), person.getRelativeOfType(RelativeCode.PGRFTH)
                .getUuid());
    }

    @Test
    public void testDuplicateUnrelatedGrandParent() {
        Person person = new Person();

        Relative trueFather = PersonUtils.addRelative(person, RelativeCode.NFTH);
        person.setFather(trueFather);

        Relative unrelatedPaternalGrandFather = new Relative();
        unrelatedPaternalGrandFather.setCodeEnum(RelativeCode.PGRFTH);
        person.getUnrelatedRelatives().add(unrelatedPaternalGrandFather);

        Relative anotherUnrelatedPaternalGrandFather = new Relative();
        anotherUnrelatedPaternalGrandFather.setCodeEnum(RelativeCode.PGRFTH);
        person.getUnrelatedRelatives().add(anotherUnrelatedPaternalGrandFather);

        FhhUtils.setupParents(person);

        Assert.assertEquals(unrelatedPaternalGrandFather.getUuid(), person.getRelativeOfType(RelativeCode.PGRFTH)
                .getUuid());
        Assert.assertNull(person.getRelative(anotherUnrelatedPaternalGrandFather.getUuid()));
    }

    @Test
    public void testOrphanedPUncle() {
        Person person = new Person();

        Relative puncle = new Relative();
        puncle.setCodeEnum(RelativeCode.PUNCLE);
        person.getUnrelatedRelatives().add(puncle);

        FhhUtils.setupParents(person);
        Assert.assertNotNull(person.getRelativeOfType(RelativeCode.PUNCLE));
        Assert.assertEquals(puncle.getUuid(), person.getRelativeOfType(RelativeCode.PUNCLE).getUuid());
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.PGRFTH).getDescendants().contains(puncle));
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.PGRMTH).getDescendants().contains(puncle));
    }

    @Test
    public void testOrphanedMUncle() {
        Person person = new Person();

        Relative muncle = new Relative();
        muncle.setCodeEnum(RelativeCode.MUNCLE);
        person.getUnrelatedRelatives().add(muncle);

        FhhUtils.setupParents(person);
        Assert.assertNotNull(person.getRelativeOfType(RelativeCode.MUNCLE));
        Assert.assertEquals(muncle.getUuid(), person.getRelativeOfType(RelativeCode.MUNCLE).getUuid());
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.MGRFTH).getDescendants().contains(muncle));
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.MGRMTH).getDescendants().contains(muncle));
    }

    @Test
    public void testOrphanedMaunt() {
        Person person = new Person();

        Relative maunt = new Relative();
        maunt.setCodeEnum(RelativeCode.MAUNT);
        person.getUnrelatedRelatives().add(maunt);

        FhhUtils.setupParents(person);
        Assert.assertNotNull(person.getRelativeOfType(RelativeCode.MAUNT));
        Assert.assertEquals(maunt.getUuid(), person.getRelativeOfType(RelativeCode.MAUNT).getUuid());
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.MGRFTH).getDescendants().contains(maunt));
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.MGRMTH).getDescendants().contains(maunt));
    }

    @Test
    public void testOrphanedPaunt() {
        Person person = new Person();

        Relative paunt = new Relative();
        paunt.setCodeEnum(RelativeCode.PAUNT);
        person.getUnrelatedRelatives().add(paunt);

        FhhUtils.setupParents(person);
        Assert.assertNotNull(person.getRelativeOfType(RelativeCode.PAUNT));
        Assert.assertEquals(paunt.getUuid(), person.getRelativeOfType(RelativeCode.PAUNT).getUuid());
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.PGRFTH).getDescendants().contains(paunt));
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.PGRMTH).getDescendants().contains(paunt));
    }

    @Test
    public void testMultipleOrphanedAuntUncle() {
        Person person = new Person();

        Relative paunt = new Relative();
        paunt.setCodeEnum(RelativeCode.PAUNT);
        person.getUnrelatedRelatives().add(paunt);

        Relative paunt1 = new Relative();
        paunt1.setCodeEnum(RelativeCode.PAUNT);
        person.getUnrelatedRelatives().add(paunt1);

        Relative muncle = new Relative();
        muncle.setCodeEnum(RelativeCode.MUNCLE);
        person.getUnrelatedRelatives().add(muncle);

        Relative muncle1 = new Relative();
        muncle1.setCodeEnum(RelativeCode.MUNCLE);
        person.getUnrelatedRelatives().add(muncle1);

        FhhUtils.setupParents(person);
        Assert.assertEquals(2, person.getRelativesOfType(RelativeCode.PAUNT).size());
        Assert.assertEquals(paunt.getUuid(), person.getRelativesOfType(RelativeCode.PAUNT).get(0).getUuid());
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.PGRFTH).getDescendants().contains(paunt));
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.PGRMTH).getDescendants().contains(paunt));
        Assert.assertEquals(paunt1.getUuid(), person.getRelativesOfType(RelativeCode.PAUNT).get(1).getUuid());
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.PGRFTH).getDescendants().contains(paunt1));
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.PGRMTH).getDescendants().contains(paunt1));

        Assert.assertEquals(2, person.getRelativesOfType(RelativeCode.MUNCLE).size());
        Assert.assertEquals(muncle.getUuid(), person.getRelativesOfType(RelativeCode.MUNCLE).get(0).getUuid());
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.MGRFTH).getDescendants().contains(muncle));
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.MGRMTH).getDescendants().contains(muncle));
        Assert.assertEquals(muncle1.getUuid(), person.getRelativesOfType(RelativeCode.MUNCLE).get(1).getUuid());
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.MGRFTH).getDescendants().contains(muncle1));
        Assert.assertTrue(person.getRelativeOfType(RelativeCode.MGRMTH).getDescendants().contains(muncle1));
    }

    @Test
    public void testMergeMfhpHvRelativeLivingStatusYes() {
        Person person = new Person();

        Relative trueFather = PersonUtils.addRelative(person, RelativeCode.NFTH);
        person.setFather(trueFather);

        Relative trueGrandFather = new Relative();
        trueGrandFather.setCodeEnum(RelativeCode.PGRFTH);
        trueGrandFather.getDescendants().add(trueFather);
        trueFather.setFather(trueGrandFather);
        person.getRelatives().add(trueGrandFather);

        Relative hvGrandFather = new Relative();
        hvGrandFather.setCodeEnum(RelativeCode.PGRFTH);
        hvGrandFather.setName("hvGrandFather");
        hvGrandFather.setLivingStatus(LivingStatus.YES.toString());
        hvGrandFather.setBirthTime("12/22/1982");
        UserEnteredDisease disease = new UserEnteredDisease();
        disease.setAppDisplay("decapitation");
        ClinicalObservation co = new ClinicalObservation();
        co.setDisease(disease);
        hvGrandFather.getObservations().add(co);

        person.getUnrelatedRelatives().add(hvGrandFather);

        FhhUtils.setupParents(person);
        shallowCompareRelatives(trueGrandFather, hvGrandFather);
    }

    @Test
    public void testMergeMfhpHvRelativeLivingStatusNullNoCos() {
        Person person = new Person();

        Relative trueFather = PersonUtils.addRelative(person, RelativeCode.NFTH);
        person.setFather(trueFather);

        Relative trueGrandFather = new Relative();
        trueGrandFather.setCodeEnum(RelativeCode.PGRFTH);
        trueGrandFather.getDescendants().add(trueFather);
        trueFather.setFather(trueGrandFather);
        person.getRelatives().add(trueGrandFather);

        Relative hvGrandFather = new Relative();
        hvGrandFather.setCodeEnum(RelativeCode.PGRFTH);
        hvGrandFather.setName("hvGrandFather");

        person.getUnrelatedRelatives().add(hvGrandFather);

        FhhUtils.setupParents(person);
        shallowCompareRelatives(trueGrandFather, hvGrandFather);
    }

    private void shallowCompareRelatives(Relative relative1, Relative relative2) {
        Assert.assertEquals(relative1.getName(), relative2.getName());
        Assert.assertEquals(relative1.getLivingStatus(), relative2.getLivingStatus());
        Assert.assertEquals(relative1.getBirthTime(), relative2.getBirthTime());

        for (int i = 0; i < relative1.getObservations().size(); i++) {
            ClinicalObservation co1 = relative1.getObservations().get(i);
            ClinicalObservation co2 = relative2.getObservations().get(i);

            if (co1.getDisease().getAppDisplay() != null) {
                Assert.assertEquals(co1.getDisease().getAppDisplay(), co2.getDisease().getAppDisplay());
            }
        }
    }

    @Test
    public void testGetRelativeCodes() {
        Relative relative = new Relative();
        ;
        // Test case where no relatives exist in the tree
        Person p = new Person();

        List<RelativeCode> relativeList = FhhUtils.generateValidRelativeList(new ArrayList<String>());
        assertTrue(relativeList.contains(RelativeCode.AUNT));
        assertTrue(relativeList.contains(RelativeCode.UNCLE));
        assertTrue(relativeList.contains(RelativeCode.DAU));
        assertTrue(relativeList.contains(RelativeCode.SON));
        assertTrue(relativeList.contains(RelativeCode.NBRO));
        assertTrue(relativeList.contains(RelativeCode.NSIS));
        assertTrue(relativeList.contains(RelativeCode.NMTH));
        assertTrue(relativeList.contains(RelativeCode.NFTH));

        assertFalse(relativeList.contains(RelativeCode.HBRO));
        assertFalse(relativeList.contains(RelativeCode.HSIS));
        assertFalse(relativeList.contains(RelativeCode.COUSN));
        assertFalse(relativeList.contains(RelativeCode.NIECE));
        assertFalse(relativeList.contains(RelativeCode.NEPHEW));
        assertFalse(relativeList.contains(RelativeCode.GRNSON));
        assertFalse(relativeList.contains(RelativeCode.GRNDAU));

        // Test case where maunt exists, also test for when 2 relatives of the same
        // type exist (branch coverage)
        relative.setCodeEnum(RelativeCode.MAUNT);
        p.getRelatives().add(relative);
        relative = new Relative();
        relative.setCodeEnum(RelativeCode.MAUNT);
        p.getRelatives().add(relative);
        assertEquals(1, FhhUtils.getExistingCodes(p.getRelatives()).size());

        relativeList = FhhUtils.generateValidRelativeList(FhhUtils.getExistingCodes(p.getRelatives()));
        assertTrue(relativeList.contains(RelativeCode.COUSN));

        // Test case where paunt exists
        List<String> singleCode = addAndGetSingleCode(p, RelativeCode.PAUNT);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertTrue(relativeList.contains(RelativeCode.COUSN));

        // Test case where muncle exists
        singleCode = addAndGetSingleCode(p, RelativeCode.MUNCLE);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertTrue(relativeList.contains(RelativeCode.COUSN));

        // Test case where puncle exists
        singleCode = addAndGetSingleCode(p, RelativeCode.PUNCLE);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertTrue(relativeList.contains(RelativeCode.COUSN));

        // Test case where nbro exists
        singleCode = addAndGetSingleCode(p, RelativeCode.NBRO);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertTrue(relativeList.contains(RelativeCode.NIECE));
        assertTrue(relativeList.contains(RelativeCode.NEPHEW));

        // Test case where nsis exists
        singleCode = addAndGetSingleCode(p, RelativeCode.NSIS);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertTrue(relativeList.contains(RelativeCode.NIECE));
        assertTrue(relativeList.contains(RelativeCode.NEPHEW));

        // Test case where hbro exists
        singleCode = addAndGetSingleCode(p, RelativeCode.HBRO);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertTrue(relativeList.contains(RelativeCode.NIECE));
        assertTrue(relativeList.contains(RelativeCode.NEPHEW));

        // Test case where hsis exists
        singleCode = addAndGetSingleCode(p, RelativeCode.HSIS);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertTrue(relativeList.contains(RelativeCode.NIECE));
        assertTrue(relativeList.contains(RelativeCode.NEPHEW));

        // Test case where son exists
        singleCode = addAndGetSingleCode(p, RelativeCode.SON);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertTrue(relativeList.contains(RelativeCode.GRNDAU));
        assertTrue(relativeList.contains(RelativeCode.GRNSON));

        // Test case where dau exists
        singleCode = addAndGetSingleCode(p, RelativeCode.DAU);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertTrue(relativeList.contains(RelativeCode.GRNDAU));
        assertTrue(relativeList.contains(RelativeCode.GRNSON));

        // Test case where nmth exists
        singleCode = addAndGetSingleCode(p, RelativeCode.NMTH);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertFalse(relativeList.contains(RelativeCode.NMTH));
        assertTrue(relativeList.contains(RelativeCode.HBRO));
        assertTrue(relativeList.contains(RelativeCode.HSIS));

        // Test case where nfth exists
        singleCode = addAndGetSingleCode(p, RelativeCode.NFTH);
        relativeList = FhhUtils.generateValidRelativeList(singleCode);
        assertFalse(relativeList.contains(RelativeCode.NFTH));
        assertTrue(relativeList.contains(RelativeCode.HBRO));
        assertTrue(relativeList.contains(RelativeCode.HSIS));
    }
    
    
    @Test
    public void testRetrieveRelationshipSpecifiers() {
        String selectedCode = RelativeCode.NMTH.toString();
        
        // Test with RelativeCode that is not a specifier
        assertEquals(RelativeCode.NMTH.toString(), selectedCode);
        List<RelativeCode> relSpecs = new ArrayList<RelativeCode>();
        if (RelativeCode.getByValue(selectedCode).isSpecifier()) {
            relSpecs = FhhUtils.getRelationshipSpecifiers(selectedCode);
        }
        assertTrue(relSpecs.isEmpty());

        // Test Relative Codes that are specifiers
        relSpecs = new ArrayList<RelativeCode>();
        selectedCode = RelativeCode.GRFTH.toString();
        if (RelativeCode.getByValue(selectedCode).isSpecifier()) {
            relSpecs = FhhUtils.getRelationshipSpecifiers(selectedCode);
        }
        assertEquals(RelativeCode.NMTH, relSpecs.get(0));
        assertEquals(RelativeCode.NFTH, relSpecs.get(1));

        selectedCode = RelativeCode.GRMTH.toString();
        relSpecs = new ArrayList<RelativeCode>();
        if (RelativeCode.getByValue(selectedCode).isSpecifier()) {
            relSpecs = FhhUtils.getRelationshipSpecifiers(selectedCode);
        }
        assertEquals(RelativeCode.NMTH, relSpecs.get(0));
        assertEquals(RelativeCode.NFTH, relSpecs.get(1));

        selectedCode = RelativeCode.AUNT.toString();
        relSpecs = new ArrayList<RelativeCode>();
        if (RelativeCode.getByValue(selectedCode).isSpecifier()) {
            relSpecs = FhhUtils.getRelationshipSpecifiers(selectedCode);
        }
        assertEquals(RelativeCode.NMTH, relSpecs.get(0));
        assertEquals(RelativeCode.NFTH, relSpecs.get(1));

        selectedCode = RelativeCode.UNCLE.toString();
        relSpecs = new ArrayList<RelativeCode>();
        if (RelativeCode.getByValue(selectedCode).isSpecifier()) {
            relSpecs = FhhUtils.getRelationshipSpecifiers(selectedCode);
        }
        assertEquals(RelativeCode.NMTH, relSpecs.get(0));
        assertEquals(RelativeCode.NFTH, relSpecs.get(1));

        selectedCode = RelativeCode.COUSN.toString();
        relSpecs = new ArrayList<RelativeCode>();
        if (RelativeCode.getByValue(selectedCode).isSpecifier()) {
            relSpecs = FhhUtils.getRelationshipSpecifiers(selectedCode);
        }
        assertTrue(relSpecs.isEmpty());
    }
    
    
    /**
     * Helper method to clean relatives, add a new relative and call
     * setExistingRelativeCodes.
     * @param p person to add relative
     * @param code RelativeCode of relative to add
     */
    private List<String> addAndGetSingleCode(Person p, RelativeCode code) {
        Relative relative = new Relative();
        p.getRelatives().clear();
        relative.setCodeEnum(code);
        p.getRelatives().add(relative);
        return FhhUtils.getExistingCodes(p.getRelatives());
    }
}
