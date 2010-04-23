<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<title><fmt:message key="saveFamilyHistory.title"/></title>
<s:actionerror/>

<c:set var="actionUrl" value="" scope="request" /> 
<s:url value="/reindex/saveXmlDocument.action" id="saveXmlUrl" />
<s:url value="/viewReport/downloadPdf.action" id="savePdfUrl" />

<s:form action="%{#attr.actionUrl}" cssClass="form" method="post" id="" theme="simple">
<a name="top"></a>
<div class="submodalContainer">
	<div class="accordianContainer" id="saveFamilyHistory">
        <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="">
	        <colgroup span="1" />
	        <colgroup span="1" width="0*" />
	    	<tr>
	        	<td class="accordianTitleTd">
                	<h2><fmt:message key="saveFamilyHistory.title"/></h2> 
                </td>
                <s:url value="/popup/getHelp/helpDetailsSaveFamilyHistory.action" id="helpUrl" />
                <td class="accordianTitleTdBtn">
	                <a href="javascript://nop/" onclick="popupWindow('${helpUrl}"><fmt:message key="menu.text.getHelp" /></a>
                </td>
	        </tr>
	   </table>
	   <div class="accordianContent" id="">
           <h3><fmt:message key="saveFamilyHistory.text.h3.title" /></h3>
	       <p><strong><fmt:message key="saveFamilyHistory.text.p1.why" /></strong> <fmt:message key="saveFamilyHistory.text.p1.so" /></p>
           <hr />
	       <table class="twoCol">
	       <tbody>
	           <tr>
                 <td class="colOne">
	                   <a href="javascript:saveAndDisplayMessage('${saveXmlUrl}', false);"><img src="<s:url value="/images/ico_large_xml.gif"/>" alt="<fmt:message key="button.saveXmlDocument"/>" class="largeIcon" align="left"></a>
	                   <!-- BEGIN INCLUDE = SAVE CANCEL BUTTONS -->
	                   <h4><fmt:message key="saveFamilyHistory.text.p2.save" /><br><fmt:message key="saveFamilyHistory.text.p2.website" /></h4>
	                   <p><strong><fmt:message key="saveFamilyHistory.text.p2.file" /></strong> <fmt:message key="saveFamilyHistory.text.p2" /> <fmt:message key="help.saveHistoryFile.text.p1.process" /></p>
                       <p><strong><fmt:message key="saveFamilyHistory.text.p3.please" /></strong> <fmt:message key="saveFamilyHistory.text.p3.remember" /></p>
                       <s:if test="person.xmlFileSaved">
                           <div id="fileSavedDiv" class="saveMessageContainer">
                               <fmt:message key="saveFamilyHistory.latestFileSaved" />
                           </div>
                       </s:if>
                       <s:else>
                           <div id="fileSavedDiv" style="display: none" class="saveMessageContainer">
                               <fmt:message key="saveFamilyHistory.latestFileSaved" />
                           </div>
                       </s:else>
                       <div class="buttonContainer">
                           <s:url value="/reindex/saveXmlDocument.action" id="saveXmlUrl" />
                           <a href="javascript:saveAndDisplayMessage('${saveXmlUrl}', false);"><fmt:message key="button.saveXmlDocument"/></a>
                       </div>
                    </td>
                   <!-- END INCLUDE = SAVE CANCEL BUTTONS -->
                   <!-- BEGIN INCLUDE = SAVE PDF -->
	               <td class="colTwo">
                        <a href="${savePdfUrl}"><img src="<s:url value="/images/ico_large_pdf.gif"/>" alt="<fmt:message key="button.savePdf"/>" class="largeIcon" align="left"></a>
                        <h4><fmt:message key="saveFamilyHistory.text.p4.save" /><br><fmt:message key="saveFamilyHistory.text.p4.pdf" /></h4>
                        <p><strong><fmt:message key="saveFamilyHistory.text.p4.visual" /></strong> <fmt:message key="saveFamilyHistory.text.p4.visual.details1" />
                        "<fmt:message key="button.savePdf"/>" <fmt:message key="saveFamilyHistory.text.p4.visual.details2" />
                        <fmt:message key="report.title"/> <fmt:message key="saveFamilyHistory.text.p4.visual.details3" />
                        </p>
                        <div class="buttonContainer">
                            <a href="${savePdfUrl}"><fmt:message key="button.savePdf"/></a> 
                        </div>
	               </td>
                   <!-- END INCLUDE = SAVE PDF -->
	           </tr>
	       </tbody>
	       </table>
            
            
            <hr />
            <div class="p"><em><fmt:message key="saveFamilyHistory.additional" /></em> <a href="#firefoxWin" target="_self"><fmt:message key="help.saveHistoryFile.text.firefoxWin" /></a> | <a href="#ieWin" target="_self"><fmt:message key="help.saveHistoryFile.text.ieWin" /></a> | <a href="#safariWin" target="_self"><fmt:message key="help.saveHistoryFile.text.safariWin" /></a></div>
            <hr />
            <!-- BEGIN BROWSER SPECIFIC INSTRUCTIONS FOR SAVING (same content as used for Help file) -->
            <a name="firefoxWin"></a>
            <h2><fmt:message key="help.saveHistoryFile.text.additionalInstructions" /> <fmt:message key="help.saveHistoryFile.text.firefoxWin" /></h2>
            <ol>
                <li>
                    <fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.afterClicking" /> 
                    <strong><fmt:message key="button.saveXmlDocument" /></strong> 
                    <fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.button1" /> 
                    <fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.onlySelect" /> 
                    <strong><fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.saveToDisk" /></strong> 
                    <fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.radioButton" /> 
                    <strong><fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.ok" /></strong> 
                    <fmt:message key="help.saveHistoryFile.text.firefoxWin.item1.button2" />
                </li>
                <li><fmt:message key="help.saveHistoryFile.text.item2" /></li>
            </ol>
            <br />
            <img src="<s:url value="/images/screenshot_saveHistory_firefoxWin.gif"/>" alt="<fmt:message key="screenshot.saveHistoryFile.firefoxWin" />" />
            <div><a href="#top"><fmt:message key="text.backToTop" /></a></div>
            
            <hr />
            <a name="ieWin"></a>
            <h2><fmt:message key="help.saveHistoryFile.text.additionalInstructions" /> <fmt:message key="help.saveHistoryFile.text.ieWin" /></h2>
            <ol>
                <li>
                    <fmt:message key="help.saveHistoryFile.text.item1.afterClicking" /> 
                    <strong><fmt:message key="button.saveXmlDocument" /></strong> 
                    <fmt:message key="help.saveHistoryFile.text.item1.button1" /> 
                    <fmt:message key="help.saveHistoryFile.text.item1.onlyClick" /> 
                    <strong><fmt:message key="help.saveHistoryFile.text.item1.save" /></strong> 
                    <fmt:message key="help.saveHistoryFile.text.item1.button2" />
                </li>
                <li><fmt:message key="help.saveHistoryFile.text.item2" /></li>
            </ol>
            <br />
            <img src="<s:url value="/images/screenshot_saveHistory_ieWin.gif"/>" alt="<fmt:message key="screenshot.saveHistoryFile.ieWin" />" />
            <div><a href="#top"><fmt:message key="text.backToTop" /></a></div>
            
            <hr />
            <a name="safariWin"></a>
            <h2><fmt:message key="help.saveHistoryFile.text.additionalInstructions" /> <fmt:message key="help.saveHistoryFile.text.safariWin" /></h2>
            <ol>
                <li>
                    <fmt:message key="help.saveHistoryFile.text.item1.afterClicking" /> 
                    <strong><fmt:message key="button.saveXmlDocument" /></strong> 
                    <fmt:message key="help.saveHistoryFile.text.item1.button1" /> 
                    <fmt:message key="help.saveHistoryFile.text.item1.onlyClick" /> 
                    <strong><fmt:message key="help.saveHistoryFile.text.item1.save" /></strong> 
                    <fmt:message key="help.saveHistoryFile.text.item1.button2" />
                </li>
                <li><fmt:message key="help.saveHistoryFile.text.item2" /></li>
            </ol>
            <br />
            <img src="<s:url value="/images/screenshot_saveHistory_safariWin.gif"/>" alt="<fmt:message key="screenshot.saveHistoryFile.safariWin" />" />
            <div><a href="#top"><fmt:message key="text.backToTop" /></a></div>
            <!-- END BROWSER SPECIFIC INSTRUCTIONS FOR SAVING -->
        </div>
    </div>
</div>
</s:form>

