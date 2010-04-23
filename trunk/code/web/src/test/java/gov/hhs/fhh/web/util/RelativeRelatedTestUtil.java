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
package gov.hhs.fhh.web.util;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Gender;
import gov.hhs.fhh.data.LivingStatus;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.TwinStatus;
import gov.hhs.fhh.data.Weight;
import gov.hhs.fhh.data.WeightUnit;

/**
 * @author lpower
 *
 */
public class RelativeRelatedTestUtil {

    private final static String MALEGENDERCODE = "MALE";
    private final static String FEMALEGENDERCODE = "FEMALE";
    
    /**
     * @param Person to be created as a Relative.
     * @param RelativeCode for relative type to be created.
     * @return Relative.
     */
    public static Relative createRelative(Person p, RelativeCode rc) {
        Relative r = new Relative(p,rc);
        r.setLivingStatus(LivingStatus.YES.toString());
        return r;
    }

    /**
     * @param Person to be created as a Relative.
     * @param RelativeCode for relative type to be created.
     * @return Relative.
     */
    public static Relative createDiseasedRelative(Person p, RelativeCode rc, int numDiseases) {
        Relative r = createRelative(p,rc);
        for (int i=0; i<numDiseases;i++) {
            r.getObservations().add(createDisease(i));
        }
        return r;
    }


    /**
     * @param diseaseSelection
     * @return
     */
    public static ClinicalObservation createDisease(int diseaseSelection) {
        ClinicalObservation ci = new ClinicalObservation();
        Disease d = new Disease();
        d.setAppDisplay("DIS"+diseaseSelection);
        d.setDisplayName("DISEASE"+diseaseSelection);
        ci.setDisease(d);
        return ci;
    }

    /**
     * @return Person.
     */
    public static Person createPerson() {
        Person p = new Person();
        p.setName("Name");
        return makePersonAttributes(p);
    }

    /**
     * @param name creates a Person with the name param.
     * @return Person
     */
    public static Person createPersonName(String name) {
        Person p = new Person();
        p.setName(name);
        return makePersonAttributes(p);
    }

    /**
     * @param p Person for whom some attributes will be set.
     */
    private static Person makePersonAttributes(Person p) {
        Date date = new Date();
        p.setDateOfBirth(date);
        p.setWeight(new Weight(112, WeightUnit.US));
        return p;
    }
    
    /**
     * @param p Person for whom some attributes will be set.
     */
    public static Person assignGender(Person p, String genderCode) {
        if (genderCode.equalsIgnoreCase(Gender.FEMALE.toString())) {
            p.setGender(Gender.FEMALE);
        }
        else {
            p.setGender(Gender.MALE);
        }
        return p;
    }


    
    /**
     * @return List of mother, father, brother, and sister Relatives.
     */
    public static List<Relative> createNuclearRelatives() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative mother = createMother();
        relatives.add(mother);
        Relative father = createFather();
        relatives.add(father);
        Relative sister = createRelative(assignGender(createPersonName("sister"),FEMALEGENDERCODE),RelativeCode.NSIS);
        relatives.add(sister);
        Relative brother = createRelative(assignGender(createPersonName("brother"),MALEGENDERCODE), RelativeCode.NBRO);
        relatives.add(brother);
        return relatives;
    }
    
    /**
     * @return List of mother, father, brother, and sister Relatives.
     */
    public static List<Relative> createDiseasedNuclearRelatives() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative mother =  createDiseasedRelative(createPersonName("mother"),RelativeCode.NMTH,1);
        relatives.add(mother);
        Relative father =  createDiseasedRelative(createPersonName("father"),RelativeCode.NFTH,5);
        relatives.add(father);
        Relative sister =  createDiseasedRelative(createPersonName("sister"),RelativeCode.NSIS,2);
        relatives.add(sister);
        Relative brother =  createDiseasedRelative(createPersonName("brother"),RelativeCode.NBRO,4);
        relatives.add(brother);
        return relatives;
    }

    
    /**
     * @return List of brother, and sister with children for each.
     */
    public static List<Relative> createSiblingsAndKids() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative sister = createRelative(assignGender(createPersonName("sister"),FEMALEGENDERCODE),RelativeCode.NSIS);
        relatives.add(sister);
        Relative niece1 = createRelative(assignGender(createPersonName("s1-kid1"),FEMALEGENDERCODE),RelativeCode.NIECE);
        niece1.setMother(sister);
        relatives.add(niece1);
        Relative niece2 = createRelative(assignGender(createPersonName("s1-kid2"),FEMALEGENDERCODE),RelativeCode.NIECE);
        niece2.setMother(sister);
        relatives.add(niece2);
        Relative nephew1 = createRelative(assignGender(createPersonName("s1-kid3"),MALEGENDERCODE),RelativeCode.NEPHEW);
        nephew1.setMother(sister);
        relatives.add(nephew1);

        Relative brother = createRelative(assignGender(createPersonName("brother"),MALEGENDERCODE), RelativeCode.NBRO);
        relatives.add(brother);
        Relative nephew2 = createRelative(assignGender(createPersonName("b1-kid"),MALEGENDERCODE),RelativeCode.NEPHEW);
        nephew2.setFather(brother);
        relatives.add(nephew2);

        return relatives;
    }
    

    
    /**
     * @return List of brother, and sister Relatives.
     */
    public static List<Relative> createSiblings() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative sister = createRelative(assignGender(createPersonName("sister"),FEMALEGENDERCODE),RelativeCode.NSIS);
        relatives.add(sister);
        Relative brother = createRelative(assignGender(createPersonName("brother"),MALEGENDERCODE), RelativeCode.NBRO);
        relatives.add(brother);
        Relative brother2 = createRelative(assignGender(createPersonName("brother2"),MALEGENDERCODE), RelativeCode.NBRO);
        relatives.add(brother2);

        return relatives;
    }

    /**
     * @return List of brother, and sister, plus 2 half-siblings for each parent - Relatives.
     */
    public static List<Relative> createSiblingsAndHalfSiblings() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative mother = createMother();
        Relative father = createFather();
        Relative sister = createRelative(assignGender(createPersonName("sister"),FEMALEGENDERCODE),RelativeCode.NSIS);
        relatives.add(sister);
        Relative brother = createRelative(assignGender(createPersonName("brother"),MALEGENDERCODE), RelativeCode.NBRO);
        relatives.add(brother);
        
        // mother's kids (half-siblings)
        Relative hsis1 = createRelative(assignGender(createPersonName("hsis1"),FEMALEGENDERCODE),RelativeCode.HSIS);
        hsis1.setMother(mother);
        relatives.add(hsis1);
        Relative hbro1 = createRelative(assignGender(createPersonName("hbro1"),MALEGENDERCODE), RelativeCode.HBRO);
        hbro1.setMother(mother);
        relatives.add(hbro1);
        
        // father's kids (half-siblings)
        Relative hsis2 = createRelative(assignGender(createPersonName("hsis2"),FEMALEGENDERCODE),RelativeCode.HSIS);
        hsis2.setFather(father);
        relatives.add(hsis2);
        Relative hbro2 = createRelative(assignGender(createPersonName("hbro2"),MALEGENDERCODE), RelativeCode.HBRO);
        hbro2.setFather(father);
        relatives.add(hbro2);

        return relatives;
    }

    /**
     * @return List of brother, and sister, plus 2 half-siblings for each parent with children for each.
     */
    public static List<Relative> createSiblingsAndHalfSiblingsAndKids() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative mother = createMother();
        Relative father = createFather();

        Relative sister = createRelative(assignGender(createPersonName("sister"),FEMALEGENDERCODE),RelativeCode.NSIS);
        relatives.add(sister);
        Relative niece1 = createRelative(assignGender(createPersonName("s1-kid1"),FEMALEGENDERCODE),RelativeCode.NIECE);
        niece1.setMother(sister);
        relatives.add(niece1);
        Relative niece2 = createRelative(assignGender(createPersonName("s1-kid2"),FEMALEGENDERCODE),RelativeCode.NIECE);
        niece2.setMother(sister);
        relatives.add(niece2);
        Relative nephew1 = createRelative(assignGender(createPersonName("s1-kid3"),MALEGENDERCODE),RelativeCode.NEPHEW);
        nephew1.setMother(sister);
        relatives.add(nephew1);

        Relative brother = createRelative(assignGender(createPersonName("brother"),MALEGENDERCODE), RelativeCode.NBRO);
        relatives.add(brother);
        Relative nephew2 = createRelative(assignGender(createPersonName("b1-kid"),MALEGENDERCODE),RelativeCode.NEPHEW);
        nephew2.setFather(brother);
        relatives.add(nephew2);

        // mother's kids (half-siblings) and their kids
        Relative hsis1 = createRelative(assignGender(createPersonName("hsis1"),FEMALEGENDERCODE),RelativeCode.HSIS);
        hsis1.setMother(mother);
        relatives.add(hsis1);
        Relative hniece = createRelative(assignGender(createPersonName("hsis1-kid1"),MALEGENDERCODE),RelativeCode.NEPHEW);
        hniece.setMother(hsis1);
        relatives.add(hniece);
        Relative hbro1 = createRelative(assignGender(createPersonName("hbro1"),MALEGENDERCODE), RelativeCode.HBRO);
        hbro1.setMother(mother);
        relatives.add(hbro1);
        
        // father's kids (half-siblings) and their kids
        Relative hsis2 = createRelative(assignGender(createPersonName("hsis2"),FEMALEGENDERCODE),RelativeCode.HSIS);
        hsis2.setFather(father);
        relatives.add(hsis2);
        Relative hbro2 = createRelative(assignGender(createPersonName("hbro2"),MALEGENDERCODE), RelativeCode.HBRO);
        hbro2.setFather(father);
        Relative hnephew = createRelative(assignGender(createPersonName("hbro2-kid1"),MALEGENDERCODE),RelativeCode.NEPHEW);
        hnephew.setFather(hbro2);
        relatives.add(hnephew);
        relatives.add(hbro2);

        return relatives;
    }
    
    /**
     * @return List of brother, and sister, plus 2 half-siblings for each parent with children for each.
     */
    public static List<Relative> createParentsSiblingsAndHalfSiblingsAndKids() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative mother = createMother();
        Relative father = createFather();
        relatives.add(mother);
        relatives.add(father);

        Relative sister = createRelative(assignGender(createPersonName("sister"),FEMALEGENDERCODE),RelativeCode.NSIS);
        Relative niece1 = createRelative(assignGender(createPersonName("s1-kid1"),FEMALEGENDERCODE),RelativeCode.NIECE);
        niece1.setMother(sister);
        relatives.add(niece1);
        Relative niece2 = createRelative(assignGender(createPersonName("s1-kid2"),FEMALEGENDERCODE),RelativeCode.NIECE);
        niece2.setMother(sister);
        relatives.add(niece2);
        Relative nephew1 = createRelative(assignGender(createPersonName("s1-kid3"),MALEGENDERCODE),RelativeCode.NEPHEW);
        nephew1.setMother(sister);
        relatives.add(nephew1);
        relatives.add(sister);

        Relative brother = createRelative(assignGender(createPersonName("brother"),MALEGENDERCODE), RelativeCode.NBRO);
        relatives.add(brother);
        Relative nephew2 = createRelative(assignGender(createPersonName("b1-kid"),MALEGENDERCODE),RelativeCode.NEPHEW);
        nephew2.setFather(brother);
        relatives.add(nephew2);
        Relative nephew3 = createRelative(assignGender(createPersonName("b1-kid2"),MALEGENDERCODE),RelativeCode.NEPHEW);
        nephew3.setFather(brother);
        relatives.add(nephew3);

        // mother's kids (half-siblings) and their kids
        Relative hsis1 = createRelative(assignGender(createPersonName("hsis1"),FEMALEGENDERCODE),RelativeCode.HSIS);
        hsis1.setMother(mother);
        relatives.add(hsis1);
        Relative hniece = createRelative(assignGender(createPersonName("hsis1-kid1"),MALEGENDERCODE),RelativeCode.NEPHEW);
        hniece.setMother(hsis1);
        relatives.add(hniece);
        Relative hbro1 = createRelative(assignGender(createPersonName("hbro1"),MALEGENDERCODE), RelativeCode.HBRO);
        hbro1.setMother(mother);
        relatives.add(hbro1);
        
        // father's kids (half-siblings) and their kids
        Relative hsis2 = createRelative(assignGender(createPersonName("hsis2"),FEMALEGENDERCODE),RelativeCode.HSIS);
        hsis2.setFather(father);
        relatives.add(hsis2);
        Relative hbro2 = createRelative(assignGender(createPersonName("hbro2"),MALEGENDERCODE), RelativeCode.HBRO);
        hbro2.setFather(father);
        Relative hnephew = createRelative(assignGender(createPersonName("hbro2-kid1"),MALEGENDERCODE),RelativeCode.NEPHEW);
        hnephew.setFather(hbro2);
        relatives.add(hnephew);
        Relative hnephew2 = createRelative(assignGender(createPersonName("hbro2-kid2"),MALEGENDERCODE),RelativeCode.NEPHEW);
        hnephew2.setFather(hbro2);
        relatives.add(hnephew2);
        relatives.add(hbro2);

        return relatives;
    }

    /**
     * @return List of paternal and maternal aunt and uncle Relatives.
     */
    public static List<Relative> createAuntsUncles() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative paunt = createRelative(assignGender(createPersonName("paunt1"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt);
        Relative paunt2 = createRelative(assignGender(createPersonName("paunt2"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt2);
        Relative paunt3 = createRelative(assignGender(createPersonName("paunt3"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt3);
        Relative puncle = createRelative(assignGender(createPersonName("puncle1"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle);
        Relative puncle2 = createRelative(assignGender(createPersonName("puncle2"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle2);
        Relative puncle3 = createRelative(assignGender(createPersonName("puncle3"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle3);
        Relative maunt = createRelative(assignGender(createPersonName("maunt1"),FEMALEGENDERCODE),RelativeCode.MAUNT);
        relatives.add(maunt);
        Relative maunt2 = createRelative(assignGender(createPersonName("maunt2"),FEMALEGENDERCODE),RelativeCode.MAUNT);
        relatives.add(maunt2);
        Relative muncle = createRelative(assignGender(createPersonName("muncle1"),MALEGENDERCODE),RelativeCode.MUNCLE);
        relatives.add(muncle);
        Relative muncle2 = createRelative(assignGender(createPersonName("muncle2"),MALEGENDERCODE),RelativeCode.MUNCLE);
        relatives.add(muncle2);
        return relatives;
    }
    
    /**
     * @return List of paternal and maternal aunt and uncle Relatives.
     */
    public static Relative makeTwin(Relative a) {
        a.setTwinStatus(TwinStatus.FRATERNAL);
        return a;
    }

    /**
     * @return List of paternal and maternal aunt and uncle Relatives.
     */
    public static List<Relative> createAuntUncleCousins() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative paunt = createRelative(assignGender(createPersonName("paunt1"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt);
        Relative pc1 = createRelative(assignGender(createPersonName("p1-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc1.setMother(paunt);
        relatives.add(pc1);
        Relative pc2 = createRelative(assignGender(createPersonName("p1-kid2"),MALEGENDERCODE), RelativeCode.PCOUSN);
        pc2.setMother(paunt);
        relatives.add(pc2);

        Relative muncle2 = createRelative(assignGender(createPersonName("muncle2"),MALEGENDERCODE),RelativeCode.MUNCLE);
        relatives.add(muncle2);
        Relative mc21 = createRelative(assignGender(createPersonName("m2-kid1"),MALEGENDERCODE), RelativeCode.MCOUSN);
        mc21.setFather(muncle2);
        relatives.add(mc21);
        Relative mc22 = createRelative(assignGender(createPersonName("m2-kid2"),MALEGENDERCODE), RelativeCode.MCOUSN);
        mc22.setFather(muncle2);
        relatives.add(mc22);

        return relatives;
    }

    /**
     * @return List of paternal and maternal aunt and uncle Relatives.
     */
    public static List<Relative> createAuntsUnclesCousins() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative paunt = createRelative(assignGender(createPersonName("paunt1"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt);
        Relative pc1 = createRelative(assignGender(createPersonName("p1-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc1.setMother(paunt);
        relatives.add(pc1);
        Relative pc2 = createRelative(assignGender(createPersonName("p1-kid2"),MALEGENDERCODE), RelativeCode.PCOUSN);
        pc2.setMother(paunt);
        relatives.add(pc2);

        Relative paunt2 = createRelative(assignGender(createPersonName("paunt2"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt2);
        Relative pc3 = createRelative(assignGender(createPersonName("p2-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc3.setMother(paunt2);
        relatives.add(pc3);
        Relative pc4 = createRelative(assignGender(createPersonName("p2-kid2"),MALEGENDERCODE), RelativeCode.PCOUSN);
        pc4.setMother(paunt2);
        relatives.add(pc4);
        Relative pc5 = createRelative(assignGender(createPersonName("p2-kid3"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc5.setMother(paunt2);
        relatives.add(pc5);
        
        Relative paunt3 = createRelative(assignGender(createPersonName("paunt3"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt3);
        Relative pc6 = createRelative(assignGender(createPersonName("p3-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc6.setMother(paunt3);
        relatives.add(pc6);

        Relative puncle = createRelative(assignGender(createPersonName("puncle1"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle);
        Relative puncle2 = createRelative(assignGender(createPersonName("puncle2"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle2);
        Relative puncle3 = createRelative(assignGender(createPersonName("puncle3"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle3);

        Relative maunt = createRelative(assignGender(createPersonName("maunt1"),FEMALEGENDERCODE),RelativeCode.MAUNT);
        relatives.add(maunt);
        Relative maunt2 = createRelative(assignGender(createPersonName("maunt2"),FEMALEGENDERCODE),RelativeCode.MAUNT);
        relatives.add(maunt2);
        Relative muncle = createRelative(assignGender(createPersonName("muncle1"),MALEGENDERCODE),RelativeCode.MUNCLE);
        relatives.add(muncle);

        Relative muncle2 = createRelative(assignGender(createPersonName("muncle2"),MALEGENDERCODE),RelativeCode.MUNCLE);
        relatives.add(muncle2);
        Relative mc21 = createRelative(assignGender(createPersonName("m2-kid1"),MALEGENDERCODE), RelativeCode.MCOUSN);
        mc21.setFather(muncle2);
        relatives.add(mc21);
        Relative mc22 = createRelative(assignGender(createPersonName("m2-kid2"),MALEGENDERCODE), RelativeCode.MCOUSN);
        mc22.setFather(muncle2);
        relatives.add(mc22);

        return relatives;
    }

    /**
     * @return List of paternal and maternal aunt and uncle Relatives.
     */
    public static List<Relative> createAuntsUnclesCousinsWithoutGender() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative paunt = createRelative(assignGender(createPersonName("paunt1"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt);
        Relative pc1 = createRelative(assignGender(createPersonName("p1-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc1.setMother(paunt);
        relatives.add(pc1);
        Relative pc2 = createRelative(createPersonName("p1-kid2"), RelativeCode.PCOUSN);
        pc2.setMother(paunt);
        relatives.add(pc2);

        Relative paunt2 = createRelative(assignGender(createPersonName("paunt2"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt2);
        Relative pc3 = createRelative(assignGender(createPersonName("p2-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc3.setMother(paunt2);
        relatives.add(pc3);
        Relative pc4 = createRelative(createPersonName("p2-kid2"), RelativeCode.PCOUSN);
        pc4.setMother(paunt2);
        relatives.add(pc4);
        Relative pc5 = createRelative(createPersonName("p2-kid3"), RelativeCode.PCOUSN);
        pc5.setMother(paunt2);
        relatives.add(pc5);
        
        Relative paunt3 = createRelative(assignGender(createPersonName("paunt3"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt3);
        Relative pc6 = createRelative(createPersonName("p3-kid1"), RelativeCode.PCOUSN);
        pc6.setMother(paunt3);
        relatives.add(pc6);

        Relative muncle2 = createRelative(assignGender(createPersonName("muncle2"),MALEGENDERCODE),RelativeCode.MUNCLE);
        relatives.add(muncle2);
        Relative mc21 = createRelative(createPersonName("m2-kid1"), RelativeCode.MCOUSN);
        mc21.setFather(muncle2);
        relatives.add(mc21);
        Relative mc22 = createRelative(createPersonName("m2-kid2"), RelativeCode.MCOUSN);
        mc22.setFather(muncle2);
        relatives.add(mc22);

        return relatives;
    }
    
    /**
     * @return List of paternal and maternal aunt and uncle Relatives.
     */
    public static List<Relative> createAuntsUnclesCousinsWithPaternalTwin() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative paunt = createRelative(assignGender(createPersonName("paunt1"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt);
        Relative pc1 = createRelative(assignGender(createPersonName("p1-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        makeTwin(pc1);
        pc1.setMother(paunt);
        relatives.add(pc1);
        Relative pc2 = createRelative(assignGender(createPersonName("p1-kid2"),MALEGENDERCODE), RelativeCode.PCOUSN);
        makeTwin(pc2);
        pc2.setMother(paunt);
        relatives.add(pc2);

        Relative paunt2 = createRelative(assignGender(createPersonName("paunt2"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        makeTwin(paunt2);
        relatives.add(paunt2);
        Relative pc3 = createRelative(assignGender(createPersonName("p2-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc3.setMother(paunt2);
        relatives.add(pc3);
        Relative pc4 = createRelative(assignGender(createPersonName("p2-kid2"),MALEGENDERCODE), RelativeCode.PCOUSN);
        pc4.setMother(paunt2);
        relatives.add(pc4);
        Relative pc5 = createRelative(assignGender(createPersonName("p2-kid3"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc5.setMother(paunt2);
        relatives.add(pc5);
        
        Relative paunt3 = createRelative(assignGender(createPersonName("paunt3"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        makeTwin(paunt3);
        relatives.add(paunt3);
        Relative pc6 = createRelative(assignGender(createPersonName("p3-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc6.setMother(paunt3);
        relatives.add(pc6);

        Relative puncle = createRelative(assignGender(createPersonName("puncle1"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle);
        Relative puncle2 = createRelative(assignGender(createPersonName("puncle2"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle2);
        Relative puncle3 = createRelative(assignGender(createPersonName("puncle3"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle3);

        Relative maunt = createRelative(assignGender(createPersonName("maunt1"),FEMALEGENDERCODE),RelativeCode.MAUNT);
        relatives.add(maunt);
        Relative maunt2 = createRelative(assignGender(createPersonName("maunt2"),FEMALEGENDERCODE),RelativeCode.MAUNT);
        relatives.add(maunt2);
        Relative muncle = createRelative(assignGender(createPersonName("muncle1"),MALEGENDERCODE),RelativeCode.MUNCLE);
        relatives.add(muncle);

        Relative muncle2 = createRelative(assignGender(createPersonName("muncle2"),MALEGENDERCODE),RelativeCode.MUNCLE);
        relatives.add(muncle2);
        Relative mc21 = createRelative(assignGender(createPersonName("m2-kid1"),MALEGENDERCODE), RelativeCode.MCOUSN);
        mc21.setFather(muncle2);
        relatives.add(mc21);
        Relative mc22 = createRelative(assignGender(createPersonName("m2-kid2"),MALEGENDERCODE), RelativeCode.MCOUSN);
        mc22.setFather(muncle2);
        relatives.add(mc22);

        return relatives;
    }
    
    /**
     * @return List of paternal and maternal aunt and uncle Relatives.
     */
    public static List<Relative> createAuntsUnclesCousinsWithMaternalTwin() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative paunt = createRelative(assignGender(createPersonName("paunt1"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt);
        Relative pc1 = createRelative(assignGender(createPersonName("p1-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc1.setMother(paunt);
        relatives.add(pc1);
        Relative pc2 = createRelative(assignGender(createPersonName("p1-kid2"),MALEGENDERCODE), RelativeCode.PCOUSN);
        pc2.setMother(paunt);
        relatives.add(pc2);

        Relative paunt2 = createRelative(assignGender(createPersonName("paunt2"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        relatives.add(paunt2);
        Relative pc3 = createRelative(assignGender(createPersonName("p2-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc3.setMother(paunt2);
        relatives.add(pc3);
        Relative pc4 = createRelative(assignGender(createPersonName("p2-kid2"),MALEGENDERCODE), RelativeCode.PCOUSN);
        pc4.setMother(paunt2);
        relatives.add(pc4);
        Relative pc5 = createRelative(assignGender(createPersonName("p2-kid3"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc5.setMother(paunt2);
        relatives.add(pc5);
        
        Relative paunt3 = createRelative(assignGender(createPersonName("paunt3"),FEMALEGENDERCODE),RelativeCode.PAUNT);
        makeTwin(paunt3);
        relatives.add(paunt3);
        Relative pc6 = createRelative(assignGender(createPersonName("p3-kid1"),FEMALEGENDERCODE), RelativeCode.PCOUSN);
        pc6.setMother(paunt3);
        relatives.add(pc6);

        Relative puncle = createRelative(assignGender(createPersonName("puncle1"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle);
        Relative puncle2 = createRelative(assignGender(createPersonName("puncle2"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle2);
        Relative puncle3 = createRelative(assignGender(createPersonName("puncle3"),MALEGENDERCODE),RelativeCode.PUNCLE);
        relatives.add(puncle3);

        Relative maunt = createRelative(assignGender(createPersonName("maunt1"),FEMALEGENDERCODE),RelativeCode.MAUNT);
        relatives.add(maunt);
        Relative maunt2 = createRelative(assignGender(createPersonName("maunt2"),FEMALEGENDERCODE),RelativeCode.MAUNT);
        relatives.add(maunt2);
        Relative muncle = createRelative(assignGender(createPersonName("muncle1"),MALEGENDERCODE),RelativeCode.MUNCLE);
        makeTwin(muncle);
        relatives.add(muncle);

        Relative muncle2 = createRelative(assignGender(createPersonName("muncle2"),MALEGENDERCODE),RelativeCode.MUNCLE);
        makeTwin(muncle2);
        relatives.add(muncle2);
        Relative mc21 = createRelative(assignGender(createPersonName("m2-kid1"),MALEGENDERCODE), RelativeCode.MCOUSN);
        mc21.setFather(muncle2);
        relatives.add(mc21);
        Relative mc22 = createRelative(assignGender(createPersonName("m2-kid2"),MALEGENDERCODE), RelativeCode.MCOUSN);
        mc22.setFather(muncle2);
        relatives.add(mc22);

        return relatives;
    }

    /**
     * @return List of children and grandchildren.
     */
    public static List<Relative> createMyKidsGrandkids() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative dau1 = createRelative(assignGender(createPersonName("da1"),FEMALEGENDERCODE),RelativeCode.DAU);
        relatives.add(dau1);
        Relative pc1 = createRelative(assignGender(createPersonName("d1-gkid1"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        pc1.setMother(dau1);
        relatives.add(pc1);
        Relative pc2 = createRelative(assignGender(createPersonName("d1-gkid2"),MALEGENDERCODE), RelativeCode.GRNSON);
        pc2.setMother(dau1);
        relatives.add(pc2);

        Relative dau2 = createRelative(assignGender(createPersonName("dau2"),FEMALEGENDERCODE),RelativeCode.DAU);
        relatives.add(dau2);
        Relative pc3 = createRelative(assignGender(createPersonName("d2-kid1"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        pc3.setMother(dau2);
        relatives.add(pc3);
        Relative pc4 = createRelative(assignGender(createPersonName("d2-kid2"),MALEGENDERCODE), RelativeCode.GRNSON);
        pc4.setMother(dau2);
        relatives.add(pc4);
        Relative pc5 = createRelative(assignGender(createPersonName("d2-kid3"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        pc5.setMother(dau2);
        relatives.add(pc5);
        
        Relative dau3 = createRelative(assignGender(createPersonName("dau3"),FEMALEGENDERCODE),RelativeCode.DAU);
        makeTwin(dau3);
        relatives.add(dau3);
        Relative pc6 = createRelative(assignGender(createPersonName("d3-kid1"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        pc6.setMother(dau3);
        relatives.add(pc6);

        Relative son = createRelative(assignGender(createPersonName("son1"),MALEGENDERCODE),RelativeCode.SON);
        relatives.add(son);
        Relative son2 = createRelative(assignGender(createPersonName("son2"),MALEGENDERCODE),RelativeCode.SON);
        relatives.add(son2);
        Relative son3 = createRelative(assignGender(createPersonName("son3"),MALEGENDERCODE),RelativeCode.SON);
        relatives.add(son3);
        Relative mc21 = createRelative(assignGender(createPersonName("s3-kid1"),MALEGENDERCODE), RelativeCode.GRNSON);
        mc21.setFather(son3);
        relatives.add(mc21);
        Relative mc22 = createRelative(assignGender(createPersonName("s3-kid2"),MALEGENDERCODE), RelativeCode.GRNSON);
        mc22.setFather(son3);
        relatives.add(mc22);

        return relatives;
    }
    

    /**
     * @return List of children and grandchildren.
     */
    public static List<Relative> createMyKidsGrandkidsTwins() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative dau1 = createRelative(assignGender(createPersonName("da1"),FEMALEGENDERCODE),RelativeCode.DAU);
        relatives.add(dau1);
        Relative pc1 = createRelative(assignGender(createPersonName("d1-gkid1"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        pc1.setMother(dau1);
        relatives.add(pc1);
        Relative pc2 = createRelative(assignGender(createPersonName("d1-gkid2"),MALEGENDERCODE), RelativeCode.GRNSON);
        pc2.setMother(dau1);
        relatives.add(pc2);

        Relative dau2 = createRelative(assignGender(createPersonName("dau2"),FEMALEGENDERCODE),RelativeCode.DAU);
        makeTwin(dau2);
        relatives.add(dau2);
        Relative pc3 = createRelative(assignGender(createPersonName("d2-kid1"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        pc3.setMother(dau2);
        relatives.add(pc3);
        Relative pc4 = createRelative(assignGender(createPersonName("d2-kid2"),MALEGENDERCODE), RelativeCode.GRNSON);
        pc4.setMother(dau2);
        relatives.add(pc4);
        Relative pc5 = createRelative(assignGender(createPersonName("d2-kid3"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        pc5.setMother(dau2);
        relatives.add(pc5);
        
        Relative dau3 = createRelative(assignGender(createPersonName("dau3"),FEMALEGENDERCODE),RelativeCode.DAU);
        makeTwin(dau3);
        relatives.add(dau3);
        Relative pc6 = createRelative(assignGender(createPersonName("d3-kid1"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        pc6.setMother(dau3);
        relatives.add(pc6);

        Relative son = createRelative(assignGender(createPersonName("son1"),MALEGENDERCODE),RelativeCode.SON);
        relatives.add(son);
        Relative son2 = createRelative(assignGender(createPersonName("son2"),MALEGENDERCODE),RelativeCode.SON);
        makeTwin(son2);
        relatives.add(son2);
        Relative son3 = createRelative(assignGender(createPersonName("son3"),MALEGENDERCODE),RelativeCode.SON);
        relatives.add(son3);
        Relative gd1 = createRelative(assignGender(createPersonName("s3-dau1"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        gd1.setFather(son3);
        relatives.add(gd1);
        Relative gd2 = createRelative(assignGender(createPersonName("s3-dau2"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        gd2.setFather(son3);
        relatives.add(gd2);
        Relative gd3 = createRelative(assignGender(createPersonName("s3-dau3"),FEMALEGENDERCODE), RelativeCode.GRNDAU);
        makeTwin(gd3);
        gd3.setFather(son3);
        relatives.add(gd3);
        Relative mc21 = createRelative(assignGender(createPersonName("s3-kid1"),MALEGENDERCODE), RelativeCode.GRNSON);
        mc21.setFather(son3);
        relatives.add(mc21);
        Relative mc22 = createRelative(assignGender(createPersonName("s3-kid2"),MALEGENDERCODE), RelativeCode.GRNSON);
        makeTwin(mc22);
        mc22.setFather(son3);
        relatives.add(mc22);

        return relatives;
    }
    
    /**
     * @return List of grandparent Relatives.
     */
    public static List<Relative> createGrands() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative mgrmth = createRelative(createPersonName("mgrmth"),RelativeCode.MGRMTH);
        relatives.add(mgrmth);
        Relative mgrfth = createRelative(createPersonName("mgrfth"),RelativeCode.MGRFTH);
        relatives.add(mgrfth);
        Relative pgrmth = createRelative(createPersonName("pgrmth"),RelativeCode.PGRMTH);
        relatives.add(pgrmth);
        Relative pgrfth = createRelative(createPersonName("pgrfth"),RelativeCode.PGRFTH);
        relatives.add(pgrfth);
        return relatives;
    }

    /**
     * @return mother Relative.
     */
    public static Relative createMother() {
        return createRelative(assignGender(createPersonName("mother"),FEMALEGENDERCODE), RelativeCode.NMTH);
        
    }
    
    /**
     * @return father Relative.
     */
    public static Relative createFather() {
        return createRelative(assignGender(createPersonName("father"),MALEGENDERCODE), RelativeCode.NFTH);
    }
    
}
