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

import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.fiveamsolutions.hl7.model.AbstractProband;
import com.fiveamsolutions.hl7.model.AbstractRelative;
import com.fiveamsolutions.hl7.model.CauseOfDeath;
import com.fiveamsolutions.hl7.model.Female;
import com.fiveamsolutions.hl7.model.FemalePerson;
import com.fiveamsolutions.hl7.model.Male;
import com.fiveamsolutions.hl7.model.MalePerson;
import com.fiveamsolutions.hl7.model.Pedigree;
import com.fiveamsolutions.hl7.model.Proband;
import com.fiveamsolutions.hl7.model.ProbandFactoryImpl;
import com.fiveamsolutions.hl7.model.age.DateBasedExactAge;
import com.fiveamsolutions.hl7.model.mfhp.Gender;

/**
 * @author bpickeral
 * 
 */
@SuppressWarnings({ "PMD.CyclomaticComplexity", "PMD.TooManyMethods", "PMD.ExcessiveMethodLength" })
public final class PedigreeFactory {
    private static final PedigreeFactory FACTORY = new PedigreeFactory();

    /**
     * Returns the instance of PersonFactory.
     * 
     * @return instance of PersonFactory
     */
    public static PedigreeFactory getInstance() {
        return FACTORY;
    }

    /**
     * Converts a gov.hhs.fhh.data.Person to a Pedigree Person object.
     * 
     * @param person Person to convert
     * @return <code>Pedigree</code> object
     */
    public Pedigree createPedigree(Person person) {
        Pedigree pedigree = createImmediateFamily(person);

        List<gov.hhs.fhh.data.Relative> childrenWithParents = new ArrayList<gov.hhs.fhh.data.Relative>();

        Map<gov.hhs.fhh.data.Relative, com.fiveamsolutions.hl7.model.Relative> relativeToPedigreeRelative =
            new HashMap<gov.hhs.fhh.data.Relative, com.fiveamsolutions.hl7.model.Relative>();
        addRelativesWithKnownParents(person, pedigree, childrenWithParents, relativeToPedigreeRelative);

        addChildren(pedigree, childrenWithParents, relativeToPedigreeRelative);

        pedigree.getSelf().setConsanguinityFlag(person.isConsanguinityFlag());

        return pedigree;
    }

    private Pedigree createImmediateFamily(Person person) {
        Proband proband = createProband(person);
        Pedigree pedigree = new Pedigree(proband);

        com.fiveamsolutions.hl7.model.Relative mother = addMother(pedigree,
                (com.fiveamsolutions.hl7.model.Person) proband, person.getRelativeOfType(RelativeCode.NMTH));
        com.fiveamsolutions.hl7.model.Relative father = addFather(pedigree,
                (com.fiveamsolutions.hl7.model.Person) proband, person.getRelativeOfType(RelativeCode.NFTH));

        addMother(pedigree, (com.fiveamsolutions.hl7.model.Person) mother, person
                .getRelativeOfType(RelativeCode.MGRMTH));

        addFather(pedigree, (com.fiveamsolutions.hl7.model.Person) mother, person
                .getRelativeOfType(RelativeCode.MGRFTH));

        addMother(pedigree, (com.fiveamsolutions.hl7.model.Person) father, person
                .getRelativeOfType(RelativeCode.PGRMTH));

        addFather(pedigree, (com.fiveamsolutions.hl7.model.Person) father, person
                .getRelativeOfType(RelativeCode.PGRFTH));

        return pedigree;
    }

    private com.fiveamsolutions.hl7.model.Relative addMother(Pedigree pedigree,
            com.fiveamsolutions.hl7.model.Person child, Relative dataRelative) {
        com.fiveamsolutions.hl7.model.Relative relative = null;
        // Create Deceased Relative
        if (dataRelative.isDeceased()) {
            CauseOfDeath cod = PedigreeConversionUtils.createCauseOfDeath(dataRelative);
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addMother(child, cod);
            } else {
                relative = pedigree.addMother(child, dataRelative.getUuid(), cod);
            }
        } else {
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addMother(child);
            } else {
                relative = pedigree.addMother(child, dataRelative.getUuid());
            }
        }
        PedigreeConversionUtils.createDemographicsAndConditions(dataRelative, relative);
        return relative;
    }

    private com.fiveamsolutions.hl7.model.Relative addFather(Pedigree pedigree,
            com.fiveamsolutions.hl7.model.Person child, Relative dataRelative) {
        com.fiveamsolutions.hl7.model.Relative relative = null;
        // Create Deceased Relative
        if (dataRelative.isDeceased()) {
            CauseOfDeath cod = PedigreeConversionUtils.createCauseOfDeath(dataRelative);
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addFather(child, cod);
            } else {
                relative = pedigree.addFather(child, dataRelative.getUuid(), cod);
            }
        } else {
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addFather(child);
            } else {
                relative = pedigree.addFather(child, dataRelative.getUuid());
            }
        }
        PedigreeConversionUtils.createDemographicsAndConditions(dataRelative, relative);
        return relative;
    }

    private com.fiveamsolutions.hl7.model.Relative addDaughter(Pedigree pedigree,
            com.fiveamsolutions.hl7.model.Person parent, Relative dataRelative) {
        com.fiveamsolutions.hl7.model.Relative relative = null;
        // Create Deceased Relative
        if (dataRelative.isDeceased()) {
            CauseOfDeath cod = PedigreeConversionUtils.createCauseOfDeath(dataRelative);
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addDaughter(parent, cod);
            } else {
                relative = pedigree.addDaughter(parent, dataRelative.getUuid(), cod);
            }
        } else {
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addDaughter(parent);
            } else {
                relative = pedigree.addDaughter(parent, dataRelative.getUuid());
            }
        }
        PedigreeConversionUtils.createDemographicsAndConditions(dataRelative, relative);
        return relative;
    }

    private com.fiveamsolutions.hl7.model.Relative addDaughter(Pedigree pedigree,
            com.fiveamsolutions.hl7.model.MalePerson father, com.fiveamsolutions.hl7.model.FemalePerson mother,
            Relative dataRelative) {
        com.fiveamsolutions.hl7.model.Relative relative = null;
        // Create Deceased Relative
        if (dataRelative.isDeceased()) {
            CauseOfDeath cod = PedigreeConversionUtils.createCauseOfDeath(dataRelative);
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addDaughter(father, mother, cod);
            } else {
                relative = pedigree.addDaughter(father, mother, dataRelative.getUuid(), cod);
            }
        } else {
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addDaughter(father, mother);
            } else {
                relative = pedigree.addDaughter(father, mother, dataRelative.getUuid());
            }
        }
        PedigreeConversionUtils.createDemographicsAndConditions(dataRelative, relative);
        return relative;
    }

    private com.fiveamsolutions.hl7.model.Relative addSon(Pedigree pedigree,
            com.fiveamsolutions.hl7.model.MalePerson father, com.fiveamsolutions.hl7.model.FemalePerson mother,
            Relative dataRelative) {
        AbstractRelative relative = null;
        // Create Deceased Relative
        if (dataRelative.isDeceased()) {
            CauseOfDeath cod = PedigreeConversionUtils.createCauseOfDeath(dataRelative);
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addSon(father, mother, cod);
            } else {
                relative = pedigree.addSon(father, mother, dataRelative.getUuid(), cod);
            }
        } else {
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addSon(father, mother);
            } else {
                relative = pedigree.addSon(father, mother, dataRelative.getUuid());
            }
        }
        PedigreeConversionUtils.createDemographicsAndConditions(dataRelative, relative);
        return relative;
    }

    private com.fiveamsolutions.hl7.model.Relative addSon(Pedigree pedigree,
            com.fiveamsolutions.hl7.model.Person parent, Relative dataRelative) {
        AbstractRelative relative = null;
        // Create Deceased Relative
        if (dataRelative.isDeceased()) {
            CauseOfDeath cod = PedigreeConversionUtils.createCauseOfDeath(dataRelative);
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addSon(parent, cod);
            } else {
                relative = pedigree.addSon(parent, dataRelative.getUuid(), cod);
            }
        } else {
            if (dataRelative.getUuid() == null) {
                relative = pedigree.addSon(parent);
            } else {
                relative = pedigree.addSon(parent, dataRelative.getUuid());
            }
        }
        PedigreeConversionUtils.createDemographicsAndConditions(dataRelative, relative);
        return relative;
    }

    private com.fiveamsolutions.hl7.model.Proband createProband(Person dataPerson) {
        AbstractProband proband = null;
        if (dataPerson.getGender().equals(Gender.MALE)) {
            if (dataPerson.getUuid() == null) {
                proband = ProbandFactoryImpl.getInstance().createMale();
            } else {
                proband = ProbandFactoryImpl.getInstance().createMale(dataPerson.getUuid());
            }
        } else {
            if (dataPerson.getUuid() == null) {
                proband = ProbandFactoryImpl.getInstance().createFemale();
            } else {
                proband = ProbandFactoryImpl.getInstance().createFemale(dataPerson.getUuid());
            }
        }
        proband.setDemographics(PedigreeConversionUtils.createProbandDemographics(dataPerson));
        setAge(dataPerson, proband);
        PedigreeConversionUtils.addConditions(proband, dataPerson);
        return proband;
    }
    
    private void setAge(Person dataPerson, AbstractProband proband) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(dataPerson.getDateOfBirth());
        proband.setAge(new DateBasedExactAge(cal));
    }

    /**
     * Adds all relatives with parents that have already been added to to the pedigree (not including immediate family
     * that has already been added). Puts all children with unknown parents in <code>remainingChildren</code> to be
     * processed once all parents have been processed.
     * 
     * @param person Person containing relatives to process
     * @param proband to add processed relatives.
     * @param remainingChildren to add remaining children that need to be processed after function call
     * @param relativeToPedigreeRelative Map of processed relatives to pedigree Relatives
     */
    private void addRelativesWithKnownParents(Person person, Pedigree pedigree,
            List<gov.hhs.fhh.data.Relative> remainingChildren,
            Map<gov.hhs.fhh.data.Relative, com.fiveamsolutions.hl7.model.Relative> relativeToPedigreeRelative) {
        for (gov.hhs.fhh.data.Relative currRelative : person.getRelatives()) {
            processRelative(pedigree, currRelative, remainingChildren, relativeToPedigreeRelative);
        }
    }

    private void processRelative(Pedigree pedigree, gov.hhs.fhh.data.Relative relative,
            List<gov.hhs.fhh.data.Relative> remainingChildren,
            Map<gov.hhs.fhh.data.Relative, com.fiveamsolutions.hl7.model.Relative> relativeToPedigreeRelative) {
        Proband proband = pedigree.getSelf();
        switch (relative.getCodeEnum()) {
        case MAUNT:
            relativeToPedigreeRelative.put(relative, addDaughter(pedigree,
                    (com.fiveamsolutions.hl7.model.MalePerson) proband.getMother().getFather(),
                    (com.fiveamsolutions.hl7.model.FemalePerson) proband.getMother().getMother(), relative));
            break;
        case MUNCLE:
            relativeToPedigreeRelative.put(relative, addSon(pedigree,
                    (com.fiveamsolutions.hl7.model.MalePerson) proband.getMother().getFather(),
                    (com.fiveamsolutions.hl7.model.FemalePerson) proband.getMother().getMother(), relative));
            break;
        case PAUNT:
            relativeToPedigreeRelative.put(relative, addDaughter(pedigree,
                    (com.fiveamsolutions.hl7.model.MalePerson) proband.getFather().getFather(),
                    (com.fiveamsolutions.hl7.model.FemalePerson) proband.getFather().getMother(), relative));
            break;
        case PUNCLE:
            relativeToPedigreeRelative.put(relative, addSon(pedigree,
                    (com.fiveamsolutions.hl7.model.MalePerson) proband.getFather().getFather(),
                    (com.fiveamsolutions.hl7.model.FemalePerson) proband.getFather().getMother(), relative));
            break;
        case SON:
            relativeToPedigreeRelative.put(relative, addSon(pedigree, (com.fiveamsolutions.hl7.model.Person) proband,
                    relative));
            break;
        case DAU:
            relativeToPedigreeRelative.put(relative, addDaughter(pedigree,
                    (com.fiveamsolutions.hl7.model.Person) proband, relative));
            break;
        case NBRO:
            relativeToPedigreeRelative.put(relative, processBrother(pedigree, relative));
            break;
        case HBRO:
            relativeToPedigreeRelative.put(relative, processHalfBrother(pedigree, relative));
            break;
        case HSIS:
            relativeToPedigreeRelative.put(relative, processHalfSister(pedigree, relative));
            break;
        case NSIS:
            relativeToPedigreeRelative.put(relative, processSister(pedigree, relative));
            break;
        case MCOUSN:
        case PCOUSN:
        case NEPHEW:
        case NIECE:
        case GRNDAU:
        case GRNSON:
            remainingChildren.add(relative);
        default:
        }
    }

    private com.fiveamsolutions.hl7.model.Relative processBrother(Pedigree pedigree, 
            gov.hhs.fhh.data.Relative relative) {
        return addSon(pedigree, pedigree.getSelf().getFather(), pedigree.getSelf().getMother(), relative);
    }

    private com.fiveamsolutions.hl7.model.Relative processHalfBrother(Pedigree pedigree,
            gov.hhs.fhh.data.Relative relative) {
        if (relative.getFather() != null) {
            return addSon(pedigree, (com.fiveamsolutions.hl7.model.Person) pedigree.getSelf().getFather(), relative);
        } else {
            return addSon(pedigree, (com.fiveamsolutions.hl7.model.Person) pedigree.getSelf().getMother(), relative);
        }
    }

    private com.fiveamsolutions.hl7.model.Relative processHalfSister(Pedigree pedigree,
            gov.hhs.fhh.data.Relative relative) {
        if (relative.getFather() != null) {
            return addDaughter(pedigree, (com.fiveamsolutions.hl7.model.Person) pedigree.getSelf().getFather(),
                    relative);
        } else {
            return addDaughter(pedigree, (com.fiveamsolutions.hl7.model.Person) pedigree.getSelf().getMother(),
                    relative);
        }
    }

    private com.fiveamsolutions.hl7.model.Relative processSister(Pedigree pedigree, 
            gov.hhs.fhh.data.Relative relative) {
        return addDaughter(pedigree, pedigree.getSelf().getFather(), pedigree.getSelf().getMother(), relative);

    }

    private void addChildren(Pedigree pedigree, List<gov.hhs.fhh.data.Relative> childrenWithParents,
            Map<gov.hhs.fhh.data.Relative, com.fiveamsolutions.hl7.model.Relative> relativeToPedigreeRelative) {
        for (gov.hhs.fhh.data.Relative currRelative : childrenWithParents) {
            if (currRelative.getFather() != null) {
                if (currRelative.getMother() != null) {
                    if (Gender.MALE.toString().equals(currRelative.getGender().toString())) {
                        addSon(pedigree, (MalePerson) relativeToPedigreeRelative.get(currRelative.getFather()),
                                (FemalePerson) relativeToPedigreeRelative.get(currRelative.getMother()), currRelative);
                    } else {
                        addDaughter(pedigree, (MalePerson) relativeToPedigreeRelative.get(currRelative.getFather()),
                                (FemalePerson) relativeToPedigreeRelative.get(currRelative.getMother()), currRelative);
                    }
                } else {
                    if (Gender.MALE.toString().equals(currRelative.getGender().toString())) {
                        addSon(pedigree, (com.fiveamsolutions.hl7.model.Person) relativeToPedigreeRelative
                                .get(currRelative.getFather()), currRelative);
                    } else {
                        addDaughter(pedigree, (com.fiveamsolutions.hl7.model.Person) relativeToPedigreeRelative
                                .get(currRelative.getFather()), currRelative);
                    }
                }
            } else if (currRelative.getMother() != null) {
                if (Gender.MALE.toString().equals(currRelative.getGender().toString())) {
                    addSon(pedigree, (com.fiveamsolutions.hl7.model.Person) relativeToPedigreeRelative.get(currRelative
                            .getMother()), currRelative);
                } else {
                    addDaughter(pedigree, (com.fiveamsolutions.hl7.model.Person) relativeToPedigreeRelative
                            .get(currRelative.getMother()), currRelative);
                }
            }
        }
    }

    /**
     * Gets the fixed Relative (can only be one relative of the type) of the proband with the RelativeCode code.
     * 
     * @param proband containing relatives
     * @param code RelativeCode of relative to return
     * @return Person with Relativecode code
     */
    public com.fiveamsolutions.hl7.model.AbstractRelative getFixedRelative(Proband proband, RelativeCode code) {
        com.fiveamsolutions.hl7.model.AbstractRelative person = null;
        switch (code) {
        case NMTH:
            person = (AbstractRelative) proband.getMother();
            break;
        case NFTH:
            person = (AbstractRelative) proband.getFather();
            break;
        case MGRMTH:
            if (proband.getMother() != null) {
                person = (AbstractRelative) proband.getMother().getMother();
            }
            break;
        case MGRFTH:
            if (proband.getMother() != null) {
                person = (AbstractRelative) proband.getMother().getFather();
            }
            break;
        case PGRMTH:
            if (proband.getFather() != null) {
                person = (AbstractRelative) proband.getFather().getMother();
            }
            break;
        case PGRFTH:
            if (proband.getFather() != null) {
                person = (AbstractRelative) proband.getFather().getFather();
            }
            break;
        default:
            throw new IllegalArgumentException("Code is not a code of a Fixed Relative " + code);
        }
        return person;
    }

    /**
     * Gets the variable Relatives (can have multiple relatives of the type) of the proband with the RelativeCode code.
     * 
     * @param proband containing relatives
     * @param code RelativeCode of relatives to return
     * @return Person with Relativecode code
     */
    public List<com.fiveamsolutions.hl7.model.Person> getVariableRelatives(Proband proband, RelativeCode code) {
        List<com.fiveamsolutions.hl7.model.Person> personList = new ArrayList<com.fiveamsolutions.hl7.model.Person>();
        com.fiveamsolutions.hl7.model.Person parentRelative;
        switch (code) {
        case MAUNT:
            parentRelative = getFixedRelative(proband, RelativeCode.MGRMTH);
            if (parentRelative != null) {
                personList = getRelativeType(parentRelative.getChildren(), Gender.FEMALE);
                personList.remove(getFixedRelative(proband, RelativeCode.NMTH));
            }
            break;
        case MUNCLE:
            parentRelative = getFixedRelative(proband, RelativeCode.MGRMTH);
            if (parentRelative != null) {
                personList = getRelativeType(parentRelative.getChildren(), Gender.MALE);
                personList.remove(getFixedRelative(proband, RelativeCode.NMTH));
            }
            break;
        case PAUNT:
            parentRelative = getFixedRelative(proband, RelativeCode.PGRMTH);
            if (parentRelative != null) {
                personList = getRelativeType(parentRelative.getChildren(), Gender.FEMALE);
                personList.remove(getFixedRelative(proband, RelativeCode.NFTH));
            }
            break;
        case PUNCLE:
            parentRelative = getFixedRelative(proband, RelativeCode.PGRMTH);
            if (parentRelative != null) {
                personList = getRelativeType(parentRelative.getChildren(), Gender.MALE);
                personList.remove(getFixedRelative(proband, RelativeCode.NFTH));
            }
            break;
        case SON:
            personList = getRelativeType(proband.getChildren(), Gender.MALE);
            break;
        case DAU:
            personList = getRelativeType(proband.getChildren(), Gender.FEMALE);
            break;
        case MCOUSN:
            List<com.fiveamsolutions.hl7.model.Person> mAuntsUncles = 
                new ArrayList<com.fiveamsolutions.hl7.model.Person>();
            mAuntsUncles.addAll(getVariableRelatives(proband, RelativeCode.MAUNT));
            mAuntsUncles.addAll(getVariableRelatives(proband, RelativeCode.MUNCLE));
            personList = addAllChildren(mAuntsUncles);
            break;
        case PCOUSN:
            List<com.fiveamsolutions.hl7.model.Person> pAuntsUncles = 
                new ArrayList<com.fiveamsolutions.hl7.model.Person>();
            pAuntsUncles.addAll(getVariableRelatives(proband, RelativeCode.PAUNT));
            pAuntsUncles.addAll(getVariableRelatives(proband, RelativeCode.PUNCLE));
            personList = addAllChildren(pAuntsUncles);
            break;
        case GRNDAU:
            break;
        case GRNSON:
            break;
        default:
            throw new IllegalArgumentException("Code is not a code of a variable Relative " + code);
        }
        return personList;
    }

    private List<com.fiveamsolutions.hl7.model.Person> getRelativeType(
            Set<? extends com.fiveamsolutions.hl7.model.Person> children, Gender gender) {
        List<com.fiveamsolutions.hl7.model.Person> personList = new ArrayList<com.fiveamsolutions.hl7.model.Person>();
        for (com.fiveamsolutions.hl7.model.Person currPerson : children) {
            if (gender.equals(Gender.MALE)) {
                if (currPerson instanceof Male) {
                    personList.add(currPerson);
                }
            } else {
                if (currPerson instanceof Female) {
                    personList.add(currPerson);
                }
            }

        }
        return personList;
    }

    private List<com.fiveamsolutions.hl7.model.Person> addAllChildren(
            List<com.fiveamsolutions.hl7.model.Person> parents) {
        List<com.fiveamsolutions.hl7.model.Person> children = new ArrayList<com.fiveamsolutions.hl7.model.Person>();
        for (com.fiveamsolutions.hl7.model.Person currPerson : parents) {
            children.addAll(currPerson.getChildren());
        }
        return children;
    }
}