package gov.hhs.fhh.web;


import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * @author Scott Miller
 *
 */
public class TestProperties {
  
    public static final String WEB_BASE_DIR = "web.base.dir";

    public static Properties properties = new Properties();
    static {
        try {
            InputStream stream = ClassLoader.getSystemClassLoader().getResourceAsStream("gov/hhs/fhh/web/test.properties");
            properties.load(stream);
            //properties=new Properties();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static String getWebBaseDir() {
        return properties.getProperty(WEB_BASE_DIR);
    }
}
