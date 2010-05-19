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
package gov.hhs.fhh.web.action;

import gov.hhs.fhh.data.AgeRange;
import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Ethnicity;
import gov.hhs.fhh.data.Gender;
import gov.hhs.fhh.data.Height;
import gov.hhs.fhh.data.HeightUnit;
import gov.hhs.fhh.data.LivingStatus;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Race;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.TwinStatus;
import gov.hhs.fhh.data.WeightUnit;
import gov.hhs.fhh.data.util.DiseaseUtils;
import gov.hhs.fhh.data.util.FormatUtils;
import gov.hhs.fhh.data.util.LabelValue;
import gov.hhs.fhh.web.FhhRegistry;
import gov.hhs.fhh.web.util.FhhHttpSessionUtil;
import gov.hhs.fhh.web.util.FhhUtils;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.ajaxtags.xml.AjaxXmlBuilder;
import org.apache.commons.lang.StringUtils;
import org.apache.struts2.interceptor.validation.SkipValidation;

import com.opensymphony.xwork2.Preparable;

/**
 * @author bpickeral
 * 
 */
@SuppressWarnings({ "PMD.TooManyFields", "PMD.ExcessiveClassLength", "PMD.TooManyMethods" })
public class AddPersonAction extends AbstractFHHAction implements Preparable {
    private static final int INCHES_IN_A_FOOT = 12;
    private static final long serialVersionUID = 19278463L;
    private static final boolean TRUE = true;
    private static final String SUBMIT_ACTION = "submit";
    private static final String FAMILY_TREE_ACTION = "addFamilyTree";
    private static final String OTHER_DISEASE = "Other Disease type";
    private Person person;

    private List<Disease> diseases = new ArrayList<Disease>();
    private List<Disease> diseaseSubTypes = new ArrayList<Disease>();
    private List<Disease> autoCompleteConditions = new ArrayList<Disease>();

    private List<Ethnicity> ethnicities = new ArrayList<Ethnicity>();
    private List<Ethnicity> hispanicEthnicities = new ArrayList<Ethnicity>();
    private List<Race> races = new ArrayList<Race>();
    private List<Race> asianRaces = new ArrayList<Race>();
    private List<Race> hawaiianRaces = new ArrayList<Race>();

    private List<AgeRange> ageOfDiagnosisList = new ArrayList<AgeRange>();
    private List<Disease> selectedDiseases = new ArrayList<Disease>();
    private List<String> otherDiseaseValues = new ArrayList<String>();
    private String currentDiseaseValue;
    private String autocompleteDisease;
 
    private String selectedCode;
    private String heightUnit1;
    private String heightUnit2;
    private String heightMetric;
    private String weightString;
    private String dateOfBirthString; // date as string to work around problem validating date using Spanish locale
    private List<Race> selectedRaces = new ArrayList<Race>();
    private List<Race> selectedAsianRaces = new ArrayList<Race>();
    private List<Race> selectedHawaiianRaces = new ArrayList<Race>();
    private List<Ethnicity> selectedEthnicities = new ArrayList<Ethnicity>();
    private List<Ethnicity> selectedHispanicEthnicities = new ArrayList<Ethnicity>();
    private final List<Disease> legacyWarningDiseases = new ArrayList<Disease>();

    /**
     * @return the legacyWarningDiseases
     */
    public List<Disease> getLegacyWarningDiseases() {
        return legacyWarningDiseases;
    }

    /**
     * {@inheritDoc}
     */
    public void prepare() {
        Person rootPerson = FhhHttpSessionUtil.getRootPerson();
        if (rootPerson != null) {
            setPerson(rootPerson);
            setupDiseasesAndAges(getPerson());
            setupHeight(getPerson());
            if (getPerson().getDateOfBirth() != null) {
                setDateOfBirthString(FormatUtils.format(getPerson().getDateOfBirth()));
            }
            setupLegacyWarningMessages(getPerson());
        }
        setSelectionVariables();
    }

    /**
     * Sets up the diseases.
     * 
     * @param p Person object to get the diseases and diagnosis list from
     */
    protected void setupDiseasesAndAges(Person p) {
        if (!p.getObservations().isEmpty()) {
            setSelectedDiseases(new ArrayList<Disease>());
            setAgeOfDiagnosisList(new ArrayList<AgeRange>());
            for (ClinicalObservation obs : p.getObservations()) {
                selectedDiseases.add(obs.getDisease());
                ageOfDiagnosisList.add(obs.getAgeRange());
                if (obs.getDisease().getId() == DiseaseUtils.OTHER_DISEASE_ID) {
                    getOtherDiseaseValues().add(obs.getDisease().getOriginalText());
                } else {
                    getOtherDiseaseValues().add("");
                }
            }
        }
    }

    /**
     * Sets the height in inches of the Person/Relative in the action. To do: Handle Metric units.
     * 
     * @param p Person containing height
     */
    protected void setupHeight(Person p) {
        Height height = p.getHeight();
        if (height != null && height.getValue() != null) {
            int v = height.getValue();
            if (HeightUnit.US.equals(height.getUnit())) {
                int feet = v / INCHES_IN_A_FOOT;
                int inches = v % INCHES_IN_A_FOOT;
                setHeightUnit1(Integer.toString(feet));
                setHeightUnit2(Integer.toString(inches));
            } else {
                setHeightMetric(Integer.toString(v));
            }
        }
    }

    /**
     * Adds warning messages for diseases/conditions that were unmatched to fhh conditions during legacy import. Once
     * the form is saved, the messages no longer appear to the user.
     * 
     * @param p Person containing observations used to generate warning messages.
     */
    protected void setupLegacyWarningMessages(Person p) {
        if (p.isUnmatchedCondition()) {
            for (ClinicalObservation obs : p.getObservations()) {
                checkAndAddWarningMessage(obs);
            }
        }
    }

    private void checkAndAddWarningMessage(ClinicalObservation obs) {
        if (obs.isUnmatchedCondition()) {
            getLegacyWarningDiseases().add(obs.getDisease());
        }
    }

    /**
     * Sets selection variables with values from the DB.
     */
    protected void setSelectionVariables() {
        this.races = FhhRegistry.getPersonService().getRaces();
        this.asianRaces = FhhRegistry.getPersonService().getAsianRaces();
        this.hawaiianRaces = FhhRegistry.getPersonService().getHawaiianRaces();
        this.diseases = FhhRegistry.getPersonService().getDiseases();
        Map<String, Disease> userEnteredDiseases = FhhHttpSessionUtil.getUserEnteredDiseases();
        if (userEnteredDiseases != null) {
            diseases.addAll(userEnteredDiseases.values());
        }
        Collections.sort(diseases);
        this.ethnicities = FhhRegistry.getPersonService().getEthnicities();
        this.hispanicEthnicities = FhhRegistry.getPersonService().getHispanicEthnicities();
    }

    /**
     * Method invokes the add person page using Submodal.
     * 
     * @return path String
     */
    public String addPerson() {
        return SUCCESS;
    }

    /**
     * Method invokes the select relative page using Submodal.
     * 
     * @return path String
     */
    public String selectRelative() {
        return SUCCESS;
    }

    /**
     * Method invokes the add person page using Submodal.
     * 
     * @return path String
     */
    public String submitPerson() {
        validateSubmitFields();
        if (this.getFieldErrors().size() > 0) {
            return INPUT;
        }
        storeDateOfBirth();
        storeHeight();
        person.setObservations(setupClinicalObservations());
        person.setRaces(setupRaces());
        person.setEthnicities(setupEthnicities());
        if (!StringUtils.isEmpty(getWeightString())) {
            person.getWeight().setValue(Integer.valueOf(getWeightString()));
        }
        if (person.isUnmatchedCondition()) {
            person.setUnmatchedCondition(false);
            person.setCompletedForm(true);
        }
        // Since information has been changed, the most recent version of the xml file has
        // not been saved.
        person.setXmlFileSaved(false);
        if (person.isCompletedForm()) {
            return SUBMIT_ACTION;
        } else {
            person.setCompletedForm(TRUE);
            return FAMILY_TREE_ACTION;
        }
    }
    
    private void validateSubmitFields() {
        checkDateOfBirth();
        validateIntegerField("heightUnit1", "person.height.Unit1", getHeightUnit1());
        validateIntegerField("heightUnit2", "person.height.Unit2", getHeightUnit2());
        validateIntegerField("heightMetric", "person.height.Metric", getHeightMetric());
        validateIntegerField("weightString", "person.weight", getWeightString());
        validateRequiredObject("person.gender", "person.gender", getPerson().getGender());
    }
    
    /**
     * Checks for DOB errors and adds fields errors if necessary.
     * 
     * @return true if dob is valid, otherwise false.
     */
    private void checkDateOfBirth() {

        if (StringUtils.isEmpty(getDateOfBirthString())) {
            addFieldError("dateOfBirthString", getText("person.dateOfBirth") + " " 
                    + getText("errors.required.field"));
        } else if (FormatUtils.convertStringToDate(getDateOfBirthString()) == null) {
            addFieldError("dateOfBirthString", getText("dateOfBirthString") + " " + getText("errors.invalid.date"));
        }
    }
    
    /**
     * Stores the date of birth using dateOfBirthString provided that dateOfBirthString is in the correct format.
     */
    private void storeDateOfBirth() {
        person.setDateOfBirth(FormatUtils.convertStringToDate(dateOfBirthString));
    }
    
    private void storeHeight() {
        Height height;
        if (StringUtils.isEmpty(heightMetric)) {
            height = new Height(FhhUtils.calculateHeightUS(heightUnit1, 
                    heightUnit2), HeightUnit.US);
        } else {
            Integer heightMetricInt = null;
            if (!StringUtils.isEmpty(heightMetric)) {
                Integer.valueOf(heightMetric);
            }
            height = new Height(heightMetricInt, HeightUnit.METRIC);
        }
        person.setHeight(height);
    }

    /**
     * Stores the list of diseases and age ranges into the person object as Clinical Observations.
     * 
     * @return list of Clinical Observations
     */
    public List<ClinicalObservation> setupClinicalObservations() {
        List<ClinicalObservation> observations = new ArrayList<ClinicalObservation>();
        if (!selectedDiseases.isEmpty()) {
            int i = 0;
            for (AgeRange age : getAgeOfDiagnosisList()) {
                ClinicalObservation observation = new ClinicalObservation();
                Disease currDisease = selectedDiseases.get(i);
                observation.setAgeRange(age);
                // Add a user defined disease if user entered an "Other" disease
                // and did not select a user defined disease from the drop down (originalText not null).
                if (currDisease.getDisplayName() != null && currDisease.getDisplayName().equals(OTHER_DISEASE)
                        && currDisease.getOriginalText() == null) {
                    currDisease = DiseaseUtils.findOrCreateNewDisease(otherDiseaseValues.get(i));
                    FhhHttpSessionUtil.addUserEnteredDisease(currDisease);
                }
                observation.setDisease(currDisease);
                observations.add(observation);
                i++;
            }
        }
        return observations;
    }

    /**
     * Compiles a list of all selected races (Primary/Sub categories).
     * 
     * @return list of all selected races.
     */
    protected List<Race> setupRaces() {
        List<Race> allRaces = new ArrayList<Race>();
        allRaces.addAll(selectedRaces);
        allRaces.addAll(selectedAsianRaces);
        allRaces.addAll(selectedHawaiianRaces);
        return allRaces;
    }

    /**
     * Compiles a list of all selected races (Primary/Sub categories).
     * 
     * @return list of all selected races.
     */
    protected List<Ethnicity> setupEthnicities() {
        List<Ethnicity> allEthnicities = new ArrayList<Ethnicity>();
        allEthnicities.addAll(selectedEthnicities);
        allEthnicities.addAll(selectedHispanicEthnicities);
        return allEthnicities;
    }

    /**
     * Retrieves a list of sub types for the selected disease/condition.
     * 
     * @return path to get disease sub types in XML form
     */
    @SkipValidation
    public String retrieveDiseaseSubTypes() {
        if (StringUtils.isNotBlank(currentDiseaseValue)) {
            this.diseaseSubTypes = FhhRegistry.getPersonService().getDiseaseSubTypes(
                    Long.parseLong(currentDiseaseValue));
        }
        return "xmlDiseaseSubTypes";
    }
    
    /**
     * Get the set of retrieved sub types in XML for use by AjaxTags.
     * 
     * @return the stream containing the XML encoding the set of disease sub types
     * @throws IllegalAccessException on error
     * @throws NoSuchMethodException on error
     * @throws InvocationTargetException on error
     * @throws UnsupportedEncodingException on error
     */
    public InputStream getDiseaseSubTypesAsXml() throws IllegalAccessException, NoSuchMethodException,
            InvocationTargetException, UnsupportedEncodingException {
        AjaxXmlBuilder xmlBuilder = new AjaxXmlBuilder();
        if (!this.diseaseSubTypes.isEmpty()) {
            xmlBuilder.addItems(Arrays.asList(new LabelValue(getText("person.select.pleaseSpecify"), "")), "label",
                    "value");
            xmlBuilder.addItems(this.diseaseSubTypes, "appDisplay", "id");
        }
        return new ByteArrayInputStream(xmlBuilder.toString().getBytes("UTF-8"));
    }
    
    /**
     * Retrieves a list of sub types like the entered disease/condition.
     * @return path to get disease sub types in XML form
     */
    @SkipValidation
    public String retrieveAutocompleteConditions() {
        if (StringUtils.isNotBlank(autocompleteDisease)) {
            this.autoCompleteConditions = FhhRegistry.getPersonService().getDiseaseByName(
                    autocompleteDisease);
        }
        return "xmlAutocomplete";
    }

    /**
     * Get the set of retrieved sub types in XML for use by the autocomplete AjaxTag.
     * @return the stream containing the XML encoding the set of autocomplete disease sub types
     * @throws IllegalAccessException on error
     * @throws NoSuchMethodException on error
     * @throws InvocationTargetException on error
     * @throws UnsupportedEncodingException on error
     */
    public InputStream getAutocompleteAsXml() throws IllegalAccessException, NoSuchMethodException,
        InvocationTargetException, UnsupportedEncodingException {
        AjaxXmlBuilder xmlBuilder = new AjaxXmlBuilder();
        if (!this.autoCompleteConditions.isEmpty()) {
            xmlBuilder.addItems(this.autoCompleteConditions, "appDisplay", "appDisplay");
        }
        return new ByteArrayInputStream(xmlBuilder.toString().getBytes("UTF-8"));
    }

    /**
     * @return the age Range Enums
     */
    public AgeRange[] getAgeRangeEnums() {
        return AgeRange.values();
    }

    /**
     * @return the gender enums
     */
    public Gender[] getGenderEnums() {
        return Gender.values();
    }

    /**
     * @return the gender enums
     */
    public WeightUnit[] getWeightUnitEnums() {
        return WeightUnit.values();
    }

    /**
     * @return the thwin status enums
     */
    public TwinStatus[] getTwinStatusEnums() {
        return TwinStatus.values();
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
     * @return the diseases
     */
    public List<Disease> getDiseases() {
        return diseases;
    }

    /**
     * @param diseases the diseases to set
     */
    public void setDiseases(List<Disease> diseases) {
        this.diseases = diseases;
    }

    /**
     * @return the ethnicities
     */
    public List<Ethnicity> getEthnicities() {
        return ethnicities;
    }

    /**
     * @param ethnicities the ethnicities to set
     */
    public void setEthnicities(List<Ethnicity> ethnicities) {
        this.ethnicities = ethnicities;
    }

    /**
     * @return the races
     */
    public List<Race> getRaces() {
        return races;
    }

    /**
     * @param races the races to set
     */
    public void setRaces(List<Race> races) {
        this.races = races;
    }

    /**
     * @return the selectedDiseases
     */
    public List<Disease> getSelectedDiseases() {
        return selectedDiseases;
    }

    /**
     * @param selectedDiseases the selectedDiseases to set
     */
    public void setSelectedDiseases(List<Disease> selectedDiseases) {
        this.selectedDiseases = selectedDiseases;
    }

    /**
     * @return the diseaseSubTypes
     */
    public List<Disease> getDiseaseSubTypes() {
        return diseaseSubTypes;
    }

    /**
     * @param diseaseSubTypes the diseaseSubTypes to set
     */
    public void setDiseaseSubTypes(List<Disease> diseaseSubTypes) {
        this.diseaseSubTypes = diseaseSubTypes;
    }

    /**
     * @return the currentDiseaseValue
     */
    public String getCurrentDiseaseValue() {
        return currentDiseaseValue;
    }

    /**
     * @param currentDiseaseValue the currentDiseaseValue to set
     */
    public void setCurrentDiseaseValue(String currentDiseaseValue) {
        this.currentDiseaseValue = currentDiseaseValue;
    }

    /**
     * @return the selectedCode
     */
    public String getSelectedCode() {
        return selectedCode;
    }

    /**
     * @param selectedCode the selectedCode to set
     */
    public void setSelectedCode(String selectedCode) {
        this.selectedCode = selectedCode;
    }

    /**
     * @return the selectedCode
     */
    public RelativeCode getSelectedCodeEnum() {
        return RelativeCode.getByValue(selectedCode);
    }

    /**
     * @return the relationshipSpecifier
     */
    public LivingStatus[] getlivingStatusEnums() {
        return LivingStatus.values();
    }

    /**
     * @return the otherDiseaseValues
     */
    public List<String> getOtherDiseaseValues() {
        return otherDiseaseValues;
    }

    /**
     * @param otherDiseaseValues the otherDiseaseValues to set
     */
    public void setOtherDiseaseValues(List<String> otherDiseaseValues) {
        this.otherDiseaseValues = otherDiseaseValues;
    }

    /**
     * @return the asianRaces
     */
    public List<Race> getAsianRaces() {
        return asianRaces;
    }

    /**
     * @param asianRaces the asianRaces to set
     */
    public void setAsianRaces(List<Race> asianRaces) {
        this.asianRaces = asianRaces;
    }

    /**
     * @return the hawaiianRaces
     */
    public List<Race> getHawaiianRaces() {
        return hawaiianRaces;
    }

    /**
     * @param hawaiianRaces the hawaiianRaces to set
     */
    public void setHawaiianRaces(List<Race> hawaiianRaces) {
        this.hawaiianRaces = hawaiianRaces;
    }

    /**
     * @return the hispanicEthnicities
     */
    public List<Ethnicity> getHispanicEthnicities() {
        return hispanicEthnicities;
    }

    /**
     * @param hispanicEthnicities the hispanicEthnicities to set
     */
    public void setHispanicEthnicities(List<Ethnicity> hispanicEthnicities) {
        this.hispanicEthnicities = hispanicEthnicities;
    }

    /**
     * @return the ageOfDiagnosisList
     */
    public List<AgeRange> getAgeOfDiagnosisList() {
        return ageOfDiagnosisList;
    }

    /**
     * @param ageOfDiagnosisList the ageOfDiagnosisList to set
     */
    public void setAgeOfDiagnosisList(List<AgeRange> ageOfDiagnosisList) {
        this.ageOfDiagnosisList = ageOfDiagnosisList;
    }

    /**
     * @return the dateOfBirthString
     */
    public String getDateOfBirthString() {
        // treating this as a string to work around a validation problem with dates using the Spanish locale
        return dateOfBirthString;
    }

    /**
     * @param dateOfBirthString the dateOfBirthString to set
     */
    public void setDateOfBirthString(String dateOfBirthString) {
        this.dateOfBirthString = dateOfBirthString;
    }

    /**
     * @return the selectedRaces
     */
    public List<Race> getSelectedRaces() {
        return selectedRaces;
    }

    /**
     * @param selectedRaces the selectedRaces to set
     */
    public void setSelectedRaces(List<Race> selectedRaces) {
        this.selectedRaces = selectedRaces;
    }

    /**
     * @return the selectedAsianRaces
     */
    public List<Race> getSelectedAsianRaces() {
        return selectedAsianRaces;
    }

    /**
     * @param selectedAsianRaces the selectedAsianRaces to set
     */
    public void setSelectedAsianRaces(List<Race> selectedAsianRaces) {
        this.selectedAsianRaces = selectedAsianRaces;
    }

    /**
     * @return the selectedHawaiianRaces
     */
    public List<Race> getSelectedHawaiianRaces() {
        return selectedHawaiianRaces;
    }

    /**
     * @param selectedHawaiianRaces the selectedHawaiianRaces to set
     */
    public void setSelectedHawaiianRaces(List<Race> selectedHawaiianRaces) {
        this.selectedHawaiianRaces = selectedHawaiianRaces;
    }

    /**
     * @return the selectedEthnicities
     */
    public List<Ethnicity> getSelectedEthnicities() {
        return selectedEthnicities;
    }

    /**
     * @param selectedEthnicities the selectedEthnicities to set
     */
    public void setSelectedEthnicities(List<Ethnicity> selectedEthnicities) {
        this.selectedEthnicities = selectedEthnicities;
    }

    /**
     * @return the selectedHispanicEthnicities
     */
    public List<Ethnicity> getSelectedHispanicEthnicities() {
        return selectedHispanicEthnicities;
    }

    /**
     * @param selectedHispanicEthnicities the selectedHispanicEthnicities to set
     */
    public void setSelectedHispanicEthnicities(List<Ethnicity> selectedHispanicEthnicities) {
        this.selectedHispanicEthnicities = selectedHispanicEthnicities;
    }
    
    /**
     * @return the autocompleteDisease
     */
    public String getAutocompleteDisease() {
        return autocompleteDisease;
    }

    /**
     * @param autocompleteDisease the autocompleteDisease to set
     */
    public void setAutocompleteDisease(String autocompleteDisease) {
        this.autocompleteDisease = autocompleteDisease;
    }
    
    /**
     * @return the autoCompleteConditions
     */
    public List<Disease> getAutoCompleteConditions() {
        return autoCompleteConditions;
    }

    /**
     * @param autoCompleteConditions the autoCompleteConditions to set
     */
    public void setAutoCompleteConditions(List<Disease> autoCompleteConditions) {
        this.autoCompleteConditions = autoCompleteConditions;
    }

    /**
     * @return the heightUnit1
     */
    public String getHeightUnit1() {
        return heightUnit1;
    }

    /**
     * @param heightUnit1 the heightUnit1 to set
     */
    public void setHeightUnit1(String heightUnit1) {
        this.heightUnit1 = heightUnit1;
    }

    /**
     * @return the heightUnit2
     */
    public String getHeightUnit2() {
        return heightUnit2;
    }

    /**
     * @param heightUnit2 the heightUnit2 to set
     */
    public void setHeightUnit2(String heightUnit2) {
        this.heightUnit2 = heightUnit2;
    }

    /**
     * @return the heightMetric
     */
    public String getHeightMetric() {
        return heightMetric;
    }

    /**
     * @param heightMetric the heightMetric to set
     */
    public void setHeightMetric(String heightMetric) {
        this.heightMetric = heightMetric;
    }

    /**
     * @return the weightString
     */
    public String getWeightString() {
        return weightString;
    }

    /**
     * @param weightString the weightString to set
     */
    public void setWeightString(String weightString) {
        this.weightString = weightString;
    }
}