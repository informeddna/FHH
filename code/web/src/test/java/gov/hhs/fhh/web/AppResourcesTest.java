package gov.hhs.fhh.web;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.StringWriter;
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
    private Properties pt = new Properties();
    private Properties it = new Properties();
    private Properties enData = new Properties();
    private Properties esData = new Properties();
    private Properties ptData = new Properties();
    private Properties itData = new Properties();
    private URL enUrl;
    private URL esUrl;
    private URL ptUrl;
    private URL itUrl;

    @Before
    public void init() throws Exception {
        enUrl = this.getClass().getClassLoader().getResource("ApplicationResources.properties");
        esUrl = this.getClass().getClassLoader().getResource("ApplicationResources_es.properties");
        ptUrl = this.getClass().getClassLoader().getResource("ApplicationResources_pt.properties");
        itUrl = this.getClass().getClassLoader().getResource("ApplicationResources_it.properties");
        en.load(this.getClass().getClassLoader().getResourceAsStream("ApplicationResources.properties"));
        es.load(this.getClass().getClassLoader().getResourceAsStream("ApplicationResources_es.properties"));
        pt.load(this.getClass().getClassLoader().getResourceAsStream("ApplicationResources_pt.properties"));
        it.load(this.getClass().getClassLoader().getResourceAsStream("ApplicationResources_it.properties"));
        enData.load(this.getClass().getClassLoader().getResourceAsStream("DataElementResources.properties"));
        esData.load(this.getClass().getClassLoader().getResourceAsStream("DataElementResources_es.properties"));
        ptData.load(this.getClass().getClassLoader().getResourceAsStream("DataElementResources_pt.properties"));
        itData.load(this.getClass().getClassLoader().getResourceAsStream("DataElementResources_it.properties"));
    }

    
    private void ensureSameKeys(Properties enProperties, Properties other, final String locale) throws Exception {
        Set<String> enKeys = new HashSet(enProperties.keySet());
        assertTrue("No keys are in common between the en and "+ locale +" files -- bad!!", enKeys.removeAll(other.keySet()));
        Set<String> otherKeys = new HashSet(other.keySet());
        assertTrue("No keys are in common between the " + locale +" and en files -- bad!!", otherKeys.removeAll(enProperties.keySet()));

        StringWriter sw = new StringWriter();
        if ( enKeys.size() != 0) {
            for(String key : enKeys) {
                sw.write(key + "=" + enProperties.getProperty(key) + "\n");
            }
        }
        assertEquals("EN extra keys vs " + locale + ":\n\n" + sw.toString() + "\n", 0, enKeys.size());
        assertEquals(locale + " extra keys vs EN" + otherKeys.toString(), 0, otherKeys.size());
    }
    
    
    @Test
    public void ensureSameKeysES() throws Exception {
        ensureSameKeys(en, es, "es");
    }

    @Test
    public void ensureSameKeysPt() throws Exception {
        ensureSameKeys(en, pt, "pt");
    }
    
    @Test
    public void ensureSameKeysIt() throws Exception {
        ensureSameKeys(en, it, "it");
    }

    
    @Test
    public void ensureSameKeysDataElementsES() throws Exception {
        ensureSameKeys(enData, esData, "es");
    }

    @Test
    public void ensureSameKeysDataElementsPt() throws Exception {
        ensureSameKeys(enData, ptData, "pt");
        
    }
    
    @Test
    public void ensureSameKeysDataElementsIt() throws Exception {
        ensureSameKeys(enData, itData, "it");
        
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
            pt.remove(key);
        }
        System.err.println(enUrl.toURI());
        en.store(new FileOutputStream(new File(enUrl.toURI())), "Test auto-removed unused property key-value(s)");
        es.store(new FileOutputStream(new File(esUrl.toURI())), "Test auto-removed unused property key-value(s)");
        pt.store(new FileOutputStream(new File(ptUrl.toURI())), "Test auto-removed unused property key-value(s)");
    }

}
