package gov.hhs.fhh.service;

import junit.framework.Assert;

import org.junit.Test;

public class FhhWebExceptionTest {

    @Test
    public void testFhhWebException() {
        FhhWebException fhhWebException = new FhhWebException(new IllegalArgumentException("moooo"));

        Assert.assertTrue(fhhWebException.getCause() instanceof IllegalArgumentException);
        Assert.assertEquals("moooo", fhhWebException.getCause().getMessage());
    }

}
