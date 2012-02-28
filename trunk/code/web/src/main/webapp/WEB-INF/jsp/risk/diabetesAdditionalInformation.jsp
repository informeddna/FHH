<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div class="submodalContainer" id="diabetesAdditionalInformation">
    <s:url value="/popup/getHelp/helpDetailsColorectalRisk.action" id="helpUrl" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="diabetes.additionalInfo.title">

    </fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("downloadRisk");
</script>

