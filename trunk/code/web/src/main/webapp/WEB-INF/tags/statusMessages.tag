<%@ tag display-name="statusMessages.tag"
        description="Renders yellow status div w/ messages"
        body-content="empty"%>
        
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="fhh" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%-- Success Messages --%>
<c:if test="${not empty messages}">
        <c:forEach var="msg" items="${messages}">
            <c:if test="${not fn:startsWith(msg,'fail')}">
		        <div class="loginstatus">
		            <strong><fmt:message key="hvManager.manager.loggedIn.status"/></strong><c:out value="${msg}" escapeXml="false"/><br/>
		        </div>
	        </c:if>
        </c:forEach>
    <c:remove var="messages" scope="session"/>
</c:if>