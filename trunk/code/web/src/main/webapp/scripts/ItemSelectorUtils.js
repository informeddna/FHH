function isOtherSelected(mySelection) {
    var otherSelected = 0;
    if (mySelection.length > 5) {
        var subSection = mySelection.substring(5,0);
        var eq1 = "Other";
        var eq2 = "Otros";
        if (subSection == eq1 || subSection == eq2) {
            otherSelected = 1;
        }
    }
    return otherSelected;
}


var ItemSelectorUtils = {
	addDiseaseToList : function(baseId, listFieldName, multiple, locale) {
		if (ItemSelectorUtils.addItemToList(baseId, listFieldName, multiple, locale, true, baseId + 'SelectedItem', 
				'selectedSubType', 'SelectedAge', 'otherDisease') != "") {
			ItemSelectorUtils.resetFields($(baseId + 'SelectedItem'), $('SelectedAge'));
			ItemSelectorUtils.checkDiseasesSelected(baseId);
		}
	},
	addCODToList : function(baseId, listFieldName, multiple, locale) {
		var lastAddedCOD = $('lastAddedCOD');
		// Remove the previous COD from the Disease table if one was added.
		ItemSelectorUtils.removeLastAddedCOD(baseId, lastAddedCOD);
		var id = ItemSelectorUtils.addItemToList(baseId, listFieldName, multiple, locale, false, 
				'personForm_causeOfDeath', 'personForm_selectedCODSubType', 'personForm_relative_ageAtDeath', 
				'otherCOD');
		// Set hidden field to the last added COD ID, used for removing the previous COD when a new COD is added.
		if (id != "") {
			lastAddedCOD.value = id;
		}
		ItemSelectorUtils.checkDiseasesSelected(baseId);
	},
	removeLastAddedCOD : function(baseId, lastAddedCOD) {
		// Remove the previous COD from the Disease table if one was added.
		if (lastAddedCOD.value != "") {
			ItemSelectorUtils.removeItemFromList(baseId, lastAddedCOD.value);
			lastAddedCOD.value = "";
		}
	},
	// Adds a Disease/Condition to the Disease List. Returns the Id of the row added, used for removing the last COD added to the list. 
	// Returns empty string if the Disease was not added to the list.
    addItemToList : function(baseId, listFieldName, multiple, locale, showAlerts, itemField, subTypeField, ageField, otherField) {
        var selectedItem = $(itemField);
        var selectedSubType = document.getElementById(subTypeField);
        if (selectedSubType.length > 1) {
            selectedItem = selectedSubType;
        }
        var selectedAge = $(ageField);
        var otherDisease = $(otherField);
        var id = selectedItem.value + selectedAge.value + otherDisease.value;
        var selectedItemValues = $(baseId + 'SelectedItemValues');
        var selectedAgeValues = $('SelectedAgeValues');
        var otherDiseaseValues = $('otherDiseaseValues');

        if (ItemSelectorUtils.displayAlerts(selectedItem, selectedAge, otherDisease, multiple,
                selectedItemValues, id, locale, showAlerts)) {
            return "";
        }

        ItemSelectorUtils.addOptionToSelect(selectedItem.value, 'SelectedItemOption' + id, selectedItemValues);
        ItemSelectorUtils.addOptionToSelect(selectedAge.value, 'SelectedAgeOption' + id, selectedAgeValues);
        // If selected disease is user entered disease that is saved in session, add the disease to the table using
        // the element text as the other disease value
        if (otherDisease.value == '' && selectedItem.value == '16') {
        	ItemSelectorUtils.addOptionToSelect(selectedItem.options[selectedItem.selectedIndex].text, 
        			'otherDiseaseOption' + id, otherDiseaseValues);
        // Otherwise, use otherDisease in the case where it is not a user entered disease (otherDisease.value == '')
        // or it is a newly entered user disease that is not in session.
        } else {
        	ItemSelectorUtils.addOptionToSelect(otherDisease.value, 'otherDiseaseOption' + id, otherDiseaseValues);
        }

        var selectedItemRow = document.createElement("TR");
        selectedItemRow.id = 'SelectedItemRow' + id;
        if (selectedItem.value == '16' && otherDisease.value != '') {
            ItemSelectorUtils.addItemToTable($(baseId + 'SelectedItemTable'), selectedItemRow, otherDisease.value, "diseaseCol");
        } else {
            ItemSelectorUtils.addItemToTable($(baseId + 'SelectedItemTable'), selectedItemRow,
                    selectedItem.options[selectedItem.selectedIndex].text, "diseaseCol");
        }
        ItemSelectorUtils.addItemToTable($(baseId + 'SelectedItemTable'), selectedItemRow,
                selectedAge.options[selectedAge.selectedIndex].text, "ageCol");

        ItemSelectorUtils.addRemoveLinkToTable(baseId, selectedItemRow, id);
        return id;
    },
    //Display any alerts if applicable
    displayAlerts : function(selectedItem, selectedAge, otherDisease, multiple, selectedItemValues, id, 
    		locale, showAlerts) {
        var item = selectedItem.options[selectedItem.selectedIndex].text;
        var otherSelected = isOtherSelected(item);
        
        if (selectedItem.value == '') {
        	if (locale == 'es') {
        		ItemSelectorUtils.conditionalAlert('Por favor, seleccione una enfermedad.', showAlerts);
        	} else {
        		ItemSelectorUtils.conditionalAlert('Please select a Disease.', showAlerts);
        	}
            return true;
        }
        if (otherSelected == 1 && selectedItem.value == 16 && otherDisease.value == '') {
        	if (locale == 'es') {
        		ItemSelectorUtils.conditionalAlert('Por favor, dé un número para Otro.', showAlerts);
        	} else {
        		ItemSelectorUtils.conditionalAlert('Please enter a value for Other.', showAlerts);
        	}
            return true;
        }
        if (selectedAge.value == '') {
        	if (locale == 'es') {
        		ItemSelectorUtils.conditionalAlert('Por favor, seleccione la edad del diagnóstico.', showAlerts);
        	} else {
        		ItemSelectorUtils.conditionalAlert('Please select an Age at Diagnosis.', showAlerts);
        	}
            return true;
        }
        return false;
    },
    // Alert if showAlerts is true
    conditionalAlert : function(message, showAlerts) {
    	if (showAlerts) {
    		alert(message);
    	} 
    },
    //Add selected item to the hidden select
    addOptionToSelect : function(value, id, selectField) {
        var option = new Option(value, value);
        option.selected = true;
        option.id = id;
        selectField.options[selectField.length] = option;
        //Unselect empty option
        selectField.options[0].selected = false;
    },
    //Add selected item to the table
    addItemToTable : function(selectedItemTable, selectedItemRow, selectedItemValue, className) {
        var selectedItemCell = document.createElement("TD");
        selectedItemCell.className = className;
        selectedItemCell.appendChild(document.createTextNode(selectedItemValue));
        selectedItemRow.appendChild(selectedItemCell);
    },
    //Adds the remove link and appends the row to the table
    addRemoveLinkToTable : function(baseId, selectedItemRow, id) {
        //Create remove link
        var removeItemCell = document.createElement("TD");
        removeItemCell.className = "actionCol buttonContainer";
        var removeLink = document.createElement("A");
        var selectedItemTable = $(baseId + 'SelectedItemTable');
        removeLink.href = "javascript://nop/";
        removeLink.innerHTML = removeTxt;
        removeLink.onclick = function(){ItemSelectorUtils.removeItemFromList(baseId, id);};
        removeItemCell.appendChild(removeLink);
        selectedItemRow.appendChild(removeItemCell);
        selectedItemTable.appendChild(selectedItemRow);
    },
    removeItemFromList : function(baseId, id) {
    	if (document.getElementById('SelectedItemOption' + id) != null) {
    		ItemSelectorUtils.removeOptionFromSelect(document.getElementById('SelectedItemOption' + id),
                    $(baseId + 'SelectedItemValues'));
            ItemSelectorUtils.removeOptionFromSelect(document.getElementById('SelectedAgeOption' + id),
                    $('SelectedAgeValues'));
            ItemSelectorUtils.removeOptionFromSelect(document.getElementById('otherDiseaseOption' + id),
                    $('otherDiseaseValues'));
            //Remove item from table
            var row = document.getElementById('SelectedItemRow' + id);
            $(baseId + 'SelectedItemTable').deleteRow(row.rowIndex);
            ItemSelectorUtils.checkDiseasesSelected(baseId);
    	}
    },
    //Remove item from hidden select
    removeOptionFromSelect : function(option, selectedItemValues) {
        selectedItemValues.removeChild(selectedItemValues.options[option.index]);
        //Select the empty value if user has removed all other options
        if (selectedItemValues.length == 1) {
            selectedItemValues.options[0].selected = true;
        }
    },
    //Reset Fields
    resetFields : function(selectedItem, selectedAge) {
        selectedItem.selectedIndex = 0;
        selectedAge.selectedIndex = 0;
        document.getElementById('subTypeSpan').style.display = 'none';
        ItemSelectorUtils.disableOtherDisease();
    },
    checkDiseasesSelected : function(baseId) {
    	var selectedDisease = $('selectedDiseasesSelectedItem');
    	if ($(baseId + 'SelectedItemValues').length == 1) {
    		selectedDisease.options[0].text = DISEASE_NONE;
    		$('ageAtDiagnosisSpan').style.display = 'none';
        	$('addDiseaseButtonSpan').style.display = 'none';
    	} else {
    		selectedDisease.options[0].text = SELECT_DISEASE;
    		$('ageAtDiagnosisSpan').style.display = 'block';
        	$('addDiseaseButtonSpan').style.display = 'block';
    	}
    },
    disableOtherDisease : function() {
        document.getElementById('otherDiseaseSpan').style.display='none';
        document.getElementById('otherDisease').value = "";
    }
}