
//TODO: Consider merging clearUS() and clearMetric() into a single method 
function clearUS() {
    if ($('heightMetric').value.length > 0 ) {
        $('heightUnit2').value = "";
        $('heightUnit1').value = "";
    }
}

function clearMetric() {
    if ($('heightUnit1').value.length + $('heightUnit2').value.length > 0 ) {
        $('heightMetric').value = "";
    }
}

function addPersonOnLoad() {
    raceChanged('person');
    ethnicityChanged('person');
}

function addRelativeOnLoad() {
    livingStatusChanged();
    raceChanged('relative');
    ethnicityChanged('relative');
}

//TODO: METHOD COLLIDES WITH ItemSelectorUtils.js and ItemSelectorUtils.js is the last to load in addPerson.jsp so it will be used.
function isOtherSelected(mySelection) {
    //TODO: Very fragile
    var subSection = mySelection.substring(5,0);
    //TODO: Magic numbers; introduce parameter or reference global
    var eq1 = "Other";
    var eq2 = "Otros";
    var otherSelected = 0; // why not false
    if (subSection == eq1 || subSection == eq2) {
        otherSelected = 1; // why not true
    }
    return otherSelected;
}

function livingStatusChanged() {
    if ($('personForm_relative_livingStatusYES').checked) {
        disableNoSpan();
        $('livingStatusYesSpan').show();
    } else if ($('personForm_relative_livingStatusNO').checked) {
        disableYesSpan();
        $('livingStatusNoSpan').show();
    } else {
        disableNoSpan();
        disableYesSpan();
    }
}

function raceChanged() {
    // Show/Hide Asian Race Div
    if ($('selectedRaces-2').checked == true) {
        $('asianRaceDiv', 'asianRaceLabelDiv').invoke('show');
    } else {
        $('asianRaceDiv', 'asianRaceLabelDiv').invoke('hide');
    }
    // Show/Hide Hawaiian Race Div
    if ($('selectedRaces-4').checked == true) {
        $('hawaiianRaceDiv', 'hawaiianRaceLabelDiv').invoke('show');
    } else {
        $('hawaiianRaceDiv', 'hawaiianRaceLabelDiv').invoke('hide');
    }
}

function ethnicityChanged() {
    // Show/Hide Hispanic Ethnicity Div
    if ($('selectedEthnicities-1').checked == true) {
        $('hispanicEthnicityDiv', 'hispanicEthnicityLabelDiv').invoke('show');
    } else {
        $('hispanicEthnicityDiv', 'hispanicEthnicityLabelDiv').invoke('hide');
    }
}

function disableYesSpan() {
    $('livingStatusYesSpan').hide();
    $('personForm_dateOfBirthString').value = "";
    $('personForm_relativeAge').value = "";
    $('personForm_relativeEstimatedAge').value = "";
}

function disableNoSpan() {
    disableCODOther();
    disableCODSubType();
    $('livingStatusNoSpan').hide();
    $('personForm_relative_ageAtDeath').selectedIndex = 0;
    $('personForm_causeOfDeath').selectedIndex = 0;
    $('personForm_selectedCODSubType').selectedIndex = 0;
}

function disableCODSubType() {
    $('codSubTypeSpan', 'codSubTypeLabelSpan').invoke('hide');
    $('codSubTypesExist').value = false;
}

function finishRetrieveSubType() {
    var selectedDisease = $('selectedDiseasesSelectedItem');
    var elementSelected = selectedDisease.options[selectedDisease.selectedIndex].text;
    // Show or hide Age At Diagnosis + Add button
    //TODO: Why is this == 1 instead of < 2
    if ($('selectedSubType').length == 1) {
        $('subTypeSpan').hide();
        //User enters value for other disease type if Other is selected
        var otherSelected = isOtherSelected(elementSelected);
        //TODO: Why is this value == 16? and == 1? Magic numbers? 
        if (selectedDisease.value == 16 && otherSelected == 1) {
            $('otherDiseaseSpan').show();
        } else {
            ItemSelectorUtils.disableOtherDisease();
        }
    } else {
        $('subTypeSpan').show();
        ItemSelectorUtils.disableOtherDisease();
    }
    if (elementSelected == DISEASE_NONE) {
        $('ageAtDiagnosisSpan', 'addDiseaseButtonSpan').invoke('hide');
    } else {
        $('ageAtDiagnosisSpan', 'addDiseaseButtonSpan').invoke('show');
    }
}

function codChanged() {
    var selectedCOD = $('personForm_causeOfDeath');
    var elementSelected = selectedCOD.options[selectedCOD.selectedIndex].text;
    var otherSelected = isOtherSelected(elementSelected);
    //TODO: Why is this value == 16? and != 1? Magic numbers? 
    if (selectedCOD.value == 16  && otherSelected != 1) {
        $('otherCOD').value = elementSelected;
    } 
    
    //TODO: Why is the locale always 'en' ? Introduce parameter?
    ItemSelectorUtils.addCODToList('selectedDiseases', 'selectedDiseases', 'true', 'en');
}

function finishRetrieveCODSubType() {
    if ($('personForm_selectedCODSubType').length == 1) {
        disableCODSubType();
        var selectedCOD = $('personForm_causeOfDeath');
        var elementSelected = selectedCOD.options[selectedCOD.selectedIndex].text;
        var otherSelected = isOtherSelected(elementSelected);
        // User enters value for other disease type if Other is selected
        //TODO: Why is this value == 16? and == 1? Magic number? 
        if (selectedCOD.value == 16 && otherSelected == 1) {
            $('codOtherSpan', 'codOtherLabelSpan').invoke('show');
        } else {
            disableCODOther();
            // Add COD as Disease/Condition - no children
            codChanged();
        }
        
    // COD sub types exist
    } else {
        //Enable COD subType
        $('codSubTypeSpan', 'codSubTypeLabelSpan').invoke('show');
        $('codSubTypesExist').value = true;
        //Disable COD other
        disableCODOther();
    }
}

function disableCODOther() {
    $('otherCOD').value = "";
    $('codOtherSpan', 'codOtherLabelSpan').invoke('hide');
}

function showStyle(objDivID) {
    $(objDivID).className = "accordianTitlebarOpened";
}

function hideStyle(objDivID)  {
    $(objDivID).className = "accordianTitlebarClosed";
}

function validateAndSubmit(message) {
    if ($('selectedDiseasesSelectedItem').value != '') {
        alert(message);
    } else {
        $('personForm').submit();
    }
}

function relativeToRelateToSelected(showHalfSiblingCheckbox){
	if(showHalfSiblingCheckbox != null){
		if(showHalfSiblingCheckbox == true || showHalfSiblingCheckbox == 'true'){
			document.getElementById('halfSiblingCheckDiv').style.display = "";
		}else{
			document.getElementById('halfSiblingCheckDiv').style.display = "none";
			document.getElementById('personForm_relativeToSetAsParentHalfSiblingStatus').checked = false;
		}
	}else{
		document.getElementById('halfSiblingCheckDiv').style.display = "none";
		document.getElementById('personForm_relativeToSetAsParentHalfSiblingStatus').checked = false;
	}
}