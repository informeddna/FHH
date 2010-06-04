<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div class="submodalContainer">
    <s:url id="helpUrl" action="popup/getHelp/helpDetailsImportFamilyHistory" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="importLocal.loading.title">
    <fhh:leavingFhhToMSHV>
        <div class="buttonContainer">
            <div class="btn_right">
                <s:url value="/popup/healthvault/connectToLoad.action" id="connectUrl" />
                <div class="btn_float">
                    <a id="loadFromMshv" href="javascript://nop/" onclick="window.top.location='${connectUrl}'" ><fmt:message key="thirdParty.continue" /></a>
                </div>
                <c:url value="/popup/familyHistory/importFamilyHistoryCancelledMshv.action" var="cancelMshv" />
                <div class="btn_float">
                    <a id="cancelButton" href="${cancelMshv}" onclick="redirectPage('${cancelMshv}')"><fmt:message key="downloading.cancel"/></a>
                </div>
            </div>
        </div>
    </fhh:leavingFhhToMSHV>
    </fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("loadFromMshv");
</script>

