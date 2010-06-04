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
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.htm.InputNode;

import org.junit.Test;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.age.AgeRangeFieldContainer;
import com.fiveamsolutions.hl7.model.age.CodeNode;
import com.fiveamsolutions.hl7.model.age.DataEstimatedAgeNode;

/**
 * @author bpickeral
 * 
 */
public class AgeRangeTest {
    private AgeRangeEnum DUMMY_AGE_RANGE = AgeRangeEnum.FIFTIES;
    private String NO_SUCH_VALUE = "No such value";

    @Test
    public void testCreateAgeRange() {
        assertEquals(AgeRangeEnum.FIFTIES.getResourceKey(), DUMMY_AGE_RANGE.getResourceKey());
        assertEquals(AgeRangeEnum.FIFTIES.getOriginalText(), DUMMY_AGE_RANGE.getOriginalText());
        assertEquals(AgeRangeEnum.FIFTIES.getUnit(), DUMMY_AGE_RANGE.getUnit());
        assertEquals(AgeRangeEnum.FIFTIES.getLowValue(), DUMMY_AGE_RANGE.getLowValue());
        assertEquals(AgeRangeEnum.FIFTIES.getHighValue(), DUMMY_AGE_RANGE.getHighValue());
    }

    @Test
    public void testGetByValue() {
        assertEquals(AgeRangeEnum.FIFTIES, AgeRangeEnum.getByValue(DUMMY_AGE_RANGE.getResourceKey()));
        assertNull(AgeRangeEnum.getByValue(null));
    }

    @Test(expected = IllegalArgumentException.class)
    public final void testGetByValueIllegalArgument() {
        AgeRangeEnum.getByValue(NO_SUCH_VALUE);
    }

    @Test(expected = IllegalArgumentException.class)
    public final void testCheckLowValue() {
        AgeRangeEnum.checkLowValue(NO_SUCH_VALUE);
    }

    @Test
    public void testGetByLowValue() {
        assertEquals(AgeRangeEnum.FIFTIES, AgeRangeEnum.getByLowValue(DUMMY_AGE_RANGE.getLowValue()));
    }

    @Test(expected = IllegalArgumentException.class)
    public final void testGetByLowValueIllegalArgument() {
        AgeRangeEnum.getByLowValue(NO_SUCH_VALUE);
    }

    @Test
    public void testFromHTMNode() {
        InputNode node = new InputNode();
        node.setValue("1");
        assertTrue(AgeRangeEnum.INFANCY.equals(AgeRangeEnumUtils.fromHTMInputNode(node)));
        node.setValue("2");
        assertTrue(AgeRangeEnum.CHILDHOOD.equals(AgeRangeEnumUtils.fromHTMInputNode(node)));
        node.setValue("10");
        assertTrue(AgeRangeEnum.ADOLESCENCE.equals(AgeRangeEnumUtils.fromHTMInputNode(node)));
        node.setValue("20");
        assertTrue(AgeRangeEnum.TWENTIES.equals(AgeRangeEnumUtils.fromHTMInputNode(node)));
        node.setValue("30");
        assertTrue(AgeRangeEnum.THIRTIES.equals(AgeRangeEnumUtils.fromHTMInputNode(node)));
        node.setValue("40");
        assertTrue(AgeRangeEnum.FORTIES.equals(AgeRangeEnumUtils.fromHTMInputNode(node)));
        node.setValue("50");
        assertTrue(AgeRangeEnum.FIFTIES.equals(AgeRangeEnumUtils.fromHTMInputNode(node)));
        node.setValue("60");
        assertTrue(AgeRangeEnum.SIXTIES.equals(AgeRangeEnumUtils.fromHTMInputNode(node)));
    }

    @Test
    public void testGetAsDataEstimatedAgeNode() {
        DataEstimatedAgeNode estimatedAgeNode = DUMMY_AGE_RANGE.getAsDataEstimatedAgeNode();

        AgeRangeFieldContainer handler = estimatedAgeNode.getAgeRangeHandler();
        assertEquals(DUMMY_AGE_RANGE.getUnit(), handler.getUnit());
        assertEquals(DUMMY_AGE_RANGE.getHighValue(), handler.getHighValue());
        assertEquals(DUMMY_AGE_RANGE.getLowValue(), handler.getLowValue());

        CodeNode code = estimatedAgeNode.getCodeNode();
        assertEquals(DataEstimatedAgeNode.CODE, code.getCode());
        assertEquals(DataEstimatedAgeNode.CODE_SYSTEM_NAME, code.getCodeSystemName());
        assertEquals(DataEstimatedAgeNode.DISPLAY_NAME, code.getDisplayName());

        estimatedAgeNode = AgeRangeEnum.PREBIRTH.getAsDataEstimatedAgeNode();
        assertEquals(AgeRangeEnum.PREBIRTH.getOriginalText(), estimatedAgeNode.getCodeNode().getOriginalText());
    }

    @Test
    public void testFromDataEstimatedAgeNode() {
        DataEstimatedAgeNode estimatedAgeNode = new DataEstimatedAgeNode(DUMMY_AGE_RANGE.getUnit(), DUMMY_AGE_RANGE
                .getLowValue(), DUMMY_AGE_RANGE.getHighValue());
        assertEquals(DUMMY_AGE_RANGE, AgeRangeEnum.fromDataEstimatedAgeNode(estimatedAgeNode));

        estimatedAgeNode = new DataEstimatedAgeNode();
        estimatedAgeNode.setCodeNode(new CodeNode());
        estimatedAgeNode.getCodeNode().setOriginalText(AgeRangeEnum.PREBIRTH.getOriginalText());
        assertEquals(AgeRangeEnum.fromDataEstimatedAgeNode(estimatedAgeNode), AgeRangeEnum.PREBIRTH);

        estimatedAgeNode.getCodeNode().setOriginalText(AgeRangeEnum.UNKNOWN.getOriginalText());
        assertEquals(AgeRangeEnum.fromDataEstimatedAgeNode(estimatedAgeNode), AgeRangeEnum.UNKNOWN);
    }
}
