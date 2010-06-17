package gov.hhs.fhh.service.util;

import java.util.Locale;


/**
 * Interface that helps get rid actionsupport inside of services.
 * 
 * @author vsemenov
 *
 */
public interface TextGetter {

    /**
     * @param resourceKey - the resource key for which to get the string.
     * @return - the i8ned string for the specified resourcekey.
     */
    String getText(String resourceKey);
    
    /**
     * @return the Locale used
     */
    Locale getLocale();
    
}
