   <script type="text/javascript" charset="ISO-8859-1">
    <s:url value="/familyHistory/familyHistory.action" id="returnUrl" />
    <s:url value="/popup/familyHistory/importFamilyHistory.action" id="importXmlUrl" />
    <s:url value="/home.action" id="selfCancel" />

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

    handlePopupWithReturnFunc = function(url, returnFunc) {
        showPopUpWindow(url, returnFunc, true);
    }

    addPersonSelfCancel = function(url) {
        window.location.href = '${selfCancel}';
    }
    </script>