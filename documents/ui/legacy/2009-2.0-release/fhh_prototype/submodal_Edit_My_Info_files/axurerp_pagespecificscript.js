
var PageName = 'submodal_Edit My Info';
var PageId = 'p4841d7c94b534da08d0b716baf136053'
var PageUrl = 'submodal_Edit_My_Info.html'
document.title = 'submodal_Edit My Info';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $varNameMe = '';

var $varNameFather = '';

var $varNameRel = '';

var $varRelationship = '';

var $varLivingFather = '';

var $varLivingRel = '';

var $varGenderMe = '';

var $varGenderFather = '';

var $varGenderRel = '';

var $varDisCon1Me = '';

var $varDisCon2Me = '';

var $varDisConNewMe = '';

var $varDisConAgeMe = '';

var $varDisCon1Father = '';

var $varDisCon2Father = '';

var $varDisConNewFather = '';

var $varDisConAgeFather = '';

var $varDisCon1Rel = '';

var $varDisCon2Rel = '';

var $varDisConNewRel = '';

var $varDisConAgeRel = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&varNameMe=' + encodeURIComponent($varNameMe) + '&varNameFather=' + encodeURIComponent($varNameFather) + '&varNameRel=' + encodeURIComponent($varNameRel) + '&varRelationship=' + encodeURIComponent($varRelationship) + '&varLivingFather=' + encodeURIComponent($varLivingFather) + '&varLivingRel=' + encodeURIComponent($varLivingRel) + '&varGenderMe=' + encodeURIComponent($varGenderMe) + '&varGenderFather=' + encodeURIComponent($varGenderFather) + '&varGenderRel=' + encodeURIComponent($varGenderRel) + '&varDisCon1Me=' + encodeURIComponent($varDisCon1Me) + '&varDisCon2Me=' + encodeURIComponent($varDisCon2Me) + '&varDisConNewMe=' + encodeURIComponent($varDisConNewMe) + '&varDisConAgeMe=' + encodeURIComponent($varDisConAgeMe) + '&varDisCon1Father=' + encodeURIComponent($varDisCon1Father) + '&varDisCon2Father=' + encodeURIComponent($varDisCon2Father) + '&varDisConNewFather=' + encodeURIComponent($varDisConNewFather) + '&varDisConAgeFather=' + encodeURIComponent($varDisConAgeFather) + '&varDisCon1Rel=' + encodeURIComponent($varDisCon1Rel) + '&varDisCon2Rel=' + encodeURIComponent($varDisCon2Rel) + '&varDisConNewRel=' + encodeURIComponent($varDisConNewRel) + '&varDisConAgeRel=' + encodeURIComponent($varDisConAgeRel) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[varNameMe\]\]/g, $varNameMe);
  value = value.replace(/\[\[varNameFather\]\]/g, $varNameFather);
  value = value.replace(/\[\[varNameRel\]\]/g, $varNameRel);
  value = value.replace(/\[\[varRelationship\]\]/g, $varRelationship);
  value = value.replace(/\[\[varLivingFather\]\]/g, $varLivingFather);
  value = value.replace(/\[\[varLivingRel\]\]/g, $varLivingRel);
  value = value.replace(/\[\[varGenderMe\]\]/g, $varGenderMe);
  value = value.replace(/\[\[varGenderFather\]\]/g, $varGenderFather);
  value = value.replace(/\[\[varGenderRel\]\]/g, $varGenderRel);
  value = value.replace(/\[\[varDisCon1Me\]\]/g, $varDisCon1Me);
  value = value.replace(/\[\[varDisCon2Me\]\]/g, $varDisCon2Me);
  value = value.replace(/\[\[varDisConNewMe\]\]/g, $varDisConNewMe);
  value = value.replace(/\[\[varDisConAgeMe\]\]/g, $varDisConAgeMe);
  value = value.replace(/\[\[varDisCon1Father\]\]/g, $varDisCon1Father);
  value = value.replace(/\[\[varDisCon2Father\]\]/g, $varDisCon2Father);
  value = value.replace(/\[\[varDisConNewFather\]\]/g, $varDisConNewFather);
  value = value.replace(/\[\[varDisConAgeFather\]\]/g, $varDisConAgeFather);
  value = value.replace(/\[\[varDisCon1Rel\]\]/g, $varDisCon1Rel);
  value = value.replace(/\[\[varDisCon2Rel\]\]/g, $varDisCon2Rel);
  value = value.replace(/\[\[varDisConNewRel\]\]/g, $varDisConNewRel);
  value = value.replace(/\[\[varDisConAgeRel\]\]/g, $varDisConAgeRel);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

eval(GetDynamicPanelScript('u98', 1));

eval(GetDynamicPanelScript('u51', 2));

eval(GetDynamicPanelScript('u141', 2));

eval(GetDynamicPanelScript('u11', 1));

eval(GetDynamicPanelScript('u158', 1));

eval(GetDynamicPanelScript('u221', 1));

eval(GetDynamicPanelScript('u50', 1));

eval(GetDynamicPanelScript('u190', 1));

eval(GetDynamicPanelScript('u2', 1));

eval(GetDynamicPanelScript('u149', 1));

eval(GetDynamicPanelScript('u10', 1));

eval(GetDynamicPanelScript('u172', 1));

eval(GetDynamicPanelScript('u150', 2));

eval(GetDynamicPanelScript('u245', 1));

eval(GetDynamicPanelScript('u95', 1));

eval(GetDynamicPanelScript('u185', 1));

eval(GetDynamicPanelScript('u162', 1));

eval(GetDynamicPanelScript('u102', 1));

eval(GetDynamicPanelScript('u235', 1));

eval(GetDynamicPanelScript('u179', 1));

eval(GetDynamicPanelScript('u103', 2));

eval(GetDynamicPanelScript('u207', 1));

eval(GetDynamicPanelScript('u263', 1));

eval(GetDynamicPanelScript('u152', 1));

eval(GetDynamicPanelScript('u77', 1));

eval(GetDynamicPanelScript('u126', 1));

eval(GetDynamicPanelScript('u155', 1));

eval(GetDynamicPanelScript('u133', 2));

eval(GetDynamicPanelScript('u256', 1));

eval(GetDynamicPanelScript('u80', 2));

eval(GetDynamicPanelScript('u58', 2));

eval(GetDynamicPanelScript('u123', 1));

eval(GetDynamicPanelScript('u130', 1));

eval(GetDynamicPanelScript('u274', 1));

function rdo6onChangeDisCon1(e) {

if ((GetSelectedOption('u156')) == (PopulateVariables('Cancer'))) {

	SetPanelVisibilityu158("");

	MoveWidgetBy('u172',0,32);

	MoveWidgetBy('u162',0,32);

	MoveWidgetBy('u179',0,32);

	MoveWidgetBy('u185',0,32);

rdo5onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u156')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu152("");

	MoveWidgetBy('u172',0,32);

	MoveWidgetBy('u162',0,32);

	MoveWidgetBy('u179',0,32);

	MoveWidgetBy('u185',0,32);

rdo5onChangeDisCon1(e);

}
else
if (true) {

rdo5onChangeDisCon1(e);

}

}

function rdo10onClickSaveInfo(e) {

if (true) {

rdo0onClickSaveMe(e);

}

}

function rdo10onClickCancelInfo(e) {

if (true) {

rdo0onClickCancelMe(e);

}

}

function rdo4onClickHideHI(e) {

if (true) {

	SetPanelStateu141("pd1u141");

	SetPanelVisibilityu149("hidden");

	MoveWidgetBy('u274',0,-285);

	MoveWidgetBy('u2',0,-285);

}

}

function rdo4onClickShowHI(e) {

if (true) {

	SetPanelStateu141("pd0u141");

	SetPanelVisibilityu149("");

	MoveWidgetBy('u274',0,285);

	MoveWidgetBy('u2',0,285);

}

}

function rdo8onChangeDisConAge(e) {

if (true) {

rdo5onChangeDisConAge(e);

}

}

function rdo2onUncheckEthnicityHL(e) {

if ((GetCheckState('u106')) == (false)) {

SetCheckState('u106', false);

SetCheckState('u104', false);

	SetPanelStateu103("pd0u103");

	MoveWidgetBy('u130',0,-65);

	MoveWidgetBy('u123',0,-65);

	MoveWidgetBy('u126',0,-65);

	MoveWidgetBy('u141',0,-65);

	MoveWidgetBy('u149',0,-65);

	MoveWidgetBy('u274',0,-65);

	MoveWidgetBy('u2',0,-65);

}

}

function rdo2onCheckEthinicityHL(e) {

if ((GetCheckState('u104')) == (true)) {

SetCheckState('u104', true);

SetCheckState('u106', true);

	SetPanelStateu103("pd1u103");

	MoveWidgetBy('u130',0,65);

	MoveWidgetBy('u141',0,65);

	MoveWidgetBy('u123',0,65);

	MoveWidgetBy('u126',0,65);

	MoveWidgetBy('u149',0,65);

	MoveWidgetBy('u274',0,65);

	MoveWidgetBy('u2',0,65);

}

}

function rdo0onClickSaveMe(e) {

}

function rdo0onClickCancelMe(e) {

}

function rdo0onClickCloseMe(e) {

}

function rdo0onClickHelpMe(e) {

}

function rdo0onChangeDisCon1(e) {

}

function rdo0onChangeDisCon2(e) {

}

function rdo0onChangeDisConAge(e) {

}

function rdo0onClickDisConAdd(e) {

}

function rdo0onClickDisConCancel(e) {

}

function rdo7onChangeDisCon2(e) {

if ((GetSelectedOption('u159')) == (PopulateVariables('Other - Add new'))) {

	SetPanelStateu152("pd0u152");

	SetPanelVisibilityu152("");

	MoveWidgetBy('u172',0,32);

	MoveWidgetBy('u162',0,32);

	MoveWidgetBy('u152',0,32);

	MoveWidgetBy('u179',0,32);

	MoveWidgetBy('u185',0,32);

rdo5onChangeDisCon2(e);

}
else
if (true) {

rdo5onChangeDisCon2(e);

}

}

function rdo5onChangeDisCon1(e) {

if ((GetSelectedOption('u156')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Me', GetSelectedOption('u156'));

	MoveWidgetBy('u2',0,32);

	MoveWidgetBy('u274',0,32);

rdo0onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u156')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u153'));

	MoveWidgetBy('u2',0,32);

	MoveWidgetBy('u274',0,32);

rdo0onChangeDisCon1(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Me', GetSelectedOption('u156'));

rdo0onChangeDisCon1(e);

}

}

function rdo5onChangeDisCon2(e) {

if ((GetSelectedOption('u159')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u153'));

	MoveWidgetBy('u2',0,32);

	MoveWidgetBy('u274',0,32);

rdo0onChangeDisCon2(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon2Me', GetSelectedOption('u159'));

rdo0onChangeDisCon2(e);

}

}

function rdo5onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeMe', GetSelectedOption('u186'));

rdo0onChangeDisConAge(e);

}

}

function rdo5onClickDisConSearch(e) {

}

function rdo5onCheckSearchResult(e) {

}

function rdo5onClickDisConAdd(e) {

if (((GetSelectedOption('u156')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u156')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u169', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Me]]</span>'));

SetWidgetRichText('u170', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u171', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u156', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u159', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u186', PopulateVariables(' '));

SetWidgetFormText('u153', PopulateVariables(''));

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

	MoveWidgetBy('u2',0,0);

	MoveWidgetBy('u274',0,0);

rdo0onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u156')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u153'));

SetWidgetRichText('u169', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewMe]]</span>'));

SetWidgetRichText('u170', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u171', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u156', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u159', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u186', PopulateVariables(' '));

SetWidgetFormText('u153', PopulateVariables(''));

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

	MoveWidgetBy('u2',0,-32);

	MoveWidgetBy('u274',0,-32);

rdo0onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u159')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u159')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u169', PopulateVariables('<span style=" color:#000000; font-size:13px;"> [[varDisCon1Me]]: [[varDisCon2Me]]</span>'));

SetWidgetRichText('u170', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u171', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u156', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u159', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u186', PopulateVariables(' '));

SetWidgetFormText('u153', PopulateVariables(''));

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

	MoveWidgetBy('u2',0,-32);

	MoveWidgetBy('u274',0,-32);

rdo0onClickDisConAdd(e);

}

if ((GetSelectedOption('u159')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u153'));

SetWidgetRichText('u169', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Me]]: [[varDisConNewMe]]</span>'));

SetWidgetRichText('u170', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u171', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u156', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u159', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u186', PopulateVariables(' '));

SetWidgetFormText('u153', PopulateVariables(''));

	MoveWidgetBy('u2',0,-64);

	MoveWidgetBy('u274',0,-64);

rdo0onClickDisConAdd(e);

}

}

function rdo5onClickDisConCancel(e) {

if (((GetSelectedOption('u156')) != (PopulateVariables('Cancer'))) || ((GetSelectedOption('u156')) != (PopulateVariables('Other - Add new')))) {

	MoveWidgetBy('u2',0,0);

	MoveWidgetBy('u274',0,0);

rdo0onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u156')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u2',0,-32);

	MoveWidgetBy('u274',0,-32);

rdo0onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u159')) != (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u2',0,-32);

	MoveWidgetBy('u274',0,-32);

rdo0onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u159')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u2',0,-64);

	MoveWidgetBy('u274',0,-64);

rdo0onClickDisConCancel(e);

}

}

function rdo9onChangeDisCon1L1(e) {

if ((GetSelectedOption('u252')) == (PopulateVariables('Cancer'))) {

;

SetSelectedOption('u214', PopulateVariables('Cancer'));

	SetPanelVisibilityu207("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu221("hidden");

	SetPanelVisibilityu245("hidden");

	MoveWidgetBy('u235',0,35);

	MoveWidgetBy('u274',0,35);

	MoveWidgetBy('u263',0,35);

}
else
if ((GetSelectedOption('u252')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u231', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu221("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu207("hidden");

	SetPanelVisibilityu245("hidden");

	MoveWidgetBy('u235',0,35);

	MoveWidgetBy('u274',0,35);

	MoveWidgetBy('u263',0,35);

}

}

function rdo9onChangeDisConAgeL1(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u253'));

}

}

function rdo9onChangeDisCon1L2(e) {

if ((GetSelectedOption('u214')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u231', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu221("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu207("hidden");

	SetPanelVisibilityu245("hidden");

}

}

function rdo9onChangeDisCon2L2(e) {

if ((GetSelectedOption('u215')) == (PopulateVariables('Other Cancer'))) {

;

;

SetSelectedOption('u197', PopulateVariables('Cancer'));

SetSelectedOption('u198', PopulateVariables('Other Cancer'));

	SetPanelVisibilityu190("");

	SetPanelVisibilityu207("hidden");

	SetPanelVisibilityu221("hidden");

	SetPanelVisibilityu245("hidden");

	MoveWidgetBy('u235',0,33);

	MoveWidgetBy('u274',0,33);

	MoveWidgetBy('u263',0,33);

}
else
if ((GetSelectedOption('u215')) != (PopulateVariables('Other Cancer'))) {

;

;

	SetPanelVisibilityu235("");

}

}

function rdo9onChangeDisConAgeL2(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u218'));

}

}

function rdo9onClickAddDisCon2(e) {

if (true) {

SetWidgetRichText('u242', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u243', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u244', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u252', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u253', PopulateVariables(' '));

	SetPanelVisibilityu245("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu207("hidden");

	SetPanelVisibilityu221("hidden");

	MoveWidgetBy('u263',0,-35);

	MoveWidgetBy('u235',0,-35);

	MoveWidgetBy('u274',0,-35);

}

}

function rdo9onChangeDisCon1New(e) {

if ((GetSelectedOption('u231')) == (PopulateVariables('Cancer'))) {

;

SetSelectedOption('u214', PopulateVariables('Cancer'));

	SetPanelVisibilityu207("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu221("hidden");

	SetPanelVisibilityu245("hidden");

}
else
if ((GetSelectedOption('u231')) == (PopulateVariables('Select Disease or Condition'))) {

;

;

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

	SetPanelVisibilityu245("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu207("hidden");

	SetPanelVisibilityu221("hidden");

	MoveWidgetBy('u235',0,-35);

	MoveWidgetBy('u274',0,-35);

	MoveWidgetBy('u263',0,-35);

}

}

function rdo9onChangeDisConAgeNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u232'));

}

}

function rdo9onClickAddDisConNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u230'));

SetWidgetRichText('u242', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

SetWidgetRichText('u243', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u244', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u252', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u253', PopulateVariables(' '));

	SetPanelVisibilityu245("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu207("hidden");

	SetPanelVisibilityu221("hidden");

	MoveWidgetBy('u235',0,-35);

	MoveWidgetBy('u263',0,-35);

	MoveWidgetBy('u274',0,-35);

}

}

function rdo9onChangeDisCon1L3(e) {

if ((GetSelectedOption('u197')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u231', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu221("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu207("hidden");

	SetPanelVisibilityu245("hidden");

	MoveWidgetBy('u235',0,-33);

	MoveWidgetBy('u274',0,-33);

	MoveWidgetBy('u263',0,-33);

}
else
if ((GetSelectedOption('u197')) == (PopulateVariables('Select Disease or Condition'))) {

;

;

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

SetGlobalVariableValue('$varDisConAgeFather', PopulateVariables(''));

	SetPanelVisibilityu235("");

	SetPanelVisibilityu245("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu207("hidden");

	SetPanelVisibilityu221("hidden");

	MoveWidgetBy('u235',0,-68);

	MoveWidgetBy('u274',0,-68);

	MoveWidgetBy('u263',0,-68);

}

}

function rdo9onChangeDisCon2L3(e) {

if ((GetSelectedOption('u198')) != (PopulateVariables('Other Cancer'))) {

;

;

SetSelectedOption('u214', PopulateVariables('Cancer'));

SetSelectedOption('u215', GetSelectedOption('u198'));

	SetPanelVisibilityu207("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu235("hidden");

	SetPanelVisibilityu245("hidden");

	MoveWidgetBy('u235',0,-33);

	MoveWidgetBy('u274',0,-33);

	MoveWidgetBy('u263',0,-33);

}

}

function rdo9onChangeDisConAgeL3(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u204'));

}

}

function rdo9onClickAddDisCon3(e) {

if (true) {

;

SetWidgetRichText('u242', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]: [[varDisCon3]]</span>'));

SetWidgetRichText('u243', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u244', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u252', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u253', PopulateVariables(' '));

	SetPanelVisibilityu245("");

	SetPanelVisibilityu190("hidden");

	SetPanelVisibilityu207("hidden");

	SetPanelVisibilityu221("hidden");

	MoveWidgetBy('u235',0,-68);

	MoveWidgetBy('u263',0,-68);

	MoveWidgetBy('u274',0,-68);

}

}

function rdo3onClickHidePI(e) {

if (true) {

	SetPanelStateu133("pd1u133");

	SetPanelStateu51("pd0u51");

	SetPanelStateu58("pd0u58");

	SetPanelStateu80("pd0u80");

	SetPanelVisibilityu10("hidden");

	MoveWidgetBy('u141',0,-475);

	MoveWidgetBy('u274',0,-475);

	MoveWidgetBy('u149',0,-475);

	MoveWidgetBy('u2',0,-475);

}

}

function rdo3onClickShowPI(e) {

if (true) {

	SetPanelStateu133("pd0u133");

	SetPanelVisibilityu10("");

	MoveWidgetBy('u149',0,475);

	MoveWidgetBy('u141',0,475);

	MoveWidgetBy('u274',0,475);

	MoveWidgetBy('u2',0,475);

}

}

function rdo1onCheckRaceAIAN(e) {

}

function rdo1onUncheckRaceAIAN(e) {

}

function rdo1onCheckRaceAsian(e) {

if ((GetCheckState('u59')) == (true)) {

SetCheckState('u59', true);

SetCheckState('u61', true);

	SetPanelStateu58("pd1u58");

	MoveWidgetBy('u77',0,65);

	MoveWidgetBy('u80',0,65);

	MoveWidgetBy('u95',0,65);

	MoveWidgetBy('u98',0,65);

	MoveWidgetBy('u102',0,65);

	MoveWidgetBy('u141',0,65);

	MoveWidgetBy('u149',0,65);

	MoveWidgetBy('u274',0,65);

	MoveWidgetBy('u2',0,65);

}

}

function rdo1onUncheckRaceAsian(e) {

if ((GetCheckState('u61')) == (false)) {

SetCheckState('u61', false);

SetCheckState('u59', false);

	SetPanelStateu58("pd0u58");

	MoveWidgetBy('u77',0,-65);

	MoveWidgetBy('u80',0,-65);

	MoveWidgetBy('u95',0,-65);

	MoveWidgetBy('u98',0,-65);

	MoveWidgetBy('u102',0,-65);

	MoveWidgetBy('u141',0,-65);

	MoveWidgetBy('u149',0,-65);

	MoveWidgetBy('u274',0,-65);

	MoveWidgetBy('u2',0,-65);

}

}

function rdo1onCheckRaceNHOPI(e) {

if ((GetCheckState('u81')) == (true)) {

SetCheckState('u81', true);

SetCheckState('u83', true);

	SetPanelStateu80("pd1u80");

	MoveWidgetBy('u95',0,45);

	MoveWidgetBy('u98',0,45);

	MoveWidgetBy('u102',0,45);

	MoveWidgetBy('u141',0,45);

	MoveWidgetBy('u149',0,45);

	MoveWidgetBy('u274',0,45);

	MoveWidgetBy('u2',0,45);

}

}

function rdo1onUncheckRaceNHOPI(e) {

if ((GetCheckState('u83')) == (false)) {

SetCheckState('u83', false);

SetCheckState('u81', false);

	SetPanelStateu80("pd0u80");

	MoveWidgetBy('u95',0,-45);

	MoveWidgetBy('u98',0,-45);

	MoveWidgetBy('u102',0,-45);

	MoveWidgetBy('u141',0,-45);

	MoveWidgetBy('u149',0,-45);

	MoveWidgetBy('u274',0,-45);

	MoveWidgetBy('u2',0,-45);

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u256 = document.getElementById('u256');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u195 = document.getElementById('u195');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u28 = document.getElementById('u28');

var u226 = document.getElementById('u226');

var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{

if (true) {

rdo4onClickHideHI(e);

}

}

var u180 = document.getElementById('u180');

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{

if (((GetSelectedOption('u156')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u159')) == (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

	MoveWidgetTo('u152',10,82);

	MoveWidgetTo('u172',10,180);

	MoveWidgetTo('u162',10,205);

	MoveWidgetTo('u179',10,114);

	MoveWidgetTo('u185',10,82);

rdo5onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u156')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u159')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u159')) != (PopulateVariables('Other - Add new'))))) {

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

	MoveWidgetTo('u172',10,180);

	MoveWidgetTo('u162',10,205);

	MoveWidgetTo('u179',10,114);

	MoveWidgetTo('u185',10,82);

rdo5onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u156')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

	MoveWidgetTo('u172',10,180);

	MoveWidgetTo('u162',10,205);

	MoveWidgetTo('u179',10,114);

	MoveWidgetTo('u185',10,82);

rdo5onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u156')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u156')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

rdo5onClickDisConAdd(e);

}

}

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u190 = document.getElementById('u190');

var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{

if ((GetCheckState('u59')) == (true)) {

rdo1onCheckRaceAsian(e);

}

}

var u231 = document.getElementById('u231');

if (bIE) u231.attachEvent("onchange", Changeu231);
else u231.addEventListener("change", Changeu231, true);
function Changeu231(e)
{

if (true) {

rdo9onChangeDisCon1New(e);

}

}

var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if ((GetCheckState('u104')) == (true)) {

rdo2onCheckEthinicityHL(e);

}

}

var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u277 = document.getElementById('u277');

u277.style.cursor = 'pointer';
if (bIE) u277.attachEvent("onclick", Clicku277);
else u277.addEventListener("click", Clicku277, true);
function Clicku277(e)
{

if (true) {

rdo10onClickCancelInfo(e);

}

}

var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u193 = document.getElementById('u193');

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u91 = document.getElementById('u91');

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u173 = document.getElementById('u173');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');

var u252 = document.getElementById('u252');

if (bIE) u252.attachEvent("onchange", Changeu252);
else u252.addEventListener("change", Changeu252, true);
function Changeu252(e)
{

if (true) {

rdo9onChangeDisCon1L1(e);

}

}

var u270 = document.getElementById('u270');

var u179 = document.getElementById('u179');

var u268 = document.getElementById('u268');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u246 = document.getElementById('u246');

var u257 = document.getElementById('u257');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u130 = document.getElementById('u130');

var u108 = document.getElementById('u108');

var u228 = document.getElementById('u228');

var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{

if ((GetCheckState('u54')) == (false)) {

rdo1onUncheckRaceAIAN(e);

}

}

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u159 = document.getElementById('u159');

if (bIE) u159.attachEvent("onchange", Changeu159);
else u159.addEventListener("change", Changeu159, true);
function Changeu159(e)
{

if (true) {

rdo7onChangeDisCon2(e);

}

}

var u248 = document.getElementById('u248');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{

if (true) {

	NewWindow("help_Ashkenazi_Jew.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u129'] = 'top';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u156 = document.getElementById('u156');

if (bIE) u156.attachEvent("onchange", Changeu156);
else u156.addEventListener("change", Changeu156, true);
function Changeu156(e)
{

if (true) {

rdo6onChangeDisCon1(e);

}

}

var u207 = document.getElementById('u207');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u264 = document.getElementById('u264');

var u185 = document.getElementById('u185');

var u197 = document.getElementById('u197');

if (bIE) u197.attachEvent("onchange", Changeu197);
else u197.addEventListener("change", Changeu197, true);
function Changeu197(e)
{

if (true) {

rdo9onChangeDisCon1L3(e);

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{

if ((GetCheckState('u106')) == (false)) {

rdo2onUncheckEthnicityHL(e);

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u182 = document.getElementById('u182');

u182.style.cursor = 'pointer';
if (bIE) u182.attachEvent("onclick", Clicku182);
else u182.addEventListener("click", Clicku182, true);
function Clicku182(e)
{

if (((GetSelectedOption('u156')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u159')) == (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u156', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u159', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u186', PopulateVariables(' '));

SetWidgetFormText('u153', PopulateVariables(''));

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

	MoveWidgetTo('u152',10,82);

	MoveWidgetTo('u172',10,180);

	MoveWidgetTo('u162',10,205);

	MoveWidgetTo('u179',10,114);

	MoveWidgetTo('u185',10,82);

rdo5onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u156')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u159')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u159')) != (PopulateVariables('Other - Add new'))))) {

SetSelectedOption('u156', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u159', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u186', PopulateVariables(' '));

SetWidgetFormText('u153', PopulateVariables(''));

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

	MoveWidgetTo('u172',10,180);

	MoveWidgetTo('u162',10,205);

	MoveWidgetTo('u179',10,114);

	MoveWidgetTo('u185',10,82);

rdo5onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u156')) == (PopulateVariables('Other - Add new'))) {

SetSelectedOption('u156', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u159', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u186', PopulateVariables(' '));

SetWidgetFormText('u153', PopulateVariables(''));

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

	MoveWidgetTo('u172',10,180);

	MoveWidgetTo('u162',10,205);

	MoveWidgetTo('u179',10,114);

	MoveWidgetTo('u185',10,82);

rdo5onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u156')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u156')) != (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u156', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u159', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u186', PopulateVariables(' '));

SetWidgetFormText('u153', PopulateVariables(''));

	SetPanelVisibilityu152("hidden");

	SetPanelVisibilityu158("hidden");

rdo5onClickDisConCancel(e);

}

}

var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');

if (bIE) u198.attachEvent("onchange", Changeu198);
else u198.addEventListener("change", Changeu198, true);
function Changeu198(e)
{

if (true) {

rdo9onChangeDisCon2L3(e);

}

}

var u279 = document.getElementById('u279');

var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if ((GetCheckState('u81')) == (true)) {

rdo1onCheckRaceNHOPI(e);

}

}

var u144 = document.getElementById('u144');

var u233 = document.getElementById('u233');

u233.style.cursor = 'pointer';
if (bIE) u233.attachEvent("onclick", Clicku233);
else u233.addEventListener("click", Clicku233, true);
function Clicku233(e)
{

if (true) {

rdo9onClickAddDisConNew(e);

}

}

var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u30 = document.getElementById('u30');

var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');

var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if ((GetCheckState('u61')) == (false)) {

rdo1onUncheckRaceAsian(e);

}

}

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u96 = document.getElementById('u96');

var u253 = document.getElementById('u253');

if (bIE) u253.attachEvent("onchange", Changeu253);
else u253.addEventListener("change", Changeu253, true);
function Changeu253(e)
{

if (true) {

rdo9onChangeDisConAgeL1(e);

}

}

var u137 = document.getElementById('u137');

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{

if (true) {

rdo3onClickShowPI(e);

}

}

var u44 = document.getElementById('u44');

var u165 = document.getElementById('u165');

var u254 = document.getElementById('u254');

u254.style.cursor = 'pointer';
if (bIE) u254.attachEvent("onclick", Clicku254);
else u254.addEventListener("click", Clicku254, true);
function Clicku254(e)
{

if (true) {

}

}

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u221 = document.getElementById('u221');

var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u58 = document.getElementById('u58');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u250 = document.getElementById('u250');

var u199 = document.getElementById('u199');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{

if (true) {

rdo4onClickShowHI(e);

}

}

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');

var u274 = document.getElementById('u274');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u153 = document.getElementById('u153');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u201 = document.getElementById('u201');

var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u120 = document.getElementById('u120');

var u261 = document.getElementById('u261');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u87 = document.getElementById('u87');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

rdo0onClickCloseMe(e);

}

}

var u214 = document.getElementById('u214');

if (bIE) u214.attachEvent("onchange", Changeu214);
else u214.addEventListener("change", Changeu214, true);
function Changeu214(e)
{

if (true) {

rdo9onChangeDisCon1L2(e);

}

}

var u36 = document.getElementById('u36');

var u171 = document.getElementById('u171');

u171.style.cursor = 'pointer';
if (bIE) u171.attachEvent("onclick", Clicku171);
else u171.addEventListener("click", Clicku171, true);
function Clicku171(e)
{

if (true) {

SetWidgetRichText('u169', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u171', PopulateVariables(''));

SetWidgetRichText('u170', PopulateVariables(''));

}

}
gv_vAlignTable['u171'] = 'top';
var u222 = document.getElementById('u222');

var u149 = document.getElementById('u149');

var u238 = document.getElementById('u238');

var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if ((GetCheckState('u52')) == (true)) {

rdo1onCheckRaceAIAN(e);

}

}

var u141 = document.getElementById('u141');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');

var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u235 = document.getElementById('u235');

var u275 = document.getElementById('u275');

u275.style.cursor = 'pointer';
if (bIE) u275.attachEvent("onclick", Clicku275);
else u275.addEventListener("click", Clicku275, true);
function Clicku275(e)
{

if (true) {

rdo10onClickSaveInfo(e);

}

}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u236 = document.getElementById('u236');

var u99 = document.getElementById('u99');

var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if ((GetCheckState('u17')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Female'));

}

}

var u218 = document.getElementById('u218');

if (bIE) u218.attachEvent("onchange", Changeu218);
else u218.addEventListener("change", Changeu218, true);
function Changeu218(e)
{

if (true) {

rdo9onChangeDisConAgeL2(e);

}

}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u167 = document.getElementById('u167');

var u203 = document.getElementById('u203');

var u245 = document.getElementById('u245');

var u215 = document.getElementById('u215');

if (bIE) u215.attachEvent("onchange", Changeu215);
else u215.addEventListener("change", Changeu215, true);
function Changeu215(e)
{

if (true) {

rdo9onChangeDisCon2L2(e);

}

}

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u188 = document.getElementById('u188');

var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{

if ((GetCheckState('u32')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Other'));

}

}

var u80 = document.getElementById('u80');

var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{

if (true) {

rdo3onClickHidePI(e);

}

}

var u51 = document.getElementById('u51');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u263 = document.getElementById('u263');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u155 = document.getElementById('u155');

var u158 = document.getElementById('u158');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u204 = document.getElementById('u204');

if (bIE) u204.attachEvent("onchange", Changeu204);
else u204.addEventListener("change", Changeu204, true);
function Changeu204(e)
{

if (true) {

rdo9onChangeDisConAgeL3(e);

}

}

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u147 = document.getElementById('u147');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u114 = document.getElementById('u114');

var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u26 = document.getElementById('u26');

var u219 = document.getElementById('u219');

u219.style.cursor = 'pointer';
if (bIE) u219.attachEvent("onclick", Clicku219);
else u219.addEventListener("click", Clicku219, true);
function Clicku219(e)
{

if (true) {

rdo9onClickAddDisCon2(e);

}

}

var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');

var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u5 = document.getElementById('u5');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u41 = document.getElementById('u41');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u224 = document.getElementById('u224');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u102 = document.getElementById('u102');

var u232 = document.getElementById('u232');

if (bIE) u232.attachEvent("onchange", Changeu232);
else u232.addEventListener("change", Changeu232, true);
function Changeu232(e)
{

if (true) {

rdo9onChangeDisConAgeNew(e);

}

}

var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{

if ((GetCheckState('u83')) == (false)) {

rdo1onUncheckRaceNHOPI(e);

}

}

var u110 = document.getElementById('u110');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u69 = document.getElementById('u69');

var u216 = document.getElementById('u216');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u22 = document.getElementById('u22');

var u123 = document.getElementById('u123');

var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');

var u186 = document.getElementById('u186');

if (bIE) u186.attachEvent("onchange", Changeu186);
else u186.addEventListener("change", Changeu186, true);
function Changeu186(e)
{

if (true) {

rdo8onChangeDisConAge(e);

}

}

var u271 = document.getElementById('u271');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u217 = document.getElementById('u217');

var u133 = document.getElementById('u133');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u266 = document.getElementById('u266');

var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if ((GetCheckState('u15')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Male'));

}

}

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
var u98 = document.getElementById('u98');

var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u175 = document.getElementById('u175');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u116 = document.getElementById('u116');

var u205 = document.getElementById('u205');

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{

if (true) {

rdo9onClickAddDisCon3(e);

}

}

var u78 = document.getElementById('u78');

var u259 = document.getElementById('u259');

var u272 = document.getElementById('u272');

u272.style.cursor = 'pointer';
if (bIE) u272.attachEvent("onclick", Clicku272);
else u272.addEventListener("click", Clicku272, true);
function Clicku272(e)
{

if (true) {

	NewWindow("help_Edit_Me.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u11 = document.getElementById('u11');

var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');

var u14 = document.getElementById('u14');

var u244 = document.getElementById('u244');

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{

if (true) {

SetWidgetRichText('u242', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u244', PopulateVariables(''));

SetWidgetRichText('u243', PopulateVariables(''));

}

}
gv_vAlignTable['u244'] = 'top';
if (window.OnLoad) OnLoad();
