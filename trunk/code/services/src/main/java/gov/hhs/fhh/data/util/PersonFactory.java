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
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.model.mfhp.LivingStatus;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import com.fiveamsolutions.hl7.model.AbstractProband;
import com.fiveamsolutions.hl7.model.Bastard;
import com.fiveamsolutions.hl7.model.CauseOfDeath;
import com.fiveamsolutions.hl7.model.CodeTuple;
import com.fiveamsolutions.hl7.model.Codeable;
import com.fiveamsolutions.hl7.model.Deceased;
import com.fiveamsolutions.hl7.model.Diagnosis;
import com.fiveamsolutions.hl7.model.Pedigree;
import com.fiveamsolutions.hl7.model.age.Age;
import com.fiveamsolutions.hl7.model.age.AgeRange;
import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.age.DateBasedExactAge;
import com.fiveamsolutions.hl7.model.age.DayBased;
import com.fiveamsolutions.hl7.model.age.DayBasedEstimateAgeRange;
import com.fiveamsolutions.hl7.model.age.UnknownAge;
import com.fiveamsolutions.hl7.model.age.ValueBasedEstimateAgeRange;
import com.fiveamsolutions.hl7.model.age.YearBasedEstimateAge;
import com.fiveamsolutions.hl7.model.condition.Condition;
import com.fiveamsolutions.hl7.model.mfhp.Height;
import com.fiveamsolutions.hl7.model.mfhp.MfhpUserEnteredCondition;
import com.fiveamsolutions.hl7.model.mfhp.ProbandDemographics;
import com.fiveamsolutions.hl7.model.mfhp.RelationshipResolver;
import com.fiveamsolutions.hl7.model.mfhp.RelativeCode;
import com.fiveamsolutions.hl7.model.mfhp.WaistCircumference;
import com.fiveamsolutions.hl7.model.mfhp.Weight;
import com.fiveamsolutions.hl7.model.mfhp.ethnicity.Ethnicity;
import com.fiveamsolutions.hl7.model.mfhp.ethnicity.MfhpTrackedEthnicity;
import com.fiveamsolutions.hl7.model.race.MfhpTrackedRace;
import com.fiveamsolutions.hl7.model.race.Race;
import com.fiveamsolutions.hl7.model.snomed.SNOMEDCode;

/**
 * @author bpickeral
 *
 */
@SuppressWarnings("PMD.TooManyMethods")
public final class PersonFactory {
    private static final PersonFactory FACTORY = new PersonFactory();

    /**
     * HL7 Code system name.
     */
    public static final String HL7 = "HL7";
    /**
     * SNOMED Code system name.
     */
    public static final String SNOMED_CT = "SNOMED_CT";

    /**
     * Returns the instance of PersonFactory.
     *
     * @return instance of PersonFactory
     */
    public static PersonFactory getInstance() {
        return FACTORY;
    }

    /**
     * Creates a gov.hhs.fhh.data.Person object using the data from a Pedigree object.
     *
     * @param pedigree Pedigree object to convert
     * @return Person object
     */
    public Person createPerson(Pedigree pedigree) {
        Person person = new Person();
        AbstractProband proband = (AbstractProband) pedigree.getSelf();
        ProbandDemographics demographics = (ProbandDemographics) proband.getDemographics();
        person.setUuid(pedigree.getSelf().getUuid());

        person.setGender(pedigree.getSelf().getGender());

        addDemographics(person, demographics);
        addAge(person, proband.getAge());
        addRaces(person, demographics);
        addEthnicities(person, demographics);
        addDiseases(person, proband);

        person.setConsanguinityFlag(proband.isConsanguinityFlag());

        final RelationshipResolver rr = new RelationshipResolver();

        Map<UUID, gov.hhs.fhh.data.Relative> map = new HashMap<UUID, gov.hhs.fhh.data.Relative>();
        for (com.fiveamsolutions.hl7.model.Person relative : pedigree.getAllRelatives()) {
            RelativeCode code = rr.resolve(proband, relative);
            gov.hhs.fhh.data.Relative dataRelative = createRelative(relative, code);
            map.put(relative.getUuid(), dataRelative);
        }

        populateParentRelationships(pedigree, map);
        person.setRelatives(new ArrayList(map.values()));

        List<Relative> droppedRelatives = new ArrayList<Relative>();
        for (com.fiveamsolutions.hl7.model.Person relative : pedigree.getSelf().getBastardRelatives()) {
            if (relative instanceof Bastard) {
                gov.hhs.fhh.data.Relative dataRelative =
                    createRelative(relative, ((Bastard) relative).getRelativeCode());
                droppedRelatives.add(dataRelative);
            }
        }
        person.getUnrelatedRelatives().addAll(droppedRelatives);

        return person;
    }

    /**
     * @param pedigree
     * @param map
     */
    private void populateParentRelationships(Pedigree pedigree, Map<UUID, gov.hhs.fhh.data.Relative> map) {
        for (com.fiveamsolutions.hl7.model.Person relative : pedigree.getAllRelatives()) {

            UUID currentUUID = relative.getUuid();
            if (relative.getFather() != null) {
                UUID fatherUuid = relative.getFather().getUuid();
                Relative fatherPerson = map.get(fatherUuid);
                map.get(currentUUID).setFather(fatherPerson);
            }

            if (relative.getMother() != null) {
                UUID motherUuid = relative.getMother().getUuid();
                Relative motherPerson = map.get(motherUuid);
                map.get(currentUUID).setMother(motherPerson);
            }
        }
    }

    /**
     * @param proband
     * @param dataRelatives
     * @param src
     * @param code
     */
    private gov.hhs.fhh.data.Relative createRelative(com.fiveamsolutions.hl7.model.Person src, RelativeCode code) {
        gov.hhs.fhh.data.Relative dest = new gov.hhs.fhh.data.Relative();

        if (code != null) {
            //transform from canonical RelativeCode to MFHP RelativeCode
            dest.setCodeEnum(gov.hhs.fhh.data.RelativeCode.getByCanonical(code));
        }

        dest.setGender(src.getGender());

        addDemographics(dest, (ProbandDemographics) src.getDemographics());
        addAge(dest, src.getAge());
        addRaces(dest, (ProbandDemographics) src.getDemographics());
        addEthnicities(dest, (ProbandDemographics) src.getDemographics());
        addDiseases(dest, src);

        if (src instanceof Deceased) {
            addCauseOfDeath(dest, ((Deceased) src).getCauseOfDeath());
            dest.setDeceasedIndicator(Boolean.TRUE.toString().toLowerCase());
            dest.setLivingStatus(LivingStatus.NO.toString());
        } else if (src.getAge() != null) {
            handleAge(src, dest);
        } else {
            //unset age case
            dest.setLivingStatus(null);
            dest.setBirthTime(null);
            dest.setEstimatedAgeRange(null);
        }

        dest.setUuid(src.getUuid());

        return dest;
    }


    private void handleAge(com.fiveamsolutions.hl7.model.Person src, gov.hhs.fhh.data.Relative dest) {
        if (src.getAge() instanceof UnknownAge) {
            dest.setLivingStatus(LivingStatus.UNKNOWN.toString());
        } else {
            dest.setDeceasedIndicator(Boolean.FALSE.toString().toLowerCase());
            dest.setLivingStatus(LivingStatus.YES.toString());
        }
    }


    private void addCauseOfDeath(Relative dataRelative, CauseOfDeath causeOfDeath) {
        if (causeOfDeath.getCondition() != null) {
            dataRelative.setCauseOfDeath(createDisease(causeOfDeath.getCondition()));
        }

        if (causeOfDeath.getAgeAtDeath() != null) {
            dataRelative.setAgeAtDeath(getAgeRange(causeOfDeath.getAgeAtDeath()));
        }
    }

    private void addDemographics(Relative relative, ProbandDemographics demographics) {
        setCommonPersonFields(relative, demographics);
    }

    /**
     * @param person
     * @param demographics
     */
    private void setCommonPersonFields(Person person, ProbandDemographics demographics) {
        addWeight(person, demographics);
        addHeight(person, demographics);
        addWaistCircumference(person, demographics);

        person.setName(demographics.getName());
        person.setAdopted(demographics.isAdopted());
        person.setTwinStatus(demographics.getTwinStatus());
        person.setExerciseMoreThanPeers(demographics.isExerciseMoreThanPeers());

    }

    private void addDemographics(Person person, ProbandDemographics demographics) {
        setCommonPersonFields(person, demographics);
    }

    /**
     * @param person
     * @param demographics
     */
    private void addHeight(Person person, ProbandDemographics demographics) {
        Height height = new Height();
        if (demographics.getHeight() != null) {
            height = demographics.getHeight();
        }
        person.setHeight(height);
    }

    /**
     * @param person
     * @param demographics
     */
    private void addWaistCircumference(Person person, ProbandDemographics demographics) {
        WaistCircumference waistCircumference = new WaistCircumference();
        if (demographics.getWaistCircumference() != null) {
            waistCircumference = demographics.getWaistCircumference();
        }
        person.setWaistCircumference(waistCircumference);
    }

    /**
     * @param person
     * @param demographics
     */
    private void addWeight(Person person, ProbandDemographics demographics) {
        Weight weight = new Weight();
        if (demographics.getWeight() != null) {
            weight = demographics.getWeight();
        }
        person.setWeight(weight);
    }

    /**
     * @param person
     * @param demographics
     */
    private void addAge(Person person, Age age) {
        if (age instanceof DateBasedExactAge) {
            Calendar dateOfBirth = ((DateBasedExactAge) age).getDateOfBirth();
            person.setDateOfBirth(dateOfBirth.getTime());
        }
    }

    private void addAge(Relative relative, Age age) {
        if (age instanceof DateBasedExactAge) {
            Calendar dateOfBirth = ((DateBasedExactAge) age).getDateOfBirth();
            relative.setDateOfBirth(dateOfBirth.getTime());
            relative.setBirthTime(FormatUtils.format(dateOfBirth.getTime()));
        } else if (age instanceof YearBasedEstimateAge) {
            relative.setBirthTime(String.valueOf(((YearBasedEstimateAge) age).getYear()));
        } else if (age instanceof AgeRange) {
            relative.setEstimatedAgeRange(getAgeRange(age));
        }
    }

    private void addRaces(Person person, ProbandDemographics demographics) {
        for (Race currRace : demographics.getRaces()) {
            MfhpTrackedRace mfhpRace = (MfhpTrackedRace) currRace;
            // not handling multiple codes correctly for races
            SNOMEDCode code = getFirstCode(mfhpRace);
            List<gov.hhs.fhh.data.Race> races = FhhDataUtils.getPersonService().getRaceByCodeAndCodeSystem(
                    code.getCode(), code.getCodeSystemName());
            if (!races.isEmpty()) {
                person.getRaces().add(races.get(0));
            }
        }
    }

    private void addEthnicities(Person person, ProbandDemographics demographics) {
        for (Ethnicity currEthnicity : demographics.getEthnicities()) {
            addEthnicity(person, currEthnicity);
        }
    }

    /**
     * @param person
     * @param currEthnicity
     */
    private void addEthnicity(Person person, Ethnicity currEthnicity) {
        MfhpTrackedEthnicity mfhpEthnicity = (MfhpTrackedEthnicity) currEthnicity;
        SNOMEDCode code = getFirstCode(mfhpEthnicity);
        List<gov.hhs.fhh.data.Ethnicity> ethnicities = FhhDataUtils.getPersonService().getEthnicityByCodeAndCodeSystem(
                code.getCode(), code.getCodeSystemName());
        if (!ethnicities.isEmpty()) {
            person.getEthnicities().add(ethnicities.get(0));
        }
    }

    private void addDiseases(Person dest, com.fiveamsolutions.hl7.model.Person source) {
        for (Diagnosis currDiagnosis : source.getDiagnoses()) {
            Condition condition = currDiagnosis.getDiagnosedCondition();
            ClinicalObservation obs = createClinicalObservation(currDiagnosis.getAgeAtOnset(), condition);
            dest.getObservations().add(obs);
        }
    }

    private ClinicalObservation createClinicalObservation(Age ageOnset, Condition condition) {
        ClinicalObservation obs = new ClinicalObservation();
        Disease disease = createDisease(condition);
        obs.setDisease(disease);

        obs.setAgeRange(getAgeRange(ageOnset));
        return obs;
    }

    /**
     * @param condition
     * @return
     */
    private Disease createDisease(Condition condition) {
        Disease disease = null;
        if (condition instanceof Codeable) {
            // controlled vocab; condition
            for (com.fiveamsolutions.hl7.model.Code code : ((Codeable) condition).getCodes()) {
                if (code instanceof CodeTuple) {
                    Object keyCode = ((CodeTuple) code).getCode();

                    disease = FhhDataUtils.getCodeToDiseaseMap().get(keyCode);

                    if (disease == null) {
                        String valueCode = (String) ((CodeTuple) code).getValue();
                        disease = DiseaseUtils.findOrCreateNewDisease(valueCode);
                    }
                }
                // multiple codes?
            }
        } else if (condition instanceof MfhpUserEnteredCondition) {
            disease = DiseaseUtils.findOrCreateNewDisease(((MfhpUserEnteredCondition) condition).getText());
        } else {
            throw new UnsupportedOperationException("Unknown disease type '" + condition.getClass().getCanonicalName()
                    + "'");
        }
        return disease;
    }

    private AgeRangeEnum getAgeRange(Age age) {
        if (age instanceof UnknownAge) {
            return AgeRangeEnum.UNKNOWN;
        } else {
            for (AgeRangeEnum arEnum : AgeRangeEnum.values()) {
                AgeRange ageRange = null;
                if (areBothDayBased(age, arEnum)) {
                    ageRange = new DayBasedEstimateAgeRange(arEnum.getLowValue(), arEnum.getHighValue());
                } else if (arEnum.isYearBased()) {
                    ageRange = new ValueBasedEstimateAgeRange(arEnum.getLowValue(), arEnum.getHighValue());
                } else {
                    continue; // we don't know how to handle these currently this is UNKNONW no need for check
                }

                if (ageRange.isSameAge(age)) {
                    return arEnum;
                }
            }
        }
        return AgeRangeEnum.UNKNOWN;
    }

    private boolean areBothDayBased(Age age, AgeRangeEnum arEnum) {
        return arEnum.isDayBased() && age instanceof DayBased;
    }

    private SNOMEDCode getFirstCode(Codeable codeable) {
        return (SNOMEDCode) codeable.getCodes().iterator().next();
    }
}
