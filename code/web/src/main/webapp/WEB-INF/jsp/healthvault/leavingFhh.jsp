<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div class="submodalContainer">
    <s:url value="/popup/getHelp/helpDetailsSaveFamilyHistory.action" id="helpUrl" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="saveFamilyHistory.title" >
        <fhh:processSteps activeStep="1"/>
        <fhh:leavingFhhToMSHV>
            <div class="buttonContainer">
                <div class="btn_right">
                    <div class="btn_float">
                        <s:url value="/healthvault/connect.action" id="connectUrl" />
                        <a href="javascript://nop/" onclick="window.top.location='${connectUrl}'" id="continue"><fmt:message key="thirdParty.continue" /></a> 
                    </div>
                    <div class="btn_float">
                        <s:url value="/popup/saveFamilyHistory/step1.action" id="step1">
                            <s:param name="cancelPage">leavingFhh</s:param>
                        </s:url>
                        <a id="cancel" href="${step1}"><fmt:message key="button.cancel" /></a>
                    </div>
                </div>
            </div>
        </fhh:leavingFhhToMSHV>
    </fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("continue");
</script>

