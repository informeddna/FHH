<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<%@ include file="/WEB-INF/jsp/help/helpHeader.jsp" %>

<h1><fmt:message key="help.editInfo.title"/></h1>
<p><fmt:message key="help.editInfo.text.p1"/></p>
<ol>
	<li><fmt:message key="help.editInfo.text.item1"/></li>
	<li><fmt:message key="help.editInfo.text.item2"/><br />
    	<ol>
        	<li><fmt:message key="help.editInfo.text.item2a"/></li>
        	<li><fmt:message key="help.editInfo.text.item2b"/></li>
        	<li><fmt:message key="help.editInfo.text.item2c"/></li>
        	<li><fmt:message key="help.editInfo.text.item2d"/></li>
        </ol>
    </li>
	<li><fmt:message key="help.editInfo.text.item3"/><br />
    	<ol>
        	<li><fmt:message key="help.editInfo.text.item3a"/></li>
        	<li><fmt:message key="help.editInfo.text.item3b"/></li>
        </ol>
    </li>
</ol>

<%@ include file="/WEB-INF/jsp/help/helpFooter.jsp" %>
