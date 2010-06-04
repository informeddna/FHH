<%@ tag display-name="cancelMessage.tag"
        description="Renders a message when returning to the previous screen from hitting cancel."
        body-content="empty"%>
<%@ attribute name="cancelPage" required="true" type="java.lang.String"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="fhh" %>

<c:if test="${!empty cancelPage}">
    <div class="loginstatus"> 
        <c:choose>
            <c:when test="${cancelPage == 'leavingFhh'}">     
                <p><strong><fmt:message key="saveInformation.error.notConnected" /></strong>  <fmt:message key="saveInformation.error.connectionCanceled" /></p>
            </c:when>
            <c:otherwise>
                <p><strong><fmt:message key="saveInformation.error.notSaved" /></strong>  <fmt:message key="saveInformation.error.saveCanceled" /></p>
            </c:otherwise>
        </c:choose>
    </div>
</c:if>

