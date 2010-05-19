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
package gov.hhs.fhh.service;

import static org.junit.Assert.assertEquals;
import gov.hhs.fhh.data.AsianRaceType;
import gov.hhs.fhh.data.AsianRaceType;
import gov.hhs.fhh.data.AsianRaceType;
import gov.hhs.fhh.data.DiabetesDiseaseType;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Ethnicity;
import gov.hhs.fhh.data.Gender;
import gov.hhs.fhh.data.HispanicEthnicityType;
import gov.hhs.fhh.data.NativeHawaiianRaceType;
import gov.hhs.fhh.data.Race;
import gov.hhs.fhh.test.AbstractHibernateTestCase;
import gov.hhs.fhh.test.util.ServiceTestUtil;

import java.util.List;

import org.junit.Test;



/**
 * @author bpickeral
 
 */
public class PersonServiceBeanTest extends AbstractHibernateTestCase {
    @Test
    public void testGetGenders() {
        List<Gender> genders = new PersonServiceBean().getGenders();
        assertEquals(2, genders.size());
    }
    
    @Test
    public void testGetRaces() {
        Race r = new Race();
        ServiceTestUtil.create(r);
        Long id = ServiceTestUtil.saveGetId(r);
        ServiceTestUtil.flushAndClear();
        
        List<Race> races = new PersonServiceBean().getRaces();
        ServiceTestUtil.verify(id, races.get(0));
        assertEquals(1, races.size());
    }
    
    @Test
    public void testGetAsianRaces() {
        AsianRaceType r = new AsianRaceType();
        ServiceTestUtil.create(r);
        Long id = ServiceTestUtil.saveGetId(r);
        ServiceTestUtil.flushAndClear();
        
        List<Race> races = new PersonServiceBean().getAsianRaces();
        ServiceTestUtil.verify(id, races.get(0));
        assertEquals(1, races.size());
    }
    
    @Test
    public void testGetHawaiianRaces() {
        NativeHawaiianRaceType r = new NativeHawaiianRaceType();
        ServiceTestUtil.create(r);
        Long id = ServiceTestUtil.saveGetId(r);
        ServiceTestUtil.flushAndClear();
        
        List<Race> races = new PersonServiceBean().getHawaiianRaces();
        ServiceTestUtil.verify(id, races.get(0));
        assertEquals(1, races.size());
    }
    
    @Test
    public void testGetEthnicities() {
        Ethnicity e = new Ethnicity();
        ServiceTestUtil.create(e);
        Long id = ServiceTestUtil.saveGetId(e);
        ServiceTestUtil.flushAndClear();
        
        List<Ethnicity> ethnicities = new PersonServiceBean().getEthnicities();
        ServiceTestUtil.verify(id, ethnicities.get(0));
        assertEquals(1, ethnicities.size());
    }
    
    @Test
    public void testGetHispanicEthnicities() {
        HispanicEthnicityType e = new HispanicEthnicityType();
        ServiceTestUtil.create(e);
        Long id = ServiceTestUtil.saveGetId(e);
        ServiceTestUtil.flushAndClear();
        
        List<Ethnicity> ethnicities = new PersonServiceBean().getHispanicEthnicities();
        ServiceTestUtil.verify(id, ethnicities.get(0));
        assertEquals(1, ethnicities.size());
    }
    
    @Test
    public void testGetDiseases() {
        Disease d = new Disease();
        ServiceTestUtil.create(d);
        Long id = ServiceTestUtil.saveGetId(d);
        ServiceTestUtil.flushAndClear();
        
        List<Disease> diseases = new PersonServiceBean().getDiseases();
        ServiceTestUtil.verify(id, diseases.get(0));
        assertEquals(1, diseases.size());
    }
    
    @Test
    public void testAllGetDiseases() {
        Disease d = new Disease();
        ServiceTestUtil.create(d);
        Long id = ServiceTestUtil.saveGetId(d);
        ServiceTestUtil.flushAndClear();
        
        List<Disease> diseases = new PersonServiceBean().getAllDiseases();
        ServiceTestUtil.verify(id, diseases.get(0));
        assertEquals(1, diseases.size());
    }
    
    @Test
    public void testGetDiseaseSubTypes() {
        Disease d = new Disease();
        ServiceTestUtil.create(d);
        ServiceTestUtil.saveGetId(d);
        DiabetesDiseaseType type = new DiabetesDiseaseType();
        type.setParent(d);
        ServiceTestUtil.create(type);
        Long typeId = ServiceTestUtil.saveGetId(type);
        ServiceTestUtil.flushAndClear();
        
        List<Disease> diseases = new PersonServiceBean().getDiseaseSubTypes(d.getId());
        ServiceTestUtil.verify(typeId, diseases.get(0));
        assertEquals(1, diseases.size());
    }
}