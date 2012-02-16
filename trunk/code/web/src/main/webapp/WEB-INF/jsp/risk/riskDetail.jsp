<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>

<h1>
	<fmt:message key="risk.title" />
</h1>
<h2>
	<fmt:message key="risk.calculate.title" />
</h2>
<p>
	<fmt:message key="risk.calculate.youCan" />
</p>
<ul>
	<li><fmt:message key="risk.calculate.info1" /></li>
	<li><fmt:message key="risk.calculate.info2" /></li>
</ul>
<p>
	<fmt:message key="risk.calculate.info3" />
</p>

<div class="updateContainer">
    <p><fmt:message key="risk.calculate.update" /></p>
	<div class="buttonContainer">
	    <c:url value="/familyHistory/familyHistory.action" var="familyHistory" />
	    <a id="navFamilyHistory" href="${familyHistory}" class="updatebtn"><fmt:message key="risk.button.editHistory" /></a>
	</div>
</div>
<div class="assessmentContainer">
    <h3><fmt:message key="risk.colorectal.calculate" /></h3>
    <p><fmt:message key="risk.colorectal.riskCalculator" /></p>
	<div class="buttonContainer">
	    <c:url value="/popup/risk/colorectal.action" var="calculateColorectal" />
	    <a id="addAnotherFamilyMember1" href="javascript://nop/" onclick="handlePopup('${calculateColorectal}');" class="assessmentbtn"><fmt:message key="risk.button.calculate"/></a>
	</div>
</div>
