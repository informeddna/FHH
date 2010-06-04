package gov.hhs.fhh.web.util;

import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;

/**
 * String based Representation of a relative that an Unrelateded Relative can be related to for the action.
 * 
 * @author vsemenov
 * 
 */
public final class RelativeToRelateTo {

    private String displayString;

    private boolean halfSiblingStatus;

    private final Person relative;
    
    private final String alternativeText;

    /**
     * @param relative - the relative to create a RelativeToRelateTo from.
     * @param alternativeText - the alternative text to use if there is no name.
     */
    public RelativeToRelateTo(Person relative, String alternativeText) {
        this.relative = relative;
        this.alternativeText = alternativeText;
        populateDisplayString();
        populateHalfSiblingStatus();
    }

    private void populateDisplayString() {
        if (relative.getName() != null && relative.getName().length() > 0) {
            displayString = relative.getName();
        } else if (relative instanceof Relative || relative instanceof Person) {
            displayString = alternativeText;
        }
    }

    private void populateHalfSiblingStatus() {
        if (relative instanceof Relative) {
            if (((Relative) relative).getCodeEnum() == RelativeCode.NMTH) {
                halfSiblingStatus = true;
            } else if (((Relative) relative).getCodeEnum() == RelativeCode.NFTH) {
                halfSiblingStatus = true;
            }
        }
    }

    /**
     * @return the relative
     */
    public Person getRelative() {
        return relative;
    }

    /**
     * @return the displayString
     */
    public String getDisplayString() {
        return displayString;
    }

    /**
     * @return the halfSiblingStatus
     */
    public boolean isHalfSiblingStatus() {
        return halfSiblingStatus;
    }
}
