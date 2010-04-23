/**
 * 
 * Family Health History Portal 
 * END USER AGREEMENT
 * 
 * The U.S. Department of Health & Human Services (�HHS�) hereby irrevocably 
 * grants to the user a non-exclusive, royalty-free right to use, display, 
 * reproduce, and distribute this Family Health History portal software 
 * (the �software�) and prepare, use, display, reproduce and distribute 
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
package gov.hhs.fhh.data.util;

/**
 * * 
 * Class is used by Castor to get and set the AgeRange enumeration class within a 
 * Clinical Observation.  Castor is very limited in using field handlers to get and 
 * set Enumeration classes. 
 * @author bpickeral
 */
public class AgeRangeFieldHandler {
    private String unit;
    private String lowValue;
    private String highValue;

    /**
     * Default constructor.
     */
    public AgeRangeFieldHandler() {
        //Empty constructor.
    }
    
    /**
     * Parameterized constructor.
     * @param unit to set
     * @param lowValue to set
     * @param highValue to set
     */
    public AgeRangeFieldHandler(String unit, String lowValue, String highValue) {
        this.unit = unit;
        this.lowValue = lowValue;
        this.highValue = highValue;
    }
    
    /**
     * @return the unit
     */
    public String getUnit() {
        return unit;
    }
    
    /**
     * @param unit the unit to set
     */
    public void setUnit(String unit) {
        this.unit = unit;
    }
    
    /**
     * @return the lowValue
     */
    public String getLowValue() {
        return lowValue;
    }

    /**
     * @return the highValue
     */
    public String getHighValue() {
        return highValue;
    }

    /**
     * @param lowValue the lowValue to set
     */
    public void setLowValue(String lowValue) {
        this.lowValue = lowValue;
    }

    /**
     * @param highValue the highValue to set
     */
    public void setHighValue(String highValue) {
        this.highValue = highValue;
    }
}
