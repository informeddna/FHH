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
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.util.PedigreeFactoryTest;
import gov.hhs.fhh.web.Settings;
import gov.hhs.fhh.web.data.ConnectionInfo;
import gov.hhs.fhh.web.test.AbstractFhhWebTest;
import gov.hhs.fhh.web.util.FhhHttpSessionUtil;

import java.io.IOException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPathExpressionException;

import org.junit.Ignore;
import org.junit.Test;

import com.fiveamsolutions.hl7.messaging.provider.DtoTransformException;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;
import com.microsoft.hsg.HVAccessDeniedException;
import com.microsoft.hsg.HVInvalidXmlException;

/**
 * @author bpickeral
 *
 */
public class HealthvaultActionTest extends AbstractFhhWebTest {
    private final HealthvaultAction action = new HealthvaultAction();
    private final String MIN_HEX = "80000000";
    private final String DUMMY_NAME = "Name";
    private final Integer WEIGHT = 180;

    @Test
    @Ignore
    public void testConnect() throws Exception {
        PedigreeFactoryTest pedigreeUtilsTest = new PedigreeFactoryTest();
        Person p = pedigreeUtilsTest.createPerson();
        action.setPerson(p);
        assertEquals(HealthvaultAction.SUCCESS, action.innerConnect());
        assertTrue(getResponse().getRedirectedUrl().toString().contains(
                Settings.INSTANCE.getSetting("application.base.url")));
    }

    @Test
    public void testHealthvaultManager() throws Exception {
        ConnectionInfo connectionInfo = new ConnectionInfo();
        connectionInfo.setPersonName("moooo");
        action.setSessionInfo(connectionInfo);
        assertEquals("saveToHV", action.healthvaultManager());
    }

    @Test
    public void testPrepare() {
        Person p = new Person();
        p.setName(DUMMY_NAME);
        FhhHttpSessionUtil.getSession().setAttribute(MIN_HEX, p);
        FhhHttpSessionUtil.getSession().setAttribute(FhhHttpSessionUtil.ROOT_KEY, MIN_HEX);
        ConnectionInfo connectionInfo = new ConnectionInfo();
        FhhHttpSessionUtil.setHVSession(connectionInfo);
        action.prepare();

        assertSame(connectionInfo, action.getSessionInfo());

        assertEquals(DUMMY_NAME, action.getPerson().getName());
    }

    public void testSaveToHealthvault() throws XPathExpressionException, IOException, ParserConfigurationException {
        Person p = new Person();
        action.setPerson(p);
        assertEquals(HealthvaultAction.SUCCESS, action.saveToHealthvault());

        p.setWeight(new Weight());
        p.getWeight().setValue(WEIGHT);
        p.getWeight().setUnit(WeightUnit.US);
        assertEquals(HealthvaultAction.SUCCESS, action.saveToHealthvault());
    }

    @Test
    public void testGetCauseOfProblem() {
        Throwable exception = new DtoTransformException();
        HealthvaultAction.HvCauseOfProblem causeOfProblem = action.getHvCauseOfProblem(exception);
        assertEquals(HealthvaultAction.HvCauseOfProblem.DtoTransformException, causeOfProblem);

        exception = new HVAccessDeniedException();
        causeOfProblem = action.getHvCauseOfProblem(exception);
        assertEquals(HealthvaultAction.HvCauseOfProblem.HVAccessDeniedException, causeOfProblem);

        exception = new HVInvalidXmlException();
        causeOfProblem = action.getHvCauseOfProblem(exception);
        assertEquals(HealthvaultAction.HvCauseOfProblem.HVInvalidXmlException, causeOfProblem);

        exception = new NullPointerException();
        causeOfProblem = action.getHvCauseOfProblem(exception);
        assertEquals(HealthvaultAction.HvCauseOfProblem.OtherException, causeOfProblem);

        exception = new RuntimeException(new RuntimeException(new DtoTransformException()));
        causeOfProblem = action.getHvCauseOfProblem(exception);
        assertEquals(HealthvaultAction.HvCauseOfProblem.DtoTransformException, causeOfProblem);

        exception = new RuntimeException(new HVAccessDeniedException());
        causeOfProblem = action.getHvCauseOfProblem(exception);
        assertEquals(HealthvaultAction.HvCauseOfProblem.HVAccessDeniedException, causeOfProblem);

        exception = new RuntimeException(new RuntimeException(new RuntimeException(new HVInvalidXmlException())));
        causeOfProblem = action.getHvCauseOfProblem(exception);
        assertEquals(HealthvaultAction.HvCauseOfProblem.HVInvalidXmlException, causeOfProblem);

        // top level recognized exception is the one we want
        exception = new RuntimeException(new DtoTransformException(new RuntimeException(new HVInvalidXmlException())));
        causeOfProblem = action.getHvCauseOfProblem(exception);
        assertEquals(HealthvaultAction.HvCauseOfProblem.DtoTransformException, causeOfProblem);
    }

}