package gov.hhs.fhh.test;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * @author smatyas
 * 
 */
public class TestProperties {

    public static final String SERVICES_BASE_DIR = "services.base.dir";
    public static final String SERVER_HOSTNAME_KEY = "server.hostname";
    public static final String SERVER_PORT_KEY = "server.port";

    public static final String SERVER_HOSTNAME_DEFAULT = "localhost";

    public static final String SELENIUM_SERVER_PORT_KEY = "selenium.server.port";

    public static final String SELENIUM_BROWSER_KEY = "selenium.browser";

    public static final String HV_USER_EMAIL = "mshv.user.email";

    public static final String HV_USER_PW = "mshv.user.pw";
    
    public static final String HV_USER_DISPLAY_NAME_KEY = "mshv.user.name";

    public static Properties properties = new Properties();
    static {
        try {
            InputStream stream = ClassLoader.getSystemClassLoader().getResourceAsStream("test.properties");
            properties.load(stream);
            // properties=new Properties();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static String getServicesBaseDir() {
        return properties.getProperty(SERVICES_BASE_DIR);
    }

    public static String getServerHostname() {
        return properties.getProperty(SERVER_HOSTNAME_KEY, SERVER_HOSTNAME_DEFAULT);
    }

    public static int getServerPort() {
        return Integer.parseInt(properties.getProperty(SERVER_PORT_KEY));
    }

    public static int getSeleniumServerPort() {
        return Integer.parseInt(properties.getProperty(SELENIUM_SERVER_PORT_KEY));
    }

    public static String getSeleniumBrowser() {
        return properties.getProperty(SELENIUM_BROWSER_KEY);
    }

    public static String getHVUserEmail() {
        return properties.getProperty(HV_USER_EMAIL);
    }

    public static String getHVUserPW() {
        return properties.getProperty(HV_USER_PW);
    }
    
    public static String getHvUserDisplayName() {
        return properties.getProperty(HV_USER_DISPLAY_NAME_KEY);
    }
}
