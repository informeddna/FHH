package gov.hhs.fhh.service.util;

import gov.hhs.fhh.data.Relative;
import gov.hhs.fhh.data.RelativeCode;

public class RelativeDrawWrapper extends RelativeDraw {

    public RelativeDrawWrapper(Relative r) {
        super(r, new StubTextGetter());
    }

    public RelativeDrawWrapper(RelativeDrawWrapper r) {
        super(r, new StubTextGetter());
    }

    @Override
    protected String getText(RelativeCode rc) {
        return rc.getResourceKey();
    }

    protected RelativeDraw copy(Relative r) {
        return new RelativeDrawWrapper(r);
    }
}
