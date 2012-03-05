<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<c:url value="/familyHistory/familyHistory.action" var="familyHistory" />
<script type="text/javascript" charset="ISO-8859-1">
returnToFamilyHistory = function() {
    window.top.location = '${familyHistory}';
}
</script>
<div class="submodalContainer" id="diabetesAdditionalInformation">
	<s:url value="/popup/getHelp/helpDetailsColorectalRisk.action"
		id="helpUrl" />
	<fhh:accordianContainer helpUrl="${helpUrl}"
		titleTextKey="diabetes.additionalInfo.title">
		<div id="process_steps">
			<div class="process_step_selected">1. Save Your Information</div>
			<div class="process_arrow_right">
				<img alt="Right Arrow" src="/fhh-web/images/process_arrow_right.gif" />
			</div>
			<div class="process_step">2. Manage Your Information</div>
		</div>

		<div id="update_history">
			<p id="update_title">Please update your history in order to get
				accurate results from the Diabetes Risk Calculator.</p>
			<div class="message_copy">Make sure your history is updated for
				mother/father/sister/brother with diabetes and if you have been
				diagnosed with high blood pressure. If you are a woman, please
				update any gestational diabetes history</div>
			<div class="message_copy">
				<div class="buttonContainer">
					<c:url value="/familyHistory/familyHistory.action" var="familyHistory" />
					<a id="editFamilyHistory" href="javascript://nop/" onclick="returnToFamilyHistory();" tabindex="1"><fmt:message key="risk.button.editHistory" /></a>
				</div>
			</div>
		</div>
		<h2>Diabetes Risk Calculator - Please Add Additional Information</h2>
		<s:form action="/popup/diabetesRisk/diabetesRisk.action" cssClass="form" method="post" id="personForm" theme="simple">
		    <span class="required">*</span>Indicates required information.<br />
		    <span class="readonly">*Indicates read-only information.</span><br />
		    <table cellspacing="0" cellpadding="0" border="0" summary="Enter personal information." class="form">
		        <tbody>
		            <tr>
		                <td valign="top" align="center" colspan="2"></td>
		            </tr>
		            <tr errorfor="personForm_dateOfBirthString">
                        <td scope="row" colspan="2" valign="top" align="center"><s:if
                            test="fieldErrors['dateOfBirthString'] != null">
                            <span class="errorMessage">${fieldErrors['dateOfBirthString'][0]}</span>
                        </s:if></td>
                    </tr>
                    <tr>
                        <th scope="row"><span class="required">*</span><label for="personForm_dateOfBirthString"><fmt:message key="person.dateOfBirth" /></label>:</th>
                        <td><s:textfield key="person.dateOfBirth" name="dateOfBirthString" size="30"
                            maxlength="255" theme="simple" tabindex="1" />
                        <div><fmt:message key="default.date.format" /></div>
                        </td>
                    </tr>
		            <%-- Error message for Gender --%>
		            <tr>
		                <td colspan="2" valign="top" align="center" scope="row">
		                    <s:if test="fieldErrors['person.gender'] != null">
		                        <span class="errorMessage">${fieldErrors['person.gender'][0]}</span>
		                    </s:if>
		                </td>
		            </tr>
		            <tr>
		                <th scope="row"><span class="required">*</span><label for="personForm_person_genderMALE"><fmt:message key="person.gender" /></label>:</th>
		                <td><s:radio key="person.gender" name="person.gender" list="genderEnums" listKey="name" listValue="%{getText(resourceKey)}" theme="simple" tabindex="2" /></td>
		            </tr>
                    <fhh:readOnlyCheckbox id="personForm_gestationalDiabetes" conditionTrue="${gestationalDiabetes}" labelKey="If you are a woman, have you ever been diagnosed with gestational diabetes?" />
                    <fhh:readOnlyCheckbox id="personForm_nuclearFamilyDiabetes" conditionTrue="${nuclearFamilyDiabetes}" labelKey="Do you have a mother, father, sister, or brother with diabetes?" />
                    <fhh:readOnlyCheckbox id="personForm_hypertension" conditionTrue="${hypertension}" labelKey="Have you ever been diagnosed with Hypertension? (High Blood Pressure)" />
                    <tr>
                        <th><fmt:message key="person.exerciseMoreThanPeers" /></th>
                        <td><s:checkbox id="exerciseMoreThanPeers" name="person.exerciseMoreThanPeers" tabindex="3" /> <fmt:message
                            bundle="${der}" key="term.yes" /></td>
                    </tr>
                    <tr errorfor="personForm_heightUnit1">
                        <td scope="row" colspan="2" valign="top" align="center"><s:if test="fieldErrors['weightString'] != null">
                            <span class="errorMessage">${fieldErrors['weightString'][0]}</span>
                        </s:if></td>
                    </tr>
                    <tr>
		                <th scope="row"><span class="required">*</span><label for="heightUnit1"><fmt:message key="person.height" /></label>:</th>
		                <td><s:textfield id="heightUnit1" theme="simple" name="heightUnit1" size="6" value="%{heightUnit1}"
		                    tabindex="4" onblur="clearMetric()" /> <label for="heightUnit1"><fmt:message
		                    key="person.height.Unit1" /></label> &nbsp;&nbsp;<s:textfield id="heightUnit2" theme="simple"
		                    name="heightUnit2" size="6" value="%{heightUnit2}" tabindex="5" onblur="clearMetric()" /> <label
		                    for="heightUnit2"><fmt:message key="person.height.Unit2" /></label> <span class="or"><fmt:message
		                    key="person.height.or" /></span> <s:textfield id="heightMetric" theme="simple" name="heightMetric"
		                    size="6" value="%{heightMetric}" tabindex="6" onblur="clearUS()" /> <label for="heightMetric"><fmt:message
		                    key="person.height.Metric" /></label></td>
		            </tr>
		            <tr errorfor="personForm_weightString">
		                <td scope="row" colspan="2" valign="top" align="center"><s:if test="fieldErrors['weightString'] != null">
		                    <span class="errorMessage">${fieldErrors['weightString'][0]}</span>
		                </s:if></td>
		            </tr>
		            <tr>
		                <th scope="row"><span class="required">*</span><label for="weightString"><fmt:message key="person.weight" />:</label></th>
		                <td><s:textfield key="person.weight.value" name="weightString" value="%{person.weight.value}"
		                    size="5" maxlength="4" theme="simple" tabindex="7" /> <s:select key="person.weight.unit"
		                    name="person.weight.unit" value="%{person.weight.unit}" list="weightUnitEnums"
		                    listValue="%{getText(resourceKey)}" tabindex="8" /></td>
		            </tr>
		        </tbody>
		    </table>
		    <!-- BEGIN INCLUDE = SAVE CANCEL BUTTONS -->
		    <div class="buttonContainer">
		        <a id="additionalInformationSubmit" href="#" onclick="return $('personForm').submit();"><fmt:message key="button.submit"/></a>
		        &nbsp;&nbsp;&nbsp;
		        <a id="cancel" href="javascript:;" onclick="window.top.hidePopWin()"><fmt:message key="button.cancel" /></a>
		    </div>
		</s:form>
	</fhh:accordianContainer>
</div>
<script type="text/javascript">
    setFocusById("getHelp");
</script>
