<%@ tag display-name="accordianContainer.tag"
        description="Renders the accordian container"
        body-content="scriptless"%>
<%@ attribute name="titleTextKey" required="true" type="java.lang.String"%>
<%@ attribute name="helpUrl" required="true" type="java.lang.String"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="fhh" %>

<div class="accordianContainer" id="saveFamilyHistory">
    <s:url value="/popup/getHelp/helpDetailsSaveFamilyHistory.action" id="helpUrl" />
    <fhh:accordianTitlebarOpened helpUrl="${helpUrl}" titleTextKey="${titleTextKey}"/>
    <div class="accordianContent">
        <jsp:doBody/>
    </div>
</div>