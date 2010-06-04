<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div id="howtosave" style="display:none;">
    <a name="top"></a>
    <hr />
    <h2 id="instructions"><fmt:message key="downloading.instructions.detail" /></h2>
    <div class="p"><a href="#firefoxWin" target="_self"><fmt:message key="downloading.instructions.firefox" /></a> | <a href="#ieWin"
        target="_self"><fmt:message key="downloading.instructions.ie" /></a> | <a href="#safariWin" target="_self"><fmt:message 
        key="downloading.instructions.safari" /></a></div>
    <hr />
    <!-- BEGIN BROWSER SPECIFIC INSTRUCTIONS FOR SAVING (same content as used for Help file) --> 
    <a name="firefoxWin"></a>
    <h2><fmt:message key="downloading.instructions.firefox.title" /></h2>
    <ol>
        <li><fmt:message key="downloading.instructions.firefox.step.1" ><fmt:param><fmt:message key="saveInformation.button.save"/></fmt:param></fmt:message></li>
        <li><fmt:message key="downloading.instructions.firefox.step.2" /></li>
    </ol>
    <br />
    <img src="<s:url value="/images/screenshot_saveHistory_firefoxWin.gif" />"
        alt="<fmt:message key="downloading.instructions.firefox.alt" />" />
    <div><a href="#top"><fmt:message key="downloading.instructions.top" /></a></div>

    <hr />
    <a name="ieWin"></a>
    <h2><fmt:message key="downloading.instructions.ie.title" /></h2>

    <ol>
        <li><fmt:message key="downloading.instructions.ie.step.1" ><fmt:param><fmt:message key="saveInformation.button.save"/></fmt:param></fmt:message></li>
        <li><fmt:message key="downloading.instructions.ie.step.2" /></li>
    </ol>

    <br />
    <img src="<s:url value="/images/screenshot_saveHistory_ieWin.gif" />"
        alt="<fmt:message key="downloading.instructions.ie.step.2" />" />
    <div><a href="#top"><fmt:message key="downloading.instructions.top" /></a></div>

    <hr />
    <a name="safariWin"></a>
    <h2><fmt:message key="downloading.instructions.safari.title" /></h2>
    <ol>
        <li><fmt:message key="downloading.instructions.safari.step.1" ><fmt:param><fmt:message key="saveInformation.button.save"/></fmt:param></fmt:message></li>
        <li><fmt:message key="downloading.instructions.safari.step.2" /></li>
    </ol>
    <br />
    <img src="<s:url value="/images/screenshot_saveHistory_safariWin.gif" />"
        alt="<fmt:message key="downloading.instructions.safari.alt" />" />

    <div><a href="#top"><fmt:message key="downloading.instructions.top" /></a></div>
    <!-- END BROWSER SPECIFIC INSTRUCTIONS FOR SAVING -->
</div>