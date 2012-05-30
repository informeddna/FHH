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
package gov.hhs.fhh.model.mfhp.castor;

import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.util.htmimport.HTMRelationship;
import gov.hhs.fhh.htm.InputNode;

import java.util.HashMap;
import java.util.Map;

/**
 * @author bpickeral
 * Class is used in conjunction with Castor to store input nodes from a legacy (v1.x)
 * FHH file.
 */
public class HTMNode {
    private Map<String, InputNode> inputNodes = new HashMap<String, InputNode>();
    private Relative relative;
    
    // Field is not used by Castor.  The RelativeCode is set when we first separate the InputNode objects
    // into separate HTMNode objects for later identification.
    private final HTMRelationship htmRelationship;
    private final Integer relativeNum;
    private final String htmName;
    
    /**
     * Default constructor used by Castor.
     */
    public HTMNode() {
        htmRelationship = null;
        relativeNum = null;
        htmName = null;
    }
    
    /**
     * Constructor with <code>RelativeCode</code> and relative number parameter.
     * @param htmRelationship HTMRelationship code to set
     * @param relativeNum Integer the number of the relative type as it appeared in the
     * @param htmName the relative InputNode name
     *  legacy input. Fixed relatives (parents and grandparents) should have a null relativeNum
     */
    public HTMNode(HTMRelationship htmRelationship, Integer relativeNum, String htmName) {
        this.htmRelationship = htmRelationship;
        this.relativeNum = relativeNum;
        this.htmName = htmName;
    }

    /**
     * @return the relativeNum
     */
    public Integer getRelativeNum() {
        return relativeNum;
    }

    /**
     * @return the inputNodes
     */
    public Map<String, InputNode> getInputNodes() {
        return inputNodes;
    }

    /**
     * @param inputNodes the inputNodes to set
     */
    public void setInputNodes(Map<String, InputNode> inputNodes) {
        this.inputNodes = inputNodes;
    }

    /**
     * @return the htmName
     */
    public String getHtmName() {
        return htmName;
    }
    
    /**
     * Function specifies if this HTMNode is a variable relative (can be 0 or more of this relative type).
     * @return true if relativeNum is set, otherwise false
     */
    public boolean isVariableRelative() {
        return relativeNum != null ? true : false;
    }

    /**
     * @return the htmRelationship
     */
    public HTMRelationship getHtmRelationship() {
        return htmRelationship;
    }

    /**
     * @return the relative
     */
    public Relative getRelative() {
        return relative;
    }

    /**
     * @param relative the relative to set
     */
    public void setRelative(Relative relative) {
        this.relative = relative;
    }

}