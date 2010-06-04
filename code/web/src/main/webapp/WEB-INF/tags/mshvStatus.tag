<%@ tag display-name="statusMessages.tag"
        description="Renders yellow status div w/ messages"
        body-content="empty"%>
<%@ attribute name="hvUsername" required="true" type="java.lang.String"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="fhh" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="loginstatus">
    <strong><fmt:message key="hvManager.manager.loggedIn.status"/></strong> ${hvUsername} <fmt:message key="hvManager.manager.loggedIn.personal"/>
</div>
