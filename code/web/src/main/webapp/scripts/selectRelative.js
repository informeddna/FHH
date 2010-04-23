function finishRetrieveSpecifier() {
    var selectedCode = document.getElementById('relativeForm_selectedCode');
    if (document.getElementById('relativeForm_relationshipSpecifier').length > 1) {
        $('relationTextSpan').innerHTML = selectedCode.options[selectedCode.selectedIndex].innerHTML;
        $('familyRelationDiv').style.display = 'block';
        $('familyRelationTitleDiv').style.display = 'block';
    } else {
        $('familyRelationDiv').style.display = 'none';
        $('familyRelationTitleDiv').style.display = 'none';
    }
}

function finishRetrieveParents() {
    var selectedCode = document.getElementById('relativeForm_selectedCode');
    if (document.getElementById('relativeForm_parent').length > 1) {
        $('parentTextSpan').innerHTML = selectedCode.options[selectedCode.selectedIndex].innerHTML;
        $('parentDiv').style.display = 'block';
        $('parentTitleDiv').style.display = 'block';
    } else {
        $('parentDiv').style.display = 'none';
        $('parentTitleDiv').style.display = 'none';
    }
}