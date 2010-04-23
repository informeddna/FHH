<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>

<html>
<head>
    <title><fmt:message key="fhh.title"/></title>
</head>
<body>
    <%-- Set the Session Timeout redirect to the current page --%>
    <script type="text/javascript">
        <s:url value="/reindex/reindex.action" id="reindexUrl" includeParams="none">
            <s:param name="maintainState" value="true"/>
        </s:url>
        document.getElementById('mainWarningRedirect').href = '${reindexUrl}';
        <s:url value="/popup/getHelp/helpDetailsReindex.action" id="helpUrl" />
        document.getElementById('navHelpUrl').onclick = function(){popupWindow('${helpUrl}');};
        window.onload = activateNavAnchor("navReindex");
    </script>
    </script>
    <div class="boxpad" id="reindexDetail">
        <%@ include file="reindexDetail.jsp" %>
    </div>
</body>
</html>