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
package gov.hhs.fhh.test.util;

import gov.hhs.fhh.data.Gender;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.data.Weight;
import gov.hhs.fhh.data.WeightUnit;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author lpower
 *
 */
public class RelativeBranchTestUtil {
    /**
     * @param p Person to be created as a Relative.
     * @param rc RelativeCode for relative type to be created.
     * @return Relative.
     */
    public static Relative createRelative(Person p, RelativeCode rc) {
        Relative r = new Relative(p,rc);
        r.setLivingStatus("true");
        return r;
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
    public static Person assignGender(Person p, Gender gender) {
        p.setGender(gender);
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
        Relative sister = createRelative(assignGender(createPersonName("sister"),Gender.FEMALE),RelativeCode.NSIS);
        relatives.add(sister);
        Relative brother = createRelative(assignGender(createPersonName("brother"),Gender.MALE), RelativeCode.NBRO);
        relatives.add(brother);
        return relatives;
    }

    public static List<Relative> createChildrenAndGrandkids() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative son = createRelative(assignGender(createPersonName("son"),Gender.MALE),RelativeCode.SON);
        relatives.add(son);
        Relative gson1 = createRelative(assignGender(createPersonName("son-son"),Gender.MALE),RelativeCode.GRNSON);
        gson1.setFather(son);
        relatives.add(gson1);
        Relative gd1 = createRelative(assignGender(createPersonName("son-dau"),Gender.FEMALE),RelativeCode.GRNDAU);
        relatives.add(gd1);
        gd1.setFather(son);
        Relative d1 = createRelative(assignGender(createPersonName("dau1"),Gender.FEMALE),RelativeCode.DAU);
        relatives.add(d1);
        Relative gson2 = createRelative(assignGender(createPersonName("dau1-son"),Gender.MALE),RelativeCode.GRNSON);
        relatives.add(gson2);
        gson2.setMother(d1);
        Relative d2 = createRelative(assignGender(createPersonName("dau2"),Gender.FEMALE),RelativeCode.DAU);
        relatives.add(d2);
        Relative gd2 = createRelative(assignGender(createPersonName("dau2-dau"),Gender.FEMALE),RelativeCode.GRNDAU);
        gd2.setMother(d2);
        relatives.add(gd2);
        return relatives;
    }

    /**
     * @return List of brother, and sister, plus 2 half-siblings for each parent with children for each.
     */
    public static List<Relative> createSiblingsAndHalfSiblingsAndKids() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative mother = createMother();
        Relative father = createFather();
        relatives.add(mother);
        relatives.add(father);

        Relative sister = createRelative(assignGender(createPersonName("sister"),Gender.FEMALE),RelativeCode.NSIS);
        relatives.add(sister);
        Relative niece1 = createRelative(assignGender(createPersonName("s1-kid1"),Gender.FEMALE),RelativeCode.NIECE);
        niece1.setMother(sister);
        relatives.add(niece1);
        Relative niece2 = createRelative(assignGender(createPersonName("s1-kid2"),Gender.FEMALE),RelativeCode.NIECE);
        niece2.setMother(sister);
        relatives.add(niece2);
        Relative nephew1 = createRelative(assignGender(createPersonName("s1-kid3"),Gender.MALE),RelativeCode.NEPHEW);
        nephew1.setMother(sister);
        relatives.add(nephew1);

        Relative brother = createRelative(assignGender(createPersonName("brother"),Gender.MALE), RelativeCode.NBRO);
        relatives.add(brother);
        Relative nephew2 = createRelative(assignGender(createPersonName("b1-kid"),Gender.MALE),RelativeCode.NEPHEW);
        nephew2.setFather(brother);
        relatives.add(nephew2);

        // mother's kids (half-siblings) and their kids
        Relative hsis1 = createRelative(assignGender(createPersonName("hsis1"),Gender.FEMALE),RelativeCode.HSIS);
        hsis1.setMother(mother);
        relatives.add(hsis1);
        Relative hniece = createRelative(assignGender(createPersonName("hsis1-kid1"),Gender.MALE),RelativeCode.NEPHEW);
        hniece.setMother(hsis1);
        relatives.add(hniece);
        Relative hbro1 = createRelative(assignGender(createPersonName("hbro1"),Gender.MALE), RelativeCode.HBRO);
        hbro1.setMother(mother);
        relatives.add(hbro1);

        // father's kids (half-siblings) and their kids
        Relative hsis2 = createRelative(assignGender(createPersonName("hsis2"),Gender.FEMALE),RelativeCode.HSIS);
        hsis2.setFather(father);
        relatives.add(hsis2);
        Relative hbro2 = createRelative(assignGender(createPersonName("hbro2"),Gender.MALE), RelativeCode.HBRO);
        hbro2.setFather(father);
        Relative hnephew = createRelative(assignGender(createPersonName("hbro2-kid1"),Gender.MALE),RelativeCode.NEPHEW);
        hnephew.setFather(hbro2);
        relatives.add(hnephew);
        relatives.add(hbro2);

        return relatives;
    }
    /**
     * @return List of paternal and maternal aunt and uncle Relatives.
     */
    public static List<Relative> createAuntsUncles() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative paunt = createRelative(assignGender(createPersonName("paunt1"),Gender.FEMALE),RelativeCode.PAUNT);
        relatives.add(paunt);
        Relative paunt2 = createRelative(assignGender(createPersonName("paunt2"),Gender.FEMALE),RelativeCode.PAUNT);
        relatives.add(paunt2);
        Relative paunt3 = createRelative(assignGender(createPersonName("paunt3"),Gender.FEMALE),RelativeCode.PAUNT);
        relatives.add(paunt3);
        Relative puncle = createRelative(assignGender(createPersonName("puncle1"),Gender.MALE),RelativeCode.PUNCLE);
        relatives.add(puncle);
        Relative puncle2 = createRelative(assignGender(createPersonName("puncle2"),Gender.MALE),RelativeCode.PUNCLE);
        relatives.add(puncle2);
        Relative puncle3 = createRelative(assignGender(createPersonName("puncle3"),Gender.MALE),RelativeCode.PUNCLE);
        relatives.add(puncle3);
        Relative maunt = createRelative(assignGender(createPersonName("maunt1"),Gender.FEMALE),RelativeCode.MAUNT);
        relatives.add(maunt);
        Relative maunt2 = createRelative(assignGender(createPersonName("maunt2"),Gender.FEMALE),RelativeCode.MAUNT);
        relatives.add(maunt2);
        Relative muncle = createRelative(assignGender(createPersonName("muncle1"),Gender.MALE),RelativeCode.MUNCLE);
        relatives.add(muncle);
        Relative muncle2 = createRelative(assignGender(createPersonName("muncle2"),Gender.MALE),RelativeCode.MUNCLE);
        relatives.add(muncle2);
        return relatives;
    }


    /**
     * @return List of paternal and maternal aunt and uncle Relatives.
     */
    public static List<Relative> createAuntsUnclesCousins() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative paunt = createRelative(assignGender(createPersonName("paunt1"),Gender.FEMALE),RelativeCode.PAUNT);
        relatives.add(paunt);
        Relative pc1 = createRelative(assignGender(createPersonName("p1-kid1"),Gender.FEMALE), RelativeCode.PCOUSN);
        pc1.setMother(paunt);
        relatives.add(pc1);
        Relative pc2 = createRelative(assignGender(createPersonName("p1-kid2"),Gender.MALE), RelativeCode.PCOUSN);
        pc2.setMother(paunt);
        relatives.add(pc2);

        Relative paunt2 = createRelative(assignGender(createPersonName("paunt2"),Gender.FEMALE),RelativeCode.PAUNT);
        relatives.add(paunt2);
        Relative pc3 = createRelative(assignGender(createPersonName("p2-kid1"),Gender.FEMALE), RelativeCode.PCOUSN);
        pc3.setMother(paunt2);
        relatives.add(pc3);
        Relative pc4 = createRelative(assignGender(createPersonName("p2-kid2"),Gender.MALE), RelativeCode.PCOUSN);
        pc4.setMother(paunt2);
        relatives.add(pc4);
        Relative pc5 = createRelative(assignGender(createPersonName("p2-kid3"),Gender.FEMALE), RelativeCode.PCOUSN);
        pc5.setMother(paunt2);
        relatives.add(pc5);

        Relative paunt3 = createRelative(assignGender(createPersonName("paunt3"),Gender.FEMALE),RelativeCode.PAUNT);
        relatives.add(paunt3);
        Relative pc6 = createRelative(assignGender(createPersonName("p3-kid1"),Gender.FEMALE), RelativeCode.PCOUSN);
        pc6.setMother(paunt3);
        relatives.add(pc6);

        Relative puncle = createRelative(assignGender(createPersonName("puncle1"),Gender.MALE),RelativeCode.PUNCLE);
        relatives.add(puncle);
        Relative puncle2 = createRelative(assignGender(createPersonName("puncle2"),Gender.MALE),RelativeCode.PUNCLE);
        relatives.add(puncle2);
        Relative puncle3 = createRelative(assignGender(createPersonName("puncle3"),Gender.MALE),RelativeCode.PUNCLE);
        relatives.add(puncle3);

        Relative maunt = createRelative(assignGender(createPersonName("maunt1"),Gender.FEMALE),RelativeCode.MAUNT);
        relatives.add(maunt);
        Relative maunt2 = createRelative(assignGender(createPersonName("maunt2"),Gender.FEMALE),RelativeCode.MAUNT);
        relatives.add(maunt2);
        Relative muncle = createRelative(assignGender(createPersonName("muncle1"),Gender.MALE),RelativeCode.MUNCLE);
        relatives.add(muncle);

        Relative muncle2 = createRelative(assignGender(createPersonName("muncle2"),Gender.MALE),RelativeCode.MUNCLE);
        relatives.add(muncle2);
        Relative mc21 = createRelative(assignGender(createPersonName("m2-kid1"),Gender.MALE), RelativeCode.MCOUSN);
        mc21.setFather(muncle2);
        relatives.add(mc21);
        Relative mc22 = createRelative(assignGender(createPersonName("m2-kid2"),Gender.MALE), RelativeCode.MCOUSN);
        mc22.setFather(muncle2);
        relatives.add(mc22);

        return relatives;
    }


    /**
     * @return List of grandparent Relatives.
     */
    public static List<Relative> createGrands() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative mgrmth = createRelative(assignGender(createPersonName("mgrmth"),Gender.FEMALE),RelativeCode.MGRMTH);
        relatives.add(mgrmth);
        Relative mgrfth = createRelative(assignGender(createPersonName("mgrfth"),Gender.MALE),RelativeCode.MGRFTH);
        relatives.add(mgrfth);
        Relative pgrmth = createRelative(assignGender(createPersonName("pgrmth"),Gender.FEMALE),RelativeCode.PGRMTH);
        relatives.add(pgrmth);
        Relative pgrfth = createRelative(assignGender(createPersonName("pgrfth"),Gender.MALE),RelativeCode.PGRFTH);
        relatives.add(pgrfth);
        return relatives;
    }

    /**
     * @return List of grandparent Relatives.
     */
    public static List<Relative> createGrandsDeadGramps() {
        List<Relative> relatives = new ArrayList<Relative>();
        Relative mgrmth = createRelative(assignGender(createPersonName("mgrmth"),Gender.FEMALE),RelativeCode.MGRMTH);
        relatives.add(mgrmth);
        Relative mgrfth = createRelative(assignGender(createPersonName("mgrfth"),Gender.MALE),RelativeCode.MGRFTH);
        mgrfth.setLivingStatus("NO");
        relatives.add(mgrfth);
        Relative pgrmth = createRelative(assignGender(createPersonName("pgrmth"),Gender.FEMALE),RelativeCode.PGRMTH);
        relatives.add(pgrmth);
        Relative pgrfth = createRelative(assignGender(createPersonName("pgrfth"),Gender.MALE),RelativeCode.PGRFTH);
        pgrfth.setLivingStatus("NO");
        relatives.add(pgrfth);
        return relatives;
    }

    /**
     * @return mother Relative.
     */
    public static Relative createMother() {
        return createRelative(assignGender(createPersonName("mother"),Gender.FEMALE), RelativeCode.NMTH);

    }

    /**
     * @return father Relative.
     */
    public static Relative createFather() {
        return createRelative(assignGender(createPersonName("father"),Gender.MALE), RelativeCode.NFTH);
    }

}
