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
package gov.hhs.fhh.web.action;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.web.test.AbstractFhhWebTest;
import gov.hhs.fhh.web.util.FhhHttpSessionUtil;

import org.junit.Test;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;

/**
 * @author bpickeral
 *
 */
public class DroppedRelativesActionTest extends AbstractFhhWebTest {
    private final DroppedRelativesAction action = new DroppedRelativesAction();
    private final String MIN_HEX = "80000000";
    private final String PERSON_NAME = "name";
    private final String ORIG_TEXT = "orig text";
    private final String APP_DISPLAY = "app display";
    private final String INPUT = "input";
    
    @Test
    public void testDroppedRelatives() throws Exception {
        Person p = new Person();
        Relative droppedCousin = new Relative();
        Disease d = new Disease();
        ClinicalObservation obs = new ClinicalObservation();
        obs.setDisease(d);
        obs.setAgeRange(AgeRangeEnum.TWENTIES);
        d.setOriginalText(ORIG_TEXT);
        FhhHttpSessionUtil.getSession().setAttribute(MIN_HEX, p);
        FhhHttpSessionUtil.getSession().setAttribute(FhhHttpSessionUtil.ROOT_KEY, MIN_HEX);

        action.prepare();
        assertEquals(INPUT, action.droppedRelatives());
        assertTrue(action.getFieldErrors().size() == 0);
        
        droppedCousin.setCodeEnum(RelativeCode.COUSN);
        droppedCousin.getObservations().add(obs);
        p.getHtmImportDroppedRelatives().add(droppedCousin);
        assertEquals(INPUT, action.droppedRelatives());
        assertTrue(action.getFieldErrors().size() == 1);
        
        action.getFieldErrors().clear();
        p.getHtmImportDroppedRelatives().get(0).setName(PERSON_NAME);
        d.setOriginalText(null);
        d.setAppDisplay(APP_DISPLAY);
        
        assertEquals(INPUT, action.droppedRelatives());
        assertTrue(action.getFieldErrors().size() == 1);
    }
}
