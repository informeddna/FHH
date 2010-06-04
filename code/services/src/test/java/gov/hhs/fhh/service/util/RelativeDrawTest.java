package gov.hhs.fhh.service.util;

import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;
import gov.hhs.fhh.web.util.RelativeRelatedTestUtil;

import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.mfhp.TwinStatus;


public class RelativeDrawTest {
    @Test
    public void testBasicFamily() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        //selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicFamily");
    }

    
    @Test
    public void testBasicFamilyNoNames() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(RelativeRelatedTestUtil.createPersonName("grampy"), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(RelativeRelatedTestUtil.createPersonName("mumsy"), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(RelativeRelatedTestUtil.createPersonName("papa"), RelativeCode.NFTH));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);
        selfDraw.setShowNames(false);

        //selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicFamilyNoNames");
    }

    @Test
    public void testNuclearFamilySiblings() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NBRO));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NSIS));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicFamilySiblings");
    }


    @Test
    public void testNuclearFamilyTwinSiblings() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "male");
        self.setTwinStatus(TwinStatus.FRATERNAL);
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        Relative bro = RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NBRO);
        bro.setTwinStatus(TwinStatus.FRATERNAL);
        rels.add(bro);
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NSIS));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicFamilyTwinSiblings");
    }


    @Test
    public void testNuclearFamilyTwinSiblings2() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "male");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NBRO));
        Relative bro = RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NBRO);
        bro.setTwinStatus(TwinStatus.FRATERNAL);
        rels.add(bro);
        Relative sis = RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NSIS);
        sis.setTwinStatus(TwinStatus.FRATERNAL);
        rels.add(sis);
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NSIS));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicFamilyTwinSiblings2");
    }

    @Test
    // tests scenario if only one potential twin is marked as a twin
    public void testNuclearFamilyTwinSibling() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "male");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NBRO));
        Relative bro = RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NBRO);
        bro.setTwinStatus(TwinStatus.FRATERNAL);
        rels.add(bro);
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NSIS));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NSIS));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicFamilyTwinSibling");
    }

    
    @Test
    public void testNuclearFamilyLotsaSiblings() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NBRO));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NSIS));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NBRO));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NBRO));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        //selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicFamilyLotsaSiblings");
    }

    
    @Test
    public void testNuclearWithAuntsUncles() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PAUNT));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PUNCLE));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MAUNT));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MUNCLE));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        //selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicAuntsUncles");
    }

    @Test
    // mom is a twin
    public void testNuclearWithAuntsUnclesMomTwin() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        Relative mom = RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH);
        mom.setTwinStatus(TwinStatus.FRATERNAL);
        rels.add(mom);
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PAUNT));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PUNCLE));
        Relative maunt = RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MAUNT);
        maunt.setTwinStatus(TwinStatus.IDENTICAL);
        rels.add(maunt);
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MUNCLE));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        //selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicAuntsUnclesMomTwin");
    }

    @Test
    // dad is a twin
    public void testNuclearWithAuntsUncleDadTwin() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        Relative dad = RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH);
        dad.setTwinStatus(TwinStatus.IDENTICAL);
        rels.add(dad);
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PAUNT));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PAUNT));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PAUNT));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PUNCLE));
        Relative punc = RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PUNCLE);
        punc.setTwinStatus(TwinStatus.IDENTICAL);
        rels.add(punc);
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PUNCLE));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MAUNT));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MUNCLE));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        //selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicAuntsUnclesDadTwin");
    }

    @Test
    public void testFamilyNiecesNephews() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.addAll(RelativeRelatedTestUtil.createSiblingsAndKids());
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        //selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "basicNieceNephews");
    }
    
    @Test
    public void testFamily() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.addAll(rels.size(), RelativeRelatedTestUtil.createAuntsUnclesCousins());
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        selfDraw.organizeFamilyTree(self);
        //drawPicture(selfDraw, self, "bigFamily");
    }

    @Test
    public void testHalfSiblings() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        // will need to have individual tests for all the below scenarios, including halfsibs with kids
        rels.addAll(RelativeRelatedTestUtil.createParentsSiblingsAndHalfSiblingsAndKids());
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.addAll(rels.size(), RelativeRelatedTestUtil.createAuntsUnclesCousins());
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        selfDraw.organizeFamilyTree(self);
//        drawPicture(selfDraw, self, "halfSibs");
    }
    
    @Test
    public void testMondoFamily() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        // will need to have individual tests for all the below scenarios, including halfsibs with kids
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.addAll(RelativeRelatedTestUtil.createParentsSiblingsAndHalfSiblingsAndKids());
        rels.addAll(RelativeRelatedTestUtil.createMyKidsGrandkids());
        rels.addAll(rels.size(), RelativeRelatedTestUtil.createAuntsUnclesCousins());
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

//        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "mondoFamily");
    }

    @Test
    public void testAuntUncleCousins() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.addAll(RelativeRelatedTestUtil.createAuntUncleCousins());
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

//        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "auntUncleCousins");
    }

    
    @Test
    public void testAuntsUnclesCousins() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.addAll(RelativeRelatedTestUtil.createAuntsUnclesCousins());
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

//        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "auntsUnclesCousins");
    }

    
    @Test
    public void testBigFamily() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.addAll(RelativeRelatedTestUtil.createParentsSiblingsAndHalfSiblingsAndKids());
        rels.addAll(RelativeRelatedTestUtil.createMyKidsGrandkids());
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

//        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "bigFamily");
    }
    
    @Test
    public void testFamilyProbandGrandkids() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.addAll(RelativeRelatedTestUtil.createMyKidsGrandkids());
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

//        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "probandGrandkids");
    }

    @Test
    public void testFamilyProbandGrandkidsTwins() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.addAll(RelativeRelatedTestUtil.createMyKidsGrandkidsTwins());
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

//        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "probandGrandkidsTwins");
    }

    
    @Test
    public void testFamilyProbandGrandkidsNoNames() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.addAll(RelativeRelatedTestUtil.createMyKidsGrandkids());
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setShowNames(false);
        selfDraw.setCodeEnum(RelativeCode.SELF);

//        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "probandGrandkidsNoNames");
    }

    @Test
    public void testFamilyWithTwins() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();
        rels.addAll(RelativeRelatedTestUtil.createNuclearRelatives());
        self = setMotherAndFather(self);
        rels.addAll(RelativeRelatedTestUtil.createGrands());
        rels.addAll(RelativeRelatedTestUtil.createAuntsUnclesCousinsWithPaternalTwin());
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        drawPicture(selfDraw, self, "withTwins");
    }
    


    @Test
    public void testUngenderedCousin() throws Exception {

        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        self.setFather(RelativeRelatedTestUtil.createFather());
        self.setMother(RelativeRelatedTestUtil.createMother());
        List<Relative> rels = new ArrayList<Relative>();
        rels.addAll(RelativeRelatedTestUtil.createParentsSiblingsAndHalfSiblingsAndKids());
        rels.addAll(rels.size(), RelativeRelatedTestUtil.createAuntsUnclesCousinsWithoutGender());
        rels.addAll(rels.size(), RelativeRelatedTestUtil.createGrands());
        self.setRelatives(rels);

        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        drawPicture(selfDraw, self, "ungenderedCousins");
    }



    
    @Test
    public void testMixedBag() throws Exception {
        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        self.setTwinStatus(TwinStatus.FRATERNAL);
        List<Relative> rels = new ArrayList<Relative>();
        
        Relative nannie = RelativeRelatedTestUtil.createRelative(RelativeRelatedTestUtil.createPersonName("nannie"), RelativeCode.PGRMTH);
        ClinicalObservation ci = new ClinicalObservation();
        Disease d = new Disease();
        d.setOriginalText("Nannie Disease");
        ci.setDisease(d);
        ci.setAgeRange(AgeRangeEnum.THIRTIES);
        nannie.setAgeAtDeath(AgeRangeEnum.SIXTIES);
        nannie.setCauseOfDeath(d);
        nannie.getObservations().add(ci);
        rels.add(nannie);
        
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NSIS));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MUNCLE));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PAUNT));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PUNCLE));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PUNCLE));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PUNCLE));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PUNCLE));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.DAU));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.SON));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        selfDraw.organizeFamilyTree(self);
        //drawPicture(selfDraw, self, "mixed");


    }

    
    @Test
    public void testNuclearDiseaseDraw() throws Exception {
        Person self = RelativeRelatedTestUtil.assignGender(RelativeRelatedTestUtil.createPersonName("self"), "female");
        List<Relative> rels = new ArrayList<Relative>();

        rels.addAll(RelativeRelatedTestUtil.createDiseasedNuclearRelatives());
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        self.setRelatives(rels);
        
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setCodeEnum(RelativeCode.SELF);

        //selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "diseasedNuclear");


    }

    
    @Test
    public void testNuclearDiseaseHighlight() throws Exception {
        Person self = RelativeRelatedTestUtil.createDiseasedRelative(RelativeRelatedTestUtil.createPersonName("self"),RelativeCode.SELF,1);
        List<Relative> rels = new ArrayList<Relative>();

        ClinicalObservation ci = RelativeRelatedTestUtil.createDisease(1);
        Disease d = ci.getDisease();
        
        rels.addAll(RelativeRelatedTestUtil.createDiseasedNuclearRelatives());
        Relative mom = RelativeRelatedTestUtil.createDiseasedRelative(RelativeRelatedTestUtil.createPersonName("mom"),RelativeCode.NMTH,5);
        rels.add(mom);
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.MGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRFTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.PGRMTH));
        rels.add(RelativeRelatedTestUtil.createRelative(new Person(), RelativeCode.NFTH));
        self.setRelatives(rels);
        RelativeDrawWrapper selfDraw = new RelativeDrawWrapper(new Relative(self));
        selfDraw.setHighlightDisease(d);
        
//        selfDraw.organizeFamilyTree(self);
        drawPicture(selfDraw, self, "diseasedHighlight");

    }
    
    /**
     * @param self
     */
    private Person setMotherAndFather(Person self) {
        for (Relative myrel : self.getRelatives()) {
            if (myrel.getCode().equals(RelativeCode.NMTH.toString())) {
                self.setMother(myrel);
            }
            if (myrel.getCode().equals(RelativeCode.NFTH.toString())) {
                self.setFather(myrel);
            }
        }
        return self;
    }
    
    private void drawPicture(RelativeDraw proband, Person probandPerson, String fileName) throws Exception {
        FileOutputStream file = null;
        try {
            
             // to create test files, indicate the local location where the files should be placed - uncomment above
            File img = new File("." + File.separator + "target" + File.separator + "img_" + fileName + ".png");
            file = new FileOutputStream(img);
            file.write(proband.organizeFamilyTree(probandPerson));
            // uncomment below
        } catch (Exception e) {
            throw new Exception("Error generating test graphic: Unexpected IO exception " + "writing to file "
                    + "goForTest.png" + ", " + e.getMessage());
        }

    }
}
