
var PageName = 'submodal_Edit Family Member';
var PageId = 'p26553f0dcf834d4a837c568f149d68bf'
var PageUrl = 'submodal_Edit_Family_Member.html'
document.title = 'submodal_Edit Family Member';

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

eval(GetDynamicPanelScript('u198', 1));

eval(GetDynamicPanelScript('u51', 2));

eval(GetDynamicPanelScript('u306', 1));

eval(GetDynamicPanelScript('u141', 2));

eval(GetDynamicPanelScript('u215', 1));

eval(GetDynamicPanelScript('u299', 1));

eval(GetDynamicPanelScript('u264', 1));

eval(GetDynamicPanelScript('u6', 1));

eval(GetDynamicPanelScript('u67', 1));

eval(GetDynamicPanelScript('u75', 1));

eval(GetDynamicPanelScript('u205', 1));

eval(GetDynamicPanelScript('u233', 1));

eval(GetDynamicPanelScript('u195', 1));

eval(GetDynamicPanelScript('u228', 1));

eval(GetDynamicPanelScript('u8', 2));

eval(GetDynamicPanelScript('u334', 1));

eval(GetDynamicPanelScript('u278', 1));

eval(GetDynamicPanelScript('u89', 2));

eval(GetDynamicPanelScript('u140', 1));

eval(GetDynamicPanelScript('u192', 1));

eval(GetDynamicPanelScript('u193', 2));

eval(GetDynamicPanelScript('u88', 1));

eval(GetDynamicPanelScript('u315', 3));

eval(GetDynamicPanelScript('u2', 1));

eval(GetDynamicPanelScript('u136', 1));

eval(GetDynamicPanelScript('u7', 1));

eval(GetDynamicPanelScript('u288', 1));

eval(GetDynamicPanelScript('u164', 1));

eval(GetDynamicPanelScript('u171', 2));

eval(GetDynamicPanelScript('u176', 2));

eval(GetDynamicPanelScript('u118', 2));

eval(GetDynamicPanelScript('u222', 1));

eval(GetDynamicPanelScript('u184', 2));

eval(GetDynamicPanelScript('u161', 1));

eval(GetDynamicPanelScript('u250', 1));

eval(GetDynamicPanelScript('u115', 1));

eval(GetDynamicPanelScript('u96', 2));

eval(GetDynamicPanelScript('u133', 1));

eval(GetDynamicPanelScript('u32', 2));

eval(GetDynamicPanelScript('u23', 3));

eval(GetDynamicPanelScript('u168', 1));

eval(GetDynamicPanelScript('u201', 1));

function rdo11onChangeDisCon1L1(e) {

if ((GetSelectedOption('u295')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u295'));

SetSelectedOption('u257', PopulateVariables('Cancer'));

	SetPanelVisibilityu250("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu264("hidden");

	SetPanelVisibilityu288("hidden");

	MoveWidgetBy('u278',0,35);

	MoveWidgetBy('u334',0,35);

	MoveWidgetBy('u306',0,35);

}
else
if ((GetSelectedOption('u295')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u295'));

SetSelectedOption('u274', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu264("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu250("hidden");

	SetPanelVisibilityu288("hidden");

	MoveWidgetBy('u278',0,35);

	MoveWidgetBy('u334',0,35);

	MoveWidgetBy('u306',0,35);

}

}

function rdo11onChangeDisConAgeL1(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u296'));

}

}

function rdo11onChangeDisCon1L2(e) {

if ((GetSelectedOption('u257')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u257'));

SetSelectedOption('u274', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu264("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu250("hidden");

	SetPanelVisibilityu288("hidden");

}

}

function rdo11onChangeDisCon2L2(e) {

if ((GetSelectedOption('u258')) == (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u257'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u258'));

SetSelectedOption('u240', PopulateVariables('Cancer'));

SetSelectedOption('u241', PopulateVariables('Other Cancer'));

	SetPanelVisibilityu233("");

	SetPanelVisibilityu250("hidden");

	SetPanelVisibilityu264("hidden");

	SetPanelVisibilityu288("hidden");

	MoveWidgetBy('u278',0,33);

	MoveWidgetBy('u334',0,33);

	MoveWidgetBy('u306',0,33);

}
else
if ((GetSelectedOption('u258')) != (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u257'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u258'));

	SetPanelVisibilityu278("");

}

}

function rdo11onChangeDisConAgeL2(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u261'));

}

}

function rdo11onClickAddDisCon2(e) {

if (true) {

SetWidgetRichText('u285', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u286', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u287', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u295', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables(' '));

	SetPanelVisibilityu288("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu250("hidden");

	SetPanelVisibilityu264("hidden");

	MoveWidgetBy('u306',0,-35);

	MoveWidgetBy('u278',0,-35);

	MoveWidgetBy('u334',0,-35);

}

}

function rdo11onChangeDisCon1New(e) {

if ((GetSelectedOption('u274')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u274'));

SetSelectedOption('u257', PopulateVariables('Cancer'));

	SetPanelVisibilityu250("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu264("hidden");

	SetPanelVisibilityu288("hidden");

}
else
if ((GetSelectedOption('u274')) == (PopulateVariables('Select Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', PopulateVariables(''));

SetGlobalVariableValue('$varDisCon2Father', PopulateVariables(''));

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

	SetPanelVisibilityu288("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu250("hidden");

	SetPanelVisibilityu264("hidden");

	MoveWidgetBy('u278',0,-35);

	MoveWidgetBy('u334',0,-35);

	MoveWidgetBy('u306',0,-35);

}

}

function rdo11onChangeDisConAgeNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u275'));

}

}

function rdo11onClickAddDisConNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u273'));

SetWidgetRichText('u285', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

SetWidgetRichText('u286', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u287', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u295', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables(' '));

	SetPanelVisibilityu288("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu250("hidden");

	SetPanelVisibilityu264("hidden");

	MoveWidgetBy('u278',0,-35);

	MoveWidgetBy('u306',0,-35);

	MoveWidgetBy('u334',0,-35);

}

}

function rdo11onChangeDisCon1L3(e) {

if ((GetSelectedOption('u240')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u240'));

SetSelectedOption('u274', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu264("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu250("hidden");

	SetPanelVisibilityu288("hidden");

	MoveWidgetBy('u278',0,-33);

	MoveWidgetBy('u334',0,-33);

	MoveWidgetBy('u306',0,-33);

}
else
if ((GetSelectedOption('u240')) == (PopulateVariables('Select Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', PopulateVariables(''));

SetGlobalVariableValue('$varDisCon2Father', PopulateVariables(''));

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

SetGlobalVariableValue('$varDisConAgeFather', PopulateVariables(''));

	SetPanelVisibilityu278("");

	SetPanelVisibilityu288("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu250("hidden");

	SetPanelVisibilityu264("hidden");

	MoveWidgetBy('u278',0,-68);

	MoveWidgetBy('u334',0,-68);

	MoveWidgetBy('u306',0,-68);

}

}

function rdo11onChangeDisCon2L3(e) {

if ((GetSelectedOption('u241')) != (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u240'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u241'));

SetSelectedOption('u257', PopulateVariables('Cancer'));

SetSelectedOption('u258', GetSelectedOption('u241'));

	SetPanelVisibilityu250("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu278("hidden");

	SetPanelVisibilityu288("hidden");

	MoveWidgetBy('u278',0,-33);

	MoveWidgetBy('u334',0,-33);

	MoveWidgetBy('u306',0,-33);

}

}

function rdo11onChangeDisConAgeL3(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u247'));

}

}

function rdo11onClickAddDisCon3(e) {

if (true) {

;

SetWidgetRichText('u285', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]: [[varDisCon3]]</span>'));

SetWidgetRichText('u286', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u287', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u295', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables(' '));

	SetPanelVisibilityu288("");

	SetPanelVisibilityu233("hidden");

	SetPanelVisibilityu250("hidden");

	SetPanelVisibilityu264("hidden");

	MoveWidgetBy('u278',0,-68);

	MoveWidgetBy('u306',0,-68);

	MoveWidgetBy('u334',0,-68);

}

}

function rdo6onClickHideHI(e) {

if (true) {

	SetPanelStateu184("pd1u184");

	SetPanelVisibilityu192("hidden");

	MoveWidgetBy('u334',0,-285);

	MoveWidgetBy('u2',0,-285);

}

}

function rdo6onClickShowHI(e) {

if (true) {

	SetPanelStateu184("pd0u184");

	SetPanelVisibilityu192("");

	MoveWidgetBy('u334',0,285);

	MoveWidgetBy('u2',0,285);

}

}

function rdo10onChangeDisConAge(e) {

if (true) {

rdo7onChangeDisConAge(e);

}

}

function rdo4onUncheckEthnicityHL(e) {

if ((GetCheckState('u144')) == (false)) {

SetCheckState('u144', false);

SetCheckState('u142', false);

	SetPanelStateu141("pd0u141");

	MoveWidgetBy('u168',0,-65);

	MoveWidgetBy('u161',0,-65);

	MoveWidgetBy('u164',0,-65);

	MoveWidgetBy('u184',0,-65);

	MoveWidgetBy('u192',0,-65);

	MoveWidgetBy('u334',0,-65);

	MoveWidgetBy('u2',0,-65);

}

}

function rdo4onCheckEthinicityHL(e) {

if ((GetCheckState('u142')) == (true)) {

SetCheckState('u142', true);

SetCheckState('u144', true);

	SetPanelStateu141("pd1u141");

	MoveWidgetBy('u168',0,65);

	MoveWidgetBy('u184',0,65);

	MoveWidgetBy('u161',0,65);

	MoveWidgetBy('u164',0,65);

	MoveWidgetBy('u192',0,65);

	MoveWidgetBy('u334',0,65);

	MoveWidgetBy('u2',0,65);

}

}

function rdo8onChangeDisCon1(e) {

if ((GetSelectedOption('u199')) == (PopulateVariables('Cancer'))) {

	SetPanelVisibilityu201("");

	MoveWidgetBy('u215',0,32);

	MoveWidgetBy('u205',0,32);

	MoveWidgetBy('u222',0,32);

	MoveWidgetBy('u228',0,32);

rdo7onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u199')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu195("");

	MoveWidgetBy('u215',0,32);

	MoveWidgetBy('u205',0,32);

	MoveWidgetBy('u222',0,32);

	MoveWidgetBy('u228',0,32);

rdo7onChangeDisCon1(e);

}
else
if (true) {

rdo7onChangeDisCon1(e);

}

}

function rdo2onChangeDisConAge(e) {

}

function rdo0onClickSaveRel(e) {

}

function rdo0onClickCancelRel(e) {

}

function rdo0onClickCloseRel(e) {

}

function rdo0onClickDisConAdd(e) {

}

function rdo0onClickDisConCancel(e) {

}

function rdo0onChangeDisCon1(e) {

}

function rdo0onChangeDisCon2(e) {

}

function rdo0onChangeDisConAge(e) {

}

function rdo7onChangeDisCon1(e) {

if ((GetSelectedOption('u199')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u199'));

	MoveWidgetBy('u334',0,32);

	MoveWidgetBy('u2',0,32);

rdo0onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u199')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u196'));

	MoveWidgetBy('u334',0,32);

	MoveWidgetBy('u2',0,32);

rdo0onChangeDisCon1(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u199'));

rdo0onChangeDisCon1(e);

}

}

function rdo7onChangeDisCon2(e) {

if ((GetSelectedOption('u202')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u196'));

	MoveWidgetBy('u334',0,32);

	MoveWidgetBy('u2',0,32);

rdo0onChangeDisCon2(e);

}
else
if (((GetSelectedOption('u202')) != (PopulateVariables('Select Specific Cancer'))) || ((GetSelectedOption('u202')) != (PopulateVariables('Other - Add new')))) {

SetGlobalVariableValue('$varDisCon2Me', GetSelectedOption('u202'));

rdo0onChangeDisCon2(e);

}

}

function rdo7onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeRel', GetSelectedOption('u229'));

rdo0onChangeDisConAge(e);

}

}

function rdo7onClickDisConSearch(e) {

}

function rdo7onCheckSearchResult(e) {

}

function rdo7onClickDisConAdd(e) {

if (((GetSelectedOption('u199')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u199')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u212', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Rel]]</span>'));

SetWidgetRichText('u213', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u214', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u199', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u202', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u229', PopulateVariables(' '));

SetWidgetFormText('u196', PopulateVariables(''));

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetBy('u334',0,0);

	MoveWidgetBy('u2',0,0);

rdo0onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u199')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u196'));

SetWidgetRichText('u212', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewRel]]</span>'));

SetWidgetRichText('u213', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u214', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u199', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u202', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u229', PopulateVariables(' '));

SetWidgetFormText('u196', PopulateVariables(''));

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetBy('u334',0,-32);

	MoveWidgetBy('u2',0,-32);

rdo0onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u202')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u202')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u212', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Rel]]: [[varDisCon2Rel]]</span>'));

SetWidgetRichText('u213', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u214', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u199', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u202', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u229', PopulateVariables(' '));

SetWidgetFormText('u196', PopulateVariables(''));

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetBy('u334',0,-32);

	MoveWidgetBy('u2',0,-32);

rdo0onClickDisConAdd(e);

}

if ((GetSelectedOption('u202')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u196'));

SetWidgetRichText('u212', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon2Rel]]: [[varDisConNewRel]]</span>'));

SetWidgetRichText('u213', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u214', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u199', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u202', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u229', PopulateVariables(' '));

SetWidgetFormText('u196', PopulateVariables(''));

	MoveWidgetBy('u334',0,-64);

	MoveWidgetBy('u2',0,-64);

rdo0onClickDisConAdd(e);

}

}

function rdo7onClickDisConCancel(e) {

if (((GetSelectedOption('u199')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u199')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetBy('u334',0,0);

	MoveWidgetBy('u2',0,0);

rdo0onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u199')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetBy('u334',0,-32);

	MoveWidgetBy('u2',0,-32);

rdo0onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u202')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u202')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetBy('u334',0,-32);

	MoveWidgetBy('u2',0,-32);

rdo0onClickDisConCancel(e);

}

if ((GetSelectedOption('u202')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u334',0,-64);

	MoveWidgetBy('u2',0,-64);

rdo0onClickDisConCancel(e);

}

}

function rdo5onClickHidePI(e) {

if (true) {

	SetPanelStateu176("pd1u176");

	SetPanelVisibilityu6("hidden");

	MoveWidgetBy('u184',0,-255);

	MoveWidgetBy('u334',0,-255);

	MoveWidgetBy('u192',0,-255);

	MoveWidgetBy('u2',0,-255);

}

}

function rdo5onClickShowPI(e) {

if (true) {

	SetPanelStateu176("pd0u176");

	SetPanelVisibilityu6("");

	MoveWidgetBy('u192',0,475);

	MoveWidgetBy('u184',0,475);

	MoveWidgetBy('u334',0,475);

}

}

function rdo9onChangeDisCon2(e) {

if ((GetSelectedOption('u202')) == (PopulateVariables('Other - Add new'))) {

	SetPanelStateu195("pd0u195");

	SetPanelVisibilityu195("");

	MoveWidgetBy('u215',0,32);

	MoveWidgetBy('u205',0,32);

	MoveWidgetBy('u195',0,32);

	MoveWidgetBy('u222',0,32);

	MoveWidgetBy('u228',0,32);

rdo7onChangeDisCon2(e);

}
else
if (true) {

rdo7onChangeDisCon2(e);

}

}

function rdo3onCheckRaceAIAN(e) {

}

function rdo3onUncheckRaceAIAN(e) {

}

function rdo3onCheckRaceAsian(e) {

if ((GetCheckState('u97')) == (true)) {

SetCheckState('u97', true);

SetCheckState('u99', true);

	SetPanelStateu96("pd1u96");

	MoveWidgetBy('u115',0,65);

	MoveWidgetBy('u118',0,65);

	MoveWidgetBy('u133',0,65);

	MoveWidgetBy('u136',0,65);

	MoveWidgetBy('u140',0,65);

	MoveWidgetBy('u184',0,65);

	MoveWidgetBy('u192',0,65);

	MoveWidgetBy('u334',0,65);

	MoveWidgetBy('u2',0,65);

}

}

function rdo3onUncheckRaceAsian(e) {

if ((GetCheckState('u99')) == (false)) {

SetCheckState('u99', false);

SetCheckState('u97', false);

	SetPanelStateu96("pd0u96");

	MoveWidgetBy('u115',0,-65);

	MoveWidgetBy('u118',0,-65);

	MoveWidgetBy('u133',0,-65);

	MoveWidgetBy('u136',0,-65);

	MoveWidgetBy('u140',0,-65);

	MoveWidgetBy('u184',0,-65);

	MoveWidgetBy('u192',0,-65);

	MoveWidgetBy('u334',0,-65);

	MoveWidgetBy('u2',0,-65);

}

}

function rdo3onCheckRaceNHOPI(e) {

if ((GetCheckState('u119')) == (true)) {

SetCheckState('u119', true);

SetCheckState('u121', true);

	SetPanelStateu118("pd1u118");

	MoveWidgetBy('u133',0,45);

	MoveWidgetBy('u136',0,45);

	MoveWidgetBy('u140',0,45);

	MoveWidgetBy('u184',0,45);

	MoveWidgetBy('u192',0,45);

	MoveWidgetBy('u334',0,45);

	MoveWidgetBy('u2',0,45);

}

}

function rdo3onUncheckRaceNHOPI(e) {

if ((GetCheckState('u121')) == (false)) {

SetCheckState('u121', false);

SetCheckState('u119', false);

	SetPanelStateu118("pd0u118");

	MoveWidgetBy('u133',0,-45);

	MoveWidgetBy('u136',0,-45);

	MoveWidgetBy('u140',0,-45);

	MoveWidgetBy('u184',0,-45);

	MoveWidgetBy('u192',0,-45);

	MoveWidgetBy('u334',0,-45);

	MoveWidgetBy('u2',0,-45);

}

}

function rdo12onClickSaveInfo(e) {

if (true) {

rdo0onClickSaveRel(e);

}

}

function rdo12onClickCancelInfo(e) {

if (true) {

rdo0onClickCancelRel(e);

}

}

function rdo1onChangeCauseOfDeath(e) {

if (((GetSelectedOption('u58')) == (PopulateVariables('Diabetes'))) || (((GetSelectedOption('u58')) == (PopulateVariables('Gastrointestinal Disease'))) || (((GetSelectedOption('u58')) == (PopulateVariables('Kidney Disease'))) || (((GetSelectedOption('u58')) == (PopulateVariables('Chronic Disease of Respiratory System'))) || (((GetSelectedOption('u58')) == (PopulateVariables('Blood Clots'))) || ((GetSelectedOption('u58')) == (PopulateVariables('Cancer')))))))) {

	SetPanelStateu51("pd1u51");

	SetPanelVisibilityu51("");

}
else
if ((GetSelectedOption('u58')) == (PopulateVariables('Other'))) {

	SetPanelStateu51("pd0u51");

	SetPanelVisibilityu51("");

}

}

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u307 = document.getElementById('u307');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u247 = document.getElementById('u247');

if (bIE) u247.attachEvent("onchange", Changeu247);
else u247.addEventListener("change", Changeu247, true);
function Changeu247(e)
{

if (true) {

rdo11onChangeDisConAgeL3(e);

}

}

var u195 = document.getElementById('u195');

var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u45')) == (true))) {

SetCheckState('u43', false);

SetCheckState('u45', true);

SetCheckState('u47', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u45'));

	SetPanelStateu23("pd2u23");

	MoveWidgetBy('u75',0,90);

	MoveWidgetBy('u140',0,90);

	MoveWidgetBy('u88',0,90);

	MoveWidgetBy('u192',0,90);

	MoveWidgetBy('u184',0,90);

	MoveWidgetBy('u334',0,90);

	MoveWidgetBy('u2',0,90);

	MoveWidgetBy('u171',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u45')) == (true))) {

SetCheckState('u43', false);

SetCheckState('u45', true);

SetCheckState('u47', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u45'));

	SetPanelStateu23("pd2u23");

	MoveWidgetBy('u2',0,0);

	MoveWidgetBy('u75',0,0);

	MoveWidgetBy('u192',0,0);

	MoveWidgetBy('u171',0,0);

	MoveWidgetBy('u184',0,0);

	MoveWidgetBy('u334',0,0);

	MoveWidgetBy('u88',0,0);

	MoveWidgetBy('u140',0,0);

}

}

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{

if ((GetCheckState('u142')) == (true)) {

rdo4onCheckEthinicityHL(e);

}

}

var u180 = document.getElementById('u180');

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{

if (true) {

rdo5onClickShowPI(e);

}

}

var u251 = document.getElementById('u251');

var u190 = document.getElementById('u190');

var u326 = document.getElementById('u326');

u326.style.cursor = 'pointer';
if (bIE) u326.attachEvent("onclick", Clicku326);
else u326.addEventListener("click", Clicku326, true);
function Clicku326(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u59 = document.getElementById('u59');

if (bIE) u59.attachEvent("onchange", Changeu59);
else u59.addEventListener("change", Changeu59, true);
function Changeu59(e)
{

if (true) {

rdo2onChangeDisConAge(e);

}

}

var u231 = document.getElementById('u231');

var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u12 = document.getElementById('u12');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u73 = document.getElementById('u73');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u193 = document.getElementById('u193');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');

var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{

if (true) {

rdo11onClickAddDisCon2(e);

}

}

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{

if ((GetCheckState('u90')) == (true)) {

rdo3onCheckRaceAIAN(e);

}

}

var u40 = document.getElementById('u40');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u179 = document.getElementById('u179');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u295 = document.getElementById('u295');

if (bIE) u295.attachEvent("onchange", Changeu295);
else u295.addEventListener("change", Changeu295, true);
function Changeu295(e)
{

if (true) {

rdo11onChangeDisCon1L1(e);

}

}

var u23 = document.getElementById('u23');

var u246 = document.getElementById('u246');

var u257 = document.getElementById('u257');

if (bIE) u257.attachEvent("onchange", Changeu257);
else u257.addEventListener("change", Changeu257, true);
function Changeu257(e)
{

if (true) {

rdo11onChangeDisCon1L2(e);

}

}

var u88 = document.getElementById('u88');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u228 = document.getElementById('u228');

var u54 = document.getElementById('u54');

var u265 = document.getElementById('u265');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u177 = document.getElementById('u177');

u177.style.cursor = 'pointer';
if (bIE) u177.attachEvent("onclick", Clicku177);
else u177.addEventListener("click", Clicku177, true);
function Clicku177(e)
{

if (true) {

rdo5onClickHidePI(e);

}

}

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');

var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'top';
var u248 = document.getElementById('u248');

u248.style.cursor = 'pointer';
if (bIE) u248.attachEvent("onclick", Clicku248);
else u248.addEventListener("click", Clicku248, true);
function Clicku248(e)
{

if (true) {

rdo11onClickAddDisCon3(e);

}

}

var u21 = document.getElementById('u21');

var u260 = document.getElementById('u260');

var u113 = document.getElementById('u113');

var u240 = document.getElementById('u240');

if (bIE) u240.attachEvent("onchange", Changeu240);
else u240.addEventListener("change", Changeu240, true);
function Changeu240(e)
{

if (true) {

rdo11onChangeDisCon1L3(e);

}

}

var u129 = document.getElementById('u129');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u283 = document.getElementById('u283');

var u287 = document.getElementById('u287');

u287.style.cursor = 'pointer';
if (bIE) u287.attachEvent("onclick", Clicku287);
else u287.addEventListener("click", Clicku287, true);
function Clicku287(e)
{

if (true) {

SetWidgetRichText('u285', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u287', PopulateVariables(''));

SetWidgetRichText('u286', PopulateVariables(''));

}

}
gv_vAlignTable['u287'] = 'top';
var u299 = document.getElementById('u299');

var u332 = document.getElementById('u332');

u332.style.cursor = 'pointer';
if (bIE) u332.attachEvent("onclick", Clicku332);
else u332.addEventListener("click", Clicku332, true);
function Clicku332(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u156 = document.getElementById('u156');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u334 = document.getElementById('u334');

var u291 = document.getElementById('u291');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u264 = document.getElementById('u264');

var u185 = document.getElementById('u185');

u185.style.cursor = 'pointer';
if (bIE) u185.attachEvent("onclick", Clicku185);
else u185.addEventListener("click", Clicku185, true);
function Clicku185(e)
{

if (true) {

rdo6onClickHideHI(e);

}

}

var u296 = document.getElementById('u296');

if (bIE) u296.attachEvent("onchange", Changeu296);
else u296.addEventListener("change", Changeu296, true);
function Changeu296(e)
{

if (true) {

rdo11onChangeDisConAgeL1(e);

}

}

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u131 = document.getElementById('u131');

var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if ((GetCheckState('u97')) == (true)) {

rdo3onCheckRaceAsian(e);

}

}

var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u63')) == (true))) {

SetCheckState('u61', false);

SetCheckState('u63', true);

SetCheckState('u65', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u63'));

	SetPanelStateu23("pd2u23");

	MoveWidgetBy('u75',0,90);

	MoveWidgetBy('u140',0,90);

	MoveWidgetBy('u88',0,90);

	MoveWidgetBy('u192',0,90);

	MoveWidgetBy('u184',0,90);

	MoveWidgetBy('u334',0,90);

	MoveWidgetBy('u2',0,90);

	MoveWidgetBy('u171',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u63')) == (true))) {

SetCheckState('u61', false);

SetCheckState('u63', true);

SetCheckState('u65', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u63'));

	SetPanelStateu23("pd2u23");

	MoveWidgetBy('u2',0,0);

	MoveWidgetBy('u75',0,0);

	MoveWidgetBy('u192',0,0);

	MoveWidgetBy('u171',0,0);

	MoveWidgetBy('u184',0,0);

	MoveWidgetBy('u334',0,0);

	MoveWidgetBy('u88',0,0);

	MoveWidgetBy('u140',0,0);

}

}

var u84 = document.getElementById('u84');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u314 = document.getElementById('u314');

var u182 = document.getElementById('u182');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u198 = document.getElementById('u198');

var u279 = document.getElementById('u279');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u144 = document.getElementById('u144');

u144.style.cursor = 'pointer';
if (bIE) u144.attachEvent("onclick", Clicku144);
else u144.addEventListener("click", Clicku144, true);
function Clicku144(e)
{

if ((GetCheckState('u144')) == (false)) {

rdo4onUncheckEthnicityHL(e);

}

}

var u233 = document.getElementById('u233');

var u322 = document.getElementById('u322');

var u172 = document.getElementById('u172');

u172.style.cursor = 'pointer';
if (bIE) u172.attachEvent("onclick", Clicku172);
else u172.addEventListener("click", Clicku172, true);
function Clicku172(e)
{

if (true) {

	SetPanelStateu171("pd1u171");

	SetPanelVisibilityu88("");

	SetPanelVisibilityu140("");

	MoveWidgetBy('u192',0,220);

	MoveWidgetBy('u184',0,220);

	MoveWidgetBy('u334',0,220);

	MoveWidgetBy('u2',0,220);

}

}

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u77 = document.getElementById('u77');

var u152 = document.getElementById('u152');

var u241 = document.getElementById('u241');

if (bIE) u241.attachEvent("onchange", Changeu241);
else u241.addEventListener("change", Changeu241, true);
function Changeu241(e)
{

if (true) {

rdo11onChangeDisCon2L3(e);

}

}

var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u61')) == (true))) {

SetCheckState('u61', true);

SetCheckState('u63', false);

SetCheckState('u65', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u61'));

	SetPanelStateu23("pd1u23");

	MoveWidgetBy('u75',0,90);

	MoveWidgetBy('u88',0,90);

	MoveWidgetBy('u140',0,90);

	MoveWidgetBy('u192',0,90);

	MoveWidgetBy('u334',0,90);

	MoveWidgetBy('u184',0,90);

	MoveWidgetBy('u2',0,90);

	MoveWidgetBy('u171',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u61')) == (true))) {

SetCheckState('u61', true);

SetCheckState('u63', false);

SetCheckState('u65', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u61'));

	SetPanelStateu23("pd1u23");

	MoveWidgetBy('u2',0,0);

	MoveWidgetBy('u75',0,0);

	MoveWidgetBy('u88',0,0);

	MoveWidgetBy('u140',0,0);

	MoveWidgetBy('u192',0,0);

	MoveWidgetBy('u184',0,0);

	MoveWidgetBy('u334',0,0);

	MoveWidgetBy('u171',0,0);

}

}

var u168 = document.getElementById('u168');

var u7 = document.getElementById('u7');

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u95 = document.getElementById('u95');

var u125 = document.getElementById('u125');

var u335 = document.getElementById('u335');

u335.style.cursor = 'pointer';
if (bIE) u335.attachEvent("onclick", Clicku335);
else u335.addEventListener("click", Clicku335, true);
function Clicku335(e)
{

if (true) {

rdo12onClickSaveInfo(e);

}

}

var u96 = document.getElementById('u96');

var u253 = document.getElementById('u253');

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u137 = document.getElementById('u137');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u302 = document.getElementById('u302');

var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u27')) == (true))) {

SetCheckState('u25', false);

SetCheckState('u27', true);

SetCheckState('u29', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u27'));

SetCheckState('u63', true);

	SetPanelStateu23("pd2u23");

	MoveWidgetBy('u75',0,90);

	MoveWidgetBy('u140',0,90);

	MoveWidgetBy('u88',0,90);

	MoveWidgetBy('u192',0,90);

	MoveWidgetBy('u184',0,90);

	MoveWidgetBy('u334',0,90);

	MoveWidgetBy('u2',0,90);

	MoveWidgetBy('u171',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u27')) == (true))) {

SetCheckState('u25', false);

SetCheckState('u27', true);

SetCheckState('u29', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u27'));

SetCheckState('u63', true);

	SetPanelStateu23("pd2u23");

	MoveWidgetBy('u2',0,90);

	MoveWidgetBy('u75',0,90);

	MoveWidgetBy('u192',0,90);

	MoveWidgetBy('u171',0,90);

	MoveWidgetBy('u184',0,90);

	MoveWidgetBy('u334',0,90);

	MoveWidgetBy('u88',0,90);

	MoveWidgetBy('u140',0,90);

}

}

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u243 = document.getElementById('u243');

var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u255 = document.getElementById('u255');

var u148 = document.getElementById('u148');

var u58 = document.getElementById('u58');

if (bIE) u58.attachEvent("onchange", Changeu58);
else u58.addEventListener("change", Changeu58, true);
function Changeu58(e)
{

if (true) {

rdo1onChangeCauseOfDeath(e);

}

}

var u267 = document.getElementById('u267');

var u140 = document.getElementById('u140');

var u315 = document.getElementById('u315');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u250 = document.getElementById('u250');

var u199 = document.getElementById('u199');

if (bIE) u199.attachEvent("onchange", Changeu199);
else u199.addEventListener("change", Changeu199, true);
function Changeu199(e)
{

if (true) {

rdo8onChangeDisCon1(e);

}

}

var u288 = document.getElementById('u288');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u234 = document.getElementById('u234');

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u103 = document.getElementById('u103');

var u339 = document.getElementById('u339');

var u274 = document.getElementById('u274');

if (bIE) u274.attachEvent("onchange", Changeu274);
else u274.addEventListener("change", Changeu274, true);
function Changeu274(e)
{

if (true) {

rdo11onChangeDisCon1New(e);

}

}

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u25')) == (true))) {

SetCheckState('u25', true);

SetCheckState('u27', false);

SetCheckState('u29', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u25'));

SetCheckState('u43', true);

	SetPanelStateu23("pd1u23");

	MoveWidgetBy('u75',0,90);

	MoveWidgetBy('u88',0,90);

	MoveWidgetBy('u140',0,90);

	MoveWidgetBy('u192',0,90);

	MoveWidgetBy('u334',0,90);

	MoveWidgetBy('u184',0,90);

	MoveWidgetBy('u2',0,90);

	MoveWidgetBy('u171',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u25')) == (true))) {

SetCheckState('u25', true);

SetCheckState('u27', false);

SetCheckState('u29', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u25'));

SetCheckState('u43', true);

	SetPanelStateu23("pd1u23");

	MoveWidgetBy('u2',0,90);

	MoveWidgetBy('u75',0,90);

	MoveWidgetBy('u88',0,90);

	MoveWidgetBy('u140',0,90);

	MoveWidgetBy('u192',0,90);

	MoveWidgetBy('u184',0,90);

	MoveWidgetBy('u334',0,90);

	MoveWidgetBy('u171',0,90);

}

}

var u337 = document.getElementById('u337');

u337.style.cursor = 'pointer';
if (bIE) u337.attachEvent("onclick", Clicku337);
else u337.addEventListener("click", Clicku337, true);
function Clicku337(e)
{

if (true) {

rdo12onClickCancelInfo(e);

}

}

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');

var u196 = document.getElementById('u196');

var u201 = document.getElementById('u201');

var u127 = document.getElementById('u127');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{

if (true) {

rdo0onClickCloseRel(e);

}

}

var u261 = document.getElementById('u261');

if (bIE) u261.attachEvent("onchange", Changeu261);
else u261.addEventListener("change", Changeu261, true);
function Changeu261(e)
{

if (true) {

rdo11onChangeDisConAgeL2(e);

}

}

var u187 = document.getElementById('u187');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');

var u281 = document.getElementById('u281');

var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');

u214.style.cursor = 'pointer';
if (bIE) u214.attachEvent("onclick", Clicku214);
else u214.addEventListener("click", Clicku214, true);
function Clicku214(e)
{

if (true) {

SetWidgetRichText('u212', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u214', PopulateVariables(''));

SetWidgetRichText('u213', PopulateVariables(''));

}

}
gv_vAlignTable['u214'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u316 = document.getElementById('u316');

var u36 = document.getElementById('u36');

var u293 = document.getElementById('u293');

var u304 = document.getElementById('u304');

var u171 = document.getElementById('u171');

var u222 = document.getElementById('u222');

var u311 = document.getElementById('u311');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u238 = document.getElementById('u238');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');

var u141 = document.getElementById('u141');

var u227 = document.getElementById('u227');

var u6 = document.getElementById('u6');

var u184 = document.getElementById('u184');

var u289 = document.getElementById('u289');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u146 = document.getElementById('u146');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u275 = document.getElementById('u275');

if (bIE) u275.attachEvent("onchange", Changeu275);
else u275.addEventListener("change", Changeu275, true);
function Changeu275(e)
{

if (true) {

rdo11onChangeDisConAgeNew(e);

}

}

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u34 = document.getElementById('u34');

var u154 = document.getElementById('u154');

var u236 = document.getElementById('u236');

var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if ((GetCheckState('u99')) == (false)) {

rdo3onUncheckRaceAsian(e);

}

}

var u202 = document.getElementById('u202');

if (bIE) u202.attachEvent("onchange", Changeu202);
else u202.addEventListener("change", Changeu202, true);
function Changeu202(e)
{

if (true) {

rdo9onChangeDisCon2(e);

}

}

var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');

var u297 = document.getElementById('u297');

u297.style.cursor = 'pointer';
if (bIE) u297.attachEvent("onclick", Clicku297);
else u297.addEventListener("click", Clicku297, true);
function Clicku297(e)
{

if (true) {

}

}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{

if (true) {

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u121 = document.getElementById('u121');

u121.style.cursor = 'pointer';
if (bIE) u121.attachEvent("onclick", Clicku121);
else u121.addEventListener("click", Clicku121, true);
function Clicku121(e)
{

if ((GetCheckState('u121')) == (false)) {

rdo3onUncheckRaceNHOPI(e);

}

}

var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'top';
var u167 = document.getElementById('u167');

u167.style.cursor = 'pointer';
if (bIE) u167.attachEvent("onclick", Clicku167);
else u167.addEventListener("click", Clicku167, true);
function Clicku167(e)
{

if (true) {

	NewWindow("help_Ashkenazi_Jew.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u167'] = 'top';
var u203 = document.getElementById('u203');

var u245 = document.getElementById('u245');

var u215 = document.getElementById('u215');

var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u188 = document.getElementById('u188');

u188.style.cursor = 'pointer';
if (bIE) u188.attachEvent("onclick", Clicku188);
else u188.addEventListener("click", Clicku188, true);
function Clicku188(e)
{

if (true) {

rdo6onClickShowHI(e);

}

}

var u32 = document.getElementById('u32');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u134 = document.getElementById('u134');

var u51 = document.getElementById('u51');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u328 = document.getElementById('u328');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'top';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');

var u101 = document.getElementById('u101');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u276 = document.getElementById('u276');

u276.style.cursor = 'pointer';
if (bIE) u276.attachEvent("onclick", Clicku276);
else u276.addEventListener("click", Clicku276, true);
function Clicku276(e)
{

if (true) {

rdo11onClickAddDisConNew(e);

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u43')) == (true))) {

SetCheckState('u43', true);

SetCheckState('u45', false);

SetCheckState('u47', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u43'));

	SetPanelStateu23("pd1u23");

	MoveWidgetBy('u75',0,90);

	MoveWidgetBy('u88',0,90);

	MoveWidgetBy('u140',0,90);

	MoveWidgetBy('u192',0,90);

	MoveWidgetBy('u334',0,90);

	MoveWidgetBy('u184',0,90);

	MoveWidgetBy('u2',0,90);

	MoveWidgetBy('u171',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u43')) == (true))) {

SetCheckState('u43', true);

SetCheckState('u45', false);

SetCheckState('u47', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u43'));

	SetPanelStateu23("pd1u23");

	MoveWidgetBy('u2',0,0);

	MoveWidgetBy('u75',0,0);

	MoveWidgetBy('u88',0,0);

	MoveWidgetBy('u140',0,0);

	MoveWidgetBy('u192',0,0);

	MoveWidgetBy('u184',0,0);

	MoveWidgetBy('u334',0,0);

	MoveWidgetBy('u171',0,0);

}

}

var u320 = document.getElementById('u320');

u320.style.cursor = 'pointer';
if (bIE) u320.attachEvent("onclick", Clicku320);
else u320.addEventListener("click", Clicku320, true);
function Clicku320(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');

u174.style.cursor = 'pointer';
if (bIE) u174.attachEvent("onclick", Clicku174);
else u174.addEventListener("click", Clicku174, true);
function Clicku174(e)
{

if (true) {

	SetPanelStateu171("pd0u171");

	SetPanelVisibilityu88("hidden");

	SetPanelVisibilityu140("hidden");

	MoveWidgetBy('u2',0,-220);

	MoveWidgetBy('u192',0,-220);

	MoveWidgetBy('u184',0,-220);

	MoveWidgetBy('u334',0,-220);

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u300 = document.getElementById('u300');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u136 = document.getElementById('u136');

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u10 = document.getElementById('u10');

if (bIE) u10.attachEvent("onchange", Changeu10);
else u10.addEventListener("change", Changeu10, true);
function Changeu10(e)
{

if (((GetSelectedOption('u10')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u10')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u10')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u10')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u10')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u10')) != (PopulateVariables('Brother')))))))) {

	SetPanelStateu8("pd1u8");

	MoveWidgetBy('u67',0,55);

	MoveWidgetBy('u75',0,55);

	MoveWidgetBy('u23',0,55);

	MoveWidgetBy('u88',0,55);

	MoveWidgetBy('u140',0,55);

	MoveWidgetBy('u192',0,55);

	MoveWidgetBy('u334',0,55);

	MoveWidgetBy('u184',0,55);

	MoveWidgetBy('u2',0,55);

	MoveWidgetBy('u171',0,55);

}

}

var u57 = document.getElementById('u57');

var u306 = document.getElementById('u306');

var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{

if ((GetCheckState('u92')) == (false)) {

rdo3onUncheckRaceAIAN(e);

}

}

var u5 = document.getElementById('u5');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u313 = document.getElementById('u313');

var u278 = document.getElementById('u278');

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u324 = document.getElementById('u324');

u324.style.cursor = 'pointer';
if (bIE) u324.attachEvent("onclick", Clicku324);
else u324.addEventListener("click", Clicku324, true);
function Clicku324(e)
{

if (true) {

rdo0onClickCloseRel(e);

}

}

var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u273 = document.getElementById('u273');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u86 = document.getElementById('u86');

var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{

if (((GetSelectedOption('u199')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u202')) == (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetTo('u195',10,82);

	MoveWidgetTo('u215',10,180);

	MoveWidgetTo('u205',10,205);

	MoveWidgetTo('u222',10,114);

	MoveWidgetTo('u228',10,82);

rdo7onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u199')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u202')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u202')) != (PopulateVariables('Other - Add new'))))) {

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetTo('u215',10,180);

	MoveWidgetTo('u205',10,205);

	MoveWidgetTo('u222',10,114);

	MoveWidgetTo('u228',10,82);

rdo7onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u199')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetTo('u215',10,180);

	MoveWidgetTo('u205',10,205);

	MoveWidgetTo('u222',10,114);

	MoveWidgetTo('u228',10,82);

rdo7onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u199')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u199')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

rdo7onClickDisConAdd(e);

}

}

var u115 = document.getElementById('u115');

var u69 = document.getElementById('u69');

var u216 = document.getElementById('u216');

var u309 = document.getElementById('u309');

var u258 = document.getElementById('u258');

if (bIE) u258.attachEvent("onchange", Changeu258);
else u258.addEventListener("change", Changeu258, true);
function Changeu258(e)
{

if (true) {

rdo11onChangeDisCon2L2(e);

}

}

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u123 = document.getElementById('u123');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u271 = document.getElementById('u271');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u133 = document.getElementById('u133');

var u19 = document.getElementById('u19');

if (bIE) u19.attachEvent("onchange", Changeu19);
else u19.addEventListener("change", Changeu19, true);
function Changeu19(e)
{

if (((GetSelectedOption('u19')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u19')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u19')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u19')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u19')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u19')) != (PopulateVariables('Brother')))))))) {

	SetPanelStateu8("pd1u8");

	MoveWidgetBy('u67',0,55);

	MoveWidgetBy('u75',0,55);

	MoveWidgetBy('u23',0,55);

	MoveWidgetBy('u88',0,55);

	MoveWidgetBy('u140',0,55);

	MoveWidgetBy('u192',0,55);

	MoveWidgetBy('u334',0,55);

	MoveWidgetBy('u184',0,55);

	MoveWidgetBy('u2',0,55);

	MoveWidgetBy('u171',0,55);

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'top';
var u225 = document.getElementById('u225');

u225.style.cursor = 'pointer';
if (bIE) u225.attachEvent("onclick", Clicku225);
else u225.addEventListener("click", Clicku225, true);
function Clicku225(e)
{

if (((GetSelectedOption('u199')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u202')) == (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u199', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u202', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u229', PopulateVariables(' '));

SetWidgetFormText('u196', PopulateVariables(''));

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetTo('u195',10,82);

	MoveWidgetTo('u215',10,180);

	MoveWidgetTo('u205',10,205);

	MoveWidgetTo('u222',10,114);

	MoveWidgetTo('u228',10,82);

rdo7onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u199')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u202')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u202')) != (PopulateVariables('Other - Add new'))))) {

SetSelectedOption('u199', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u202', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u229', PopulateVariables(' '));

SetWidgetFormText('u196', PopulateVariables(''));

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetTo('u215',10,180);

	MoveWidgetTo('u205',10,205);

	MoveWidgetTo('u222',10,114);

	MoveWidgetTo('u228',10,82);

rdo7onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u199')) == (PopulateVariables('Other - Add new'))) {

SetSelectedOption('u199', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u202', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u229', PopulateVariables(' '));

SetWidgetFormText('u196', PopulateVariables(''));

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

	MoveWidgetTo('u215',10,180);

	MoveWidgetTo('u205',10,205);

	MoveWidgetTo('u222',10,114);

	MoveWidgetTo('u228',10,82);

rdo7onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u199')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u199')) != (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u199', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u202', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u229', PopulateVariables(' '));

SetWidgetFormText('u196', PopulateVariables(''));

	SetPanelVisibilityu195("hidden");

	SetPanelVisibilityu201("hidden");

rdo7onClickDisConCancel(e);

}

}

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{

if (true) {

	SetPanelStateu32("pd1u32");

}

}

var u107 = document.getElementById('u107');

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u269 = document.getElementById('u269');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{

if ((GetCheckState('u119')) == (true)) {

rdo3onCheckRaceNHOPI(e);

}

}

var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u164 = document.getElementById('u164');

var u111 = document.getElementById('u111');

var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u192 = document.getElementById('u192');

var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

}

}

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u82 = document.getElementById('u82');

var u116 = document.getElementById('u116');

var u205 = document.getElementById('u205');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u259 = document.getElementById('u259');

var u272 = document.getElementById('u272');

var u318 = document.getElementById('u318');

u318.style.cursor = 'pointer';
if (bIE) u318.attachEvent("onclick", Clicku318);
else u318.addEventListener("click", Clicku318, true);
function Clicku318(e)
{

if (true) {

rdo0onClickCloseRel(e);

}

}

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u162 = document.getElementById('u162');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

}

}

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u229 = document.getElementById('u229');

if (bIE) u229.attachEvent("onchange", Changeu229);
else u229.addEventListener("change", Changeu229, true);
function Changeu229(e)
{

if (true) {

rdo10onChangeDisConAge(e);

}

}

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u14 = document.getElementById('u14');

var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
