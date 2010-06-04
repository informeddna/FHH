<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<%@ include file="/WEB-INF/jsp/help/helpHeader.jsp" %>

<h1><fmt:message key="help.importFamilyHistory.title"/></h1>    
<p><fmt:message key="help.importFamilyHistory.text.p1"/></p>
<p><fmt:message key="help.importFamilyHistory.text.p2"/></p>
<ol>
	<li><fmt:message key="help.importFamilyHistory.text.step1"/><br />
    <img src="<s:url value="/images/screenshot_importHistory_clickBrowse.gif"/>" alt="<fmt:message key="screenshot.importFamilyHistory.clickBrowse"/>" />
    </li>
	<li><fmt:message key="help.importFamilyHistory.text.step2"/></li>
	<li><fmt:message key="help.importFamilyHistory.text.step3"/></li>
	<li><fmt:message key="help.importFamilyHistory.text.step4"/><br />
    <img src="<s:url value="/images/screenshot_importHistory_clickNext.gif"/>" alt="<fmt:message key="screenshot.importFamilyHistory.clickNext"/>" /></li>
</ol>
<p><fmt:message key="help.importFamilyHistory.note"/></p>

<%@ include file="/WEB-INF/jsp/help/helpFooter.jsp" %>
