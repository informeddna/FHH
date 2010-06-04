package gov.hhs.fhh.service.util;

public class StubTextGetter implements TextGetter {

    public String getText(String resourceKey) {
        return resourceKey;
    }

}
