<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div class="submodalContainer" id="diabetesRisk">
    <s:url value="/popup/getHelp/helpDetailsColorectalRisk.action" id="helpUrl" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="diabetes.title">
        <h1>
            <fmt:message key="diabetes.download.title" />
        </h1>
        ${riskHTML}
        <s:url id="saveRiskUrl" value="/popup/diabetesRisk/downloadDiabetesRisk.action"/>
        <p><fmt:message key="risk.colorectal.downloadRisk"/> <a id="downloadRisk" href="${saveRiskUrl}"><fmt:message key="diabetes.downloadRisk.link" /></a></p>
        <s:url id="saveRiskUrl" value="/popup/diabetesRisk/downloadDiabetesLetter.action"/>
        <p><fmt:message key="risk.colorectal.downloadLetter"/> <a id="downloadRisk" href="${saveRiskUrl}"><fmt:message key="risk.colorectal.downloadLetter.link" /></a></p>
        <br/>
        <br/>
        <p><fmt:message key="risk.adobe.text" /><br/><a href="http://get.adobe.com/reader/" target="_blank"><fmt:message key="risk.adobe.download"/></a></p>
        <div class="buttonContainer">
            <a id="cancel" href="javascript:;" onclick="window.top.hidePopWin()"><fmt:message key="risk.button.close" /></a>
        </div>
    </fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("downloadRisk");
</script>

