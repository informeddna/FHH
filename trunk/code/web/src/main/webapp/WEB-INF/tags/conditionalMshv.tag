<%@ tag display-name="conditionalMshv.tag"
        description="Shows or does not show mshv functionality"
        body-content="scriptless"%>
        
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<%@tag import="gov.hhs.fhh.web.Settings"%>
<c:set var="showBody"><%=Settings.INSTANCE.getSetting("show.mshv.ui") %></c:set>
<c:if test="${showBody=='true'}">
    <jsp:doBody/>
</c:if>        
        