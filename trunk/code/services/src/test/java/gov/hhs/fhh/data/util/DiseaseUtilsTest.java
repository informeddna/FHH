package gov.hhs.fhh.data.util;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.UserEnteredDisease;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.junit.Test;

public class DiseaseUtilsTest {

    @Test
    public void testGetUniqueAbbreviationMapEmptyBlank() {
        Throwable cought = null;
        try {
            DiseaseUtils.getUniqueAbbreviationMap(null);
        } catch (NullPointerException e) {
            cought = e;
        }
        assertNotNull(cought);

        Map<Disease, String> retval = DiseaseUtils.getUniqueAbbreviationMap(new HashSet<Disease>());
        assertEquals(0, retval.size());
    }

    @Test
    public void testGetUniqueAbbreviationMapSimpleOriginalText() {
        UserEnteredDisease d = new UserEnteredDisease();
        d.setOriginalText("mooooo");
        Set<Disease> set = new HashSet<Disease>();
        set.add(d);

        Map<Disease, String> retval = DiseaseUtils.getUniqueAbbreviationMap(set);
        assertEquals(1, retval.size());
        assertEquals("MooOO", retval.get(d));

        UserEnteredDisease d1 = new UserEnteredDisease();
        d1.setOriginalText("mooooo");
        set.add(d1);

        retval = DiseaseUtils.getUniqueAbbreviationMap(set);
        assertEquals(1, retval.size());
        assertEquals("MooOO", retval.get(d));
        assertEquals("MooOO", retval.get(d1));

        UserEnteredDisease d2 = new UserEnteredDisease();
        d2.setOriginalText("MooOO1");
        set.add(d2);

        retval = DiseaseUtils.getUniqueAbbreviationMap(set);
        assertEquals(2, retval.size());
        assertEquals("MooOO", retval.get(d));
        assertEquals("MooOO", retval.get(d1));
        assertEquals("MooO1", retval.get(d2));
    }

    @Test
    public void testGetUniqueAbbreviationMapComplicatedOriginalText() {
        UserEnteredDisease d = new UserEnteredDisease();
        d.setOriginalText("mooooo");
        UserEnteredDisease d1 = new UserEnteredDisease();
        d1.setOriginalText("mooooo");
        UserEnteredDisease d2 = new UserEnteredDisease();
        d2.setOriginalText("moooooooooo");
        UserEnteredDisease d3 = new UserEnteredDisease();
        d3.setOriginalText("aaaaaaaaaaaaaaz");
        UserEnteredDisease d4 = new UserEnteredDisease();
        d4.setOriginalText("aaaaaaaaz");
        UserEnteredDisease d5 = new UserEnteredDisease();
        d5.setOriginalText("aaaaaaaaaaaaaaaaaaaaz");
        Set<Disease> set = new HashSet<Disease>();
        set.add(d);
        set.add(d1);
        set.add(d2);
        set.add(d3);
        set.add(d4);
        set.add(d5);

        Map<Disease, String> retval = DiseaseUtils.getUniqueAbbreviationMap(set);
        assertEquals(5, retval.size());
        assertEquals("MooOO1", retval.get(d));
        assertEquals("MooOO1", retval.get(d1));
        assertEquals("MooOO", retval.get(d2));
        assertEquals("AaaAZ2", retval.get(d3));
        assertEquals("AaaAZ1", retval.get(d4));
        assertEquals("AaaAZ", retval.get(d5));
    }

}
