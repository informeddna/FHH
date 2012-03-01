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
    <th scope="row"><div class="inactive_copy"><label for="{id}_Yes"><span class="readonly">${labelKey}</span></label></div></th>
    <td>
        <c:if test="${conditionTrue}">
		    <input id="${id}_Yes" type="checkbox" disabled="disabled" checked="checked" /> <fmt:message bundle="${der}" key="term.yes" /> &nbsp;&nbsp;&nbsp; <input id="${id}_No" type="checkbox" disabled="disabled" /> <fmt:message bundle="${der}" key="term.no" />
		</c:if>
		<c:if test="${!conditionTrue}">
		    <input id="${id}_Yes" type="checkbox" disabled="disabled" /> <fmt:message bundle="${der}" key="term.yes" /> &nbsp;&nbsp;&nbsp; <input id="${id}_No" type="checkbox" disabled="disabled" checked="checked" /> <fmt:message bundle="${der}" key="term.no" />
		</c:if>
		&nbsp;&nbsp;&nbsp;<a id="{id}_navFamilyHistory" href="javascript://nop/" onclick="returnToFamilyHistory();">Close Me?</a>
    </td>
</tr>

