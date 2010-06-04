package gov.hhs.fhh.web;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import org.junit.Test;


public class SettingsTest {
    

    @Test
    public void getSetting() { 
        assertEquals("myfoo bar value", Settings.INSTANCE.getSetting("foo.bar"));
    }
    @Test
    public void getSettingThatDoesNotExist() { 
        assertNull(Settings.INSTANCE.getSetting("foo.bar1"));
    }
    
    @Test
    public void getSettingWithDefaultValue() { 
        assertEquals("aaa", Settings.INSTANCE.getSetting("foo.bar1","aaa"));
    }
}
