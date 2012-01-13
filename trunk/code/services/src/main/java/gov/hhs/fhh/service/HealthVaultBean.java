/**
 * The software subject to this notice and license includes both human readable
 * source code form and machine readable, binary, object code form. The 2.3.0
 * Software was developed in conjunction with the National Cancer Institute
 * (NCI) by NCI employees and 5AM Solutions, Inc. (5AM). To the extent
 * government employees are authors, any rights in such works shall be subject
 * to Title 17 of the United States Code, section 105.
 *
 * This 2.3.0 Software License (the License) is between NCI and You. You (or
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
 * its rights in the 2.3.0 Software to (i) use, install, access, operate,
 * execute, copy, modify, translate, market, publicly display, publicly perform,
 * and prepare derivative works of the 2.3.0 Software; (ii) distribute and
 * have distributed to and by third parties the 2.3.0 Software and any
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
package gov.hhs.fhh.service;

import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.text.MessageFormat;
import java.util.Collections;
import java.util.List;

import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.apache.log4j.Logger;
import org.w3c.dom.Node;
import org.xml.sax.InputSource;

import com.fiveamsolutions.hl7.messaging.endpoint.GatewayEndpointException;
import com.fiveamsolutions.hl7.messaging.provider.mshv.ConnectionModule;
import com.fiveamsolutions.hl7.messaging.provider.mshv.HVModule;
import com.fiveamsolutions.hl7.messaging.provider.mshv.KeystoreModule;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Key;
import com.google.inject.name.Names;
import com.microsoft.hsg.Connection;
import com.microsoft.hsg.HVAccessor;
import com.microsoft.hsg.Request;
import com.microsoft.hsg.methods.jaxb.SimpleRequestTemplate;
import com.microsoft.hsg.methods.jaxb.getthings.request.GetThingsRequest;
import com.microsoft.hsg.methods.jaxb.getthings.request.ThingFilterSpec;
import com.microsoft.hsg.methods.jaxb.getthings.request.ThingFormatSpec;
import com.microsoft.hsg.methods.jaxb.getthings.request.ThingRequestGroup;
import com.microsoft.hsg.methods.jaxb.getthings.request.ThingSectionSpec;
import com.microsoft.hsg.methods.jaxb.getthings.response.GetThingsResponse;
import com.microsoft.hsg.methods.jaxb.removethings.request.RemoveThingsRequest;
import com.microsoft.hsg.thing.oxm.jaxb.familyhistory3.FamilyHistory;
import com.microsoft.hsg.thing.oxm.jaxb.personal.Personal;
import com.microsoft.hsg.thing.oxm.jaxb.thing.Thing;
import com.microsoft.hsg.thing.oxm.jaxb.thing.TypeManager;

/**
 * @author bhumphrey
 *
 */
public class HealthVaultBean implements HealthVaultLocal {

    /**
     * 3600*8+300.
     */
    private static final int TTL = 29100;

    private final Connection connection;
    private final URL healthServiceUrl;
    private final URL shellUrl;
    private final String authShellUrl;

    private static final Logger LOG = Logger.getLogger(HealthVaultBean.class);

    /**
     * constructor.
     * @throws MalformedURLException if a property is malformed
     */
    public HealthVaultBean() throws MalformedURLException {
        final Injector injector = Guice.createInjector(new ConnectionModule(), new HVModule(), new KeystoreModule());
        this.connection = injector.getInstance(Connection.class);
        this.healthServiceUrl = new URL(injector.getInstance(Key.get(String.class, Names.named("HV_URL"))));
        this.shellUrl = new URL(injector.getInstance(Key.get(String.class, Names.named("SHELL_URL"))));
        this.authShellUrl = injector.getInstance(Key.get(String.class, Names.named("AUTH_SHELL_URL")));
    }

    /**
     * {@inheritDoc}
     */
    @SuppressWarnings("PMD.InefficientStringBuffering")
    public StringBuffer getAuthenicationURL(HealthVaultContext hvContext, String redirectUrl) {
        String redirectUrlEncoded = redirectUrl;
        try {
            redirectUrlEncoded = URLEncoder.encode(redirectUrl, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            LOG.error("unable to encode redirectUrl", e);
        }
        return new StringBuffer(MessageFormat.format(this.authShellUrl, hvContext.name(), redirectUrlEncoded));
    }

    /**
     * @param personInfo the person info
     * @return - the retrieved pedigree.
     * @throws XPathExpressionException if error in XPath.
     * @throws IOException if error in I/O.
     */
    public String getFullName(final PersonInfo personInfo) throws XPathExpressionException, IOException {
        String name = null;

        final SimpleRequestTemplate requestTemplate = new SimpleRequestTemplate(connection);

        requestTemplate.setRecordId(personInfo.getRecordId());
        requestTemplate.setPersonId(personInfo.getPersonId());
        requestTemplate.setUserAuthToken(personInfo.getUserAuthToken());

        final List<Thing> things = getPersonalThing(requestTemplate);

        if (things == null || things.isEmpty()) {
            // very weird case, they've saved, are trying to load, but the personal thing is not there, just use the
            // name associated with the hv account.
            name = personInfo.getPersonName();
        } else {
            name = ((Personal) things.get(0).getData()).getName().getFull();
        }

        return name;
    }


    private List<Thing> getPersonalThing(final SimpleRequestTemplate template) {
        return getThings(template, Personal.class);
    }

    @SuppressWarnings("PMD.PreserveStackTrace")
    private List<Thing> getThings(final SimpleRequestTemplate template, final Class clazz) {
        final ThingRequestGroup group = new ThingRequestGroup();

        final ThingFilterSpec filterSpec = new ThingFilterSpec();
        filterSpec.getTypeId().add(TypeManager.getTypeForClass(clazz));
        group.getFilter().add(filterSpec);

        final ThingFormatSpec format = new ThingFormatSpec();
        format.getSection().add(ThingSectionSpec.CORE);
        format.getXml().add("");
        group.setFormat(format);

        final GetThingsRequest requestInfo = new GetThingsRequest();
        requestInfo.getGroup().add(group);

        List<Thing> things = Collections.EMPTY_LIST;
        try {
            final GetThingsResponse response = (GetThingsResponse) template.makeRequest(requestInfo);
            things = response.getGroup().get(0).getThing();
        } catch (final Exception e) {
            throw new GatewayEndpointException(e.fillInStackTrace());
        }
        return things;
    }

    /**
     *
     * @param personInfo the person information
     */
    @SuppressWarnings("PMD.PreserveStackTrace")
    public void removeFamilyHistories(final PersonInfo personInfo) {
        final SimpleRequestTemplate requestTemplate = new SimpleRequestTemplate(connection);

        requestTemplate.setRecordId(personInfo.getRecordId());
        requestTemplate.setPersonId(personInfo.getPersonId());
        requestTemplate.setUserAuthToken(personInfo.getUserAuthToken());

        final List<Thing> things = getThings(requestTemplate, FamilyHistory.class);

        if (!things.isEmpty()) {
            // don't remove 'nothing'
            final RemoveThingsRequest request = new RemoveThingsRequest();
            for (final Thing thing : things) {
                request.getThingId().add(thing.getThingId());
            }

            try {
                requestTemplate.makeRequest(request);
            } catch (final Exception e) {
                throw new GatewayEndpointException(e.fillInStackTrace());
            }
        }
    }

    /**
     *
     * {@inheritDoc}
     *
     * @see gov.hhs.fhh.service.HealthVaultLocal#getPersonId(java.lang.String)
     *
     */
    public void getPersonInfo(final String userAuthToken, final PersonInfo person) throws XPathExpressionException {
        final Request request = new Request();
        request.setTtl(TTL);
        request.setMethodName("GetPersonInfo");
        request.setUserAuthToken(userAuthToken);
        final HVAccessor accessor = new HVAccessor();
        accessor.send(request, connection);
        final InputStream is = accessor.getResponse().getInputStream();
        final XPath xpath = XPathFactory.newInstance().newXPath();
        final Node personInfo = (Node) xpath.evaluate("//person-info", new InputSource(is), XPathConstants.NODE);
        person.setPersonId(xpath.evaluate("person-id", personInfo));
        person.setPersonName(xpath.evaluate("name", personInfo));
        person.setRecordId(xpath.evaluate("record/@id", personInfo));
        person.setRecordName(xpath.evaluate("record", personInfo));

        person.setUserAuthToken(userAuthToken);

    }

    /**
     * @return the healthServiceUrl
     */
    public URL getHealthServiceUrl() {
        return healthServiceUrl;
    }

    /**
     * @return the shellUrl
     */
    public URL getShellUrl() {
        return shellUrl;
    }
}
