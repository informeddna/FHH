<%@ include file="../common/taglibs.jsp"%>
<html>
<head>
    <title><fmt:message key="menu.text.myHistory"/></title>
  <%@ include file="../common/eventHandlers.jsp" %>
</head>
<body>
    <script type="text/javascript" charset="ISO-8859-1">
        <s:url value="/popup/getHelp/helpDetailsUpdateFamilyHistory.action" id="helpUrl" />
        document.getElementById('navHelpUrl').onclick = function(){popupWindow('${helpUrl}');};
    </script>
    <div class="boxpad" id="familyHistoryDetail">
        <%@ include file="familyHistoryDetail.jsp" %>
    </div>
</body>
</html>
