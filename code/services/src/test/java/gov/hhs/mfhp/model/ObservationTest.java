package gov.hhs.mfhp.model;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import gov.hhs.fhh.test.AbstractHibernateTestCase;

import java.util.HashSet;

import org.junit.Test;

import com.fiveamsolutions.nci.commons.util.HibernateUtil;

public class ObservationTest extends AbstractHibernateTestCase {

    
    @Test
    public void testGetActiveCodes() {
        Observation o = new Observation();
        o.setName("foo");
        o.setCodes(new HashSet<Code>());
        HibernateUtil.getCurrentSession().save(o);

        assertNotNull(o.getId());
        
        HibernateUtil.getCurrentSession().flush();
        HibernateUtil.getCurrentSession().clear();
        
        o = (Observation) HibernateUtil.getCurrentSession().get(Observation.class, o.getId());
        assertNull(o.getActiveCode());
    }
    @Test
    public void testGetActiveCodesWithActiveFound() {
        Code c = new Code();
        c.setCodeName("active");
        c.setStatus(CodeStatus.ACTIVE);
        Code c2 = new Code();
        c2.setCodeName("inactive");
        c2.setStatus(CodeStatus.INACTIVE);
        
        HibernateUtil.getCurrentSession().save(c2);
        HibernateUtil.getCurrentSession().save(c);
        
        assertNotNull(c2.getId());
        assertNotNull(c.getId());
        Observation o = new Observation();
        o.setName("foo");
        o.setCodes(new HashSet<Code>());
        o.getCodes().add(c2);
        o.getCodes().add(c);
        HibernateUtil.getCurrentSession().save(o);

        assertNotNull(o.getId());
        
        HibernateUtil.getCurrentSession().flush();
        HibernateUtil.getCurrentSession().clear();
        
        o = (Observation) HibernateUtil.getCurrentSession().get(Observation.class, o.getId());
        
        Code activeCode = o.getActiveCode();
        assertNotNull(activeCode);
        assertEquals("active", activeCode.getCodeName());
    }
    @Test
    public void testGetActiveCodesWithNoActiveFound() {
        Code c = new Code();
        c.setCodeName("cname");
        c.setStatus(CodeStatus.INACTIVE);
        Code c2 = new Code();
        c2.setCodeName("cname2");
        c2.setStatus(CodeStatus.INACTIVE);
        
        HibernateUtil.getCurrentSession().save(c2);
        HibernateUtil.getCurrentSession().save(c);
        
        assertNotNull(c2.getId());
        assertNotNull(c.getId());
        
        Observation o = new Observation();
        o.setName("foo");
        o.setCodes(new HashSet<Code>());
        o.getCodes().add(c2);
        o.getCodes().add(c);
        HibernateUtil.getCurrentSession().save(o);
        
        assertNotNull(o.getId());
        
        HibernateUtil.getCurrentSession().flush();
        HibernateUtil.getCurrentSession().clear();
        
        o = (Observation) HibernateUtil.getCurrentSession().get(Observation.class, o.getId());
        
        assertNull(o.getActiveCode());
    }

    @Test
    public void testGetActiveCodeWithEmptyActiveCodes() {
        Observation o = new Observation();
        o.setName("foo");
        o.setCodes(new HashSet<Code>());
        assertNull(o.getActiveCode());
    }
    
    @Test
    public void testGetActiveCodeWithNullActiveCodes() {
        Observation o = new Observation();
        o.setName("foo");
        assertNull(o.getActiveCode());
    }

    
    
}
