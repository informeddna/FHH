<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>

<h1>
	<fmt:message key="risk.title" />
</h1>
<h2>
	<fmt:message key="risk.calculate.title" />
</h2>
<p>
	<fmt:message key="risk.calculate.info1" />
</p>

<div class="updateContainer">
    <p><fmt:message key="risk.calculate.update" /></p>
	<div class="buttonContainer_update">
	    <c:url value="/familyHistory/familyHistory.action" var="familyHistory" />
	    <a id="navFamilyHistory" href="${familyHistory}"><fmt:message key="risk.button.editHistory" /></a>
	</div>
</div>
<c:if test="${showCalculateButton}">
	<div class="assessmentContainer">
	    <h3><fmt:message key="risk.colorectal.calculate" /></h3>
	    <p><fmt:message key="risk.colorectal.riskCalculator" /></p>
		<div class="buttonContainer_risk">
		    <c:url value="/popup/colorectalRisk/colorectal.action" var="calculateColorectalRisk" />
		    <a id="calculateColrectalRisk" href="javascript://nop/" onclick="handlePopup('${calculateColorectalRisk}');"><fmt:message key="risk.button.calculate"/></a>
		</div>
	</div>
	<div class="assessmentContainer">
        <h3><fmt:message key="risk.diabetes.calculate" /></h3>
        <p><fmt:message key="risk.diabetes.riskCalculator" /></p>
        <div class="buttonContainer_risk">
            <c:url value="/popup/diabetesRisk/diabetesAdditionalInformation.action" var="calculateDiabetesRisk" />
            <a id="calculateColrectalRisk" href="javascript://nop/" onclick="handlePopup('${calculateDiabetesRisk}');"><fmt:message key="risk.button.calculate"/></a>
        </div>
    </div>
</c:if>
