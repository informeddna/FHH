package gov.hhs.fhh.web.util;

import gov.hhs.fhh.service.util.TextGetter;

import com.opensymphony.xwork2.ActionSupport;

/**
 * Action support driven textgetter.
 * 
 * @author vsemenov
 * 
 */
public class ActionSupportTextGetter implements TextGetter {

    private final ActionSupport actionSupport = new ActionSupport();

    /**
     * {@inheritDoc}
     */
    public String getText(String resourceKey) {
        return actionSupport.getText(resourceKey);
    }

}
