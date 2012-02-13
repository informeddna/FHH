/**
 * The software subject to this notice and license includes both human readable
 * source code form and machine readable, binary, object code form. The fhh-crcra
 * Software was developed in conjunction with the National Cancer Institute
 * (NCI) by NCI employees and 5AM Solutions, Inc. (5AM). To the extent
 * government employees are authors, any rights in such works shall be subject
 * to Title 17 of the United States Code, section 105.
 *
 * This fhh-crcra Software License (the License) is between NCI and You. You (or
 * Your) shall mean a person or an entity, and all other entities that control,
 * are controlled by, or are under common control with the entity. Control for
 * purposes of this definition means (i) the direct or indirect power to cause
 * the direction or management of such entity, whether by contract or otherwise,
 * or (ii) ownership of fifty percent (50%) or more of the outstanding shares,
 * or (iii) beneficial ownership of such entity.
 *
 * This License is granted provided that You agree to the conditions described
 * below. NCI grants You a non-exclusive, worldwide, perpetual, fully-paid-up,
 * no-charge, irrevocable, transferable and royalty-free right and license in
 * its rights in the fhh-crcra Software to (i) use, install, access, operate,
 * execute, copy, modify, translate, market, publicly display, publicly perform,
 * and prepare derivative works of the fhh-crcra Software; (ii) distribute and
 * have distributed to and by third parties the fhh-crcra Software and any
 * modifications and derivative works thereof; and (iii) sublicense the
 * foregoing rights set out in (i) and (ii) to third parties, including the
 * right to license such rights to further third parties. For sake of clarity,
 * and not by way of limitation, NCI shall have no right of accounting or right
 * of payment from You or Your sub-licensees for the rights granted under this
 * License. This License is granted at no charge to You.
 *
 * Your redistributions of the source code for the Software must retain the
 * above copyright notice, this list of conditions and the disclaimer and
 * limitation of liability of Article 6, below. Your redistributions in object
 * code form must reproduce the above copyright notice, this list of conditions
 * and the disclaimer of Article 6 in the documentation and/or other materials
 * provided with the distribution, if any.
 *
 * Your end-user documentation included with the redistribution, if any, must
 * include the following acknowledgment: This product includes software
 * developed by 5AM and the National Cancer Institute. If You do not include
 * such end-user documentation, You shall include this acknowledgment in the
 * Software itself, wherever such third-party acknowledgments normally appear.
 *
 * You may not use the names "The National Cancer Institute", "NCI", or "5AM"
 * to endorse or promote products derived from this Software. This License does
 * not authorize You to use any trademarks, service marks, trade names, logos or
 * product names of either NCI or 5AM, except as required to comply with the
 * terms of this License.
 *
 * For sake of clarity, and not by way of limitation, You may incorporate this
 * Software into Your proprietary programs and into any third party proprietary
 * programs. However, if You incorporate the Software into third party
 * proprietary programs, You agree that You are solely responsible for obtaining
 * any permission from such third parties required to incorporate the Software
 * into such third party proprietary programs and for informing Your
 * sub-licensees, including without limitation Your end-users, of their
 * obligation to secure any required permissions from such third parties before
 * incorporating the Software into such third party proprietary software
 * programs. In the event that You fail to obtain such permissions, You agree
 * to indemnify NCI for any claims against NCI by such third parties, except to
 * the extent prohibited by law, resulting from Your failure to obtain such
 * permissions.
 *
 * For sake of clarity, and not by way of limitation, You may add Your own
 * copyright statement to Your modifications and to the derivative works, and
 * You may provide additional or different license terms and conditions in Your
 * sublicenses of modifications of the Software, or any derivative works of the
 * Software as a whole, provided Your use, reproduction, and distribution of the
 * Work otherwise complies with the conditions stated in this License.
 *
 * THIS SOFTWARE IS PROVIDED "AS IS," AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 * (INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE) ARE DISCLAIMED. IN NO
 * EVENT SHALL THE NATIONAL CANCER INSTITUTE, 5AM SOLUTIONS, INC. OR THEIR
 * AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
package gov.hhs.fhh.service.util;

import gov.hhs.fhh.data.Person;
import gov.nih.nci.drc.util.RiskFileUtils;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.apache.log4j.Logger;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;


/**
 * @author bpickeral
 *
 */
public final class RiskClient {

    private static final RiskClient INSTANCE = new RiskClient();

    private static final Logger LOG = Logger.getLogger(RiskClient.class);

    private static final String MESSAGE_LINK_XPATH_EXPRESSION = "//component2/"
            + "pedigreeAnalysisResults/component/analysisResult/" + "code[@code='MSG']/following-sibling::value/@value";
    private static final String PATIENT_LINK_XPATH_EXPRESSION = "//component2/"
            + "pedigreeAnalysisResults/component/analysisResult/" + "code[@code='PAT']/following-sibling::value/@value";
    private static final String PHYSCIAN_LINK_XPATH_EXPRESSION = "//component2/"
            + "pedigreeAnalysisResults/component/analysisResult/" + "code[@code='PHY']/following-sibling::value/@value";

    private XPathExpression messageLinkXPathExpression;
    private XPathExpression patientLinkXPathExpression;
    private XPathExpression physcianLinkXPathExpression;

    /**
     * Constructor.
     *
     */
    private RiskClient() {
        this(MESSAGE_LINK_XPATH_EXPRESSION, PATIENT_LINK_XPATH_EXPRESSION,
                PHYSCIAN_LINK_XPATH_EXPRESSION);
    }

    /**
     * Gets instance of RiskClient.
     * @return risk client
     */
    public static RiskClient getInstance() {
        return INSTANCE;
    }

    /**
     * parameterized constructor.
     *
     * @param messageLinkExpression xpath expression
     * @param patientLinkExpression xpath expression
     * @param physcianLinkExpression xpath expression
     */
    private RiskClient(String messageLinkExpression,
            String patientLinkExpression, String physcianLinkExpression) {
        XPathFactory xpathFactory = XPathFactory.newInstance();
        XPath xpath = xpathFactory.newXPath();
        try {
            messageLinkXPathExpression = xpath.compile(messageLinkExpression);
            patientLinkXPathExpression = xpath.compile(patientLinkExpression);
            physcianLinkXPathExpression = xpath.compile(physcianLinkExpression);
        } catch (XPathExpressionException e) {
            LOG.error("Error creating Risk response parser.", e);
        }

    }

    /**
     * calls the remote webservice passing in the the person and builder.
     *
     * @param person the person
     * @param builder a callback to send the links back.
     */
    public void calculateRisk(Person person, RiskResponseBuilder builder) {
        try {
            final String response = RiskUtils.getInstance().calculateColorectalRisk(person);
            final Document document = getPatientDocument(response);
            parseResponse(document, builder);
        } catch (Exception e) {
            LOG.error("Error when calculating risk.", e);
        }
    }

    private Document getPatientDocument(String response) throws ParserConfigurationException, SAXException,
            IOException {

        InputStream source = new ByteArrayInputStream(response.getBytes("UTF-8"));
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        dbf.setValidating(false);
        dbf.setNamespaceAware(true);
        dbf.setIgnoringElementContentWhitespace(true);

        // Parse the input to produce a parse tree with its root
        // in the form of a Document object
        Document doc = null;
        DocumentBuilder builder = dbf.newDocumentBuilder();
        // builder.setErrorHandler(new MyErrorHandler());

        doc = builder.parse(source);
        return doc;
    }

    private void parseResponse(Document soapBody, RiskResponseBuilder builder) throws XPathExpressionException {

        builder.setMessage(getMessageLink(soapBody));

        builder.setPatient(getPatientLink(soapBody));

        builder.setPhysician(getPhyscianLink(soapBody));

    }

    String getPhyscianLink(Node soapBody) throws XPathExpressionException {
        return physcianLinkXPathExpression.evaluate(soapBody);
    }

    String getPatientLink(Node soapBody) throws XPathExpressionException {
        return patientLinkXPathExpression.evaluate(soapBody);
    }

    String getMessageLink(Node soapBody) throws XPathExpressionException {
        return messageLinkXPathExpression.evaluate(soapBody);
    }

    /**
     * Gets the risk file from DRC.
     *
     * @param fileName of file
     * @return file in byte array
     */
    public byte[] getRiskFile(String fileName) {
        return RiskFileUtils.getInstance().loadFile(fileName);
    }

}
