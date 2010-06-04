package gov.hhs.fhh.web;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Collection;
import java.util.HashSet;
import java.util.Properties;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.junit.Before;
import org.junit.Test;

public class AppResourcesTest {
    private FileGrep fgrep = new FileGrep();
    private Properties en = new Properties();
    private Properties es = new Properties();
    private Properties enData = new Properties();
    private Properties esData = new Properties();
    private URL enUrl;
    private URL esUrl;

    @Before
    public void init() throws Exception {
        enUrl = this.getClass().getClassLoader().getResource("ApplicationResources.properties");
        esUrl = this.getClass().getClassLoader().getResource("ApplicationResources_es.properties");
        en.load(this.getClass().getClassLoader().getResourceAsStream("ApplicationResources.properties"));
        es.load(this.getClass().getClassLoader().getResourceAsStream("ApplicationResources_es.properties"));
        enData.load(this.getClass().getClassLoader().getResourceAsStream("DataElementResources.properties"));
        esData.load(this.getClass().getClassLoader().getResourceAsStream("DataElementResources_es.properties"));
    }

    @Test
    public void ensureSameKeys() throws Exception {
        Set<String> enKeys = new HashSet(en.keySet());
        assertTrue("No keys are in common between the two files -- bad!!", enKeys.removeAll(es.keySet()));
        Set<String> esKeys = new HashSet(es.keySet());
        assertTrue("No keys are in common between the two files -- bad!!", esKeys.removeAll(en.keySet()));

        assertEquals("EN extra keys " + enKeys.toString(), 0, enKeys.size());
        assertEquals("ES extra keys " + esKeys.toString(), 0, esKeys.size());
    }
    
    @Test
    public void ensureSameKeysDataElements() throws Exception {
        Set<String> enKeys = new HashSet(enData.keySet());
        assertTrue("No keys are in common between the two files -- bad!!", enKeys.removeAll(esData.keySet()));
        Set<String> esKeys = new HashSet(esData.keySet());
        assertTrue("No keys are in common between the two files -- bad!!", esKeys.removeAll(enData.keySet()));
        
        assertEquals("EN extra keys " + enKeys.toString(), 0, enKeys.size());
        assertEquals("ES extra keys " + esKeys.toString(), 0, esKeys.size());
    }

    @Test
    public void ensureKeyIsUsed() throws Exception {

        Set<String> enKeys = new HashSet(en.keySet());
        String baseDirPath = TestProperties.getWebBaseDir() + File.separator + "src" + File.separator;
        File baseDir = new File(baseDirPath);
        @SuppressWarnings("unchecked")
        Collection<File> webFiles = FileUtils.listFiles(baseDir, new String[] { "jsp", "tag", "jspx", "java" }, true);
        for (File file : webFiles) {
            Set<String> tmpKeys = new HashSet<String>(enKeys);
            for (String key : tmpKeys) {
                if (fgrep.isNotExcluded(key)) {
                    if (fgrep.contains(file, fgrep.escape(key))) {
                        enKeys.remove(key);
                    }
                } else {
                    enKeys.remove(key);
                }
            }
        }
        assertTrue("Keys " + enKeys + " not found within any files under " + baseDirPath, enKeys.isEmpty());
        /*
         * REMOVE MISSING KEYS FROM FILE -- Will place the files under target/classes folder as this is where the
         * resources are actually loaded from
         */
        removeKeysFromPropsFiles(enKeys);
    }

    private void removeKeysFromPropsFiles(Set<String> keysToRemove) throws URISyntaxException, IOException,
            FileNotFoundException {
        for (String key : keysToRemove) {
            en.remove(key);
            es.remove(key);
        }
        System.err.println(enUrl.toURI());
        en.store(new FileOutputStream(new File(enUrl.toURI())), "Test auto-removed unused property key-value(s)");
        es.store(new FileOutputStream(new File(esUrl.toURI())), "Test auto-removed unused property key-value(s)");
    }

}
