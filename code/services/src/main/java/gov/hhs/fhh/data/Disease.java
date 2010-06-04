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
package gov.hhs.fhh.data;

import gov.hhs.fhh.data.util.DiseaseUtils;

import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.MapKey;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.ForeignKey;

import com.fiveamsolutions.nci.commons.data.persistent.PersistentObject;

/**
 * @author lpower
 * 
 */
@Entity(name = "disease")
@org.hibernate.annotations.Entity(mutable = false)
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
// Unit tests write, so cannot use read-only
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "subType", discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue("Disease")
public class Disease extends AbstractCodeable implements PersistentObject, Comparable<Disease> {
    private static final long serialVersionUID = 1L;
    private Disease parent;
    private String abbreviation;
    private Long id;
    private static final Logger LOG = Logger.getLogger(Disease.class);

    /**
     * The type of disease for sorting purposes.
     * 
     * @author vsemenov
     * 
     */
    enum DiseaseType {
        SYSTEM_NORMAL(0), SYSTEM_UNKNOWN(2), USER_ENTERED(1), OTHER_ADD_NEW(3);
        private int compareValue;

        private DiseaseType(int compareValue) {
            this.compareValue = compareValue;
        }

        /**
         * @return the compareValue
         */
        public int getCompareValue() {
            return compareValue;
        }
    }

    /**
     * Default constructor.
     */
    public Disease() {
        // default constructor
        super();
    }

    /**
     * Copy constructor.
     * 
     * @param c the Disease object to copy from.
     */
    public Disease(Disease c) {
        super(c);
        this.id = c.id;
        this.parent = c.parent;
        this.abbreviation = c.getAbbreviation();
    }

    /**
     * @return the displayStrings
     */
    @MapKey(name = "language")
    @OneToMany(cascade = { CascadeType.ALL }, fetch = FetchType.EAGER)
    @ForeignKey(name = "disease_codeable_fk", inverseName = "disease_displaystring_fk")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    // Unit tests write, so cannot use read-only
    @SuppressWarnings({ "PMD.UselessOverridingMethod", "PMD.CyclomaticComplexity" })
    public Map<String, DisplayString> getDisplayStrings() {
        return super.getDisplayStrings();
    }

    /**
     * CompareTo function used for sorting a Disease drop down list. System Diseases are displayed in alphabetical order
     * first followed by user entered diseases. The option to add a new disease appears last in the list.
     * 
     * @param d2 object to compare to
     * @return int representing the objects ordering in the list
     */
    @SuppressWarnings("PMD.ExcessiveMethodLength")
    public int compareTo(Disease d2) {
        if (!(d2 instanceof Disease)) {
            throw new ClassCastException("A Disease object expected.");
        }

        int retval = 0;

        if (getDiseaseType().getCompareValue() < d2.getDiseaseType().getCompareValue()) {
            retval = -1;
        } else if (getDiseaseType().getCompareValue() > d2.getDiseaseType().getCompareValue()) {
            retval = 1;
        } else {
            // SYSTEM_UNKNOWN and ADD_NEW should only be in the disease list once, so we don't need to compare them.
            if (getDiseaseType() == DiseaseType.SYSTEM_NORMAL) {
                retval = getAppDisplay().compareTo(d2.getAppDisplay());
            } else if (getDiseaseType() == DiseaseType.USER_ENTERED) {
                retval = getOriginalText().compareTo(d2.getOriginalText());
            }
        }

        LOG.debug(getAppDisplay() + isOther() + "|" + retval + "|" + d2.getAppDisplay() + d2.isOther());

        return retval;

    }

    /**
     * @return the parent
     */
    @ManyToOne(cascade = { CascadeType.ALL })
    @ForeignKey(name = "disease_parent_fk")
    public Disease getParent() {
        return parent;
    }

    /**
     * @param parent the parent to set
     */
    public void setParent(Disease parent) {
        this.parent = parent;
    }

    /**
     * @return the abbreviation
     */
    public String getAbbreviation() {
        return abbreviation;
    }

    /**
     * @param abbreviation the abbreviation to set
     */
    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    /**
     * @return the abbreviation
     */
    @Transient
    public String getGeneratedAbbreviation() {
        return DiseaseUtils.getDiseaseAbbreviation(this);
    }

    /**
     * @return the abbreviation
     */
    @Transient
    public String getEscapedGeneratedAbbreviation() {
        return DiseaseUtils.replaceSpanishCharactersWithHTML(DiseaseUtils.getDiseaseAbbreviation(this));
    }

    /**
     * @return the string to display on reports
     */
    @Transient
    public String getReportDisplay() {
        return DiseaseUtils.getReportDisplay(this);
    }

    /**
     * @return the string to display on reports
     */
    @Transient
    public String getEscapedReportDisplay() {
        return DiseaseUtils.replaceSpanishCharactersWithHTML(DiseaseUtils.getReportDisplay(this));
    }

    /**
     * @return the string to display on reports
     */
    @Transient
    public String getEscapedOriginalText() {
        return DiseaseUtils.replaceSpanishCharactersWithHTML(getOriginalText());
    }

    /**
     * @return true if the Disease is a User entered Disease (no SNOMED code)
     */
    @Transient
    public boolean isOther() {
        return getCode() == null
                && (StringUtils.isEmpty(getDisplayName())
                        || getDisplayName().equals(DiseaseUtils.OTHER_DISEASE_DISPLAY) || getDisplayName()
                        .toUpperCase().contains("OTHER"));
    }

    @Transient
    private boolean isUnknown() {
        boolean retval = false;

        if (getOriginalText() != null && getOriginalText().equals("Unknown")) {
            retval = true;
        }

        return retval;
    }

    /**
     * @return - the derived disease type.
     */
    @Transient
    public DiseaseType getDiseaseType() {
        DiseaseType retval = null;

        if (isOther()) {
            if (getOriginalText() == null) {
                retval = DiseaseType.OTHER_ADD_NEW;
            } else {
                retval = DiseaseType.USER_ENTERED;
            }
        } else if (isUnknown()) {
            retval = DiseaseType.SYSTEM_UNKNOWN;
        } else {
            retval = DiseaseType.SYSTEM_NORMAL;
        }

        return retval;
    }

    /**
     * @return the id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @ForeignKey(name = "codeable_fk")
    public Long getId() {
        return this.id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return true if the id is not null
     */
    protected boolean hasId() {
        return id != null;
    }

}