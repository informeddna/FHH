<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<script type="text/javascript" language="javascript" charset="ISO-8859-1">
// for multi-language support - this term is added dynamically by js when page is created
var removeTxt = '<fmt:message key="button.remove" />';
var DISEASE_NONE = '<fmt:message key="person.disease.none" />';
var SELECT_DISEASE = '<fmt:message key="person.select.disease" />';
</script>
<script type="text/javascript" language="javascript" charset="ISO-8859-1" src="<c:url value='/scripts/addPerson.js'/>"></script>
<script type="text/javascript" language="javascript" charset="ISO-8859-1" src="<c:url value='/scripts/ItemSelectorUtils.js'/>"></script>
<c:choose>
    <c:when test="${!empty selectedCode}">
        <c:set var="actionUrl" value="/popup/addRelative/submitRelative.action" scope="request"/>
        <c:set var="personLabel" value="relative" scope="request"/>
        <c:set var="personObject" value="${relative}" scope="request"/>
        <c:set var="editingRelative" value="true" scope="request"/>
    </c:when>
    <c:otherwise>
        <c:set var="actionUrl" value="/popup/addPerson/submitPerson.action" scope="request"/>
        <c:set var="personLabel" value="person" scope="request"/>
        <c:set var="personObject" value="${person}" scope="request"/>
        <c:set var="editingRelative" value="false" scope="request"/>
    </c:otherwise>
</c:choose>

<s:form action="%{#attr.actionUrl}" cssClass="form" method="post" id="personForm" theme="simple">
<div class="submodalContainer">
    <!-- BEGIN ACCORDION SECTION = PERSONAL INFO -->
    <div class="accordianContainer" id="personalInfo">
        <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="pi-title">
            <colgroup span="1" />
            <colgroup span="1" width="0*" />
            <tr>
                <td class="accordianTitleTd">
                    <c:if test="${editingRelative}">
                        <h2><fmt:message key="addPerson.accordian.titlebar.pi.relative1" /><fmt:message key="${selectedCodeEnum.possessiveResourceKey}" /><fmt:message key="addPerson.accordian.titlebar.pi.relative2" /></h2> 
                    </c:if>
                    <c:if test="${!editingRelative}">
                        <h2><fmt:message key="addPerson.accordian.titlebar.pi" /></h2> 
                    </c:if>
                    <span id="pi-hide" class="showHideText">
                    	<a tabindex="1" href="javascript://nop" onclick="hideStyle('pi-title');$('pi').hide();$('pi-show').show();$('pi-hide').hide();">(<fmt:message key="accordian.titlebar.clickToHide" />)</a>
                    </span>
            		<span id="pi-show" class="showHideText" style="display:none;">
                    	<a tabindex="1" href="javascript://nop" onclick="showStyle('pi-title');$('pi').show();$('pi-show').hide();$('pi-hide').show();">(<fmt:message key="accordian.titlebar.clickToShow" />)</a>
                    </span>
                </td>
                <s:url value="/popup/getHelp/helpDetailsEditPersonalInfo.action" id="helpUrl" />
                <td class="accordianTitleTdBtn">
                     <a tabindex="1" href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="menu.text.getHelp" /></a>
                </td>
            </tr>
        </table>
        <div class="accordianContent" id="pi">
            <c:choose>
                <c:when test="${editingRelative}" >
                    <p><fmt:message key="form.text.relative" /></p>
                </c:when>
                <c:otherwise>
                    <p><fmt:message key="form.text.self" /></p>
                </c:otherwise>
            </c:choose>
            <p><span class="required">*</span><fmt:message key="form.requiredInformation.text" /></p>
                <c:if test="${!empty relativeId}">
                    <s:hidden name="relativeId"/>
                </c:if>
                <table border="0" cellpadding="0" cellspacing="0" class="form" summary="<fmt:message key="form.pi.table.summary" />">
                    <s:textfield key="person.name" name="%{#attr.personLabel}.name" size="30" maxlength="255" theme="xhtml" tabindex="2"/>
                    <%-- Display Relationship if adding Relative --%>
                    <c:if test="${editingRelative}" >
                    <tr>
                    	<th><label for="personRelationship"><fmt:message key="person.relationship" />:</label></th>
                        <td><fmt:message key="${selectedCodeEnum.resourceKey}" /><s:hidden name="selectedCode"/></td>
                    </tr>
               		</c:if>
                    <%-- Error message for Gender --%>
                    <tr>
                        <td colspan="2" valign="top" align="center">
                            <s:if test="fieldErrors['person.gender'] != null">
                                <span class="errorMessage">${fieldErrors['person.gender'][0]}</span>
                            </s:if>
                            <s:if test="fieldErrors['relative.gender'] != null">
                                <span class="errorMessage">${fieldErrors['relative.gender'][0]}</span>
                            </s:if>
                        </td>
                    </tr>
                    <tr>
                        <th><span class="required">*</span><fmt:message key="person.gender" />:</th>
                        <td><s:radio key="person.gender" name="%{#attr.personLabel}.gender"
                                list="genderEnums" listKey="name" listValue="%{getText(resourceKey)}" theme="simple" tabindex="2"/>
                        </td>
                    </tr>
                    
                	<%-- Display Relative Fields if adding Relative --%>
                	<c:if test="${editingRelative}">
                    <s:hidden id="codSubTypesExist" name="codSubTypesExist" value="false"/>
                    <s:hidden name="selectedParentIndex" />
                    <s:hidden name="lastAddedCOD" id="lastAddedCOD" />
                    <tr>
                    	<th><label for="personForm_relative_livingStatusYES"><fmt:message key="relative.livingStatus" /></label></th>
                        <td><s:radio key="" name="relative.livingStatus" onclick="livingStatusChanged()" list="livingStatusEnums" listValue="%{getText(resourceKey)}" theme="simple" tabindex="3" />
                        <%-- living = yes --%>
                        <div id="livingStatusYesSpan" style="display:none;" class="dynamicPanel">
                            <div class="p"><fmt:message key="relative.livingStatus.helpText" /></div>
                            <table border="0" cellpadding="0" cellspacing="0" class="subOptions">
                                <tr errorfor="personForm_dateOfBirthString">
                                    <td colspan="2" valign="top" align="center">
                                        <s:if test="fieldErrors['dateOfBirthString'] != null">
                                            <span class="errorMessage">${fieldErrors['dateOfBirthString'][0]}</span>
                                        </s:if>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label for="personForm_dateOfBirthString"><fmt:message key="person.dateOfBirth" /></label>:</th>
                                    <td>
                                        <s:textfield key="person.dateOfBirth" name="dateOfBirthString" size="30" maxlength="255" theme="simple" tabindex="4" />
                                        <div><fmt:message key="default.date.format" /></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"><span class="or"><fmt:message key="person.height.or" /></span></td>
                                </tr>
                                <tr errorfor="personForm_relativeAge">
                                    <td colspan="2" valign="top" align="center">
                                        <s:if test="fieldErrors['relativeAge'] != null">
                                            <span class="errorMessage">${fieldErrors['relativeAge'][0]}</span>
                                        </s:if>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label for="personForm_relativeAge"><fmt:message key="relative.age" /></label>:</th>
                                    <td>
                                        <s:textfield key="relative.age" name="relativeAge" size="30" maxlength="255" theme="simple" tabindex="5" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"><span class="or"><fmt:message key="person.height.or" /></span></td>
                                </tr>
                                <tr>
                                    <th><label for="personForm_relativeEstimatedAge"><fmt:message key="person.estimatedAgeRange" /></label>:</th>
                                    <td>
                                        <select name="relative.estimatedAgeRange" id="personForm_relativeEstimatedAge" tabindex="10">
                                            <option value=""><fmt:message key="person.select.estimatedAgeRange" /></option>
                                            <c:forEach var="item" items="${ageRangeEnums}">
                                                <c:choose>
                                                    <c:when test="${!empty relative.estimatedAgeRange && item == relative.estimatedAgeRange}">
                                                        <option selected="selected" value="${item}"><fmt:message key="${item.resourceKey}"/></option>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <option value="${item}"><fmt:message key="${item.resourceKey}"/></option>
                                                    </c:otherwise>
                                                </c:choose>
                                            </c:forEach>
                                        </select>
                                    </td>
                                </tr> 
                            </table>
                        </div>
                        <%-- living = no --%>
                        <div id="livingStatusNoSpan" style="display:none;" class="dynamicPanel">
                            <table border="0" cellpadding="0" cellspacing="0" class="subOptions">
                               <tr errorfor="personForm_causeOfDeath">
                                    <td colspan="2" valign="top" align="center">
                                        <s:if test="fieldErrors['causeOfDeath'] != null">
                                            <span class="errorMessage">${fieldErrors['causeOfDeath'][0]}</span>
                                        </s:if>
                                    </td>
                                </tr>
                               
                                <tr>
                                    <th><label for="personForm_causeOfDeath"><fmt:message key="relative.causeOfDeath" />:</label></th>
                                    <td>
                                        <select name="causeOfDeath" id="personForm_causeOfDeath" tabindex="7">
                                            <option value=""><fmt:message key="relative.select.causeOfDeath" /></option>
                                            <c:forEach var="item" items="${diseases}">
                                                <c:choose>
                                                    <c:when test="${!empty causeOfDeath && item.id == causeOfDeath.id}">
                                                        <option selected="selected" value="${item.id}">${item.appDisplay}</option>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <option value="${item.id}">${item.appDisplay}</option>
                                                    </c:otherwise>
                                                </c:choose>
                                            </c:forEach>
                                        </select>
                                    </td>
                                </tr>
                                <%-- COD suboptions --%>
                                <tr>
                                    <th>
                                        <c:choose>
                                            <c:when test="${codSubTypesExist}">
                                                <span id="codSubTypeLabelSpan">
                                            </c:when>
                                            <c:otherwise>
                                                <span id="codSubTypeLabelSpan" style="display:none;">
                                            </c:otherwise>
                                        </c:choose>
                                            <label for="personForm_selectedCODSubType"><fmt:message key="multipleItemSelector.pleaseSpecify" />:</label>
                                        </span>
                                    </th>
                                    <td>
                                        <c:choose>
                                            <c:when test="${codSubTypesExist}">
                                                <span id="codSubTypeSpan">
                                            </c:when>
                                            <c:otherwise>
                                                <span id="codSubTypeSpan" style="display:none;">
                                            </c:otherwise>
                                        </c:choose>
                                            <select name="selectedCODSubType" id="personForm_selectedCODSubType" onchange="codChanged()" tabindex="7">
                                                <option value=""><fmt:message key="person.select.pleaseSpecify" /></option>
                                                <c:forEach var="item" items="${codSubTypes}">
                                                    <c:choose>
                                                        <c:when test="${!empty selectedCODSubType && item.id == selectedCODSubType.id}">
                                                            <option selected="selected" value="${item.id}">${item.appDisplay}</option>
                                                        </c:when>
                                                        <c:otherwise>
                                                            <option value="${item.id}">${item.appDisplay}</option>
                                                        </c:otherwise>
                                                    </c:choose>
                                                </c:forEach>
                                            </select>
                                        </span>
                                    </td>
                                </tr>
                                 <tr errorfor="personForm_otherCOD">
                                    <td colspan="2" valign="top" align="center">
                                        <s:if test="fieldErrors['otherCOD'] != null">
                                            <span class="errorMessage">${fieldErrors['otherCOD'][0]}</span>
                                        </s:if>
                                    </td>
                                </tr>
                              
                                <tr>  
                                    <th>
                                        <c:choose>
                                            <c:when test="${!empty otherCOD or !empty fieldErrors['otherCOD']}">
                                                <span id="codOtherLabelSpan">
                                            </c:when>
                                            <c:otherwise>
                                                <span id="codOtherLabelSpan" style="display:none;">
                                            </c:otherwise>
                                        </c:choose>
                                            <label for="codOther"><fmt:message key="multipleItemSelector.pleaseSpecify" />:</label>
                                        </span>
                                    </th>
                                    <td>
                                        <c:choose>
                                            <c:when test="${!empty otherCOD or !empty fieldErrors['otherCOD']}">
                                                <span id="codOtherSpan">
                                            </c:when>
                                            <c:otherwise>
                                                <span id="codOtherSpan" style="display:none;">
                                            </c:otherwise>
                                        </c:choose>
                                        <s:textfield id="otherCOD" name="otherCOD" tabindex="9" size="45" maxlength="255" onblur="codChanged()" />
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th><label for="personForm_relative_ageAtDeath"><fmt:message key="relative.ageAtDeath" />:</label></th>
                                    <td>
                                        <select name="relative.ageAtDeath" id="personForm_relative_ageAtDeath" onchange="codChanged()" tabindex="6">
                                            <option value=""><fmt:message key="relative.select.ageAtDeath" /></option>
                                            <c:forEach var="item" items="${ageRangeEnums}">
                                                <c:choose>
                                                    <c:when test="${!empty relative.ageAtDeath && item == relative.ageAtDeath}">
                                                        <option selected="selected" value="${item}"><fmt:message key="${item.resourceKey}"/></option>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <option value="${item}"><fmt:message key="${item.resourceKey}"/></option>
                                                    </c:otherwise>
                                                </c:choose>
                                            </c:forEach>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
                </c:if>
                <%-- DOB (Self) --%>
                <c:if test="${!editingRelative}">
                    <%-- Error message for date of birth --%>
                    <tr errorfor="personForm_dateOfBirthString">
                        <td colspan="2" valign="top" align="center">
                            <s:if test="fieldErrors['dateOfBirthString'] != null">
                                <span class="errorMessage">${fieldErrors['dateOfBirthString'][0]}</span>
                            </s:if>
                        </td>
                    </tr>
                    <tr>
                        <th><span class="required">*</span><label for="personForm_dateOfBirthString"><fmt:message key="person.dateOfBirth" /></label>:</th>
                        <td>
                            <s:textfield key="person.dateOfBirth" name="dateOfBirthString" size="30" maxlength="255" theme="simple" tabindex="10" />
                            <div><fmt:message key="default.date.format" /></div>
                        </td>
                    </tr>
                </c:if>
                <%-- Twin + Adopted + Height + Weight (Self & Relative)  --%>
                <tr>
                    <th>
                    	<c:if test="${editingRelative}" >
                        	<fmt:message key="relative.twinStatus" />
                        </c:if>
                    	<c:if test="${!editingRelative}" >
                        	<fmt:message key="person.twinStatus" />
                        </c:if>
                    </th>
                    <td><s:radio key="" id="twinStatus" name="%{#attr.personLabel}.twinStatus" list="twinStatusEnums" listValue="%{getText(resourceKey)}" theme="simple" tabindex="11" /></td>
                </tr>
                <tr>
                    <th>
                        <label for="personAdopted">
                        	<c:if test="${editingRelative}" >
                        		<fmt:message key="relative.adoptedStatus" />
                            </c:if>
                        	<c:if test="${!editingRelative}" >
                        		<fmt:message key="person.adoptedStatus" />
                            </c:if>
                        </label>
                    </th>
                    <td><s:checkbox key="" id="personAdopted" name="%{#attr.personLabel}.adopted" tabindex="12" /> <fmt:message key="term.yes" /></td>
                </tr>
                <c:if test="${!editingRelative}">
                <%-- Error message for height --%>
                <tr errorfor="heightUnit1">
                    <td colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['heightUnit1'] != null">
                            <span class="errorMessage">${fieldErrors['heightUnit1'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr errorfor="heightUnit2">
                    <td colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['heightUnit2'] != null">
                            <span class="errorMessage">${fieldErrors['heightUnit2'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr errorfor="heightMetric">
                    <td colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['heightMetric'] != null">
                            <span class="errorMessage">${fieldErrors['heightMetric'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr>
                    <th><fmt:message key="person.height" />:</th>
                    <td><input id="heightUnit1" name="heightUnit1" type="text" size="6" value="${heightUnit1}" tabindex="13" onblur="clearMetric()"/> <label for="heightUnit1"><fmt:message 
                         key="person.height.Unit1" /></label> &nbsp;&nbsp;<input id="heightUnit2" name="heightUnit2" type="text" size="6" value="${heightUnit2}" tabindex="13" onblur="clearMetric()" /> <label 
                         for="heightUnit2"><fmt:message key="person.height.Unit2" /></label> <span class="or"><fmt:message key="person.height.or" /></span> 
                        <input id="heightMetric" name="heightMetric" type="text" size="6" value="${heightMetric}" tabindex="14" onblur="clearUS()" /> <label for="heightMetric"><fmt:message key="person.height.Metric" /></label>
                    </td>
                </tr>
                <tr errorfor="personForm_weightString">
                    <td colspan="2" valign="top" align="center">
                        <s:if test="fieldErrors['weightString'] != null">
                            <span class="errorMessage">${fieldErrors['weightString'][0]}</span>
                        </s:if>
                    </td>
                </tr>
                <tr>
                    <th><label for="weightString"><fmt:message key="person.weight" />:</label></th>
                    <td>
                        <s:textfield key="person.weight.value" name="weightString" size="5" maxlength="4" theme="simple" tabindex="15" />
                        <s:select key="person.weight.unit" name="person.weight.unit" value="%{person.weight.unit}"
                        list="weightUnitEnums" listValue="%{getText(resourceKey)}" tabindex="15" />
                    </td>
                </tr>
                </c:if>
            </table>
        </div>
    </div>
    <!-- END ACCORDION SECTION = PERSONAL INFO -->
    
	<!-- BEGIN ACCORDION SECTION = HEALTH INFO -->
	<div class="accordianContainer" id="healthInfo">
		<table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="hi-title">
            <colgroup span="1" />
            <colgroup span="1" width="0*" />
            <tr>
                <td class="accordianTitleTd">
                    <c:if test="${editingRelative}">
                        <h2><fmt:message key="addPerson.accordian.titlebar.hi.relative1" /><fmt:message key="${selectedCodeEnum.possessiveResourceKey}" /><fmt:message key="addPerson.accordian.titlebar.hi.relative2" /></h2> 
                    </c:if>
                    <c:if test="${!editingRelative}">
                        <h2><fmt:message key="addPerson.accordian.titlebar.hi" /></h2> 
                    </c:if>
                    <span id="hi-hide" class="showHideText">
                    	<a tabindex="15" href="javascript://nop" onclick="hideStyle('hi-title');$('hi').hide();$('hi-show').show();$('hi-hide').hide();">(<fmt:message key="accordian.titlebar.clickToHide" />)</a>
                    </span>
                    <span id="hi-show" class="showHideText" style="display:none;">
                    	<a tabindex="15" href="javascript://nop" onclick="showStyle('hi-title');$('hi').show();$('hi-show').hide();$('hi-hide').show();">(<fmt:message key="accordian.titlebar.clickToShow" />)</a>
                    </span>
                </td>
                <s:url value="/popup/getHelp/helpDetailsEditPersonalInfo.action" id="helpUrl" />
                <td class="accordianTitleTdBtn">
                    <a tabindex="15" href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="menu.text.getHelp" /></a>
                </td>
            </tr>
        </table>

        <div class="accordianContent" id="hh">
            <p><fmt:message key="person.conditions.helptext1" /> <strong><fmt:message key="person.conditions.helptext2" /></strong>  <fmt:message key="person.conditions.helptext3" /> <strong><fmt:message key="person.ageOfDiagnosisList" /></strong> <fmt:message key="person.conditions.helptext4" /> <strong><fmt:message key="button.addDiseaseToList" /></strong> <fmt:message key="person.conditions.helptext5" /></p>

        </div>
        <c:if test="${!empty legacyWarningDiseases}">
            <div class="errorMessage"><fmt:message key="person.unmatchedCondition.helpText" /></div>
            <ul>
            <c:forEach items="${legacyWarningDiseases}" var="warningDisease">
                <c:choose>
                    <c:when test="${!empty warningDisease.originalText}">
                        <span class="errorMessage"><li><fmt:message key="person.unmatchedCondition.text1" />${warningDisease.escapedOriginalText}<fmt:message key="person.unmatchedCondition.text2" /></li></span>
                    </c:when>
                    <c:otherwise>
                        <span class="errorMessage"><li><fmt:message key="person.unmatchedDiabetes.text" /></li></span>
                    </c:otherwise>
                </c:choose>
            </c:forEach>
            </ul>
            <div class="errorMessage"><fmt:message key="person.unmatchedCondition.helpText2" /></div>
        </c:if>
		
		<fhh:multipleItemTable baseId="selectedDiseases" listField="${selectedDiseases}" listField2="${ageOfDiagnosisList}"
		listFieldName2="ageOfDiagnosisList" listFieldName="selectedDiseases" multiple="true" listLabel="${listLabel}"
		tabIndex="1" objectValue="id" required="false" tableHeader1="person.diseaseCondition" tableHeader2="person.ageOfDiagnosisList" />
	</div>
	<!-- END ACCORDION SECTION = HEALTH INFO -->

	<!-- BEGIN ACCORDION SECTION = FAMILY BACKGROUND INFO -->
	<div class="accordianContainer" id="bkgdInfo">
		<table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="bi-title">
            <colgroup span="1" />
            <colgroup span="1" width="0*" />
            <tr>
                <td class="accordianTitleTd">
                    <c:if test="${editingRelative}">
                        <h2><fmt:message key="addPerson.accordian.titlebar.bi.relative1" /><fmt:message key="${selectedCodeEnum.possessiveResourceKey}" /><fmt:message key="addPerson.accordian.titlebar.bi.relative2" /></h2> 
                    </c:if>
                    <c:if test="${!editingRelative}">
                        <h2><fmt:message key="addPerson.accordian.titlebar.bi" /></h2> 
                    </c:if>
                    <span id="bi-hide" class="showHideText">
                    	<a tabindex="20" href="javascript://nop" onclick="hideStyle('bi-title');$('bi').hide();$('bi-show').show();$('bi-hide').hide();">(<fmt:message key="accordian.titlebar.clickToHide" />)</a>
                    </span>
                    <span id="bi-show" class="showHideText" style="display:none;">
                    	<a tabindex="20" href="javascript://nop" onclick="showStyle('bi-title');$('bi').show();$('bi-show').hide();$('bi-hide').show();">(<fmt:message key="accordian.titlebar.clickToShow" />)</a>
                    </span>
                </td>
                <s:url value="/popup/getHelp/helpDetailsEditPersonalInfo.action" id="helpUrl" />
                <td class="accordianTitleTdBtn">
                     <a tabindex="20" href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="menu.text.getHelp" /></a>
                </td>
            </tr>
        </table>
		<div class="accordianContent" id="bi">
			<table border="0" cellpadding="0" cellspacing="0" class="form" summary="<fmt:message key="form.bi.table.summary" />">
                <c:if test="${!editingRelative}">
                <tbody id="consanguinity">
                    <tr>
                        <td colspan="2">
                        	<div class="p"><label for="personForm_person_consanguinityFlag"><fmt:message key="person.consanguinity" /></label> <s:checkbox name="%{#attr.personLabel}.consanguinityFlag" tabindex="20" /></div>
                            <hr />
                        </td>
                    </tr>
                </tbody>
                </c:if>
				<!-- BEGIN RACE / ETHNICITY INFO -->
                <tbody id="raceEthnicity">
                    <tr>
                        <td colspan="2">
                            <div class="p"><fmt:message key="person.multipleRaces" /></div>
                        </td>
                	</tr>
                    <%-- race --%>
                    <%--See setTabIndexesForCheckboxLists() for tabindexes of races and ethnicities --%>
                    <tr>
                        <th><fmt:message key="person.race" />:</th>
                        <td>
                            <%-- Using html checkboxlist tag to fix Spanish characters in windows --%>
                            <c:forEach items="${races}" var="currentRace" varStatus="status">
                                <c:choose>
                                    <c:when test = "${status.index % 3==0 && status.index ne 0}">
                                        <br />
                                    </c:when>
                                    <c:otherwise></c:otherwise>
                                </c:choose>
                                <c:choose>
                                    <c:when test = "${fn:contains(personObject.raceIds, currentRace.id)}">
                                        <input checked="checked" tabindex="21" name="selectedRaces" value="${currentRace.id}" id="selectedRaces-${status.index + 1}" onclick="raceChanged()" type="checkbox">
                                    </c:when>
                                    <c:otherwise>
                                    	<input tabindex="21" name="selectedRaces" value="${currentRace.id}" id="selectedRaces-${status.index + 1}" onclick="raceChanged()" type="checkbox">
                                    </c:otherwise>
                                </c:choose>
                                <label for="selectedRaces-${status.index + 1}" class="checkboxLabel">${currentRace.appDisplay}</label>
                            </c:forEach>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <div id="asianRaceLabelDiv" style="display:none;">
                                <label><fmt:message key="multipleItemSelector.pleaseSpecify" />:</label>
                            </div>
                        </th>
                        <td>
                            <div id="asianRaceDiv" style="display:none;">
                                <c:forEach items="${asianRaces}" var="currentAsianRace" varStatus="status">
                                    <c:choose>
                                        <c:when test = "${status.index % 3==0 && status.index ne 0}">
                                            <br />
                                        </c:when>
                                        <c:otherwise></c:otherwise>
                                    </c:choose>
                                    <c:choose>
                                        <c:when test = "${fn:contains(personObject.raceIds, currentAsianRace.id)}">
                                            <input checked="checked" tabindex="22" name="selectedAsianRaces" value="${currentAsianRace.id}" id="selectedAsianRaces-${status.index + 1}" type="checkbox">
                                        </c:when>
                                        <c:otherwise>
                                            <input tabindex="22" name="selectedAsianRaces" value="${currentAsianRace.id}" id="selectedAsianRaces-${status.index + 1}" type="checkbox">
                                        </c:otherwise>
                                    </c:choose>
                                    <label for="selectedAsianRaces-${status.index + 1}" class="checkboxLabel">${currentAsianRace.appDisplay}</label>
                                </c:forEach>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <div id="hawaiianRaceLabelDiv" style="display:none;">
                                <label><fmt:message key="multipleItemSelector.pleaseSpecify" />:</label>
                            </div>
                        </th>
                        <td>
                            <div id="hawaiianRaceDiv" style="display:none;">
                                <c:forEach items="${hawaiianRaces}" var="currentHawaiianRace" varStatus="status">
                                    <c:choose>
                                        <c:when test = "${status.index % 3==0 && status.index ne 0}">
                                            <br />
                                        </c:when>
                                        <c:otherwise></c:otherwise>
                                    </c:choose>
                                    <c:choose>
                                        <c:when test = "${fn:contains(personObject.raceIds, currentHawaiianRace.id)}">
                                            <input checked="checked" tabindex="23" name="selectedHawaiianRaces" value="${currentHawaiianRace.id}" id="selectedHawaiianRaces-${status.index + 1}" type="checkbox">
                                        </c:when>
                                        <c:otherwise>
                                            <input tabindex="23" name="selectedHawaiianRaces" value="${currentHawaiianRace.id}" id="selectedHawaiianRaces-${status.index + 1}" type="checkbox">
                                        </c:otherwise>
                                    </c:choose>
                                    <label for="selectedHawaiianRaces-${status.index + 1}" class="checkboxLabel">${currentHawaiianRace.appDisplay}</label>
                                </c:forEach>
                            </div>
                        </td>
                    </tr>
                    <%-- ethnicity --%>
                    <tr>
                        <th><fmt:message key="person.ethnicity" />:</th>
                        <td>
                            <c:forEach items="${ethnicities}" var="currentEthnicity" varStatus="status">
                                <c:choose>
                                    <c:when test = "${status.index % 3==0 && status.index ne 0}">
                                        <br />
                                    </c:when>
                                    <c:otherwise></c:otherwise>
                                </c:choose>
                                <c:choose>
                                    <c:when test = "${fn:contains(personObject.ethnicityIds, currentEthnicity.id)}">
                                        <input checked="checked" tabindex="24" name="selectedEthnicities" value="${currentEthnicity.id}" id="selectedEthnicities-${status.index + 1}" onclick="ethnicityChanged()" type="checkbox">
                                    </c:when>
                                    <c:otherwise>
                                        <input tabindex="24" name="selectedEthnicities" value="${currentEthnicity.id}" id="selectedEthnicities-${status.index + 1}" onclick="ethnicityChanged()" type="checkbox">
                                    </c:otherwise>
                                </c:choose>
                                <label for="selectedEthnicities-${status.index + 1}" class="checkboxLabel">${currentEthnicity.appDisplay}</label>
                            </c:forEach>
                        </td>
                    </tr>
                    <tr>
                        <td class="tdLabel">
                            <div id="hispanicEthnicityLabelDiv" style="display:none;">
                                <label class="label"><fmt:message key="multipleItemSelector.pleaseSpecify" />:</label>
                            </div>
                        </td>
                        <td>
                            <div id="hispanicEthnicityDiv" style="display:none;">
                                <c:forEach items="${hispanicEthnicities}" var="currentHisEthnicity" varStatus="status">
                                    <c:choose>
                                        <c:when test = "${status.index % 3==0 && status.index ne 0}">
                                            <br />
                                        </c:when>
                                        <c:otherwise></c:otherwise>
                                    </c:choose>
                                    <c:choose>
                                        <c:when test = "${fn:contains(personObject.ethnicityIds, currentHisEthnicity.id)}">
                                            <input checked="checked" tabindex="25" name="selectedHispanicEthnicities" value="${currentHisEthnicity.id}" id="selectedHispanicEthnicities-${status.index + 1}" type="checkbox">
                                        </c:when>
                                        <c:otherwise>
                                            <input tabindex="25" name="selectedHispanicEthnicities" value="${currentHisEthnicity.id}" id="selectedHispanicEthnicities-${status.index + 1}" type="checkbox">
                                        </c:otherwise>
                                    </c:choose>
                                    <label for="selectedHispanicEthnicities-${status.index + 1}" class="checkboxLabel">${currentHisEthnicity.appDisplay}</label>
                                </c:forEach>
                            </div>
                        </td>
                    </tr>
                    <tr>
						<s:url value="/popup/getHelp/helpDetailsAshkenaziJew.action" id="helpUrl" />
                    	<td colspan="2" class="colspan"><a tabindex="29" href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="form.bi.helpLink.ashkenaziJew" /></a></td>
                    </tr>
				</tbody>
				<!-- END RACE / ETHNICITY INFO -->
			</table>
		</div>
	</div>
	<!-- END ACCORDION SECTION = FAMILY BACKGROUND INFO -->

	<!-- BEGIN INCLUDE = SAVE CANCEL BUTTONS -->
	<div class="buttonContainer">
	   <c:choose>
            <c:when test="${editingRelative || person.completedForm}" >
                <s:submit cssClass="enableEnterSubmit" value="%{getText('button.save')}" tabindex="30"/>
	        </c:when>
	        <c:otherwise>
        		<s:submit cssClass="enableEnterSubmit" value="%{getText('tree.form.button')}" tabindex="30"/>
            </c:otherwise>
        </c:choose>
	</div>
	<!-- END INCLUDE = SAVE CANCEL BUTTONS -->
</div>
</s:form>
<c:url var="getAutoComplete" value="/popup/addPerson/retrieveAutocompleteConditions.action" />
<c:url var="getDiseaseSubTypes" value="/popup/addPerson/retrieveDiseaseSubTypes.action" />
<ajax:select baseUrl="${getDiseaseSubTypes}"
    source="selectedDiseasesSelectedItem" target="selectedSubType" parameters="currentDiseaseValue={selectedDiseasesSelectedItem}"
    postFunction="finishRetrieveSubType" />
<ajax:autocomplete baseUrl="${getAutoComplete}" className="autocompleter"
        minimumCharacters="3" source="otherDisease" target="otherDisease" parameters="autocompleteDisease={otherDisease}" />
<c:if test="${editingRelative}" >
    <script type="text/javascript">
    window.onload = addRelativeOnLoad();
    </script>
    <c:url var="getCODSubTypes" value="/popup/addRelative/retrieveCODSubTypes.action" />
    <s:if test="fieldErrors['causeOfDeath'] != null">
        <c:set var="execOnLoad" value="true"/>
    </s:if>
    <ajax:select baseUrl="${getCODSubTypes}"
        source="personForm_causeOfDeath" target="personForm_selectedCODSubType" parameters="currentCODValue={personForm_causeOfDeath}"
        postFunction="finishRetrieveCODSubType" executeOnLoad="${execOnLoad}" />
    <ajax:autocomplete baseUrl="${getAutoComplete}" className="autocompleter"
        minimumCharacters="3" source="otherCOD" target="otherCOD" parameters="autocompleteDisease={otherCOD}" />
</c:if>
<c:if test="${!editingRelative}" >
    <script type="text/javascript">
    window.onload = addPersonOnLoad();
    </script>
    <c:url var="getOtherCodValues" value="/popup/addPerson/retrieveDiseaseSubTypes.action" />
</c:if>


<script type="text/javascript">
window.top.centerPopWin();
setFocusToFirstControl();
</script>
