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
package gov.hhs.fhh.web.test;

import gov.hhs.fhh.data.util.FhhDataUtils;

import gov.hhs.fhh.web.FhhRegistry;

import org.apache.struts2.ServletActionContext;
import org.junit.After;
import org.junit.Before;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpSession;

import com.opensymphony.xwork2.ActionContext;

/**
 * @author Scott Miller
 *
 */
public abstract class AbstractFhhWebTest {

    /**
     * initialize the web tests
     */
    @Before
    public void initializeWebTests() {
        FhhRegistry.getInstance().setServiceLocator(new MockServiceLocator());
        FhhDataUtils.getInstance().setServiceLocator(new MockServiceLocator());
    }

    /**
     * Initialize the mock request.
     */
    @Before
    public void initMockrequest() {
        MockHttpServletRequest request = new MockHttpServletRequest();
        request.setSession(new MockHttpSession());
        ServletActionContext.setRequest(request);
    }

    /**
     * Clean out the action context to ensure one test does not impact another.
     */
    @After
    public void cleanUpActionContext() {
        ActionContext.setContext(null);
    }

    /**
     * @return MockHttpServletRequest
     */
    protected MockHttpServletRequest getRequest() {
        return (MockHttpServletRequest) ServletActionContext.getRequest();
    }

    /**
     * @return MockHttpSession
     */
    protected MockHttpSession getSession() {
        return (MockHttpSession) ServletActionContext.getRequest().getSession();
    }
}