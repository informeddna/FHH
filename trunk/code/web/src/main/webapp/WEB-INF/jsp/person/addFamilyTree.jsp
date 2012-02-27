<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>

<s:actionerror/>

<!-- used for submit button -->
<s:form action="/popup/addFamilyTree/submitFamilyTree.action" cssClass="form" method="post" id="familyTreeForm" theme="simple">
<div class="submodalContainer">
    <div class="accordianContainer" id="familyTree">
    <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="">
            <colgroup span="1" />
            <colgroup span="1" width="0*" />
            <tr>
                <td class="accordianTitleTd">
                    <h2><fmt:message key="addFamilyTree.accordian.titlebar" /></h2>
                </td>
                <s:url value="/popup/getHelp/helpDetailsAddImmediateFamily.action" id="helpUrl" />
                <td class="accordianTitleTdBtn">
                     <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="menu.text.getHelp" /></a>
                </td>
            </tr>
        </table>
        <div class="accordianContent" id="ft">
            <table border="0" cellpadding="0" cellspacing="0" class="form" summary="<fmt:message key="form.familytree.table.summary"/>">
                <tr>
                   <td colspan="2">
                      <fmt:message key="addFamilyTree.text.p1" />
                   </td>
                </tr>
                <tr errorfor="familyTreeForm_brothers">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['brothers'] != null">
                            <span class="errorMessage">${fieldErrors['brothers'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="tdLabel"><label for="familyTreeForm_brothers" class="label"><fmt:message key="tree.form.relation.brothers" /></label></th>
                    <td><s:textfield key="tree.form.relation.brothers" name="brothers" size="5" maxlength="3" theme="simple" /></td>
                </tr>
                <tr errorfor="familyTreeForm_sisters">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['sisters'] != null">
                            <span class="errorMessage">${fieldErrors['sisters'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="tdLabel"><label for="familyTreeForm_sisters" class="label"><fmt:message key="tree.form.relation.sisters" /></label></th>
                    <td><s:textfield key="tree.form.relation.sisters" name="sisters" size="5" maxlength="3" theme="simple" /></td>
                </tr>
                <tr errorfor="familyTreeForm_sons">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['sons'] != null">
                            <span class="errorMessage">${fieldErrors['sons'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="tdLabel"><label for="familyTreeForm_sons" class="label"><fmt:message key="tree.form.relation.sons" /></label></th>
                    <td><s:textfield key="tree.form.relation.sons" name="sons" size="5" maxlength="3" theme="simple" /></td>
                </tr>
                <tr errorfor="familyTreeForm_daughters">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['daughters'] != null">
                            <span class="errorMessage">${fieldErrors['daughters'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="tdLabel"><label for="familyTreeForm_daughters" class="label"><fmt:message key="tree.form.relation.daughters" /></label></th>
                    <td><s:textfield key="tree.form.relation.daughters" name="daughters" size="5" maxlength="3" theme="simple" /></td>
                </tr>
                <tr errorfor="familyTreeForm_muncles">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['muncles'] != null">
                            <span class="errorMessage">${fieldErrors['muncles'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="tdLabel"><label for="familyTreeForm_muncles" class="label"><fmt:message key="tree.form.relation.muncles" /></label></th>
                    <td><s:textfield key="tree.form.relation.muncles" name="muncles" size="5" maxlength="3" theme="simple" /></td>
                </tr>
                <tr errorfor="familyTreeForm_maunts">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['maunts'] != null">
                            <span class="errorMessage">${fieldErrors['maunts'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="tdLabel"><label for="familyTreeForm_maunts" class="label"><fmt:message key="tree.form.relation.maunts" /></label></th>
                    <td><s:textfield key="tree.form.relation.maunts" name="maunts" size="5" maxlength="3" theme="simple" /></td>
                </tr>
                <tr errorfor="familyTreeForm_puncles">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['puncles'] != null">
                            <span class="errorMessage">${fieldErrors['puncles'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="tdLabel"><label for="familyTreeForm_puncles" class="label"><fmt:message key="tree.form.relation.puncles" /></label></th>
                    <td><s:textfield key="tree.form.relation.puncles" name="puncles" size="5" maxlength="3" theme="simple" /></td>
                </tr>
                <tr errorfor="familyTreeForm_paunts">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['paunts'] != null">
                            <span class="errorMessage">${fieldErrors['paunts'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr>
                    <th scope="row" class="tdLabel"><label for="familyTreeForm_paunts" class="label"><fmt:message key="tree.form.relation.paunts" /></label></th>
                    <td><s:textfield key="tree.form.relation.paunts" name="paunts" size="5" maxlength="3" theme="simple" /></td>
                </tr>
            </table>
            <!-- BEGIN INCLUDE = SAVE CANCEL BUTTONS -->
            <div class="buttonContainer">
                <a id="familyTreeNext" href="#" onclick="return $('familyTreeForm').submit();"><fmt:message key="tree.form.button"/></a>
                &nbsp;&nbsp;&nbsp;
                <c:url var="selfCancel" value="/home.action" />
                <a href="javascript://nop/" onclick="window.top.location='${selfCancel}'"><fmt:message key="button.cancel"/></a>
            </div>
            <!-- END INCLUDE = SAVE CANCEL BUTTONS -->
        </div>
    </div>
</div>
</s:form>
