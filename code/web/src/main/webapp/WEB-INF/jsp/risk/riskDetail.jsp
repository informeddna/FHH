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

<div class="buttonContainer">
    <fmt:message key="risk.calculate.update" />
    <c:url value="/familyHistory/familyHistory.action" var="familyHistory" />
    <a id="navFamilyHistory" href="${familyHistory}"><fmt:message key="risk.button.editHistory" /></a>
</div>
<div class="buttonContainer">
    <fmt:message key="risk.colorectal.calculate" />
    <c:url value="/popup/risk/colorectal.action" var="calculateColorectal" />
    <a id="addAnotherFamilyMember1" href="javascript://nop/" onclick="handlePopup('${calculateColorectal}');"><fmt:message key="risk.button.calculate"/></a>
</div>
