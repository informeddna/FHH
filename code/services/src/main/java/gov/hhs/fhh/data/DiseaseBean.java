/**
 * The software subject to this notice and license includes both human readable
 * source code form and machine readable, binary, object code form. The mfhp-2.4.0
 * Software was developed in conjunction with the National Cancer Institute 
 * (NCI) by NCI employees and 5AM Solutions, Inc. (5AM). To the extent 
 * government employees are authors, any rights in such works shall be subject 
 * to Title 17 of the United States Code, section 105. 
 *
 * This mfhp-2.4.0 Software License (the License) is between NCI and You. You (or 
 * Your) shall mean a person or an entity, and all other entities that control, 
 * are controlled by, or are under common control with the entity. Control for 
 * purposes of this definition means (i) the direct or indirect power to cause 
 * the direction or management of such entity, whether by contract or otherwise,
 * or (ii) ownership of fifty percent (50%) or more of the outstanding shares, 
 * or (iii) beneficial ownership of such entity. 
 *
 * This License is granted provided that You agree to the conditions described 
 * below. NCI grants You a non-exclusive, worldwide, perpetual, fully-paid-up, 
 * no-charge, irrevocable, transferable and royalty-free right and license in 
 * its rights in the mfhp-2.4.0 Software to (i) use, install, access, operate, 
 * execute, copy, modify, translate, market, publicly display, publicly perform,
 * and prepare derivative works of the mfhp-2.4.0 Software; (ii) distribute and 
 * have distributed to and by third parties the mfhp-2.4.0 Software and any 
 * modifications and derivative works thereof; and (iii) sublicense the 
 * foregoing rights set out in (i) and (ii) to third parties, including the 
 * right to license such rights to further third parties. For sake of clarity, 
 * and not by way of limitation, NCI shall have no right of accounting or right 
 * of payment from You or Your sub-licensees for the rights granted under this 
 * License. This License is granted at no charge to You.
 *
 * Your redistributions of the source code for the Software must retain the 
 * above copyright notice, this list of conditions and the disclaimer and 
 * limitation of liability of Article 6, below. Your redistributions in object 
 * code form must reproduce the above copyright notice, this list of conditions 
 * and the disclaimer of Article 6 in the documentation and/or other materials 
 * provided with the distribution, if any. 
 *
 * Your end-user documentation included with the redistribution, if any, must 
 * include the following acknowledgment: This product includes software 
 * developed by 5AM and the National Cancer Institute. If You do not include 
 * such end-user documentation, You shall include this acknowledgment in the 
 * Software itself, wherever such third-party acknowledgments normally appear.
 *
 * You may not use the names "The National Cancer Institute", "NCI", or "5AM" 
 * to endorse or promote products derived from this Software. This License does 
 * not authorize You to use any trademarks, service marks, trade names, logos or
 * product names of either NCI or 5AM, except as required to comply with the 
 * terms of this License. 
 *
 * For sake of clarity, and not by way of limitation, You may incorporate this 
 * Software into Your proprietary programs and into any third party proprietary 
 * programs. However, if You incorporate the Software into third party 
 * proprietary programs, You agree that You are solely responsible for obtaining
 * any permission from such third parties required to incorporate the Software 
 * into such third party proprietary programs and for informing Your 
 * sub-licensees, including without limitation Your end-users, of their 
 * obligation to secure any required permissions from such third parties before 
 * incorporating the Software into such third party proprietary software 
 * programs. In the event that You fail to obtain such permissions, You agree 
 * to indemnify NCI for any claims against NCI by such third parties, except to 
 * the extent prohibited by law, resulting from Your failure to obtain such 
 * permissions. 
 *
 * For sake of clarity, and not by way of limitation, You may add Your own 
 * copyright statement to Your modifications and to the derivative works, and 
 * You may provide additional or different license terms and conditions in Your 
 * sublicenses of modifications of the Software, or any derivative works of the 
 * Software as a whole, provided Your use, reproduction, and distribution of the
 * Work otherwise complies with the conditions stated in this License.
 *
 * THIS SOFTWARE IS PROVIDED "AS IS," AND ANY EXPRESSED OR IMPLIED WARRANTIES, 
 * (INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, 
 * NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE) ARE DISCLAIMED. IN NO 
 * EVENT SHALL THE NATIONAL CANCER INSTITUTE, 5AM SOLUTIONS, INC. OR THEIR 
 * AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, 
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, 
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; 
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, 
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR 
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF 
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
package gov.hhs.fhh.data;

import gov.hhs.fhh.data.util.DiseaseUtils;
import gov.hhs.fhh.data.util.FormatUtils;

import java.io.Serializable;
import java.util.Map;

/**
 * @author bhumphrey
 *
 */
public class DiseaseBean implements Disease, Serializable {

    /**
     * 
     */
    private static final long serialVersionUID = 1L;
    private String originalText;
    private String displayName;
    private String codeSystemVersion;
    private String codeSystemName;
    private String codeSystem;
    private String code;
    private String appDisplay;
    private Long id;
    private Disease parent;
    
    
    
    
    /**
     * default constructor.
     */
    public DiseaseBean() {
        //no op.
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#compareTo(gov.hhs.fhh.data.Disease)
     */
    public int compareTo(Disease d) {
        int retval = 0;
        if (d != null) {
            if (d.isOther()) {
                if (getAppDisplay() != null) {
                    retval = getAppDisplay().compareTo(d.getAppDisplay());
                } else if (getOriginalText() != null) {
                    retval = getOriginalText().compareTo(d.getOriginalText());
                }
            } else {
                retval = -1;
            }
        }

        return retval;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getAbbreviation()
     */
    public String getAbbreviation() {
        return getGeneratedAbbreviation();
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getDisplayStrings()
     */
    public Map<String, DisplayString> getDisplayStrings() {
        // TODO Auto-generated method stub
        return null;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getEscapedGeneratedAbbreviation()
     */
    public String getEscapedGeneratedAbbreviation() {
        return DiseaseUtils.replaceSpanishCharactersWithHTML(getAbbreviation());
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getEscapedOriginalText()
     */
    public String getEscapedOriginalText() {
        // TODO Auto-generated method stub
        return DiseaseUtils.replaceSpanishCharactersWithHTML(getOriginalText());
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getEscapedReportDisplay()
     */
    public String getEscapedReportDisplay() {
        return DiseaseUtils.replaceSpanishCharactersWithHTML(getReportDisplay());
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getGeneratedAbbreviation()
     */
    public String getGeneratedAbbreviation() {
        return DiseaseUtils.getDiseaseAbbreviation(this);
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getParent()
     */
    public Disease getParent() {
        return parent;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getReportDisplay()
     */
    public String getReportDisplay() {
        return DiseaseUtils.getReportDisplay(this);
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#isOther()
     */
    public boolean isOther() {
        return code == null;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#addDisplayString(java.lang.String, java.lang.String, java.lang.String)
     */
    public void addDisplayString(String a, String b, String c) {
        throw new NoSuchMethodError();

    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getAppDisplay()
     */
    public String getAppDisplay() {
        return appDisplay;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getCode()
     */
    public String getCode() {
        return code;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getCodeSystem()
     */
    public String getCodeSystem() {
        return codeSystem;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getCodeSystemName()
     */
    public String getCodeSystemName() {
        return codeSystemName;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getCodeSystemVersion()
     */
    public String getCodeSystemVersion() {
        return codeSystemVersion;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getDisplayName()
     */
    public String getDisplayName() {
        return displayName;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getOriginalText()
     */
    public String getOriginalText() {
        return originalText;
    }
    
    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#setAppDisplay(java.lang.String)
     */
    public void setAppDisplay(String appDisplay) {
        this.appDisplay = FormatUtils.performXSSFilter(appDisplay);

    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#setCode(java.lang.String)
     */
    public void setCode(String code) {
        this.code = code;

    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#setCodeSystem(java.lang.String)
     */
    public void setCodeSystem(String codeSystem) {
        this.codeSystem = codeSystem;

    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#setCodeSystemName(java.lang.String)
     */
    public void setCodeSystemName(String codeSystemName) {
        this.codeSystemName = codeSystemName;

    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#setCodeSystemVersion(java.lang.String)
     */
    public void setCodeSystemVersion(String codeSystemVersion) {
        this.codeSystemVersion = codeSystemVersion;

    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#setDisplayName(java.lang.String)
     */
    public void setDisplayName(String displayName) {
        this.displayName = displayName;

    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#setOriginalText(java.lang.String)
     */
    public void setOriginalText(String originalText) {
        this.originalText = FormatUtils.performXSSFilter(originalText);

    }

    /**
     * {@inheritDoc}
     * 
     * @see com.fiveamsolutions.nci.commons.data.persistent.PersistentObject#getId()
     */
    public Long getId() {
        return id;
    }
    
    /**
     * 
     * @param id internal database id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * 
     * @param parent the parent for this disease
     */
    public void setParent(Disease parent) {
        this.parent = parent;
        
    }

    /** 
     * {@inheritDoc}
     */
    @Override
    public boolean equals(Object obj) {
        return obj instanceof Disease && (obj == this || compareTo((Disease) obj) == 0);
    }

    /**
     *{@inheritDoc}
     */
    @Override
    public int hashCode() {
        return 1;
    }

}
