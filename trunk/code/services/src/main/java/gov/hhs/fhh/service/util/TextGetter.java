package gov.hhs.fhh.service.util;


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
    
}
