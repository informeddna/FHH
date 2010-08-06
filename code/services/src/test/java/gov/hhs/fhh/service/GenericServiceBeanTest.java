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

import gov.hhs.fhh.data.Ethnicity;
import gov.hhs.fhh.data.Race;
import gov.hhs.fhh.test.AbstractHibernateTestCase;
import gov.hhs.fhh.test.util.ServiceTestUtil;
import gov.hhs.mfhp.model.Code;
import gov.hhs.mfhp.model.CodeStatus;
import gov.hhs.mfhp.model.DisplayName;
import gov.hhs.mfhp.model.Observation;

import org.junit.Test;

/**
 * @author Scott Miller
 */
public class GenericServiceBeanTest extends AbstractHibernateTestCase {

    @Test
    public void testCreateAndRetrieveRace() {
        Race c = new Race();
        ServiceTestUtil.create(c);
        Long id = ServiceTestUtil.saveGetId(c);
        ServiceTestUtil.flushAndClear();

        Race retrieved = new GenericServiceBean().getPersistentObject(Race.class, id);
        ServiceTestUtil.verify(id, retrieved);

    }

    @Test
    public void testCreateCopyConstructorAndRetrieveRace() {
        Race c = new Race();
        ServiceTestUtil.create(c);
        Race n = new Race(c);

        Long id = ServiceTestUtil.saveGetId(n);

        ServiceTestUtil.flushAndClear();

        Race retrieved = new GenericServiceBean().getPersistentObject(Race.class, id);
        ServiceTestUtil.verify(id, retrieved);

    }

    @Test
    public void testCreateAndRetrieveEthnicity() {
        Ethnicity c = new Ethnicity();
        ServiceTestUtil.create(c);
        Long id = ServiceTestUtil.saveGetId(c);
        ServiceTestUtil.flushAndClear();

        Ethnicity retrieved = new GenericServiceBean().getPersistentObject(Ethnicity.class, id);
        ServiceTestUtil.verify(id, retrieved);

    }

    @Test
    public void testCreateCopyConstructorAndRetrieveEthnicity() {
        Ethnicity c = new Ethnicity();
        ServiceTestUtil.create(c);
        Ethnicity n = new Ethnicity(c);

        Long id = ServiceTestUtil.saveGetId(n);

        ServiceTestUtil.flushAndClear();

        Ethnicity retrieved = new GenericServiceBean().getPersistentObject(Ethnicity.class, id);
        ServiceTestUtil.verify(id, retrieved);

    }

    

 
}