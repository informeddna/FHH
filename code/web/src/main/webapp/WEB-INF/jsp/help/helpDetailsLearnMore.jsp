<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<%@ include file="/WEB-INF/jsp/help/helpHeader.jsp" %>

<a name="top"></a>
<h1><fmt:message key="help.learnMore.title"/></h1>
<p><a href="#users" target="_self"><fmt:message key="help.learnMore.text.link.users"/></a> | <a href="#adopters" target="_self"><fmt:message key="help.learnMore.text.link.adopters"/></a></p>
<hr />

<a name="users"></a>
<h2><fmt:message key="help.learnMore.text.h2.users" /></h2>

<h4><fmt:message key="help.learnMore.text.h4.whyUseful" /></h4>
<p><fmt:message key="help.learnMore.text.p1.whyUseful" /></p>

<h4><fmt:message key="help.learnMore.text.h4.keyFeatures" /></h4>
<p><fmt:message key="help.learnMore.text.p1.keyFeatures" /></p>

<h4><fmt:message key="help.learnMore.text.h4.formLength" /></h4>
<p><fmt:message key="help.learnMore.text.p1.formLength" /></p>

<h4><fmt:message key="help.learnMore.text.h4.myPrivacy" /></h4>
<p><fmt:message key="help.learnMore.text.p1.myPrivacy" /></p>

<h4><fmt:message key="help.learnMore.text.h4.privacyHealthVault" /></h4>
<p><fmt:message key="help.learnMore.text.p1.privacyHealthVault" /> <a href="http://www.healthvault.com/privacy-policy.html" target="_blank"><fmt:message key="help.learnMore.text.p1.link.privacyHealthVault" /></a>
<fmt:message key="help.learnMore.text.p2.privacyHealthVault" /> <a href="http://www.healthvault.com/terms-of-use.html" target="_blank"><fmt:message key="help.learnMore.text.p2.link.privacyHealthVault" /></a></p>

<h4><fmt:message key="help.learnMore.text.h4.toolHelp" /></h4>
<p><fmt:message key="help.learnMore.text.p1.toolHelp" /> <fmt:message key="help.learnMore.text.p1.toolHelpMs" /><a href="mailto:ncicb@pop.nci.nih.gov"><fmt:message key="help.learnMore.text.p1.toolHelpEmail" /></a> <fmt:message key="help.learnMore.text.p1.toolHelpPhone" /> <fmt:message key="help.learnMore.text.p1.toolHelpHours" /></p>
<p><em><fmt:message key="help.learnMore.text.p1.msnote1"/></em> <fmt:message key="help.learnMore.text.p1.msnote2"/>
<a href="http://support.microsoft.com/healthvault" target="_blank"><fmt:message key="help.learnMore.text.p1.msemail"/></a></p>

<h4><fmt:message key="help.learnMore.text.h4.whyReindex" /></h4>
<p><fmt:message key="help.learnMore.text.p1.whyReindex" /></p>

<h4><fmt:message key="help.learnMore.text.h4.encourageSharing" /></h4>
<p><fmt:message key="help.learnMore.text.p1.encourageSharing" /></p>

<h4><fmt:message key="help.learnMore.text.h4.securityPrecautions" /></h4>
<p><fmt:message key="help.learnMore.text.p1.securityPrecautions" /></p>

<h4><fmt:message key="help.learnMore.text.h4.familyKnowledge" /></h4>
<p><fmt:message key="help.learnMore.text.p1.familyKnowledge" /></p>

<h4><fmt:message key="help.learnMore.text.h4.ehrPhrReady" /></h4>
<p><fmt:message key="help.learnMore.text.p1.ehrPhrReady" /></p>

<h4><fmt:message key="help.learnMore.text.h4.clinicalDecisionSupport" /></h4>
<p><fmt:message key="help.learnMore.text.p1.clinicalDecisionSupport" /></p>

<h4><fmt:message key="help.learnMore.text.h4.doctorsUse" /></h4>
<p><fmt:message key="help.learnMore.text.p1.doctorsUse" /></p>

<h4><fmt:message key="help.learnMore.text.h4.giveAdvice" /></h4>
<p><fmt:message key="help.learnMore.text.p1.giveAdvice" /></p>

<div><a href="#top"><fmt:message key="text.backToTop" /></a></div>
<hr />

<a name="adopters"></a>
<h2><fmt:message key="help.learnMore.text.h2.adopters" /></h2>

<h4><fmt:message key="help.learnMore.text.h4.adoptionMean" /></h4>
<p><fmt:message key="help.learnMore.text.p1.adoptionMean" /></p>

<h4><fmt:message key="help.learnMore.text.h4.likelyAdopters" /></h4>
<p><fmt:message key="help.learnMore.text.p1.likelyAdopters" /></p>

<h4><fmt:message key="help.learnMore.text.h4.whyAdopt" /></h4>
<p><fmt:message key="help.learnMore.text.p1.whyAdopt" /></p>

<h4><fmt:message key="help.learnMore.text.h4.customizeTool" /></h4>
<p><fmt:message key="help.learnMore.text.p1.customizeTool" /></p>

<h4><fmt:message key="help.learnMore.text.h4.adopterObligations" /></h4>
<s:url value="/popup/getHelp/helpDetailsEndUserAgreement.action" id="helpUrl" />
<p><fmt:message key="help.learnMore.text.p1.adopterObligationsPt1" /> <a href="${helpUrl}"><fmt:message key="help.learnMore.text.p1.adopterObligations.eua" /></a> <fmt:message key="help.learnMore.text.p1.adopterObligationsPt2" /></p>

<h4><fmt:message key="help.learnMore.text.h4.howtoProceed" /></h4>
<p><fmt:message key="help.learnMore.text.p1.howtoProceed" /> <a href="http://gforge.nci.nih.gov/projects/fhh" target="_blank"><fmt:message key="help.learnMore.text.p1.howtoProceed.url" /></a><fmt:message key="text.dot" /></p>

<h4><fmt:message key="help.learnMore.text.h4.adoptHelp" /></h4>
<p><fmt:message key="help.learnMore.text.p1.adoptHelp" /></p>
<p style="margin-left:25px;">
	<fmt:message key="help.learnMore.text.p2.adoptHelp.cbiit" /><br />
	<fmt:message key="help.learnMore.text.p2.adoptHelp.email" /> <a href="mailto:ncicb@pop.nci.nih.gov"><fmt:message key="help.learnMore.text.p2.adoptHelp.emailLink" /></a><br />
	<fmt:message key="help.learnMore.text.p2.adoptHelp.localPhone" /><br />
	<fmt:message key="help.learnMore.text.p2.adoptHelp.tollFree" /><br />
	<a href="http://ncicb.nci.nih.gov/support" target="_blank"><fmt:message key="help.learnMore.text.p2.adoptHelp.webLink" /></a>
</p>
<p><fmt:message key="help.learnMore.text.p3.adoptHelp" /></p>

<h4><fmt:message key="help.learnMore.text.h4.hipaaPrivacy" /></h4>
<p><fmt:message key="help.learnMore.text.p1.hipaaPrivacy" /> <a href="http://www.hhs.gov/ocr/privacy/familyhealthhistoryfaqs.pdf" target="_blank"><fmt:message key="help.learnMore.text.p1.hipaaPrivacy.url" /></a><fmt:message key="text.dot" /></p>
<p><fmt:message key="help.learnMore.text.p1.hipaaPrivacy.pdfReader" /><br /><a href="http://get.adobe.com/reader/" target="_blank"><fmt:message key="risk.adobe.download"/></a></p>

<h4><fmt:message key="help.learnMore.text.h4.interoperable" /></h4>
<p><fmt:message key="help.learnMore.text.p1.interoperable" /></p>

<div><a href="#top"><fmt:message key="text.backToTop" /></a></div>

<%@ include file="/WEB-INF/jsp/help/helpFooter.jsp" %>
