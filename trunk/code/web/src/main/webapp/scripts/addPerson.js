
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

function isOtherSelected(mySelection) {
    var subSection = mySelection.substring(5,0);
    var eq1 = "Other";
    var eq2 = "Otros";
    var otherSelected = 0;
    if (subSection == eq1 || subSection == eq2) {
        otherSelected = 1;
    }
    return otherSelected;
}

function livingStatusChanged() {
    var livingStatusYes = document.getElementById('personForm_relative_livingStatusYES');
    var livingStatusNo = document.getElementById('personForm_relative_livingStatusNO');
    if (livingStatusYes.checked) {
        disableNoSpan();
        $('livingStatusYesSpan').style.display = 'block';
    } else if (livingStatusNo.checked) {
        disableYesSpan();
        $('livingStatusNoSpan').style.display = 'block';

    } else {
        disableNoSpan();
        disableYesSpan();
    }
}

function raceChanged() {
    // Show/Hide Asian Race Div
    if (document.getElementById('selectedRaces-2').checked == true) {
        document.getElementById('asianRaceDiv').style.display = 'block';
        document.getElementById('asianRaceLabelDiv').style.display = 'block';
    } else {
        document.getElementById('asianRaceDiv').style.display = 'none';
        document.getElementById('asianRaceLabelDiv').style.display = 'none';
    }
    // Show/Hide Hawaiian Race Div
    if (document.getElementById('selectedRaces-4').checked == true) {
        document.getElementById('hawaiianRaceDiv').style.display = 'block';
        document.getElementById('hawaiianRaceLabelDiv').style.display = 'block';
    } else {
        document.getElementById('hawaiianRaceDiv').style.display = 'none';
        document.getElementById('hawaiianRaceLabelDiv').style.display = 'none';
    }
}

function ethnicityChanged() {
    // Show/Hide Hispanic Ethnicity Div
    if (document.getElementById('selectedEthnicities-1').checked == true) {
        document.getElementById('hispanicEthnicityDiv').style.display = 'block';
        document.getElementById('hispanicEthnicityLabelDiv').style.display = 'block';
    } else {
        document.getElementById('hispanicEthnicityDiv').style.display = 'none';
        document.getElementById('hispanicEthnicityLabelDiv').style.display = 'none';
    }
}

function disableYesSpan() {
    $('livingStatusYesSpan').style.display = 'none';
    $('personForm_dateOfBirthString').value = "";
    $('personForm_relativeAge').value = "";
    $('personForm_relativeEstimatedAge').value = "";
}

function disableNoSpan() {
	disableCODOther();
    disableCODSubType();
    $('livingStatusNoSpan').style.display = 'none';
    $('personForm_relative_ageAtDeath').selectedIndex = 0;
    $('personForm_causeOfDeath').selectedIndex = 0;
    $('personForm_selectedCODSubType').selectedIndex = 0;
}

function disableCODSubType() {
    document.getElementById('codSubTypeSpan').style.display = 'none';
    document.getElementById('codSubTypeLabelSpan').style.display = 'none';
    document.getElementById('codSubTypesExist').value = false;
}

function finishRetrieveSubType() {
	var selectedDisease = document.getElementById('selectedDiseasesSelectedItem');
    var elementSelected = selectedDisease.options[selectedDisease.selectedIndex].text;
	// Show or hide Age At Diagnosis + Add button
    if (document.getElementById('selectedSubType').length == 1) {
        document.getElementById('subTypeSpan').style.display = 'none';
        //User enters value for other disease type if Other is selected
        var otherSelected = isOtherSelected(elementSelected);
        if (selectedDisease.value == 16 && otherSelected == 1) {
            document.getElementById('otherDiseaseSpan').style.display='block';
        } else {
        	ItemSelectorUtils.disableOtherDisease();
        }
    } else {
        document.getElementById('subTypeSpan').style.display='block';
        ItemSelectorUtils.disableOtherDisease();
    }
    if (elementSelected == DISEASE_NONE) {
    	$('ageAtDiagnosisSpan').style.display = 'none';
    	$('addDiseaseButtonSpan').style.display = 'none';
    } else {
    	$('ageAtDiagnosisSpan').style.display = 'block';
    	$('addDiseaseButtonSpan').style.display = 'block';
    }
}

function codChanged() {
	var selectedCOD = document.getElementById('personForm_causeOfDeath');
    var elementSelected = selectedCOD.options[selectedCOD.selectedIndex].text;
    var otherSelected = isOtherSelected(elementSelected);
    if (selectedCOD.value == 16  && otherSelected != 1) {
        document.getElementById('otherCOD').value = elementSelected;
    } 
    
	ItemSelectorUtils.addCODToList('selectedDiseases', 'selectedDiseases', 'true', 'en');
}

function finishRetrieveCODSubType() {
    if (document.getElementById('personForm_selectedCODSubType').length == 1) {
        disableCODSubType();
        var selectedCOD = document.getElementById('personForm_causeOfDeath');
        var elementSelected = selectedCOD.options[selectedCOD.selectedIndex].text;
        var otherSelected = isOtherSelected(elementSelected);
        // User enters value for other disease type if Other is selected
        if (selectedCOD.value == 16 && otherSelected == 1) {
            document.getElementById('codOtherSpan').style.display='block';
            document.getElementById('codOtherLabelSpan').style.display='block';
        } else {
            disableCODOther();
            // Add COD as Disease/Condition - no children
            codChanged();
        }
        
    // COD sub types exist
    } else {
        //Enable COD subType
        document.getElementById('codSubTypeSpan').style.display='block';
        document.getElementById('codSubTypeLabelSpan').style.display='block';
        document.getElementById('codSubTypesExist').value = true;
        //Disable COD other
        disableCODOther();
    }
}

function disableCODOther() {
	document.getElementById('otherCOD').value = "";
    document.getElementById('codOtherSpan').style.display='none';
    document.getElementById('codOtherLabelSpan').style.display='none';
}

function showStyle(objDivID) {
    document.getElementById(objDivID).className = "accordianTitlebarOpened";
}

function hideStyle(objDivID)  {
    document.getElementById(objDivID).className = "accordianTitlebarClosed";
}