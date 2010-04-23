<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<a name="top"></a>
<h1><fmt:message key="report.title"/></h1>
<p><fmt:message key="report.text.p1"/></p>
<p><fmt:message key="report.text.p2"/> "<fmt:message key="button.report.edit"/>." <fmt:message key="report.text.p2b"/></p>

<s:if test="person.familyContainsUnmatchedCondition">
    <img src="<s:url value="/images/icon_unmatched_condition.gif"/>" alt="<fmt:message key="button.unmatchedConditions"/>" title="<fmt:message key="button.unmatchedConditions"/>" />
    <span class="errorMessage"><fmt:message key="report.unmatchedCondition"/></span>
    <c:set var="unmatchedCondition" value="true" scope="request"/>
</s:if>
<s:else>
    <c:set var="unmatchedCondition" value="false" scope="request"/>
</s:else>


<s:url value="/popup/viewReport/changeReport.action" id="changeReportUrl" />
<div class="buttonContainer">
    <s:url value="/popup/saveFamilyHistory/saveFamilyHistory.action" id="saveFamilyHistoryUrl" />
    <c:url value="/familyHistory/familyHistory.action" var="familyHistory" />
    <s:url value="/viewReport/downloadPdf.action" id="savePdfUrl" />
    <a href="${familyHistory}"><fmt:message key="menu.text.myHistory" /></a>
    <a href="javascript://nop/" onclick="showPopUpWindow('${changeReportUrl}', loadViewReportDetail, true);"><fmt:message key="button.report.edit"/></a>
    <a href="javascript://nop/" onclick="showPopUpWindow('${saveFamilyHistoryUrl}', loadViewReportDetail, true);"><fmt:message key="button.saveXmlDocument"/></a>
    <a href="${savePdfUrl}"><fmt:message key="button.printHistory"/></a>
</div>
<c:if test="${showDiagram}">
<hr />
<!-- show diagram only if selected -->
<h2><fmt:message key="report.diagram.head"/></h2>
<h5><fmt:message key="report.date"/>: <fmt:formatDate value="${date}" type="both" dateStyle="full" timeStyle="short" /></h5>
<div class="scrollingBox">
<c:set var="now" value="<%=new java.util.Date()%>"/>
<c:url value="/viewReport/retrieveImage.action" var="retrieveImageUrl" >
    <c:param name="ignore" value="${now.time}"/>
</c:url>
    <img src="${retrieveImageUrl}" alt="<fmt:message key="report.diagram.alt" />" title="<fmt:message key="report.diagram.titleTip" />"/>
</div>
<table class="datatableWrapper">
    <tbody><tr>
        <td class="datatableWrapperInner">
<table border="0" cellpadding="0" cellspacing="0" class="dataListing" summary="<fmt:message key="report.legend.summary"/>">
    <tr>
        <th colspan="4"><fmt:message key="report.legend.title"/></th>
    </tr>
    <tr>
        <td><img src="<s:url value="/images/icon_male.gif"/>" alt="<fmt:message key="icon.report.male"/>" />
         <fmt:message key="report.legend.male"/></td>
        <td><img src="<s:url value="/images/icon_female.gif"/>" alt="<fmt:message key="icon.report.female"/>" />
        <fmt:message key="report.legend.female"/></td>
        <td><img src="<s:url value="/images/icon_maleFemaleHighlight.gif"/>" alt="<fmt:message key="icon.report.diseased"/>" />
        <fmt:message key="report.legend.familyDisease"/></td>
        <td><img src="<s:url value="/images/icon_maleFemaleDec.gif"/>" alt="<fmt:message key="icon.report.deceased"/>" />
        <fmt:message key="report.legend.deceased"/></td>
    </tr>
    <tr>
        <c:if test="${!empty legendList}">
        <c:set var="legendSize" value="0" />
            <c:forEach items="${legendList}" var="legendDisease" varStatus="status">
                <c:choose>
                    <c:when test= "${status.index % 4 == 0 && status.index != 0}">
                        </tr><tr>
                    </c:when>
                 </c:choose>
                 <td>
                    ${legendDisease.escapedGeneratedAbbreviation} =
                    <%-- some diseases do not have displayName - use originalText instead --%>
                    ${legendDisease.escapedReportDisplay}
                </td>
                <c:set var="legendSize" value="${legendSize + 1}"/>
            </c:forEach>
            <!-- clean up the table so there are no hanging cells -->
            <c:if test="${legendSize %4 != 0}">
                    <c:choose>
                        <c:when test= "${legendSize % 4 == 1}">
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            </tr><tr>
                        </c:when>
                        <c:when test= "${legendSize % 4 == 2}">
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            </tr><tr>
                        </c:when>
                        <c:when test= "${legendSize % 4 == 3}">
                            <td>&nbsp;</td>
                            </tr><tr>
                        </c:when>
                     </c:choose>
                 </c:if>
        </c:if>
    </tr>
</table>
</td>
</tr>
</tbody>
</table>

<br />
<br />
<div class="buttonContainer">
    <s:url value="/popup/saveFamilyHistory/saveFamilyHistory.action" id="saveFamilyHistoryUrl" />
    <s:url value="/viewReport/downloadPdf.action" id="savePdfUrl" />
    <a href="${familyHistory}"><fmt:message key="menu.text.myHistory" /></a>
    <a href="javascript://nop/" onclick="showPopUpWindow('${changeReportUrl}', loadViewReportDetail, true);"><fmt:message key="button.report.edit"/></a>
    <a href="javascript://nop/" onclick="showPopUpWindow('${saveFamilyHistoryUrl}', loadViewReportDetail, true);"><fmt:message key="button.saveXmlDocument"/></a>
    <a href="${savePdfUrl}"><fmt:message key="button.printHistory"/></a>
</div>
</c:if>

<c:if test="${showChart}">
<!-- show chart only if selected -->

<hr />
<h2><fmt:message key="report.chart.head"/></h2>
<h5><fmt:message key="report.date"/>: <fmt:formatDate value="${date}" type="both" dateStyle="full" timeStyle="short" /></h5>

<c:set var="viewReportForm" value="${viewReportForm}" scope="request"/>
<c:set var="personObject" value="${person}" scope="request"/>

<c:if test="${showPersonalInfo}">
<!-- show personal info only if selected -->
<table border="0" cellpadding="0" cellspacing="0">
    <tr>
        <th scope="col"><fmt:message key="report.chart.personal"/></th>
    </tr>
    <tr>
        <td>
            <b><fmt:message key="person.age"/>:</b> ${person.myAge}<br />
            <c:if test="${person.height != null}">
                <b><fmt:message key="person.height"/>:</b> <c:if test="${not empty person.height.value}">${person.height.value} <fmt:message key="${person.height.unit.resourceKey}" /></c:if><br />
            </c:if>
            <c:if test="${person.weight != null}">
                <b><fmt:message key="person.weight"/>:</b> <c:if test="${not empty person.weight.value}">${person.weight.value} <fmt:message key="${person.weight.unit.resourceKey}" /></c:if><br />
                <c:if test="${person.height != null}">
                    <b><fmt:message key="person.bmi"/>:</b> <c:if test="${not empty person.bmi}">${person.bmi}</c:if><br />
                </c:if>
            </c:if>

        </td>
    </tr>
</table>
</c:if>

<c:if test="${unmatchedCondition}">
    <p><span class="required">* <fmt:message key="report.unmatchedCondition.text" /></span></p>
</c:if>
<c:set var="relativeReports" value="${relativeReports}" scope="request"/>

<table class="datatableWrapper">
<tbody>
<tr>
<td class="datatableWrapperInner">
<table border="0" cellpadding="0" cellspacing="0" class="dataListing" summary="<fmt:message key="report.table.summary"/>">
    <thead>
        <tr>
            <th scope="col">&nbsp;</th>
            <th scope="col"><fmt:message key="report.table.living"/></th>
            <th scope="col"><fmt:message key="report.table.heartDisease"/></th>
            <th scope="col"><fmt:message key="report.table.stroke"/></th>
            <th scope="col"><fmt:message key="report.table.diabetes"/></th>
            <th scope="col"><fmt:message key="report.table.colonCancer"/></th>
            <th scope="col"><fmt:message key="report.table.breastCancer"/></th>
            <th scope="col"><fmt:message key="report.table.ovarianCancer"/></th>
            <th scope="col"><fmt:message key="report.table.additionalDiseases"/></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="sectionHead" colspan="9" scope="colgroup">
               <fmt:message key="familyHistory.table.myFamily"/>
            </td>
        </tr>
        <!-- family members -->
        <c:if test="${!empty relativeReports}">
            <c:forEach items="${relativeReports}" var="currRelative" varStatus="status">
                <tr class="relative">
                    <td>
                        <c:if test="${showNames}">
                            ${currRelative.name}
                        </c:if>
                        (<fmt:message key="${currRelative.codeEnum.resourceKey}"/>)
                    </td>
                    <td>
                        <c:if test="${!empty currRelative.livingStatusEnum}">
                            <fmt:message key="${currRelative.livingStatusEnum.resourceKey}"/>&nbsp;
                        </c:if> 
                    </td>
                    <td>
                        <c:if test="${!empty currRelative.heartDisease}">
                            <c:forEach items="${currRelative.heartDisease}" var="currCo" varStatus="status">
                                <c:choose>
                                    <c:when test="${highlightDisease.generatedAbbreviation eq currCo.disease.generatedAbbreviation}">
                                        <b>${currCo.disease.reportDisplay}</b>
                                    </c:when>
                                    <c:otherwise>
                                        ${currCo.disease.reportDisplay}
                                    </c:otherwise>
                                </c:choose>
                                (<fmt:message key="report.dx.term"/> <fmt:message key="${currCo.ageRange.resourceKey}" /> )<br />
                            </c:forEach>
                        </c:if>
                        &nbsp;
                    </td>
                    <td>
                        <c:if test="${!empty currRelative.stroke}">
                            <c:forEach items="${currRelative.stroke}" var="currCo" varStatus="status">
                                <c:choose>
                                    <c:when test="${highlightDisease.generatedAbbreviation eq currCo.disease.generatedAbbreviation}">
                                        <b>${currCo.disease.reportDisplay}</b>
                                    </c:when>
                                    <c:otherwise>
                                        ${currCo.disease.reportDisplay}
                                    </c:otherwise>
                                </c:choose>
                                (<fmt:message key="report.dx.term"/> <fmt:message key="${currCo.ageRange.resourceKey}" /> )<br />
                            </c:forEach>
                        </c:if>
                        &nbsp;
                    </td>
                    <td>
                        <c:if test="${!empty currRelative.diabetes}">
                            <c:forEach items="${currRelative.diabetes}" var="currCo" varStatus="status">
                                <c:choose>
                                    <c:when test="${highlightDisease.generatedAbbreviation eq currCo.disease.generatedAbbreviation}">
                                        <b>${currCo.disease.reportDisplay}</b>
                                    </c:when>
                                    <c:otherwise>
                                        ${currCo.disease.reportDisplay}
                                    </c:otherwise>
                                </c:choose>
                                (<fmt:message key="report.dx.term"/> <fmt:message key="${currCo.ageRange.resourceKey}" /> )<br />
                            </c:forEach>
                        </c:if>
                        &nbsp;
                    </td>
                    <td>
                        <c:if test="${!empty currRelative.colonCancer}">
                            <c:forEach items="${currRelative.colonCancer}" var="currCo" varStatus="status">
                                <c:choose>
                                    <c:when test="${highlightDisease.generatedAbbreviation eq currCo.disease.generatedAbbreviation}">
                                        <b>${currCo.disease.reportDisplay}</b>
                                    </c:when>
                                    <c:otherwise>
                                        ${currCo.disease.reportDisplay}
                                    </c:otherwise>
                                </c:choose>
                                (<fmt:message key="report.dx.term"/> <fmt:message key="${currCo.ageRange.resourceKey}" /> )<br />
                            </c:forEach>
                        </c:if>
                        &nbsp;
                    </td>
                    <td>
                        <c:if test="${!empty currRelative.breastCancer}">
                            <c:forEach items="${currRelative.breastCancer}" var="currCo" varStatus="status">
                                <c:choose>
                                    <c:when test="${highlightDisease.generatedAbbreviation eq currCo.disease.generatedAbbreviation}">
                                        <b>${currCo.disease.reportDisplay}</b>
                                    </c:when>
                                    <c:otherwise>
                                        ${currCo.disease.reportDisplay}
                                    </c:otherwise>
                                </c:choose>
                                (<fmt:message key="report.dx.term"/> <fmt:message key="${currCo.ageRange.resourceKey}" /> )<br />
                            </c:forEach>
                        </c:if>
                        &nbsp;
                    </td>
                    <td>
                        <c:if test="${!empty currRelative.ovarianCancer}">
                            <c:forEach items="${currRelative.ovarianCancer}" var="currCo" varStatus="status">
                                <c:choose>
                                    <c:when test="${highlightDisease.generatedAbbreviation eq currCo.disease.generatedAbbreviation}">
                                        <b>${currCo.disease.reportDisplay}</b>
                                    </c:when>
                                    <c:otherwise>
                                        ${currCo.disease.reportDisplay}
                                    </c:otherwise>
                                </c:choose>
                                (<fmt:message key="report.dx.term"/> <fmt:message key="${currCo.ageRange.resourceKey}" /> )<br />
                            </c:forEach>
                        </c:if>
                        &nbsp;
                    </td>
                    <td>
                        <c:if test="${!empty currRelative.additionalDiseases}">
                            <c:forEach items="${currRelative.additionalDiseases}" var="currCo" varStatus="status">
                                <c:if test="${currRelative.unmatchedCondition && currCo.unmatchedCondition}">
                                    <span class="required">*</span>
                                </c:if>
                                <c:choose>
                                    <c:when test="${highlightDisease.generatedAbbreviation eq currCo.disease.generatedAbbreviation}">
                                        <b>${currCo.disease.escapedReportDisplay}</b>
                                    </c:when>
                                    <c:otherwise>
                                        ${currCo.disease.escapedReportDisplay}
                                    </c:otherwise>
                                </c:choose>
                                (<fmt:message key="report.dx.term"/> <fmt:message key="${currCo.ageRange.resourceKey}" /> )<br />
                            </c:forEach>
                        </c:if>
                        &nbsp;
                    </td>

                </tr>
            </c:forEach>
        </c:if>
        </tbody>
</table>
</td>
</tr>
</tbody>
</table>

<br />
<div class="buttonContainer">
    <s:url value="/popup/saveFamilyHistory/saveFamilyHistory.action" id="saveFamilyHistoryUrl" />
    <s:url value="/viewReport/downloadPdf.action" id="savePdfUrl" />
    <a href="${familyHistory}"><fmt:message key="menu.text.myHistory" /></a>
    <a href="javascript://nop/" onclick="showPopUpWindow('${changeReportUrl}', loadViewReportDetail, true);"><fmt:message key="button.report.edit"/></a>
    <a href="javascript://nop/" onclick="showPopUpWindow('${saveFamilyHistoryUrl}', loadViewReportDetail, true);"><fmt:message key="button.saveXmlDocument"/></a>
    <a href="${savePdfUrl}"><fmt:message key="button.printHistory"/></a>
</div>
</c:if>
