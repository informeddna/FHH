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
package gov.hhs.fhh.test.util;

import static org.junit.Assert.assertEquals;
import gov.hhs.fhh.data.AbstractCodeable;

import com.fiveamsolutions.nci.commons.util.HibernateUtil;

/**
 * @author bpickeral
 *
 */
public class ServiceTestUtil {
    /**
     * @param id
     * @return
     */
    public static void flushAndClear() {
        HibernateUtil.getCurrentSession().flush();
        HibernateUtil.getCurrentSession().clear();
    }

    /**
     * @param n
     * @return
     */
    public static Long saveGetId(AbstractCodeable n) {
        Long id = (Long) HibernateUtil.getCurrentSession().save(n);
        return id;
    }

    /**
     * @param id
     * @param retrieved
     */
    public static void verify(Long id, AbstractCodeable retrieved) {
        assertEquals(id, retrieved.getId());
        assertEquals("5555555", retrieved.getCode());
        assertEquals("CODE_SYS", retrieved.getCodeSystemName());
        assertEquals("DisplayName", retrieved.getDisplayStrings().get("en").getDisplayName());
    }

    /**
     * @param c
     */
    public static void create(AbstractCodeable c) {
        c.setCode("5555555");
        c.setCodeSystemName("CODE_SYS");
        c.addDisplayString("en", "DisplayName", null);
    }

}
