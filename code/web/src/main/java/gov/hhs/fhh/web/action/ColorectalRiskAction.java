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
package gov.hhs.fhh.web.action;

import gov.hhs.fhh.data.util.PersonUtils;
import gov.hhs.fhh.service.util.CurrentLanguageHolder;
import gov.hhs.fhh.service.util.RiskClient;
import gov.nih.nci.drc.util.FileLanguageCode;

import java.io.ByteArrayInputStream;

import com.opensymphony.xwork2.Preparable;

/**
 * @author bpickeral
 *
 */
public class ColorectalRiskAction extends AbstractRiskAction implements Preparable {
    private static final long serialVersionUID = 316273314L;

    /**
     * {@inheritDoc}
     */
    public void prepare() {
        setPerson(getPersonFromSession());
        if (getPerson() != null) {
            RiskClient.getInstance().calculateColorectalRisk(getPerson(), getBuilder());
            setRiskHTML(new String(RiskClient.getInstance().getRiskFile(getBuilder().getMessage(),
                    getFileLanguageCode())));
        }
    }

    /**
     * {@inheritDoc}
     */
    @Override
    protected FileLanguageCode getFileLanguageCode() {
        FileLanguageCode languageCode = FileLanguageCode.EN;
        if (CurrentLanguageHolder.getCurrentLanguage().equals(FileLanguageCode.ES.getCode())) {
            languageCode = FileLanguageCode.ES;
        }
        return languageCode;
    }

    /**
     * Method invokes the colorectal risk page.
     *
     * @return path String
     */
    public String colorectal() {
        return SUCCESS;
    }

    /**
     * Downloads colorectal risk assessment.
     *
     * @return path String
     */
    public String downloadColorectalRisk() {
        setRiskFile(new ByteArrayInputStream(RiskClient.getInstance().getRiskFile(getBuilder().getPatient(),
                getFileLanguageCode())));
        setFileName(PersonUtils.getFileNameForPerson(getPerson(), "Colorectal_Risk.pdf"));
        return "downloadColorectalRiskFile";
    }

    /**
     * Download physician risk letter.
     *
     * @return path String
     */
    public String downloadColorectalLetter() {
        setRiskFile(new ByteArrayInputStream(RiskClient.getInstance().getRiskFile(getBuilder().getPhysician(),
                getFileLanguageCode())));
        setFileName(PersonUtils.getFileNameForPerson(getPerson(), "Colorectal_Risk_Physician_Letter.pdf"));
        return "downloadColorectalRiskFile";
    }


}