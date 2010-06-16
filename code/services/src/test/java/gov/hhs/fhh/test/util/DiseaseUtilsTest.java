/**
 * The software subject to this notice and license includes both human readable
 * source code form and machine readable, binary, object code form. The fhh
 * Software was developed in conjunction with the National Cancer Institute 
 * (NCI) by NCI employees and 5AM Solutions, Inc. (5AM). To the extent 
 * government employees are authors, any rights in such works shall be subject 
 * to Title 17 of the United States Code, section 105. 
 *
 * This fhh Software License (the License) is between NCI and You. You (or 
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
 * its rights in the fhh Software to (i) use, install, access, operate, 
 * execute, copy, modify, translate, market, publicly display, publicly perform,
 * and prepare derivative works of the fhh Software; (ii) distribute and 
 * have distributed to and by third parties the fhh Software and any 
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
package gov.hhs.fhh.test.util;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import gov.hhs.fhh.data.ClinicalObservation;
import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.data.Person;
import gov.hhs.fhh.data.UserEnteredDisease;
import gov.hhs.fhh.data.util.DiseaseUtils;
import gov.hhs.fhh.data.util.SpanishCharacter;
import gov.hhs.fhh.test.AbstractHibernateTestCase;
import gov.hhs.mfhp.model.Code;
import gov.hhs.mfhp.model.CodeStatus;
import gov.hhs.mfhp.model.DisplayName;
import gov.hhs.mfhp.model.Observation;

import org.junit.Test;

import com.fiveamsolutions.hl7.model.age.AgeRangeEnum;

/**
 * @author bpickeral
 *
 */
public class DiseaseUtilsTest extends AbstractHibernateTestCase {
    private String MULTIPLE_RESULT_NO_MATCH = "Disorder";
    private String EXACT_MATCH_APP_DISPLAY = "Social Phobia";
    private String ONE_MATCH = "one match";
    private String NO_MATCH = "no match";
    private String DISEASE_CODE = "code";
    private String USER_ENTERED = "User Entered";
    
    @Test
    public void testFindOrCreateNewDisease() {
        Disease currDisease = DiseaseUtils.findOrCreateNewDisease(MULTIPLE_RESULT_NO_MATCH);
        assertEquals(currDisease.getOriginalText(), MULTIPLE_RESULT_NO_MATCH);
        
        currDisease = DiseaseUtils.findOrCreateNewDisease(EXACT_MATCH_APP_DISPLAY);
        assertEquals(currDisease.getAppDisplay(), EXACT_MATCH_APP_DISPLAY);
        
        
        
        currDisease = DiseaseUtils.findOrCreateNewDisease(NO_MATCH);
        assertEquals(currDisease.getAppDisplay(), NO_MATCH);
        assertEquals(currDisease.getOriginalText(), NO_MATCH);
    }
    
    @Test
    public void testReplaceSpanishCharactersWithHTML() {
        assertEquals(SpanishCharacter.A_ACUTE.getHtml(), DiseaseUtils.replaceSpanishCharactersWithHTML(
                SpanishCharacter.A_ACUTE.getSpanish()));
        assertNull(DiseaseUtils.replaceSpanishCharactersWithHTML(null));
    }
    
    private Observation createObservation(String code, String name) {
        Observation d1 = new Observation();
        Code c1 = new Code();
        c1.setCodeName(code);
        c1.setStatus(CodeStatus.ACTIVE);
        d1.getCodes().add(c1);
        
        DisplayName n1 = new DisplayName();
        n1.setText(name);
        n1.setLanguage("en");
        d1.getDisplayNames().add(n1);
        return d1;
    }
    
    @Test 
    public void testHighlightingDisease() {
        Observation d1 = createObservation(DiseaseUtils.COLON_CANCER_CODE,"c");
        
        Observation d2= createObservation(DiseaseUtils.DIABETES_CODE,"d");
        
        Observation d3 = createObservation(DiseaseUtils.DIABETES_CODE, "d");
        
        assertFalse("two known diseases are the same when they aren't",DiseaseUtils.compareHighlightDisease(d1, d2));
        
        assertTrue("two known diseases are not the same when they are", DiseaseUtils.compareHighlightDisease(d3, d2));
        
        Disease cd1 = DiseaseUtils.createOtherDiseaseType(USER_ENTERED);
        Disease cd2 = DiseaseUtils.createOtherDiseaseType(NO_MATCH);

        Disease cd3 = DiseaseUtils.createOtherDiseaseType(USER_ENTERED);
        
        assertFalse("known disase and user entered are the same when they aren't", DiseaseUtils.compareHighlightDisease(cd1, d1));
        assertFalse("two user entered disaseas are the same when they aren't", DiseaseUtils.compareHighlightDisease(cd1, cd2));

        assertTrue("two user entered diseases are different when they are the same", DiseaseUtils.compareHighlightDisease(cd1, cd3));
        
        
    }
    
    @Test
    public void testSetMatchedOrUnmatched() {
        ClinicalObservation obs = new ClinicalObservation();
        Person p = new Person();
        UserEnteredDisease d = new UserEnteredDisease();
        obs.setDisease(d);
        d.setCode(null);
        // Test type other
        DiseaseUtils.setMatchedOrUnmatched(p, obs);
        assertTrue(p.isUnmatchedCondition());
        assertTrue(obs.isUnmatchedCondition());
        
        // Test type that should not be set
        obs = new ClinicalObservation();
        p = new Person();
        Disease d2 = createObservation(DiseaseUtils.COLON_CANCER_CODE, "Colon Cancer");
        obs.setDisease(d2);
        DiseaseUtils.setMatchedOrUnmatched(p, obs);
        assertFalse(p.isUnmatchedCondition());
        assertFalse(obs.isUnmatchedCondition());
    }
    
    @Test
    public void generateDiseaaseTableId() {
        Disease d = null;
        assertEquals("", DiseaseUtils.generateDiseaaseTableId(d, AgeRangeEnum.ADOLESCENCE));
        
        d = createObservation(DISEASE_CODE, "a disease");
        assertEquals("", DiseaseUtils.generateDiseaaseTableId(d, null));
        assertEquals(String.valueOf(DISEASE_CODE) + AgeRangeEnum.THIRTIES.toString(), 
                DiseaseUtils.generateDiseaaseTableId(d, AgeRangeEnum.THIRTIES));
        
        UserEnteredDisease d1 = new UserEnteredDisease();
        d1.setCode(null);
        d1.setOriginalText(USER_ENTERED);
        assertEquals(AgeRangeEnum.THIRTIES.toString() + USER_ENTERED, 
                DiseaseUtils.generateDiseaaseTableId(d1, AgeRangeEnum.THIRTIES));
    }
}
