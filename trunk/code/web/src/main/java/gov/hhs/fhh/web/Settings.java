package gov.hhs.fhh.web;

import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;

/**
 * Use to define application configuration information, this is not resource bundle for i18n information.
 *
 * @author smatyas
 *
 */
public final class Settings {
    private static final Logger LOG = Logger.getLogger(Settings.class);
    private static final String RESOURCE_NAME = "settings.properties";
    /**
     * save.
     */
    public static final String SAVE_PEDIGREE = "save.pedigree.return.url.context";
    /**
     * load.
     */
    public static final String LOAD_PEDIGREE = "load.pedigree.return.url.context";

    /**
     * Risk Calculator enabled.
     */
    public static final String DRC_RISK_CALCULATOR_ENABLED = "drc.riskCalculator.enabled";

    /**
     * Settings Instance.
     */
    public static final Settings INSTANCE = new Settings();

    private Properties props;
    /**
     * application base url.
     */
    public static final String APPLICATION_BASE_URL = "application.base.url";

    private Settings() {
        try {
            props = getProperties();
        } catch (Exception e) {
            LOG.error("Unable to initialize the JNDI Util.", e);
            throw new IllegalStateException(e);
        }
    }

    /**
     * @return jndi (& jms) properties
     * @throws IOException on class load error
     */
    public static Properties getProperties() throws IOException {
        Properties props = new Properties();
        props.load(Settings.class.getClassLoader().getResourceAsStream(RESOURCE_NAME));
        return props;
    }

    /**
     * Returns true if Risk calculator is enabled.
     * @return true if enabled, otherwise false
     */
    public static boolean isRiskCalculatorEnabled() {
        return Boolean.valueOf(Settings.INSTANCE
                .getSetting(Settings.DRC_RISK_CALCULATOR_ENABLED));
    }

    /**
     * @param name setting name
     * @return the setting value
     */
    public String getSetting(String name) {
        return props.getProperty(name);
    }

    /**
     * @param name setting name
     * @param defaultValue if not found, value returned
     * @return the setting value found otherwise defaultValue
     */
    public String getSetting(String name, String defaultValue) {
        return props.getProperty(name, defaultValue);
    }
}
