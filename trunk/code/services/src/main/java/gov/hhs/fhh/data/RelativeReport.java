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

import gov.hhs.fhh.service.locator.FhhRegistry;
import gov.hhs.mfhp.model.Observation;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.apache.commons.collections.set.ListOrderedSet;

/**
 * @author lpower
 * 
 */
@SuppressWarnings("PMD.CyclomaticComplexity")
public class RelativeReport extends Relative {
    private List<ClinicalObservation> diabetes = new ArrayList<ClinicalObservation>();
    private List<ClinicalObservation> heartDisease = new ArrayList<ClinicalObservation>();
    private List<ClinicalObservation> colonCancer = new ArrayList<ClinicalObservation>();
    private List<ClinicalObservation> breastCancer = new ArrayList<ClinicalObservation>();
    private List<ClinicalObservation> ovarianCancer = new ArrayList<ClinicalObservation>();
    private List<ClinicalObservation> stroke = new ArrayList<ClinicalObservation>();
    private List<ClinicalObservation> additionalDiseases = new ArrayList<ClinicalObservation>();

    private Set<Disease> legendList = new ListOrderedSet();

    private String highlightDiseaseAbbreviation = "";


    /**
     * Default constructor.
     */
    public RelativeReport() {
        // default constructor
        super();
    }

    /**
     * Copy constructor.
     * 
     * @param r the Relative object to copy from.
     */
    public RelativeReport(Relative r) {
        super(r);
        this.setDiseases(r);
    }

    /**
     * This method sets all of the Clinical Observation fields that are to be highlighted for display when viewing the
     * pedigree chart.
     * 
     * @param r Relative
     */
    private void setDiseases(Relative r) {
        ArrayList<ClinicalObservation> cis = new ArrayList();
        cis.addAll(r.getObservations());
        for (ClinicalObservation ci : cis) {
            this.getLegendList().add(ci.getDisease());
            categorizeDiseases(ci);
        }

    }

    /**
     * @param ci
     */
    private void categorizeDiseases(ClinicalObservation ci) {
        Disease d = ci.getDisease();
        if (d instanceof Observation) {
            Observation o = (Observation) d;
            if (FhhRegistry.getPersonService().isDiabetes(o)) {
                this.getDiabetes().add(ci);
            } else if (FhhRegistry.getPersonService().isHeartDisease(o)) {
                this.getHeartDisease().add(ci);
            } else if (FhhRegistry.getPersonService().isColorectalCancer(o)) {
                this.getColonCancer().add(ci);
            } else if (FhhRegistry.getPersonService().isBreastCancer(o)) {
                this.getBreastCancer().add(ci);
            } else if (FhhRegistry.getPersonService().isOvarianCancer(o)) {
                this.getOvarianCancer().add(ci);
            } else if (FhhRegistry.getPersonService().isStrokeOrBrainAttack(o)) {
                this.getStroke().add(ci);
            } else {
                this.additionalDiseases.add(ci);
            }
        } else {
            this.getAdditionalDiseases().add(ci);
        }
    }
    

    /**
     * @return the diabetes
     */
    public List<ClinicalObservation> getDiabetes() {
        return diabetes;
    }

    /**
     * @param diabetes the diabetes to set
     */
    public void setDiabetes(List<ClinicalObservation> diabetes) {
        this.diabetes = diabetes;
    }

    /**
     * @return the heartDisease
     */
    public List<ClinicalObservation> getHeartDisease() {
        return heartDisease;
    }

    /**
     * @param heartDisease the heartDisease to set
     */
    public void setHeartDisease(List<ClinicalObservation> heartDisease) {
        this.heartDisease = heartDisease;
    }

    /**
     * @return the colonCancer
     */
    public List<ClinicalObservation> getColonCancer() {
        return colonCancer;
    }

    /**
     * @param colonCancer the colonCancer to set
     */
    public void setColonCancer(List<ClinicalObservation> colonCancer) {
        this.colonCancer = colonCancer;
    }

    /**
     * @return the breastCancer
     */
    public List<ClinicalObservation> getBreastCancer() {
        return breastCancer;
    }

    /**
     * @param breastCancer the breastCancer to set
     */
    public void setBreastCancer(List<ClinicalObservation> breastCancer) {
        this.breastCancer = breastCancer;
    }

    /**
     * @return the ovarianCancer
     */
    public List<ClinicalObservation> getOvarianCancer() {
        return ovarianCancer;
    }

    /**
     * @param ovarianCancer the ovarianCancer to set
     */
    public void setOvarianCancer(List<ClinicalObservation> ovarianCancer) {
        this.ovarianCancer = ovarianCancer;
    }

    /**
     * @return the stroke
     */
    public List<ClinicalObservation> getStroke() {
        return stroke;
    }

    /**
     * @param stroke the stroke to set
     */
    public void setStroke(List<ClinicalObservation> stroke) {
        this.stroke = stroke;
    }

    /**
     * @return the additionalDiseases
     */
    public List<ClinicalObservation> getAdditionalDiseases() {
        return additionalDiseases;
    }

    /**
     * @param additionalDiseases the additionalDiseases to set
     */
    public void setAdditionalDiseases(List<ClinicalObservation> additionalDiseases) {
        this.additionalDiseases = additionalDiseases;
    }

    /**
     * @return the highlightDiseaseAbbreviation
     */
    public String getHighlightDiseaseAbbreviation() {
        return highlightDiseaseAbbreviation;
    }

    /**
     * @param highlightDiseaseAbbreviation the highlightDiseaseAbbreviation to set
     */
    public void setHighlightDiseaseAbbreviation(String highlightDiseaseAbbreviation) {
        this.highlightDiseaseAbbreviation = highlightDiseaseAbbreviation;
    }

    /**
     * @return the legendList
     */
    public Set<Disease> getLegendList() {
        return legendList;
    }

    /**
     * @param legendList the legendList to set
     */
    public void setLegendList(Set<Disease> legendList) {
        this.legendList = legendList;
    }

}
