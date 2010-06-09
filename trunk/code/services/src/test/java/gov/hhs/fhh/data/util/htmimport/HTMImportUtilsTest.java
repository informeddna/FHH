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

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.htm.InputNode;
import gov.hhs.fhh.model.mfhp.LivingStatus;
import gov.hhs.fhh.model.mfhp.castor.HTMNode;
import gov.hhs.fhh.test.util.PersonTestUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;

/**
 * @author bpickeral
 *
 */
public class HTMImportUtilsTest {
    
    private final String SISTER1 = HTMRelationship.SISTER.getRelationship() + "1";
    private final String SISTER2 = HTMRelationship.SISTER.getRelationship() + "2";;
    private final String NAME = "Name";
    private final String STROKE = "StrokeOnset";
    private HTMImporter importer = new HTMImporter();
    
    @Test
    public void testSeperateInputNodes() {
        Map<String, HTMNode> relativeMap = new HashMap<String, HTMNode>();
        Map<String, InputNode> inputNodes = new HashMap<String, InputNode>();
        HTMNode sister1 = new HTMNode(HTMRelationship.SISTER, 1, SISTER1);
        HTMNode sister2 = new HTMNode(HTMRelationship.SISTER, 2, SISTER2);
        HTMNode mother = new HTMNode(HTMRelationship.MOTHER, null, HTMRelationship.MOTHER.getRelationship());
        
        relativeMap.put(SISTER2, sister2);
        relativeMap.put(SISTER1, sister1);
        relativeMap.put(HTMRelationship.MOTHER.getRelationship(), mother);
        InputNode inputNode1 = new InputNode();
        InputNode inputNode2 = new InputNode();
        InputNode inputNode3 = new InputNode();
        InputNode inputNode4 = new InputNode();
        InputNode inputNode5 = new InputNode();
        
        inputNode1.setName(SISTER1 + NAME);
        inputNode2.setName(SISTER2 + NAME);
        inputNode3.setName(SISTER2 + STROKE);
        inputNode4.setName(SISTER1 + STROKE);
        inputNode5.setName(HTMRelationship.MOTHER.getRelationship() + NAME);
        
        inputNodes.put(inputNode1.getName(), inputNode1);
        inputNodes.put(inputNode2.getName(), inputNode2);
        inputNodes.put(inputNode4.getName(), inputNode4);
        inputNodes.put(inputNode3.getName(), inputNode3);
        inputNodes.put(inputNode5.getName(), inputNode5);
        
        importer.seperateInputNodes(relativeMap, inputNodes);
        assertEquals(2, relativeMap.get(SISTER1).getInputNodes().size());
        assertEquals(2, relativeMap.get(SISTER2).getInputNodes().size());
        assertEquals(1, relativeMap.get(HTMRelationship.MOTHER.getRelationship()).getInputNodes().size());
        assertTrue(relativeMap.get(SISTER1).getInputNodes().get(NAME).getName().contains(SISTER1));
        assertTrue(relativeMap.get(SISTER1).getInputNodes().get(STROKE).getName().contains(SISTER1));
        assertTrue(relativeMap.get(SISTER2).getInputNodes().get(NAME).getName().contains(SISTER2));
        assertTrue(relativeMap.get(SISTER2).getInputNodes().get(STROKE).getName().contains(SISTER2));
        assertTrue(relativeMap.get(HTMRelationship.MOTHER.getRelationship()).getInputNodes().get(NAME)
                .getName().contains(HTMRelationship.MOTHER.getRelationship()));
    }
    
    @Test
    public void testCreateRelativeMap() {
        Map<String, InputNode> inputNodes = new HashMap<String, InputNode>();
        for (HTMRelationship currRelationship : HTMRelationship.values()) {
            if (currRelationship.isVariableRelative()) {
                PersonTestUtils.createInputNode(currRelationship.getRelationship(), "2", inputNodes);
            }
        }
        Map<String, HTMNode> relativeMap = importer.createRelativeMap(inputNodes);
        for (HTMRelationship currRelationship : HTMRelationship.values()) {
            if (currRelationship.isVariableRelative()) {
                HTMNode htmNode = relativeMap.get(currRelationship.getRelationship() + "1");
                assertEquals(currRelationship.getRelationship() + "1", htmNode.getHtmName());
                
                htmNode = relativeMap.get(currRelationship.getRelationship() + "2");
                assertEquals(currRelationship.getRelationship() + "2", htmNode.getHtmName());
            } else {
                HTMNode htmNode = relativeMap.get(currRelationship.getRelationship());
                assertEquals(currRelationship.getRelationship(), htmNode.getHtmName());
            }
            
        }
    }

    
    /**
     * Note: An actual legacy htm import is tested in FamilyHistoryActionTest.  This test verifies the processing of
     * HTM Nodes.
     */
    @Test
    public void testSetHTMNode() {
        Person p = new Person();
        
        // setHTMNode for fixed relatives (parents, grandparents)
        p.getObservations().clear();
        Map<String, InputNode> inputNodes = new HashMap<String, InputNode>();
        // add every attribute node for every relative
        PersonTestUtils.addAttributeNodes(HTMRelationship.SELF.getRelationship(), inputNodes, true, null);
        // Test that input node was set correctly
        InputNode selfNode = inputNodes.get(HTMRelationship.SELF.getRelationship() + NAME);
        assertNotNull(selfNode);
        PersonTestUtils.checkInputNode(selfNode);
        
        PersonTestUtils.addAttributeNodes(HTMRelationship.MOTHER.getRelationship(), inputNodes, true, null);
        PersonTestUtils.addAttributeNodes(HTMRelationship.FATHER.getRelationship(), inputNodes, false, null);
        PersonTestUtils.addAttributeNodes(HTMRelationship.MGRFTH.getRelationship(), inputNodes, true, LivingStatus.YES);
        PersonTestUtils.addAttributeNodes(HTMRelationship.MGRMTH.getRelationship(), inputNodes, false, LivingStatus.YES);
        PersonTestUtils.addAttributeNodes(HTMRelationship.PGRFTH.getRelationship(), inputNodes, true, LivingStatus.NO);
        PersonTestUtils.addAttributeNodes(HTMRelationship.PGRMTH.getRelationship(), inputNodes, false, LivingStatus.NO);
        PersonTestUtils.addSelfAttributeNodes(inputNodes);
        PersonTestUtils.addNumRelativeNodes(inputNodes);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.DAUGHTER.getRelationship() + "1", 
                HTMRelationship.DAUGHTER.getRelationship() + "2", inputNodes, 
                HTMImporter.CALCULATED, LivingStatus.UNKNOWN);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.SON.getRelationship() + "1", 
                HTMRelationship.SON.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED, null);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.SISTER.getRelationship() + "1", 
                HTMRelationship.SISTER.getRelationship() + "2", inputNodes, 
                HTMImporter.CALCULATED, LivingStatus.YES);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.BROTHER.getRelationship() + "1", 
                HTMRelationship.BROTHER.getRelationship() + "2", inputNodes, 
                HTMImporter.CALCULATED, LivingStatus.NO);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.HSISTER.getRelationship() + "1", 
                HTMRelationship.HSISTER.getRelationship() + "2", inputNodes, 
                HTMRelationship.MOTHER.getRelationship(), LivingStatus.UNKNOWN);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.HBROTHER.getRelationship() + "1", 
                HTMRelationship.HBROTHER.getRelationship() + "2", inputNodes, 
                HTMRelationship.FATHER.getRelationship(), null);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.PAUNT.getRelationship() + "1", 
                HTMRelationship.PAUNT.getRelationship() + "2", inputNodes, 
                HTMImporter.CALCULATED, LivingStatus.YES);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.PUNCLE.getRelationship() + "1", 
                HTMRelationship.PUNCLE.getRelationship() + "2", inputNodes, 
                HTMImporter.CALCULATED, LivingStatus.NO);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.MAUNT.getRelationship() + "1", 
                HTMRelationship.MAUNT.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED, LivingStatus.UNKNOWN);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.MUNCLE.getRelationship() + "1", 
                HTMRelationship.MUNCLE.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED, null);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.NIECE.getRelationship() + "1", 
                HTMRelationship.NIECE.getRelationship() + "2", inputNodes, HTMRelationship.MAUNT.getRelationship() + "1", 
                LivingStatus.YES);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.NEPHEW.getRelationship() + "1", 
                HTMRelationship.NEPHEW.getRelationship() + "2", inputNodes, HTMRelationship.PAUNT.getRelationship() + "1", 
                LivingStatus.NO);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.FCOUSIN.getRelationship() + "1", 
                HTMRelationship.FCOUSIN.getRelationship() + "2", inputNodes, HTMRelationship.PUNCLE.getRelationship() + "1", LivingStatus.UNKNOWN);
        PersonTestUtils.addAttributesForVariableRelatives(HTMRelationship.MCOUSIN.getRelationship() + "1", 
                HTMRelationship.MCOUSIN.getRelationship() + "2", inputNodes, HTMRelationship.MAUNT.getRelationship() + "1", null);
        PersonTestUtils.addFamilyAddConditions(inputNodes);
        PersonTestUtils.addRandomNodes(inputNodes);
        
        p = importer.extractHtmNode(inputNodes);
        
        PersonTestUtils.checkSelfAttributes(p, true);
        PersonTestUtils.checkObservations(p);
        
        checkRelatives(p.getRelatives());
        
        // add blank attributes for every relative (no data present)
        inputNodes = new HashMap<String, InputNode>();;
        PersonTestUtils.addBlankAttributeNodes(HTMRelationship.SELF.getRelationship(), inputNodes);
        PersonTestUtils.addBlankAttributeNodes(HTMRelationship.MOTHER.getRelationship(), inputNodes);
        PersonTestUtils.addBlankAttributeNodes(HTMRelationship.FATHER.getRelationship(), inputNodes);
        PersonTestUtils.addBlankAttributeNodes(HTMRelationship.MGRFTH.getRelationship(), inputNodes);
        PersonTestUtils.addBlankAttributeNodes(HTMRelationship.MGRMTH.getRelationship(), inputNodes);
        PersonTestUtils.addBlankAttributeNodes(HTMRelationship.PGRFTH.getRelationship(), inputNodes);
        PersonTestUtils.addBlankAttributeNodes(HTMRelationship.PGRMTH.getRelationship(), inputNodes);
        PersonTestUtils.addBlankSelfAttributeNodes(inputNodes);
        PersonTestUtils.addNumRelativeNodes(inputNodes);
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.DAUGHTER.getRelationship() + "1", 
                HTMRelationship.DAUGHTER.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED);
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.SON.getRelationship() + "1", 
                HTMRelationship.SON.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED);
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.SISTER.getRelationship() + "1", 
                HTMRelationship.SISTER.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED);
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.BROTHER.getRelationship() + "1", 
                HTMRelationship.BROTHER.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED);
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.HSISTER.getRelationship() + "1", 
                HTMRelationship.HSISTER.getRelationship() + "2", inputNodes, HTMRelationship.MOTHER.getRelationship());
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.HBROTHER.getRelationship() + "1", 
                HTMRelationship.HBROTHER.getRelationship() + "2", inputNodes, 
                HTMRelationship.FATHER.getRelationship());
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.PAUNT.getRelationship() + "1", 
                HTMRelationship.PAUNT.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED);
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.PUNCLE.getRelationship() + "1", 
                HTMRelationship.PUNCLE.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED);
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.MAUNT.getRelationship() + "1", 
                HTMRelationship.MAUNT.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED);
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.MUNCLE.getRelationship() + "1", 
                HTMRelationship.MUNCLE.getRelationship() + "2", inputNodes, HTMImporter.CALCULATED);
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.NIECE.getRelationship() + "1", 
                HTMRelationship.NIECE.getRelationship() + "2", inputNodes, 
                HTMRelationship.MAUNT.getRelationship() + "1");
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.NEPHEW.getRelationship() + "1", 
                HTMRelationship.NEPHEW.getRelationship() + "2", inputNodes, HTMRelationship.PAUNT.getRelationship() + "1");
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.FCOUSIN.getRelationship() + "1", 
                HTMRelationship.FCOUSIN.getRelationship() + "2", inputNodes, HTMRelationship.PUNCLE.getRelationship() + "1");
        PersonTestUtils.addBlankAttributeForVariableRelatives(HTMRelationship.MCOUSIN.getRelationship() + "1", 
                HTMRelationship.MCOUSIN.getRelationship() + "2", inputNodes, HTMRelationship.MAUNT.getRelationship() + "1");
        PersonTestUtils.addBlankFamilyAddConditions(inputNodes);
        
        Person p2 = new Person();
        p2 = importer.extractHtmNode(inputNodes);
        PersonTestUtils.checkBlankAttributes(p2);
        
        for (Relative currRelative : p2.getRelatives()) {
            PersonTestUtils.checkBlankAttributes(currRelative);
            PersonTestUtils.checkRelativeBlankAttributes(currRelative);
        }
    }
    
    private void checkRelatives(List<Relative> relativeList) {
        Map<String, Relative> nameToRelativeMap = new HashMap<String, Relative>();
        for (Relative currRelative : relativeList) {
            nameToRelativeMap.put(currRelative.getName(), currRelative);
        }
        checkRelative(nameToRelativeMap, HTMRelationship.MOTHER.getRelationship(), true, 0);
        checkRelative(nameToRelativeMap, HTMRelationship.FATHER.getRelationship(), false, 1);
        checkRelative(nameToRelativeMap, HTMRelationship.MGRFTH.getRelationship(), true, 2);
        checkRelative(nameToRelativeMap, HTMRelationship.MGRMTH.getRelationship(), false, 3);
        checkRelative(nameToRelativeMap, HTMRelationship.PGRFTH.getRelationship(), true, 4);
        checkRelative(nameToRelativeMap, HTMRelationship.PGRMTH.getRelationship(), false, 5);
        
        checkRelative(nameToRelativeMap, HTMRelationship.DAUGHTER.getRelationship() + "1", true, 6);
        checkRelative(nameToRelativeMap, HTMRelationship.DAUGHTER.getRelationship() + "2", false, 7);
        checkRelative(nameToRelativeMap, HTMRelationship.SON.getRelationship() + "1", true, 8);
        checkRelative(nameToRelativeMap, HTMRelationship.SON.getRelationship() + "2", false, 9);
        checkRelative(nameToRelativeMap, HTMRelationship.SISTER.getRelationship() + "1", true, 10);
        checkRelative(nameToRelativeMap, HTMRelationship.SISTER.getRelationship() + "2", false, 11);
        checkRelative(nameToRelativeMap, HTMRelationship.BROTHER.getRelationship() + "1", true, 12);
        checkRelative(nameToRelativeMap, HTMRelationship.BROTHER.getRelationship() + "2", false, 13);
        
        checkRelative(nameToRelativeMap, HTMRelationship.HSISTER.getRelationship() + "1", true, 14);
        checkRelative(nameToRelativeMap, HTMRelationship.HSISTER.getRelationship() + "2", false, 15);
        checkRelative(nameToRelativeMap, HTMRelationship.HBROTHER.getRelationship() + "1", true, 16);
        checkRelative(nameToRelativeMap, HTMRelationship.HBROTHER.getRelationship() + "2", false, 17);
        checkRelative(nameToRelativeMap, HTMRelationship.PAUNT.getRelationship() + "1", true, 18);
        checkRelative(nameToRelativeMap, HTMRelationship.PAUNT.getRelationship() + "2", false, 19);
        checkRelative(nameToRelativeMap, HTMRelationship.PUNCLE.getRelationship() + "1", true, 20);
        checkRelative(nameToRelativeMap, HTMRelationship.PUNCLE.getRelationship() + "2", false, 21);
        checkRelative(nameToRelativeMap, HTMRelationship.MAUNT.getRelationship() + "1", true, 22);
        checkRelative(nameToRelativeMap, HTMRelationship.MAUNT.getRelationship() + "2", false, 23);
        checkRelative(nameToRelativeMap, HTMRelationship.MUNCLE.getRelationship() + "1", true, 24);
        checkRelative(nameToRelativeMap, HTMRelationship.MUNCLE.getRelationship() + "2", false, 25);
        
        checkRelative(nameToRelativeMap, HTMRelationship.NIECE.getRelationship() + "1", true, 26);
        checkRelative(nameToRelativeMap, HTMRelationship.NIECE.getRelationship() + "2", false, 27);
        checkRelative(nameToRelativeMap, HTMRelationship.NEPHEW.getRelationship() + "1", true, 28);
        checkRelative(nameToRelativeMap, HTMRelationship.NEPHEW.getRelationship() + "2", false, 29);
        
        checkRelative(nameToRelativeMap, HTMRelationship.FCOUSIN.getRelationship() + "1", true, 30);
        checkRelative(nameToRelativeMap, HTMRelationship.FCOUSIN.getRelationship() + "2", false, 31);
        checkRelative(nameToRelativeMap, HTMRelationship.MCOUSIN.getRelationship() + "1", true, 32);
        checkRelative(nameToRelativeMap, HTMRelationship.MCOUSIN.getRelationship() + "2", false, 33);
       
    }
    
    private void checkRelative(Map<String, Relative> nameToRelativeMap, String name, boolean twinStatus, int i) {
        Relative relative = nameToRelativeMap.get(name);
        PersonTestUtils.checkAttributes(relative, twinStatus, name);
        PersonTestUtils.checkObservations(relative);
        PersonTestUtils.checkRelativeAttributes(relative, i);
    }
    
    @Test
    public void testNodeValueExists() {
        InputNode inputNode = new InputNode();
        assertFalse(importer.nodeValueExists(inputNode));
        
        inputNode.setValue("");
        assertFalse(importer.nodeValueExists(inputNode));
        
        inputNode.setValue("test");
        assertTrue(importer.nodeValueExists(inputNode));
    }
}