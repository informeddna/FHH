<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<!-- BEGIN INCLUDE - footer -->
<table border="0" cellpadding="0" cellspacing="0" class="footerTable">
	<tr>
		<td class="footerTdLinks">
            <s:url value="/popup/getHelp/helpDetailsGlossary.action" id="helpUrl" />
    		<a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.glossary"/></a> | 
            <s:url value="/popup/getHelp/helpDetailsLearnMore.action" id="helpUrl" />
            <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.faq"/></a> | 
            <a href="http://www.hhs.gov/Accessibility.html" target="_blank"><fmt:message key="footer.text.accessibility"/></a> | 
            <a href="http://www.hhs.gov/Privacy.html" target="_blank"><fmt:message key="footer.text.privacy"/></a> | 
            <s:url value="/popup/getHelp/footerDetailsAboutThisSite.action" id="helpUrl" />
            <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.about"/></a> | 
            <s:url value="/popup/getHelp/footerDetailsContactUs.action" id="helpUrl" />
            <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.contact"/></a> | 
            <s:url value="/popup/getHelp/footerDetailsSiteUpdates.action" id="helpUrl" />
            <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.updates"/></a>
		</td>
		<td class="footerTdLogos">
			<img src="<s:url value="/images/logo_hhs.gif"/>" alt="<fmt:message key="icon.text.hhs"/>" />&nbsp;&nbsp;<img src="<s:url value="/images/logo_phs.gif"/>" alt="<fmt:message key="icon.text.phs"/>" />
		</td>
	</tr>
</table>
<!-- END INCLUDE - footer -->
