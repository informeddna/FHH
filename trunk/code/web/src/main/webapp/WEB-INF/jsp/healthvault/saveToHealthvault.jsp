<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<s:url value="/popup/saveFamilyHistory/manage.action" id="manage" />
<div class="submodalContainer">
    <s:url value="/popup/getHelp/helpDetailsSaveFamilyHistory.action" id="helpUrl" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="downloading.title">
        <fhh:mshvStatus hvUsername="${sessionInfo.displayName}"/>
        <fhh:processSteps activeStep="1"/>
        <div class="box_noshade">
            <div class="thumb">
                <img src="<s:url value="/images/tile_HealthVaultBlue_h_rgb_147width.png"/>" alt="Microsoft HealthVault" />
            </div>
            <div class="thumb_content">
                <br />
                <h2><fmt:message key="hvManager.save.success.subtitle"/></h2>
                <p><img src="<s:url value="/images/ico_check.gif"/>" alt="Check mark" class="float_ico_small" /><fmt:message key="hvManager.save.success"/></p>
                <br />
            </div>
            <div class="clear"></div> 
            <br />
            <hr /> 
            <div class="buttonContainer">
                <div class="btn_right">
                    <div class="btn_float"><a href="${manage}" id="continue"><fmt:message key="thirdParty.continue"/></a></div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("continue");
</script>
