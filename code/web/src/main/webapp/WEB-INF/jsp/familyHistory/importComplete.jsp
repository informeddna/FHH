<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<html>
<head>
    <title><fmt:message key="importFamilyHistory.title"/></title>
    <s:url value="/familyHistory/familyHistory.action" id="familyHistoryUrl">
    </s:url>
    <script type="text/javascript">
        closeAndUpdate = function() {
            window.opener.location = '${familyHistoryUrl}';
            window.close();
        }
    </script>
</head>
<body>
<div class="instructions"><fmt:message key="importFamilyHistory.importComplete"/></div>
<a href="javascript://nop/" onclick="closeAndUpdate();"><fmt:message key="button.closeAndUpdate"/></a>
</body>

