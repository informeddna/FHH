
var PageName = 'My Family History_v2';
var PageId = 'p479d540cd67f4d4586312c37a1f4049a'
var PageUrl = 'My_Family_History_v2.html'
document.title = 'My Family History_v2';

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

eval(GetDynamicPanelScript('u722', 3));

eval(GetDynamicPanelScript('u640', 1));

eval(GetDynamicPanelScript('u54', 3));

eval(GetDynamicPanelScript('u1073', 2));

eval(GetDynamicPanelScript('u1072', 1));

eval(GetDynamicPanelScript('u1071', 1));

eval(GetDynamicPanelScript('u701', 1));

eval(GetDynamicPanelScript('u705', 1));

eval(GetDynamicPanelScript('u609', 1));

eval(GetDynamicPanelScript('u470', 2));

eval(GetDynamicPanelScript('u875', 2));

eval(GetDynamicPanelScript('u542', 1));

eval(GetDynamicPanelScript('u477', 2));

eval(GetDynamicPanelScript('u839', 1));

eval(GetDynamicPanelScript('u496', 1));

eval(GetDynamicPanelScript('u900', 1));

eval(GetDynamicPanelScript('u927', 1));

eval(GetDynamicPanelScript('u914', 1));

eval(GetDynamicPanelScript('u832', 1));

eval(GetDynamicPanelScript('u430', 1));

eval(GetDynamicPanelScript('u421', 1));

eval(GetDynamicPanelScript('u787', 1));

eval(GetDynamicPanelScript('u664', 1));

eval(GetDynamicPanelScript('u693', 1));

eval(GetDynamicPanelScript('u67', 4));

eval(GetDynamicPanelScript('u228', 4));

eval(GetDynamicPanelScript('u932', 1));

eval(GetDynamicPanelScript('u552', 2));

eval(GetDynamicPanelScript('u1229', 1));

eval(GetDynamicPanelScript('u766', 1));

eval(GetDynamicPanelScript('u987', 1));

eval(GetDynamicPanelScript('u581', 1));

eval(GetDynamicPanelScript('u1257', 1));

eval(GetDynamicPanelScript('u155', 4));

eval(GetDynamicPanelScript('u39', 3));

eval(GetDynamicPanelScript('u897', 1));

eval(GetDynamicPanelScript('u921', 1));

eval(GetDynamicPanelScript('u654', 1));

eval(GetDynamicPanelScript('u1198', 1));

eval(GetDynamicPanelScript('u904', 1));

eval(GetDynamicPanelScript('u1154', 2));

eval(GetDynamicPanelScript('u577', 1));

eval(GetDynamicPanelScript('u109', 4));

eval(GetDynamicPanelScript('u706', 1));

eval(GetDynamicPanelScript('u840', 2));

eval(GetDynamicPanelScript('u863', 1));

eval(GetDynamicPanelScript('u867', 1));

eval(GetDynamicPanelScript('u1132', 1));

eval(GetDynamicPanelScript('u1033', 1));

eval(GetDynamicPanelScript('u521', 1));

eval(GetDynamicPanelScript('u1329', 1));

eval(GetDynamicPanelScript('u429', 1));

eval(GetDynamicPanelScript('u591', 1));

eval(GetDynamicPanelScript('u1161', 2));

eval(GetDynamicPanelScript('u517', 1));

eval(GetDynamicPanelScript('u340', 8));

eval(GetDynamicPanelScript('u58', 3));

eval(GetDynamicPanelScript('u949', 1));

eval(GetDynamicPanelScript('u598', 1));

eval(GetDynamicPanelScript('u1045', 1));

eval(GetDynamicPanelScript('u1280', 1));

eval(GetDynamicPanelScript('u1293', 1));

eval(GetDynamicPanelScript('u750', 2));

eval(GetDynamicPanelScript('u1343', 1));

eval(GetDynamicPanelScript('u499', 2));

eval(GetDynamicPanelScript('u675', 1));

eval(GetDynamicPanelScript('u1353', 1));

eval(GetDynamicPanelScript('u1241', 2));

eval(GetDynamicPanelScript('u1005', 1));

eval(GetDynamicPanelScript('u894', 1));

eval(GetDynamicPanelScript('u207', 4));

eval(GetDynamicPanelScript('u1260', 1));

eval(GetDynamicPanelScript('u568', 1));

eval(GetDynamicPanelScript('u1055', 1));

eval(GetDynamicPanelScript('u46', 3));

eval(GetDynamicPanelScript('u1249', 2));

eval(GetDynamicPanelScript('u963', 1));

eval(GetDynamicPanelScript('u574', 1));

eval(GetDynamicPanelScript('u1067', 1));

eval(GetDynamicPanelScript('u707', 2));

eval(GetDynamicPanelScript('u469', 1));

eval(GetDynamicPanelScript('u1298', 1));

eval(GetDynamicPanelScript('u860', 1));

eval(GetDynamicPanelScript('u1380', 3));

eval(GetDynamicPanelScript('u604', 1));

eval(GetDynamicPanelScript('u522', 2));

eval(GetDynamicPanelScript('u788', 2));

eval(GetDynamicPanelScript('u514', 1));

eval(GetDynamicPanelScript('u418', 5));

eval(GetDynamicPanelScript('u186', 4));

eval(GetDynamicPanelScript('u1153', 1));

eval(GetDynamicPanelScript('u977', 1));

eval(GetDynamicPanelScript('u817', 2));

eval(GetDynamicPanelScript('u337', 1));

eval(GetDynamicPanelScript('u682', 1));

eval(GetDynamicPanelScript('u1258', 2));

eval(GetDynamicPanelScript('u88', 4));

eval(GetDynamicPanelScript('u1315', 1));

eval(GetDynamicPanelScript('u1236', 2));

eval(GetDynamicPanelScript('u1364', 1));

eval(GetDynamicPanelScript('u1233', 1));

eval(GetDynamicPanelScript('u1399', 1));

eval(GetDynamicPanelScript('u1014', 3));

eval(GetDynamicPanelScript('u1270', 1));

eval(GetDynamicPanelScript('u569', 2));

eval(GetDynamicPanelScript('u1088', 3));

eval(GetDynamicPanelScript('u549', 1));

eval(GetDynamicPanelScript('u571', 1));

eval(GetDynamicPanelScript('u1266', 1));

eval(GetDynamicPanelScript('u1263', 1));

eval(GetDynamicPanelScript('u626', 1));

eval(GetDynamicPanelScript('u1287', 1));

eval(GetDynamicPanelScript('u870', 2));

eval(GetDynamicPanelScript('u50', 3));

eval(GetDynamicPanelScript('u1226', 1));

eval(GetDynamicPanelScript('u545', 1));

eval(GetDynamicPanelScript('u1206', 2));

eval(GetDynamicPanelScript('u1205', 1));

eval(GetDynamicPanelScript('u62', 3));

eval(GetDynamicPanelScript('u1201', 1));

eval(GetDynamicPanelScript('u835', 1));

eval(GetDynamicPanelScript('u560', 2));

eval(GetDynamicPanelScript('u795', 2));

eval(GetDynamicPanelScript('u814', 1));

eval(GetDynamicPanelScript('u998', 1));

eval(GetDynamicPanelScript('u774', 1));

eval(GetDynamicPanelScript('u1097', 2));

eval(GetDynamicPanelScript('u1371', 1));

eval(GetDynamicPanelScript('u1183', 2));

eval(GetDynamicPanelScript('u1140', 1));

eval(GetDynamicPanelScript('u891', 1));

eval(GetDynamicPanelScript('u1180', 1));

eval(GetDynamicPanelScript('u1116', 2));

eval(GetDynamicPanelScript('u892', 2));

eval(GetDynamicPanelScript('u731', 2));

eval(GetDynamicPanelScript('u883', 2));

function rdo14onChangeDisCon1(e) {

if ((GetSelectedOption('u575')) == (PopulateVariables('Cancer'))) {

	SetPanelVisibilityu577("");

	MoveWidgetBy('u591',0,32);

	MoveWidgetBy('u581',0,32);

	MoveWidgetBy('u598',0,32);

	MoveWidgetBy('u604',0,32);

rdo13onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u575')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu571("");

	MoveWidgetBy('u591',0,32);

	MoveWidgetBy('u581',0,32);

	MoveWidgetBy('u598',0,32);

	MoveWidgetBy('u604',0,32);

rdo13onChangeDisCon1(e);

}
else
if (true) {

rdo13onChangeDisCon1(e);

}

}

function rdo15onChangeDisCon2(e) {

if ((GetSelectedOption('u578')) == (PopulateVariables('Other - Add new'))) {

	SetPanelStateu571("pd0u571");

	SetPanelVisibilityu571("");

	MoveWidgetBy('u591',0,32);

	MoveWidgetBy('u581',0,32);

	MoveWidgetBy('u571',0,32);

	MoveWidgetBy('u598',0,32);

	MoveWidgetBy('u604',0,32);

rdo13onChangeDisCon2(e);

}
else
if (true) {

rdo13onChangeDisCon2(e);

}

}

function rdo16onChangeDisConAge(e) {

if (true) {

rdo13onChangeDisConAge(e);

}

}

function rdo17onChangeDisCon1L1(e) {

if ((GetSelectedOption('u671')) == (PopulateVariables('Cancer'))) {

;

SetSelectedOption('u633', PopulateVariables('Cancer'));

	SetPanelVisibilityu626("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu640("hidden");

	SetPanelVisibilityu664("hidden");

	MoveWidgetBy('u654',0,35);

	MoveWidgetBy('u693',0,35);

	MoveWidgetBy('u682',0,35);

}
else
if ((GetSelectedOption('u671')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u650', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu640("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu626("hidden");

	SetPanelVisibilityu664("hidden");

	MoveWidgetBy('u654',0,35);

	MoveWidgetBy('u693',0,35);

	MoveWidgetBy('u682',0,35);

}

}

function rdo17onChangeDisConAgeL1(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u672'));

}

}

function rdo17onChangeDisCon1L2(e) {

if ((GetSelectedOption('u633')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u650', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu640("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu626("hidden");

	SetPanelVisibilityu664("hidden");

}

}

function rdo17onChangeDisCon2L2(e) {

if ((GetSelectedOption('u634')) == (PopulateVariables('Other Cancer'))) {

;

;

SetSelectedOption('u616', PopulateVariables('Cancer'));

SetSelectedOption('u617', PopulateVariables('Other Cancer'));

	SetPanelVisibilityu609("");

	SetPanelVisibilityu626("hidden");

	SetPanelVisibilityu640("hidden");

	SetPanelVisibilityu664("hidden");

	MoveWidgetBy('u654',0,33);

	MoveWidgetBy('u693',0,33);

	MoveWidgetBy('u682',0,33);

}
else
if ((GetSelectedOption('u634')) != (PopulateVariables('Other Cancer'))) {

;

;

	SetPanelVisibilityu654("");

}

}

function rdo17onChangeDisConAgeL2(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u637'));

}

}

function rdo17onClickAddDisCon2(e) {

if (true) {

SetWidgetRichText('u661', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u662', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u663', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u671', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u672', PopulateVariables(' '));

	SetPanelVisibilityu664("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu626("hidden");

	SetPanelVisibilityu640("hidden");

	MoveWidgetBy('u682',0,-35);

	MoveWidgetBy('u654',0,-35);

	MoveWidgetBy('u693',0,-35);

}

}

function rdo17onChangeDisCon1New(e) {

if ((GetSelectedOption('u650')) == (PopulateVariables('Cancer'))) {

;

SetSelectedOption('u633', PopulateVariables('Cancer'));

	SetPanelVisibilityu626("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu640("hidden");

	SetPanelVisibilityu664("hidden");

}
else
if ((GetSelectedOption('u650')) == (PopulateVariables('Select Disease or Condition'))) {

;

;

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

	SetPanelVisibilityu664("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu626("hidden");

	SetPanelVisibilityu640("hidden");

	MoveWidgetBy('u654',0,-35);

	MoveWidgetBy('u693',0,-35);

	MoveWidgetBy('u682',0,-35);

}

}

function rdo17onChangeDisConAgeNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u651'));

}

}

function rdo17onClickAddDisConNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u649'));

SetWidgetRichText('u661', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

SetWidgetRichText('u662', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u663', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u671', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u672', PopulateVariables(' '));

	SetPanelVisibilityu664("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu626("hidden");

	SetPanelVisibilityu640("hidden");

	MoveWidgetBy('u654',0,-35);

	MoveWidgetBy('u682',0,-35);

	MoveWidgetBy('u693',0,-35);

}

}

function rdo17onChangeDisCon1L3(e) {

if ((GetSelectedOption('u616')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u650', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu640("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu626("hidden");

	SetPanelVisibilityu664("hidden");

	MoveWidgetBy('u654',0,-33);

	MoveWidgetBy('u693',0,-33);

	MoveWidgetBy('u682',0,-33);

}
else
if ((GetSelectedOption('u616')) == (PopulateVariables('Select Disease or Condition'))) {

;

;

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

SetGlobalVariableValue('$varDisConAgeFather', PopulateVariables(''));

	SetPanelVisibilityu654("");

	SetPanelVisibilityu664("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu626("hidden");

	SetPanelVisibilityu640("hidden");

	MoveWidgetBy('u654',0,-68);

	MoveWidgetBy('u693',0,-68);

	MoveWidgetBy('u682',0,-68);

}

}

function rdo17onChangeDisCon2L3(e) {

if ((GetSelectedOption('u617')) != (PopulateVariables('Other Cancer'))) {

;

;

SetSelectedOption('u633', PopulateVariables('Cancer'));

SetSelectedOption('u634', GetSelectedOption('u617'));

	SetPanelVisibilityu626("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu654("hidden");

	SetPanelVisibilityu664("hidden");

	MoveWidgetBy('u654',0,-33);

	MoveWidgetBy('u693',0,-33);

	MoveWidgetBy('u682',0,-33);

}

}

function rdo17onChangeDisConAgeL3(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u623'));

}

}

function rdo17onClickAddDisCon3(e) {

if (true) {

;

SetWidgetRichText('u661', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]: [[varDisCon3]]</span>'));

SetWidgetRichText('u662', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u663', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u671', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u672', PopulateVariables(' '));

	SetPanelVisibilityu664("");

	SetPanelVisibilityu609("hidden");

	SetPanelVisibilityu626("hidden");

	SetPanelVisibilityu640("hidden");

	MoveWidgetBy('u654',0,-68);

	MoveWidgetBy('u682',0,-68);

	MoveWidgetBy('u693',0,-68);

}

}

function rdo1onNavClickSaveHistory(e) {

}

function rdo11onClickHidePI(e) {

if (true) {

	SetPanelStateu552("pd1u552");

	SetPanelStateu470("pd0u470");

	SetPanelStateu477("pd0u477");

	SetPanelStateu499("pd0u499");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u421',0,-475);

}

}

function rdo11onClickShowPI(e) {

if (true) {

	SetPanelStateu552("pd0u552");

	SetPanelVisibilityu429("");

	MoveWidgetBy('u568',0,475);

	MoveWidgetBy('u560',0,475);

	MoveWidgetBy('u693',0,475);

	MoveWidgetBy('u421',0,475);

}

}

function rdo12onClickHideHI(e) {

if (true) {

	SetPanelStateu560("pd1u560");

	SetPanelVisibilityu568("hidden");

	MoveWidgetBy('u693',0,-285);

	MoveWidgetBy('u421',0,-285);

}

}

function rdo12onClickShowHI(e) {

if (true) {

	SetPanelStateu560("pd0u560");

	SetPanelVisibilityu568("");

	MoveWidgetBy('u693',0,285);

	MoveWidgetBy('u421',0,285);

}

}

function rdo13onChangeDisCon1(e) {

if ((GetSelectedOption('u575')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Me', GetSelectedOption('u575'));

	MoveWidgetBy('u421',0,32);

	MoveWidgetBy('u693',0,32);

rdo8onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u575')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u572'));

	MoveWidgetBy('u421',0,32);

	MoveWidgetBy('u693',0,32);

rdo8onChangeDisCon1(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Me', GetSelectedOption('u575'));

rdo8onChangeDisCon1(e);

}

}

function rdo13onChangeDisCon2(e) {

if ((GetSelectedOption('u578')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u572'));

	MoveWidgetBy('u421',0,32);

	MoveWidgetBy('u693',0,32);

rdo8onChangeDisCon2(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon2Me', GetSelectedOption('u578'));

rdo8onChangeDisCon2(e);

}

}

function rdo13onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeMe', GetSelectedOption('u605'));

rdo8onChangeDisConAge(e);

}

}

function rdo13onClickDisConSearch(e) {

}

function rdo13onCheckSearchResult(e) {

}

function rdo13onClickDisConAdd(e) {

if (((GetSelectedOption('u575')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u575')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u588', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Me]]</span>'));

SetWidgetRichText('u589', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u590', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

	MoveWidgetBy('u421',0,0);

	MoveWidgetBy('u693',0,0);

rdo8onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u575')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u572'));

SetWidgetRichText('u588', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewMe]]</span>'));

SetWidgetRichText('u589', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u590', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

	MoveWidgetBy('u421',0,-32);

	MoveWidgetBy('u693',0,-32);

rdo8onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u578')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u578')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u588', PopulateVariables('<span style=" color:#000000; font-size:13px;"> [[varDisCon1Me]]: [[varDisCon2Me]]</span>'));

SetWidgetRichText('u589', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u590', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

	MoveWidgetBy('u421',0,-32);

	MoveWidgetBy('u693',0,-32);

rdo8onClickDisConAdd(e);

}

if ((GetSelectedOption('u578')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u572'));

SetWidgetRichText('u588', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Me]]: [[varDisConNewMe]]</span>'));

SetWidgetRichText('u589', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u590', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	MoveWidgetBy('u421',0,-64);

	MoveWidgetBy('u693',0,-64);

rdo8onClickDisConAdd(e);

}

}

function rdo13onClickDisConCancel(e) {

if (((GetSelectedOption('u575')) != (PopulateVariables('Cancer'))) || ((GetSelectedOption('u575')) != (PopulateVariables('Other - Add new')))) {

	MoveWidgetBy('u421',0,0);

	MoveWidgetBy('u693',0,0);

rdo8onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u575')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u421',0,-32);

	MoveWidgetBy('u693',0,-32);

rdo8onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u578')) != (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u421',0,-32);

	MoveWidgetBy('u693',0,-32);

rdo8onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u578')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u421',0,-64);

	MoveWidgetBy('u693',0,-64);

rdo8onClickDisConCancel(e);

}

}

function rdo18onClickSaveInfo(e) {

if (true) {

rdo8onClickSaveMe(e);

}

}

function rdo18onClickCancelInfo(e) {

if (true) {

rdo8onClickCancelMe(e);

}

}

function rdo19onClickSaveRel(e) {

if (((GetCheckState('u724')) == (true)) || (((GetCheckState('u742')) == (true)) || ((GetCheckState('u760')) == (true)))) {

SetGlobalVariableValue('$varNameFather', GetWidgetFormText('u720'));

SetWidgetRichText('u103', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (FATHER)</b></span>'));

SetWidgetRichText('u108', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (FATHER)</b></span>'));

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetWidgetRichText('u222', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (FATHER)</b></span>'));

SetWidgetRichText('u227', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (FATHER)</b></span>'));

	SetPanelStateu88("pd2u88");

	SetPanelStateu62("pd1u62");

	SetPanelStateu207("pd2u207");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}
else
if (((GetCheckState('u726')) == (true)) || (((GetCheckState('u744')) == (true)) || ((GetCheckState('u762')) == (true)))) {

SetGlobalVariableValue('$varNameFather', GetWidgetFormText('u720'));

SetWidgetRichText('u103', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (FATHER)</b></span>'));

SetWidgetRichText('u108', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (FATHER)</b></span>'));

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetWidgetRichText('u222', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (FATHER)</b></span>'));

SetWidgetRichText('u227', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (FATHER)</b></span>'));

	SetPanelStateu88("pd3u88");

	SetPanelStateu62("pd1u62");

	SetPanelStateu207("pd3u207");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

function rdo19onClickCancelRel(e) {

if (true) {

	SetPanelStateu62("pd1u62");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

function rdo19onClickCloseRel(e) {

if (true) {

	SetPanelStateu62("pd1u62");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

function rdo19onClickDisConAdd(e) {

if (((GetSelectedOption('u898')) != (PopulateVariables('Select Disease or Condition'))) && (((GetSelectedOption('u898')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u898')) != (PopulateVariables('Other - Add new'))))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u898'));

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u928'));

SetWidgetRichText('u906', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]</span>'));

SetWidgetRichText('u908', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u910', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

	MoveWidgetBy('u701',0,0);

	MoveWidgetBy('u1033',0,0);

}
else
if ((GetSelectedOption('u898')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u895'));

SetWidgetRichText('u908', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u910', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetWidgetRichText('u911', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewFather]]</span>'));

	MoveWidgetBy('u701',0,-32);

	MoveWidgetBy('u1033',0,-32);

}
else
if (((GetSelectedOption('u901')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u901')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u906', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u908', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u910', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

	MoveWidgetBy('u701',0,-32);

	MoveWidgetBy('u1033',0,-32);

}

if ((GetSelectedOption('u901')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u895'));

SetWidgetRichText('u908', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u910', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetWidgetRichText('u911', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

	MoveWidgetBy('u701',0,-64);

	MoveWidgetBy('u1033',0,-64);

}

}

function rdo19onClickDisConCancel(e) {

if (((GetSelectedOption('u898')) == (PopulateVariables('Cancer'))) || ((GetSelectedOption('u898')) == (PopulateVariables('Other - Add new')))) {

	MoveWidgetBy('u1033',0,-32);

	MoveWidgetBy('u701',0,-32);

}
else
if ((GetSelectedOption('u901')) != (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u1033',0,-32);

	MoveWidgetBy('u701',0,-32);

}
else
if ((GetSelectedOption('u901')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u1033',0,-64);

	MoveWidgetBy('u701',0,-64);

}

}

function rdo19onChangeDisCon1(e) {

if ((GetSelectedOption('u898')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u898'));

	MoveWidgetBy('u1033',0,32);

	MoveWidgetBy('u701',0,32);

}
else
if ((GetSelectedOption('u898')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u895'));

	MoveWidgetBy('u1033',0,32);

	MoveWidgetBy('u701',0,32);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Me', GetSelectedOption('u898'));

}

}

function rdo19onChangeDisCon2(e) {

if ((GetSelectedOption('u901')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u895'));

	MoveWidgetBy('u1033',0,32);

	MoveWidgetTo('u701',0,32);

}
else
if (true) {

;

}

}

function rdo19onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u928'));

}

}

function rdo25onClickHideHI(e) {

if (true) {

	SetPanelStateu883("pd1u883");

	SetPanelVisibilityu891("hidden");

	MoveWidgetBy('u1033',0,-285);

	MoveWidgetBy('u701',0,-285);

}

}

function rdo25onClickShowHI(e) {

if (true) {

	SetPanelStateu883("pd0u883");

	SetPanelVisibilityu891("");

	MoveWidgetBy('u1033',0,285);

	MoveWidgetBy('u701',0,285);

}

}

function rdo20onChangeCauseOfDeath(e) {

if (((GetSelectedOption('u757')) == (PopulateVariables('Diabetes'))) || (((GetSelectedOption('u757')) == (PopulateVariables('Gastrointestinal Disease'))) || (((GetSelectedOption('u757')) == (PopulateVariables('Kidney Disease'))) || (((GetSelectedOption('u757')) == (PopulateVariables('Chronic Disease of Respiratory System'))) || (((GetSelectedOption('u757')) == (PopulateVariables('Blood Clots'))) || ((GetSelectedOption('u757')) == (PopulateVariables('Cancer')))))))) {

	SetPanelStateu750("pd1u750");

	SetPanelVisibilityu750("");

}
else
if ((GetSelectedOption('u757')) == (PopulateVariables('Other'))) {

	SetPanelStateu750("pd0u750");

	SetPanelVisibilityu750("");

}

}

function rdo44onClickSaveInfo(e) {

if (true) {

rdo32onClickSaveRel(e);

}

}

function rdo44onClickCancelInfo(e) {

if (true) {

rdo32onClickCancelRel(e);

}

}

function rdo8onClickSaveMe(e) {

if (((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables(''))) || ((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables('Other')))) {

SetGlobalVariableValue('$varNameMe', GetWidgetFormText('u433'));

SetWidgetRichText('u121', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:12px;"><b>[[varNameMe]] (ME)</b></span></div>'));

SetWidgetRichText('u130', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameMe]] (ME)</b></span>'));

SetWidgetRichText('u139', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameMe]] (ME)</b></span>'));

SetWidgetRichText('u426', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b>&nbsp; [[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:15px;">ME)</b></span>'));

SetWidgetRichText('u593', PopulateVariables('<div style="text-align:center"><span style=" color:#FFFFFF; font-size:12px;"><b>[[varNameMe]]\'s Diseases and Conditions</b></span></div>'));

SetWidgetRichText('u240', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (ME)</b></span></div>'));

SetWidgetRichText('u249', PopulateVariables('<span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (ME)</b></span>'));

SetWidgetRichText('u258', PopulateVariables('<span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (ME)</b></span>'));

	SetPanelStateu67("pd1u67");

	SetPanelStateu88("pd1u88");

	SetPanelStateu109("pd1u109");

	SetPanelStateu39("pd1u39");

	SetPanelStateu228("pd1u228");

	SetPanelStateu62("pd1u62");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}
else
if ((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables('Male'))) {

SetGlobalVariableValue('$varNameMe', GetWidgetFormText('u433'));

SetWidgetRichText('u121', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:12px;"><b>[[varNameMe]] (ME)</b></span></div>'));

SetWidgetRichText('u130', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameMe]] (ME)</b></span>'));

SetWidgetRichText('u139', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameMe]] (ME)</b></span>'));

SetWidgetRichText('u426', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b>&nbsp; [[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:15px;">ME)</b></span>'));

SetWidgetRichText('u593', PopulateVariables('<div style="text-align:center"><span style=" color:#FFFFFF; font-size:12px;"><b>[[varNameMe]]\'s Diseases and Conditions</b></span></div>'));

SetWidgetRichText('u240', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (ME)</b></span></div>'));

SetWidgetRichText('u249', PopulateVariables('<span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (ME)</b></span>'));

SetWidgetRichText('u258', PopulateVariables('<span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (ME)</b></span>'));

	SetPanelStateu67("pd1u67");

	SetPanelStateu88("pd1u88");

	SetPanelStateu109("pd3u109");

	SetPanelStateu39("pd1u39");

	SetPanelStateu228("pd3u228");

	SetPanelStateu62("pd1u62");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}
else
if ((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables('Female'))) {

SetGlobalVariableValue('$varNameMe', GetWidgetFormText('u433'));

SetWidgetRichText('u121', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:12px;"><b>[[varNameMe]] (ME)</b></span></div>'));

SetWidgetRichText('u130', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameMe]] (ME)</b></span>'));

SetWidgetRichText('u139', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameMe]] (ME)</b></span>'));

SetWidgetRichText('u426', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b>&nbsp; [[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:15px;">ME)</b></span>'));

SetWidgetRichText('u593', PopulateVariables('<div style="text-align:center"><span style=" color:#FFFFFF; font-size:12px;"><b>[[varNameMe]]\'s Diseases and Conditions</b></span></div>'));

SetWidgetRichText('u240', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (ME)</b></span></div>'));

SetWidgetRichText('u249', PopulateVariables('<span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (ME)</b></span>'));

SetWidgetRichText('u258', PopulateVariables('<span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (ME)</b></span>'));

	SetPanelStateu67("pd1u67");

	SetPanelStateu88("pd1u88");

	SetPanelStateu109("pd2u109");

	SetPanelStateu39("pd1u39");

	SetPanelStateu228("pd2u228");

	SetPanelStateu62("pd1u62");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

function rdo8onClickCancelMe(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

function rdo8onClickCloseMe(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

function rdo8onClickHelpMe(e) {

}

function rdo8onChangeDisCon1(e) {

}

function rdo8onChangeDisCon2(e) {

}

function rdo8onChangeDisConAge(e) {

}

function rdo8onClickDisConAdd(e) {

}

function rdo8onClickDisConCancel(e) {

}

function rdo40onChangeDisCon1(e) {

if ((GetSelectedOption('u1264')) == (PopulateVariables('Cancer'))) {

	SetPanelVisibilityu1266("");

	MoveWidgetBy('u1280',0,32);

	MoveWidgetBy('u1270',0,32);

	MoveWidgetBy('u1287',0,32);

	MoveWidgetBy('u1293',0,32);

rdo39onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u1264')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu1260("");

	MoveWidgetBy('u1280',0,32);

	MoveWidgetBy('u1270',0,32);

	MoveWidgetBy('u1287',0,32);

	MoveWidgetBy('u1293',0,32);

rdo39onChangeDisCon1(e);

}
else
if (true) {

rdo39onChangeDisCon1(e);

}

}

function rdo41onChangeDisCon2(e) {

if ((GetSelectedOption('u1267')) == (PopulateVariables('Other - Add new'))) {

	SetPanelStateu1260("pd0u1260");

	SetPanelVisibilityu1260("");

	MoveWidgetBy('u1280',0,32);

	MoveWidgetBy('u1270',0,32);

	MoveWidgetBy('u1260',0,32);

	MoveWidgetBy('u1287',0,32);

	MoveWidgetBy('u1293',0,32);

rdo39onChangeDisCon2(e);

}
else
if (true) {

rdo39onChangeDisCon2(e);

}

}

function rdo42onChangeDisConAge(e) {

if (true) {

rdo39onChangeDisConAge(e);

}

}

function rdo37onClickHidePI(e) {

if (true) {

	SetPanelStateu1241("pd1u1241");

	SetPanelVisibilityu1071("hidden");

	MoveWidgetBy('u1249',0,-255);

	MoveWidgetBy('u1399',0,-255);

	MoveWidgetBy('u1257',0,-255);

	MoveWidgetBy('u1067',0,-255);

}

}

function rdo37onClickShowPI(e) {

if (true) {

	SetPanelStateu1241("pd0u1241");

	SetPanelVisibilityu1071("");

	MoveWidgetBy('u1257',0,475);

	MoveWidgetBy('u1249',0,475);

	MoveWidgetBy('u1399',0,475);

}

}

function rdo31onClickSaveInfo(e) {

if (true) {

rdo19onClickSaveRel(e);

}

}

function rdo31onClickCancelInfo(e) {

if (true) {

rdo19onClickCancelRel(e);

}

}

function rdo32onClickSaveRel(e) {

if (((GetCheckState('u1090')) == (true)) || ((GetCheckState('u1108')) == (true))) {

SetGlobalVariableValue('$varNameRel', GetWidgetFormText('u1086'));

SetWidgetRichText('u172', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameRel]] (BROTHER)</b></span>'));

SetWidgetRichText('u1382', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameRel]] ([[varRelationship]])</b></span>'));

SetWidgetRichText('u1394', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameRel]] ([[varRelationship]])</b></span>'));

	SetPanelStateu62("pd2u62");

	SetPanelStateu155("pd2u155");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}
else
if (((GetCheckState('u1092')) == (true)) || ((GetCheckState('u1128')) == (true))) {

SetGlobalVariableValue('$varNameRel', GetWidgetFormText('u1086'));

SetWidgetRichText('u179', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameRel]] (BROTHER)</b></span>'));

SetWidgetRichText('u1382', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameRel]] ([[varRelationship]])</b></span>'));

SetWidgetRichText('u1394', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameRel]] ([[varRelationship]])</b></span>'));

	SetPanelStateu62("pd2u62");

	SetPanelStateu155("pd3u155");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}
else
if (true) {

SetGlobalVariableValue('$varNameRel', GetWidgetFormText('u1086'));

SetWidgetRichText('u165', PopulateVariables('<span style=" color:#000000; font-size:12px;"><b>[[varNameRel]] ([[varRelationship]])</b></span>'));

SetWidgetRichText('u1382', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameRel]] ([[varRelationship]])</b></span>'));

SetWidgetRichText('u1394', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameRel]] ([[varRelationship]])</b></span>'));

	SetPanelStateu62("pd2u62");

	SetPanelStateu155("pd1u155");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

function rdo32onClickCancelRel(e) {

if (true) {

	SetPanelStateu62("pd1u62");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

function rdo32onClickCloseRel(e) {

if (true) {

	SetPanelStateu62("pd1u62");

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

function rdo32onClickDisConAdd(e) {

}

function rdo32onClickDisConCancel(e) {

}

function rdo32onChangeDisCon1(e) {

}

function rdo32onChangeDisCon2(e) {

}

function rdo32onChangeDisConAge(e) {

}

function rdo33onChangeCauseOfDeath(e) {

if (((GetSelectedOption('u1123')) == (PopulateVariables('Diabetes'))) || (((GetSelectedOption('u1123')) == (PopulateVariables('Gastrointestinal Disease'))) || (((GetSelectedOption('u1123')) == (PopulateVariables('Kidney Disease'))) || (((GetSelectedOption('u1123')) == (PopulateVariables('Chronic Disease of Respiratory System'))) || (((GetSelectedOption('u1123')) == (PopulateVariables('Blood Clots'))) || ((GetSelectedOption('u1123')) == (PopulateVariables('Cancer')))))))) {

	SetPanelStateu1116("pd1u1116");

	SetPanelVisibilityu1116("");

}
else
if ((GetSelectedOption('u1123')) == (PopulateVariables('Other'))) {

	SetPanelStateu1116("pd0u1116");

	SetPanelVisibilityu1116("");

}

}

function rdo0onNavClickHome(e) {

}

function rdo0onNavClickCreateHistory(e) {

}

function rdo0onNavClickOpenHistory(e) {

}

function rdo34onChangeDisConAge(e) {

}

function rdo35onCheckRaceAIAN(e) {

}

function rdo35onUncheckRaceAIAN(e) {

}

function rdo35onCheckRaceAsian(e) {

if ((GetCheckState('u1162')) == (true)) {

SetCheckState('u1162', true);

SetCheckState('u1164', true);

	SetPanelStateu1161("pd1u1161");

	MoveWidgetBy('u1180',0,65);

	MoveWidgetBy('u1183',0,65);

	MoveWidgetBy('u1198',0,65);

	MoveWidgetBy('u1201',0,65);

	MoveWidgetBy('u1205',0,65);

	MoveWidgetBy('u1249',0,65);

	MoveWidgetBy('u1257',0,65);

	MoveWidgetBy('u1399',0,65);

	MoveWidgetBy('u1067',0,65);

}

}

function rdo35onUncheckRaceAsian(e) {

if ((GetCheckState('u1164')) == (false)) {

SetCheckState('u1164', false);

SetCheckState('u1162', false);

	SetPanelStateu1161("pd0u1161");

	MoveWidgetBy('u1180',0,-65);

	MoveWidgetBy('u1183',0,-65);

	MoveWidgetBy('u1198',0,-65);

	MoveWidgetBy('u1201',0,-65);

	MoveWidgetBy('u1205',0,-65);

	MoveWidgetBy('u1249',0,-65);

	MoveWidgetBy('u1257',0,-65);

	MoveWidgetBy('u1399',0,-65);

	MoveWidgetBy('u1067',0,-65);

}

}

function rdo35onCheckRaceNHOPI(e) {

if ((GetCheckState('u1184')) == (true)) {

SetCheckState('u1184', true);

SetCheckState('u1186', true);

	SetPanelStateu1183("pd1u1183");

	MoveWidgetBy('u1198',0,45);

	MoveWidgetBy('u1201',0,45);

	MoveWidgetBy('u1205',0,45);

	MoveWidgetBy('u1249',0,45);

	MoveWidgetBy('u1257',0,45);

	MoveWidgetBy('u1399',0,45);

	MoveWidgetBy('u1067',0,45);

}

}

function rdo35onUncheckRaceNHOPI(e) {

if ((GetCheckState('u1186')) == (false)) {

SetCheckState('u1186', false);

SetCheckState('u1184', false);

	SetPanelStateu1183("pd0u1183");

	MoveWidgetBy('u1198',0,-45);

	MoveWidgetBy('u1201',0,-45);

	MoveWidgetBy('u1205',0,-45);

	MoveWidgetBy('u1249',0,-45);

	MoveWidgetBy('u1257',0,-45);

	MoveWidgetBy('u1399',0,-45);

	MoveWidgetBy('u1067',0,-45);

}

}

function rdo36onUncheckEthnicityHL(e) {

if ((GetCheckState('u1209')) == (false)) {

SetCheckState('u1209', false);

SetCheckState('u1207', false);

	SetPanelStateu1206("pd0u1206");

	MoveWidgetBy('u1233',0,-65);

	MoveWidgetBy('u1226',0,-65);

	MoveWidgetBy('u1229',0,-65);

	MoveWidgetBy('u1249',0,-65);

	MoveWidgetBy('u1257',0,-65);

	MoveWidgetBy('u1399',0,-65);

	MoveWidgetBy('u1067',0,-65);

}

}

function rdo36onCheckEthinicityHL(e) {

if ((GetCheckState('u1207')) == (true)) {

SetCheckState('u1207', true);

SetCheckState('u1209', true);

	SetPanelStateu1206("pd1u1206");

	MoveWidgetBy('u1233',0,65);

	MoveWidgetBy('u1249',0,65);

	MoveWidgetBy('u1226',0,65);

	MoveWidgetBy('u1229',0,65);

	MoveWidgetBy('u1257',0,65);

	MoveWidgetBy('u1399',0,65);

	MoveWidgetBy('u1067',0,65);

}

}

function rdo24onClickHidePI(e) {

if (true) {

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u883',0,-255);

	MoveWidgetBy('u1033',0,-255);

	MoveWidgetBy('u891',0,-255);

	MoveWidgetBy('u701',0,-255);

}

}

function rdo24onClickShowPI(e) {

if (true) {

	SetPanelStateu875("pd0u875");

	SetPanelVisibilityu705("");

	MoveWidgetBy('u891',0,475);

	MoveWidgetBy('u883',0,475);

	MoveWidgetBy('u1033',0,475);

}

}

function rdo30onChangeDisCon1L1(e) {

if ((GetSelectedOption('u994')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u994'));

SetSelectedOption('u956', PopulateVariables('Cancer'));

	SetPanelVisibilityu949("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu963("hidden");

	SetPanelVisibilityu987("hidden");

	MoveWidgetBy('u977',0,35);

	MoveWidgetBy('u1033',0,35);

	MoveWidgetBy('u1005',0,35);

}
else
if ((GetSelectedOption('u994')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u994'));

SetSelectedOption('u973', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu963("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu949("hidden");

	SetPanelVisibilityu987("hidden");

	MoveWidgetBy('u977',0,35);

	MoveWidgetBy('u1033',0,35);

	MoveWidgetBy('u1005',0,35);

}

}

function rdo30onChangeDisConAgeL1(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u995'));

}

}

function rdo30onChangeDisCon1L2(e) {

if ((GetSelectedOption('u956')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u956'));

SetSelectedOption('u973', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu963("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu949("hidden");

	SetPanelVisibilityu987("hidden");

}

}

function rdo30onChangeDisCon2L2(e) {

if ((GetSelectedOption('u957')) == (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u956'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u957'));

SetSelectedOption('u939', PopulateVariables('Cancer'));

SetSelectedOption('u940', PopulateVariables('Other Cancer'));

	SetPanelVisibilityu932("");

	SetPanelVisibilityu949("hidden");

	SetPanelVisibilityu963("hidden");

	SetPanelVisibilityu987("hidden");

	MoveWidgetBy('u977',0,33);

	MoveWidgetBy('u1033',0,33);

	MoveWidgetBy('u1005',0,33);

}
else
if ((GetSelectedOption('u957')) != (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u956'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u957'));

	SetPanelVisibilityu977("");

}

}

function rdo30onChangeDisConAgeL2(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u960'));

}

}

function rdo30onClickAddDisCon2(e) {

if (true) {

SetWidgetRichText('u984', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u985', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u986', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u994', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u995', PopulateVariables(' '));

	SetPanelVisibilityu987("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu949("hidden");

	SetPanelVisibilityu963("hidden");

	MoveWidgetBy('u1005',0,-35);

	MoveWidgetBy('u977',0,-35);

	MoveWidgetBy('u1033',0,-35);

}

}

function rdo30onChangeDisCon1New(e) {

if ((GetSelectedOption('u973')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u973'));

SetSelectedOption('u956', PopulateVariables('Cancer'));

	SetPanelVisibilityu949("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu963("hidden");

	SetPanelVisibilityu987("hidden");

}
else
if ((GetSelectedOption('u973')) == (PopulateVariables('Select Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', PopulateVariables(''));

SetGlobalVariableValue('$varDisCon2Father', PopulateVariables(''));

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

	SetPanelVisibilityu987("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu949("hidden");

	SetPanelVisibilityu963("hidden");

	MoveWidgetBy('u977',0,-35);

	MoveWidgetBy('u1033',0,-35);

	MoveWidgetBy('u1005',0,-35);

}

}

function rdo30onChangeDisConAgeNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u974'));

}

}

function rdo30onClickAddDisConNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u972'));

SetWidgetRichText('u984', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

SetWidgetRichText('u985', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u986', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u994', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u995', PopulateVariables(' '));

	SetPanelVisibilityu987("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu949("hidden");

	SetPanelVisibilityu963("hidden");

	MoveWidgetBy('u977',0,-35);

	MoveWidgetBy('u1005',0,-35);

	MoveWidgetBy('u1033',0,-35);

}

}

function rdo30onChangeDisCon1L3(e) {

if ((GetSelectedOption('u939')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u939'));

SetSelectedOption('u973', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu963("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu949("hidden");

	SetPanelVisibilityu987("hidden");

	MoveWidgetBy('u977',0,-33);

	MoveWidgetBy('u1033',0,-33);

	MoveWidgetBy('u1005',0,-33);

}
else
if ((GetSelectedOption('u939')) == (PopulateVariables('Select Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', PopulateVariables(''));

SetGlobalVariableValue('$varDisCon2Father', PopulateVariables(''));

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

SetGlobalVariableValue('$varDisConAgeFather', PopulateVariables(''));

	SetPanelVisibilityu977("");

	SetPanelVisibilityu987("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu949("hidden");

	SetPanelVisibilityu963("hidden");

	MoveWidgetBy('u977',0,-68);

	MoveWidgetBy('u1033',0,-68);

	MoveWidgetBy('u1005',0,-68);

}

}

function rdo30onChangeDisCon2L3(e) {

if ((GetSelectedOption('u940')) != (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u939'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u940'));

SetSelectedOption('u956', PopulateVariables('Cancer'));

SetSelectedOption('u957', GetSelectedOption('u940'));

	SetPanelVisibilityu949("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu977("hidden");

	SetPanelVisibilityu987("hidden");

	MoveWidgetBy('u977',0,-33);

	MoveWidgetBy('u1033',0,-33);

	MoveWidgetBy('u1005',0,-33);

}

}

function rdo30onChangeDisConAgeL3(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u946'));

}

}

function rdo30onClickAddDisCon3(e) {

if (true) {

;

SetWidgetRichText('u984', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]: [[varDisCon3]]</span>'));

SetWidgetRichText('u985', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u986', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u994', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u995', PopulateVariables(' '));

	SetPanelVisibilityu987("");

	SetPanelVisibilityu932("hidden");

	SetPanelVisibilityu949("hidden");

	SetPanelVisibilityu963("hidden");

	MoveWidgetBy('u977',0,-68);

	MoveWidgetBy('u1005',0,-68);

	MoveWidgetBy('u1033',0,-68);

}

}

function rdo26onChangeDisCon1(e) {

if ((GetSelectedOption('u898')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u898'));

	MoveWidgetBy('u1033',0,32);

	MoveWidgetBy('u701',0,32);

rdo19onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u898')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u895'));

	MoveWidgetBy('u1033',0,32);

	MoveWidgetBy('u701',0,32);

rdo19onChangeDisCon1(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u898'));

rdo19onChangeDisCon1(e);

}

}

function rdo26onChangeDisCon2(e) {

if ((GetSelectedOption('u901')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u895'));

	MoveWidgetBy('u1033',0,32);

	MoveWidgetBy('u701',0,32);

rdo19onChangeDisCon2(e);

}
else
if (((GetSelectedOption('u901')) != (PopulateVariables('Select Specific Cancer'))) || ((GetSelectedOption('u901')) != (PopulateVariables('Other - Add new')))) {

SetGlobalVariableValue('$varDisCon2Me', GetSelectedOption('u901'));

rdo19onChangeDisCon2(e);

}

}

function rdo26onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeRel', GetSelectedOption('u928'));

rdo19onChangeDisConAge(e);

}

}

function rdo26onClickDisConSearch(e) {

}

function rdo26onCheckSearchResult(e) {

}

function rdo26onClickDisConAdd(e) {

if (((GetSelectedOption('u898')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u898')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u911', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Rel]]</span>'));

SetWidgetRichText('u912', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u913', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u898', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u901', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u928', PopulateVariables(' '));

SetWidgetFormText('u895', PopulateVariables(''));

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetBy('u1033',0,0);

	MoveWidgetBy('u701',0,0);

rdo19onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u898')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u895'));

SetWidgetRichText('u911', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewRel]]</span>'));

SetWidgetRichText('u912', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u913', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u898', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u901', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u928', PopulateVariables(' '));

SetWidgetFormText('u895', PopulateVariables(''));

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetBy('u1033',0,-32);

	MoveWidgetBy('u701',0,-32);

rdo19onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u901')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u901')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u911', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Rel]]: [[varDisCon2Rel]]</span>'));

SetWidgetRichText('u912', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u913', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u898', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u901', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u928', PopulateVariables(' '));

SetWidgetFormText('u895', PopulateVariables(''));

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetBy('u1033',0,-32);

	MoveWidgetBy('u701',0,-32);

rdo19onClickDisConAdd(e);

}

if ((GetSelectedOption('u901')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u895'));

SetWidgetRichText('u911', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon2Rel]]: [[varDisConNewRel]]</span>'));

SetWidgetRichText('u912', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u913', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u898', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u901', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u928', PopulateVariables(' '));

SetWidgetFormText('u895', PopulateVariables(''));

	MoveWidgetBy('u1033',0,-64);

	MoveWidgetBy('u701',0,-64);

rdo19onClickDisConAdd(e);

}

}

function rdo26onClickDisConCancel(e) {

if (((GetSelectedOption('u898')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u898')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetBy('u1033',0,0);

	MoveWidgetBy('u701',0,0);

rdo19onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u898')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetBy('u1033',0,-32);

	MoveWidgetBy('u701',0,-32);

rdo19onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u901')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u901')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetBy('u1033',0,-32);

	MoveWidgetBy('u701',0,-32);

rdo19onClickDisConCancel(e);

}

if ((GetSelectedOption('u901')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u1033',0,-64);

	MoveWidgetBy('u701',0,-64);

rdo19onClickDisConCancel(e);

}

}

function rdo27onChangeDisCon1(e) {

if ((GetSelectedOption('u898')) == (PopulateVariables('Cancer'))) {

	SetPanelVisibilityu900("");

	MoveWidgetBy('u914',0,32);

	MoveWidgetBy('u904',0,32);

	MoveWidgetBy('u921',0,32);

	MoveWidgetBy('u927',0,32);

rdo26onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u898')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu894("");

	MoveWidgetBy('u914',0,32);

	MoveWidgetBy('u904',0,32);

	MoveWidgetBy('u921',0,32);

	MoveWidgetBy('u927',0,32);

rdo26onChangeDisCon1(e);

}
else
if (true) {

rdo26onChangeDisCon1(e);

}

}

function rdo2onNavClickHome(e) {

if (true) {

rdo0onNavClickHome(e);

}

}

function rdo2onNavClickCreateHistory(e) {

if (true) {

rdo0onNavClickCreateHistory(e);

}

}

function rdo2onNavClickOpenHistory(e) {

if (true) {

rdo0onNavClickOpenHistory(e);

}

}

function rdo21onChangeDisConAge(e) {

}

function rdo22onCheckRaceAIAN(e) {

}

function rdo22onUncheckRaceAIAN(e) {

}

function rdo22onCheckRaceAsian(e) {

if ((GetCheckState('u796')) == (true)) {

SetCheckState('u796', true);

SetCheckState('u798', true);

	SetPanelStateu795("pd1u795");

	MoveWidgetBy('u814',0,65);

	MoveWidgetBy('u817',0,65);

	MoveWidgetBy('u832',0,65);

	MoveWidgetBy('u835',0,65);

	MoveWidgetBy('u839',0,65);

	MoveWidgetBy('u883',0,65);

	MoveWidgetBy('u891',0,65);

	MoveWidgetBy('u1033',0,65);

	MoveWidgetBy('u701',0,65);

}

}

function rdo22onUncheckRaceAsian(e) {

if ((GetCheckState('u798')) == (false)) {

SetCheckState('u798', false);

SetCheckState('u796', false);

	SetPanelStateu795("pd0u795");

	MoveWidgetBy('u814',0,-65);

	MoveWidgetBy('u817',0,-65);

	MoveWidgetBy('u832',0,-65);

	MoveWidgetBy('u835',0,-65);

	MoveWidgetBy('u839',0,-65);

	MoveWidgetBy('u883',0,-65);

	MoveWidgetBy('u891',0,-65);

	MoveWidgetBy('u1033',0,-65);

	MoveWidgetBy('u701',0,-65);

}

}

function rdo22onCheckRaceNHOPI(e) {

if ((GetCheckState('u818')) == (true)) {

SetCheckState('u818', true);

SetCheckState('u820', true);

	SetPanelStateu817("pd1u817");

	MoveWidgetBy('u832',0,45);

	MoveWidgetBy('u835',0,45);

	MoveWidgetBy('u839',0,45);

	MoveWidgetBy('u883',0,45);

	MoveWidgetBy('u891',0,45);

	MoveWidgetBy('u1033',0,45);

	MoveWidgetBy('u701',0,45);

}

}

function rdo22onUncheckRaceNHOPI(e) {

if ((GetCheckState('u820')) == (false)) {

SetCheckState('u820', false);

SetCheckState('u818', false);

	SetPanelStateu817("pd0u817");

	MoveWidgetBy('u832',0,-45);

	MoveWidgetBy('u835',0,-45);

	MoveWidgetBy('u839',0,-45);

	MoveWidgetBy('u883',0,-45);

	MoveWidgetBy('u891',0,-45);

	MoveWidgetBy('u1033',0,-45);

	MoveWidgetBy('u701',0,-45);

}

}

function rdo23onUncheckEthnicityHL(e) {

if ((GetCheckState('u843')) == (false)) {

SetCheckState('u843', false);

SetCheckState('u841', false);

	SetPanelStateu840("pd0u840");

	MoveWidgetBy('u867',0,-65);

	MoveWidgetBy('u860',0,-65);

	MoveWidgetBy('u863',0,-65);

	MoveWidgetBy('u883',0,-65);

	MoveWidgetBy('u891',0,-65);

	MoveWidgetBy('u1033',0,-65);

	MoveWidgetBy('u701',0,-65);

}

}

function rdo23onCheckEthinicityHL(e) {

if ((GetCheckState('u841')) == (true)) {

SetCheckState('u841', true);

SetCheckState('u843', true);

	SetPanelStateu840("pd1u840");

	MoveWidgetBy('u867',0,65);

	MoveWidgetBy('u883',0,65);

	MoveWidgetBy('u860',0,65);

	MoveWidgetBy('u863',0,65);

	MoveWidgetBy('u891',0,65);

	MoveWidgetBy('u1033',0,65);

	MoveWidgetBy('u701',0,65);

}

}

function rdo7onClickDeleteRelYes(e) {

if (true) {

	SetPanelStateu62("pd1u62");

	SetPanelVisibilityu340("hidden");

}

}

function rdo7onClickCloseMsgPleaseWait(e) {

}

function rdo7onClickReturnToSaveAs(e) {

}

function rdo38onClickHideHI(e) {

if (true) {

	SetPanelStateu1249("pd1u1249");

	SetPanelVisibilityu1257("hidden");

	MoveWidgetBy('u1399',0,-285);

	MoveWidgetBy('u1067',0,-285);

}

}

function rdo38onClickShowHI(e) {

if (true) {

	SetPanelStateu1249("pd0u1249");

	SetPanelVisibilityu1257("");

	MoveWidgetBy('u1399',0,285);

	MoveWidgetBy('u1067',0,285);

}

}

function rdo39onChangeDisCon1(e) {

if ((GetSelectedOption('u1264')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u1264'));

	MoveWidgetBy('u1399',0,32);

	MoveWidgetBy('u1067',0,32);

rdo32onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u1264')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u1261'));

	MoveWidgetBy('u1399',0,32);

	MoveWidgetBy('u1067',0,32);

rdo32onChangeDisCon1(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u1264'));

rdo32onChangeDisCon1(e);

}

}

function rdo39onChangeDisCon2(e) {

if ((GetSelectedOption('u1267')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u1261'));

	MoveWidgetBy('u1399',0,32);

	MoveWidgetBy('u1067',0,32);

rdo32onChangeDisCon2(e);

}
else
if (((GetSelectedOption('u1267')) != (PopulateVariables('Select Specific Cancer'))) || ((GetSelectedOption('u1267')) != (PopulateVariables('Other - Add new')))) {

SetGlobalVariableValue('$varDisCon2Me', GetSelectedOption('u1267'));

rdo32onChangeDisCon2(e);

}

}

function rdo39onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeRel', GetSelectedOption('u1294'));

rdo32onChangeDisConAge(e);

}

}

function rdo39onClickDisConSearch(e) {

}

function rdo39onCheckSearchResult(e) {

}

function rdo39onClickDisConAdd(e) {

if (((GetSelectedOption('u1264')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1264')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u1277', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Rel]]</span>'));

SetWidgetRichText('u1278', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u1279', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u1264', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1267', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1294', PopulateVariables(' '));

SetWidgetFormText('u1261', PopulateVariables(''));

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetBy('u1399',0,0);

	MoveWidgetBy('u1067',0,0);

rdo32onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u1264')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u1261'));

SetWidgetRichText('u1277', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewRel]]</span>'));

SetWidgetRichText('u1278', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u1279', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u1264', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1267', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1294', PopulateVariables(' '));

SetWidgetFormText('u1261', PopulateVariables(''));

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetBy('u1399',0,-32);

	MoveWidgetBy('u1067',0,-32);

rdo32onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u1267')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u1267')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u1277', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Rel]]: [[varDisCon2Rel]]</span>'));

SetWidgetRichText('u1278', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u1279', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u1264', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1267', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1294', PopulateVariables(' '));

SetWidgetFormText('u1261', PopulateVariables(''));

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetBy('u1399',0,-32);

	MoveWidgetBy('u1067',0,-32);

rdo32onClickDisConAdd(e);

}

if ((GetSelectedOption('u1267')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u1261'));

SetWidgetRichText('u1277', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon2Rel]]: [[varDisConNewRel]]</span>'));

SetWidgetRichText('u1278', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u1279', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u1264', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1267', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1294', PopulateVariables(' '));

SetWidgetFormText('u1261', PopulateVariables(''));

	MoveWidgetBy('u1399',0,-64);

	MoveWidgetBy('u1067',0,-64);

rdo32onClickDisConAdd(e);

}

}

function rdo39onClickDisConCancel(e) {

if (((GetSelectedOption('u1264')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1264')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetBy('u1399',0,0);

	MoveWidgetBy('u1067',0,0);

rdo32onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u1264')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetBy('u1399',0,-32);

	MoveWidgetBy('u1067',0,-32);

rdo32onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u1267')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u1267')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetBy('u1399',0,-32);

	MoveWidgetBy('u1067',0,-32);

rdo32onClickDisConCancel(e);

}

if ((GetSelectedOption('u1267')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u1399',0,-64);

	MoveWidgetBy('u1067',0,-64);

rdo32onClickDisConCancel(e);

}

}

function rdo28onChangeDisCon2(e) {

if ((GetSelectedOption('u901')) == (PopulateVariables('Other - Add new'))) {

	SetPanelStateu894("pd0u894");

	SetPanelVisibilityu894("");

	MoveWidgetBy('u914',0,32);

	MoveWidgetBy('u904',0,32);

	MoveWidgetBy('u894',0,32);

	MoveWidgetBy('u921',0,32);

	MoveWidgetBy('u927',0,32);

rdo26onChangeDisCon2(e);

}
else
if (true) {

rdo26onChangeDisCon2(e);

}

}

function rdo29onChangeDisConAge(e) {

if (true) {

rdo26onChangeDisConAge(e);

}

}

function rdo9onCheckRaceAIAN(e) {

}

function rdo9onUncheckRaceAIAN(e) {

}

function rdo9onCheckRaceAsian(e) {

if ((GetCheckState('u478')) == (true)) {

SetCheckState('u478', true);

SetCheckState('u480', true);

	SetPanelStateu477("pd1u477");

	MoveWidgetBy('u496',0,65);

	MoveWidgetBy('u499',0,65);

	MoveWidgetBy('u514',0,65);

	MoveWidgetBy('u517',0,65);

	MoveWidgetBy('u521',0,65);

	MoveWidgetBy('u560',0,65);

	MoveWidgetBy('u568',0,65);

	MoveWidgetBy('u693',0,65);

	MoveWidgetBy('u421',0,65);

}

}

function rdo9onUncheckRaceAsian(e) {

if ((GetCheckState('u480')) == (false)) {

SetCheckState('u480', false);

SetCheckState('u478', false);

	SetPanelStateu477("pd0u477");

	MoveWidgetBy('u496',0,-65);

	MoveWidgetBy('u499',0,-65);

	MoveWidgetBy('u514',0,-65);

	MoveWidgetBy('u517',0,-65);

	MoveWidgetBy('u521',0,-65);

	MoveWidgetBy('u560',0,-65);

	MoveWidgetBy('u568',0,-65);

	MoveWidgetBy('u693',0,-65);

	MoveWidgetBy('u421',0,-65);

}

}

function rdo9onCheckRaceNHOPI(e) {

if ((GetCheckState('u500')) == (true)) {

SetCheckState('u500', true);

SetCheckState('u502', true);

	SetPanelStateu499("pd1u499");

	MoveWidgetBy('u514',0,45);

	MoveWidgetBy('u517',0,45);

	MoveWidgetBy('u521',0,45);

	MoveWidgetBy('u560',0,45);

	MoveWidgetBy('u568',0,45);

	MoveWidgetBy('u693',0,45);

	MoveWidgetBy('u421',0,45);

}

}

function rdo9onUncheckRaceNHOPI(e) {

if ((GetCheckState('u502')) == (false)) {

SetCheckState('u502', false);

SetCheckState('u500', false);

	SetPanelStateu499("pd0u499");

	MoveWidgetBy('u514',0,-45);

	MoveWidgetBy('u517',0,-45);

	MoveWidgetBy('u521',0,-45);

	MoveWidgetBy('u560',0,-45);

	MoveWidgetBy('u568',0,-45);

	MoveWidgetBy('u693',0,-45);

	MoveWidgetBy('u421',0,-45);

}

}

function rdo43onChangeDisCon1L1(e) {

if ((GetSelectedOption('u1360')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1360'));

SetSelectedOption('u1322', PopulateVariables('Cancer'));

	SetPanelVisibilityu1315("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1329("hidden");

	SetPanelVisibilityu1353("hidden");

	MoveWidgetBy('u1343',0,35);

	MoveWidgetBy('u1399',0,35);

	MoveWidgetBy('u1371',0,35);

}
else
if ((GetSelectedOption('u1360')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1360'));

SetSelectedOption('u1339', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu1329("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1315("hidden");

	SetPanelVisibilityu1353("hidden");

	MoveWidgetBy('u1343',0,35);

	MoveWidgetBy('u1399',0,35);

	MoveWidgetBy('u1371',0,35);

}

}

function rdo43onChangeDisConAgeL1(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u1361'));

}

}

function rdo43onChangeDisCon1L2(e) {

if ((GetSelectedOption('u1322')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1322'));

SetSelectedOption('u1339', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu1329("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1315("hidden");

	SetPanelVisibilityu1353("hidden");

}

}

function rdo43onChangeDisCon2L2(e) {

if ((GetSelectedOption('u1323')) == (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1322'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u1323'));

SetSelectedOption('u1305', PopulateVariables('Cancer'));

SetSelectedOption('u1306', PopulateVariables('Other Cancer'));

	SetPanelVisibilityu1298("");

	SetPanelVisibilityu1315("hidden");

	SetPanelVisibilityu1329("hidden");

	SetPanelVisibilityu1353("hidden");

	MoveWidgetBy('u1343',0,33);

	MoveWidgetBy('u1399',0,33);

	MoveWidgetBy('u1371',0,33);

}
else
if ((GetSelectedOption('u1323')) != (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1322'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u1323'));

	SetPanelVisibilityu1343("");

}

}

function rdo43onChangeDisConAgeL2(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u1326'));

}

}

function rdo43onClickAddDisCon2(e) {

if (true) {

SetWidgetRichText('u1350', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u1351', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u1352', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u1360', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1361', PopulateVariables(' '));

	SetPanelVisibilityu1353("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1315("hidden");

	SetPanelVisibilityu1329("hidden");

	MoveWidgetBy('u1371',0,-35);

	MoveWidgetBy('u1343',0,-35);

	MoveWidgetBy('u1399',0,-35);

}

}

function rdo43onChangeDisCon1New(e) {

if ((GetSelectedOption('u1339')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1339'));

SetSelectedOption('u1322', PopulateVariables('Cancer'));

	SetPanelVisibilityu1315("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1329("hidden");

	SetPanelVisibilityu1353("hidden");

}
else
if ((GetSelectedOption('u1339')) == (PopulateVariables('Select Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', PopulateVariables(''));

SetGlobalVariableValue('$varDisCon2Father', PopulateVariables(''));

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

	SetPanelVisibilityu1353("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1315("hidden");

	SetPanelVisibilityu1329("hidden");

	MoveWidgetBy('u1343',0,-35);

	MoveWidgetBy('u1399',0,-35);

	MoveWidgetBy('u1371',0,-35);

}

}

function rdo43onChangeDisConAgeNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u1340'));

}

}

function rdo43onClickAddDisConNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u1338'));

SetWidgetRichText('u1350', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

SetWidgetRichText('u1351', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u1352', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u1360', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1361', PopulateVariables(' '));

	SetPanelVisibilityu1353("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1315("hidden");

	SetPanelVisibilityu1329("hidden");

	MoveWidgetBy('u1343',0,-35);

	MoveWidgetBy('u1371',0,-35);

	MoveWidgetBy('u1399',0,-35);

}

}

function rdo43onChangeDisCon1L3(e) {

if ((GetSelectedOption('u1305')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1305'));

SetSelectedOption('u1339', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu1329("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1315("hidden");

	SetPanelVisibilityu1353("hidden");

	MoveWidgetBy('u1343',0,-33);

	MoveWidgetBy('u1399',0,-33);

	MoveWidgetBy('u1371',0,-33);

}
else
if ((GetSelectedOption('u1305')) == (PopulateVariables('Select Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', PopulateVariables(''));

SetGlobalVariableValue('$varDisCon2Father', PopulateVariables(''));

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

SetGlobalVariableValue('$varDisConAgeFather', PopulateVariables(''));

	SetPanelVisibilityu1343("");

	SetPanelVisibilityu1353("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1315("hidden");

	SetPanelVisibilityu1329("hidden");

	MoveWidgetBy('u1343',0,-68);

	MoveWidgetBy('u1399',0,-68);

	MoveWidgetBy('u1371',0,-68);

}

}

function rdo43onChangeDisCon2L3(e) {

if ((GetSelectedOption('u1306')) != (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1305'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u1306'));

SetSelectedOption('u1322', PopulateVariables('Cancer'));

SetSelectedOption('u1323', GetSelectedOption('u1306'));

	SetPanelVisibilityu1315("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1343("hidden");

	SetPanelVisibilityu1353("hidden");

	MoveWidgetBy('u1343',0,-33);

	MoveWidgetBy('u1399',0,-33);

	MoveWidgetBy('u1371',0,-33);

}

}

function rdo43onChangeDisConAgeL3(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u1312'));

}

}

function rdo43onClickAddDisCon3(e) {

if (true) {

;

SetWidgetRichText('u1350', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]: [[varDisCon3]]</span>'));

SetWidgetRichText('u1351', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u1352', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u1360', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1361', PopulateVariables(' '));

	SetPanelVisibilityu1353("");

	SetPanelVisibilityu1298("hidden");

	SetPanelVisibilityu1315("hidden");

	SetPanelVisibilityu1329("hidden");

	MoveWidgetBy('u1343',0,-68);

	MoveWidgetBy('u1371',0,-68);

	MoveWidgetBy('u1399',0,-68);

}

}

function rdo10onUncheckEthnicityHL(e) {

if ((GetCheckState('u525')) == (false)) {

SetCheckState('u525', false);

SetCheckState('u523', false);

	SetPanelStateu522("pd0u522");

	MoveWidgetBy('u549',0,-65);

	MoveWidgetBy('u542',0,-65);

	MoveWidgetBy('u545',0,-65);

	MoveWidgetBy('u560',0,-65);

	MoveWidgetBy('u568',0,-65);

	MoveWidgetBy('u693',0,-65);

	MoveWidgetBy('u421',0,-65);

}

}

function rdo10onCheckEthinicityHL(e) {

if ((GetCheckState('u523')) == (true)) {

SetCheckState('u523', true);

SetCheckState('u525', true);

	SetPanelStateu522("pd1u522");

	MoveWidgetBy('u549',0,65);

	MoveWidgetBy('u560',0,65);

	MoveWidgetBy('u542',0,65);

	MoveWidgetBy('u545',0,65);

	MoveWidgetBy('u568',0,65);

	MoveWidgetBy('u693',0,65);

	MoveWidgetBy('u421',0,65);

}

}

var u289 = document.getElementById('u289');

var u733 = document.getElementById('u733');

var u966 = document.getElementById('u966');

var u233 = document.getElementById('u233');

u233.style.cursor = 'pointer';
if (bIE) u233.attachEvent("onclick", Clicku233);
else u233.addEventListener("click", Clicku233, true);
function Clicku233(e)
{

if (true) {

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u381 = document.getElementById('u381');

var u881 = document.getElementById('u881');

var u691 = document.getElementById('u691');

u691.style.cursor = 'pointer';
if (bIE) u691.attachEvent("onclick", Clicku691);
else u691.addEventListener("click", Clicku691, true);
function Clicku691(e)
{

if (true) {

	NewWindow("help_Edit_Me.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u199 = document.getElementById('u199');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u1356 = document.getElementById('u1356');

var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'top';
var u953 = document.getElementById('u953');
gv_vAlignTable['u953'] = 'center';
var u1353 = document.getElementById('u1353');

var u1352 = document.getElementById('u1352');

u1352.style.cursor = 'pointer';
if (bIE) u1352.attachEvent("onclick", Clicku1352);
else u1352.addEventListener("click", Clicku1352, true);
function Clicku1352(e)
{

if (true) {

SetWidgetRichText('u1350', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u1352', PopulateVariables(''));

SetWidgetRichText('u1351', PopulateVariables(''));

}

}
gv_vAlignTable['u1352'] = 'top';
var u1351 = document.getElementById('u1351');
gv_vAlignTable['u1351'] = 'top';
var u1257 = document.getElementById('u1257');

var u1046 = document.getElementById('u1046');
gv_vAlignTable['u1046'] = 'top';
var u134 = document.getElementById('u134');

u134.style.cursor = 'pointer';
if (bIE) u134.attachEvent("onclick", Clicku134);
else u134.addEventListener("click", Clicku134, true);
function Clicku134(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u1253 = document.getElementById('u1253');

u1253.style.cursor = 'pointer';
if (bIE) u1253.attachEvent("onclick", Clicku1253);
else u1253.addEventListener("click", Clicku1253, true);
function Clicku1253(e)
{

if (true) {

rdo38onClickShowHI(e);

}

}

var u1251 = document.getElementById('u1251');
gv_vAlignTable['u1251'] = 'center';
var u363 = document.getElementById('u363');

u363.style.cursor = 'pointer';
if (bIE) u363.attachEvent("onclick", Clicku363);
else u363.addEventListener("click", Clicku363, true);
function Clicku363(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

	SetPanelVisibilityu340("hidden");

}

}

var u202 = document.getElementById('u202');

u202.style.cursor = 'pointer';
if (bIE) u202.attachEvent("onclick", Clicku202);
else u202.addEventListener("click", Clicku202, true);
function Clicku202(e)
{

if (true) {

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u512 = document.getElementById('u512');

var u175 = document.getElementById('u175');

u175.style.cursor = 'pointer';
if (bIE) u175.attachEvent("onclick", Clicku175);
else u175.addEventListener("click", Clicku175, true);
function Clicku175(e)
{

if (true) {

}

}

var u1048 = document.getElementById('u1048');
gv_vAlignTable['u1048'] = 'top';
var u1258 = document.getElementById('u1258');

var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'top';
var u273 = document.getElementById('u273');

var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	NewWindow("help_Contact_Us.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u28'] = 'top';
var u422 = document.getElementById('u422');

var u648 = document.getElementById('u648');

var u1191 = document.getElementById('u1191');
gv_vAlignTable['u1191'] = 'top';
var u1190 = document.getElementById('u1190');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u888 = document.getElementById('u888');
gv_vAlignTable['u888'] = 'center';
var u780 = document.getElementById('u780');
gv_vAlignTable['u780'] = 'top';
var u1227 = document.getElementById('u1227');

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u832 = document.getElementById('u832');

var u184 = document.getElementById('u184');

var u980 = document.getElementById('u980');

var u790 = document.getElementById('u790');
gv_vAlignTable['u790'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u552 = document.getElementById('u552');

var u391 = document.getElementById('u391');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u992 = document.getElementById('u992');

var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u702 = document.getElementById('u702');

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'top';
var u301 = document.getElementById('u301');

var u801 = document.getElementById('u801');
gv_vAlignTable['u801'] = 'top';
var u674 = document.getElementById('u674');
gv_vAlignTable['u674'] = 'center';
var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u429 = document.getElementById('u429');

var u929 = document.getElementById('u929');
gv_vAlignTable['u929'] = 'top';
var u814 = document.getElementById('u814');

var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'top';
var u743 = document.getElementById('u743');
gv_vAlignTable['u743'] = 'top';
var u225 = document.getElementById('u225');

var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u839 = document.getElementById('u839');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u931 = document.getElementById('u931');
gv_vAlignTable['u931'] = 'center';
var u741 = document.getElementById('u741');
gv_vAlignTable['u741'] = 'top';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u283 = document.getElementById('u283');

var u840 = document.getElementById('u840');

var u1271 = document.getElementById('u1271');

var u1270 = document.getElementById('u1270');

var u1357 = document.getElementById('u1357');
gv_vAlignTable['u1357'] = 'center';
var u20 = document.getElementById('u20');

var u1355 = document.getElementById('u1355');
gv_vAlignTable['u1355'] = 'center';
var u1354 = document.getElementById('u1354');

var u651 = document.getElementById('u651');

if (bIE) u651.attachEvent("onchange", Changeu651);
else u651.addEventListener("change", Changeu651, true);
function Changeu651(e)
{

if (true) {

rdo17onChangeDisConAgeNew(e);

}

}

var u159 = document.getElementById('u159');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u469 = document.getElementById('u469');

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u808 = document.getElementById('u808');

var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

rdo2onNavClickCreateHistory(e);

}

}

var u1359 = document.getElementById('u1359');
gv_vAlignTable['u1359'] = 'center';
var u1358 = document.getElementById('u1358');

var u265 = document.getElementById('u265');

var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if ((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u726', true);

SetCheckState('u762', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}
else
if ((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u726', true);

SetCheckState('u762', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}

}

var u950 = document.getElementById('u950');

var u710 = document.getElementById('u710');
gv_vAlignTable['u710'] = 'top';
var u218 = document.getElementById('u218');

u218.style.cursor = 'pointer';
if (bIE) u218.attachEvent("onclick", Clicku218);
else u218.addEventListener("click", Clicku218, true);
function Clicku218(e)
{

if ((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u724', true);

SetCheckState('u742', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}
else
if ((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u724', true);

SetCheckState('u742', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}

}

var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'center';
var u4 = document.getElementById('u4');

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

rdo2onNavClickHome(e);

}

}

var u228 = document.getElementById('u228');

var u83 = document.getElementById('u83');

u83.style.cursor = 'pointer';
if (bIE) u83.attachEvent("onclick", Clicku83);
else u83.addEventListener("click", Clicku83, true);
function Clicku83(e)
{

if (true) {

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u471 = document.getElementById('u471');

u471.style.cursor = 'pointer';
if (bIE) u471.attachEvent("onclick", Clicku471);
else u471.addEventListener("click", Clicku471, true);
function Clicku471(e)
{

if ((GetCheckState('u471')) == (true)) {

rdo9onCheckRaceAIAN(e);

}

}

var u486 = document.getElementById('u486');

var u620 = document.getElementById('u620');

var u824 = document.getElementById('u824');

var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'top';
var u938 = document.getElementById('u938');
gv_vAlignTable['u938'] = 'center';
var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{

if (true) {

	NewWindow("help_FAQ.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u24'] = 'top';
var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'top';
var u958 = document.getElementById('u958');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'center';
var u658 = document.getElementById('u658');
gv_vAlignTable['u658'] = 'center';
var u15 = document.getElementById('u15');

var u46 = document.getElementById('u46');

var u96 = document.getElementById('u96');

var u144 = document.getElementById('u144');

var u1366 = document.getElementById('u1366');
gv_vAlignTable['u1366'] = 'center';
var u750 = document.getElementById('u750');

var u954 = document.getElementById('u954');

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u568 = document.getElementById('u568');

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u866 = document.getElementById('u866');

u866.style.cursor = 'pointer';
if (bIE) u866.attachEvent("onclick", Clicku866);
else u866.addEventListener("click", Clicku866, true);
function Clicku866(e)
{

if (true) {

	NewWindow("help_Ashkenazi_Jew.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u866'] = 'top';
var u37 = document.getElementById('u37');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u1360 = document.getElementById('u1360');

if (bIE) u1360.attachEvent("onchange", Changeu1360);
else u1360.addEventListener("change", Changeu1360, true);
function Changeu1360(e)
{

if (true) {

rdo43onChangeDisCon1L1(e);

}

}

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u478 = document.getElementById('u478');

u478.style.cursor = 'pointer';
if (bIE) u478.attachEvent("onclick", Clicku478);
else u478.addEventListener("click", Clicku478, true);
function Clicku478(e)
{

if ((GetCheckState('u478')) == (true)) {

rdo9onCheckRaceAsian(e);

}

}

var u978 = document.getElementById('u978');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u1057 = document.getElementById('u1057');
gv_vAlignTable['u1057'] = 'center';
var u1056 = document.getElementById('u1056');

u1056.style.cursor = 'pointer';
if (bIE) u1056.attachEvent("onclick", Clicku1056);
else u1056.addEventListener("click", Clicku1056, true);
function Clicku1056(e)
{

if (true) {

SetWidgetRichText('u1394', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> BROTHER</b></span>'));

SetCheckState('u1134', true);

SetSelectedOption('u1075', PopulateVariables('Brother'));

SetSelectedOption('u1084', PopulateVariables('Brother'));

	SetPanelStateu418("pd4u418");

	SetPanelStateu1380("pd2u1380");

}

}

var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'center';
var u923 = document.getElementById('u923');
gv_vAlignTable['u923'] = 'center';
var u1053 = document.getElementById('u1053');
gv_vAlignTable['u1053'] = 'top';
var u1052 = document.getElementById('u1052');

var u1051 = document.getElementById('u1051');
gv_vAlignTable['u1051'] = 'top';
var u1050 = document.getElementById('u1050');
gv_vAlignTable['u1050'] = 'top';
var u850 = document.getElementById('u850');
gv_vAlignTable['u850'] = 'top';
var u389 = document.getElementById('u389');

var u889 = document.getElementById('u889');

var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'center';
var u333 = document.getElementById('u333');

u333.style.cursor = 'pointer';
if (bIE) u333.attachEvent("onclick", Clicku333);
else u333.addEventListener("click", Clicku333, true);
function Clicku333(e)
{

if (true) {

	SetPanelStateu340("pd5u340");

	SetPanelVisibilityu340("");

}

}

var u19 = document.getElementById('u19');

var u1193 = document.getElementById('u1193');
gv_vAlignTable['u1193'] = 'top';
var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'top';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'center';
var u791 = document.getElementById('u791');

u791.style.cursor = 'pointer';
if (bIE) u791.attachEvent("onclick", Clicku791);
else u791.addEventListener("click", Clicku791, true);
function Clicku791(e)
{

if ((GetCheckState('u791')) == (false)) {

rdo22onUncheckRaceAIAN(e);

}

}

var u299 = document.getElementById('u299');

var u243 = document.getElementById('u243');

var u1350 = document.getElementById('u1350');
gv_vAlignTable['u1350'] = 'top';
var u553 = document.getElementById('u553');

u553.style.cursor = 'pointer';
if (bIE) u553.attachEvent("onclick", Clicku553);
else u553.addEventListener("click", Clicku553, true);
function Clicku553(e)
{

if (true) {

rdo11onClickHidePI(e);

}

}

var u543 = document.getElementById('u543');

var u463 = document.getElementById('u463');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u802 = document.getElementById('u802');

var u612 = document.getElementById('u612');

var u919 = document.getElementById('u919');

var u1273 = document.getElementById('u1273');

var u279 = document.getElementById('u279');

var u373 = document.getElementById('u373');

var u38 = document.getElementById('u38');

var u88 = document.getElementById('u88');

var u522 = document.getElementById('u522');

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u488 = document.getElementById('u488');

var u988 = document.getElementById('u988');

var u1278 = document.getElementById('u1278');
gv_vAlignTable['u1278'] = 'top';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

	NewWindow("help_Site_Updates.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u29'] = 'top';
var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'top';
var u932 = document.getElementById('u932');

var u480 = document.getElementById('u480');

u480.style.cursor = 'pointer';
if (bIE) u480.attachEvent("onclick", Clicku480);
else u480.addEventListener("click", Clicku480, true);
function Clicku480(e)
{

if ((GetCheckState('u480')) == (false)) {

rdo9onUncheckRaceAsian(e);

}

}

var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'top';
var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'center';
var u876 = document.getElementById('u876');

u876.style.cursor = 'pointer';
if (bIE) u876.attachEvent("onclick", Clicku876);
else u876.addEventListener("click", Clicku876, true);
function Clicku876(e)
{

if (true) {

rdo24onClickHidePI(e);

}

}

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u842 = document.getElementById('u842');
gv_vAlignTable['u842'] = 'top';
var u652 = document.getElementById('u652');

u652.style.cursor = 'pointer';
if (bIE) u652.attachEvent("onclick", Clicku652);
else u652.addEventListener("click", Clicku652, true);
function Clicku652(e)
{

if (true) {

rdo17onClickAddDisConNew(e);

}

}

var u194 = document.getElementById('u194');

var u309 = document.getElementById('u309');

var u809 = document.getElementById('u809');
gv_vAlignTable['u809'] = 'top';
var u1155 = document.getElementById('u1155');

u1155.style.cursor = 'pointer';
if (bIE) u1155.attachEvent("onclick", Clicku1155);
else u1155.addEventListener("click", Clicku1155, true);
function Clicku1155(e)
{

if ((GetCheckState('u1155')) == (true)) {

rdo35onCheckRaceAIAN(e);

}

}

var u1239 = document.getElementById('u1239');

u1239.style.cursor = 'pointer';
if (bIE) u1239.attachEvent("onclick", Clicku1239);
else u1239.addEventListener("click", Clicku1239, true);
function Clicku1239(e)
{

if (true) {

	SetPanelStateu1236("pd0u1236");

	SetPanelVisibilityu1153("hidden");

	SetPanelVisibilityu1205("hidden");

	MoveWidgetBy('u1067',0,-220);

	MoveWidgetBy('u1257',0,-220);

	MoveWidgetBy('u1249',0,-220);

	MoveWidgetBy('u1399',0,-220);

}

}

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u901 = document.getElementById('u901');

if (bIE) u901.attachEvent("onchange", Changeu901);
else u901.addEventListener("change", Changeu901, true);
function Changeu901(e)
{

if (true) {

rdo28onChangeDisCon2(e);

}

}

var u711 = document.getElementById('u711');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u529 = document.getElementById('u529');

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u622 = document.getElementById('u622');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u972 = document.getElementById('u972');

var u621 = document.getElementById('u621');

var u825 = document.getElementById('u825');
gv_vAlignTable['u825'] = 'top';
var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'top';
var u439 = document.getElementById('u439');

var u939 = document.getElementById('u939');

if (bIE) u939.attachEvent("onchange", Changeu939);
else u939.addEventListener("change", Changeu939, true);
function Changeu939(e)
{

if (true) {

rdo30onChangeDisCon1L3(e);

}

}

var u722 = document.getElementById('u722');

var u1291 = document.getElementById('u1291');
gv_vAlignTable['u1291'] = 'center';
var u1290 = document.getElementById('u1290');

u1290.style.cursor = 'pointer';
if (bIE) u1290.attachEvent("onclick", Clicku1290);
else u1290.addEventListener("click", Clicku1290, true);
function Clicku1290(e)
{

if (((GetSelectedOption('u1264')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1267')) == (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u1264', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1267', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1294', PopulateVariables(' '));

SetWidgetFormText('u1261', PopulateVariables(''));

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetTo('u1260',10,82);

	MoveWidgetTo('u1280',10,180);

	MoveWidgetTo('u1270',10,205);

	MoveWidgetTo('u1287',10,114);

	MoveWidgetTo('u1293',10,82);

rdo39onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u1264')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u1267')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u1267')) != (PopulateVariables('Other - Add new'))))) {

SetSelectedOption('u1264', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1267', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1294', PopulateVariables(' '));

SetWidgetFormText('u1261', PopulateVariables(''));

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetTo('u1280',10,180);

	MoveWidgetTo('u1270',10,205);

	MoveWidgetTo('u1287',10,114);

	MoveWidgetTo('u1293',10,82);

rdo39onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u1264')) == (PopulateVariables('Other - Add new'))) {

SetSelectedOption('u1264', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1267', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1294', PopulateVariables(' '));

SetWidgetFormText('u1261', PopulateVariables(''));

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetTo('u1280',10,180);

	MoveWidgetTo('u1270',10,205);

	MoveWidgetTo('u1287',10,114);

	MoveWidgetTo('u1293',10,82);

rdo39onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u1264')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1264')) != (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u1264', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1267', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1294', PopulateVariables(' '));

SetWidgetFormText('u1261', PopulateVariables(''));

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

rdo39onClickDisConCancel(e);

}

}

var u882 = document.getElementById('u882');
gv_vAlignTable['u882'] = 'center';
var u235 = document.getElementById('u235');

u235.style.cursor = 'pointer';
if (bIE) u235.attachEvent("onclick", Clicku235);
else u235.addEventListener("click", Clicku235, true);
function Clicku235(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u349 = document.getElementById('u349');

u349.style.cursor = 'pointer';
if (bIE) u349.attachEvent("onclick", Clicku349);
else u349.addEventListener("click", Clicku349, true);
function Clicku349(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

	SetPanelVisibilityu340("hidden");

}

}

var u383 = document.getElementById('u383');

var u883 = document.getElementById('u883');

var u763 = document.getElementById('u763');
gv_vAlignTable['u763'] = 'top';
var u1380 = document.getElementById('u1380');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u80 = document.getElementById('u80');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u1376 = document.getElementById('u1376');

var u751 = document.getElementById('u751');

var u259 = document.getElementById('u259');

u259.style.cursor = 'pointer';
if (bIE) u259.attachEvent("onclick", Clicku259);
else u259.addEventListener("click", Clicku259, true);
function Clicku259(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u293 = document.getElementById('u293');

var u569 = document.getElementById('u569');

var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'center';
var u908 = document.getElementById('u908');
gv_vAlignTable['u908'] = 'center';
var u1142 = document.getElementById('u1142');

var u21 = document.getElementById('u21');

var u661 = document.getElementById('u661');
gv_vAlignTable['u661'] = 'top';
var u204 = document.getElementById('u204');

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'top';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u818 = document.getElementById('u818');

u818.style.cursor = 'pointer';
if (bIE) u818.attachEvent("onclick", Clicku818);
else u818.addEventListener("click", Clicku818, true);
function Clicku818(e)
{

if ((GetCheckState('u818')) == (true)) {

rdo22onCheckRaceNHOPI(e);

}

}

var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u571 = document.getElementById('u571');

var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{

if (true) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u1066 = document.getElementById('u1066');
gv_vAlignTable['u1066'] = 'center';
var u720 = document.getElementById('u720');

var u924 = document.getElementById('u924');

u924.style.cursor = 'pointer';
if (bIE) u924.attachEvent("onclick", Clicku924);
else u924.addEventListener("click", Clicku924, true);
function Clicku924(e)
{

if (((GetSelectedOption('u898')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u901')) == (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u898', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u901', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u928', PopulateVariables(' '));

SetWidgetFormText('u895', PopulateVariables(''));

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetTo('u894',10,82);

	MoveWidgetTo('u914',10,180);

	MoveWidgetTo('u904',10,205);

	MoveWidgetTo('u921',10,114);

	MoveWidgetTo('u927',10,82);

rdo26onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u898')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u901')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u901')) != (PopulateVariables('Other - Add new'))))) {

SetSelectedOption('u898', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u901', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u928', PopulateVariables(' '));

SetWidgetFormText('u895', PopulateVariables(''));

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetTo('u914',10,180);

	MoveWidgetTo('u904',10,205);

	MoveWidgetTo('u921',10,114);

	MoveWidgetTo('u927',10,82);

rdo26onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u898')) == (PopulateVariables('Other - Add new'))) {

SetSelectedOption('u898', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u901', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u928', PopulateVariables(' '));

SetWidgetFormText('u895', PopulateVariables(''));

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetTo('u914',10,180);

	MoveWidgetTo('u904',10,205);

	MoveWidgetTo('u921',10,114);

	MoveWidgetTo('u927',10,82);

rdo26onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u898')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u898')) != (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u898', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u901', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u928', PopulateVariables(' '));

SetWidgetFormText('u895', PopulateVariables(''));

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

rdo26onClickDisConCancel(e);

}

}

var u186 = document.getElementById('u186');

var u538 = document.getElementById('u538');
gv_vAlignTable['u538'] = 'top';
var u1061 = document.getElementById('u1061');

u1061.style.cursor = 'pointer';
if (bIE) u1061.attachEvent("onclick", Clicku1061);
else u1061.addEventListener("click", Clicku1061, true);
function Clicku1061(e)
{

if (true) {

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

var u1060 = document.getElementById('u1060');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u834 = document.getElementById('u834');
gv_vAlignTable['u834'] = 'top';
var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'top';
var u482 = document.getElementById('u482');

var u758 = document.getElementById('u758');

if (bIE) u758.attachEvent("onchange", Changeu758);
else u758.addEventListener("change", Changeu758, true);
function Changeu758(e)
{

if (true) {

rdo21onChangeDisConAge(e);

}

}

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	NewWindow("help_Accessibility.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u25'] = 'top';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", u56Click);
else u56.addEventListener("click", u56Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u56LinksClick'></DIV>")
var u56LinksClick = document.getElementById('u56LinksClick');
function u56Click(e) 
{

	ToggleLinks(e, 'u56LinksClick');
}

InsertBeforeEnd(u56LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u56Clicku57a452ccbc56427fbb4d31580d35ed91(event)'>ifMyInfoSaved</div>");
function u56Clicku57a452ccbc56427fbb4d31580d35ed91(e)
{

	self.location.href="View_History_Report.html" + GetQuerystring();

	ToggleLinks(e, 'u56LinksClick');
}

InsertBeforeEnd(u56LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u56Clicku47860fa9f573406699aa1eedf225d979(event)'>ifMyInfoNotSaved</div>");
function u56Clicku47860fa9f573406699aa1eedf225d979(e)
{

	SetPanelStateu340("pd3u340");

	SetPanelVisibilityu340("");

	ToggleLinks(e, 'u56LinksClick');
}

if (bIE) u56.attachEvent("onmouseout", MouseOutu56);
else u56.addEventListener("mouseout", MouseOutu56, true);
function MouseOutu56(e)
{
if (!IsTrueMouseOut('u56',e)) return;
if (true) {

	SetPanelStateu54("pd0u54");

}

}

var u244 = document.getElementById('u244');

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'center';
var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'center';
var u668 = document.getElementById('u668');
gv_vAlignTable['u668'] = 'center';
var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

if (bIE) u47.attachEvent("onmouseover", MouseOveru47);
else u47.addEventListener("mouseover", MouseOveru47, true);
function MouseOveru47(e)
{
if (!IsTrueMouseOver('u47',e)) return;
if (true) {

	SetPanelStateu46("pd2u46");

}

}

if (bIE) u47.attachEvent("onmouseout", MouseOutu47);
else u47.addEventListener("mouseout", MouseOutu47, true);
function MouseOutu47(e)
{
if (!IsTrueMouseOut('u47',e)) return;
if (true) {

	SetPanelStateu46("pd0u46");

}

}

var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u663 = document.getElementById('u663');

u663.style.cursor = 'pointer';
if (bIE) u663.attachEvent("onclick", Clicku663);
else u663.addEventListener("click", Clicku663, true);
function Clicku663(e)
{

if (true) {

SetWidgetRichText('u661', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u663', PopulateVariables(''));

SetWidgetRichText('u662', PopulateVariables(''));

}

}
gv_vAlignTable['u663'] = 'top';
var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'top';
var u303 = document.getElementById('u303');

var u803 = document.getElementById('u803');
gv_vAlignTable['u803'] = 'top';
var u613 = document.getElementById('u613');
gv_vAlignTable['u613'] = 'center';
var u1397 = document.getElementById('u1397');

u1397.style.cursor = 'pointer';
if (bIE) u1397.attachEvent("onclick", Clicku1397);
else u1397.addEventListener("click", Clicku1397, true);
function Clicku1397(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u1396 = document.getElementById('u1396');
gv_vAlignTable['u1396'] = 'center';
var u1315 = document.getElementById('u1315');

var u732 = document.getElementById('u732');

u732.style.cursor = 'pointer';
if (bIE) u732.attachEvent("onclick", Clicku732);
else u732.addEventListener("click", Clicku732, true);
function Clicku732(e)
{

if (true) {

	SetPanelStateu731("pd1u731");

}

}

var u670 = document.getElementById('u670');
gv_vAlignTable['u670'] = 'center';
var u874 = document.getElementById('u874');
gv_vAlignTable['u874'] = 'center';
var u523 = document.getElementById('u523');

u523.style.cursor = 'pointer';
if (bIE) u523.attachEvent("onclick", Clicku523);
else u523.addEventListener("click", Clicku523, true);
function Clicku523(e)
{

if ((GetCheckState('u523')) == (true)) {

rdo10onCheckEthinicityHL(e);

}

}

var u1319 = document.getElementById('u1319');
gv_vAlignTable['u1319'] = 'center';
var u773 = document.getElementById('u773');
gv_vAlignTable['u773'] = 'top';
var u989 = document.getElementById('u989');
gv_vAlignTable['u989'] = 'center';
var u718 = document.getElementById('u718');

if (bIE) u718.attachEvent("onchange", Changeu718);
else u718.addEventListener("change", Changeu718, true);
function Changeu718(e)
{

if (((GetSelectedOption('u718')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u718')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u718')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u718')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u718')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u718')) != (PopulateVariables('Brother')))))))) {

	SetPanelStateu707("pd1u707");

	MoveWidgetBy('u766',0,55);

	MoveWidgetBy('u774',0,55);

	MoveWidgetBy('u722',0,55);

	MoveWidgetBy('u787',0,55);

	MoveWidgetBy('u839',0,55);

	MoveWidgetBy('u891',0,55);

	MoveWidgetBy('u1033',0,55);

	MoveWidgetBy('u883',0,55);

	MoveWidgetBy('u701',0,55);

	MoveWidgetBy('u870',0,55);

}

}

var u433 = document.getElementById('u433');

var u933 = document.getElementById('u933');

var u285 = document.getElementById('u285');

var u1246 = document.getElementById('u1246');
gv_vAlignTable['u1246'] = 'center';
var u399 = document.getElementById('u399');

var u892 = document.getElementById('u892');

var u1241 = document.getElementById('u1241');

var u1018 = document.getElementById('u1018');
gv_vAlignTable['u1018'] = 'center';
var u343 = document.getElementById('u343');

var u843 = document.getElementById('u843');

u843.style.cursor = 'pointer';
if (bIE) u843.attachEvent("onclick", Clicku843);
else u843.addEventListener("click", Clicku843, true);
function Clicku843(e)
{

if ((GetCheckState('u843')) == (false)) {

rdo23onUncheckEthnicityHL(e);

}

}

var u653 = document.getElementById('u653');
gv_vAlignTable['u653'] = 'center';
var u975 = document.getElementById('u975');

u975.style.cursor = 'pointer';
if (bIE) u975.attachEvent("onclick", Clicku975);
else u975.addEventListener("click", Clicku975, true);
function Clicku975(e)
{

if (true) {

rdo30onClickAddDisConNew(e);

}

}

var u195 = document.getElementById('u195');

u195.style.cursor = 'pointer';
if (bIE) u195.attachEvent("onclick", Clicku195);
else u195.addEventListener("click", Clicku195, true);
function Clicku195(e)
{

if (true) {

SetWidgetRichText('u426', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> MOTHER</b></span>'));

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u1308 = document.getElementById('u1308');

var u578 = document.getElementById('u578');

if (bIE) u578.attachEvent("onchange", Changeu578);
else u578.addEventListener("change", Changeu578, true);
function Changeu578(e)
{

if (true) {

rdo15onChangeDisCon2(e);

}

}

var u1249 = document.getElementById('u1249');

var u1248 = document.getElementById('u1248');
gv_vAlignTable['u1248'] = 'center';
var u267 = document.getElementById('u267');

var u106 = document.getElementById('u106');

var u902 = document.getElementById('u902');

var u712 = document.getElementById('u712');
gv_vAlignTable['u712'] = 'top';
var u1222 = document.getElementById('u1222');
gv_vAlignTable['u1222'] = 'top';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u5 = document.getElementById('u5');

var u473 = document.getElementById('u473');

u473.style.cursor = 'pointer';
if (bIE) u473.attachEvent("onclick", Clicku473);
else u473.addEventListener("click", Clicku473, true);
function Clicku473(e)
{

if ((GetCheckState('u473')) == (false)) {

rdo9onUncheckRaceAIAN(e);

}

}

var u48 = document.getElementById('u48');

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

if (bIE) u48.attachEvent("onmouseover", MouseOveru48);
else u48.addEventListener("mouseover", MouseOveru48, true);
function MouseOveru48(e)
{
if (!IsTrueMouseOver('u48',e)) return;
if (true) {

	SetPanelStateu46("pd2u46");

}

}

if (bIE) u48.attachEvent("onmouseout", MouseOutu48);
else u48.addEventListener("mouseout", MouseOutu48, true);
function MouseOutu48(e)
{
if (!IsTrueMouseOut('u48',e)) return;
if (true) {

	SetPanelStateu46("pd1u46");

}

}

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u826 = document.getElementById('u826');

var u1229 = document.getElementById('u1229');

var u1228 = document.getElementById('u1228');
gv_vAlignTable['u1228'] = 'top';
var u563 = document.getElementById('u563');

var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'top';
var u965 = document.getElementById('u965');
gv_vAlignTable['u965'] = 'center';
var u1204 = document.getElementById('u1204');
gv_vAlignTable['u1204'] = 'top';
var u39 = document.getElementById('u39');

var u89 = document.getElementById('u89');

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'top';
var u680 = document.getElementById('u680');

var u884 = document.getElementById('u884');

u884.style.cursor = 'pointer';
if (bIE) u884.attachEvent("onclick", Clicku884);
else u884.addEventListener("click", Clicku884, true);
function Clicku884(e)
{

if (true) {

rdo25onClickHideHI(e);

}

}

var u498 = document.getElementById('u498');
gv_vAlignTable['u498'] = 'top';
var u998 = document.getElementById('u998');

var u701 = document.getElementById('u701');

var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'top';
var u942 = document.getElementById('u942');

var u752 = document.getElementById('u752');

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u981 = document.getElementById('u981');
gv_vAlignTable['u981'] = 'center';
var u409 = document.getElementById('u409');

var u909 = document.getElementById('u909');

var u1259 = document.getElementById('u1259');
gv_vAlignTable['u1259'] = 'top';
var u742 = document.getElementById('u742');

u742.style.cursor = 'pointer';
if (bIE) u742.attachEvent("onclick", Clicku742);
else u742.addEventListener("click", Clicku742, true);
function Clicku742(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u742')) == (true))) {

SetCheckState('u742', true);

SetCheckState('u744', false);

SetCheckState('u746', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u742'));

	SetPanelStateu722("pd1u722");

	MoveWidgetBy('u774',0,90);

	MoveWidgetBy('u787',0,90);

	MoveWidgetBy('u839',0,90);

	MoveWidgetBy('u891',0,90);

	MoveWidgetBy('u1033',0,90);

	MoveWidgetBy('u883',0,90);

	MoveWidgetBy('u701',0,90);

	MoveWidgetBy('u870',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u742')) == (true))) {

SetCheckState('u742', true);

SetCheckState('u744', false);

SetCheckState('u746', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u742'));

	SetPanelStateu722("pd1u722");

	MoveWidgetBy('u701',0,0);

	MoveWidgetBy('u774',0,0);

	MoveWidgetBy('u787',0,0);

	MoveWidgetBy('u839',0,0);

	MoveWidgetBy('u891',0,0);

	MoveWidgetBy('u883',0,0);

	MoveWidgetBy('u1033',0,0);

	MoveWidgetBy('u870',0,0);

}

}

var u662 = document.getElementById('u662');
gv_vAlignTable['u662'] = 'top';
var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'top';
var u319 = document.getElementById('u319');

var u819 = document.getElementById('u819');
gv_vAlignTable['u819'] = 'top';
var u629 = document.getElementById('u629');

var u1101 = document.getElementById('u1101');

var u572 = document.getElementById('u572');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u1076 = document.getElementById('u1076');
gv_vAlignTable['u1076'] = 'top';
var u425 = document.getElementById('u425');

var u925 = document.getElementById('u925');
gv_vAlignTable['u925'] = 'center';
var u1073 = document.getElementById('u1073');

var u539 = document.getElementById('u539');

var u1071 = document.getElementById('u1071');

var u1070 = document.getElementById('u1070');

var u1345 = document.getElementById('u1345');
gv_vAlignTable['u1345'] = 'center';
var u1344 = document.getElementById('u1344');

var u1084 = document.getElementById('u1084');

if (bIE) u1084.attachEvent("onchange", Changeu1084);
else u1084.addEventListener("change", Changeu1084, true);
function Changeu1084(e)
{

if (((GetSelectedOption('u1084')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u1084')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u1084')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u1084')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u1084')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u1084')) != (PopulateVariables('Brother')))))))) {

	SetPanelStateu1073("pd1u1073");

	MoveWidgetBy('u1132',0,55);

	MoveWidgetBy('u1140',0,55);

	MoveWidgetBy('u1088',0,55);

	MoveWidgetBy('u1153',0,55);

	MoveWidgetBy('u1205',0,55);

	MoveWidgetBy('u1257',0,55);

	MoveWidgetBy('u1399',0,55);

	MoveWidgetBy('u1249',0,55);

	MoveWidgetBy('u1067',0,55);

	MoveWidgetBy('u1236',0,55);

}

}

var u631 = document.getElementById('u631');

var u835 = document.getElementById('u835');

var u1080 = document.getElementById('u1080');
gv_vAlignTable['u1080'] = 'top';
var u449 = document.getElementById('u449');

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'top';
var u983 = document.getElementById('u983');
gv_vAlignTable['u983'] = 'center';
var u1077 = document.getElementById('u1077');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u359 = document.getElementById('u359');

u359.style.cursor = 'pointer';
if (bIE) u359.attachEvent("onclick", Clicku359);
else u359.addEventListener("click", Clicku359, true);
function Clicku359(e)
{

if (true) {

	SetPanelVisibilityu340("hidden");

}

}

var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u669 = document.getElementById('u669');

var u508 = document.getElementById('u508');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u155 = document.getElementById('u155');

var u761 = document.getElementById('u761');
gv_vAlignTable['u761'] = 'top';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u804 = document.getElementById('u804');

var u579 = document.getElementById('u579');

var u418 = document.getElementById('u418');

var u918 = document.getElementById('u918');
gv_vAlignTable['u918'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{

if (true) {

	NewWindow("Help.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=500", true, 500, 500);

}

}
gv_vAlignTable['u22'] = 'top';
var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", u53Click);
else u53.addEventListener("click", u53Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u53LinksClick'></DIV>")
var u53LinksClick = document.getElementById('u53LinksClick');
function u53Click(e) 
{

	ToggleLinks(e, 'u53LinksClick');
}

InsertBeforeEnd(u53LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u53Clickua46e8f56b98b4ea0b16d4bbf2aa51c4e(event)'>ifMyInfoSaved</div>");
function u53Clickua46e8f56b98b4ea0b16d4bbf2aa51c4e(e)
{

	self.location.href="Save_History.html" + GetQuerystring();

	ToggleLinks(e, 'u53LinksClick');
}

InsertBeforeEnd(u53LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u53Clicku9a6b767ebb9d4a4e922e606dd290c64f(event)'>ifMyInfoNotSaved</div>");
function u53Clicku9a6b767ebb9d4a4e922e606dd290c64f(e)
{

	SetPanelStateu340("pd2u340");

	SetPanelVisibilityu340("");

	ToggleLinks(e, 'u53LinksClick');
}

if (bIE) u53.attachEvent("onmouseover", MouseOveru53);
else u53.addEventListener("mouseover", MouseOveru53, true);
function MouseOveru53(e)
{
if (!IsTrueMouseOver('u53',e)) return;
if (true) {

	SetPanelStateu50("pd1u50");

}

}

if (bIE) u53.attachEvent("onmouseout", MouseOutu53);
else u53.addEventListener("mouseout", MouseOutu53, true);
function MouseOutu53(e)
{
if (!IsTrueMouseOut('u53',e)) return;
if (true) {

	SetPanelStateu50("pd2u50");

}

}

var u375 = document.getElementById('u375');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'top';
var u1309 = document.getElementById('u1309');

var u638 = document.getElementById('u638');

u638.style.cursor = 'pointer';
if (bIE) u638.attachEvent("onclick", Clicku638);
else u638.addEventListener("click", Clicku638, true);
function Clicku638(e)
{

if (true) {

rdo17onClickAddDisCon2(e);

}

}

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{

if (true) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u730 = document.getElementById('u730');
gv_vAlignTable['u730'] = 'top';
var u934 = document.getElementById('u934');
gv_vAlignTable['u934'] = 'center';
var u548 = document.getElementById('u548');

u548.style.cursor = 'pointer';
if (bIE) u548.attachEvent("onclick", Clicku548);
else u548.addEventListener("click", Clicku548, true);
function Clicku548(e)
{

if (true) {

	NewWindow("help_Ashkenazi_Jew.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u548'] = 'top';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u865 = document.getElementById('u865');
gv_vAlignTable['u865'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u85 = document.getElementById('u85');

var u66 = document.getElementById('u66');

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u844 = document.getElementById('u844');
gv_vAlignTable['u844'] = 'top';
var u654 = document.getElementById('u654');

var u492 = document.getElementById('u492');

var u768 = document.getElementById('u768');

var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", u57Click);
else u57.addEventListener("click", u57Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u57LinksClick'></DIV>")
var u57LinksClick = document.getElementById('u57LinksClick');
function u57Click(e) 
{

	ToggleLinks(e, 'u57LinksClick');
}

InsertBeforeEnd(u57LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u57Clicku9121b14016674713a237ed9c5a006dbf(event)'>ifMyInfoSaved</div>");
function u57Clicku9121b14016674713a237ed9c5a006dbf(e)
{

	self.location.href="View_History_Report.html" + GetQuerystring();

	ToggleLinks(e, 'u57LinksClick');
}

InsertBeforeEnd(u57LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u57Clickuc70f3a1fb9aa422a8c76456aa6c3bddc(event)'>ifMyInfoNotSaved</div>");
function u57Clickuc70f3a1fb9aa422a8c76456aa6c3bddc(e)
{

	SetPanelStateu340("pd3u340");

	SetPanelVisibilityu340("");

	ToggleLinks(e, 'u57LinksClick');
}

if (bIE) u57.attachEvent("onmouseover", MouseOveru57);
else u57.addEventListener("mouseover", MouseOveru57, true);
function MouseOveru57(e)
{
if (!IsTrueMouseOver('u57',e)) return;
if (true) {

	SetPanelStateu54("pd1u54");

}

}

if (bIE) u57.attachEvent("onmouseout", MouseOutu57);
else u57.addEventListener("mouseout", MouseOutu57, true);
function MouseOutu57(e)
{
if (!IsTrueMouseOut('u57',e)) return;
if (true) {

	SetPanelStateu54("pd2u54");

}

}

var u517 = document.getElementById('u517');

var u1287 = document.getElementById('u1287');

var u949 = document.getElementById('u949');

var u564 = document.getElementById('u564');

u564.style.cursor = 'pointer';
if (bIE) u564.attachEvent("onclick", Clicku564);
else u564.addEventListener("click", Clicku564, true);
function Clicku564(e)
{

if (true) {

rdo12onClickShowHI(e);

}

}

var u403 = document.getElementById('u403');

u403.style.cursor = 'pointer';
if (bIE) u403.attachEvent("onclick", Clicku403);
else u403.addEventListener("click", Clicku403, true);
function Clicku403(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

	SetPanelVisibilityu340("hidden");

}

}

var u903 = document.getElementById('u903');
gv_vAlignTable['u903'] = 'top';
var u678 = document.getElementById('u678');

var u1127 = document.getElementById('u1127');
gv_vAlignTable['u1127'] = 'top';
var u770 = document.getElementById('u770');

var u974 = document.getElementById('u974');

if (bIE) u974.attachEvent("onchange", Changeu974);
else u974.addEventListener("change", Changeu974, true);
function Changeu974(e)
{

if (true) {

rdo30onChangeDisConAgeNew(e);

}

}

var u623 = document.getElementById('u623');

if (bIE) u623.attachEvent("onchange", Changeu623);
else u623.addEventListener("change", Changeu623, true);
function Changeu623(e)
{

if (true) {

rdo17onChangeDisConAgeL3(e);

}

}

var u1182 = document.getElementById('u1182');
gv_vAlignTable['u1182'] = 'top';
var u385 = document.getElementById('u385');

u385.style.cursor = 'pointer';
if (bIE) u385.attachEvent("onclick", Clicku385);
else u385.addEventListener("click", Clicku385, true);
function Clicku385(e)
{

if (true) {

	SetPanelVisibilityu340("hidden");

}

}

var u1180 = document.getElementById('u1180');

var u1275 = document.getElementById('u1275');

var u1129 = document.getElementById('u1129');
gv_vAlignTable['u1129'] = 'top';
var u589 = document.getElementById('u589');
gv_vAlignTable['u589'] = 'top';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{

if (true) {

}

}

var u533 = document.getElementById('u533');

var u681 = document.getElementById('u681');
gv_vAlignTable['u681'] = 'center';
var u885 = document.getElementById('u885');
gv_vAlignTable['u885'] = 'center';
var u499 = document.getElementById('u499');

var u999 = document.getElementById('u999');

var u1037 = document.getElementById('u1037');
gv_vAlignTable['u1037'] = 'center';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u943 = document.getElementById('u943');

var u753 = document.getElementById('u753');

var u295 = document.getElementById('u295');

var u1369 = document.getElementById('u1369');

var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u838 = document.getElementById('u838');
gv_vAlignTable['u838'] = 'top';
var u367 = document.getElementById('u367');

var u502 = document.getElementById('u502');

u502.style.cursor = 'pointer';
if (bIE) u502.attachEvent("onclick", Clicku502);
else u502.addEventListener("click", Clicku502, true);
function Clicku502(e)
{

if ((GetCheckState('u502')) == (false)) {

rdo9onUncheckRaceNHOPI(e);

}

}

var u959 = document.getElementById('u959');

var u573 = document.getElementById('u573');
gv_vAlignTable['u573'] = 'top';
var u58 = document.getElementById('u58');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u926 = document.getElementById('u926');

var u1179 = document.getElementById('u1179');
gv_vAlignTable['u1179'] = 'top';
var u875 = document.getElementById('u875');

var u688 = document.getElementById('u688');
gv_vAlignTable['u688'] = 'center';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if ((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u724', true);

SetCheckState('u742', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}
else
if ((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u724', true);

SetCheckState('u742', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}

}

var u632 = document.getElementById('u632');
gv_vAlignTable['u632'] = 'center';
var u836 = document.getElementById('u836');

var u1307 = document.getElementById('u1307');

var u484 = document.getElementById('u484');

var u984 = document.getElementById('u984');
gv_vAlignTable['u984'] = 'top';
var u1304 = document.getElementById('u1304');
gv_vAlignTable['u1304'] = 'center';
var u598 = document.getElementById('u598');

var u611 = document.getElementById('u611');
gv_vAlignTable['u611'] = 'center';
var u1301 = document.getElementById('u1301');

var u1300 = document.getElementById('u1300');
gv_vAlignTable['u1300'] = 'center';
var u542 = document.getElementById('u542');

var u401 = document.getElementById('u401');

var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'top';
var u894 = document.getElementById('u894');

var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'top';
var u156 = document.getElementById('u156');

var u762 = document.getElementById('u762');

u762.style.cursor = 'pointer';
if (bIE) u762.attachEvent("onclick", Clicku762);
else u762.addEventListener("click", Clicku762, true);
function Clicku762(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u762')) == (true))) {

SetCheckState('u760', false);

SetCheckState('u762', true);

SetCheckState('u764', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u762'));

	SetPanelStateu722("pd2u722");

	MoveWidgetBy('u774',0,90);

	MoveWidgetBy('u839',0,90);

	MoveWidgetBy('u787',0,90);

	MoveWidgetBy('u891',0,90);

	MoveWidgetBy('u883',0,90);

	MoveWidgetBy('u1033',0,90);

	MoveWidgetBy('u701',0,90);

	MoveWidgetBy('u870',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u762')) == (true))) {

SetCheckState('u760', false);

SetCheckState('u762', true);

SetCheckState('u764', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u762'));

	SetPanelStateu722("pd2u722");

	MoveWidgetBy('u701',0,0);

	MoveWidgetBy('u774',0,0);

	MoveWidgetBy('u891',0,0);

	MoveWidgetBy('u870',0,0);

	MoveWidgetBy('u883',0,0);

	MoveWidgetBy('u1033',0,0);

	MoveWidgetBy('u787',0,0);

	MoveWidgetBy('u839',0,0);

}

}

var u601 = document.getElementById('u601');

u601.style.cursor = 'pointer';
if (bIE) u601.attachEvent("onclick", Clicku601);
else u601.addEventListener("click", Clicku601, true);
function Clicku601(e)
{

if (((GetSelectedOption('u575')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u578')) == (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

	MoveWidgetTo('u571',10,82);

	MoveWidgetTo('u591',10,180);

	MoveWidgetTo('u581',10,205);

	MoveWidgetTo('u598',10,114);

	MoveWidgetTo('u604',10,82);

rdo13onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u575')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u578')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u578')) != (PopulateVariables('Other - Add new'))))) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

	MoveWidgetTo('u591',10,180);

	MoveWidgetTo('u581',10,205);

	MoveWidgetTo('u598',10,114);

	MoveWidgetTo('u604',10,82);

rdo13onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u575')) == (PopulateVariables('Other - Add new'))) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

	MoveWidgetTo('u591',10,180);

	MoveWidgetTo('u581',10,205);

	MoveWidgetTo('u598',10,114);

	MoveWidgetTo('u604',10,82);

rdo13onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u575')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u575')) != (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

rdo13onClickDisConCancel(e);

}

}

var u805 = document.getElementById('u805');
gv_vAlignTable['u805'] = 'top';
var u419 = document.getElementById('u419');

var u799 = document.getElementById('u799');
gv_vAlignTable['u799'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u1280 = document.getElementById('u1280');

var u672 = document.getElementById('u672');

if (bIE) u672.attachEvent("onchange", Changeu672);
else u672.addEventListener("change", Changeu672, true);
function Changeu672(e)
{

if (true) {

rdo17onChangeDisConAgeL1(e);

}

}

var u215 = document.getElementById('u215');

var u525 = document.getElementById('u525');

u525.style.cursor = 'pointer';
if (bIE) u525.attachEvent("onclick", Clicku525);
else u525.addEventListener("click", Clicku525, true);
function Clicku525(e)
{

if ((GetCheckState('u525')) == (false)) {

rdo10onUncheckEthnicityHL(e);

}

}

var u1288 = document.getElementById('u1288');

u1288.style.cursor = 'pointer';
if (bIE) u1288.attachEvent("onclick", Clicku1288);
else u1288.addEventListener("click", Clicku1288, true);
function Clicku1288(e)
{

if (((GetSelectedOption('u1264')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1267')) == (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetTo('u1260',10,82);

	MoveWidgetTo('u1280',10,180);

	MoveWidgetTo('u1270',10,205);

	MoveWidgetTo('u1287',10,114);

	MoveWidgetTo('u1293',10,82);

rdo39onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u1264')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u1267')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u1267')) != (PopulateVariables('Other - Add new'))))) {

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetTo('u1280',10,180);

	MoveWidgetTo('u1270',10,205);

	MoveWidgetTo('u1287',10,114);

	MoveWidgetTo('u1293',10,82);

rdo39onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u1264')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

	MoveWidgetTo('u1280',10,180);

	MoveWidgetTo('u1270',10,205);

	MoveWidgetTo('u1287',10,114);

	MoveWidgetTo('u1293',10,82);

rdo39onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u1264')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1264')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu1260("hidden");

	SetPanelVisibilityu1266("hidden");

rdo39onClickDisConAdd(e);

}

}

var u1065 = document.getElementById('u1065');

var u639 = document.getElementById('u639');
gv_vAlignTable['u639'] = 'center';
var u859 = document.getElementById('u859');
gv_vAlignTable['u859'] = 'top';
var u731 = document.getElementById('u731');

var u935 = document.getElementById('u935');

var u549 = document.getElementById('u549');

var u287 = document.getElementById('u287');

var u0 = document.getElementById('u0');

var u1131 = document.getElementById('u1131');
gv_vAlignTable['u1131'] = 'top';
var u50 = document.getElementById('u50');

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u845 = document.getElementById('u845');

var u163 = document.getElementById('u163');

var u197 = document.getElementById('u197');

u197.style.cursor = 'pointer';
if (bIE) u197.attachEvent("onclick", Clicku197);
else u197.addEventListener("click", Clicku197, true);
function Clicku197(e)
{

if (true) {

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u769 = document.getElementById('u769');
gv_vAlignTable['u769'] = 'top';
var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'center';
var u1386 = document.getElementById('u1386');
gv_vAlignTable['u1386'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u91 = document.getElementById('u91');

var u255 = document.getElementById('u255');

u255.style.cursor = 'pointer';
if (bIE) u255.attachEvent("onclick", Clicku255);
else u255.addEventListener("click", Clicku255, true);
function Clicku255(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'center';
var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'center';
var u904 = document.getElementById('u904');

var u185 = document.getElementById('u185');

var u518 = document.getElementById('u518');

var u7 = document.getElementById('u7');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{

if (true) {

	SetPanelStateu418("pd0u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'top';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u213 = document.getElementById('u213');

u213.style.cursor = 'pointer';
if (bIE) u213.attachEvent("onclick", Clicku213);
else u213.addEventListener("click", Clicku213, true);
function Clicku213(e)
{

if (true) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u624 = document.getElementById('u624');

u624.style.cursor = 'pointer';
if (bIE) u624.attachEvent("onclick", Clicku624);
else u624.addEventListener("click", Clicku624, true);
function Clicku624(e)
{

if (true) {

rdo17onClickAddDisCon3(e);

}

}

var u1147 = document.getElementById('u1147');

var u738 = document.getElementById('u738');
gv_vAlignTable['u738'] = 'top';
var u1144 = document.getElementById('u1144');

var u54 = document.getElementById('u54');

var u928 = document.getElementById('u928');

if (bIE) u928.attachEvent("onchange", Changeu928);
else u928.addEventListener("change", Changeu928, true);
function Changeu928(e)
{

if (true) {

rdo29onChangeDisConAge(e);

}

}

var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'top';
var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{

if ((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u726', true);

SetCheckState('u762', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}
else
if ((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u726', true);

SetCheckState('u762', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}

}

var u682 = document.getElementById('u682');

var u886 = document.getElementById('u886');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

SetWidgetRichText('u426', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> MOTHER</b></span>'));

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'top';
var u944 = document.getElementById('u944');

var u754 = document.getElementById('u754');

var u1387 = document.getElementById('u1387');

var u592 = document.getElementById('u592');

var u1384 = document.getElementById('u1384');
gv_vAlignTable['u1384'] = 'center';
var u67 = document.getElementById('u67');

var u913 = document.getElementById('u913');

u913.style.cursor = 'pointer';
if (bIE) u913.attachEvent("onclick", Clicku913);
else u913.addEventListener("click", Clicku913, true);
function Clicku913(e)
{

if (true) {

SetWidgetRichText('u911', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u913', PopulateVariables(''));

SetWidgetRichText('u912', PopulateVariables(''));

}

}
gv_vAlignTable['u913'] = 'top';
var u1381 = document.getElementById('u1381');

var u977 = document.getElementById('u977');

var u664 = document.getElementById('u664');

var u207 = document.getElementById('u207');

var u778 = document.getElementById('u778');

var u1388 = document.getElementById('u1388');
gv_vAlignTable['u1388'] = 'center';
var u574 = document.getElementById('u574');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u723 = document.getElementById('u723');
gv_vAlignTable['u723'] = 'top';
var u1237 = document.getElementById('u1237');

u1237.style.cursor = 'pointer';
if (bIE) u1237.attachEvent("onclick", Clicku1237);
else u1237.addEventListener("click", Clicku1237, true);
function Clicku1237(e)
{

if (true) {

	SetPanelStateu1236("pd1u1236");

	SetPanelVisibilityu1153("");

	SetPanelVisibilityu1205("");

	MoveWidgetBy('u1257',0,220);

	MoveWidgetBy('u1249',0,220);

	MoveWidgetBy('u1399',0,220);

	MoveWidgetBy('u1067',0,220);

}

}

var u1236 = document.getElementById('u1236');

var u1235 = document.getElementById('u1235');
gv_vAlignTable['u1235'] = 'top';
var u1234 = document.getElementById('u1234');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'top';
var u689 = document.getElementById('u689');

var u337 = document.getElementById('u337');

var u837 = document.getElementById('u837');
gv_vAlignTable['u837'] = 'top';
var u1317 = document.getElementById('u1317');
gv_vAlignTable['u1317'] = 'center';
var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u985 = document.getElementById('u985');
gv_vAlignTable['u985'] = 'top';
var u1314 = document.getElementById('u1314');
gv_vAlignTable['u1314'] = 'center';
var u599 = document.getElementById('u599');

u599.style.cursor = 'pointer';
if (bIE) u599.attachEvent("onclick", Clicku599);
else u599.addEventListener("click", Clicku599, true);
function Clicku599(e)
{

if (((GetSelectedOption('u575')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u578')) == (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

	MoveWidgetTo('u571',10,82);

	MoveWidgetTo('u591',10,180);

	MoveWidgetTo('u581',10,205);

	MoveWidgetTo('u598',10,114);

	MoveWidgetTo('u604',10,82);

rdo13onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u575')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u578')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u578')) != (PopulateVariables('Other - Add new'))))) {

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

	MoveWidgetTo('u591',10,180);

	MoveWidgetTo('u581',10,205);

	MoveWidgetTo('u598',10,114);

	MoveWidgetTo('u604',10,82);

rdo13onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u575')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

	MoveWidgetTo('u591',10,180);

	MoveWidgetTo('u581',10,205);

	MoveWidgetTo('u598',10,114);

	MoveWidgetTo('u604',10,82);

rdo13onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u575')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u575')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu571("hidden");

	SetPanelVisibilityu577("hidden");

rdo13onClickDisConAdd(e);

}

}

var u1312 = document.getElementById('u1312');

if (bIE) u1312.attachEvent("onchange", Changeu1312);
else u1312.addEventListener("change", Changeu1312, true);
function Changeu1312(e)
{

if (true) {

rdo43onChangeDisConAgeL3(e);

}

}

var u1311 = document.getElementById('u1311');

var u1310 = document.getElementById('u1310');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u891 = document.getElementById('u891');

var u395 = document.getElementById('u395');

u395.style.cursor = 'pointer';
if (bIE) u395.attachEvent("onclick", Clicku395);
else u395.addEventListener("click", Clicku395, true);
function Clicku395(e)
{

if (true) {

rdo7onClickDeleteRelYes(e);

}

}

var u521 = document.getElementById('u521');

var u1318 = document.getElementById('u1318');

var u1347 = document.getElementById('u1347');
gv_vAlignTable['u1347'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u467 = document.getElementById('u467');

var u602 = document.getElementById('u602');
gv_vAlignTable['u602'] = 'center';
var u806 = document.getElementById('u806');

var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'center';
var u1006 = document.getElementById('u1006');

var u1005 = document.getElementById('u1005');

var u1004 = document.getElementById('u1004');
gv_vAlignTable['u1004'] = 'center';
var u1003 = document.getElementById('u1003');

var u1002 = document.getElementById('u1002');
gv_vAlignTable['u1002'] = 'center';
var u1001 = document.getElementById('u1001');

var u1000 = document.getElementById('u1000');
gv_vAlignTable['u1000'] = 'center';
var u673 = document.getElementById('u673');

u673.style.cursor = 'pointer';
if (bIE) u673.attachEvent("onclick", Clicku673);
else u673.addEventListener("click", Clicku673, true);
function Clicku673(e)
{

if (true) {

}

}

var u68 = document.getElementById('u68');

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'top';
var u1009 = document.getElementById('u1009');
gv_vAlignTable['u1009'] = 'center';
var u1008 = document.getElementById('u1008');

var u788 = document.getElementById('u788');

var u979 = document.getElementById('u979');
gv_vAlignTable['u979'] = 'center';
var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{

if (true) {

	NewWindow("help_Create_New_History.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u436 = document.getElementById('u436');

u436.style.cursor = 'pointer';
if (bIE) u436.attachEvent("onclick", Clicku436);
else u436.addEventListener("click", Clicku436, true);
function Clicku436(e)
{

if ((GetCheckState('u436')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Female'));

}

}

var u936 = document.getElementById('u936');
gv_vAlignTable['u936'] = 'center';
var u584 = document.getElementById('u584');

var u698 = document.getElementById('u698');

var u642 = document.getElementById('u642');
gv_vAlignTable['u642'] = 'center';
var u846 = document.getElementById('u846');
gv_vAlignTable['u846'] = 'top';
var u494 = document.getElementById('u494');

var u994 = document.getElementById('u994');

if (bIE) u994.attachEvent("onchange", Changeu994);
else u994.addEventListener("change", Changeu994, true);
function Changeu994(e)
{

if (true) {

rdo30onChangeDisCon1L1(e);

}

}

var u609 = document.getElementById('u609');

var u1403 = document.getElementById('u1403');
gv_vAlignTable['u1403'] = 'center';
var u1402 = document.getElementById('u1402');

u1402.style.cursor = 'pointer';
if (bIE) u1402.attachEvent("onclick", Clicku1402);
else u1402.addEventListener("click", Clicku1402, true);
function Clicku1402(e)
{

if (true) {

rdo44onClickCancelInfo(e);

}

}

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u1400 = document.getElementById('u1400');

u1400.style.cursor = 'pointer';
if (bIE) u1400.attachEvent("onclick", Clicku1400);
else u1400.addEventListener("click", Clicku1400, true);
function Clicku1400(e)
{

if (true) {

rdo44onClickSaveInfo(e);

}

}

var u721 = document.getElementById('u721');
gv_vAlignTable['u721'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u566 = document.getElementById('u566');

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u905 = document.getElementById('u905');

var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'top';
var u1335 = document.getElementById('u1335');
gv_vAlignTable['u1335'] = 'center';
var u1334 = document.getElementById('u1334');

var u369 = document.getElementById('u369');

u369.style.cursor = 'pointer';
if (bIE) u369.attachEvent("onclick", Clicku369);
else u369.addEventListener("click", Clicku369, true);
function Clicku369(e)
{

if (true) {

	SetPanelVisibilityu340("hidden");

}

}

var u1332 = document.getElementById('u1332');

var u772 = document.getElementById('u772');

var u315 = document.getElementById('u315');

var u815 = document.getElementById('u815');

var u625 = document.getElementById('u625');
gv_vAlignTable['u625'] = 'center';
var u1256 = document.getElementById('u1256');
gv_vAlignTable['u1256'] = 'center';
var u739 = document.getElementById('u739');

var u1339 = document.getElementById('u1339');

if (bIE) u1339.attachEvent("onchange", Changeu1339);
else u1339.addEventListener("change", Changeu1339, true);
function Changeu1339(e)
{

if (true) {

rdo43onChangeDisCon1New(e);

}

}

var u1338 = document.getElementById('u1338');

var u535 = document.getElementById('u535');

var u946 = document.getElementById('u946');

if (bIE) u946.attachEvent("onchange", Changeu946);
else u946.addEventListener("change", Changeu946, true);
function Changeu946(e)
{

if (true) {

rdo30onChangeDisConAgeL3(e);

}

}

var u649 = document.getElementById('u649');

var u683 = document.getElementById('u683');

var u887 = document.getElementById('u887');

u887.style.cursor = 'pointer';
if (bIE) u887.attachEvent("onclick", Clicku887);
else u887.addEventListener("click", Clicku887, true);
function Clicku887(e)
{

if (true) {

rdo25onClickShowHI(e);

}

}

var u531 = document.getElementById('u531');

var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	NewWindow("help_Create_New_History.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u849 = document.getElementById('u849');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u445 = document.getElementById('u445');

var u945 = document.getElementById('u945');

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'center';
var u297 = document.getElementById('u297');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", u51Click);
else u51.addEventListener("click", u51Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u51LinksClick'></DIV>")
var u51LinksClick = document.getElementById('u51LinksClick');
function u51Click(e) 
{

	ToggleLinks(e, 'u51LinksClick');
}

InsertBeforeEnd(u51LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u51Clickue65b500d61b34d548527ee53b8aefa22(event)'>ifMyInfoSaved</div>");
function u51Clickue65b500d61b34d548527ee53b8aefa22(e)
{

	self.location.href="Save_History.html" + GetQuerystring();

	ToggleLinks(e, 'u51LinksClick');
}

InsertBeforeEnd(u51LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u51Clickudfdaa21d07cd4ad48768a4d09bf5d6e3(event)'>ifMyInfoNotSaved</div>");
function u51Clickudfdaa21d07cd4ad48768a4d09bf5d6e3(e)
{

	SetPanelStateu340("pd2u340");

	SetPanelVisibilityu340("");

	ToggleLinks(e, 'u51LinksClick');
}

if (bIE) u51.attachEvent("onmouseover", MouseOveru51);
else u51.addEventListener("mouseover", MouseOveru51, true);
function MouseOveru51(e)
{
if (!IsTrueMouseOver('u51',e)) return;
if (true) {

	SetPanelStateu50("pd1u50");

}

}

if (bIE) u51.attachEvent("onmouseout", MouseOutu51);
else u51.addEventListener("mouseout", MouseOutu51, true);
function MouseOutu51(e)
{
if (!IsTrueMouseOut('u51',e)) return;
if (true) {

	SetPanelStateu50("pd0u50");

}

}

var u355 = document.getElementById('u355');

var u855 = document.getElementById('u855');

var u665 = document.getElementById('u665');

var u504 = document.getElementById('u504');

var u779 = document.getElementById('u779');
gv_vAlignTable['u779'] = 'top';
var u618 = document.getElementById('u618');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u92 = document.getElementById('u92');

var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

SetWidgetRichText('u426', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> MOTHER</b></span>'));

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u575 = document.getElementById('u575');

if (bIE) u575.attachEvent("onchange", Changeu575);
else u575.addEventListener("change", Changeu575, true);
function Changeu575(e)
{

if (true) {

rdo14onChangeDisCon1(e);

}

}

var u414 = document.getElementById('u414');
gv_vAlignTable['u414'] = 'top';
var u914 = document.getElementById('u914');

var u724 = document.getElementById('u724');

u724.style.cursor = 'pointer';
if (bIE) u724.attachEvent("onclick", Clicku724);
else u724.addEventListener("click", Clicku724, true);
function Clicku724(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u724')) == (true))) {

SetCheckState('u724', true);

SetCheckState('u726', false);

SetCheckState('u728', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u724'));

SetCheckState('u742', true);

	SetPanelStateu722("pd1u722");

	MoveWidgetBy('u774',0,90);

	MoveWidgetBy('u787',0,90);

	MoveWidgetBy('u839',0,90);

	MoveWidgetBy('u891',0,90);

	MoveWidgetBy('u1033',0,90);

	MoveWidgetBy('u883',0,90);

	MoveWidgetBy('u701',0,90);

	MoveWidgetBy('u870',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u724')) == (true))) {

SetCheckState('u724', true);

SetCheckState('u726', false);

SetCheckState('u728', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u724'));

SetCheckState('u742', true);

	SetPanelStateu722("pd1u722");

	MoveWidgetBy('u701',0,90);

	MoveWidgetBy('u774',0,90);

	MoveWidgetBy('u787',0,90);

	MoveWidgetBy('u839',0,90);

	MoveWidgetBy('u891',0,90);

	MoveWidgetBy('u883',0,90);

	MoveWidgetBy('u1033',0,90);

	MoveWidgetBy('u870',0,90);

}

}

var u864 = document.getElementById('u864');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u1157 = document.getElementById('u1157');

u1157.style.cursor = 'pointer';
if (bIE) u1157.attachEvent("onclick", Clicku1157);
else u1157.addEventListener("click", Clicku1157, true);
function Clicku1157(e)
{

if ((GetCheckState('u1157')) == (false)) {

rdo35onUncheckRaceAIAN(e);

}

}

var u634 = document.getElementById('u634');

if (bIE) u634.attachEvent("onchange", Changeu634);
else u634.addEventListener("change", Changeu634, true);
function Changeu634(e)
{

if (true) {

rdo17onChangeDisCon2L2(e);

}

}

var u140 = document.getElementById('u140');

u140.style.cursor = 'pointer';
if (bIE) u140.attachEvent("onclick", Clicku140);
else u140.addEventListener("click", Clicku140, true);
function Clicku140(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u782 = document.getElementById('u782');
gv_vAlignTable['u782'] = 'top';
var u986 = document.getElementById('u986');

u986.style.cursor = 'pointer';
if (bIE) u986.attachEvent("onclick", Clicku986);
else u986.addEventListener("click", Clicku986, true);
function Clicku986(e)
{

if (true) {

SetWidgetRichText('u984', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u986', PopulateVariables(''));

SetWidgetRichText('u985', PopulateVariables(''));

}

}
gv_vAlignTable['u986'] = 'top';
var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", u55Click);
else u55.addEventListener("click", u55Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u55LinksClick'></DIV>")
var u55LinksClick = document.getElementById('u55LinksClick');
function u55Click(e) 
{

	ToggleLinks(e, 'u55LinksClick');
}

InsertBeforeEnd(u55LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u55Clickuf752e47e54a648e283d62fcc9698990c(event)'>ifMyInfoSaved</div>");
function u55Clickuf752e47e54a648e283d62fcc9698990c(e)
{

	self.location.href="View_History_Report.html" + GetQuerystring();

	ToggleLinks(e, 'u55LinksClick');
}

InsertBeforeEnd(u55LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u55Clickud70b9d0ca7a1447894f4ededae1a0e3b(event)'>ifMyInfoNotSaved</div>");
function u55Clickud70b9d0ca7a1447894f4ededae1a0e3b(e)
{

	SetPanelStateu340("pd3u340");

	SetPanelVisibilityu340("");

	ToggleLinks(e, 'u55LinksClick');
}

if (bIE) u55.attachEvent("onmouseover", MouseOveru55);
else u55.addEventListener("mouseover", MouseOveru55, true);
function MouseOveru55(e)
{
if (!IsTrueMouseOver('u55',e)) return;
if (true) {

	SetPanelStateu54("pd1u54");

}

}

if (bIE) u55.attachEvent("onmouseout", MouseOutu55);
else u55.addEventListener("mouseout", MouseOutu55, true);
function MouseOutu55(e)
{
if (!IsTrueMouseOut('u55',e)) return;
if (true) {

	SetPanelStateu54("pd0u54");

}

}

var u1323 = document.getElementById('u1323');

if (bIE) u1323.attachEvent("onchange", Changeu1323);
else u1323.addEventListener("change", Changeu1323, true);
function Changeu1323(e)
{

if (true) {

rdo43onChangeDisCon2L2(e);

}

}

var u1322 = document.getElementById('u1322');

if (bIE) u1322.attachEvent("onchange", Changeu1322);
else u1322.addEventListener("change", Changeu1322, true);
function Changeu1322(e)
{

if (true) {

rdo43onChangeDisCon1L2(e);

}

}

var u1321 = document.getElementById('u1321');
gv_vAlignTable['u1321'] = 'center';
var u1320 = document.getElementById('u1320');

var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'top';
var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'center';
var u896 = document.getElementById('u896');
gv_vAlignTable['u896'] = 'top';
var u1328 = document.getElementById('u1328');
gv_vAlignTable['u1328'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'top';
var u764 = document.getElementById('u764');

u764.style.cursor = 'pointer';
if (bIE) u764.attachEvent("onclick", Clicku764);
else u764.addEventListener("click", Clicku764, true);
function Clicku764(e)
{

if (true) {

}

}

var u307 = document.getElementById('u307');

var u807 = document.getElementById('u807');
gv_vAlignTable['u807'] = 'top';
var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'center';
var u1017 = document.getElementById('u1017');

u1017.style.cursor = 'pointer';
if (bIE) u1017.attachEvent("onclick", Clicku1017);
else u1017.addEventListener("click", Clicku1017, true);
function Clicku1017(e)
{

if (true) {

rdo19onClickCloseRel(e);

}

}

var u1016 = document.getElementById('u1016');
gv_vAlignTable['u1016'] = 'center';
var u1015 = document.getElementById('u1015');

var u1014 = document.getElementById('u1014');

var u1013 = document.getElementById('u1013');

var u1012 = document.getElementById('u1012');

var u1011 = document.getElementById('u1011');
gv_vAlignTable['u1011'] = 'center';
var u1010 = document.getElementById('u1010');

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u75 = document.getElementById('u75');

var u1019 = document.getElementById('u1019');

u1019.style.cursor = 'pointer';
if (bIE) u1019.attachEvent("onclick", Clicku1019);
else u1019.addEventListener("click", Clicku1019, true);
function Clicku1019(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'top';
var u237 = document.getElementById('u237');

u237.style.cursor = 'pointer';
if (bIE) u237.attachEvent("onclick", Clicku237);
else u237.addEventListener("click", Clicku237, true);
function Clicku237(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u789 = document.getElementById('u789');

u789.style.cursor = 'pointer';
if (bIE) u789.attachEvent("onclick", Clicku789);
else u789.addEventListener("click", Clicku789, true);
function Clicku789(e)
{

if ((GetCheckState('u789')) == (true)) {

rdo22onCheckRaceAIAN(e);

}

}

var u1027 = document.getElementById('u1027');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u1024 = document.getElementById('u1024');
gv_vAlignTable['u1024'] = 'center';
var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'top';
var u937 = document.getElementById('u937');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'center';
var u699 = document.getElementById('u699');

var u643 = document.getElementById('u643');

var u847 = document.getElementById('u847');

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'top';
var u347 = document.getElementById('u347');

u347.style.cursor = 'pointer';
if (bIE) u347.attachEvent("onclick", Clicku347);
else u347.addEventListener("click", Clicku347, true);
function Clicku347(e)
{

if (true) {

	SetPanelVisibilityu340("hidden");

}

}

var u833 = document.getElementById('u833');

var u1087 = document.getElementById('u1087');
gv_vAlignTable['u1087'] = 'top';
var u1086 = document.getElementById('u1086');

var u1085 = document.getElementById('u1085');
gv_vAlignTable['u1085'] = 'top';
var u257 = document.getElementById('u257');

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", Clicku257);
else u257.addEventListener("click", Clicku257, true);
function Clicku257(e)
{

if (true) {

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u421',0,-475);

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u1083 = document.getElementById('u1083');
gv_vAlignTable['u1083'] = 'top';
var u567 = document.getElementById('u567');
gv_vAlignTable['u567'] = 'center';
var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'top';
var u906 = document.getElementById('u906');
gv_vAlignTable['u906'] = 'center';
var u1089 = document.getElementById('u1089');
gv_vAlignTable['u1089'] = 'top';
var u1088 = document.getElementById('u1088');

var u477 = document.getElementById('u477');

var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u816 = document.getElementById('u816');
gv_vAlignTable['u816'] = 'top';
var u626 = document.getElementById('u626');

var u1107 = document.getElementById('u1107');
gv_vAlignTable['u1107'] = 'top';
var u1106 = document.getElementById('u1106');
gv_vAlignTable['u1106'] = 'top';
var u1105 = document.getElementById('u1105');

var u1104 = document.getElementById('u1104');
gv_vAlignTable['u1104'] = 'top';
var u1103 = document.getElementById('u1103');

var u1102 = document.getElementById('u1102');
gv_vAlignTable['u1102'] = 'top';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u1100 = document.getElementById('u1100');
gv_vAlignTable['u1100'] = 'top';
var u1363 = document.getElementById('u1363');
gv_vAlignTable['u1363'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u1361 = document.getElementById('u1361');

if (bIE) u1361.attachEvent("onchange", Changeu1361);
else u1361.addEventListener("change", Changeu1361, true);
function Changeu1361(e)
{

if (true) {

rdo43onChangeDisConAgeL1(e);

}

}

var u536 = document.getElementById('u536');
gv_vAlignTable['u536'] = 'top';
var u727 = document.getElementById('u727');
gv_vAlignTable['u727'] = 'top';
var u1109 = document.getElementById('u1109');
gv_vAlignTable['u1109'] = 'top';
var u684 = document.getElementById('u684');
gv_vAlignTable['u684'] = 'center';
var u190 = document.getElementById('u190');

var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'top';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u594 = document.getElementById('u594');

var u798 = document.getElementById('u798');

u798.style.cursor = 'pointer';
if (bIE) u798.attachEvent("onclick", Clicku798);
else u798.addEventListener("click", Clicku798, true);
function Clicku798(e)
{

if ((GetCheckState('u798')) == (false)) {

rdo22onUncheckRaceAsian(e);

}

}

var u709 = document.getElementById('u709');

if (bIE) u709.attachEvent("onchange", Changeu709);
else u709.addEventListener("change", Changeu709, true);
function Changeu709(e)
{

if (((GetSelectedOption('u709')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u709')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u709')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u709')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u709')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u709')) != (PopulateVariables('Brother')))))))) {

	SetPanelStateu707("pd1u707");

	MoveWidgetBy('u766',0,55);

	MoveWidgetBy('u774',0,55);

	MoveWidgetBy('u722',0,55);

	MoveWidgetBy('u787',0,55);

	MoveWidgetBy('u839',0,55);

	MoveWidgetBy('u891',0,55);

	MoveWidgetBy('u1033',0,55);

	MoveWidgetBy('u883',0,55);

	MoveWidgetBy('u701',0,55);

	MoveWidgetBy('u870',0,55);

}

}

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'center';
var u856 = document.getElementById('u856');
gv_vAlignTable['u856'] = 'top';
var u666 = document.getElementById('u666');
gv_vAlignTable['u666'] = 'center';
var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'top';
var u619 = document.getElementById('u619');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'top';
var u415 = document.getElementById('u415');

var u915 = document.getElementById('u915');

var u725 = document.getElementById('u725');
gv_vAlignTable['u725'] = 'top';
var u783 = document.getElementById('u783');

var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u635 = document.getElementById('u635');

var u1128 = document.getElementById('u1128');

u1128.style.cursor = 'pointer';
if (bIE) u1128.attachEvent("onclick", Clicku1128);
else u1128.addEventListener("click", Clicku1128, true);
function Clicku1128(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1128')) == (true))) {

SetCheckState('u1126', false);

SetCheckState('u1128', true);

SetCheckState('u1130', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1128'));

	SetPanelStateu1088("pd2u1088");

	MoveWidgetBy('u1140',0,90);

	MoveWidgetBy('u1205',0,90);

	MoveWidgetBy('u1153',0,90);

	MoveWidgetBy('u1257',0,90);

	MoveWidgetBy('u1249',0,90);

	MoveWidgetBy('u1399',0,90);

	MoveWidgetBy('u1067',0,90);

	MoveWidgetBy('u1236',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1128')) == (true))) {

SetCheckState('u1126', false);

SetCheckState('u1128', true);

SetCheckState('u1130', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1128'));

	SetPanelStateu1088("pd2u1088");

	MoveWidgetBy('u1067',0,0);

	MoveWidgetBy('u1140',0,0);

	MoveWidgetBy('u1257',0,0);

	MoveWidgetBy('u1236',0,0);

	MoveWidgetBy('u1249',0,0);

	MoveWidgetBy('u1399',0,0);

	MoveWidgetBy('u1153',0,0);

	MoveWidgetBy('u1205',0,0);

}

}

var u749 = document.getElementById('u749');
gv_vAlignTable['u749'] = 'top';
var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'top';
var u987 = document.getElementById('u987');

var u70 = document.getElementById('u70');

var u510 = document.getElementById('u510');

var u659 = document.getElementById('u659');

var u397 = document.getElementById('u397');

u397.style.cursor = 'pointer';
if (bIE) u397.attachEvent("onclick", Clicku397);
else u397.addEventListener("click", Clicku397, true);
function Clicku397(e)
{

if (true) {

	SetPanelVisibilityu340("hidden");

}

}

var u897 = document.getElementById('u897');

var u200 = document.getElementById('u200');

u200.style.cursor = 'pointer';
if (bIE) u200.attachEvent("onclick", Clicku200);
else u200.addEventListener("click", Clicku200, true);
function Clicku200(e)
{

if (true) {

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if (true) {

	NewWindow("help_Create_New_History.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u858 = document.getElementById('u858');
gv_vAlignTable['u858'] = 'top';
var u455 = document.getElementById('u455');

var u955 = document.getElementById('u955');
gv_vAlignTable['u955'] = 'center';
var u765 = document.getElementById('u765');
gv_vAlignTable['u765'] = 'top';
var u604 = document.getElementById('u604');

var u1082 = document.getElementById('u1082');

var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{

if (true) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelStateu418("pd0u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u1026 = document.getElementById('u1026');
gv_vAlignTable['u1026'] = 'center';
var u1025 = document.getElementById('u1025');

u1025.style.cursor = 'pointer';
if (bIE) u1025.attachEvent("onclick", Clicku1025);
else u1025.addEventListener("click", Clicku1025, true);
function Clicku1025(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", u52Click);
else u52.addEventListener("click", u52Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u52LinksClick'></DIV>")
var u52LinksClick = document.getElementById('u52LinksClick');
function u52Click(e) 
{

	ToggleLinks(e, 'u52LinksClick');
}

InsertBeforeEnd(u52LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u52Clicku5509ee6968d04253b87a99a91ea374fa(event)'>ifMyInfoSaved</div>");
function u52Clicku5509ee6968d04253b87a99a91ea374fa(e)
{

	self.location.href="Save_History.html" + GetQuerystring();

	ToggleLinks(e, 'u52LinksClick');
}

InsertBeforeEnd(u52LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u52Clicku0f34e3f82d814986bd8cd25f86899706(event)'>ifMyInfoNotSaved</div>");
function u52Clicku0f34e3f82d814986bd8cd25f86899706(e)
{

	SetPanelStateu340("pd2u340");

	SetPanelVisibilityu340("");

	ToggleLinks(e, 'u52LinksClick');
}

if (bIE) u52.attachEvent("onmouseout", MouseOutu52);
else u52.addEventListener("mouseout", MouseOutu52, true);
function MouseOutu52(e)
{
if (!IsTrueMouseOut('u52',e)) return;
if (true) {

	SetPanelStateu50("pd0u50");

}

}

var u1023 = document.getElementById('u1023');

u1023.style.cursor = 'pointer';
if (bIE) u1023.attachEvent("onclick", Clicku1023);
else u1023.addEventListener("click", Clicku1023, true);
function Clicku1023(e)
{

if (true) {

rdo19onClickCloseRel(e);

}

}

var u1022 = document.getElementById('u1022');
gv_vAlignTable['u1022'] = 'center';
var u1021 = document.getElementById('u1021');

var u1020 = document.getElementById('u1020');
gv_vAlignTable['u1020'] = 'center';
var u675 = document.getElementById('u675');

var u514 = document.getElementById('u514');

var u1349 = document.getElementById('u1349');
gv_vAlignTable['u1349'] = 'center';
var u1029 = document.getElementById('u1029');

u1029.style.cursor = 'pointer';
if (bIE) u1029.attachEvent("onclick", Clicku1029);
else u1029.addEventListener("click", Clicku1029, true);
function Clicku1029(e)
{

if (true) {

rdo19onClickCloseRel(e);

}

}

var u1028 = document.getElementById('u1028');
gv_vAlignTable['u1028'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u1202 = document.getElementById('u1202');

var u1201 = document.getElementById('u1201');

var u734 = document.getElementById('u734');
gv_vAlignTable['u734'] = 'top';
var u1383 = document.getElementById('u1383');

u1383.style.cursor = 'pointer';
if (bIE) u1383.attachEvent("onclick", Clicku1383);
else u1383.addEventListener("click", Clicku1383, true);
function Clicku1383(e)
{

if (true) {

rdo32onClickCloseRel(e);

}

}

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u586 = document.getElementById('u586');

var u65 = document.getElementById('u65');

var u1394 = document.getElementById('u1394');
gv_vAlignTable['u1394'] = 'center';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u1331 = document.getElementById('u1331');
gv_vAlignTable['u1331'] = 'center';
var u216 = document.getElementById('u216');

u216.style.cursor = 'pointer';
if (bIE) u216.attachEvent("onclick", Clicku216);
else u216.addEventListener("click", Clicku216, true);
function Clicku216(e)
{

if (true) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u644 = document.getElementById('u644');
gv_vAlignTable['u644'] = 'center';
var u150 = document.getElementById('u150');

var u496 = document.getElementById('u496');

var u996 = document.getElementById('u996');

u996.style.cursor = 'pointer';
if (bIE) u996.attachEvent("onclick", Clicku996);
else u996.addEventListener("click", Clicku996, true);
function Clicku996(e)
{

if (true) {

}

}

var u771 = document.getElementById('u771');
gv_vAlignTable['u771'] = 'top';
var u1097 = document.getElementById('u1097');

var u1096 = document.getElementById('u1096');
gv_vAlignTable['u1096'] = 'top';
var u1095 = document.getElementById('u1095');
gv_vAlignTable['u1095'] = 'top';
var u1094 = document.getElementById('u1094');

u1094.style.cursor = 'pointer';
if (bIE) u1094.attachEvent("onclick", Clicku1094);
else u1094.addEventListener("click", Clicku1094, true);
function Clicku1094(e)
{

if (true) {

}

}

var u1093 = document.getElementById('u1093');
gv_vAlignTable['u1093'] = 'top';
var u1092 = document.getElementById('u1092');

u1092.style.cursor = 'pointer';
if (bIE) u1092.attachEvent("onclick", Clicku1092);
else u1092.addEventListener("click", Clicku1092, true);
function Clicku1092(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1092')) == (true))) {

SetCheckState('u1090', false);

SetCheckState('u1092', true);

SetCheckState('u1094', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1092'));

SetCheckState('u1128', true);

	SetPanelStateu1088("pd2u1088");

	MoveWidgetBy('u1140',0,90);

	MoveWidgetBy('u1205',0,90);

	MoveWidgetBy('u1153',0,90);

	MoveWidgetBy('u1257',0,90);

	MoveWidgetBy('u1249',0,90);

	MoveWidgetBy('u1399',0,90);

	MoveWidgetBy('u1067',0,90);

	MoveWidgetBy('u1236',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1092')) == (true))) {

SetCheckState('u1090', false);

SetCheckState('u1092', true);

SetCheckState('u1094', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1092'));

SetCheckState('u1128', true);

	SetPanelStateu1088("pd2u1088");

	MoveWidgetBy('u1067',0,90);

	MoveWidgetBy('u1140',0,90);

	MoveWidgetBy('u1257',0,90);

	MoveWidgetBy('u1236',0,90);

	MoveWidgetBy('u1249',0,90);

	MoveWidgetBy('u1399',0,90);

	MoveWidgetBy('u1153',0,90);

	MoveWidgetBy('u1205',0,90);

}

}

var u407 = document.getElementById('u407');

u407.style.cursor = 'pointer';
if (bIE) u407.attachEvent("onclick", Clicku407);
else u407.addEventListener("click", Clicku407, true);
function Clicku407(e)
{

if (true) {

	SetPanelVisibilityu340("hidden");

rdo7onClickReturnToSaveAs(e);

}

}

var u907 = document.getElementById('u907');

var u1225 = document.getElementById('u1225');
gv_vAlignTable['u1225'] = 'top';
var u1224 = document.getElementById('u1224');
gv_vAlignTable['u1224'] = 'top';
var u793 = document.getElementById('u793');
gv_vAlignTable['u793'] = 'top';
var u1099 = document.getElementById('u1099');

var u1098 = document.getElementById('u1098');

u1098.style.cursor = 'pointer';
if (bIE) u1098.attachEvent("onclick", Clicku1098);
else u1098.addEventListener("click", Clicku1098, true);
function Clicku1098(e)
{

if (true) {

	SetPanelStateu1097("pd1u1097");

}

}

var u1238 = document.getElementById('u1238');
gv_vAlignTable['u1238'] = 'center';
var u774 = document.getElementById('u774');

var u317 = document.getElementById('u317');

var u817 = document.getElementById('u817');

var u1117 = document.getElementById('u1117');

var u1116 = document.getElementById('u1116');

var u1115 = document.getElementById('u1115');
gv_vAlignTable['u1115'] = 'top';
var u1114 = document.getElementById('u1114');
gv_vAlignTable['u1114'] = 'top';
var u1113 = document.getElementById('u1113');
gv_vAlignTable['u1113'] = 'top';
var u1112 = document.getElementById('u1112');

u1112.style.cursor = 'pointer';
if (bIE) u1112.attachEvent("onclick", Clicku1112);
else u1112.addEventListener("click", Clicku1112, true);
function Clicku1112(e)
{

if (true) {

}

}

var u1111 = document.getElementById('u1111');
gv_vAlignTable['u1111'] = 'top';
var u1110 = document.getElementById('u1110');

u1110.style.cursor = 'pointer';
if (bIE) u1110.attachEvent("onclick", Clicku1110);
else u1110.addEventListener("click", Clicku1110, true);
function Clicku1110(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1110')) == (true))) {

SetCheckState('u1108', false);

SetCheckState('u1110', true);

SetCheckState('u1112', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1110'));

	SetPanelStateu1088("pd2u1088");

	MoveWidgetBy('u1140',0,90);

	MoveWidgetBy('u1205',0,90);

	MoveWidgetBy('u1153',0,90);

	MoveWidgetBy('u1257',0,90);

	MoveWidgetBy('u1249',0,90);

	MoveWidgetBy('u1399',0,90);

	MoveWidgetBy('u1067',0,90);

	MoveWidgetBy('u1236',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1110')) == (true))) {

SetCheckState('u1108', false);

SetCheckState('u1110', true);

SetCheckState('u1112', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1110'));

	SetPanelStateu1088("pd2u1088");

	MoveWidgetBy('u1067',0,0);

	MoveWidgetBy('u1140',0,0);

	MoveWidgetBy('u1257',0,0);

	MoveWidgetBy('u1236',0,0);

	MoveWidgetBy('u1249',0,0);

	MoveWidgetBy('u1399',0,0);

	MoveWidgetBy('u1153',0,0);

	MoveWidgetBy('u1205',0,0);

}

}

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u1262 = document.getElementById('u1262');
gv_vAlignTable['u1262'] = 'top';
var u537 = document.getElementById('u537');

var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'top';
var u1119 = document.getElementById('u1119');

var u685 = document.getElementById('u685');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u1269 = document.getElementById('u1269');
gv_vAlignTable['u1269'] = 'top';
var u447 = document.getElementById('u447');

var u947 = document.getElementById('u947');

u947.style.cursor = 'pointer';
if (bIE) u947.attachEvent("onclick", Clicku947);
else u947.addEventListener("click", Clicku947, true);
function Clicku947(e)
{

if (true) {

rdo30onClickAddDisCon3(e);

}

}

var u561 = document.getElementById('u561');

u561.style.cursor = 'pointer';
if (bIE) u561.attachEvent("onclick", Clicku561);
else u561.addEventListener("click", Clicku561, true);
function Clicku561(e)
{

if (true) {

rdo12onClickHideHI(e);

}

}

var u595 = document.getElementById('u595');
gv_vAlignTable['u595'] = 'center';
var u205 = document.getElementById('u205');

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{

if (true) {

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u756 = document.getElementById('u756');

var u1244 = document.getElementById('u1244');

var u1047 = document.getElementById('u1047');

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'top';
var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'center';
var u667 = document.getElementById('u667');

var u506 = document.getElementById('u506');

var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'center';
var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u1075 = document.getElementById('u1075');

if (bIE) u1075.attachEvent("onchange", Changeu1075);
else u1075.addEventListener("change", Changeu1075, true);
function Changeu1075(e)
{

if (((GetSelectedOption('u1075')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u1075')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u1075')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u1075')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u1075')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u1075')) != (PopulateVariables('Brother')))))))) {

	SetPanelStateu1073("pd1u1073");

	MoveWidgetBy('u1132',0,55);

	MoveWidgetBy('u1140',0,55);

	MoveWidgetBy('u1088',0,55);

	MoveWidgetBy('u1153',0,55);

	MoveWidgetBy('u1205',0,55);

	MoveWidgetBy('u1257',0,55);

	MoveWidgetBy('u1399',0,55);

	MoveWidgetBy('u1249',0,55);

	MoveWidgetBy('u1067',0,55);

	MoveWidgetBy('u1236',0,55);

}

}

var u1074 = document.getElementById('u1074');
gv_vAlignTable['u1074'] = 'top';
var u1187 = document.getElementById('u1187');
gv_vAlignTable['u1187'] = 'top';
var u1072 = document.getElementById('u1072');

var u1185 = document.getElementById('u1185');
gv_vAlignTable['u1185'] = 'top';
var u1184 = document.getElementById('u1184');

u1184.style.cursor = 'pointer';
if (bIE) u1184.attachEvent("onclick", Clicku1184);
else u1184.addEventListener("click", Clicku1184, true);
function Clicku1184(e)
{

if ((GetCheckState('u1184')) == (true)) {

rdo35onCheckRaceNHOPI(e);

}

}

var u1183 = document.getElementById('u1183');

var u577 = document.getElementById('u577');

var u416 = document.getElementById('u416');

u416.style.cursor = 'pointer';
if (bIE) u416.attachEvent("onclick", Clicku416);
else u416.addEventListener("click", Clicku416, true);
function Clicku416(e)
{

if (true) {

	SetPanelVisibilityu340("hidden");

rdo7onClickCloseMsgPleaseWait(e);

}

}

var u916 = document.getElementById('u916');
gv_vAlignTable['u916'] = 'center';
var u726 = document.getElementById('u726');

u726.style.cursor = 'pointer';
if (bIE) u726.attachEvent("onclick", Clicku726);
else u726.addEventListener("click", Clicku726, true);
function Clicku726(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u726')) == (true))) {

SetCheckState('u724', false);

SetCheckState('u726', true);

SetCheckState('u728', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u726'));

SetCheckState('u762', true);

	SetPanelStateu722("pd2u722");

	MoveWidgetBy('u774',0,90);

	MoveWidgetBy('u839',0,90);

	MoveWidgetBy('u787',0,90);

	MoveWidgetBy('u891',0,90);

	MoveWidgetBy('u883',0,90);

	MoveWidgetBy('u1033',0,90);

	MoveWidgetBy('u701',0,90);

	MoveWidgetBy('u870',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u726')) == (true))) {

SetCheckState('u724', false);

SetCheckState('u726', true);

SetCheckState('u728', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u726'));

SetCheckState('u762', true);

	SetPanelStateu722("pd2u722");

	MoveWidgetBy('u701',0,90);

	MoveWidgetBy('u774',0,90);

	MoveWidgetBy('u891',0,90);

	MoveWidgetBy('u870',0,90);

	MoveWidgetBy('u883',0,90);

	MoveWidgetBy('u1033',0,90);

	MoveWidgetBy('u787',0,90);

	MoveWidgetBy('u839',0,90);

}

}

var u1079 = document.getElementById('u1079');

var u1078 = document.getElementById('u1078');
gv_vAlignTable['u1078'] = 'top';
var u1189 = document.getElementById('u1189');
gv_vAlignTable['u1189'] = 'top';
var u1188 = document.getElementById('u1188');

var u922 = document.getElementById('u922');

u922.style.cursor = 'pointer';
if (bIE) u922.attachEvent("onclick", Clicku922);
else u922.addEventListener("click", Clicku922, true);
function Clicku922(e)
{

if (((GetSelectedOption('u898')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u901')) == (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetTo('u894',10,82);

	MoveWidgetTo('u914',10,180);

	MoveWidgetTo('u904',10,205);

	MoveWidgetTo('u921',10,114);

	MoveWidgetTo('u927',10,82);

rdo26onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u898')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u901')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u901')) != (PopulateVariables('Other - Add new'))))) {

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetTo('u914',10,180);

	MoveWidgetTo('u904',10,205);

	MoveWidgetTo('u921',10,114);

	MoveWidgetTo('u927',10,82);

rdo26onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u898')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

	MoveWidgetTo('u914',10,180);

	MoveWidgetTo('u904',10,205);

	MoveWidgetTo('u921',10,114);

	MoveWidgetTo('u927',10,82);

rdo26onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u898')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u898')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu894("hidden");

	SetPanelVisibilityu900("hidden");

rdo26onClickDisConAdd(e);

}

}

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u693 = document.getElementById('u693');

var u636 = document.getElementById('u636');

var u1207 = document.getElementById('u1207');

u1207.style.cursor = 'pointer';
if (bIE) u1207.attachEvent("onclick", Clicku1207);
else u1207.addEventListener("click", Clicku1207, true);
function Clicku1207(e)
{

if ((GetCheckState('u1207')) == (true)) {

rdo36onCheckEthinicityHL(e);

}

}

var u1206 = document.getElementById('u1206');

var u1205 = document.getElementById('u1205');

var u784 = document.getElementById('u784');
gv_vAlignTable['u784'] = 'top';
var u1203 = document.getElementById('u1203');
gv_vAlignTable['u1203'] = 'top';
var u1091 = document.getElementById('u1091');
gv_vAlignTable['u1091'] = 'top';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u1200 = document.getElementById('u1200');
gv_vAlignTable['u1200'] = 'top';
var u963 = document.getElementById('u963');

var u546 = document.getElementById('u546');

var u1209 = document.getElementById('u1209');

u1209.style.cursor = 'pointer';
if (bIE) u1209.attachEvent("onclick", Clicku1209);
else u1209.addEventListener("click", Clicku1209, true);
function Clicku1209(e)
{

if ((GetCheckState('u1209')) == (false)) {

rdo36onUncheckEthnicityHL(e);

}

}

var u694 = document.getElementById('u694');

u694.style.cursor = 'pointer';
if (bIE) u694.attachEvent("onclick", Clicku694);
else u694.addEventListener("click", Clicku694, true);
function Clicku694(e)
{

if (true) {

rdo18onClickSaveInfo(e);

}

}

var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'top';
var u956 = document.getElementById('u956');

if (bIE) u956.attachEvent("onchange", Changeu956);
else u956.addEventListener("change", Changeu956, true);
function Changeu956(e)
{

if (true) {

rdo30onChangeDisCon1L2(e);

}

}

var u766 = document.getElementById('u766');

var u605 = document.getElementById('u605');

if (bIE) u605.attachEvent("onchange", Changeu605);
else u605.addEventListener("change", Changeu605, true);
function Changeu605(e)
{

if (true) {

rdo16onChangeDisConAge(e);

}

}

var u719 = document.getElementById('u719');
gv_vAlignTable['u719'] = 'top';
var u1036 = document.getElementById('u1036');

u1036.style.cursor = 'pointer';
if (bIE) u1036.attachEvent("onclick", Clicku1036);
else u1036.addEventListener("click", Clicku1036, true);
function Clicku1036(e)
{

if (true) {

rdo31onClickCancelInfo(e);

}

}

var u1035 = document.getElementById('u1035');
gv_vAlignTable['u1035'] = 'center';
var u1034 = document.getElementById('u1034');

u1034.style.cursor = 'pointer';
if (bIE) u1034.attachEvent("onclick", Clicku1034);
else u1034.addEventListener("click", Clicku1034, true);
function Clicku1034(e)
{

if (true) {

rdo31onClickSaveInfo(e);

}

}

var u1033 = document.getElementById('u1033');

var u1032 = document.getElementById('u1032');
gv_vAlignTable['u1032'] = 'center';
var u1031 = document.getElementById('u1031');

u1031.style.cursor = 'pointer';
if (bIE) u1031.attachEvent("onclick", Clicku1031);
else u1031.addEventListener("click", Clicku1031, true);
function Clicku1031(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u1030 = document.getElementById('u1030');
gv_vAlignTable['u1030'] = 'center';
var u676 = document.getElementById('u676');

var u515 = document.getElementById('u515');

var u1393 = document.getElementById('u1393');

var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{

if ((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u726', true);

SetCheckState('u762', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}
else
if ((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u726', true);

SetCheckState('u762', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}

}

var u1039 = document.getElementById('u1039');

var u1038 = document.getElementById('u1038');

var u735 = document.getElementById('u735');

var u1306 = document.getElementById('u1306');

if (bIE) u1306.attachEvent("onchange", Changeu1306);
else u1306.addEventListener("change", Changeu1306, true);
function Changeu1306(e)
{

if (true) {

rdo43onChangeDisCon2L3(e);

}

}

var u241 = document.getElementById('u241');

u241.style.cursor = 'pointer';
if (bIE) u241.attachEvent("onclick", Clicku241);
else u241.addEventListener("click", Clicku241, true);
function Clicku241(e)
{

if (true) {

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u421',0,-475);

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u587 = document.getElementById('u587');
gv_vAlignTable['u587'] = 'center';
var u1327 = document.getElementById('u1327');

u1327.style.cursor = 'pointer';
if (bIE) u1327.attachEvent("onclick", Clicku1327);
else u1327.addEventListener("click", Clicku1327, true);
function Clicku1327(e)
{

if (true) {

rdo43onClickAddDisCon2(e);

}

}

var u1303 = document.getElementById('u1303');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u1324 = document.getElementById('u1324');

var u645 = document.getElementById('u645');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u759 = document.getElementById('u759');
gv_vAlignTable['u759'] = 'top';
var u497 = document.getElementById('u497');

var u997 = document.getElementById('u997');
gv_vAlignTable['u997'] = 'center';
var u593 = document.getElementById('u593');
gv_vAlignTable['u593'] = 'center';
var u800 = document.getElementById('u800');

var u71 = document.getElementById('u71');

var u555 = document.getElementById('u555');

var u377 = document.getElementById('u377');

u377.style.cursor = 'pointer';
if (bIE) u377.attachEvent("onclick", Clicku377);
else u377.addEventListener("click", Clicku377, true);
function Clicku377(e)
{

if (true) {

	SetPanelVisibilityu340("hidden");

}

}

var u704 = document.getElementById('u704');

var u863 = document.getElementById('u863');

var u210 = document.getElementById('u210');

var u62 = document.getElementById('u62');

var u775 = document.getElementById('u775');
gv_vAlignTable['u775'] = 'top';
var u614 = document.getElementById('u614');

var u1139 = document.getElementById('u1139');
gv_vAlignTable['u1139'] = 'top';
var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", Clicku120);
else u120.addEventListener("click", Clicku120, true);
function Clicku120(e)
{

if (true) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u1126 = document.getElementById('u1126');

u1126.style.cursor = 'pointer';
if (bIE) u1126.attachEvent("onclick", Clicku1126);
else u1126.addEventListener("click", Clicku1126, true);
function Clicku1126(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1126')) == (true))) {

SetCheckState('u1126', true);

SetCheckState('u1128', false);

SetCheckState('u1130', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1126'));

	SetPanelStateu1088("pd1u1088");

	MoveWidgetBy('u1140',0,90);

	MoveWidgetBy('u1153',0,90);

	MoveWidgetBy('u1205',0,90);

	MoveWidgetBy('u1257',0,90);

	MoveWidgetBy('u1399',0,90);

	MoveWidgetBy('u1249',0,90);

	MoveWidgetBy('u1067',0,90);

	MoveWidgetBy('u1236',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1126')) == (true))) {

SetCheckState('u1126', true);

SetCheckState('u1128', false);

SetCheckState('u1130', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1126'));

	SetPanelStateu1088("pd1u1088");

	MoveWidgetBy('u1067',0,0);

	MoveWidgetBy('u1140',0,0);

	MoveWidgetBy('u1153',0,0);

	MoveWidgetBy('u1205',0,0);

	MoveWidgetBy('u1257',0,0);

	MoveWidgetBy('u1249',0,0);

	MoveWidgetBy('u1399',0,0);

	MoveWidgetBy('u1236',0,0);

}

}

var u1125 = document.getElementById('u1125');
gv_vAlignTable['u1125'] = 'top';
var u1124 = document.getElementById('u1124');

if (bIE) u1124.attachEvent("onchange", Changeu1124);
else u1124.addEventListener("change", Changeu1124, true);
function Changeu1124(e)
{

if (true) {

rdo34onChangeDisConAge(e);

}

}

var u1123 = document.getElementById('u1123');

if (bIE) u1123.attachEvent("onchange", Changeu1123);
else u1123.addEventListener("change", Changeu1123, true);
function Changeu1123(e)
{

if (true) {

rdo33onChangeCauseOfDeath(e);

}

}

var u1122 = document.getElementById('u1122');

var u1121 = document.getElementById('u1121');

var u1120 = document.getElementById('u1120');

var u973 = document.getElementById('u973');

if (bIE) u973.attachEvent("onchange", Changeu973);
else u973.addEventListener("change", Changeu973, true);
function Changeu973(e)
{

if (true) {

rdo30onChangeDisCon1New(e);

}

}

var u340 = document.getElementById('u340');

var u686 = document.getElementById('u686');
gv_vAlignTable['u686'] = 'center';
var u158 = document.getElementById('u158');

var u1177 = document.getElementById('u1177');
gv_vAlignTable['u1177'] = 'top';
var u1176 = document.getElementById('u1176');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u1174 = document.getElementById('u1174');

var u744 = document.getElementById('u744');

u744.style.cursor = 'pointer';
if (bIE) u744.attachEvent("onclick", Clicku744);
else u744.addEventListener("click", Clicku744, true);
function Clicku744(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u744')) == (true))) {

SetCheckState('u742', false);

SetCheckState('u744', true);

SetCheckState('u746', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u744'));

	SetPanelStateu722("pd2u722");

	MoveWidgetBy('u774',0,90);

	MoveWidgetBy('u839',0,90);

	MoveWidgetBy('u787',0,90);

	MoveWidgetBy('u891',0,90);

	MoveWidgetBy('u883',0,90);

	MoveWidgetBy('u1033',0,90);

	MoveWidgetBy('u701',0,90);

	MoveWidgetBy('u870',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u744')) == (true))) {

SetCheckState('u742', false);

SetCheckState('u744', true);

SetCheckState('u746', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u744'));

	SetPanelStateu722("pd2u722");

	MoveWidgetBy('u701',0,0);

	MoveWidgetBy('u774',0,0);

	MoveWidgetBy('u891',0,0);

	MoveWidgetBy('u870',0,0);

	MoveWidgetBy('u883',0,0);

	MoveWidgetBy('u1033',0,0);

	MoveWidgetBy('u787',0,0);

	MoveWidgetBy('u839',0,0);

}

}

var u250 = document.getElementById('u250');

u250.style.cursor = 'pointer';
if (bIE) u250.attachEvent("onclick", Clicku250);
else u250.addEventListener("click", Clicku250, true);
function Clicku250(e)
{

if (true) {

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u421',0,-475);

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u596 = document.getElementById('u596');

var u964 = document.getElementById('u964');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u1178 = document.getElementById('u1178');

var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'top';
var u1197 = document.getElementById('u1197');
gv_vAlignTable['u1197'] = 'top';
var u1196 = document.getElementById('u1196');

var u1195 = document.getElementById('u1195');
gv_vAlignTable['u1195'] = 'top';
var u1194 = document.getElementById('u1194');

var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'top';
var u1192 = document.getElementById('u1192');

var u417 = document.getElementById('u417');
gv_vAlignTable['u417'] = 'center';
var u917 = document.getElementById('u917');

var u305 = document.getElementById('u305');

var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'top';
var u1199 = document.getElementById('u1199');

var u1198 = document.getElementById('u1198');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u327 = document.getElementById('u327');

var u827 = document.getElementById('u827');
gv_vAlignTable['u827'] = 'top';
var u637 = document.getElementById('u637');

if (bIE) u637.attachEvent("onchange", Changeu637);
else u637.addEventListener("change", Changeu637, true);
function Changeu637(e)
{

if (true) {

rdo17onChangeDisConAgeL2(e);

}

}

var u1217 = document.getElementById('u1217');

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u1215 = document.getElementById('u1215');

var u785 = document.getElementById('u785');

var u940 = document.getElementById('u940');

if (bIE) u940.attachEvent("onchange", Changeu940);
else u940.addEventListener("change", Changeu940, true);
function Changeu940(e)
{

if (true) {

rdo30onChangeDisCon2L3(e);

}

}

var u1212 = document.getElementById('u1212');
gv_vAlignTable['u1212'] = 'top';
var u291 = document.getElementById('u291');

var u1210 = document.getElementById('u1210');
gv_vAlignTable['u1210'] = 'top';
var u547 = document.getElementById('u547');
gv_vAlignTable['u547'] = 'top';
var u1219 = document.getElementById('u1219');

var u695 = document.getElementById('u695');
gv_vAlignTable['u695'] = 'center';
var u873 = document.getElementById('u873');

u873.style.cursor = 'pointer';
if (bIE) u873.attachEvent("onclick", Clicku873);
else u873.addEventListener("click", Clicku873, true);
function Clicku873(e)
{

if (true) {

	SetPanelStateu870("pd0u870");

	SetPanelVisibilityu787("hidden");

	SetPanelVisibilityu839("hidden");

	MoveWidgetBy('u701',0,-220);

	MoveWidgetBy('u891',0,-220);

	MoveWidgetBy('u883',0,-220);

	MoveWidgetBy('u1033',0,-220);

}

}

var u1090 = document.getElementById('u1090');

u1090.style.cursor = 'pointer';
if (bIE) u1090.attachEvent("onclick", Clicku1090);
else u1090.addEventListener("click", Clicku1090, true);
function Clicku1090(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1090')) == (true))) {

SetCheckState('u1090', true);

SetCheckState('u1092', false);

SetCheckState('u1094', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1090'));

SetCheckState('u1108', true);

	SetPanelStateu1088("pd1u1088");

	MoveWidgetBy('u1140',0,90);

	MoveWidgetBy('u1153',0,90);

	MoveWidgetBy('u1205',0,90);

	MoveWidgetBy('u1257',0,90);

	MoveWidgetBy('u1399',0,90);

	MoveWidgetBy('u1249',0,90);

	MoveWidgetBy('u1067',0,90);

	MoveWidgetBy('u1236',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1090')) == (true))) {

SetCheckState('u1090', true);

SetCheckState('u1092', false);

SetCheckState('u1094', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1090'));

SetCheckState('u1108', true);

	SetPanelStateu1088("pd1u1088");

	MoveWidgetBy('u1067',0,90);

	MoveWidgetBy('u1140',0,90);

	MoveWidgetBy('u1153',0,90);

	MoveWidgetBy('u1205',0,90);

	MoveWidgetBy('u1257',0,90);

	MoveWidgetBy('u1249',0,90);

	MoveWidgetBy('u1399',0,90);

	MoveWidgetBy('u1236',0,90);

}

}

var u457 = document.getElementById('u457');

var u957 = document.getElementById('u957');

if (bIE) u957.attachEvent("onchange", Changeu957);
else u957.addEventListener("change", Changeu957, true);
function Changeu957(e)
{

if (true) {

rdo30onChangeDisCon2L2(e);

}

}

var u767 = document.getElementById('u767');
gv_vAlignTable['u767'] = 'top';
var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'top';
var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelStateu418("pd0u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u895 = document.getElementById('u895');

var u1045 = document.getElementById('u1045');

var u1044 = document.getElementById('u1044');
gv_vAlignTable['u1044'] = 'top';
var u1043 = document.getElementById('u1043');

var u1042 = document.getElementById('u1042');
gv_vAlignTable['u1042'] = 'center';
var u1041 = document.getElementById('u1041');

var u1040 = document.getElementById('u1040');
gv_vAlignTable['u1040'] = 'center';
var u677 = document.getElementById('u677');
gv_vAlignTable['u677'] = 'center';
var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'top';
var u1049 = document.getElementById('u1049');

var u760 = document.getElementById('u760');

u760.style.cursor = 'pointer';
if (bIE) u760.attachEvent("onclick", Clicku760);
else u760.addEventListener("click", Clicku760, true);
function Clicku760(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u760')) == (true))) {

SetCheckState('u760', true);

SetCheckState('u762', false);

SetCheckState('u764', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u760'));

	SetPanelStateu722("pd1u722");

	MoveWidgetBy('u774',0,90);

	MoveWidgetBy('u787',0,90);

	MoveWidgetBy('u839',0,90);

	MoveWidgetBy('u891',0,90);

	MoveWidgetBy('u1033',0,90);

	MoveWidgetBy('u883',0,90);

	MoveWidgetBy('u701',0,90);

	MoveWidgetBy('u870',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u760')) == (true))) {

SetCheckState('u760', true);

SetCheckState('u762', false);

SetCheckState('u764', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u760'));

	SetPanelStateu722("pd1u722");

	MoveWidgetBy('u701',0,0);

	MoveWidgetBy('u774',0,0);

	MoveWidgetBy('u787',0,0);

	MoveWidgetBy('u839',0,0);

	MoveWidgetBy('u891',0,0);

	MoveWidgetBy('u883',0,0);

	MoveWidgetBy('u1033',0,0);

	MoveWidgetBy('u870',0,0);

}

}

var u1286 = document.getElementById('u1286');
gv_vAlignTable['u1286'] = 'center';
var u1285 = document.getElementById('u1285');

var u1284 = document.getElementById('u1284');
gv_vAlignTable['u1284'] = 'center';
var u1277 = document.getElementById('u1277');
gv_vAlignTable['u1277'] = 'top';
var u1276 = document.getElementById('u1276');
gv_vAlignTable['u1276'] = 'center';
var u136 = document.getElementById('u136');

u136.style.cursor = 'pointer';
if (bIE) u136.attachEvent("onclick", Clicku136);
else u136.addEventListener("click", Clicku136, true);
function Clicku136(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u1274 = document.getElementById('u1274');
gv_vAlignTable['u1274'] = 'center';
var u736 = document.getElementById('u736');
gv_vAlignTable['u736'] = 'top';
var u1272 = document.getElementById('u1272');
gv_vAlignTable['u1272'] = 'center';
var u1289 = document.getElementById('u1289');
gv_vAlignTable['u1289'] = 'center';
var u390 = document.getElementById('u390');
gv_vAlignTable['u390'] = 'center';
var u890 = document.getElementById('u890');
gv_vAlignTable['u890'] = 'center';
var u177 = document.getElementById('u177');

var u646 = document.getElementById('u646');
gv_vAlignTable['u646'] = 'center';
var u152 = document.getElementById('u152');

var u794 = document.getElementById('u794');

var u246 = document.getElementById('u246');

u246.style.cursor = 'pointer';
if (bIE) u246.attachEvent("onclick", Clicku246);
else u246.addEventListener("click", Clicku246, true);
function Clicku246(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u556 = document.getElementById('u556');

u556.style.cursor = 'pointer';
if (bIE) u556.attachEvent("onclick", Clicku556);
else u556.addEventListener("click", Clicku556, true);
function Clicku556(e)
{

if (true) {

rdo11onClickShowPI(e);

}

}

var u705 = document.getElementById('u705');

var u211 = document.getElementById('u211');

var u776 = document.getElementById('u776');

var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'center';
var u365 = document.getElementById('u365');

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u1136 = document.getElementById('u1136');

var u1135 = document.getElementById('u1135');
gv_vAlignTable['u1135'] = 'top';
var u1134 = document.getElementById('u1134');

var u1133 = document.getElementById('u1133');
gv_vAlignTable['u1133'] = 'top';
var u1132 = document.getElementById('u1132');

var u948 = document.getElementById('u948');
gv_vAlignTable['u948'] = 'center';
var u1130 = document.getElementById('u1130');

u1130.style.cursor = 'pointer';
if (bIE) u1130.attachEvent("onclick", Clicku1130);
else u1130.addEventListener("click", Clicku1130, true);
function Clicku1130(e)
{

if (true) {

}

}

var u1368 = document.getElementById('u1368');
gv_vAlignTable['u1368'] = 'center';
var u1181 = document.getElementById('u1181');

var u341 = document.getElementById('u341');

var u687 = document.getElementById('u687');

var u745 = document.getElementById('u745');
gv_vAlignTable['u745'] = 'top';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u597 = document.getElementById('u597');
gv_vAlignTable['u597'] = 'center';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'center';
var u900 = document.getElementById('u900');

var u655 = document.getElementById('u655');

var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{

if (true) {

}

}

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u810 = document.getElementById('u810');

var u633 = document.getElementById('u633');

if (bIE) u633.attachEvent("onchange", Changeu633);
else u633.addEventListener("change", Changeu633, true);
function Changeu633(e)
{

if (true) {

rdo17onChangeDisCon1L2(e);

}

}

var u660 = document.getElementById('u660');
gv_vAlignTable['u660'] = 'center';
var u1377 = document.getElementById('u1377');
gv_vAlignTable['u1377'] = 'center';
var u714 = document.getElementById('u714');
gv_vAlignTable['u714'] = 'top';
var u146 = document.getElementById('u146');

var u1374 = document.getElementById('u1374');

var u220 = document.getElementById('u220');

var u1373 = document.getElementById('u1373');
gv_vAlignTable['u1373'] = 'center';
var u1372 = document.getElementById('u1372');

var u1371 = document.getElementById('u1371');

var u1370 = document.getElementById('u1370');
gv_vAlignTable['u1370'] = 'center';
var u1167 = document.getElementById('u1167');
gv_vAlignTable['u1167'] = 'top';
var u1165 = document.getElementById('u1165');
gv_vAlignTable['u1165'] = 'top';
var u1379 = document.getElementById('u1379');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u1226 = document.getElementById('u1226');

var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'top';
var u786 = document.getElementById('u786');
gv_vAlignTable['u786'] = 'top';
var u1223 = document.getElementById('u1223');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u1221 = document.getElementById('u1221');

var u1220 = document.getElementById('u1220');
gv_vAlignTable['u1220'] = 'top';
var u1169 = document.getElementById('u1169');
gv_vAlignTable['u1169'] = 'top';
var u1168 = document.getElementById('u1168');

var u1216 = document.getElementById('u1216');
gv_vAlignTable['u1216'] = 'top';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u696 = document.getElementById('u696');

u696.style.cursor = 'pointer';
if (bIE) u696.attachEvent("onclick", Clicku696);
else u696.addEventListener("click", Clicku696, true);
function Clicku696(e)
{

if (true) {

rdo18onClickCancelInfo(e);

}

}

var u1213 = document.getElementById('u1213');

var u792 = document.getElementById('u792');
gv_vAlignTable['u792'] = 'top';
var u1211 = document.getElementById('u1211');

var u607 = document.getElementById('u607');

var u1218 = document.getElementById('u1218');
gv_vAlignTable['u1218'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u170 = document.getElementById('u170');

var u1297 = document.getElementById('u1297');
gv_vAlignTable['u1297'] = 'center';
var u1279 = document.getElementById('u1279');

u1279.style.cursor = 'pointer';
if (bIE) u1279.attachEvent("onclick", Clicku1279);
else u1279.addEventListener("click", Clicku1279, true);
function Clicku1279(e)
{

if (true) {

SetWidgetRichText('u1277', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u1279', PopulateVariables(''));

SetWidgetRichText('u1278', PopulateVariables(''));

}

}
gv_vAlignTable['u1279'] = 'top';
var u1295 = document.getElementById('u1295');
gv_vAlignTable['u1295'] = 'top';
var u1294 = document.getElementById('u1294');

if (bIE) u1294.attachEvent("onchange", Changeu1294);
else u1294.addEventListener("change", Changeu1294, true);
function Changeu1294(e)
{

if (true) {

rdo42onChangeDisConAge(e);

}

}

var u1293 = document.getElementById('u1293');

var u1292 = document.getElementById('u1292');

var u427 = document.getElementById('u427');

u427.style.cursor = 'pointer';
if (bIE) u427.attachEvent("onclick", Clicku427);
else u427.addEventListener("click", Clicku427, true);
function Clicku427(e)
{

if (true) {

rdo8onClickCloseMe(e);

}

}

var u927 = document.getElementById('u927');

var u737 = document.getElementById('u737');

var u1299 = document.getElementById('u1299');

var u187 = document.getElementById('u187');

var u729 = document.getElementById('u729');
gv_vAlignTable['u729'] = 'top';
var u325 = document.getElementById('u325');

var u647 = document.getElementById('u647');

var u1055 = document.getElementById('u1055');

var u582 = document.getElementById('u582');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u795 = document.getElementById('u795');

var u1064 = document.getElementById('u1064');
gv_vAlignTable['u1064'] = 'center';
var u1063 = document.getElementById('u1063');

u1063.style.cursor = 'pointer';
if (bIE) u1063.attachEvent("onclick", Clicku1063);
else u1063.addEventListener("click", Clicku1063, true);
function Clicku1063(e)
{

if (true) {

	NewWindow("help_Add_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u1062 = document.getElementById('u1062');
gv_vAlignTable['u1062'] = 'center';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'center';
var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'center';
var u706 = document.getElementById('u706');

var u1069 = document.getElementById('u1069');
gv_vAlignTable['u1069'] = 'center';
var u1068 = document.getElementById('u1068');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'top';
var u692 = document.getElementById('u692');
gv_vAlignTable['u692'] = 'center';
var u777 = document.getElementById('u777');
gv_vAlignTable['u777'] = 'top';
var u616 = document.getElementById('u616');

if (bIE) u616.attachEvent("onchange", Changeu616);
else u616.addEventListener("change", Changeu616, true);
function Changeu616(e)
{

if (true) {

rdo17onChangeDisCon1L3(e);

}

}

var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{

if (true) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u421',0,-475);

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u1146 = document.getElementById('u1146');
gv_vAlignTable['u1146'] = 'top';
var u1145 = document.getElementById('u1145');
gv_vAlignTable['u1145'] = 'top';
var u476 = document.getElementById('u476');

var u1143 = document.getElementById('u1143');
gv_vAlignTable['u1143'] = 'top';
var u962 = document.getElementById('u962');
gv_vAlignTable['u962'] = 'center';
var u1141 = document.getElementById('u1141');
gv_vAlignTable['u1141'] = 'top';
var u1140 = document.getElementById('u1140');

var u545 = document.getElementById('u545');

var u1149 = document.getElementById('u1149');

var u1148 = document.getElementById('u1148');
gv_vAlignTable['u1148'] = 'top';
var u180 = document.getElementById('u180');

u180.style.cursor = 'pointer';
if (bIE) u180.attachEvent("onclick", Clicku180);
else u180.addEventListener("click", Clicku180, true);
function Clicku180(e)
{

if (true) {

	SetPanelStateu340("pd5u340");

	SetPanelVisibilityu340("");

}

}

var u1385 = document.getElementById('u1385');

u1385.style.cursor = 'pointer';
if (bIE) u1385.attachEvent("onclick", Clicku1385);
else u1385.addEventListener("click", Clicku1385, true);
function Clicku1385(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u490 = document.getElementById('u490');

var u990 = document.getElementById('u990');

var u1382 = document.getElementById('u1382');
gv_vAlignTable['u1382'] = 'center';
var u1326 = document.getElementById('u1326');

if (bIE) u1326.attachEvent("onchange", Changeu1326);
else u1326.addEventListener("change", Changeu1326, true);
function Changeu1326(e)
{

if (true) {

rdo43onChangeDisConAgeL2(e);

}

}

var u1325 = document.getElementById('u1325');

var u746 = document.getElementById('u746');

u746.style.cursor = 'pointer';
if (bIE) u746.attachEvent("onclick", Clicku746);
else u746.addEventListener("click", Clicku746, true);
function Clicku746(e)
{

if (true) {

}

}

var u252 = document.getElementById('u252');

var u1389 = document.getElementById('u1389');

u1389.style.cursor = 'pointer';
if (bIE) u1389.attachEvent("onclick", Clicku1389);
else u1389.addEventListener("click", Clicku1389, true);
function Clicku1389(e)
{

if (true) {

rdo32onClickCloseRel(e);

}

}

var u460 = document.getElementById('u460');

var u656 = document.getElementById('u656');
gv_vAlignTable['u656'] = 'center';
var u1329 = document.getElementById('u1329');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u311 = document.getElementById('u311');

var u811 = document.getElementById('u811');
gv_vAlignTable['u811'] = 'top';
var u129 = document.getElementById('u129');

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{

if (true) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u421',0,-475);

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u893 = document.getElementById('u893');
gv_vAlignTable['u893'] = 'top';
var u715 = document.getElementById('u715');
gv_vAlignTable['u715'] = 'top';
var u221 = document.getElementById('u221');

u221.style.cursor = 'pointer';
if (bIE) u221.attachEvent("onclick", Clicku221);
else u221.addEventListener("click", Clicku221, true);
function Clicku221(e)
{

if ((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u724', true);

SetCheckState('u742', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}
else
if ((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u724', true);

SetCheckState('u742', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}

}

var u1316 = document.getElementById('u1316');

var u976 = document.getElementById('u976');
gv_vAlignTable['u976'] = 'center';
var u1313 = document.getElementById('u1313');

u1313.style.cursor = 'pointer';
if (bIE) u1313.attachEvent("onclick", Clicku1313);
else u1313.addEventListener("click", Clicku1313, true);
function Clicku1313(e)
{

if (true) {

rdo43onClickAddDisCon3(e);

}

}

var u335 = document.getElementById('u335');

u335.style.cursor = 'pointer';
if (bIE) u335.attachEvent("onclick", Clicku335);
else u335.addEventListener("click", Clicku335, true);
function Clicku335(e)
{

if (true) {

	SetPanelStateu340("pd5u340");

	SetPanelVisibilityu340("");

}

}

var u899 = document.getElementById('u899');
gv_vAlignTable['u899'] = 'top';
var u131 = document.getElementById('u131');

u131.style.cursor = 'pointer';
if (bIE) u131.attachEvent("onclick", Clicku131);
else u131.addEventListener("click", Clicku131, true);
function Clicku131(e)
{

if (true) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u421',0,-475);

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u879 = document.getElementById('u879');

u879.style.cursor = 'pointer';
if (bIE) u879.attachEvent("onclick", Clicku879);
else u879.addEventListener("click", Clicku879, true);
function Clicku879(e)
{

if (true) {

rdo24onClickShowPI(e);

}

}

var u441 = document.getElementById('u441');

var u787 = document.getElementById('u787');

var u1233 = document.getElementById('u1233');

var u1232 = document.getElementById('u1232');

u1232.style.cursor = 'pointer';
if (bIE) u1232.attachEvent("onclick", Clicku1232);
else u1232.addEventListener("click", Clicku1232, true);
function Clicku1232(e)
{

if (true) {

	NewWindow("help_Ashkenazi_Jew.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u1232'] = 'top';
var u995 = document.getElementById('u995');

if (bIE) u995.attachEvent("onchange", Changeu995);
else u995.addEventListener("change", Changeu995, true);
function Changeu995(e)
{

if (true) {

rdo30onChangeDisConAgeL1(e);

}

}

var u1230 = document.getElementById('u1230');

var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'center';
var u862 = document.getElementById('u862');
gv_vAlignTable['u862'] = 'top';
var u351 = document.getElementById('u351');

u351.style.cursor = 'pointer';
if (bIE) u351.attachEvent("onclick", Clicku351);
else u351.addEventListener("click", Clicku351, true);
function Clicku351(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

	SetPanelVisibilityu340("hidden");

}

}

var u697 = document.getElementById('u697');
gv_vAlignTable['u697'] = 'center';
var u500 = document.getElementById('u500');

u500.style.cursor = 'pointer';
if (bIE) u500.attachEvent("onclick", Clicku500);
else u500.addEventListener("click", Clicku500, true);
function Clicku500(e)
{

if ((GetCheckState('u500')) == (true)) {

rdo9onCheckRaceNHOPI(e);

}

}

var u755 = document.getElementById('u755');

var u261 = document.getElementById('u261');

var u1214 = document.getElementById('u1214');
gv_vAlignTable['u1214'] = 'top';
var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'center';
var u910 = document.getElementById('u910');
gv_vAlignTable['u910'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u869 = document.getElementById('u869');
gv_vAlignTable['u869'] = 'top';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u171 = document.getElementById('u171');

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u820 = document.getElementById('u820');

u820.style.cursor = 'pointer';
if (bIE) u820.attachEvent("onclick", Clicku820);
else u820.addEventListener("click", Clicku820, true);
function Clicku820(e)
{

if ((GetCheckState('u820')) == (false)) {

rdo22onUncheckRaceNHOPI(e);

}

}

var u138 = document.getElementById('u138');

u138.style.cursor = 'pointer';
if (bIE) u138.attachEvent("onclick", Clicku138);
else u138.addEventListener("click", Clicku138, true);
function Clicku138(e)
{

if (true) {

SetSelectedOption('u575', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u578', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u605', PopulateVariables(' '));

SetWidgetFormText('u572', PopulateVariables(''));

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u421',0,-475);

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u1166 = document.getElementById('u1166');

var u125 = document.getElementById('u125');

u125.style.cursor = 'pointer';
if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u1164 = document.getElementById('u1164');

u1164.style.cursor = 'pointer';
if (bIE) u1164.attachEvent("onclick", Clicku1164);
else u1164.addEventListener("click", Clicku1164, true);
function Clicku1164(e)
{

if ((GetCheckState('u1164')) == (false)) {

rdo35onUncheckRaceAsian(e);

}

}

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u540 = document.getElementById('u540');
gv_vAlignTable['u540'] = 'top';
var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'top';
var u166 = document.getElementById('u166');

u166.style.cursor = 'pointer';
if (bIE) u166.attachEvent("onclick", Clicku166);
else u166.addEventListener("click", Clicku166, true);
function Clicku166(e)
{

if (true) {

	SetPanelStateu340("pd5u340");

	SetPanelVisibilityu340("");

}

}

var u470 = document.getElementById('u470');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u154 = document.getElementById('u154');

var u796 = document.getElementById('u796');

u796.style.cursor = 'pointer';
if (bIE) u796.attachEvent("onclick", Clicku796);
else u796.addEventListener("click", Clicku796, true);
function Clicku796(e)
{

if ((GetCheckState('u796')) == (true)) {

rdo22onCheckRaceAsian(e);

}

}

var u1341 = document.getElementById('u1341');

u1341.style.cursor = 'pointer';
if (bIE) u1341.attachEvent("onclick", Clicku1341);
else u1341.addEventListener("click", Clicku1341, true);
function Clicku1341(e)
{

if (true) {

rdo43onClickAddDisConNew(e);

}

}

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u1007 = document.getElementById('u1007');
gv_vAlignTable['u1007'] = 'center';
var u1118 = document.getElementById('u1118');

var u708 = document.getElementById('u708');
gv_vAlignTable['u708'] = 'top';
var u1348 = document.getElementById('u1348');

var u707 = document.getElementById('u707');

var u860 = document.getElementById('u860');

var u178 = document.getElementById('u178');

var u1375 = document.getElementById('u1375');
gv_vAlignTable['u1375'] = 'center';
var u617 = document.getElementById('u617');

if (bIE) u617.attachEvent("onchange", Changeu617);
else u617.addEventListener("change", Changeu617, true);
function Changeu617(e)
{

if (true) {

rdo17onChangeDisCon2L3(e);

}

}

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u1156 = document.getElementById('u1156');
gv_vAlignTable['u1156'] = 'top';
var u275 = document.getElementById('u275');

var u1154 = document.getElementById('u1154');

var u1153 = document.getElementById('u1153');

var u1152 = document.getElementById('u1152');
gv_vAlignTable['u1152'] = 'top';
var u1151 = document.getElementById('u1151');

var u1150 = document.getElementById('u1150');
gv_vAlignTable['u1150'] = 'top';
var u527 = document.getElementById('u527');

var u1378 = document.getElementById('u1378');

var u872 = document.getElementById('u872');
gv_vAlignTable['u872'] = 'center';
var u1159 = document.getElementById('u1159');
gv_vAlignTable['u1159'] = 'top';
var u1158 = document.getElementById('u1158');
gv_vAlignTable['u1158'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u1395 = document.getElementById('u1395');

u1395.style.cursor = 'pointer';
if (bIE) u1395.attachEvent("onclick", Clicku1395);
else u1395.addEventListener("click", Clicku1395, true);
function Clicku1395(e)
{

if (true) {

rdo32onClickCloseRel(e);

}

}

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'top';
var u991 = document.getElementById('u991');
gv_vAlignTable['u991'] = 'center';
var u1392 = document.getElementById('u1392');
gv_vAlignTable['u1392'] = 'center';
var u1391 = document.getElementById('u1391');

u1391.style.cursor = 'pointer';
if (bIE) u1391.attachEvent("onclick", Clicku1391);
else u1391.addEventListener("click", Clicku1391, true);
function Clicku1391(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u1390 = document.getElementById('u1390');
gv_vAlignTable['u1390'] = 'center';
var u747 = document.getElementById('u747');
gv_vAlignTable['u747'] = 'top';
var u253 = document.getElementById('u253');

u253.style.cursor = 'pointer';
if (bIE) u253.attachEvent("onclick", Clicku253);
else u253.addEventListener("click", Clicku253, true);
function Clicku253(e)
{

if (true) {

	SetPanelStateu418("pd3u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u1399 = document.getElementById('u1399');

var u1398 = document.getElementById('u1398');
gv_vAlignTable['u1398'] = 'center';
var u657 = document.getElementById('u657');

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'center';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u812 = document.getElementById('u812');

var u848 = document.getElementById('u848');
gv_vAlignTable['u848'] = 'top';
var u1267 = document.getElementById('u1267');

if (bIE) u1267.attachEvent("onchange", Changeu1267);
else u1267.addEventListener("change", Changeu1267, true);
function Changeu1267(e)
{

if (true) {

rdo41onChangeDisCon2(e);

}

}

var u1266 = document.getElementById('u1266');

var u1265 = document.getElementById('u1265');
gv_vAlignTable['u1265'] = 'top';
var u1264 = document.getElementById('u1264');

if (bIE) u1264.attachEvent("onchange", Changeu1264);
else u1264.addEventListener("change", Changeu1264, true);
function Changeu1264(e)
{

if (true) {

rdo40onChangeDisCon1(e);

}

}

var u1263 = document.getElementById('u1263');

var u716 = document.getElementById('u716');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u1268 = document.getElementById('u1268');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u941 = document.getElementById('u941');

var u1245 = document.getElementById('u1245');

u1245.style.cursor = 'pointer';
if (bIE) u1245.attachEvent("onclick", Clicku1245);
else u1245.addEventListener("click", Clicku1245, true);
function Clicku1245(e)
{

if (true) {

rdo37onClickShowPI(e);

}

}

var u857 = document.getElementById('u857');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u1242 = document.getElementById('u1242');

u1242.style.cursor = 'pointer';
if (bIE) u1242.attachEvent("onclick", Clicku1242);
else u1242.addEventListener("click", Clicku1242, true);
function Clicku1242(e)
{

if (true) {

rdo37onClickHidePI(e);

}

}

var u590 = document.getElementById('u590');

u590.style.cursor = 'pointer';
if (bIE) u590.attachEvent("onclick", Clicku590);
else u590.addEventListener("click", Clicku590, true);
function Clicku590(e)
{

if (true) {

SetWidgetRichText('u588', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u590', PopulateVariables(''));

SetWidgetRichText('u589', PopulateVariables(''));

}

}
gv_vAlignTable['u590'] = 'top';
var u1240 = document.getElementById('u1240');
gv_vAlignTable['u1240'] = 'center';
var u781 = document.getElementById('u781');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u852 = document.getElementById('u852');
gv_vAlignTable['u852'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u1108 = document.getElementById('u1108');

u1108.style.cursor = 'pointer';
if (bIE) u1108.attachEvent("onclick", Clicku1108);
else u1108.addEventListener("click", Clicku1108, true);
function Clicku1108(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1108')) == (true))) {

SetCheckState('u1108', true);

SetCheckState('u1110', false);

SetCheckState('u1112', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1108'));

	SetPanelStateu1088("pd1u1088");

	MoveWidgetBy('u1140',0,90);

	MoveWidgetBy('u1153',0,90);

	MoveWidgetBy('u1205',0,90);

	MoveWidgetBy('u1257',0,90);

	MoveWidgetBy('u1399',0,90);

	MoveWidgetBy('u1249',0,90);

	MoveWidgetBy('u1067',0,90);

	MoveWidgetBy('u1236',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1108')) == (true))) {

SetCheckState('u1108', true);

SetCheckState('u1110', false);

SetCheckState('u1112', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1108'));

	SetPanelStateu1088("pd1u1088");

	MoveWidgetBy('u1067',0,0);

	MoveWidgetBy('u1140',0,0);

	MoveWidgetBy('u1153',0,0);

	MoveWidgetBy('u1205',0,0);

	MoveWidgetBy('u1257',0,0);

	MoveWidgetBy('u1249',0,0);

	MoveWidgetBy('u1399',0,0);

	MoveWidgetBy('u1236',0,0);

}

}

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u101 = document.getElementById('u101');

var u411 = document.getElementById('u411');

var u911 = document.getElementById('u911');
gv_vAlignTable['u911'] = 'top';
var u229 = document.getElementById('u229');

u229.style.cursor = 'pointer';
if (bIE) u229.attachEvent("onclick", Clicku229);
else u229.addEventListener("click", Clicku229, true);
function Clicku229(e)
{

if (true) {

	SetPanelStateu418("pd0u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u703 = document.getElementById('u703');
gv_vAlignTable['u703'] = 'center';
var u321 = document.getElementById('u321');

var u821 = document.getElementById('u821');
gv_vAlignTable['u821'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u967 = document.getElementById('u967');
gv_vAlignTable['u967'] = 'center';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{

if (true) {

	SetPanelStateu418("pd0u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'top';
var u1247 = document.getElementById('u1247');

var u1337 = document.getElementById('u1337');

var u1336 = document.getElementById('u1336');

var u451 = document.getElementById('u451');

u451.style.cursor = 'pointer';
if (bIE) u451.attachEvent("onclick", Clicku451);
else u451.addEventListener("click", Clicku451, true);
function Clicku451(e)
{

if ((GetCheckState('u451')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Other'));

}

}

var u797 = document.getElementById('u797');
gv_vAlignTable['u797'] = 'top';
var u1333 = document.getElementById('u1333');
gv_vAlignTable['u1333'] = 'center';
var u269 = document.getElementById('u269');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u1330 = document.getElementById('u1330');

var u841 = document.getElementById('u841');

u841.style.cursor = 'pointer';
if (bIE) u841.attachEvent("onclick", Clicku841);
else u841.addEventListener("click", Clicku841, true);
function Clicku841(e)
{

if ((GetCheckState('u841')) == (true)) {

rdo23onCheckEthinicityHL(e);

}

}

var u1367 = document.getElementById('u1367');

var u1365 = document.getElementById('u1365');

var u1364 = document.getElementById('u1364');

var u361 = document.getElementById('u361');

u361.style.cursor = 'pointer';
if (bIE) u361.attachEvent("onclick", Clicku361);
else u361.addEventListener("click", Clicku361, true);
function Clicku361(e)
{

if (true) {

	self.location.href="Open_Saved_History.html" + GetQuerystring();

	SetPanelVisibilityu340("hidden");

}

}

var u424 = document.getElementById('u424');

var u1362 = document.getElementById('u1362');

u1362.style.cursor = 'pointer';
if (bIE) u1362.attachEvent("onclick", Clicku1362);
else u1362.addEventListener("click", Clicku1362, true);
function Clicku1362(e)
{

if (true) {

}

}

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'top';
var u2 = document.getElementById('u2');

var u828 = document.getElementById('u828');

var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

rdo2onNavClickOpenHistory(e);

}

}

var u671 = document.getElementById('u671');

if (bIE) u671.attachEvent("onchange", Changeu671);
else u671.addEventListener("change", Changeu671, true);
function Changeu671(e)
{

if (true) {

rdo17onChangeDisCon1L1(e);

}

}

var u271 = document.getElementById('u271');

var u465 = document.getElementById('u465');

var u124 = document.getElementById('u124');

var u920 = document.getElementById('u920');
gv_vAlignTable['u920'] = 'center';
var u951 = document.getElementById('u951');
gv_vAlignTable['u951'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u1163 = document.getElementById('u1163');
gv_vAlignTable['u1163'] = 'top';
var u1162 = document.getElementById('u1162');

u1162.style.cursor = 'pointer';
if (bIE) u1162.attachEvent("onclick", Clicku1162);
else u1162.addEventListener("click", Clicku1162, true);
function Clicku1162(e)
{

if ((GetCheckState('u1162')) == (true)) {

rdo35onCheckRaceAsian(e);

}

}

var u1161 = document.getElementById('u1161');

var u1160 = document.getElementById('u1160');

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u830 = document.getElementById('u830');

var u640 = document.getElementById('u640');

var u148 = document.getElementById('u148');

var u182 = document.getElementById('u182');

var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'top';
var u603 = document.getElementById('u603');

var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{

if (true) {

	NewWindow("help_Privacy_and_Security.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u26'] = 'top';
var u1208 = document.getElementById('u1208');
gv_vAlignTable['u1208'] = 'top';
var u550 = document.getElementById('u550');

var u1067 = document.getElementById('u1067');

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u868 = document.getElementById('u868');

var u17 = document.getElementById('u17');

var u164 = document.getElementById('u164');

var u960 = document.getElementById('u960');

if (bIE) u960.attachEvent("onchange", Changeu960);
else u960.addEventListener("change", Changeu960, true);
function Changeu960(e)
{

if (true) {

rdo30onChangeDisConAgeL2(e);

}

}

var u313 = document.getElementById('u313');

var u813 = document.getElementById('u813');
gv_vAlignTable['u813'] = 'top';
var u867 = document.getElementById('u867');

var u717 = document.getElementById('u717');
gv_vAlignTable['u717'] = 'top';
var u870 = document.getElementById('u870');

var u223 = document.getElementById('u223');

u223.style.cursor = 'pointer';
if (bIE) u223.attachEvent("onclick", Clicku223);
else u223.addEventListener("click", Clicku223, true);
function Clicku223(e)
{

if ((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u726', true);

SetCheckState('u762', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}
else
if ((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u726', true);

SetCheckState('u762', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}

}

var u728 = document.getElementById('u728');

u728.style.cursor = 'pointer';
if (bIE) u728.attachEvent("onclick", Clicku728);
else u728.addEventListener("click", Clicku728, true);
function Clicku728(e)
{

if (true) {

}

}

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u189 = document.getElementById('u189');

var u627 = document.getElementById('u627');

var u581 = document.getElementById('u581');

var u133 = document.getElementById('u133');

var u1054 = document.getElementById('u1054');

if (bIE) u1054.attachEvent("onchange", Changeu1054);
else u1054.addEventListener("change", Changeu1054, true);
function Changeu1054(e)
{

if (((GetSelectedOption('u1054')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u1054')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u1054')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u1054')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u1054')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u1054')) != (PopulateVariables('Brother')))))))) {

	SetPanelVisibilityu1045("");

}

}

var u1255 = document.getElementById('u1255');

var u1254 = document.getElementById('u1254');
gv_vAlignTable['u1254'] = 'center';
var u281 = document.getElementById('u281');

var u1252 = document.getElementById('u1252');

var u591 = document.getElementById('u591');

var u1250 = document.getElementById('u1250');

u1250.style.cursor = 'pointer';
if (bIE) u1250.attachEvent("onclick", Clicku1250);
else u1250.addEventListener("click", Clicku1250, true);
function Clicku1250(e)
{

if (true) {

rdo38onClickHideHI(e);

}

}

var u1283 = document.getElementById('u1283');

var u851 = document.getElementById('u851');

var u1059 = document.getElementById('u1059');
gv_vAlignTable['u1059'] = 'center';
var u1058 = document.getElementById('u1058');

u1058.style.cursor = 'pointer';
if (bIE) u1058.attachEvent("onclick", Clicku1058);
else u1058.addEventListener("click", Clicku1058, true);
function Clicku1058(e)
{

if (true) {

	SetPanelVisibilityu337("hidden");

	SetPanelVisibilityu418("hidden");

}

}

var u353 = document.getElementById('u353');

var u853 = document.getElementById('u853');

var u434 = document.getElementById('u434');

u434.style.cursor = 'pointer';
if (bIE) u434.attachEvent("onclick", Clicku434);
else u434.addEventListener("click", Clicku434, true);
function Clicku434(e)
{

if ((GetCheckState('u434')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Male'));

}

}

var u713 = document.getElementById('u713');

var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'top';
var u757 = document.getElementById('u757');

if (bIE) u757.attachEvent("onchange", Changeu757);
else u757.addEventListener("change", Changeu757, true);
function Changeu757(e)
{

if (true) {

rdo20onChangeCauseOfDeath(e);

}

}

var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'top';
var u263 = document.getElementById('u263');

var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if ((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u724', true);

SetCheckState('u742', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu1014("pd2u1014");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}
else
if ((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) {

SetWidgetRichText('u1028', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetSelectedOption('u709', PopulateVariables('Father'));

SetSelectedOption('u718', PopulateVariables('Father'));

SetCheckState('u768', true);

SetCheckState('u724', true);

SetCheckState('u742', true);

	SetPanelStateu418("pd2u418");

	SetPanelStateu875("pd1u875");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu705("hidden");

	MoveWidgetBy('u701',0,-355);

	MoveWidgetBy('u891',0,-355);

	MoveWidgetBy('u883',0,-355);

	MoveWidgetBy('u1033',0,-355);

}

}

var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'center';
var u912 = document.getElementById('u912');
gv_vAlignTable['u912'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u1243 = document.getElementById('u1243');
gv_vAlignTable['u1243'] = 'center';
var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if (true) {

	SetPanelStateu340("pd5u340");

	SetPanelVisibilityu340("");

}

}

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u969 = document.getElementById('u969');
gv_vAlignTable['u969'] = 'center';
var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u822 = document.getElementById('u822');

var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'top';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u982 = document.getElementById('u982');

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'top';
var u880 = document.getElementById('u880');
gv_vAlignTable['u880'] = 'center';
var u690 = document.getElementById('u690');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u142 = document.getElementById('u142');

var u1346 = document.getElementById('u1346');

var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'top';
var u952 = document.getElementById('u952');

var u1343 = document.getElementById('u1343');

var u1342 = document.getElementById('u1342');
gv_vAlignTable['u1342'] = 'center';
var u109 = document.getElementById('u109');

var u1340 = document.getElementById('u1340');

if (bIE) u1340.attachEvent("onchange", Changeu1340);
else u1340.addEventListener("change", Changeu1340, true);
function Changeu1340(e)
{

if (true) {

rdo43onChangeDisConAgeNew(e);

}

}

var u877 = document.getElementById('u877');
gv_vAlignTable['u877'] = 'center';
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'top';
var u1305 = document.getElementById('u1305');

if (bIE) u1305.attachEvent("onchange", Changeu1305);
else u1305.addEventListener("change", Changeu1305, true);
function Changeu1305(e)
{

if (true) {

rdo43onChangeDisCon1L3(e);

}

}

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'top';
var u329 = document.getElementById('u329');

var u829 = document.getElementById('u829');
gv_vAlignTable['u829'] = 'top';
var u1302 = document.getElementById('u1302');
gv_vAlignTable['u1302'] = 'center';
var u1296 = document.getElementById('u1296');

var u1231 = document.getElementById('u1231');
gv_vAlignTable['u1231'] = 'top';
var u898 = document.getElementById('u898');

if (bIE) u898.attachEvent("onchange", Changeu898);
else u898.addEventListener("change", Changeu898, true);
function Changeu898(e)
{

if (true) {

rdo27onChangeDisCon1(e);

}

}

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u421 = document.getElementById('u421');

var u921 = document.getElementById('u921');

var u1175 = document.getElementById('u1175');
gv_vAlignTable['u1175'] = 'top';
var u239 = document.getElementById('u239');

u239.style.cursor = 'pointer';
if (bIE) u239.attachEvent("onclick", Clicku239);
else u239.addEventListener("click", Clicku239, true);
function Clicku239(e)
{

if (true) {

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u1173 = document.getElementById('u1173');
gv_vAlignTable['u1173'] = 'top';
var u1172 = document.getElementById('u1172');

var u1171 = document.getElementById('u1171');
gv_vAlignTable['u1171'] = 'top';
var u1170 = document.getElementById('u1170');

var u861 = document.getElementById('u861');

var u1298 = document.getElementById('u1298');

var u331 = document.getElementById('u331');

u331.style.cursor = 'pointer';
if (bIE) u331.attachEvent("onclick", Clicku331);
else u331.addEventListener("click", Clicku331, true);
function Clicku331(e)
{

if (true) {

	SetPanelStateu340("pd5u340");

	SetPanelVisibilityu340("");

}

}

var u831 = document.getElementById('u831');
gv_vAlignTable['u831'] = 'top';
var u641 = document.getElementById('u641');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u183 = document.getElementById('u183');

var u930 = document.getElementById('u930');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u1137 = document.getElementById('u1137');
gv_vAlignTable['u1137'] = 'top';
var u1282 = document.getElementById('u1282');
gv_vAlignTable['u1282'] = 'center';
var u1281 = document.getElementById('u1281');

var u551 = document.getElementById('u551');
gv_vAlignTable['u551'] = 'top';
var u700 = document.getElementById('u700');
gv_vAlignTable['u700'] = 'center';
var u208 = document.getElementById('u208');

var u971 = document.getElementById('u971');

var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u961 = document.getElementById('u961');

u961.style.cursor = 'pointer';
if (bIE) u961.attachEvent("onclick", Clicku961);
else u961.addEventListener("click", Clicku961, true);
function Clicku961(e)
{

if (true) {

rdo30onClickAddDisCon2(e);

}

}

var u1138 = document.getElementById('u1138');

var u610 = document.getElementById('u610');

var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u8 = document.getElementById('u8');

var u993 = document.getElementById('u993');
gv_vAlignTable['u993'] = 'center';
var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	NewWindow("help_Glossary.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u23'] = 'top';
var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'top';
var u871 = document.getElementById('u871');

u871.style.cursor = 'pointer';
if (bIE) u871.attachEvent("onclick", Clicku871);
else u871.addEventListener("click", Clicku871, true);
function Clicku871(e)
{

if (true) {

	SetPanelStateu870("pd1u870");

	SetPanelVisibilityu787("");

	SetPanelVisibilityu839("");

	MoveWidgetBy('u891',0,220);

	MoveWidgetBy('u883',0,220);

	MoveWidgetBy('u1033',0,220);

	MoveWidgetBy('u701',0,220);

}

}

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'top';
var u1186 = document.getElementById('u1186');

u1186.style.cursor = 'pointer';
if (bIE) u1186.attachEvent("onclick", Clicku1186);
else u1186.addEventListener("click", Clicku1186, true);
function Clicku1186(e)
{

if ((GetCheckState('u1186')) == (false)) {

rdo35onUncheckRaceNHOPI(e);

}

}

var u338 = document.getElementById('u338');

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u277 = document.getElementById('u277');

var u430 = document.getElementById('u430');

var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u740 = document.getElementById('u740');
gv_vAlignTable['u740'] = 'top';
var u248 = document.getElementById('u248');

u248.style.cursor = 'pointer';
if (bIE) u248.attachEvent("onclick", Clicku248);
else u248.addEventListener("click", Clicku248, true);
function Clicku248(e)
{

if (true) {

	SetPanelStateu418("pd0u418");

	SetPanelStateu552("pd1u552");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

	SetPanelVisibilityu429("hidden");

	MoveWidgetBy('u421',0,-475);

	MoveWidgetBy('u568',0,-475);

	MoveWidgetBy('u560',0,-475);

	MoveWidgetBy('u693',0,-475);

}

}

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u558 = document.getElementById('u558');

var u1261 = document.getElementById('u1261');

var u1260 = document.getElementById('u1260');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u679 = document.getElementById('u679');
gv_vAlignTable['u679'] = 'center';
var u650 = document.getElementById('u650');

if (bIE) u650.attachEvent("onchange", Changeu650);
else u650.addEventListener("change", Changeu650, true);
function Changeu650(e)
{

if (true) {

rdo17onChangeDisCon1New(e);

}

}

var u854 = document.getElementById('u854');
gv_vAlignTable['u854'] = 'top';
var u192 = document.getElementById('u192');

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{

if (true) {

SetWidgetRichText('u426', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> MOTHER</b></span>'));

	SetPanelStateu418("pd1u418");

	SetPanelVisibilityu337("");

	SetPanelVisibilityu418("");

}

}

var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'top';
var u968 = document.getElementById('u968');

var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	NewWindow("help_About_FHH.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u27'] = 'top';
var u1404 = document.getElementById('u1404');

var u748 = document.getElementById('u748');
gv_vAlignTable['u748'] = 'top';
var u1401 = document.getElementById('u1401');
gv_vAlignTable['u1401'] = 'center';
var u560 = document.getElementById('u560');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u1081 = document.getElementById('u1081');
gv_vAlignTable['u1081'] = 'top';
var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u878 = document.getElementById('u878');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u970 = document.getElementById('u970');

var u323 = document.getElementById('u323');

var u823 = document.getElementById('u823');
gv_vAlignTable['u823'] = 'top';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'center';
if (window.OnLoad) OnLoad();
