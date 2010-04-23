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
package gov.hhs.fhh.web.action;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import gov.hhs.fhh.data.AgeRange;
import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Ethnicity;
import gov.hhs.fhh.data.Gender;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Race;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.Weight;
import gov.hhs.fhh.data.WeightUnit;
import gov.hhs.fhh.web.test.AbstractFhhWebTest;
import gov.hhs.fhh.web.util.FhhHttpSessionUtil;

import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.junit.Test;

/**
 * @author lpower
 *
 */
public class ViewReportActionTest extends AbstractFhhWebTest {
    private final ViewReportAction action = new ViewReportAction();
    private final String SUCCESS = "success";
    private final String SUBMIT = "submit";
    private final String MIN_HEX = "80000000";
    private final boolean TRUE = true;
    
    private final Weight DUMMY_WEIGHT = new Weight(180, WeightUnit.US);
    private final String DUMMY_NAME = "Name";
    private final Disease DUMMY_DISEASE = new Disease();
    private final Disease DUMMY_DISEASE2 = new Disease();
    private final String DUMMY_DISEASE_VALUE = "current";
    private static final String DUMMY_DISEASE_DISPLAY = "Cancer";
    private static final String OTHER_DISEASE = "Other - Add New";
    private static final String NOT_OTHER_DISEASE = "";
    private static final String DUMMY_DISEASE2_ORG_TEXT = "User entered disease";
    private final Ethnicity DUMMY_ETHNICITY = new Ethnicity();
    private final Race DUMMY_RACE = new Race();
    private final String DUMMY_KEY = "80000000";
    private final Gender DUMMY_GENDER = Gender.MALE;
    private final ClinicalObservation DUMMY_CLINICAL_OBSERVATION = new ClinicalObservation();
    private final GregorianCalendar DUMMY_DATE = new GregorianCalendar(1970, 9, 7, 0, 0, 0);
    

    @Test
    public void testPrepare() {
        // Test prepare with no person set in session
        /*
        action.prepare();
        assertEquals(SUCCESS, action.viewReport());
        
        Person p = action.getPerson();
        p.setName(DUMMY_NAME);
        
        p.setDateOfBirth(DUMMY_DATE.getTime());
        p.setWeight(DUMMY_WEIGHT);
        p.setGender(DUMMY_GENDER);
        DUMMY_CLINICAL_OBSERVATION.setAgeRange(AgeRange.TWENTIES);
        DUMMY_CLINICAL_OBSERVATION.setDisease(DUMMY_DISEASE);
        p.setObservations(new ArrayList<ClinicalObservation>());
        p.getObservations().add(DUMMY_CLINICAL_OBSERVATION);
        
        action.prepare();
        assertEquals(DUMMY_NAME, action.getPerson().getName());
        assertEquals(DUMMY_DATE.getTime(), action.getPerson().getDateOfBirth());
        assertEquals(DUMMY_WEIGHT, action.getPerson().getWeight());
        assertEquals(DUMMY_GENDER.getDisplayName(), action.getPerson().getGender().getDisplayName());
        */
    }

    @Test
    public void testViewReport() {
        assertEquals(SUCCESS, action.viewReport());
    }


    
    @Test
    public void testGetPedigreeImage() {
        //getPedigreeImage

    }
    
    @Test
    public void testRetrieveImage() {
        assertEquals("pedigreeDiagram",action.retrieveImage());
    }
    
    @Test
    public void testMakeDiagram() {
        // return makeDiagram();
    }
    
    
    /**
     * @return List of relatives - parents, siblings, grandparents.
     */
    private static List<Relative> createMyRelatives() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative mother = createRelative("mother",RelativeCode.NMTH);
        relatives.add(mother);
        Relative father = createRelative("father",RelativeCode.NFTH);
        relatives.add(father);
        Relative sister = createRelative("sister",RelativeCode.NSIS);
        relatives.add(sister);
        Relative brother = createRelative("brother", RelativeCode.NBRO);
        relatives.add(brother);
        Relative pgfth = createRelative("pgfth", RelativeCode.PGRFTH);
        relatives.add(pgfth);
        Relative pgmth = createRelative("pgmth", RelativeCode.PGRMTH);
        relatives.add(pgmth);
        Relative mgfth = createRelative("mgfth", RelativeCode.MGRFTH);
        relatives.add(mgfth);
        Relative mgmth = createRelative("mgmth", RelativeCode.MGRMTH);
        relatives.add(mgmth);
        return relatives;
    }
    
    /**
     * @param name creates a Relative with the name param and relative code.
     * @return Person
     */
    public static Relative createRelative(String name, RelativeCode rc) {
        Person p = new Person();
        p.setName(name);
        Date date = new Date();
        p.setDateOfBirth(date);
        p.setWeight(new Weight(112, WeightUnit.US));
        return new Relative(p, rc);
    }



}
