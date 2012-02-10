<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div class="submodalContainer" id="colorectalRisk">
    <s:url value="/popup/getHelp/helpDetailsRisk.action" id="helpUrl" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="colorectal.title">
        <h1>
            <fmt:message key="colorectal.download.title" />
        </h1>
        <p><fmt:message key="risk.colorectal.download.text"/></p>
        <div class="buttonContainer">
            <s:url id="saveRiskUrl" value="/popup/risk/downloadColorectalRisk.action"/>
            <div class="centered"><a id="downloadRisk" href="${saveRiskUrl}"><fmt:message key="risk.colorectal.button.downloadAll" /></a></div>
        </div>
        <br/>
        <div class="centered">
            <fmt:message key="risk.adobe.text" /><br/>
            <a href="http://get.adobe.com/reader/" target="_blank"><fmt:message key="risk.adobe.download"/></a>
        </div>
        <div class="buttonContainer">
            <a id="cancel" href="javascript:;" onclick="window.top.hidePopWin()"><fmt:message key="saveInformation.button.cancel" /></a>
        </div>
    </fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("downloadRisk");
</script>

