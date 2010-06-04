package gov.hhs.fhh.web.action;

import static org.junit.Assert.assertEquals;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.web.test.AbstractFhhWebTest;
import gov.hhs.fhh.web.util.FhhHttpSessionUtil;

import org.junit.Test;

public class SaveHistoryActionTest extends AbstractFhhWebTest {
    
    private final String MIN_HEX = "80000000";
    private final String DUMMY_NAME = "Name";

    @Test
    public void manage() {
        SaveHistoryAction action = new SaveHistoryAction();
        assertEquals(SaveHistoryAction.SUCCESS, action.manage());
        assertEquals(SaveHistoryAction.SUCCESS, action.step1());
        assertEquals(SaveHistoryAction.SUCCESS, action.step2());
        assertEquals(SaveHistoryAction.SUCCESS, action.downloading());
    }
    
    @Test
    public void testPrepare() {
        SaveHistoryAction action = new SaveHistoryAction();
        Person p = new Person();
        p.setName(DUMMY_NAME);
        FhhHttpSessionUtil.getSession().setAttribute(MIN_HEX, p);
        FhhHttpSessionUtil.getSession().setAttribute(FhhHttpSessionUtil.ROOT_KEY, MIN_HEX);
        action.prepare();

        assertEquals(DUMMY_NAME, action.getPerson().getName());
    }
}
