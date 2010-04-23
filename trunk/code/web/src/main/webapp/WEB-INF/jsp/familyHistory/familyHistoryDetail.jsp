<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
    
<s:form cssClass="form" method="post" id="personForm" theme="readonly_xhtml">

<s:url value="/popup/addPerson/addPerson.action" id="addPersonUrl" />
<s:url value="/popup/selectRelative/selectRelative.action" id="selectRelativeUrl" />
<s:url value="/popup/saveFamilyHistory/saveFamilyHistory.action" id="saveFamilyHistoryUrl" />
<c:url value="/viewReport/viewReport.action" var="viewReport" />
<c:choose>
    <c:when test="${!person.completedForm && !person.unmatchedCondition}">
        <h1><fmt:message key="familyHistory.title"/></h1>
        <h2><fmt:message key="familyHistory.create.title"/></h2>
        <p><fmt:message key="familyHistory.create.text"/></p>
        <hr />
        <!-- if we don't have a person, show this button -->
        <div class="buttonContainer"><a id="addPersonAnchor" href="javascript://nop/" onclick="handlePopup('${addPersonUrl}');"><fmt:message key="button.createHistory"/></a></div>
    </c:when>
    <c:otherwise>
        <h1><fmt:message key="familyHistory.title"/></h1>
        <h2><fmt:message key="familyHistory.family.title"/></h2>
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
        <p><fmt:message key="familyHistory.family.text.youCan"/></p>
        <ul>
            <li><fmt:message key="familyHistory.family.text.item.editInfo1"/> 
                <img src="<s:url value="/images/icon_edit.gif"/>" alt="<fmt:message key="button.update"/>" title="<fmt:message key="button.update"/>" height="14" width="14" /> 
                (<fmt:message key="button.update"/>) <fmt:message key="familyHistory.family.text.item.editInfo2"/></li>
            <li><fmt:message key="familyHistory.family.text.item.addInfo"/>
                <img src="<s:url value="/images/icon_add.gif"/>" alt="<fmt:message key="button.add"/>" title="<fmt:message key="button.add"/>" height="14" width="14" /> 
                (<fmt:message key="button.add"/>) <fmt:message key="familyHistory.family.text.item.editInfo2"/></li>
            <li><fmt:message key="familyHistory.family.text.item.addRel"/> "<fmt:message key="button.addAnotherFamily"/>."</li>
            <li><fmt:message key="familyHistory.family.text.item.removeRel"/>
                <img src="<s:url value="/images/icon_trash.gif"/>" alt="<fmt:message key="button.remove"/>" title="<fmt:message key="button.remove"/>" height="14" width="14" /> 
                (<fmt:message key="button.remove"/>) <fmt:message key="familyHistory.family.text.item.editInfo2"/>
                <fmt:message key="familyHistory.family.text.item.removeRel2"/></li>
        </ul>
        <p><fmt:message key="familyHistory.family.text.save"/></p>
        <hr />
        <div class="buttonContainer">
            <!-- if we do have a person, show this button -->
            <a href="javascript://nop/" onclick="handlePopup('${selectRelativeUrl}');"><fmt:message key="button.addAnotherFamily"/></a>
            <a href="javascript://nop/" onclick="handlePopup('${saveFamilyHistoryUrl}');"><fmt:message key="button.saveXmlDocument"/></a>
            <a href="${viewReport}"><fmt:message key="menu.text.viewReport" /></a>
        </div>
        <s:if test="person.familyContainsUnmatchedCondition">
            <img width="16" height="16" src="<s:url value="/images/icon_unmatched_condition.gif"/>" alt="<fmt:message key="button.unmatchedConditions"/>" title="<fmt:message key="button.unmatchedConditions"/>" />
            <span class="errorMessage"><fmt:message key="familyHistory.family.text.unmatchedCondition"/></span>
        </s:if>
        <c:if test="${!empty person.htmImportDroppedRelatives}">
            <s:url value="/popup/droppedRelatives/droppedRelatives.action" id="droppedRelativesUrl" />
            <script type="text/javascript">
                window.onload = popupWindow('${droppedRelativesUrl}');
            </script>
            <s:url value="/popup/droppedRelatives/droppedRelatives.action" id="droppedRelativesUrl" />
            <p><span class="errorMessage"><fmt:message key="familyHistory.family.text.droppedRelativesText" /> <a href="javascript://nop/" onclick="popupWindow('${droppedRelativesUrl}')"><fmt:message key="familyHistory.family.text.droppedRelatives" /></a></span></p>
        </c:if>
    </c:otherwise>
</c:choose>
    
    <table border="0" cellpadding="0" cellspacing="0" class="datatableWrapper">
    <tbody>
        <tr>
            <td class="datatableWrapperInner">
            <table class="dataListing" summary="<fmt:message key="familyHistory.table.summary"/>" border="0" cellpadding="0" cellspacing="0">

            <colgroup span="2" />
            <colgroup span="3" width="0*" class="action" />
            <thead>
                <tr>
                    <th scope="col" class="nowrap"><fmt:message key="familyHistory.table.name"/></th>
                    <th scope="col" abbr="Relationship" class="nowrap"><fmt:message key="familyHistory.table.relationship"/></th>
                    <th scope="col" abbr="Add" class="nowrap"><fmt:message key="button.add"/></th>
                    <th scope="col" abbr="Update" class="nowrap"><fmt:message key="button.update"/></th>
                    <th scope="col" abbr="Remove" class="nowrap"><fmt:message key="button.remove.relative"/></th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td class="sectionHead" colspan="5" scope="colgroup">
                    <fmt:message key="familyHistory.table.myFamily"/>
                </td>
            </tr>
            <c:if test="${person.completedForm || person.unmatchedCondition}">
                <!-- father -->
                <c:if test="${!empty person.father}">
                    <s:url value="/popup/addRelative/addPerson.action" id="editRelativeUrl">
                        <s:param name="relativeId">${person.father.id}</s:param>
                    </s:url>
                    <tr class="relative">
                        <td scope="row"><table cellpadding="0" cellspacing="0"><s:textfield name="person.name" value="%{person.father.name}"/></table></td>
                        <td><table cellpadding="0" cellspacing="0"><s:textfield name="person.relationship" value="%{getText(person.father.codeEnum.resourceKey)}"/></table></td>
                        <c:choose>
                            <c:when test="${person.father.completedForm}">
                                <td class="action">&nbsp;</td>
                                <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_edit.gif"/>" alt="<fmt:message key="button.update"/>" title="<fmt:message key="button.update"/>" /></a></td>
                            </c:when>
                            <c:otherwise>
                                <s:if test="person.father.unmatchedCondition">
                                    <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_unmatched_condition.gif"/>" alt="<fmt:message key="button.unmatchedConditions"/>" title="<fmt:message key="button.unmatchedConditions"/>" /></a></td>
                                    <td class="action">&nbsp;</td>
                                </s:if>
                                <s:else>
                                    <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_add.gif"/>" alt="<fmt:message key="button.add"/>" title="<fmt:message key="button.add"/>" /></a></td>
                                    <td class="action">&nbsp;</td>
                                </s:else>
                            </c:otherwise>
                        </c:choose>
                        <td>&nbsp;</td>
                    </tr>
                </c:if>
                <!-- mother -->
                <c:if test="${!empty person.mother}">
                    <s:url value="/popup/addRelative/addPerson.action" id="editRelativeUrl">
                        <s:param name="relativeId">${person.mother.id}</s:param>
                    </s:url>
                    <tr class="relative">
                        <td scope="row"><table cellpadding="0" cellspacing="0"><s:textfield name="person.name" value="%{person.mother.name}"/></table></td>
                        <td><table cellpadding="0" cellspacing="0"><s:textfield name="person.relationship" value="%{getText(person.mother.codeEnum.resourceKey)}"/></table></td>
                        <c:choose>
                            <c:when test="${person.mother.completedForm}">
                                <td class="action">&nbsp;</td>
                                <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_edit.gif"/>" alt="<fmt:message key="button.update"/>" title="<fmt:message key="button.update"/>" /></a></td>
                            </c:when>
                            <c:otherwise>
                                <s:if test="person.mother.unmatchedCondition">
                                    <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_unmatched_condition.gif"/>" alt="<fmt:message key="button.unmatchedConditions"/>" title="<fmt:message key="button.unmatchedConditions"/>" /></a></td>
                                    <td class="action">&nbsp;</td>
                                </s:if>
                                <s:else>
                                    <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_add.gif"/>" alt="<fmt:message key="button.add"/>" title="<fmt:message key="button.add"/>" /></a></td>
                                    <td class="action">&nbsp;</td>
                                </s:else>
                            </c:otherwise>
                        </c:choose>
                        <td>&nbsp;</td>
                    </tr>
                </c:if>
                <!-- self -->
                <tr class="proband">
                    <s:url value="/popup/addPerson/addPerson.action" id="editPersonUrl" />
                    <td scope="row"><table cellpadding="0" cellspacing="0"><s:textfield name="person.name" readonly="true" /></table></td>
                    <td><table cellpadding="0" cellspacing="0"><tr><td><fmt:message key="relativeCode.self"/></td></tr></table></td>
                    <s:if test="person.unmatchedCondition">
                        <td class="action">
                            <a href="javascript://nop/" onclick="handlePopup('${editPersonUrl}');"><img src="<s:url value="/images/icon_unmatched_condition.gif"/>" alt="<fmt:message key="button.update"/>" title="<fmt:message key="button.update"/>" /></a>
                        </td>
                        <td class="action">&nbsp;</td>
                    </s:if>
                    <s:else>
                        <td class="action">&nbsp;</td>
                        <td class="action">
                            <a href="javascript://nop/" onclick="handlePopup('${editPersonUrl}');"><img src="<s:url value="/images/icon_edit.gif"/>" alt="<fmt:message key="button.update"/>" title="<fmt:message key="button.update"/>" /></a>
                        </td>
                    </s:else>
                    <td class="action">&nbsp;</td>
                </tr>
                <!-- children -->
                <c:if test="${!empty person.descendants}">
                    <c:forEach items="${person.descendants}" var="currRelative" varStatus="status">
                        <s:url value="/popup/addRelative/addPerson.action" id="editRelativeUrl">
                            <s:param name="relativeId">${currRelative.id}</s:param>
                        </s:url>
                        <s:url value="/familyHistory/removeRelative.action" id="removeRelativeUrl">
                            <s:param name="removeRelativeId">${currRelative.id}</s:param>
                        </s:url>
                        <tr class="relative">
                            <td scope="row"><table cellpadding="0" cellspacing="0"><s:textfield name="person.name" value="%{#attr.currRelative.name}"/></table></td>
                            <td><table cellpadding="0" cellspacing="0"><s:textfield name="person.relationship" value="%{getText(#attr.currRelative.codeEnum.resourceKey)}"/></table></td>
                            <c:choose>
                                <c:when test="${currRelative.completedForm}">
                                    <td class="action">&nbsp;</td>
                                    <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_edit.gif"/>" alt="<fmt:message key="button.update"/>" title="<fmt:message key="button.update"/>" /></a></td>
                                </c:when>
                                <c:otherwise>
                                    <s:if test="#attr.currRelative.unmatchedCondition">
                                        <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_unmatched_condition.gif"/>" alt="<fmt:message key="button.unmatchedConditions"/>" title="<fmt:message key="button.unmatchedConditions"/>" /></a></td>
                                        <td class="action">&nbsp;</td>
                                    </s:if>
                                    <s:else>
                                        <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_add.gif"/>" alt="<fmt:message key="button.add"/>" title="<fmt:message key="button.add"/>" /></a></td>
                                        <td class="action">&nbsp;</td>
                                    </s:else>
                                </c:otherwise>
                            </c:choose>
                            <td class="action"><a href="${removeRelativeUrl}"><img src="<s:url value="/images/icon_trash.gif"/>" alt="<fmt:message key="button.remove.relative"/>" title="<fmt:message key="button.remove.relative"/>" /></a></td>
                        </tr>
                    </c:forEach>
                </c:if>
                <!-- siblings -->
                <c:if test="${!empty relativeBranch.siblings}">
                    <c:forEach items="${relativeBranch.siblings}" var="currRelative" varStatus="status">
                        <s:url value="/popup/addRelative/addPerson.action" id="editRelativeUrl">
                            <s:param name="relativeId">${currRelative.id}</s:param>
                        </s:url>
                        <s:url value="/familyHistory/removeRelative.action" id="removeRelativeUrl">
                            <s:param name="removeRelativeId">${currRelative.id}</s:param>
                        </s:url>
                        <tr class="relative">
                            <td scope="row"><table cellpadding="0" cellspacing="0"><s:textfield name="person.name" value="%{#attr.currRelative.name}"/></table></td>
                            <td><table cellpadding="0" cellspacing="0"><s:textfield name="person.relationship" value="%{getText(#attr.currRelative.codeEnum.resourceKey)}"/></table></td>
                            <c:choose>
                                <c:when test="${currRelative.completedForm}">
                                    <td class="action">&nbsp;</td>
                                <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_edit.gif"/>" alt="<fmt:message key="button.update"/>" title="<fmt:message key="button.update"/>" /></a></td>
                                </c:when>
                                <c:otherwise>
                                    <s:if test="#attr.currRelative.unmatchedCondition">
                                        <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_unmatched_condition.gif"/>" alt="<fmt:message key="button.unmatchedConditions"/>" title="<fmt:message key="button.unmatchedConditions"/>" /></a></td>
                                        <td class="action">&nbsp;</td>
                                    </s:if>
                                    <s:else>
                                        <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_add.gif"/>" alt="<fmt:message key="button.add"/>" title="<fmt:message key="button.add"/>" /></a></td>
                                        <td class="action">&nbsp;</td>
                                    </s:else>
                                </c:otherwise>
                            </c:choose>
                            <td class="action"><a href="${removeRelativeUrl}"><img src="<s:url value="/images/icon_trash.gif"/>" alt="<fmt:message key="button.remove.relative"/>" title="<fmt:message key="button.remove.relative"/>" /></a></td>
                        </tr>
                    </c:forEach>
                </c:if>
        </c:if>
        <!-- father's branch -->
        <c:if test="${!empty relativeBranch.fatherBranch}">
            <tr>
                <td class="sectionHead" colspan="5" scope="colgroup">
                  <fmt:message key="familyHistory.table.fatherBranch"/>
                </td>
            </tr>
            <c:forEach items="${relativeBranch.fatherBranch}" var="currRelative" varStatus="status">
                <s:url value="/popup/addRelative/addPerson.action" id="editRelativeUrl">
                    <s:param name="relativeId">${currRelative.id}</s:param>
                </s:url>
                <s:url value="/familyHistory/removeRelative.action" id="removeRelativeUrl">
                    <s:param name="removeRelativeId">${currRelative.id}</s:param>
                </s:url>
                <tr class="relative">
                    <td scope="row"><table cellpadding="0" cellspacing="0"><s:textfield name="person.name" value="%{#attr.currRelative.name}"/></table></td>
                    <td><table cellpadding="0" cellspacing="0"><s:textfield name="person.relationship" value="%{getText(#attr.currRelative.codeEnum.resourceKey)}"/></table></td>
                    <c:choose>
                        <c:when test="${currRelative.completedForm}">
                            <td class="action">&nbsp;</td>
                                <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_edit.gif"/>" alt="<fmt:message key="button.update"/>" title="<fmt:message key="button.update"/>" /></a></td>
                        </c:when>
                        <c:otherwise>
                            <s:if test="#attr.currRelative.unmatchedCondition">
                                <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_unmatched_condition.gif"/>" alt="<fmt:message key="button.unmatchedConditions"/>" title="<fmt:message key="button.unmatchedConditions"/>" /></a></td>
                                <td class="action">&nbsp;</td>
                            </s:if>
                            <s:else>
                                <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_add.gif"/>" alt="<fmt:message key="button.add"/>" title="<fmt:message key="button.add"/>" /></a></td>
                                <td class="action">&nbsp;</td>
                            </s:else>
                        </c:otherwise>
                    </c:choose>
                    <c:choose>
                    	<c:when test="${currRelative.removable}">
                            <td class="action"><a href="${removeRelativeUrl}"><img src="<s:url value="/images/icon_trash.gif"/>" alt="<fmt:message key="button.remove.relative"/>" title="<fmt:message key="button.remove.relative"/>" /></a></td>
                        </c:when>
                        <c:otherwise>
                            <td>&nbsp;</td>
                        </c:otherwise>
                    </c:choose>
                </tr>
            </c:forEach>
        </c:if>

        <c:if test="${!empty relativeBranch.motherBranch}">
            <tr>
                <td class="sectionHead" colspan="5" scope="colgroup">
                  <fmt:message key="familyHistory.table.motherBranch"/>
                </td>
            </tr>
            <c:forEach items="${relativeBranch.motherBranch}" var="currRelative" varStatus="status">
                <s:url value="/popup/addRelative/addPerson.action" id="editRelativeUrl">
                    <s:param name="relativeId">${currRelative.id}</s:param>
                </s:url>
                <s:url value="/familyHistory/removeRelative.action" id="removeRelativeUrl">
                    <s:param name="removeRelativeId">${currRelative.id}</s:param>
                </s:url>
                <tr class="relative">
                    <td scope="row"><table cellpadding="0" cellspacing="0"><s:textfield name="person.name" value="%{#attr.currRelative.name}"/></table></td>
                    <td><table cellpadding="0" cellspacing="0"><s:textfield name="person.relationship" value="%{getText(#attr.currRelative.codeEnum.resourceKey)}"/></table></td>
                    <c:choose>
                        <c:when test="${currRelative.completedForm}">
                            <td class="action">&nbsp;</td>
                                <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_edit.gif"/>" alt="<fmt:message key="button.update"/>" title="<fmt:message key="button.update"/>" /></a></td>
                        </c:when>
                        <c:otherwise>
                            <s:if test="#attr.currRelative.unmatchedCondition">
                                <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_unmatched_condition.gif"/>" alt="<fmt:message key="button.unmatchedConditions"/>" title="<fmt:message key="button.unmatchedConditions"/>" /></a></td>
                                <td class="action">&nbsp;</td>
                            </s:if>
                            <s:else>
                                <td class="action"><a href="javascript://nop/" onclick="handlePopup('${editRelativeUrl}');"><img src="<s:url value="/images/icon_add.gif"/>" alt="<fmt:message key="button.add"/>" title="<fmt:message key="button.add"/>" /></a></td>
                                <td class="action">&nbsp;</td>
                            </s:else>
                        </c:otherwise>
                    </c:choose>
                    <c:choose>
                    	<c:when test="${currRelative.removable}">
                            <td class="action"><a href="${removeRelativeUrl}"><img src="<s:url value="/images/icon_trash.gif"/>" alt="<fmt:message key="button.remove.relative"/>" title="<fmt:message key="button.remove.relative"/>" /></a></td>
                        </c:when>
                        <c:otherwise>
                            <td>&nbsp;</td>
                        </c:otherwise>
                    </c:choose>
                </tr>
            </c:forEach>
        </c:if>
        </table>
        </td>
    </tr>
</tbody>
</table>
</s:form>

<div class="buttonContainer">
<c:choose>
    <c:when test="${person.completedForm}">
        <a href="javascript://nop/" onclick="handlePopup('${selectRelativeUrl}');"><fmt:message key="button.addAnotherFamily"/></a>
        <a href="javascript://nop/" onclick="handlePopup('${saveFamilyHistoryUrl}');"><fmt:message key="button.saveXmlDocument"/></a>
        <a href="${viewReport}"><fmt:message key="menu.text.viewReport" /></a>
    </c:when>
</c:choose>
</div>

<%-- BEGIN: Home -> Click Create Family History Button -> On Page Load, simulate user clicking $('addPersonAnchor') --%>
<c:if test="${create == true}">
<script type="text/javascript">
    function addPersonAnchorClick () {
    	activateNavAnchor("navFamilyHistory");
    	initPopUp();
        fireEvent($('addPersonAnchor'), "click");
    }
    addEvent(window, "load", addPersonAnchorClick);
</script>
</c:if>
<c:if test="${create != true}">
    <script type="text/javascript">
        window.onload = activateNavAnchor("navFamilyHistory");
    </script>
</c:if>
<%-- END: Home -> Click Create Family History Button -> On Page Load, simulate user clicking $('addPersonAnchor') --%>
