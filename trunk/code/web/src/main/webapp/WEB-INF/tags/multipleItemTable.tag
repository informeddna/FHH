<%@ tag display-name="multipleItemSelector"
        description="Renders the select list for one or more elements to be added to a table"
        body-content="empty"%>

<%@ attribute name="baseId" required="true" type="java.lang.String"%>
<%@ attribute name="listLabel" required="false" type="java.lang.String" %>
<%@ attribute name="listField" required="true" type="java.lang.Object" %>
<%@ attribute name="listField2" required="true" type="java.lang.Object" %>
<%@ attribute name="listFieldName" required="true" type="java.lang.String" %>
<%@ attribute name="listFieldName2" required="true" type="java.lang.String" %>
<%@ attribute name="tabIndex" required="true" type="java.lang.String" %>
<%@ attribute name="required" required="false" type="java.lang.String" %>
<%@ attribute name="multiple" required="false" type="java.lang.String" %>
<%@ attribute name="tableHeader1" required="true" type="java.lang.String" %>
<%@ attribute name="tableHeader2" required="false" type="java.lang.String" %>
<%@ attribute name="objectLabel" required="false" type="java.lang.String" description="The property that supplies the option label visible to the end user; defaults to name." %>
<%@ attribute name="objectValue" required="false" type="java.lang.String" description="The property that supplies the value returned to the server; defaults to id" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<fmt:setBundle basename="DataElementResources" var="der" scope="application"/>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="caarray" %>

<c:url var="autocompleteUrl" value="/ajax/popup/addPerson/generateDiseaseList.action" />
<s:set value="getText('person.disease')" name="listLabel" />

<c:if test="${empty listLabel}">
    <s:set value="getText(#attr.listFieldName)" name="listLabel" />
</c:if>
<c:if test="${empty objectLabel}">
    <c:set var="objectLabel" value="name"/>
</c:if>
<c:if test="${empty objectValue}">
    <c:set var="objectValue" value="id"/>
</c:if>

<span style="display: none">
    <select id="${baseId}SelectedItemValues" name="${listFieldName}" multiple="${multiple}">
        <option value=""></option>
        <c:choose>
            <c:when test="${multiple != 'true' && !empty listField}">
                    <option selected="selected" id="SelectedItemOption0" value="${listField}">${listField.id}</option>
            </c:when>
            <c:otherwise>
                <c:forEach items="${listField}" var="currentItem" varStatus="status">
                    <c:set var="currId" value="${currentItem.id}${listField2[status.index]}${otherDiseaseValues[status.index]}"/>
                    <option selected="selected" id="SelectedItemOption${currId}" value="${currentItem.id}">${currentItem.id}</option>
                </c:forEach>
            </c:otherwise>
        </c:choose>
    </select>
</span>
<span style="display: none">
    <select id="SelectedAgeValues" name="${listFieldName2}" multiple="${multiple}">
        <option value=""></option>
        <c:choose>
            <c:when test="${multiple != 'true' && !empty listField}">
                    <option selected="selected" id="SelectedAgeOption0" value="${listField2}">${listField2}</option>
            </c:when>
            <c:otherwise>
                <c:forEach items="${listField}" var="currentItem" varStatus="status">
                    <c:set var="currId" value="${currentItem.id}${listField2[status.index]}${otherDiseaseValues[status.index]}"/>
                    <option selected="selected" id="SelectedAgeOption${currId}" value="${listField2[status.index]}">${listField2[status.index]}</option>
                </c:forEach>
            </c:otherwise>
        </c:choose>
    </select>
</span>
<span style="display: none">
    <select id="otherDiseaseValues" name="otherDiseaseValues" multiple="${multiple}">
        <option value=""></option>
        <c:forEach items="${listField}" var="currentItem" varStatus="status">
            <c:set var="currId" value="${currentItem.id}${listField2[status.index]}${otherDiseaseValues[status.index]}"/>
            <option selected="selected" id="otherDiseaseOption${currId}" value="${otherDiseaseValues[status.index]}">${otherDiseaseValues[status.index]}</option>
        </c:forEach>
    </select>
</span>
<div class="accordianContainer" id="healthHistoryTable">
<!-- Selected Item Table -->
<table cellpadding="0" cellspacing="0" class="dataListing" id="healthHistoryTableList" summary="<fmt:message key="form.diseases.table.summary" />">
    <tbody id="${baseId}SelectedItemTable">
    <tr>
        <th class="diseaseCol"><fmt:message key="${tableHeader1}" /></th>
        <th class="ageCol"><fmt:message key="${tableHeader2}" /></th>
        <th class="actionCol"><fmt:message key="form.diseases.table.action"/></th>
    </tr> 
    <c:choose>
        <c:when test="${multiple != 'true' && !empty listField}">
            <tr id="SelectedItemRow0">
                <td class="diseaseCol">
                    <c:choose>
                        <c:when test="${empty currentItem.originalText}">
                            ${currentItem.appDisplay}
                        </c:when>
                        <c:otherwise>
                            ${currentItem.escapedOriginalText}
                        </c:otherwise>
                    </c:choose>
                </td>
                <td class="ageCol">${attr.listField2}</td>
                <td class="actionCol"><a href="javascript://nop/" onclick="ItemSelectorUtils.removeItemFromList('${baseId}', '0');"><fmt:message key="button.remove"/></a></td>
            </tr>
        </c:when>
        <c:otherwise>
            <c:forEach items="${listField}" var="currentItem" varStatus="status">
                <c:set var="currId" value="${currentItem.id}${listField2[status.index]}${otherDiseaseValues[status.index]}"/>
                <tr id="SelectedItemRow${currId}">
                    <td class="diseaseCol">
                        <c:choose>
                            <c:when test="${!empty otherDiseaseValues[status.index]}">
                                ${currentItem.escapedOriginalText}
                            </c:when>
                            <c:otherwise>
                                ${currentItem.appDisplay}
                            </c:otherwise>
                        </c:choose>
                    </td>
                    <td class="ageCol"><fmt:message bundle="${der}" key="${listField2[status.index].resourceKey}"/></td>
                    <td class="actionCol buttonContainer"><a href="javascript://nop/" onclick="ItemSelectorUtils.removeItemFromList('${baseId}', '${currId}');"><fmt:message key="button.remove"/></a></td>
                </tr>
            </c:forEach>
        </c:otherwise>
    </c:choose>
    </tbody>
</table>

<!-- BEGIN YELLOW BOX CONTAINING DISEASE INPUT FORM -->
<table border="0" cellpadding="0" cellspacing="0" class="dataListing" id="healthHistoryTableForm" summary="<fmt:message key="form.hi.table.summary" />">
    <tbody>
    <!-- Select Disease -->
    <tr>
        <td class="diseaseCol">
            <div class="healthHistoryTableSelect">
                <select id="${baseId}SelectedItem" tabindex="16">
                    <c:if test="${empty listField}">
                        <option value=""><fmt:message key="person.disease.none" /></option>
                    </c:if>
                    <c:if test="${!empty listField}">
                        <option value=""><fmt:message key="person.select.disease" /></option>
                    </c:if>
                    <c:forEach var="item" items="${diseases}"><option value="${item.id}">${item.appDisplay}</option></c:forEach>
                </select>
            </div>
            <!-- Select Sub Type -->
            <div class="healthHistoryTableSelect" id="subTypeSpan" style="display: none">
                <div class="moreoptionsrow">
                    <select id="selectedSubType" tabindex="16">
                    </select>
                </div>
            </div>
            <!-- Enter Other Disease -->
            <div class="healthHistoryTableSelect" id="otherDiseaseSpan" style="display: none">
                <div class="moreoptionsrow">
                    <input type="text" id="otherDisease" maxlength="40" tabindex="17" />
                </div>
            </div>
        </td>
        <!-- Select Age of Diagnosis -->
        <td class="ageCol">
            <c:if test="${empty listField}"><div class="healthHistoryTableSelect" id="ageAtDiagnosisSpan" style="display: none"></c:if>
            <c:if test="${!empty listField}"><div class="healthHistoryTableSelect" id="ageAtDiagnosisSpan"></c:if>
                <select id="SelectedAge" tabindex="18">
                <option value=""><fmt:message key="person.select.ageOfDiagnosisList" /></option>
                    <c:forEach var="item" items="${ageRangeEnums}"><option value="${item}"><fmt:message bundle="${der}" key="${item.resourceKey}"/></option></c:forEach>
                </select>
            </div>
        </td>
        <td class="actionCol buttonContainer">
            <c:if test="${empty listField}"><span id="addDiseaseButtonSpan" style="display: none"></c:if>
            <c:if test="${!empty listField}"><span id="addDiseaseButtonSpan"></c:if>
                <a tabindex="19" href="javascript://nop/" onclick="ItemSelectorUtils.addDiseaseToList('${baseId}', '${listFieldName}', '${multiple}', '<%=gov.hhs.fhh.service.util.CurrentLanguageHolder.getCurrentLanguage()%>');"><fmt:message key="button.addDiseaseToList"/></a>
            </span>
        </td>
    </tr>
    </tbody>
</table>
<!-- END YELLOW BOX CONTAINING DISEASE INPUT FORM -->
</div>