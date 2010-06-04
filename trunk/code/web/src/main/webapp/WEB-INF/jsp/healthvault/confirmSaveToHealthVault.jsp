<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<c:url value="/familyHistory/familyHistory.action" var="cancel" />
<c:url value="/popup/healthvault/saveToHealthvault.action" var="save" />
<div class="submodalContainer">
    <s:url value="/popup/getHelp/helpDetailsSaveFamilyHistory.action" id="helpUrl" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="downloading.title">
        <fhh:mshvStatus hvUsername="${sessionInfo.displayName}"/>
        <fhh:processSteps activeStep="1"/>
        <div class="box_noshade">
            <div class="thumb"><img src="<s:url value="/images/tile_HealthVaultBlue_h_rgb_147width.png" />" alt="Microsoft HealthVault" /></div>
            <div class="thumb_content"><br />
                <h2><fmt:message key="saveFamilyHistory.save.confirmation.title"/></h2>
                <p><fmt:message key="saveFamilyHistory.save.confirmation.intro"/></p>
                <br />
            </div>
            <div class="clear"></div>
            <br />
            <hr />
            <div class="hvButtonContainer">
                <div class="btn_right">
                    <div class="btn_float">
                    <a class="float_right" href="${save}" id="save"><img src="<s:url value="/images/copy_to_hv_sm.gif" />" alt="Copy to Microsoft HealthVault" align="right" /></a></div>
                    <s:url value="/popup/saveFamilyHistory/step1.action" id="step1">
                        <s:param name="cancelPage">confirmSaveToHeathvault</s:param>
                    </s:url>
                </div>
            </div>
            <div class="clear"></div>
            <div class="buttonContainer">
                <div class="btn_float_right"><a href="${step1}" id="cancel"><fmt:message key="button.cancel" /></a></div>
            </div>
            <div class="clear"></div>
        </div>
    </fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("save");
</script>



