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
package gov.hhs.fhh.web.action;

import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeBranch;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.RelativeReport;
import gov.hhs.fhh.data.util.DiseaseUtils;
import gov.hhs.fhh.model.mfhp.LivingStatus;
import gov.hhs.fhh.service.FhhWebException;
import gov.hhs.fhh.service.util.PdfDataContainer;
import gov.hhs.fhh.service.util.RelativeDraw;
import gov.hhs.fhh.service.util.RelativePdfWriter;
import gov.hhs.fhh.web.util.ActionSupportTextGetter;
import gov.hhs.fhh.web.util.FhhHttpSessionUtil;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.collections.set.ListOrderedSet;
import org.apache.log4j.Logger;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.validation.SkipValidation;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.Preparable;

/**
 * @author lpower
 *
 */
@SuppressWarnings({ "PMD.TooManyMethods", "PMD.AvoidDuplicateLiterals", "PMD.CyclomaticComplexity" })
public class ViewReportAction extends ActionSupport implements Preparable, ServletRequestAware {
    private static final Logger LOG = Logger.getLogger(ViewReportAction.class);
    private static final long serialVersionUID = 1924447846653L;
    private static final String SUBMIT_ACTION = "submit";

    private Person person;
    private RelativeBranch relativeBranch;
    private Set<RelativeReport> relativeReports = new ListOrderedSet();
    // CHECKSTYLE:OFF hides a field
    final private Set<Disease> allDiseases = new HashSet<Disease>();
    private Map<Disease, String> diseaseToAbreviation = new HashMap<Disease, String>();
    final private Map<String, Disease> abreviationToDisease = new HashMap<String, Disease>();
    // CHECKSTYLE:ON
    private boolean showNames = true;
    private boolean showPersonalInfo = true;
    private boolean showChart = true;
    private boolean showDiagram = true;
    private Disease highlightDisease;
    private HttpServletRequest request;
    private String selectedHighlightDisease;
    private String ignore;

    /**
     * prepare the action. {@inheritDoc}
     */
    public void prepare() {
        Person rootPerson = FhhHttpSessionUtil.getRootPerson();
        if (rootPerson != null && rootPerson.isCompletedForm()) {
            setPerson(rootPerson);
            this.relativeBranch = new RelativeBranch(person);
            Set<Relative> meMomDadDescendants = new ListOrderedSet();
            Relative proband = new Relative(person, RelativeCode.SELF);
            proband.setLivingStatus(LivingStatus.YES.name());
            meMomDadDescendants.add(proband);
            if (!person.getRelatives().isEmpty()) {
                meMomDadDescendants.addAll(person.getDescendants());
                meMomDadDescendants.add(person.getFather());
                meMomDadDescendants.add(person.getMother());
            }
            addToRelativeReports(meMomDadDescendants);
            addToRelativeReports(this.relativeBranch.getSiblings());
            addToRelativeReports(this.relativeBranch.getFatherBranch());
            addToRelativeReports(this.relativeBranch.getMotherBranch());
            for (RelativeReport rr : getRelativeReports()) {
                for (Disease d : rr.getLegendList()) {
                    allDiseases.add(d);
                }
            }
            diseaseToAbreviation = DiseaseUtils.getUniqueAbbreviationMap(allDiseases);
            for (Disease d : diseaseToAbreviation.keySet()) {
                abreviationToDisease.put(diseaseToAbreviation.get(d), d);
            }
        } else {
            showChart = false;
            showDiagram = false;
        }
        getRequestAttributes();
    }

    /**
     * sets the HttpServletRequest. {@inheritDoc}
     */
    public void setServletRequest(HttpServletRequest aRequest) {
        this.request = aRequest;
    }

    /**
     * Sets report options into request.
     */
    public void getRequestAttributes() {
        if (request.getSession().getAttributeNames() != null) {
            if (request.getSession().getAttribute("showChart") != null) {
                setShowChart(((Boolean) request.getSession().getAttribute("showChart")).booleanValue());
            }
            if (request.getSession().getAttribute("showDiagram") != null) {
                setShowDiagram(((Boolean) request.getSession().getAttribute("showDiagram")).booleanValue());
            }
            if (request.getSession().getAttribute("showNames") != null) {
                setShowNames(((Boolean) request.getSession().getAttribute("showNames")).booleanValue());
            }
            if (request.getSession().getAttribute("showPersonalInfo") != null) {
                setShowPersonalInfo(((Boolean) request.getSession().getAttribute("showPersonalInfo")).booleanValue());
            }
            if (request.getSession().getAttribute("selectedHighlightDisease") != null) {
                setHighlightDisease((String) request.getSession().getAttribute("selectedHighlightDisease"));
                setSelectedHighlightDisease((String) request.getSession().getAttribute("selectedHighlightDisease"));
            }
        }
    }

    /**
     * Sets report options into request.
     */
    public void setRequestAttributes() {
        request.getSession().setAttribute("showChart", isShowChart());
        request.getSession().setAttribute("showDiagram", isShowDiagram());
        request.getSession().setAttribute("showNames", isShowNames());
        request.getSession().setAttribute("showPersonalInfo", isShowPersonalInfo());
        request.getSession().setAttribute("selectedHighlightDisease", getSelectedHighlightDisease());
    }

    /**
     * @param relatives
     */
    private void addToRelativeReports(Set<Relative> relatives) {
        for (Relative myrel : relatives) {
            RelativeReport rr = new RelativeReport(myrel);
            this.getRelativeReports().add(rr);
        }
    }

    /**
     * Method invokes the change report page using Submodal.
     *
     * @return path String
     */
    public String changeReport() {
        return "changeReport";
    }

    /**
     * Submit report options modification.
     *
     * @return path String
     */
    public String submitReportOptions() {
        // pass down the values to the chart maker and the jsp
        setRequestAttributes();
        return SUBMIT_ACTION;
    }

    /**
     * Loads view report outer page.
     *
     * @return path String
     */
    public String viewReport() {
        return SUCCESS;
    }

    /**
     * Loads report detail page.
     *
     * @return path String
     */
    public String viewReportDetail() {
        return SUCCESS;
    }

    /**
     * Retrieves the report pdf.
     *
     * @return return for report in pdf format
     */
    @SkipValidation
    public String downloadPdf() {
        return "streamPdf";
    }

    /**
     * Calls to get the InputStram for the pdf of the view report information.
     *
     * @return InputStream with diagram
     * @throws Exception on error.
     */
    @SkipValidation
    @SuppressWarnings("PMD.SignatureDeclareThrowsException")
    public InputStream getPdf() throws Exception {
        // return makeDiagram();
        try {
            RelativeDraw selfDraw = new RelativeDraw(new Relative(this.person), new ActionSupportTextGetter(this));
            selfDraw.setCodeEnum(RelativeCode.SELF);
            selfDraw.setShowNames(this.isShowNames());
            if (getHighlightDisease() != null) {
                selfDraw.setHighlightDisease(getHighlightDisease());
            }
            RelativePdfWriter pdf = new RelativePdfWriter(new ActionSupportTextGetter(this));
            PdfDataContainer p = new PdfDataContainer();
            p.getAgeRanges().putAll(createIntlAgeRanges());
            p.getLegendLabels().putAll(createIntlLegendLabels());
            p.setRelativeDraw(selfDraw);
            p.getRelativeReports().addAll(getRelativeReports());
            p.getLegendList().addAll(allDiseases);
            return new ByteArrayInputStream(pdf.makeRelativePdf(p, isShowPersonalInfo()));
        } catch (Exception e) {
            LOG.error("exception generating pdf");
            LOG.error(e.getMessage());
            LOG.error(e.getCause().toString());
            LOG.error(e.getStackTrace().toString());
        }
        return new ByteArrayInputStream("hello".getBytes());
    }

    /**
     * Creates internationalized values for legend labels for use in the pdf. These keys are used in
     * relativePdfWriter.makeFamilyHistoryChart - this is too tightly coupled code
     *
     * @return Map of internationalized values
     */
    private Map<String, String> createIntlLegendLabels() {
        ActionSupportTextGetter txtGetter = new ActionSupportTextGetter(this);
        Map<String, String> legendValues = new HashMap<String, String>();
        legendValues.put("living", txtGetter.getText("report.table.living"));
        legendValues.put("heartDisease", txtGetter.getText("report.table.heartDisease"));
        legendValues.put("stroke", txtGetter.getText("report.table.stroke"));
        legendValues.put("diabetes", txtGetter.getText("report.table.diabetes"));
        legendValues.put("colonCancer", txtGetter.getText("report.table.colonCancer"));
        legendValues.put("breastCancer", txtGetter.getText("report.table.breastCancer"));
        legendValues.put("ovarianCancer", txtGetter.getText("report.table.ovarianCancer"));
        legendValues.put("additionalDiseases", txtGetter.getText("report.table.additionalDiseases"));
        return legendValues;
    }

    /**
     * Creates internationalized values for age ranges for use in the pdf.
     *
     * @return Map of Age Ranges and internaltionalized values
     */
    private Map<AgeRangeEnum, String> createIntlAgeRanges() {
        ActionSupportTextGetter txtGetter = new ActionSupportTextGetter(this);
        Map<AgeRangeEnum, String> ageRangeEnums = new HashMap<AgeRangeEnum, String>();
        for (AgeRangeEnum a : AgeRangeEnum.values()) {
            ageRangeEnums.put(a, txtGetter.getText(a.getResourceKey()));
        }
        return ageRangeEnums;
    }

    /**
     * Retrieves the pedigree diagram.
     *
     * @return return for pedigree diagram
     */
    @SkipValidation
    public String retrieveImage() {
        return "pedigreeDiagram";
    }

    /**
     * Calls to get the InputStram for the pedigree diagram.
     *
     * @return InputStream with diagram
     * @throws Exception on error.
     */
    @SkipValidation
    @SuppressWarnings("PMD.SignatureDeclareThrowsException")
    public InputStream getPedigreeImage() throws Exception {
        return makeDiagram();
    }

    /**
     * Sets the default pedigree diagram.
     *
     * @return InputStream
     * @throws FhhWebException on error.
     */
    @SuppressWarnings("PMD.SignatureDeclareThrowsException")
    public InputStream makeDiagram() throws FhhWebException {
        return getDiagramForPerson(this.person, isShowNames(), getHighlightDisease());
    }

    /**
     * @param person - the person for the diagram.
     * @param showNoNames - show names or not.
     * @param highlightDisease - the disease to highlight.
     * @return - the diagram image.
     * @throws FhhWebException - in case of an error.
     */
    public static InputStream getDiagramForPerson(Person person, boolean showNoNames, Disease highlightDisease)
            throws FhhWebException {
        InputStream retval = null;

        try {
            RelativeDraw selfDraw = new RelativeDraw(new Relative(person), new ActionSupportTextGetter(
                    new ActionSupport()));
            selfDraw.setCodeEnum(RelativeCode.SELF);
            selfDraw.setShowNames(showNoNames);
            if (highlightDisease != null) {
                selfDraw.setHighlightDisease(highlightDisease);
            }

            Set<Disease> diseaseSet = new HashSet<Disease>();
            for (ClinicalObservation ci : person.getObservations()) {
                diseaseSet.add(ci.getDisease());
            }
            for (Relative rel : person.getRelatives()) {
                for (ClinicalObservation ci : rel.getObservations()) {
                    diseaseSet.add(ci.getDisease());
                }
                if (rel.getCauseOfDeath() != null) {
                    diseaseSet.add(rel.getCauseOfDeath());
                }
            }

            retval = new ByteArrayInputStream(selfDraw.organizeFamilyTree(person, DiseaseUtils
                    .getUniqueAbbreviationMap(diseaseSet)));
        } catch (Exception e) {
            throw new FhhWebException(e);
        }

        return retval;
    }

    /**
     * @return the person
     */
    public Person getPerson() {
        return person;
    }

    /**
     * @param person the person to set
     */
    public void setPerson(Person person) {
        this.person = person;
    }

    /**
     * @return the relativeBranch
     */
    public RelativeBranch getRelativeBranch() {
        return relativeBranch;
    }

    /**
     * @param relativeBranch the relativeBranch to set
     */
    public void setRelativeBranch(RelativeBranch relativeBranch) {
        this.relativeBranch = relativeBranch;
    }

    /**
     * @return the relativeReports
     */
    public Set<RelativeReport> getRelativeReports() {
        return relativeReports;
    }

    /**
     * @param relativeReports the relativeReports to set
     */
    public void setRelativeReports(Set<RelativeReport> relativeReports) {
        this.relativeReports = relativeReports;
    }

    /**
     * @return the showNames
     */
    public boolean isShowNames() {
        return showNames;
    }

    /**
     * @param showNames the showNames to set
     */
    public void setShowNames(boolean showNames) {
        this.showNames = showNames;
    }

    /**
     * @return the showPersonalInfo
     */
    public boolean isShowPersonalInfo() {
        return showPersonalInfo;
    }

    /**
     * @param showPersonalInfo the showPersonalInfo to set
     */
    public void setShowPersonalInfo(boolean showPersonalInfo) {
        this.showPersonalInfo = showPersonalInfo;
    }

    /**
     * @return the showChart
     */
    public boolean isShowChart() {
        return showChart;
    }

    /**
     * @param showChart the showChart to set
     */
    public void setShowChart(boolean showChart) {
        this.showChart = showChart;
    }

    /**
     * @return the showDiagram
     */
    public boolean isShowDiagram() {
        return showDiagram;
    }

    /**
     * @param showDiagram the showDiagram to set
     */
    public void setShowDiagram(boolean showDiagram) {
        this.showDiagram = showDiagram;
    }

    /**
     * @return the highlightDisease
     */
    public Disease getHighlightDisease() {
        return highlightDisease;
    }

    /**
     * @param highlightDisease the highlightDisease to set
     */
    public void setHighlightDisease(Disease highlightDisease) {
        this.highlightDisease = highlightDisease;
    }

    /**
     * @param selectedHighlightDisease String - sets the Disease from the string.
     */
    // CHECKSTYLE:OFF hides a field
    public void setHighlightDisease(String selectedHighlightDisease) {
        if (!abreviationToDisease.isEmpty()) {
            setHighlightDisease(abreviationToDisease.get(selectedHighlightDisease));
        }
    }

    // CHECKSTYLE:ON

    /**
     * @return the date
     */
    public Date getDate() {
        return new Date();
    }

    /**
     * @return the selectedHighlightDisease
     */
    public String getSelectedHighlightDisease() {
        return selectedHighlightDisease;
    }

    /**
     * @param selectedHighlightDisease the selectedHighlightDisease to set
     */
    public void setSelectedHighlightDisease(String selectedHighlightDisease) {
        this.selectedHighlightDisease = selectedHighlightDisease;
    }

    /**
     * @return ignored param value
     */
    public String getIgnore() {
        return ignore;
    }

    /**
     * @param ignore ignored param value
     */
    public void setIgnore(String ignore) {
        this.ignore = ignore;
    }

    /**
     * @return the legendList
     */
    public Set<Disease> getLegendList() {
        return allDiseases;
    }

    /**
     * @return the abreviationToDisease
     */
    public Map<String, Disease> getAbreviationToDisease() {
        return abreviationToDisease;
    }

    /**
     * @return the diseaseToAbreviation
     */
    public Map<Disease, String> getDiseaseToAbreviation() {
        return diseaseToAbreviation;
    }
}