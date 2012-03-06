<%@ tag display-name="readOnlyCheckbox.tag"
        description="Renders a table row containing a row label and read only Yes/No checkboxes."
        body-content="empty"%>
<%@ attribute name="conditionTrue" required="true" type="java.lang.Boolean"%>
<%@ attribute name="id" required="true" type="java.lang.String"%>
<%@ attribute name="labelKey" required="true" type="java.lang.String"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="fhh" %>


<tr>
    <th scope="row"><div class="inactive_copy"><label for="{id}_Yes"><span class="readonly"><fmt:message key="${labelKey}" /></span></label></div></th>
    <td>
        <c:if test="${conditionTrue}">
		    <input id="${id}_Yes" type="checkbox" disabled="disabled" checked="checked" /> <fmt:message bundle="${der}" key="term.yes" />
		</c:if>
		<c:if test="${!conditionTrue}">
		    <input id="${id}_Yes" type="checkbox" disabled="disabled" /> <fmt:message bundle="${der}" key="term.yes" />
		</c:if>
		&nbsp;&nbsp;&nbsp;<a id="{id}_navFamilyHistory" href="javascript://nop/" onclick="returnToFamilyHistory();"><fmt:message key="diabetes.additionalInfo.changeMe" /></a>
    </td>
</tr>

