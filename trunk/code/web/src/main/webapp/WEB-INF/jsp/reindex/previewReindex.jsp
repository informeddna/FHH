<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<%@ include file="/WEB-INF/jsp/help/helpHeader.jsp" %>
<h1><fmt:message key="previewHistory.title" /></h1>
<p><fmt:message key="previewHistory.text.p1" /></p>
<table><th><td><div class="buttonContainer">
    <a href="javascript:window.print();"><fmt:message key="button.printHistory"/></a>
</div></td></th></table>

<div>
    <c:url value="/popup/reindex/retrieveImage.action" var="retrieveImageUrl" >
        <c:param name="relativeId" value="${relativeId}"/>
    </c:url>
    <img src="${retrieveImageUrl}" alt="<fmt:message key="report.diagram.alt" />" title="<fmt:message key="report.diagram.titleTip" />"/>
</div>