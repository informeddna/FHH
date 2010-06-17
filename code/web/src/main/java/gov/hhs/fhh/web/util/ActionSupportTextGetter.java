package gov.hhs.fhh.web.util;

import java.util.Locale;

import org.apache.commons.lang.StringEscapeUtils;

import gov.hhs.fhh.service.util.TextGetter;

import com.opensymphony.xwork2.ActionSupport;

/**
 * Action support driven textgetter.
 * 
 * @author vsemenov
 * 
 */
public class ActionSupportTextGetter implements TextGetter {

    private final ActionSupport actionSupport;

    /**
     * @param actionSupport the struts2 action instance
     */
    public ActionSupportTextGetter(ActionSupport actionSupport) {
        this.actionSupport = actionSupport;
    }

    /**
     * {@inheritDoc}
     */
    public String getText(String resourceKey) {
        return StringEscapeUtils.unescapeHtml(actionSupport.getText(resourceKey));
    }

    /**
     * {@inheritDoc}
     */
    public Locale getLocale() {
        return actionSupport.getLocale();
    }

}
