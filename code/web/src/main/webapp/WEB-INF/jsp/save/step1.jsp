<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<s:url value="downloading.action" id="saveXmlUrl" />
<s:url value="/popup/leavingFhhWarn.action" id="warnLeavingFhh" />

<div class="submodalContainer" id="save_step1">
    <s:url value="/popup/getHelp/helpDetailsSaveFamilyHistory.action" id="helpUrl" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="saveFamilyHistory.title">
        <fhh:cancelMessage cancelPage="${cancelPage}"/>
        <fhh:errorMessages/>
        <fhh:statusMessages/>
        <fhh:processSteps activeStep="1"/>
        <h4><fmt:message key="saveFamilyHistory.text.p1.why" /></h4>
        <p><fmt:message key="saveFamilyHistory.text.p1.so" /></p>
        <hr />
        <div class="clear"></div><br />
        <fhh:conditionalMshv>
        <table class="twoCol">
            <tbody>
            <tr>
        </fhh:conditionalMshv>
                <td class="colOne">
                <img src="<s:url value="/images/download_xml.gif" />" class="largeIcon" align="left" alt="Save to Computer or Portable Device" />
                <h4><fmt:message key="saveFamilyHistory.text.p2.file" /></h4>
                <div class="clear"></div>     
                <p><fmt:message key="saveInformation.helpText" /></p>
                <p class="small nopad"><a id="localSaveInfo" href="javascript:;" onclick="Effect.toggle('saving_locally', 'blind');" class="toggledisplay"><fmt:message key="saveInformation.downloading.info" /></a></p>
                <div id="saving_locally" style="display:none;">
                    <p><strong><fmt:message key="saveInformation.saveAsXML" /></strong> <fmt:message key="saveInformation.saveAsXML.info" /> </p>
                    <p><strong><fmt:message key="saveInformation.saveAsXML.remember" /></strong> <fmt:message key="saveInformation.saveAsXML.saveLater" /></p>
                </div>
                <div class="buttonContainer" >
                 <div class="text_float"><p><fmt:message key="saveInformation.saveAsXML.fileName" /> &nbsp;&nbsp; <strong>${saveFileName}</strong></p></div>
                    <div class="btn_float_right"><a id="saveToComputer" href="${saveXmlUrl}"><fmt:message key="saveInformation.button.save" /></a></div>
                    <div class="clear"></div>
                    <p class="small" align="right"><br /><em><fmt:message key="saveInformation.saveAsXML.downloadInfo" /> </em></p>
                </div>
        <fhh:conditionalMshv>
</td>
                <td class="colTwo">
          
                <a href="http://www.healthvault.com/personal" target="_new"><img class="largeIcon" align="left" src="<s:url value="/images/tile_HealthVaultBlue_h_rgb_147width.png" />" alt="Copy to Microsoft HealthVault" /></a>
                <h4 class="h4_with_icon"><fmt:message key="saveInformation.hv.title" /></h4>      
                <div class="clear"></div>
                <p><fmt:message key="saveInformation.hv.info1" /></p>
                <p><fmt:message key="saveInformation.hv.info2" /></p>
                <p class="small nopad"><a href="javascript:;" onclick="Effect.toggle('hv_info', 'blind');" class="toggledisplay"><fmt:message key="saveInformation.hv.tell" /></a>
                <div id="hv_info" style="display:none;">
                    <p><fmt:message key="saveInformation.hv.additionalInfo.p1" /></p>
                    <p><fmt:message key="saveInformation.hv.additionalInfo.p2" /></p>
                    <p><fmt:message key="saveInformation.hv.additionalInfo.privacy" /> <a href="http://www.healthvault.com/privacy-policy.html" target="_blank">http://www.healthvault.com/privacy-policy.html</a> 
                       <fmt:message key="saveInformation.hv.additionalInfo.tos" /> <a href="http://www.healthvault.com/privacy-policy.html" target="_blank">http://www.healthvault.com/terms-of-use.html</a></p>
                </div>
                <div class="hvButtonContainer">
                    <div class="btn_float_right"><a class="float_right" href="#" id="save_to_hv" onclick="redirectPage('${warnLeavingFhh}');"><img src="<s:url value="/images/copy_to_hv_sm.gif" />" alt="Copy to Microsoft HealthVault" align="right" /></a></div>
                    <div class="clear"></div>
                    <p class="small" align="right"><br /><em><fmt:message key="saveInformation.hv.prompted" /></em></p>
                </div>
                </td>
            </tr>
            </tbody>
            </table>
            </fhh:conditionalMshv>
            <div class="clear"></div>
            <hr />
            <div class="text_float"><p><a href="javascript:;" onclick="Effect.toggle('howtosave', 'blind');" class="toggledisplay"><fmt:message key="saveInformation.hv.downloadInstructions" /></a></p></div>
            <div class="buttonContainer">
                 <div class="centered"><a id="cancel" href="javascript:;" onclick="window.top.hidePopWin()"><fmt:message key="saveInformation.button.cancel" /></a></div>
            </div>
            <div class="clear"></div>
        </div>
        <%@ include file="downloading_howtosave.jsp" %>
    </fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("localSaveInfo");
</script>

