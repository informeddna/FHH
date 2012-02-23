<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<%@ include file="/WEB-INF/jsp/help/helpHeader.jsp" %>

<a name="top"></a>
<h1><fmt:message key="help.saveHistoryFile.title"/></h1>
<p><fmt:message key="help.saveHistoryFile.text.p1.the"/> <strong><fmt:message key="button.saveXmlDocument"/></strong> <fmt:message key="help.saveHistoryFile.text.p1.button"/>  <em><fmt:message key="familyHistory.title"/></em> <fmt:message key="help.saveHistoryFile.text.p1.page"/> <fmt:message key="help.saveHistoryFile.text.p1.process"/></p>

<div class="p"><a href="#firefoxWin" target="_self"><fmt:message key="help.saveHistoryFile.text.firefoxWin"/></a> | <a href="#ieWin" target="_self"><fmt:message key="help.saveHistoryFile.text.ieWin"/></a> | <a href="#safariWin" target="_self"><fmt:message key="help.saveHistoryFile.text.safariWin"/></a></div>

<hr />
<a name="firefoxWin"></a>
<h2><fmt:message key="help.saveHistoryFile.text.additionalInstructions"/> <fmt:message key="help.saveHistoryFile.text.firefoxWin"/></h2>
<ol>
	<li>
    	<fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.afterClicking"/>
        <strong><fmt:message key="button.saveXmlDocument"/></strong>
        <fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.button1"/>
        <fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.onlySelect"/>
        <strong><fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.saveToDisk"/></strong>
        <fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.radioButton"/>
        <strong><fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.ok"/></strong>
        <fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.button2"/>
    </li>
	<li><fmt:message key="help.saveHistoryFile.text.item2"/></li>
</ol>
<br />
<img src="<s:url value="/images/screenshot_saveHistory_firefoxWin.gif"/>" alt="<fmt:message key="screenshot.saveHistoryFile.firefoxWin"/>" />
<div><a href="#top"><fmt:message key="text.backToTop"/></a></div>

<hr />
<a name="ieWin"></a>
<h2><fmt:message key="help.saveHistoryFile.text.additionalInstructions"/> <fmt:message key="help.saveHistoryFile.text.ieWin"/></h2>
<ol>
	<li>
    	<fmt:message key="help.saveHistoryFile.text.item1.afterClicking"/>
        <strong><fmt:message key="button.saveXmlDocument"/></strong>
        <fmt:message key="help.saveHistoryFile.text.item1.button1"/>
        <fmt:message key="help.saveHistoryFile.text.item1.onlyClick"/>
        <strong><fmt:message key="help.saveHistoryFile.text.item1.save"/></strong>
        <fmt:message key="help.saveHistoryFile.text.item1.button2"/>
    </li>
	<li><fmt:message key="help.saveHistoryFile.text.item2"/></li>
</ol>
<br />
<img src="<s:url value="/images/screenshot_saveHistory_ieWin.gif"/>" alt="<fmt:message key="screenshot.saveHistoryFile.ieWin"/>" />
<div><a href="#top"><fmt:message key="text.backToTop"/></a></div>

<hr />
<a name="safariWin"></a>
<h2><fmt:message key="help.saveHistoryFile.text.additionalInstructions"/> <fmt:message key="help.saveHistoryFile.text.safariWin"/></h2>
<ol>
	<li>
    	<fmt:message key="help.saveHistoryFile.text.item1.afterClicking"/>
        <strong><fmt:message key="button.saveXmlDocument"/></strong>
        <fmt:message key="help.saveHistoryFile.text.item1.button1"/>
        <fmt:message key="help.saveHistoryFile.text.item1.onlyClick"/>
        <strong><fmt:message key="help.saveHistoryFile.text.item1.save"/></strong>
        <fmt:message key="help.saveHistoryFile.text.item1.button2"/>
    </li>
	<li><fmt:message key="help.saveHistoryFile.text.item2"/></li>
</ol>
<br />
<img src="<s:url value="/images/screenshot_saveHistory_safariWin.gif"/>" alt="<fmt:message key="screenshot.saveHistoryFile.safariWin"/>" />
<div><a href="#top"><fmt:message key="text.backToTop"/></a></div>


<%@ include file="/WEB-INF/jsp/help/helpFooter.jsp" %>
