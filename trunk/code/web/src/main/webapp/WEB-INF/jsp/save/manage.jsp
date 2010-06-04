<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div class="submodalContainer">
    <s:url value="/popup/getHelp/helpDetailsSaveFamilyHistory.action" id="helpUrl" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="saveFamilyHistory.postSaveManage.title">
        <fhh:processSteps activeStep="2"/>
        <p><fmt:message key="saveFamilyHistory.postSaveManage.intro" /></p>
        <hr />
        <br />
        <div class="clear"></div>
        <table class="twoCol">
            <tr>
                <td class="colOne">
                    <s:url value="/viewReport/downloadPdf.action" id="savePdfUrl" />
                    <img src="../../images/ico_print_table.png" alt="<fmt:message key="saveFamilyHistory.postSaveManage.option1.button.text.alt"/>" class="float_ico" />
                    <h2><fmt:message key="saveFamilyHistory.postSaveManage.option1"/></h2>
                    <p><fmt:message key="saveFamilyHistory.postSaveManage.option1.description"/></p>
                    <div class="buttonContainer floatright"><a href="${savePdfUrl}" target="_blank"><fmt:message key="saveFamilyHistory.postSaveManage.option1.button.text"/></a></div>
                </td>
                <td class="colTwo">
                    <s:url value="/reindex/reindex.action" id="reindexUrl" />
                    <img src="../../images/ico_copy_fhh.png" alt="<fmt:message key="saveFamilyHistory.postSaveManage.option2.button.text.alt"/>" class="float_ico" />
                    <h2><fmt:message key="saveFamilyHistory.postSaveManage.option2"/></h2>
                    <p><fmt:message key="saveFamilyHistory.postSaveManage.option2.description"/></p>
                    <div class="buttonContainer floatright"><a href="javascript://nop/" onclick="window.top.location='${reindexUrl}'"><fmt:message key="saveFamilyHistory.postSaveManage.option2.button.text" /></a></div>
                </td>
            </tr>
        </table>
        <div class="clear"></div>
        <hr />
        <div class="buttonContainer">
            <s:url value="/familyHistory/familyHistory.action" id="returnUrl" />
            <div class="long_buttonCentered"><a id="manageContinue" href="${returnUrl}" onclick="window.top.hidePopWin()"><fmt:message key="saveFamilyHistory.postSaveManage.return.button.text"/></a></div>
        </div>
        <div class="clear"></div>
    </fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("manageContinue");
</script>
