<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<script type="text/javascript" language="javascript" src="<c:url value='/scripts/selectRelative.js'/>"></script>
<script type="text/javascript">
    checkRelativeCode = function() {
        checkRelativeCodeAjax('${checkRelativeCode}');
    }
</script>
<s:form action="/popup/selectRelative/addPerson.action" cssClass="form" method="post" id="relativeForm" theme="simple">

<div class="submodalContainer">
    <%-- BEGIN ACCORDION SECTION = ADD RELATIVE --%>
    <div class="accordianContainer" id="addRel">
        <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="">
            <colgroup span="1" />
            <colgroup span="1" width="0*" />
            <tr>
                <td class="accordianTitleTd">
                    <h2><fmt:message key="selectRelative.accordian.titlebar"/></h2>
                </td>
                <s:url value="/popup/getHelp/helpDetailsAddFamilyMember.action" id="helpUrl" />
                <td class="accordianTitleTdBtn">
                     <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="menu.text.getHelp" /></a>
                </td>
            </tr>
        </table>
        <div class="accordianContent" id="ri">
            <h3><fmt:message key="person.relationship.helpText"/></h3>
            <p><fmt:message key="person.relationship.helpText.p1"/></p>
            <table border="0" cellpadding="0" cellspacing="0" class="form" summary="<fmt:message key="form.addrel.table.summary"/>">
                <%-- Select type of relative to add --%>
                <tr>
                    <th scope="row">
                        <label for="relativeForm_selectedCode" class="label"><fmt:message key="person.relationship"/></label>
                    </th>
                    <c:set var="relationshipHeader" scope="request"><fmt:message key="person.select.relationship"/></c:set>

                    <td>
                        <%-- Using html select tag to fix Spanish characters in windows --%>
                        <select name="selectedCode" id="relativeForm_selectedCode">
                            <option value=""><fmt:message key="person.select.relationship"/></option>
                            <c:forEach items="${relativeCodes}" var="currentItem" varStatus="status">
                                <c:choose>
                                    <c:when test="${!empty selectedCode && currentItem == selectedCode}">
                                        <option selected="selected" value="${currentItem}"><fmt:message bundle="${der}" key="${currentItem.resourceKey}"/></option>
                                    </c:when>
                                    <c:otherwise>
                                    <option value="${currentItem}"><fmt:message bundle="${der}" key="${currentItem.resourceKey}"/></option>
                                    </c:otherwise>
                                </c:choose>
                            </c:forEach>
                        </select>

                    </td>
                </tr>

                <%-- Error message for Maternal/Paternal Specifier --%>
                <tr errorfor="relativeForm_relationshipSpecifier">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['relationshipSpecifier'] != null">
                            <span class="errorMessage">${fieldErrors['relationshipSpecifier'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <%-- Select Maternal/Paternal Specifier --%>
                <tr>
                    <th scope="row">
                        <div id="familyRelationTitleDiv" style="display: none">
                            <fmt:message key="person.familyRelation1"/>&nbsp;<span id="relationTextSpan"></span>&nbsp;<fmt:message key="person.familyRelation2"/>:
                        </div>
                    </th>
                    <td>
                        <div id="familyRelationDiv" style="display: none">
                            <s:select name="relationshipSpecifier" label="" id="relativeForm_relationshipSpecifier" list="relationshipSpecifiers" theme="simple" />
                        </div>
                    </td>
                </tr>

               <tr errorfor="relativeForm_selectedCode">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['selectedCode'] != null">
                            <span class="errorMessage">${fieldErrors['selectedCode'][0]}</span>
                        </s:if>
                    </td>
                </tr>

                <%-- Error message for select Parent --%>
                <tr errorfor="relativeForm_parent">
                    <td scope="row" colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['selectedParentIndex'] != null">
                            <span class="errorMessage">${fieldErrors['selectedParentIndex'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <%-- Select Parent --%>
                <tr>
                    <th scope="row">
                        <div id="parentTitleDiv" style="display: none">
                            <fmt:message key="person.parentRelation1"/>
                            <span id="parentTextSpan"></span>
                            <fmt:message key="person.parentRelation2"/>:
                        </div>
                    </th>
                    <td>
                        <div id="parentDiv" style="display: none">
                            <s:select name="selectedParentIndex" id="relativeForm_parent" list="parents" theme="simple" />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <%-- END ACCORDION SECTION = ADD RELATIVE --%>
    <div class="buttonContainer">
        <a id="submitRelative" href="#" onclick="return $('relativeForm').submit();"><fmt:message key="button.save"/></a>
        &nbsp;&nbsp;&nbsp;
        <a id="cancelRelative" class="enableEnterSubmit" href="javascript:;" onclick="window.top.hidePopWin()"><fmt:message key="button.cancel"/></a>
</div>
<%-- Pass existingRelativeCodes via AJAX --%>
<span style="display: none">
    <select id="existingRelativeCodes" name="existingRelativeCodes" multiple="true">
        <c:forEach items="${existingRelativeCodes}" var="currentItem">
            <option selected="selected" value="${currentItem}"></option>
        </c:forEach>
    </select>
</span>
</s:form>
<s:if test="fieldErrors['relationshipSpecifier'] != null">
    <c:set var="rsExecOnLoad" value="true"/>
</s:if>
<s:if test="fieldErrors['selectedParentIndex'] != null">
    <c:set var="parentExecOnLoad" value="true"/>
</s:if>
<c:url var="checkRelativeCode" value="/popup/addRelative/retrieveRelationshipSpecifiers.action" />
<ajax:select baseUrl="${checkRelativeCode}"
    source="relativeForm_selectedCode" target="relativeForm_relationshipSpecifier" parameters="selectedCodeValue={relativeForm_selectedCode}, existingRelativeCodes={existingRelativeCodes}"
    postFunction="finishRetrieveSpecifier" executeOnLoad="${rsExecOnLoad}" />

<c:url var="retrieveParents" value="/popup/addRelative/retrieveParents.action" />
<ajax:select baseUrl="${retrieveParents}"
    source="relativeForm_selectedCode" target="relativeForm_parent" parameters="selectedCodeValue={relativeForm_selectedCode}"
    postFunction="finishRetrieveParents" executeOnLoad="${parentExecOnLoad}"/>


