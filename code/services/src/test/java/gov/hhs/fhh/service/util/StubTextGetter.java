package gov.hhs.fhh.service.util;

import java.util.Locale;

public class StubTextGetter implements TextGetter {

    public String getText(String resourceKey) {
        return resourceKey;
    }

    public Locale getLocale() {
        return Locale.getDefault();
    }

}
