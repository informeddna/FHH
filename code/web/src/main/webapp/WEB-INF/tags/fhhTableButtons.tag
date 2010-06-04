<%@ tag display-name="fhhTableButtons"
        description="Renders the common table buttons displayed for a single relative"
        body-content="scriptless"%>
        
<%@ attribute name="completedForm" required="true" type="java.lang.Boolean"%>
<%@ attribute name="unmatchedCondition" required="true" type="java.lang.Boolean"%>
<%@ attribute name="editUrl" required="true" type="java.lang.String"%>
<%@ attribute name="removeUrl" required="false" type="java.lang.String"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="fhh" %>

<c:choose>
    <c:when test="${completedForm}">
        <td class="action">&nbsp;</td>
        <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editUrl}');"><img src="<s:url value="/images/icon_edit.gif"/>" alt="<fmt:message key="button.update"/>" title="<fmt:message key="button.update"/>" /></a></td>
    </c:when>
    <c:otherwise>
        <s:if test="#attr.unmatchedCondition">
            <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editUrl}');"><img src="<s:url value="/images/icon_unmatched_condition.gif"/>" alt="<fmt:message key="button.unmatchedConditions"/>" title="<fmt:message key="button.unmatchedConditions"/>" /></a></td>
            <td class="action">&nbsp;</td>
        </s:if>
        <s:else>
            <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editUrl}');"><img src="<s:url value="/images/icon_add.gif"/>" alt="<fmt:message key="button.add"/>" title="<fmt:message key="button.add"/>" /></a></td>
            <td class="action">&nbsp;</td>
        </s:else>
    </c:otherwise>
</c:choose>
<c:choose>
    <c:when test="${empty removeUrl}">
        <td>&nbsp;</td>
    </c:when>
    <c:otherwise>
        <td class="action"><a href="${removeUrl}"><img src="<s:url value="/images/icon_trash.gif"/>" alt="<fmt:message key="button.remove.relative"/>" title="<fmt:message key="button.remove.relative"/>" /></a></td>
    </c:otherwise>
</c:choose>