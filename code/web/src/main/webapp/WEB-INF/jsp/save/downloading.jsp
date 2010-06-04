<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<s:url value="step1.action" id="cancel" />
<s:url value="manage.action" id="manage" />
<s:url value="/popup/reindex/saveXmlDocument.action" id="saveXmlUrl"></s:url>

<div class="submodalContainer">
    <s:url value="/popup/getHelp/helpDetailsSaveFamilyHistory.action" id="helpUrl" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="downloading.title">
        <fhh:processSteps activeStep="1"/>
        <div class="clear"></div>
        <div class="box_noshade">
            <div class="thumb_content">
                <h2><fmt:message key="downloading.header" /></h2>
                <p><fmt:message key="downloading.instruction.1"  ><fmt:param><a href="${saveXmlUrl}"><fmt:message key="downloading.link" /></a></fmt:param></fmt:message></p>
                <p><fmt:message key="downloading.instruction.2" /></p>
                <p class="small nopad">
                    <a href="javascript:;" 
                    onclick="Effect.toggle('saving_locally', 'blind');Effect.toggle('show_howtosave_link', 'blind'); $('howtosave').hide();"
                    class="toggledisplay"><fmt:message key="downloading.needhelp" /></a>
                </p>
                <div id="saving_locally" style="display: none;">
                    <p><strong><fmt:message key="downloading.savehistory" /></strong><fmt:message key="downloading.savehistory.info" /></p>
                    <p><strong><fmt:message key="downloading.savehistory.please" /></strong><fmt:message key="downloading.savehistory.please.1" /></p>
                </div>
            </div>
            <div class="clear"></div>
            <hr />
            <div class="text_float" id="show_howtosave_link" style="display:none;   "><p><a href="javascript:;" onclick="Effect.toggle('howtosave', 'blind');" class="toggledisplay"><fmt:message key="saveInformation.hv.downloadInstructions" /></a></p></div>
            <div class="buttonContainer">
                <div class="btn_right">
                    <div class="btn_float"><a id="continueSaveLocal" href="${manage}"><fmt:message key="downloading.continue" /></a></div>
                    <div class="btn_float"><a href="${cancel}"><fmt:message key="downloading.cancel" /></a></div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <%@ include file="downloading_howtosave.jsp" %>
    </fhh:accordianContainer>
</div>
<iframe width="0" height="0" style="border=0" src="${saveXmlUrl}"></iframe>
<script type="text/javascript">
    setFocusById("continueSaveLocal");
</script>

