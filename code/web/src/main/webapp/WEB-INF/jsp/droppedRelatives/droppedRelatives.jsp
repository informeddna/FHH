<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<%@ include file="/WEB-INF/jsp/help/helpHeader.jsp" %>

<h1><fmt:message key="droppedRelatives.title"/></h1>
<p><fmt:message key="droppedRelatives.text" /></p>
<s:if test="fieldErrors['warningMessages'] != null">  
    <ul>                   
    <c:forEach items="${fieldErrors['warningMessages']}" var="warningMessage">
        <span class="errorMessage"><li>${warningMessage}</li></span><br />
    </c:forEach>
    </ul>
</s:if>

