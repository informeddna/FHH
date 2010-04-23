<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<html>
<head>
    <title><fmt:message key="fhh.title"/></title>
    <script type="text/javascript" charset="ISO-8859-1">
    <s:url value="/familyHistory/familyHistory.action" id="returnUrl" />
    <s:url value="/popup/familyHistory/importFamilyHistory.action" id="importXmlUrl" />

    loadFamilyHistoryDetail = function() {
    	window.location.href = '${returnUrl}';
    }

    importXmlDocument = function() {
    	showPopUpWindow('${importXmlUrl}', loadFamilyHistoryDetail, true);
    }

    saveFamilyHistory = function() {
    	showPopUpWindow('${saveFamilyHistoryUrl}', loadFamilyHistoryDetail, true);
    }

    handlePopup = function(url) {
    	showPopUpWindow(url, loadFamilyHistoryDetail, true);
    }

    </script>
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
