<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>

<html>
<head>
    <title><fmt:message key="menu.text.reindex"/></title>
    <%@ include file="../common/eventHandlers.jsp" %>
</head>
<body>
    <%-- Set the Session Timeout redirect to the current page --%>
    <script type="text/javascript">
        <s:url value="/risk/risk.action" id="riskUrl" includeParams="none">
            <s:param name="maintainState" value="true"/>
        </s:url>
        document.getElementById('mainWarningRedirect').href = '${riskUrl}';
        <s:url value="/popup/getHelp/helpDetailsRisk.action" id="helpUrl" />
        document.getElementById('navHelpUrl').onclick = function(){popupWindow('${helpUrl}');};
        window.onload = function() {activateNavAnchor("navRisk");};
    </script>
    <div class="boxpad" id="riskDetail">
        <%@ include file="riskDetail.jsp" %>
    </div>
</body>
</html>