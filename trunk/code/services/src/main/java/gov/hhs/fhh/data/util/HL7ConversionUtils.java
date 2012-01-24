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

import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.DiseaseBean;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.model.mfhp.castor.ClinicalObservationsNode;
import gov.hhs.fhh.model.mfhp.castor.ValueNode;
import gov.hhs.fhh.xml.PatientPerson;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.fiveamsolutions.hl7.model.age.CodeNode;
import com.fiveamsolutions.hl7.model.mfhp.ClinicalObservationCode;
import com.fiveamsolutions.hl7.model.mfhp.Gender;
import com.fiveamsolutions.hl7.model.mfhp.GenderNode;
import com.fiveamsolutions.hl7.model.mfhp.Height;
import com.fiveamsolutions.hl7.model.mfhp.HeightUnit;
import com.fiveamsolutions.hl7.model.mfhp.TwinStatus;
import com.fiveamsolutions.hl7.model.mfhp.WaistCircumference;
import com.fiveamsolutions.hl7.model.mfhp.WaistCircumferenceUnit;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.WeightUnit;

/**
 * @author bpickeral
 *
 */
@SuppressWarnings({ "PMD.CyclomaticComplexity", "PMD.TooManyMethods" })
public final class HL7ConversionUtils {

    /**
     * String representing true used by Castor.
     */
    private static final String TRUE_STRING = "true";

    /**
     * Converts a Person object to an HL7 PatientPerson object.
     *
     * @param person FHH data Person object
     * @return HL7 PatientPerson object
     */
    public static PatientPerson patientPerson(Person person) {
        PatientPerson patientPerson = new PatientPerson();
        patientPerson.setClinicalObservationsNode(createClinicalObservationsNode(person));
        patientPerson.setDateOfBirth(person.getDateOfBirth());
        patientPerson.setEthnicities(person.getEthnicities());
        patientPerson.setGenderNode(createGenderNode(person));
        patientPerson.setMultipleBirthIndicator(createMultipleBirthIndicator(person));
        patientPerson.setName(person.getName());
        patientPerson.setRaces(person.getRaces());
        patientPerson.setRelatives(person.getRelatives());
        patientPerson.setId(person.getUuid());
        return patientPerson;
    }

    /**
     * Converts a PatientPerson object to a Person object.
     *
     * @param patientPerson HL7 PatientPerson object
     * @return FHH data Person object
     */
    public static Person person(PatientPerson patientPerson) {
        Person person = new Person();
        extractClinicalObservationsNode(person, patientPerson.getClinicalObservationsNode());
        person.setDateOfBirth(patientPerson.getDateOfBirth());
        person.setEthnicities(patientPerson.getEthnicities());
        extractGenderNode(person, patientPerson.getGenderNode());
        // Multiple Birth indicator only used on XML output
        person.setName(patientPerson.getName());
        person.setRaces(patientPerson.getRaces());
        person.setRelatives(patientPerson.getRelatives());
        person.setUuid(patientPerson.getId());
        return person;
    }

    /**
     * Used by Castor to generate the Clinical Observation Node.
     *
     * @param p Person object containing information
     * @return ClinicalObservationsNode
     */
    public static ClinicalObservationsNode createClinicalObservationsNode(Person p) {
        ClinicalObservationsNode node = new ClinicalObservationsNode();

        final List<ClinicalObservation> observations = new ArrayList<ClinicalObservation>();
        observations.addAll(p.getObservations());
        if (observations.isEmpty()) {
            ClinicalObservation o = new ClinicalObservation();
            o.setDisease(getNoConditions());
            observations.add(o);
        }
        for (ClinicalObservation currObservation : observations) {
            Disease currDisease = currObservation.getDisease();
            currObservation.setCode(new CodeNode(currDisease.getCode(), currDisease.getCodeSystemName(), currDisease
                    .getDisplayName(), null, currDisease.getOriginalText()));
        }
        node.getObservations().addAll(observations);
        addAttributesAsObservations(p, node);
        return node;
    }

    private static Disease getNoConditions() {
        DiseaseBean d = new DiseaseBean();
        d.setCode("160245001");
        d.setCodeSystem("SNOMED_CT");
        d.setCodeSystemName("SNOMED_CT");
        d.setDisplayName("No current problems or disability");
        return d;
    }

    /**
     * Add non-disease clinical observations to ClinicalObservationsNode.
     *
     * @param p Person object in which to store information
     * @param node ClinicalObservationsNode to add observations
     */
    private static void addAttributesAsObservations(Person p, ClinicalObservationsNode node) {
        if (p.isAdopted()) {
            ClinicalObservation adoptedObs = new ClinicalObservation();
            adoptedObs.setCode(new CodeNode(ClinicalObservationCode.ADOPTED));
            node.getObservations().add(adoptedObs);
        }
        TwinStatus twinStatus = p.getTwinStatus();
        if (twinStatus != null && !TwinStatus.NO.equals(twinStatus)) {
            ClinicalObservation twinStatusObs = new ClinicalObservation();
            twinStatusObs.setCode(new CodeNode(twinStatus.getCode(), twinStatus.getCodeSystemName(), twinStatus
                    .getDisplayName()));
            node.getObservations().add(twinStatusObs);
        }
        addHeightAndWeightAsObservations(p, node);
        if (p.isConsanguinityFlag()) {
            ClinicalObservation consanguinityObs = new ClinicalObservation();
            consanguinityObs.setCode(new CodeNode());
            consanguinityObs.getCode().setOriginalText(ClinicalObservationCode.CONSANGUINITY_ORG_TEXT);
            node.getObservations().add(consanguinityObs);
        }
    }

    private static void addHeightAndWeightAsObservations(Person p, ClinicalObservationsNode node) {
        if (p.getWeight().getValue() != null) {
            ClinicalObservation weightObs = new ClinicalObservation();
            weightObs.setCode(new CodeNode(ClinicalObservationCode.WEIGHT));
            weightObs.setValueNode(new ValueNode(p.getWeight().getValue().toString(), p.getWeight().getUnit()
                    .getDisplayName()));
            node.getObservations().add(weightObs);
        }
        if (p.getHeight().getValue() != null) {
            ClinicalObservation heightObs = new ClinicalObservation();
            heightObs.setCode(new CodeNode(ClinicalObservationCode.HEIGHT));
            heightObs.setValueNode(new ValueNode(p.getHeight().getValue().toString(), p.getHeight().getUnit()
                    .getDisplayName()));
            node.getObservations().add(heightObs);
        }
        if (p.getWaistCircumference().getValue() != null) {
            ClinicalObservation waistObs = new ClinicalObservation();
            waistObs.setCode(new CodeNode(ClinicalObservationCode.WAIST_CIRCUMFERENCE));
            waistObs.setValueNode(new ValueNode(p.getWaistCircumference().getValue().toString(),
                    p.getWaistCircumference().getUnit().getDisplayName()));
            node.getObservations().add(waistObs);
        }
    }

    /**
     * Used by Castor to set the Clinical Observation Node.
     *
     * @param p Person object in which to store information
     * @param node ClinicalObservationsNode
     */
    public static void extractClinicalObservationsNode(Person p, ClinicalObservationsNode node) {
        Map<String, Disease> diseaseMap = FhhDataUtils.getCodeToDiseaseMap();
        for (ClinicalObservation currObservation : node.getObservations()) {
            setupObservation(p, currObservation, diseaseMap);
        }
    }

    /**
     * Stores information from clinicalObservation into the Person Object. Any information set must also be transfered
     * to the Relative in setRelationshipHolderNode.
     *
     * @param p Person object in which to store information
     * @param observation observation containing code
     * @param diseaseMap map of SNOMED Codes (String) to diseases
     */
    private static void setupObservation(Person p, ClinicalObservation observation, Map<String, Disease> diseaseMap) {
        CodeNode currCode = observation.getCode();
        // User entered disease
        if (currCode.getOriginalText() != null) {
            setupObservationWithOriginalText(p, observation);
            // Observation with SNOMED code. If an observation does not have original text or SNOMED code, drop the
            // invalid
            // node.
        } else if (currCode.getCode() != null) {
            setupObservationWithoutOriginalText(p, observation, diseaseMap, currCode.getCode());
        } else if (currCode.getDisplayName() != null) {
            observation.setDisease(DiseaseUtils.createOtherDiseaseType(currCode.getDisplayName()));
            p.getObservations().add(observation);
        }
    }

    /**
     * Function Stores information from a ClinicalObservation with original text (User entered diseases and
     * consanguinity nodes).
     *
     * @param p Person object in which to store information
     * @param observation observation containing code
     */
    private static void setupObservationWithOriginalText(Person p, ClinicalObservation observation) {
        CodeNode currCode = observation.getCode();
        if (currCode.getOriginalText().equals(ClinicalObservationCode.CONSANGUINITY_ORG_TEXT)) {
            p.setConsanguinityFlag(true);
        } else {
            observation.setDisease(lookupDisease(observation.getCode()));
            p.getObservations().add(observation);
        }
    }

    /**
     * tries to get a disease from the code to disease map, if that doesn't work tries to look it up by display name.
     *
     * @param observation - observation to diseasify
     * @return whether or not a disease was added.
     */
    private static Disease lookupDisease(CodeNode currCode) {

        if (StringUtils.isNotBlank(currCode.getCode())) {
            Disease matchingDisease = FhhDataUtils.getCodeToDiseaseMap().get(currCode.getCode());
            if (matchingDisease != null) {
                return matchingDisease;
            } else {
                DiseaseBean disease = new DiseaseBean();
                disease.setCode(currCode.getCode());
                disease.setDisplayName(currCode.getOriginalText());
                disease.setAppDisplay(currCode.getDisplayName());
                disease.setCodeSystemName(currCode.getCodeSystemName());
                return disease;
            }
        }
        return DiseaseUtils.findOrCreateNewDisease(currCode.getOriginalText());
    }

    /**
     * Function Stores information from a ClinicalObservation without original text (System diseases and attributes:
     * height weight ect).
     *
     * @param p Person object in which to store information
     * @param observation observation containing code
     * @param diseaseMap map of SNOMED Codes (String) to diseases
     * @param snomedCode SNOMED Code of the observation
     */
    private static void setupObservationWithoutOriginalText(Person p, ClinicalObservation observation,
            Map<String, Disease> diseaseMap, String snomedCode) {

        // ignore the no current condition code
        if (!DiseaseUtils.NO_CURRENT_CONDITION_CODE.equals(snomedCode)) {

            Disease systemDisease = diseaseMap.get(snomedCode);

            // System Disease
            if (systemDisease != null) {
                observation.setDisease(systemDisease);
                p.getObservations().add(observation);
            } else {
                setupAttributeObservation(p, observation);
            }
        }
    }

    /**
     * Stores information from clinicalObservation (not a Disease or Condition) into the Person Object. Any information
     * set must also be transfered to the Relative in setRelationshipHolderNode.
     *
     * @param p Person object in which to store information
     * @param currObservation observation containing code
     */
    private static void setupAttributeObservation(Person p, ClinicalObservation observation) {
        String code = observation.getCode().getCode().trim();
        if (code.equals(ClinicalObservationCode.ADOPTED.getCode())) {
            p.setAdopted(true);
        } else if (code.equals(ClinicalObservationCode.WEIGHT.getCode())) {
            p.setWeight(new Weight(Integer.valueOf(observation.getValueNode().getValue()), WeightUnit
                    .fromUnit(observation.getValueNode().getUnit())));
        } else if (code.equals(ClinicalObservationCode.HEIGHT.getCode())) {
            p.setHeight(new Height(Integer.valueOf(observation.getValueNode().getValue()), HeightUnit
                    .fromUnit(observation.getValueNode().getUnit())));
        } else if (code.equals(ClinicalObservationCode.WAIST_CIRCUMFERENCE.getCode())) {
            p.setWaistCircumference(new WaistCircumference(Integer.valueOf(observation.getValueNode().getValue()),
                    WaistCircumferenceUnit.fromUnit(observation.getValueNode().getUnit())));
        } else if (code.equals(TwinStatus.IDENTICAL.getCode())) {
            p.setTwinStatus(TwinStatus.IDENTICAL);
        } else if (code.equals(TwinStatus.FRATERNAL.getCode())) {
            p.setTwinStatus(TwinStatus.FRATERNAL);
        }
    }

    /**
     * Converts the boolean twin status to a String used by Castor.
     *
     * @param p Person containing twin status
     * @return true string if person is deceased, otherwise null
     */
    public static String createMultipleBirthIndicator(Person p) {
        if (p.isTwin()) {
            return TRUE_STRING;
        }
        return null;
    }

    /**
     * Used for Castor serialization. Import uses the gender nodes original text value to find if the form was completed
     * for a relative (Gender is only required attribute). Set originalText if form was not completed. If unmatched
     * condition exists upon save, all unmatched conditions are validated (form completed).
     *
     * @param p Person with information to store in GenderNode
     * @return the gender as a castor-serializable node.
     */
    public static GenderNode createGenderNode(Person p) {
        return p.getGender() == null ? null : p.getGender().getAsGenderNode();
    }

    /**
     * Used for castor deserialization. Import uses the gender nodes original text value to find if the form was
     * completed for a relative (Gender is only required attribute).
     *
     * @param p Person object in which to store information
     * @param genderNode the representation of the gender obtained from the castor-deserialized XML.
     */
    public static void extractGenderNode(Person p, GenderNode genderNode) {
        p.setGender(Gender.fromGenderNode(genderNode));
    }
}
