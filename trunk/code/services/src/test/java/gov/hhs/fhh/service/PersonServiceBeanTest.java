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
package gov.hhs.fhh.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Ethnicity;
import gov.hhs.fhh.data.Race;
import gov.hhs.fhh.test.AbstractHibernateTestCase;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.Test;

/**
 * @author bpickeral
 */
public class PersonServiceBeanTest extends AbstractHibernateTestCase {
    private static final Logger LOG = Logger.getLogger(AbstractHibernateTestCase.class);
    private PersonServiceBean personServiceBean = new PersonServiceBean();

    @Test
    public void testGetRaces() {
        List<Race> races = personServiceBean.getRaces();
        assertEquals(5, races.size());

        List<Race> matchingRaces = personServiceBean.getRaceByCodeAndCodeSystem("2106-3", "HL7");
        assertEquals(1, matchingRaces.size());
        assertEquals("White", matchingRaces.get(0).getOriginalText());
    }

    @Test
    public void testGetAsianRaces() {
        List<Race> races = personServiceBean.getAsianRaces();
        assertEquals(8, races.size());

        List<Race> matchingRaces = personServiceBean.getRaceByCodeAndCodeSystem("2039-6", "HL7");
        assertEquals(1, matchingRaces.size());
        assertEquals("Japanese", matchingRaces.get(0).getOriginalText());
    }

    @Test
    public void testGetHawaiianRaces() {
        List<Race> races = personServiceBean.getHawaiianRaces();
        assertEquals(5, races.size());

        List<Race> matchingRaces = personServiceBean.getRaceByCodeAndCodeSystem("2079-2", "HL7");
        assertEquals(1, matchingRaces.size());
        assertEquals("Native Hawaiian", matchingRaces.get(0).getOriginalText());
    }

    @Test
    public void testGetEthnicities() {
        List<Ethnicity> e = personServiceBean.getEthnicities();
        assertEquals(3, e.size());

    }

    @Test
    public void testGetHispanicEthnicities() {
        List<Ethnicity> matchingEthnicities = personServiceBean.getEthnicityByCodeAndCodeSystem("2182-4", "HL7");
        assertEquals(1, matchingEthnicities.size());
        assertEquals("Cuban", matchingEthnicities.get(0).getOriginalText());
    }

    @Test
    public void testGetDiseases() {
        List<Disease> diseases = personServiceBean.getDiseases();
        assertEquals(17, diseases.size());
    }

    @Test
    public void testAllGetDiseases() {
        List<Disease> diseases = personServiceBean.getAllDiseases();
        for (Disease disease : diseases) {
            LOG.debug(disease.getId());
        }
        assertEquals(89, diseases.size());
    }

    @Test
    public void testGetDiseaseSubTypes() {
        List<Disease> diseases = personServiceBean.getDiseaseSubTypes(new Long(12));
        assertEquals(15, diseases.size());
    }

  
    @Test
    public void getDiseaseByName() {
        List diseases = personServiceBean.getDiseaseByName("Cancer");
        assertFalse(diseases.isEmpty());
      
    }
    
    @Test
    public void getDiseaseByNameNotFound() {
        List diseases = personServiceBean.getDiseaseByName("Loud Music");
        assertTrue(diseases.isEmpty());
      
    }
}
