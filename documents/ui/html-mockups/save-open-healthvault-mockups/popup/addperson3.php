<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title>Family Health History</title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	  
	  		<link href="../styles/fhh_new.css" rel="stylesheet" type="text/css" media="all" />
	  
			<link rel="stylesheet" type="text/css" href="https://demo.5amsolutions.com/fhh-web/styles/submodal.css" />
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/prototype.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/scriptaculous.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/effects.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/builder.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/controls.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/dragdrop.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/slider.js"></script>

			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/fhh.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/submodal/common.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/submodal/subModal.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/MM_swapImage.js"></script>
    
        <script type="text/javascript">
            window.top.startLogoutTimer();
        </script>
    </head>
<body class="submodal" onload="new Effect.Highlight('hilite', { startcolor: '#fbaa1d', endcolor: '#fff0b5' }); return false;" >
  <div>
    <div id="main">
      <div id="contentwrapper">
        <div id="logoutWarningDiv" style="display:none" class="outlineBox errorMessage">
          For security reasons, your session will automatically be terminated in <span id="warningCountdownDisplay"></span> seconds. To continue your session, PLEASE SAVE YOUR WORK NOW..
        </div>

        <div id="content">
          <script type="text/javascript" language="javascript" charset="ISO-8859-1">
//<![CDATA[
          // for multi-language support - this term is added dynamically by js when page is created
          var removeTxt = 'Remove';
          //]]>
          </script> <script type="text/javascript" language="javascript" charset="ISO-8859-1" src="https://demo.5amsolutions.com/fhh-web/scripts/addPerson.js">
</script> <script type="text/javascript" language="javascript" charset="ISO-8859-1" src="https://demo.5amsolutions.com/fhh-web/scripts/ItemSelectorUtils.js">
</script>

          <form id="personForm" onsubmit="return true;" action="https://demo.5amsolutions.com/fhh-web/popup/addPerson/submitPerson.action" method="post" class="form" name="personForm">
            <div class="submodalContainer">
              <!-- BEGIN ACCORDION SECTION = PERSONAL INFO -->

              <div class="accordianContainer" id="personalInfo">
                <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="pi-title">
                  <colgroup span="1"></colgroup>

                  <colgroup span="1" width="0*"></colgroup>

                  <tr>
                    <td class="accordianTitleTd">
                      <h2>Your Personal Information</h2><span id="pi-hide" class="showHideText"><a tabindex="1" href="javascript://nop" onclick="hideStyle('pi-title');$('pi').hide();$('pi-show').show();$('pi-hide').hide();">(click to hide)</a></span> <span id="pi-show" class="showHideText" style="display:none;"><a tabindex="1" href="javascript://nop" onclick="showStyle('pi-title');$('pi').show();$('pi-show').hide();$('pi-hide').show();">(click to show)</a></span>
                    </td>

                    <td class="accordianTitleTdBtn"><a tabindex="1" href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/helpDetailsEditPersonalInfo.action?create=true')">Get Help</a></td>
                  </tr>
                </table>

                <div class="accordianContent" id="pi">
                  <p>Submit your information to begin creating a family history. Enter the required personal information and your health history information. At the bottom of the page (you may need to scroll), click the "Next" button. You will then be asked to tell the system which family members you would like to add to the health history.</p>

                  <p><span class="required">*</span>Indicates required information.</p>

                  <table border="0" cellpadding="0" cellspacing="0" class="form" summary="Enter personal information.">
                    <tr>
                      <td class="tdLabel"><label for="personForm_person_name" class="label">Name:</label></td>

                      <td><input type="text" name="person.name" size="30" maxlength="255" value="" tabindex="2" id="personForm_person_name" /></td>
                    </tr>

                    <tr>
                      <td colspan="2" valign="top" align="center"></td>
                    </tr>

                    <tr>
                      <th><span class="required">*</span>Gender:</th>

                      <td><input type="radio" name="person.gender" id="personForm_person_genderMALE" value="MALE" tabindex="2" /><label for="personForm_person_genderMALE">Male</label> <input type="radio" name="person.gender" id="personForm_person_genderFEMALE" value="FEMALE" tabindex="2" /><label for="personForm_person_genderFEMALE">Female</label></td>
                    </tr>

                    <tr errorfor="personForm_dateOfBirthString">
                      <td colspan="2" valign="top" align="center"></td>
                    </tr>

                    <tr>
                      <th><span class="required">*</span><label for="personForm_dateOfBirthString">Date of Birth</label>:</th>

                      <td>
                        <input type="text" name="dateOfBirthString" size="12" maxlength="255" value="" tabindex="10" id="personForm_dateOfBirthString" />

                        <div>
                          (mm/dd/yyyy)
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>Were you born a twin?</th>

                      <td><input type="radio" name="person.twinStatus" id="twinStatusNO" value="NO" tabindex="11" checked="checked" /><label for="twinStatusNO">No</label> <input type="radio" name="person.twinStatus" id="twinStatusIDENTICAL" value="IDENTICAL" tabindex="11" /><label for="twinStatusIDENTICAL">Yes - Identical (Same)</label> <input type="radio" name="person.twinStatus" id="twinStatusFRATERNAL" value="FRATERNAL" tabindex="11" /><label for="twinStatusFRATERNAL">Yes - Not Identical (Fraternal)</label> </td>
                    </tr>

                    <tr>
                      <th><label for="personAdopted">Were you adopted?</label></th>

                      <td><input type="checkbox" name="person.adopted" value="true" tabindex="12" id="personAdopted" /> <input type="hidden" name="__checkbox_person.adopted" value="true" /> Yes</td>
                    </tr>

                    <tr errorfor="heightUnit1">
                      <td colspan="2" valign="top" align="center"></td>
                    </tr>

                    <tr errorfor="heightUnit2">
                      <td colspan="2" valign="top" align="center"></td>
                    </tr>

                    <tr errorfor="heightMetric">
                      <td colspan="2" valign="top" align="center"></td>
                    </tr>

                    <tr>
                      <th>Height:</th>

                      <td>
                      	<input id="heightUnit1" name="heightUnit1" type="text" size="3" value="" tabindex="13" onblur="clearMetric()" /> <label for="heightUnit1">Feet</label> &nbsp;&nbsp;<input id="heightUnit2" name="heightUnit2" type="text" size="3" value="" tabindex="13" onblur="clearMetric()" /> <label for="heightUnit2">Inches</label>
                      	
                      	<span class="or">-OR-</span>
                      	
                      	<input id="heightMetric" name="heightMetric" type="text" size="3" value="" tabindex="14" onblur="clearUS()" /> <label for="heightMetric">Centimeters</label>
                      </td>
                    </tr>

                    <tr errorfor="personForm_person_weight_value">
                      <td colspan="2" valign="top" align="center"></td>
                    </tr>

                    <tr>
                      <th><label for="personForm_person_weight_value">Weight:</label></th>

                      <td><input type="text" name="person.weight.value" size="5" maxlength="4" value="" tabindex="15" id="personForm_person_weight_value" /> <select name="person.weight.unit" tabindex="15" id="personForm_person_weight_unit">
                        <option value="US">
                          lbs
                        </option>

                        <option value="METRIC">
                          kg
                        </option>
                      </select></td>
                    </tr>
                  </table>
                </div>
              </div><!-- END ACCORDION SECTION = PERSONAL INFO -->
              <!-- BEGIN ACCORDION SECTION = HEALTH INFO -->

              <div class="accordianContainer" id="healthInfo">
                <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="hi-title">
		            <colgroup span="1" />
		            <colgroup span="1" width="0*" />
		            <tr>
		                <td class="accordianTitleTd">
		
		                	<h2>Your Health History</h2>
		                    <span id="hi-hide" class="showHideText"><a tabindex="15" href="javascript://nop" onclick="hideStyle('hi-title');$('hi').hide();$('hi-show').show();$('hi-hide').hide();">(click to hide)</a></span>
		                    <span id="hi-show" class="showHideText" style="display:none;">	<a tabindex="15" href="javascript://nop" onclick="showStyle('hi-title');$('hi').show();$('hi-show').hide();$('hi-hide').show();">(click to show)</a></span>
		                </td>
		                
		                <td class="accordianTitleTdBtn">
		                    <a tabindex="15" href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/helpDetailsEditPersonalInfo.action?create=true')">Get Help</a>
		                </td>
		            </tr>
		        </table>

					
					<div class="accordianContent" id="hh">
                <p>In this section you build a list of diseases and conditions. First, select a <strong>Disease / Condition</strong> (if any) from the dropdown box. Then select the <strong>Age at Diagnosis</strong> and click the <strong>Add</strong> button. You may repeat this process as necessary.</p>
                </div>
                
                
                 <!-- BEGIN NEW HEALTH HISTORY TABLE -->
                                
                <div class="accordianContainer" id="healthHistoryTable">
                
                	<table cellpadding="0" cellspacing="0" class="dataListing"id="healthHistoryTableList" summary="This listing shows the selected diseases and conditions for this person's health history.">
                		<tr>
					         <th class="diseaseCol">Disease / Condition</th>
                        <th class="ageCol">Age at Diagnosis</th>
                        <th class="actionCol">Action</th>
                     </tr>
                     <tr id="hilite">
                     	<td class="diseaseCol">Bone Cancer</th>
                        <td class="ageCol">Pre-Birth</th>
                        <td class="buttonContainer">
					            <span id="addDiseaseButtonSpan">
					                <a tabindex="19" href="addperson.php">Remove</a>
					            </span>
					        </td>
                     </tr>
                	</table>
                	<table cellpadding="0" cellspacing="0" class="dataListing" id="healthHistoryTableForm" summary="This form allows you to select diseases and the ages diagnosed, and add it to a list.">
                     <tr>
					        <td class="diseaseCol">
								<div class="healthHistoryTableSelect">	
									<select id="selectedDiseasesSelectedItem" tabindex="16">
										<option value="" selected="selected">--Select Disease/Condition--</option>
										<option>Another Disease</option>
									</select>
								</div>
					        </td>
					        <td class="ageCol">
					        <div class="healthHistoryTableSelect">
					        		<select id="SelectedAge" tabindex="18">
                					<option value="">--Select Age at Diagnosis--</option>
			                    <option value="PREBIRTH">Pre-Birth</option><option value="UNKNOWN">Unknown</option><option value="NEWBORN">Newborn</option><option value="INFANCY">In Infancy</option><option value="CHILDHOOD">In Childhood</option><option value="ADOLESCENCE">In Adolescence</option><option value="TWENTIES">20-29 years</option><option value="THIRTIES">30-39 years</option><option value="FORTIES">40-49 years</option><option value="FIFTIES">50-59 years</option><option value="SIXTIES">60 years and older</option>
			                </select>
			               </div>
					        </td>
					         <td class="actionCol buttonContainer">
					            <span id="addDiseaseButtonSpan">
					                <a tabindex="19" href="addperson4.php">Add</a>
					            </span>
					        </td>
					    </tr>
                	</table>
                
                </div>
                
                <!-- END NEW HEALTH HISTORY TABLE -->
               
               </div>
              <!-- END ACCORDION SECTION = HEALTH INFO -->
              <!-- BEGIN ACCORDION SECTION = FAMILY BACKGROUND INFO -->

              <div class="accordianContainer" id="bkgdInfo">
                <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="bi-title">
                  <colgroup span="1"></colgroup>

                  <colgroup span="1" width="0*"></colgroup>

                  <tr>
                    <td class="accordianTitleTd">
                      <h2>Your Family Background Information</h2><span id="bi-hide" class="showHideText"><a tabindex="20" href="javascript://nop" onclick="hideStyle('bi-title');$('bi').hide();$('bi-show').show();$('bi-hide').hide();">(click to hide)</a></span> <span id="bi-show" class="showHideText" style="display:none;"><a tabindex="20" href="javascript://nop" onclick="showStyle('bi-title');$('bi').show();$('bi-show').hide();$('bi-hide').show();">(click to show)</a></span>
                    </td>

                    <td class="accordianTitleTdBtn"><a tabindex="20" href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/helpDetailsEditPersonalInfo.action?create=true')">Get Help</a></td>
                  </tr>
                </table>

                <div class="accordianContent" id="bi">
                  <table border="0" cellpadding="0" cellspacing="0" class="form" summary="Enter family background information.">
                    <tbody id="consanguinity">
                      <tr>
                        <td colspan="2">
                          <div class="p">
                            <label for="personForm_person_consanguinityFlag">Check here if your parents are related to each other in any way other than marriage.</label> <input type="checkbox" name="person.consanguinityFlag" value="true" tabindex="20" id="personForm_person_consanguinityFlag" /> <input type="hidden" name="__checkbox_person.consanguinityFlag" value="true" />
                          </div>
                          <hr />
                        </td>
                      </tr>
                    </tbody><!-- BEGIN RACE / ETHNICITY INFO -->

                    <tbody id="raceEthnicity">
                      <tr>
                        <td colspan="2">
                          <div class="p">
                            Multiple races and ethnicities may be selected.
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>Race:</th>

                        <td><input tabindex="21" name="selectedRaces" value="1" id="selectedRaces-1" onclick="raceChanged()" type="checkbox" /><label for="selectedRaces-1" class="checkboxLabel">American Indian or Alaska Native</label> <input tabindex="21" name="selectedRaces" value="2" id="selectedRaces-2" onclick="raceChanged()" type="checkbox" /><label for="selectedRaces-2" class="checkboxLabel">Asian</label> <input tabindex="21" name="selectedRaces" value="3" id="selectedRaces-3" onclick="raceChanged()" type="checkbox" /><label for="selectedRaces-3" class="checkboxLabel">Black or African-American</label> <input tabindex="21" name="selectedRaces" value="4" id="selectedRaces-4" onclick="raceChanged()" type="checkbox" /><label for="selectedRaces-4" class="checkboxLabel">Native Hawaiian or Other Pacific Islander</label> <input tabindex="21" name="selectedRaces" value="5" id="selectedRaces-5" onclick="raceChanged()" type="checkbox" /><label for="selectedRaces-5" class=
                        "checkboxLabel">White</label></td>
                      </tr>

                      <tr>
                        <th>
                          <div id="asianRaceLabelDiv" style="display:none;">
                            <label>Please Specify:</label>
                          </div>
                        </th>

                        <td>
                          <div id="asianRaceDiv" style="display:none;">
                            <input tabindex="22" name="selectedAsianRaces" value="6" id="selectedAsianRaces-1" type="checkbox" /><label for="selectedAsianRaces-1" class="checkboxLabel">Asian Indian</label> <input tabindex="22" name="selectedAsianRaces" value="7" id="selectedAsianRaces-2" type="checkbox" /><label for="selectedAsianRaces-2" class="checkboxLabel">Chinese</label> <input tabindex="22" name="selectedAsianRaces" value="8" id="selectedAsianRaces-3" type="checkbox" /><label for="selectedAsianRaces-3" class="checkboxLabel">Filipino</label> <input tabindex="22" name="selectedAsianRaces" value="9" id="selectedAsianRaces-4" type="checkbox" /><label for="selectedAsianRaces-4" class="checkboxLabel">Japanese</label> <input tabindex="22" name="selectedAsianRaces" value="10" id="selectedAsianRaces-5" type="checkbox" /><label for="selectedAsianRaces-5" class="checkboxLabel">Korean</label> <input tabindex="22" name="selectedAsianRaces" value="11" id="selectedAsianRaces-6" type=
                            "checkbox" /><label for="selectedAsianRaces-6" class="checkboxLabel">Vietnamese</label> <input tabindex="22" name="selectedAsianRaces" value="12" id="selectedAsianRaces-7" type="checkbox" /><label for="selectedAsianRaces-7" class="checkboxLabel">Other Asian</label> <input tabindex="22" name="selectedAsianRaces" value="13" id="selectedAsianRaces-8" type="checkbox" /><label for="selectedAsianRaces-8" class="checkboxLabel">Unknown</label>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <div id="hawaiianRaceLabelDiv" style="display:none;">
                            <label>Please Specify:</label>
                          </div>
                        </th>

                        <td>
                          <div id="hawaiianRaceDiv" style="display:none;">
                            <input tabindex="23" name="selectedHawaiianRaces" value="14" id="selectedHawaiianRaces-1" type="checkbox" /><label for="selectedHawaiianRaces-1" class="checkboxLabel">Chamorro</label> <input tabindex="23" name="selectedHawaiianRaces" value="15" id="selectedHawaiianRaces-2" type="checkbox" /><label for="selectedHawaiianRaces-2" class="checkboxLabel">Guamanian</label> <input tabindex="23" name="selectedHawaiianRaces" value="16" id="selectedHawaiianRaces-3" type="checkbox" /><label for="selectedHawaiianRaces-3" class="checkboxLabel">Native Hawaiian</label> <input tabindex="23" name="selectedHawaiianRaces" value="17" id="selectedHawaiianRaces-4" type="checkbox" /><label for="selectedHawaiianRaces-4" class="checkboxLabel">Samoan</label> <input tabindex="23" name="selectedHawaiianRaces" value="18" id="selectedHawaiianRaces-5" type="checkbox" /><label for="selectedHawaiianRaces-5" class="checkboxLabel">Unknown</label>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>Ethnicity:</th>

                        <td><input tabindex="24" name="selectedEthnicities" value="1" id="selectedEthnicities-1" onclick="ethnicityChanged()" type="checkbox" /><label for="selectedEthnicities-1" class="checkboxLabel">Hispanic or Latino</label> <input tabindex="24" name="selectedEthnicities" value="2" id="selectedEthnicities-2" onclick="ethnicityChanged()" type="checkbox" /><label for="selectedEthnicities-2" class="checkboxLabel">Ashkenazi Jewish</label> <input tabindex="24" name="selectedEthnicities" value="3" id="selectedEthnicities-3" onclick="ethnicityChanged()" type="checkbox" /><label for="selectedEthnicities-3" class="checkboxLabel">Not Hispanic or Latino</label></td>
                      </tr>

                      <tr>
                        <td class="tdLabel">
                          <div id="hispanicEthnicityLabelDiv" style="display:none;">
                            <label class="label">Please Specify:</label>
                          </div>
                        </td>

                        <td>
                          <div id="hispanicEthnicityDiv" style="display:none;">
                            <input tabindex="25" name="selectedHispanicEthnicities" value="4" id="selectedHispanicEthnicities-1" type="checkbox" /><label for="selectedHispanicEthnicities-1" class="checkboxLabel">Central American</label> <input tabindex="25" name="selectedHispanicEthnicities" value="5" id="selectedHispanicEthnicities-2" type="checkbox" /><label for="selectedHispanicEthnicities-2" class="checkboxLabel">Cuban</label> <input tabindex="25" name="selectedHispanicEthnicities" value="6" id="selectedHispanicEthnicities-3" type="checkbox" /><label for="selectedHispanicEthnicities-3" class="checkboxLabel">Dominican</label> <input tabindex="25" name="selectedHispanicEthnicities" value="7" id="selectedHispanicEthnicities-4" type="checkbox" /><label for="selectedHispanicEthnicities-4" class="checkboxLabel">Mexican</label> <input tabindex="25" name="selectedHispanicEthnicities" value="8" id="selectedHispanicEthnicities-5" type="checkbox" /><label for="selectedHispanicEthnicities-5"
                            class="checkboxLabel">Other Hispanic</label> <input tabindex="25" name="selectedHispanicEthnicities" value="10" id="selectedHispanicEthnicities-6" type="checkbox" /><label for="selectedHispanicEthnicities-6" class="checkboxLabel">Puerto Rican</label> <input tabindex="25" name="selectedHispanicEthnicities" value="11" id="selectedHispanicEthnicities-7" type="checkbox" /><label for="selectedHispanicEthnicities-7" class="checkboxLabel">South American</label>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td colspan="2" class="colspan"><a tabindex="29" href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/helpDetailsAshkenaziJew.action?create=true')">Why are we asking about Ashkenazi Jewish heritage?</a></td>
                      </tr>
                    </tbody><!-- END RACE / ETHNICITY INFO -->
                  </table>
                </div>
              </div><!-- END ACCORDION SECTION = FAMILY BACKGROUND INFO -->
              <!-- BEGIN INCLUDE = SAVE CANCEL BUTTONS -->

              <div class="buttonContainer">
                <input type="submit" id="personForm_0" value="Next" class="enableEnterSubmit" tabindex="30" />
              </div><!-- END INCLUDE = SAVE CANCEL BUTTONS -->
            </div>
            </div>
          </form>
        </div>

        <div class="clear"></div>
      </div>
    </div><script type="text/javascript">
//<![CDATA[
                startLogoutTimer();
    //]]>
    </script>
  </div>
  
  </div>
</body>
</html>
