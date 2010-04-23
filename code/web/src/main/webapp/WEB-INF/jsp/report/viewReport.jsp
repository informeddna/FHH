<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<html>
<head>
    <title><fmt:message key="fhh.title"/></title>
	<script type="text/javascript">
    	<s:url value="/viewReport/viewReport.action" id="returnUrl" />
    	loadViewReportDetail = function() {
	       window.location.href = '${returnUrl}';
	    }
	</script>
</head>
<body>
    <%-- Set the Session Timeout redirect to the current page --%>
    <script type="text/javascript">
        <s:url value="/viewReport/viewReport.action" id="viewReportUrl" includeParams="none">
            <s:param name="maintainState" value="true"/>
        </s:url>
        <s:url value="/popup/getHelp/helpDetailsViewReport.action" id="helpUrl" />
        document.getElementById('navHelpUrl').onclick = function(){popupWindow('${helpUrl}');};
        document.getElementById('mainWarningRedirect').href = '${viewReportUrl}';
        window.onload = activateNavAnchor("navViewDiagram");
    </script>
    <div class="boxpad" id="viewReportDetail">
        <%@ include file="viewReportDetail.jsp" %>
    </div>
</body>
</html>