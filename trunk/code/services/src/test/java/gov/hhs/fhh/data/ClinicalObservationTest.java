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

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.age.AgeRangeFieldContainer;
import com.fiveamsolutions.hl7.model.age.CodeNode;
import com.fiveamsolutions.hl7.model.age.DataEstimatedAgeNode;

/**
 * @author bpickeral
 *
 */
public class ClinicalObservationTest {
    private static final boolean TRUE = true;
    private static final boolean FALSE = false;
    private final ClinicalObservation DUMMY_OBS = new ClinicalObservation();
    private final Disease DUMMY_DISEASE = new Disease();
    private final AgeRangeEnum DUMMY_AGE = AgeRangeEnum.FIFTIES;
    
    @Before
    public void before() {
        DUMMY_OBS.setDisease(DUMMY_DISEASE);
        DUMMY_OBS.setAgeRange(AgeRangeEnum.FIFTIES);
    }
    
    @Test
    public void testParamiterizedConstructor() {
        ClinicalObservation obs = new ClinicalObservation(DUMMY_OBS);
        assertEquals(DUMMY_AGE, obs.getAgeRange());
        assertEquals(DUMMY_DISEASE, obs.getDisease());
    }
    
    @Test
    public void testGetDataEstimatedAgeNode() {
        DataEstimatedAgeNode estimatedAgeNode = DUMMY_OBS.getDataEstimatedAgeNode();
        
        AgeRangeFieldContainer handler = estimatedAgeNode.getAgeRangeHandler();
        assertEquals(DUMMY_AGE.getUnit(), handler.getUnit());
        assertEquals(DUMMY_AGE.getHighValue(), handler.getHighValue());
        assertEquals(DUMMY_AGE.getLowValue(), handler.getLowValue());
        
        CodeNode code = estimatedAgeNode.getCodeNode();
        assertEquals(DataEstimatedAgeNode.CODE, code.getCode());
        assertEquals(DataEstimatedAgeNode.CODE_SYSTEM_NAME, code.getCodeSystemName());
        assertEquals(DataEstimatedAgeNode.DISPLAY_NAME, code.getDisplayName());
        
        // Test getDataEstimatedAge for ageRange for age range with originalText
        DUMMY_OBS.setAgeRange(AgeRangeEnum.UNKNOWN);
        estimatedAgeNode = DUMMY_OBS.getDataEstimatedAgeNode();
        assertEquals(AgeRangeEnum.UNKNOWN.getOriginalText(), estimatedAgeNode.getCodeNode().getOriginalText());
        
        // Test getDataEstimatedAge for a deceasedNode
        ClinicalObservation obs = new ClinicalObservation();
        assertNull(obs.getDataEstimatedAgeNode());
        
        code = new CodeNode();
        assertNotNull(code);
    }
    
    @Test
    public void testSetDataEstimatedAgeNode() {
        DataEstimatedAgeNode estimatedAgeNode = new DataEstimatedAgeNode(DUMMY_AGE.getUnit(), 
                DUMMY_AGE.getLowValue(), DUMMY_AGE.getHighValue());
        ClinicalObservation obs = new ClinicalObservation();
        obs.setDataEstimatedAgeNode(estimatedAgeNode);
        assertEquals(DUMMY_AGE, obs.getAgeRange());
        
        AgeRangeFieldContainer handler = new AgeRangeFieldContainer();
        handler.setUnit(DUMMY_AGE.getUnit());
        handler.setLowValue(DUMMY_AGE.getLowValue());
        handler.setHighValue(DUMMY_AGE.getHighValue());
        assertEquals(DUMMY_AGE.getUnit(), handler.getUnit());
        assertEquals(DUMMY_AGE.getLowValue(), handler.getLowValue());
        assertEquals(DUMMY_AGE.getHighValue(), handler.getHighValue());
        
        estimatedAgeNode = new DataEstimatedAgeNode();
        assertNotNull(estimatedAgeNode);
        estimatedAgeNode.setAgeRangeHandler(handler);
        assertEquals(handler, estimatedAgeNode.getAgeRangeHandler());

        obs = new ClinicalObservation();
        obs.setDataEstimatedAgeNode(new DataEstimatedAgeNode(DUMMY_AGE.getUnit(), 
                DUMMY_AGE.getLowValue(), DUMMY_AGE.getHighValue()));
        assertEquals(DUMMY_AGE, obs.getAgeRange());
        
        
    }
    
    @Test
    public void testGetCodeNode() {
        DUMMY_OBS.setCauseOfDeath(TRUE);
        CodeNode codeNode = DUMMY_OBS.getCODCodeNode();
        assertEquals(ClinicalObservation.COD_CODE, codeNode.getCode());
        assertEquals(ClinicalObservation.COD_CODE_SYSTEM_NAME, codeNode.getCodeSystemName());
        assertEquals(ClinicalObservation.COD_DISPLAY_NAME, codeNode.getDisplayName());
        
        DUMMY_OBS.setCauseOfDeath(FALSE);
        assertNull(DUMMY_OBS.getCODCodeNode());
    }
    
    @Test
    public void testSetCODCodeNode() {
        DUMMY_OBS.setCODCodeNode(new CodeNode());
        assertTrue(DUMMY_OBS.isCauseOfDeath());
    }
}
