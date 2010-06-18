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
package gov.hhs.mfhp.model;

import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.DisplayString;
import gov.hhs.fhh.data.util.DiseaseUtils;
import gov.hhs.fhh.service.util.CurrentLanguageHolder;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import com.fiveamsolutions.nci.commons.data.persistent.PersistentObject;

/**
 * @author bhumphrey
 * 
 */
@Entity(name = "observation")
@org.hibernate.annotations.Entity(mutable = false)
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@NamedQueries(value = {
        @NamedQuery(name = "mfhp.observation.all", query = "from observation"),
        @NamedQuery(name = "mfhp.observation.noparents", query = "from observation where parent is null"),
        @NamedQuery(name = "mfhp.observation.children", query = "from observation where parent.id = :parentId"),
        @NamedQuery(name = "mfhp.observation.findByCode", query = "select o from "
                + "observation as o left outer join o.codes as code where code.codeName = :codeName"),
        @NamedQuery(name = "mfhp.observation.findByDisplayName", query = "select o from "
                + "observation as o left outer join o.displayNames as displayname "
                + "where lower(displayname.text) like lower(:displayname)"),
        @NamedQuery(name = "mfhp.observation.findOtherDisease", 
                query = "select o from observation as o where o.name = 'Other Disease type'") })
public class Observation implements PersistentObject, Disease {

    /**
     * serial number.
     */
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;

    private Observation parent;

    private Set<Code> codes = new HashSet<Code>();

    private Set<DisplayName> displayNames = new HashSet<DisplayName>();

    /**
     * default constructor.
     */
    public Observation() {
        // empty
    }

    /**
     * @return the id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the name
     */
    @Basic
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the parent
     */
    @ManyToOne
    @JoinColumn(name = "parent_id")
    public Observation getParent() {
        return parent;
    }

    /**
     * @param parent the parent to set
     */
    public void setParent(Observation parent) {
        this.parent = parent;
    }

    /**
     * @param codes the codes to set
     */
    public void setCodes(Set<Code> codes) {
        this.codes = codes;
    }

    /**
     * @return the codes
     */
    @OneToMany(fetch = FetchType.EAGER)
    public Set<Code> getCodes() {
        return codes;
    }

    /**
     * @return the displaynames
     */
    @OneToMany(fetch = FetchType.EAGER)
    public Set<DisplayName> getDisplayNames() {
        return displayNames;
    }

    /**
     * @param displayNames the displaynames to set
     */
    public void setDisplayNames(Set<DisplayName> displayNames) {
        this.displayNames = displayNames;
    }

    /**
     * {@inheritDoc}
     * 
     * @see java.lang.Object#hashCode()
     */
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    /**
     * {@inheritDoc}
     * 
     * @see java.lang.Object#equals(java.lang.Object)
     */
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (!(obj instanceof Observation)) {
            return equalsHelper((Observation) obj);
        }
        return false;
     }

    private boolean equalsHelper(Observation other) {
        if (id == null) {
            if (other.id != null) {
                return false;
            }
        } else if (!id.equals(other.id)) {
            return false;
        }
        return true;
    }

    /**
     * 
     * @return activeCode the first code with active flag set.
     */
    @Transient
    public Code getActiveCode() {
        for (Code code : getCodes()) {
            if (code.getStatus() == CodeStatus.ACTIVE) {
                return code;
            }
        }
        return null;
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#compareTo(gov.hhs.fhh.data.Disease)
     */
    public int compareTo(Disease d) {
        int retval = 0;
        if (d != null) {
            if (getAppDisplay() != null) {
                retval = getAppDisplay().compareTo(d.getAppDisplay());
            } else if (getOriginalText() != null) {
                retval = getOriginalText().compareTo(d.getOriginalText());
            }
        }

        return retval;
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getAbbreviation()
     */
    @Transient
    public String getAbbreviation() {
        return getGeneratedAbbreviation();
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getDisplayStrings()
     */
    @Transient
    public Map<String, DisplayString> getDisplayStrings() {
        Map<String, DisplayString> map = new HashMap<String, DisplayString>();

        for (DisplayName i : getDisplayNames()) {
            map.put(i.getLanguage(), new DisplayString(i.getLanguage(), getName(), i.getText()));
        }
        return map;
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getEscapedGeneratedAbbreviation()
     */
    @Transient
    public String getEscapedGeneratedAbbreviation() {
        return DiseaseUtils.replaceSpanishCharactersWithHTML(getGeneratedAbbreviation());
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getEscapedOriginalText()
     */
    @Transient
    public String getEscapedOriginalText() {
        return DiseaseUtils.replaceSpanishCharactersWithHTML(getOriginalText());
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getEscapedReportDisplay()
     */
    @Transient
    public String getEscapedReportDisplay() {
        return DiseaseUtils.replaceSpanishCharactersWithHTML(getReportDisplay());
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getGeneratedAbbreviation()
     */
    @Transient
    public String getGeneratedAbbreviation() {
        return DiseaseUtils.getDiseaseAbbreviation(this);
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#getReportDisplay()
     */
    @Transient
    public String getReportDisplay() {
        return DiseaseUtils.getReportDisplay(this);
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Disease#isOther()
     */
    @Transient
    public boolean isOther() {
        return false;
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#addDisplayString(java.lang.String, java.lang.String, java.lang.String)
     */
    @Transient
    public void addDisplayString(String language, String displayName, String appDisplay) {
        throw new NoSuchMethodError();
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getAppDisplay()
     */
    @Transient
    public String getAppDisplay() {
        String language = CurrentLanguageHolder.getCurrentLanguage();
        DisplayString ds = getDisplayStrings().get(language.toLowerCase(Locale.getDefault()));
        if (ds == null) {
            ds = getDisplayStrings().get(CurrentLanguageHolder.DEFAULT_LANGUAGE);
        }

        return ds != null ? ds.getAppDisplay() : null;
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getCode()
     */
    @Transient
    public String getCode() {

        final Code activeCode = getActiveCode();
        return (activeCode == null ? null : activeCode.getCodeName());
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getCodeSystem()
     */
    @Transient
    public String getCodeSystem() {
        return getActiveCode().getCodeSystem().getName();
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getCodeSystemName()
     */
    @Transient
    public String getCodeSystemName() {
        return getActiveCode().getCodeSystem().getCommonName();
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getCodeSystemVersion()
     */
    @Transient
    public String getCodeSystemVersion() {
        return getActiveCode().getCodeSystem().getVersion();
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getDisplayName()
     */
    @Transient
    public String getDisplayName() {
        return getAppDisplay();
    }

    /**
     * 
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.data.Codeable#getOriginalText()
     */
    @Transient
    public String getOriginalText() {
        return getName();
    }

}
