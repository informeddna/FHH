<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div id="importFamilyHistoryForm">
<s:actionerror/>

<s:form action="/popup/familyHistory/importXmlFile.action" namespace="" 
    enctype="multipart/form-data" method="post" id="importForm" theme="simple"
    onsubmit="$('importingFamilyHistoryLoading').style.display='block';$('importFamilyHistoryForm').style.display='none'; return true;">
<div class="submodalContainer">
    <div class="accordianContainer" id="importFamilyHistory">
        <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened">
            <colgroup span="1" />
            <colgroup span="1" width="0*" />
            <tr>
                <td class="accordianTitleTd">
                	<h2><fmt:message key="importFamilyHistory.title"/></h2> 
                </td>
                <s:url id="helpUrl" action="popup/getHelp/helpDetailsImportFamilyHistory" />
                <td class="accordianTitleTdBtn">
                     <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="menu.text.getHelp"/></a>
                </td>
            </tr>
        </table>
        
        <div class="accordianContent" id="">
            <p><fmt:message key="importFamilyHistory.text.fileTypes"/></p>
            <p><fmt:message key="importFamilyHistory.text.p1"/></p>
            <ul>
            	<li><fmt:message key="importFamilyHistory.text.item1"/></li>
            	<li><fmt:message key="importFamilyHistory.text.item2"/></li>
            </ul>
            <s:if test="fieldErrors['upload'] != null">
                <span class="errorMessage">${fieldErrors['upload'][0]}</span>
            </s:if>
            <div class="formBox">
            	<label for="upload"><fmt:message key="importFamilyHistory.fileLocation"/></label><s:file id="upload" name="importedFile" label="Location of file" size="40" tabindex="1" />
            </div>
            
            <div class="buttonContainer">
                <s:submit cssClass="enableEnterSubmit" value="%{getText('tree.form.button')}" tabindex="2" />
            </div>
        </div>
    </div>
</div>
</s:form>
</div>
<%@include file="importingFamilyHistory.jsp" %>



