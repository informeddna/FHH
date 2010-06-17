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
package gov.hhs.fhh.test.selenium.page;

import org.apache.log4j.Logger;

import com.thoughtworks.selenium.Selenium;

/**
 * @author bhumphrey
 *
 */
public abstract class AbstractSeleniumPage  {
    
    private static final int PAGE_TIMEOUT_SECONDS = 60;
    protected static int RECORD_TIMEOUT_SECONDS = 240;
    
    
    private static final Logger LOG = Logger.getLogger(AbstractSeleniumPage.class);

    
    abstract protected Selenium getSelenium();

    protected static String toMillisecondsString(long seconds) {
        return String.valueOf(seconds * 1000);
    }

    protected void waitForPageToLoad() {
        getSelenium().waitForPageToLoad(toMillisecondsString(PAGE_TIMEOUT_SECONDS));
    }

    protected void waitForElementById(String id, int timeoutSeconds) {
        getSelenium().waitForCondition("selenium.browserbot.getCurrentWindow().document.getElementById('"
                + id + "');", toMillisecondsString(timeoutSeconds));
    }
    
    protected void waitForText(String text) throws WaitForTimeoutException {
         waitForText(text, Integer.valueOf(RECORD_TIMEOUT_SECONDS));
    }

   
    protected void waitForText(String text, int waitTime) throws WaitForTimeoutException {
        for (int second = 0;; second++) {
            if (second >= Integer.valueOf(waitTime)) {
                LOG.error("timeout waiting for text " + text + ". Exceeded wait time (sec): " + waitTime);
                throw new WaitForTimeoutException("timeout waiting for text " + text + ". Exceeded wait time (sec): " + waitTime);
            }
            try {
                if (getSelenium().isTextPresent(text))
                    break;
            } catch (Exception e) {
            }
            pause(1000);
        }
        
    }
    
    /** Sleeps for the specified number of milliseconds */
    public void pause(int millisecs) {
        try {
            Thread.sleep(millisecs);
        } catch (InterruptedException e) {
        }
    }
    
    protected void waitForElementByXPath(String xpathExpression, int timeoutSeconds) {
        String cond = "var doc = selenium.browserbot.getCurrentWindow().document; "
                + "doc.evaluate("
                + toJSString(xpathExpression) + ", doc, null, XPathResult.BOOLEAN_TYPE, null).booleanValue;";
        LOG.info(cond);
        getSelenium().waitForCondition(cond, toMillisecondsString(timeoutSeconds));
    }

    protected static String toJSString(String str) {
        if (str == null) { return "null"; }
        StringBuffer sb = new StringBuffer().append('\'');
        char[] cs = str.toCharArray();
        for (char c : cs) {
            if (c == '\'' || c == '\\') {
                sb.append('\\');
            }
            sb.append(c);
        }

        return sb.append('\'').toString();
    }

    protected void clickAndWait(String linkOrButton) {
        getSelenium().click(linkOrButton);
        waitForPageToLoad();
    }
    
    protected void clickAndWaitForText(String linkOrButton, String text) throws WaitForTimeoutException {
        getSelenium().click(linkOrButton);
        waitForText(text);
    }
    
    protected void clickAndWaitForTextSubmodal(String linkOrButton, String text) throws WaitForTimeoutException {
        getSelenium().click(linkOrButton);
        getSelenium().selectFrame("popupFrame");
        waitForText(text);
    }
    
    protected void clickAndWaitForSubmodal(String linkOrButton) {
        clickAndWait(linkOrButton);
        getSelenium().selectFrame("popupFrame");
    }
    
    protected void selectParentWindow() {
        //selenium.selectWindow(null);
        getSelenium().selectFrame("relative=parent");
        getSelenium().windowFocus();
    }

    
    protected void clickAndWaitForPopup(String linkOrButton, String windowId, String xpath) {
        getSelenium().click(linkOrButton);
        getSelenium().openWindow("", windowId);
        getSelenium().selectWindow(windowId);
        getSelenium().windowFocus();
        waitForElementByXPath(xpath, PAGE_TIMEOUT_SECONDS);
    }
    
    protected void waitForAjax() {
        getSelenium().waitForCondition( "selenium.browserbot.getCurrentWindow().Ajax.activeRequestCount == 0", "10000" );
    }
    
    protected void waitForDiv(String divId) {
        waitForDiv(divId, PAGE_TIMEOUT_SECONDS);
    }

    protected void waitForDiv(String divId, long timeoutSeconds) {
        getSelenium().waitForCondition("element = selenium.browserbot.getCurrentWindow().document.getElementById('" + divId
                + "'); element != null && element.style.display == 'none';", toMillisecondsString(timeoutSeconds));
    }

}
