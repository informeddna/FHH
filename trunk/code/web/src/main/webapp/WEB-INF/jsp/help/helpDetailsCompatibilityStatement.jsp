<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<%@ include file="/WEB-INF/jsp/help/helpHeader.jsp" %>

<h1><fmt:message key="help.compatibility.title" /></h1>
<p><em><fmt:message key="text.appName" /></em> <fmt:message key="help.compatibility.text.p1" /></p>

<h2><fmt:message key="help.compatibility.text.h2.systems" /></h2>
<p><em><fmt:message key="text.appName" /></em> <fmt:message key="help.compatibility.text.p1.systems" /></p>

<h2><fmt:message key="help.compatibility.text.h2.browsers" /></h2>
<p><em><fmt:message key="text.appName" /></em> <fmt:message key="help.compatibility.text.p1.browsers" /></p>
<p><fmt:message key="help.compatibility.text.p2.browsers" /></p>
<ul>
	<li><fmt:message key="help.compatibility.text.ie" /> <a href=""><fmt:message key="help.compatibility.text.link.ie" /></a></li>
    <li><fmt:message key="help.compatibility.text.firefox" /> <a href=""><fmt:message key="help.compatibility.text.link.firefox" /></a></li>
    <li><fmt:message key="help.compatibility.text.safari" /> <a href=""><fmt:message key="help.compatibility.text.link.safari" /></a></li>
</ul>

<%@ include file="/WEB-INF/jsp/help/helpFooter.jsp" %>
