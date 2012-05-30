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
package gov.hhs.fhh.test.ear;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * @author Scott Miller
 * 
 */
public class TestProperties {
    public static final String SERVER_HOSTNAME_KEY = "server.hostname";
    public static final String SERVER_PORT_KEY = "server.port";
    public static final String SERVER_JNDI_PORT_KEY = "server.jndi.port";

    public static final String SERVER_HOSTNAME_DEFAULT = "localhost";

    public static final String SELENIUM_SERVER_PORT_KEY = "selenium.server.port";

    public static final String SELENIUM_BROWSER_KEY = "selenium.browser";

    public static final String HV_USER_EMAIL = "mshv.user.email";

    public static final String HV_USER_PW = "mshv.user.pw";

    public static final String HV_USER_DISPLAY_NAME_KEY = "mshv.user.name";

    public static Properties properties = new Properties();
    static {
        try {
            InputStream stream = TestProperties.class.getResourceAsStream("/gov/hhs/fhh/test/selenium/test.properties");
            properties.load(stream);
            // properties=new Properties();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static String getServerHostname() {
        return properties.getProperty(SERVER_HOSTNAME_KEY, SERVER_HOSTNAME_DEFAULT);
    }

    public static int getServerPort() {
        return Integer.parseInt(properties.getProperty(SERVER_PORT_KEY));
    }

    public static int getServerJndiPort() {
        return Integer.parseInt(properties.getProperty(SERVER_JNDI_PORT_KEY));
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