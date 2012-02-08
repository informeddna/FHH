<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>

<div class="submodalContainer" id="colorectalRisk">
    <s:url value="/popup/getHelp/helpDetailsRisk.action" id="helpUrl" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="colorectal.title">
        <h1>
            <fmt:message key="colorectal.download.title" />
        </h1>
        <div class="buttonContainer">
            <div class="centered"><a id="cancel" href="javascript:;" onclick="window.top.hidePopWin()"><fmt:message key="saveInformation.button.cancel" /></a></div>
        </div>
    </fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("cancel");
</script>

