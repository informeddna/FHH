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
package gov.hhs.fhh.data.util;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.Height;
import gov.hhs.fhh.data.HeightUnit;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.Weight;
import gov.hhs.fhh.data.WeightUnit;
import gov.hhs.fhh.data.util.PersonUtils;

import java.text.DecimalFormat;

import org.junit.Test;

/**
 * @author bpickeral
 *
 */
public class PersonUtilsTest {
    private final Integer HEIGHT_IN_INCHES = 60;
    private final Integer HEIGHT_IN_CMS = 181;
    private final Integer WEIGHT_IN_POUNDS = 100;
    private final Integer WEIGHT_IN_KILOS = 64;
    
    
    
    @Test
    public void addRelativesTest() {
        Person p = new Person();
        PersonUtils.addRelatives(p, 2, RelativeCode.NSIS);
        assertEquals(2, p.getRelatives().size());
        assertEquals(RelativeCode.NSIS.toString(), p.getRelatives().get(0).getCode());
        assertEquals(RelativeCode.NSIS.toString(), p.getRelatives().get(1).getCode());
    }
    
    @Test
    public void isMotherSiblingTest() {
        assertTrue(PersonUtils.isMothersSibling(RelativeCode.MAUNT));
        assertTrue(PersonUtils.isMothersSibling(RelativeCode.MUNCLE));
        assertFalse(PersonUtils.isMothersSibling(RelativeCode.PAUNT));
    }
    
    @Test
    public void testMatchingUnitsBMI() {
        DecimalFormat format = new DecimalFormat("0.0");
        Person p = new Person();
        p.setHeight(new Height(HEIGHT_IN_INCHES));
        p.setWeight(new Weight(WEIGHT_IN_POUNDS, WeightUnit.US));
        
        double bmi = (WEIGHT_IN_POUNDS * 703.0) / (HEIGHT_IN_INCHES * HEIGHT_IN_INCHES);
        assertEquals(PersonUtils.calculateBmi(p), format.format(bmi));
        
        p.setHeight(new Height(HEIGHT_IN_CMS, HeightUnit.METRIC));
        p.setWeight(new Weight(WEIGHT_IN_KILOS, WeightUnit.METRIC));
        
        
        bmi = WEIGHT_IN_KILOS / ((HEIGHT_IN_CMS * HEIGHT_IN_CMS) * 1.0);
        
        assertEquals(PersonUtils.calculateBmi(p), format.format(bmi));    
    }
    
    @Test
    public void testNotMatchingUnitsBMI() {
        DecimalFormat format = new DecimalFormat("0.0");
        
        Person p = new Person();
        p.setHeight(new Height(HEIGHT_IN_INCHES));
        p.setWeight(new Weight(WEIGHT_IN_KILOS, WeightUnit.METRIC));
        
        double bmi = WEIGHT_IN_KILOS / Math.pow(HEIGHT_IN_INCHES * PersonUtils.INCH_TO_CMS, 2.0);
        assertEquals(format.format(bmi), PersonUtils.calculateBmi(p));
        
    }
    
    @Test
    public void testBadDataBMI() {
        Person p = new Person();
        p.setHeight(new Height(null));
        p.setWeight(new Weight(WEIGHT_IN_KILOS, WeightUnit.METRIC));
        
        assertNull(PersonUtils.calculateBmi(p));
        
    }
    
    @Test
    public void testMetricHeightSquared() {
        Person p = new Person();
        p.setHeight(new Height(60));
        
        assertEquals(23225.76, PersonUtils.getMetricHeightSquared(p), 0.01);
    }
    
    @Test
    public void testUSHeightSquared() {
        Person p = new Person();
        p.setHeight(new Height(100, HeightUnit.METRIC));
        
        assertEquals(1550.00, PersonUtils.getUSHeightSquared(p), 0.01);
    }
    
    
    @Test 
    public void testUSBMI() {
        Person p = new Person();
        p.setHeight(new Height(HEIGHT_IN_INCHES));
        p.setWeight(new Weight(WEIGHT_IN_POUNDS, WeightUnit.US));
        
        double bmi = (WEIGHT_IN_POUNDS * 703.0) / (HEIGHT_IN_INCHES * HEIGHT_IN_INCHES);
        assertEquals(PersonUtils.calculateUSBmi(p), bmi, 0.01);
        
        
        p.setHeight(new Height(HEIGHT_IN_CMS, HeightUnit.METRIC)); 
        bmi = ( WEIGHT_IN_POUNDS * PersonUtils.LB_TO_KG_CONVERSION) / Math.pow(HEIGHT_IN_CMS * PersonUtils.CM_TO_INCHES, 2.0);
        assertEquals(PersonUtils.calculateUSBmi(p), bmi, 0.01);
        
        
      
        
    }
    
    @Test 
    public void testMetricBMI() {
        Person p = new Person();
        p.setHeight(new Height(HEIGHT_IN_CMS, HeightUnit.METRIC));
        p.setWeight(new Weight(WEIGHT_IN_KILOS, WeightUnit.METRIC));
        
        
        double bmi = WEIGHT_IN_KILOS  / (HEIGHT_IN_CMS * HEIGHT_IN_CMS);
        assertEquals(PersonUtils.calculateMetricBmi(p), bmi, 0.01);
        
        p.setHeight(new Height(HEIGHT_IN_INCHES));
        
        bmi = ( WEIGHT_IN_KILOS ) / Math.pow(HEIGHT_IN_INCHES * PersonUtils.INCH_TO_CMS, 2.0);
        assertEquals(PersonUtils.calculateMetricBmi(p), bmi, 0.01);
        
    }
    
}
