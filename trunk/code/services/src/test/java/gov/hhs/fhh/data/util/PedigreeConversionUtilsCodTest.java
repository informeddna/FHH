package gov.hhs.fhh.data.util;

import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.UserEnteredDisease;
import gov.hhs.fhh.model.mfhp.LivingStatus;

import org.junit.Assert;
import org.junit.Test;

import com.fiveamsolutions.hl7.model.CauseOfDeath;
import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;
import com.fiveamsolutions.hl7.model.mfhp.MfhpUserEnteredCondition;

public class PedigreeConversionUtilsCodTest {

    @Test
    public void testCreateCauseOfDeath() {
        Relative relative = new Relative();
        relative.setLivingStatus(LivingStatus.NO.toString());
        UserEnteredDisease disease = new UserEnteredDisease();
        disease.setAppDisplay("mooooo");
        relative.setCauseOfDeath(disease);
        relative.setAgeAtDeath(AgeRangeEnum.ADOLESCENCE);

        CauseOfDeath causeOfDeath = PedigreeConversionUtils.createCauseOfDeath(relative);
        Assert.assertTrue(causeOfDeath.getCondition() instanceof MfhpUserEnteredCondition);
        Assert.assertEquals("mooooo", ((MfhpUserEnteredCondition) causeOfDeath.getCondition()).getText());
    }

}
