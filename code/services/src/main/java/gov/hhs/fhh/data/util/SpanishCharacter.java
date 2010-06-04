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
package gov.hhs.fhh.data.util;

/**
 * @author bpickeral
 */
public enum SpanishCharacter {
    /**
     * The character '�'.
     */
    A_ACUTE("�", "&#225;"),
    /**
     * The character '�'.
     */
    CAP_A_ACUTE("�", "&#193;"),
    /**
     * The character '�'.
     */
    E_ACUTE("�", "&#233;"),
    /**
     * The character '�'.
     */
    CAP_E_ACUTE("�", "&#201;"),
    /**
     * The character '�'.
     */
    I_ACUTE("�", "&#237;"),
    /**
     * The character '�'.
     */
    CAP_I_ACUTE("�", "&#205;"),
    /**
     * The character '�'.
     */
    N_TILDE("�", "&#241;"),
    /**
     * The character '�'.
     */
    CAP_N_TILDE("�", "&#209;"),
    /**
     * The character '�'.
     */
    O_ACUTE("�", "&#243;"),
    /**
     * The character '�'.
     */
    CAP_O_ACUTE("�", "&#211;"),
    /**
     * The character '�'.
     */
    U_ACUTE("�", "&#250;"),
    /**
     * The character '�'.
     */
    CAP_U_ACUTE("�", "&#218;"),
    /**
     * The character '�'.
     */
    U_UMLAUT("�", "&#252;"),
    /**
     * The character '�'.
     */
    CAP_U_UMLAUT("�", "&#220;"),
    /**
     * The character '�'.
     */
    INV_QUESTION("�", "&#191;"),
    /**
     * The character '�'.
     */
    INV_EXCLAMATION("�", "&#161;"),
    /**
     * The character '�'.
     */
    LEFT_ANGLE_QUOTES("�", "&#171;"),
    /**
     * The character '�'.
     */
    RIGHT_ANGLE_QUOTES("�", "&#187;");

    private final String spanish;
    private final String html;
    
    private SpanishCharacter(String spanish, String html) {
        this.spanish = spanish;
        this.html = html;
    }

    /**
     * @return the spanish
     */
    public String getSpanish() {
        return spanish;
    }

    /**
     * @return the html
     */
    public String getHtml() {
        return html;
    }
}
