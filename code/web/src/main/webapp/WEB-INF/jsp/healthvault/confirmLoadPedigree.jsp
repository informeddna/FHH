<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div class="submodalContainer" id="loadPedigreeFromMSHV">
    <s:url id="helpUrl" action="popup/getHelp/helpDetailsImportFamilyHistory" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="importLocal.loading.title">
        <fhh:mshvStatus hvUsername="${sessionInfo.displayName}"/>
        <div class="box_noshade">
            <div class="thumb">
                <a href="http://www.healthvault.com/personal" target="_blank" tabindex="4"><img src="<s:url value="/images/tile_HealthVaultBlue_h_rgb_147width.png"/>" alt="Microsoft HealthVault" /></a>
            </div>
            <div class="thumb_content">
                <br />
                <h2><fmt:message key="importLocal.fromMshv.confirm.title"/></h2>
                <p><fmt:message key="importLocal.fromMshv.confirm.text"/></p>
                <div class="scrollingBox">
                    <c:url value="/healthvault/previewChartResult.action" var="retrieveImageUrl" />
                    <img src="${retrieveImageUrl}" alt="<fmt:message key="importLocal.fromMshv.confirm.preview"/>" title="<fmt:message key="importLocal.fromMshv.confirm.preview"/>" />
                </div>
            </div>
            <div class="clear"></div>
            <br />
            <hr /> 
            <div class="hvButtonContainer">
                <div class="btn_float_right" style="width:300px;" >
                    <c:url value="/healthvault/loadPreviewedPedigreeFromMshv.action" var="getFromHealthvault" />
                    <a id="openPedigreeFromMSHV" 
                    href="javascript://nop/" tabindex="1"  
                    onclick="$('importingFamilyHistoryLoading').show(); $('loadPedigreeFromMSHV').hide(); window.top.location = '${getFromHealthvault}'; return true;"><img src="<s:url value="/images/copy_from_hv_sm.gif" />" alt="Copy from Microsoft HealthVault" align="right" /></a></div>
                    
                </div>
            </div>
            <div class="clear"></div>
            <div class="buttonContainer">
                <c:url value="/popup/familyHistory/importFamilyHistoryCancelledMshv.action" var="cancelMshv" />
                <div class="btn_float_right">
                    <a id="cancelButton" tabindex="2" href="javascript:;" onclick="redirectPage('${cancelMshv}')"><fmt:message key="downloading.cancel"/></a>
                </div>
            </div>
        </div>
    </fhh:accordianContainer>
</div>
<%@include file="../familyHistory/importingFamilyHistory.jsp" %>
<script type="text/javascript">
    setFocusById("openPedigreeFromMSHV");
</script>

