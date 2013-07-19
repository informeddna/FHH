<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div class="submodalContainer" id="importFamilyHistoryForm">
    <s:url id="helpUrl" action="/popup/getHelp/helpDetailsImportFamilyHistory.action" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="importFamilyHistory.title">
        <div class="box_noshade">
            <s:actionerror/>
            <fhh:errorMessages/>
            <fhh:statusMessages/>
            <div class="thumb"><img src="<s:url value="/images/ico_open_local.gif"/>" alt="<fmt:message key="importLocal.fromPc"/>" /></div>
            <div class="thumb_content">
                <h2><fmt:message key="importLocal.fromPc"/></h2>
                <p><fmt:message key="importLocal.fromPcDetail"/></p>
                <p><fmt:message key="importLocal.fromPcInstruction"/></p>
                <s:if test="fieldErrors['importedFile'] != null">
                        <span class="errorMessage">${fieldErrors['importedFile'][0]}</span>
                </s:if>
<s:form action="/popup/familyHistory/importXmlFile.action"
    enctype="multipart/form-data" method="post" id="importForm" theme="simple"
    onsubmit="$('importingFamilyHistoryLoading').show();$('importFamilyHistoryForm').hide(); return true;">
                <label for="importedFile"><fmt:message key="importFamilyHistory.fileLocation"/></label><s:file key="importedFile" size="40" tabindex="1" requiredLabel="true" />
                <div class="buttonContainer">
                    <div class="btn_float_right"><a id="loadFromComputer" href="#" onclick="$('importingFamilyHistoryLoading').show(); $('importFamilyHistoryForm').hide(); return $('importForm').submit();"><fmt:message key="importLocal.fromPc"/></a></div>
                </div>
</s:form>
            </div>
            <div class="clear"></div>
            <hr />
            <fhh:conditionalMshv>
                <br />
	            <div class="thumb"><a href="http://www.healthvault.com/personal" target="_new"><img src="<s:url value="/images/tile_HealthVaultBlue_h_rgb_147width.png"/>" alt="<fmt:message key="importLocal.fromMshv"/>" /></a></div>
	            <div class="thumb_content">
	                <h2><fmt:message key="importLocal.fromMshv"/></h2>
	                <p><fmt:message key="importLocal.fromMshvDetail1"/></p>
	                <p><fmt:message key="importLocal.fromMshvDetail2"/></p>
	                <div class="hvButtonContainer">
		                <c:url value="/popup/leavingFhhToLoadWarn.action" var="getFromHealthvault" />
	                    <div class="btn_float_right"><a id="loadFromMshv" href="${getFromHealthvault}"><img src="<s:url value="/images/copy_from_hv_sm.gif" />" alt="Copy from Microsoft HealthVault" /></a></div>
	                    <div class="clear"></div>
	                    <p class="small alignright"><em>(<fmt:message key="importLocal.fromMshv.prompt"/>)</em></p>
	                </div>
	            </div>
	            <div class="clear"></div>
                <hr />
            </fhh:conditionalMshv>
            <div class="text_float"><p><a id="showHelp" href="javascript:;" onclick="Effect.toggle('howtoopen', 'blind');" class="toggledisplay"><fmt:message key="importLocal.showInstructions"/></a></p></div>
            <div class="buttonContainer">
                <div class="centered"><a id="cancelButton" href="javascript:;" onclick="window.top.hidePopWin()"><fmt:message key="button.cancel"/></a></div>
            </div>
            <div class="clear"></div>
            <jsp:include page="importFamilyHistoryHelpDetails.jsp"></jsp:include>
        </div>
   </fhh:accordianContainer>
</div>
<%@include file="importingFamilyHistory.jsp" %>



