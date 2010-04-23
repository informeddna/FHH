
var PageName = 'My Family History';
var PageId = 'p359d6a14a4b5424b8fe914618c8afa95'
var PageUrl = 'My_Family_History.html'
document.title = 'My Family History';

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

if ((GetGlobalVariableValue('$varNameMe')) == (PopulateVariables(''))) {

	SetPanelStateu65("pd0u65");

	SetPanelStateu62("pd0u62");

	SetPanelStateu72("pd0u72");

	SetPanelStateu79("pd0u79");

	SetPanelStateu39("pd0u39");

}
else
if (((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) && ((GetGlobalVariableValue('$varNameRel')) == (PopulateVariables('')))) {

SetWidgetRichText('u78', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:12px;">FATHER)</b></span></div>'));

SetWidgetRichText('u83', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u85', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u87', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

	SetPanelStateu62("pd0u62");

	SetPanelStateu72("pd2u72");

	SetPanelVisibilityu129("");

}
else
if (((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) && ((GetGlobalVariableValue('$varNameRel')) != (PopulateVariables('')))) {

SetWidgetRichText('u107', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:12px;">FATHER)</b></span></div>'));

SetWidgetRichText('u118', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:12px;"><b>[[varNameRel]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:12px;">BROTHER)</b></span></div>'));

SetWidgetRichText('u123', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u125', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u127', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

	SetPanelStateu62("pd1u62");

	SetPanelStateu72("pd2u72");

	SetPanelStateu39("pd1u39");

	SetPanelStateu108("pd2u108");

	SetPanelVisibilityu129("");

}

if (((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) && ((GetGlobalVariableValue('$varNameRel')) != (PopulateVariables('')))) {

SetWidgetRichText('u118', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:12px;"><b>[[varNameRel]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:12px;">BROTHER)</b></span></div>'));

SetWidgetRichText('u123', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u125', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u127', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

	SetPanelStateu62("pd1u62");

	SetPanelStateu72("pd1u72");

	SetPanelStateu108("pd2u108");

	SetPanelStateu39("pd1u39");

	SetPanelVisibilityu129("");

}

}

eval(GetDynamicPanelScript('u62', 2));

eval(GetDynamicPanelScript('u1112', 1));

eval(GetDynamicPanelScript('u830', 1));

eval(GetDynamicPanelScript('u881', 2));

eval(GetDynamicPanelScript('u1242', 1));

eval(GetDynamicPanelScript('u1325', 1));

eval(GetDynamicPanelScript('u519', 1));

eval(GetDynamicPanelScript('u1371', 1));

eval(GetDynamicPanelScript('u427', 1));

eval(GetDynamicPanelScript('u295', 1));

eval(GetDynamicPanelScript('u748', 2));

eval(GetDynamicPanelScript('u147', 1));

eval(GetDynamicPanelScript('u278', 2));

eval(GetDynamicPanelScript('u108', 3));

eval(GetDynamicPanelScript('u996', 1));

eval(GetDynamicPanelScript('u1125', 1));

eval(GetDynamicPanelScript('u54', 3));

eval(GetDynamicPanelScript('u812', 1));

eval(GetDynamicPanelScript('u575', 1));

eval(GetDynamicPanelScript('u1252', 1));

eval(GetDynamicPanelScript('u898', 1));

eval(GetDynamicPanelScript('u240', 2));

eval(GetDynamicPanelScript('u129', 1));

eval(GetDynamicPanelScript('u890', 2));

eval(GetDynamicPanelScript('u1259', 1));

eval(GetDynamicPanelScript('u372', 1));

eval(GetDynamicPanelScript('u550', 2));

eval(GetDynamicPanelScript('u868', 2));

eval(GetDynamicPanelScript('u895', 1));

eval(GetDynamicPanelScript('u1003', 1));

eval(GetDynamicPanelScript('u358', 1));

eval(GetDynamicPanelScript('u865', 1));

eval(GetDynamicPanelScript('u652', 1));

eval(GetDynamicPanelScript('u579', 1));

eval(GetDynamicPanelScript('u1133', 2));

eval(GetDynamicPanelScript('u46', 3));

eval(GetDynamicPanelScript('u419', 1));

eval(GetDynamicPanelScript('u322', 1));

eval(GetDynamicPanelScript('u411', 1));

eval(GetDynamicPanelScript('u1265', 1));

eval(GetDynamicPanelScript('u327', 1));

eval(GetDynamicPanelScript('u195', 2));

eval(GetDynamicPanelScript('u543', 1));

eval(GetDynamicPanelScript('u662', 1));

eval(GetDynamicPanelScript('u985', 1));

eval(GetDynamicPanelScript('u1198', 1));

eval(GetDynamicPanelScript('u699', 1));

eval(GetDynamicPanelScript('u947', 1));

eval(GetDynamicPanelScript('u607', 1));

eval(GetDynamicPanelScript('u772', 1));

eval(GetDynamicPanelScript('u691', 1));

eval(GetDynamicPanelScript('u572', 1));

eval(GetDynamicPanelScript('u475', 2));

eval(GetDynamicPanelScript('u1060', 3));

eval(GetDynamicPanelScript('u148', 1));

eval(GetDynamicPanelScript('u1012', 3));

eval(GetDynamicPanelScript('u58', 3));

eval(GetDynamicPanelScript('u785', 1));

eval(GetDynamicPanelScript('u1069', 2));

eval(GetDynamicPanelScript('u833', 1));

eval(GetDynamicPanelScript('u1126', 2));

eval(GetDynamicPanelScript('u1235', 1));

eval(GetDynamicPanelScript('u873', 2));

eval(GetDynamicPanelScript('u299', 1));

eval(GetDynamicPanelScript('u428', 1));

eval(GetDynamicPanelScript('u1270', 1));

eval(GetDynamicPanelScript('u602', 1));

eval(GetDynamicPanelScript('u39', 3));

eval(GetDynamicPanelScript('u187', 1));

eval(GetDynamicPanelScript('u902', 1));

eval(GetDynamicPanelScript('u1401', 1));

eval(GetDynamicPanelScript('u214', 1));

eval(GetDynamicPanelScript('u1409', 1));

eval(GetDynamicPanelScript('u975', 1));

eval(GetDynamicPanelScript('u133', 1));

eval(GetDynamicPanelScript('u260', 1));

eval(GetDynamicPanelScript('u400', 1));

eval(GetDynamicPanelScript('u267', 1));

eval(GetDynamicPanelScript('u1155', 2));

eval(GetDynamicPanelScript('u786', 2));

eval(GetDynamicPanelScript('u1152', 1));

eval(GetDynamicPanelScript('u316', 1));

eval(GetDynamicPanelScript('u961', 1));

eval(GetDynamicPanelScript('u1104', 1));

eval(GetDynamicPanelScript('u289', 1));

eval(GetDynamicPanelScript('u1205', 1));

eval(GetDynamicPanelScript('u235', 1));

eval(GetDynamicPanelScript('u1201', 1));

eval(GetDynamicPanelScript('u540', 1));

eval(GetDynamicPanelScript('u858', 1));

eval(GetDynamicPanelScript('u494', 1));

eval(GetDynamicPanelScript('u1208', 2));

eval(GetDynamicPanelScript('u286', 1));

eval(GetDynamicPanelScript('u1336', 1));

eval(GetDynamicPanelScript('u65', 3));

eval(GetDynamicPanelScript('u121', 3));

eval(GetDynamicPanelScript('u569', 1));

eval(GetDynamicPanelScript('u596', 1));

eval(GetDynamicPanelScript('u720', 3));

eval(GetDynamicPanelScript('u919', 1));

eval(GetDynamicPanelScript('u512', 1));

eval(GetDynamicPanelScript('u79', 4));

eval(GetDynamicPanelScript('u520', 2));

eval(GetDynamicPanelScript('u188', 2));

eval(GetDynamicPanelScript('u1039', 1));

eval(GetDynamicPanelScript('u1031', 1));

eval(GetDynamicPanelScript('u566', 1));

eval(GetDynamicPanelScript('u838', 2));

eval(GetDynamicPanelScript('u239', 1));

eval(GetDynamicPanelScript('u393', 1));

eval(GetDynamicPanelScript('u703', 1));

eval(GetDynamicPanelScript('u889', 1));

eval(GetDynamicPanelScript('u101', 3));

eval(GetDynamicPanelScript('u638', 1));

eval(GetDynamicPanelScript('u94', 3));

eval(GetDynamicPanelScript('u1213', 2));

eval(GetDynamicPanelScript('u468', 2));

eval(GetDynamicPanelScript('u287', 2));

eval(GetDynamicPanelScript('u673', 1));

eval(GetDynamicPanelScript('u1343', 1));

eval(GetDynamicPanelScript('u815', 2));

eval(GetDynamicPanelScript('u292', 1));

eval(GetDynamicPanelScript('u1045', 2));

eval(GetDynamicPanelScript('u1044', 1));

eval(GetDynamicPanelScript('u1043', 1));

eval(GetDynamicPanelScript('u50', 3));

eval(GetDynamicPanelScript('u861', 1));

eval(GetDynamicPanelScript('u912', 1));

eval(GetDynamicPanelScript('u567', 2));

eval(GetDynamicPanelScript('u1177', 1));

eval(GetDynamicPanelScript('u704', 1));

eval(GetDynamicPanelScript('u1173', 1));

eval(GetDynamicPanelScript('u1170', 1));

eval(GetDynamicPanelScript('u72', 3));

eval(GetDynamicPanelScript('u925', 1));

eval(GetDynamicPanelScript('u1178', 2));

eval(GetDynamicPanelScript('u793', 2));

eval(GetDynamicPanelScript('u1221', 2));

eval(GetDynamicPanelScript('u1383', 1));

eval(GetDynamicPanelScript('u1287', 1));

eval(GetDynamicPanelScript('u558', 2));

eval(GetDynamicPanelScript('u930', 1));

eval(GetDynamicPanelScript('u1229', 1));

eval(GetDynamicPanelScript('u1301', 1));

eval(GetDynamicPanelScript('u547', 1));

eval(GetDynamicPanelScript('u309', 1));

eval(GetDynamicPanelScript('u892', 1));

eval(GetDynamicPanelScript('u1352', 3));

eval(GetDynamicPanelScript('u1088', 2));

eval(GetDynamicPanelScript('u139', 1));

eval(GetDynamicPanelScript('u382', 1));

eval(GetDynamicPanelScript('u217', 2));

eval(GetDynamicPanelScript('u344', 1));

eval(GetDynamicPanelScript('u136', 6));

eval(GetDynamicPanelScript('u263', 1));

eval(GetDynamicPanelScript('u705', 2));

eval(GetDynamicPanelScript('u589', 1));

eval(GetDynamicPanelScript('u837', 1));

eval(GetDynamicPanelScript('u624', 1));

eval(GetDynamicPanelScript('u729', 2));

eval(GetDynamicPanelScript('u1232', 1));

eval(GetDynamicPanelScript('u1230', 2));

eval(GetDynamicPanelScript('u1391', 1));

eval(GetDynamicPanelScript('u497', 2));

eval(GetDynamicPanelScript('u1315', 1));

eval(GetDynamicPanelScript('u1238', 1));

eval(GetDynamicPanelScript('u270', 2));

eval(GetDynamicPanelScript('u764', 1));

eval(GetDynamicPanelScript('u680', 1));

eval(GetDynamicPanelScript('u467', 1));

eval(GetDynamicPanelScript('u232', 1));

eval(GetDynamicPanelScript('u515', 1));

eval(GetDynamicPanelScript('u1444', 8));

function rdo49onChangeDisCon1(e) {

if ((GetSelectedOption('u1236')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u1236'));

	MoveWidgetBy('u1371',0,32);

	MoveWidgetBy('u1039',0,32);

rdo42onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u1236')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u1233'));

	MoveWidgetBy('u1371',0,32);

	MoveWidgetBy('u1039',0,32);

rdo42onChangeDisCon1(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u1236'));

rdo42onChangeDisCon1(e);

}

}

function rdo49onChangeDisCon2(e) {

if ((GetSelectedOption('u1239')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u1233'));

	MoveWidgetBy('u1371',0,32);

	MoveWidgetBy('u1039',0,32);

rdo42onChangeDisCon2(e);

}
else
if (((GetSelectedOption('u1239')) != (PopulateVariables('Select Specific Cancer'))) || ((GetSelectedOption('u1239')) != (PopulateVariables('Other - Add new')))) {

SetGlobalVariableValue('$varDisCon2Me', GetSelectedOption('u1239'));

rdo42onChangeDisCon2(e);

}

}

function rdo49onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeRel', GetSelectedOption('u1266'));

rdo42onChangeDisConAge(e);

}

}

function rdo49onClickDisConSearch(e) {

}

function rdo49onCheckSearchResult(e) {

}

function rdo49onClickDisConAdd(e) {

if (((GetSelectedOption('u1236')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1236')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u1249', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Rel]]</span>'));

SetWidgetRichText('u1250', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u1251', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u1236', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1239', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1266', PopulateVariables(' '));

SetWidgetFormText('u1233', PopulateVariables(''));

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetBy('u1371',0,0);

	MoveWidgetBy('u1039',0,0);

rdo42onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u1236')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u1233'));

SetWidgetRichText('u1249', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewRel]]</span>'));

SetWidgetRichText('u1250', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u1251', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u1236', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1239', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1266', PopulateVariables(' '));

SetWidgetFormText('u1233', PopulateVariables(''));

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetBy('u1371',0,-32);

	MoveWidgetBy('u1039',0,-32);

rdo42onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u1239')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u1239')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u1249', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Rel]]: [[varDisCon2Rel]]</span>'));

SetWidgetRichText('u1250', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u1251', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u1236', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1239', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1266', PopulateVariables(' '));

SetWidgetFormText('u1233', PopulateVariables(''));

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetBy('u1371',0,-32);

	MoveWidgetBy('u1039',0,-32);

rdo42onClickDisConAdd(e);

}

if ((GetSelectedOption('u1239')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u1233'));

SetWidgetRichText('u1249', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon2Rel]]: [[varDisConNewRel]]</span>'));

SetWidgetRichText('u1250', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u1251', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u1236', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1239', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1266', PopulateVariables(' '));

SetWidgetFormText('u1233', PopulateVariables(''));

	MoveWidgetBy('u1371',0,-64);

	MoveWidgetBy('u1039',0,-64);

rdo42onClickDisConAdd(e);

}

}

function rdo49onClickDisConCancel(e) {

if (((GetSelectedOption('u1236')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1236')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetBy('u1371',0,0);

	MoveWidgetBy('u1039',0,0);

rdo42onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u1236')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetBy('u1371',0,-32);

	MoveWidgetBy('u1039',0,-32);

rdo42onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u1239')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u1239')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetBy('u1371',0,-32);

	MoveWidgetBy('u1039',0,-32);

rdo42onClickDisConCancel(e);

}

if ((GetSelectedOption('u1239')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u1371',0,-64);

	MoveWidgetBy('u1039',0,-64);

rdo42onClickDisConCancel(e);

}

}

function rdo14onChangeDisCon2(e) {

if ((GetSelectedOption('u296')) == (PopulateVariables('Other - Add new'))) {

	SetPanelStateu289("pd0u289");

	SetPanelVisibilityu289("");

	MoveWidgetBy('u309',0,32);

	MoveWidgetBy('u299',0,32);

	MoveWidgetBy('u289',0,32);

	MoveWidgetBy('u316',0,32);

	MoveWidgetBy('u322',0,32);

rdo12onChangeDisCon2(e);

}
else
if (true) {

rdo12onChangeDisCon2(e);

}

}

function rdo15onChangeDisConAge(e) {

if (true) {

rdo12onChangeDisConAge(e);

}

}

function rdo16onChangeDisCon1L1(e) {

if ((GetSelectedOption('u389')) == (PopulateVariables('Cancer'))) {

;

SetSelectedOption('u351', PopulateVariables('Cancer'));

	SetPanelVisibilityu344("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu358("hidden");

	SetPanelVisibilityu382("hidden");

	MoveWidgetBy('u372',0,35);

	MoveWidgetBy('u411',0,35);

	MoveWidgetBy('u400',0,35);

}
else
if ((GetSelectedOption('u389')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u368', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu358("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu344("hidden");

	SetPanelVisibilityu382("hidden");

	MoveWidgetBy('u372',0,35);

	MoveWidgetBy('u411',0,35);

	MoveWidgetBy('u400',0,35);

}

}

function rdo16onChangeDisConAgeL1(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u390'));

}

}

function rdo16onChangeDisCon1L2(e) {

if ((GetSelectedOption('u351')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u368', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu358("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu344("hidden");

	SetPanelVisibilityu382("hidden");

}

}

function rdo16onChangeDisCon2L2(e) {

if ((GetSelectedOption('u352')) == (PopulateVariables('Other Cancer'))) {

;

;

SetSelectedOption('u334', PopulateVariables('Cancer'));

SetSelectedOption('u335', PopulateVariables('Other Cancer'));

	SetPanelVisibilityu327("");

	SetPanelVisibilityu344("hidden");

	SetPanelVisibilityu358("hidden");

	SetPanelVisibilityu382("hidden");

	MoveWidgetBy('u372',0,33);

	MoveWidgetBy('u411',0,33);

	MoveWidgetBy('u400',0,33);

}
else
if ((GetSelectedOption('u352')) != (PopulateVariables('Other Cancer'))) {

;

;

	SetPanelVisibilityu372("");

}

}

function rdo16onChangeDisConAgeL2(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u355'));

}

}

function rdo16onClickAddDisCon2(e) {

if (true) {

SetWidgetRichText('u379', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u380', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u381', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u389', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u390', PopulateVariables(' '));

	SetPanelVisibilityu382("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu344("hidden");

	SetPanelVisibilityu358("hidden");

	MoveWidgetBy('u400',0,-35);

	MoveWidgetBy('u372',0,-35);

	MoveWidgetBy('u411',0,-35);

}

}

function rdo16onChangeDisCon1New(e) {

if ((GetSelectedOption('u368')) == (PopulateVariables('Cancer'))) {

;

SetSelectedOption('u351', PopulateVariables('Cancer'));

	SetPanelVisibilityu344("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu358("hidden");

	SetPanelVisibilityu382("hidden");

}
else
if ((GetSelectedOption('u368')) == (PopulateVariables('Select Disease or Condition'))) {

;

;

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

	SetPanelVisibilityu382("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu344("hidden");

	SetPanelVisibilityu358("hidden");

	MoveWidgetBy('u372',0,-35);

	MoveWidgetBy('u411',0,-35);

	MoveWidgetBy('u400',0,-35);

}

}

function rdo16onChangeDisConAgeNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u369'));

}

}

function rdo16onClickAddDisConNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u367'));

SetWidgetRichText('u379', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

SetWidgetRichText('u380', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u381', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u389', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u390', PopulateVariables(' '));

	SetPanelVisibilityu382("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu344("hidden");

	SetPanelVisibilityu358("hidden");

	MoveWidgetBy('u372',0,-35);

	MoveWidgetBy('u400',0,-35);

	MoveWidgetBy('u411',0,-35);

}

}

function rdo16onChangeDisCon1L3(e) {

if ((GetSelectedOption('u334')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u368', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu358("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu344("hidden");

	SetPanelVisibilityu382("hidden");

	MoveWidgetBy('u372',0,-33);

	MoveWidgetBy('u411',0,-33);

	MoveWidgetBy('u400',0,-33);

}
else
if ((GetSelectedOption('u334')) == (PopulateVariables('Select Disease or Condition'))) {

;

;

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

SetGlobalVariableValue('$varDisConAgeFather', PopulateVariables(''));

	SetPanelVisibilityu372("");

	SetPanelVisibilityu382("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu344("hidden");

	SetPanelVisibilityu358("hidden");

	MoveWidgetBy('u372',0,-68);

	MoveWidgetBy('u411',0,-68);

	MoveWidgetBy('u400',0,-68);

}

}

function rdo16onChangeDisCon2L3(e) {

if ((GetSelectedOption('u335')) != (PopulateVariables('Other Cancer'))) {

;

;

SetSelectedOption('u351', PopulateVariables('Cancer'));

SetSelectedOption('u352', GetSelectedOption('u335'));

	SetPanelVisibilityu344("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu372("hidden");

	SetPanelVisibilityu382("hidden");

	MoveWidgetBy('u372',0,-33);

	MoveWidgetBy('u411',0,-33);

	MoveWidgetBy('u400',0,-33);

}

}

function rdo16onChangeDisConAgeL3(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u341'));

}

}

function rdo16onClickAddDisCon3(e) {

if (true) {

;

SetWidgetRichText('u379', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]: [[varDisCon3]]</span>'));

SetWidgetRichText('u380', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u381', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u389', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u390', PopulateVariables(' '));

	SetPanelVisibilityu382("");

	SetPanelVisibilityu327("hidden");

	SetPanelVisibilityu344("hidden");

	SetPanelVisibilityu358("hidden");

	MoveWidgetBy('u372',0,-68);

	MoveWidgetBy('u400',0,-68);

	MoveWidgetBy('u411',0,-68);

}

}

function rdo17onClickSaveInfo(e) {

if (true) {

rdo7onClickSaveMe(e);

}

}

function rdo17onClickCancelInfo(e) {

if (true) {

rdo7onClickCancelMe(e);

}

}

function rdo1onNavClickSaveHistory(e) {

}

function rdo11onClickHideHI(e) {

if (true) {

	SetPanelStateu278("pd1u278");

	SetPanelVisibilityu286("hidden");

	MoveWidgetBy('u411',0,-285);

	MoveWidgetBy('u139',0,-285);

}

}

function rdo11onClickShowHI(e) {

if (true) {

	SetPanelStateu278("pd0u278");

	SetPanelVisibilityu286("");

	MoveWidgetBy('u411',0,285);

	MoveWidgetBy('u139',0,285);

}

}

function rdo12onChangeDisCon1(e) {

if ((GetSelectedOption('u293')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Me', GetSelectedOption('u293'));

	MoveWidgetBy('u139',0,32);

	MoveWidgetBy('u411',0,32);

rdo7onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u293')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u290'));

	MoveWidgetBy('u139',0,32);

	MoveWidgetBy('u411',0,32);

rdo7onChangeDisCon1(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Me', GetSelectedOption('u293'));

rdo7onChangeDisCon1(e);

}

}

function rdo12onChangeDisCon2(e) {

if ((GetSelectedOption('u296')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u290'));

	MoveWidgetBy('u139',0,32);

	MoveWidgetBy('u411',0,32);

rdo7onChangeDisCon2(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon2Me', GetSelectedOption('u296'));

rdo7onChangeDisCon2(e);

}

}

function rdo12onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeMe', GetSelectedOption('u323'));

rdo7onChangeDisConAge(e);

}

}

function rdo12onClickDisConSearch(e) {

}

function rdo12onCheckSearchResult(e) {

}

function rdo12onClickDisConAdd(e) {

if (((GetSelectedOption('u293')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u293')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u306', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Me]]</span>'));

SetWidgetRichText('u307', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u308', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u293', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u323', PopulateVariables(' '));

SetWidgetFormText('u290', PopulateVariables(''));

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

	MoveWidgetBy('u139',0,0);

	MoveWidgetBy('u411',0,0);

rdo7onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u293')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u290'));

SetWidgetRichText('u306', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewMe]]</span>'));

SetWidgetRichText('u307', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u308', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u293', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u323', PopulateVariables(' '));

SetWidgetFormText('u290', PopulateVariables(''));

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

	MoveWidgetBy('u139',0,-32);

	MoveWidgetBy('u411',0,-32);

rdo7onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u296')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u296')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u306', PopulateVariables('<span style=" color:#000000; font-size:13px;"> [[varDisCon1Me]]: [[varDisCon2Me]]</span>'));

SetWidgetRichText('u307', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u308', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u293', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u323', PopulateVariables(' '));

SetWidgetFormText('u290', PopulateVariables(''));

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

	MoveWidgetBy('u139',0,-32);

	MoveWidgetBy('u411',0,-32);

rdo7onClickDisConAdd(e);

}

if ((GetSelectedOption('u296')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u290'));

SetWidgetRichText('u306', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Me]]: [[varDisConNewMe]]</span>'));

SetWidgetRichText('u307', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u308', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u293', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u323', PopulateVariables(' '));

SetWidgetFormText('u290', PopulateVariables(''));

	MoveWidgetBy('u139',0,-64);

	MoveWidgetBy('u411',0,-64);

rdo7onClickDisConAdd(e);

}

}

function rdo12onClickDisConCancel(e) {

if (((GetSelectedOption('u293')) != (PopulateVariables('Cancer'))) || ((GetSelectedOption('u293')) != (PopulateVariables('Other - Add new')))) {

	MoveWidgetBy('u139',0,0);

	MoveWidgetBy('u411',0,0);

rdo7onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u293')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u139',0,-32);

	MoveWidgetBy('u411',0,-32);

rdo7onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u296')) != (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u139',0,-32);

	MoveWidgetBy('u411',0,-32);

rdo7onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u296')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u139',0,-64);

	MoveWidgetBy('u411',0,-64);

rdo7onClickDisConCancel(e);

}

}

function rdo13onChangeDisCon1(e) {

if ((GetSelectedOption('u293')) == (PopulateVariables('Cancer'))) {

	SetPanelVisibilityu295("");

	MoveWidgetBy('u309',0,32);

	MoveWidgetBy('u299',0,32);

	MoveWidgetBy('u316',0,32);

	MoveWidgetBy('u322',0,32);

rdo12onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u293')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu289("");

	MoveWidgetBy('u309',0,32);

	MoveWidgetBy('u299',0,32);

	MoveWidgetBy('u316',0,32);

	MoveWidgetBy('u322',0,32);

rdo12onChangeDisCon1(e);

}
else
if (true) {

rdo12onChangeDisCon1(e);

}

}

function rdo18onClickSaveMe(e) {

if (((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables(''))) || ((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables('Other')))) {

SetGlobalVariableValue('$varNameMe', GetWidgetFormText('u431'));

SetWidgetRichText('u424', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b>&nbsp; [[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:15px;">ME)</b></span>'));

SetWidgetRichText('u591', PopulateVariables('<div style="text-align:center"><span style=" color:#FFFFFF; font-size:12px;"><b>[[varNameMe]]\'s Diseases and Conditions</b></span></div>'));

SetWidgetRichText('u83', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u123', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

	SetPanelStateu65("pd1u65");

	SetPanelStateu72("pd1u72");

	SetPanelStateu79("pd1u79");

	SetPanelStateu39("pd2u39");

	SetPanelStateu121("pd0u121");

	SetPanelStateu94("pd1u94");

	SetPanelStateu101("pd1u101");

	SetPanelVisibilityu129("");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}
else
if ((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables('Male'))) {

SetGlobalVariableValue('$varNameMe', GetWidgetFormText('u431'));

SetWidgetRichText('u424', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b>&nbsp; [[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:15px;">ME)</b></span>'));

SetWidgetRichText('u591', PopulateVariables('<div style="text-align:center"><span style=" color:#FFFFFF; font-size:12px;"><b>[[varNameMe]]\'s Diseases and Conditions</b></span></div>'));

SetWidgetRichText('u87', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u127', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

	SetPanelStateu65("pd1u65");

	SetPanelStateu72("pd1u72");

	SetPanelStateu79("pd3u79");

	SetPanelStateu39("pd2u39");

	SetPanelStateu121("pd2u121");

	SetPanelStateu94("pd1u94");

	SetPanelStateu101("pd1u101");

	SetPanelVisibilityu129("");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}
else
if ((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables('Female'))) {

SetGlobalVariableValue('$varNameMe', GetWidgetFormText('u431'));

SetWidgetRichText('u424', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b>&nbsp; [[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:15px;">ME)</b></span>'));

SetWidgetRichText('u591', PopulateVariables('<div style="text-align:center"><span style=" color:#FFFFFF; font-size:12px;"><b>[[varNameMe]]\'s Diseases and Conditions</b></span></div>'));

SetWidgetRichText('u85', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u125', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

	SetPanelStateu65("pd1u65");

	SetPanelStateu72("pd1u72");

	SetPanelStateu79("pd2u79");

	SetPanelStateu39("pd2u39");

	SetPanelStateu121("pd1u121");

	SetPanelStateu94("pd1u94");

	SetPanelStateu101("pd1u101");

	SetPanelVisibilityu129("");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo18onClickCancelMe(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo18onClickCloseMe(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo18onClickHelpMe(e) {

}

function rdo18onChangeDisCon1(e) {

}

function rdo18onChangeDisCon2(e) {

}

function rdo18onChangeDisConAge(e) {

}

function rdo18onClickDisConAdd(e) {

}

function rdo18onClickDisConCancel(e) {

}

function rdo19onCheckRaceAIAN(e) {

}

function rdo19onUncheckRaceAIAN(e) {

}

function rdo19onCheckRaceAsian(e) {

if ((GetCheckState('u476')) == (true)) {

SetCheckState('u476', true);

SetCheckState('u478', true);

	SetPanelStateu475("pd1u475");

	MoveWidgetBy('u494',0,65);

	MoveWidgetBy('u497',0,65);

	MoveWidgetBy('u512',0,65);

	MoveWidgetBy('u515',0,65);

	MoveWidgetBy('u519',0,65);

	MoveWidgetBy('u558',0,65);

	MoveWidgetBy('u566',0,65);

	MoveWidgetBy('u691',0,65);

	MoveWidgetBy('u419',0,65);

}

}

function rdo19onUncheckRaceAsian(e) {

if ((GetCheckState('u478')) == (false)) {

SetCheckState('u478', false);

SetCheckState('u476', false);

	SetPanelStateu475("pd0u475");

	MoveWidgetBy('u494',0,-65);

	MoveWidgetBy('u497',0,-65);

	MoveWidgetBy('u512',0,-65);

	MoveWidgetBy('u515',0,-65);

	MoveWidgetBy('u519',0,-65);

	MoveWidgetBy('u558',0,-65);

	MoveWidgetBy('u566',0,-65);

	MoveWidgetBy('u691',0,-65);

	MoveWidgetBy('u419',0,-65);

}

}

function rdo19onCheckRaceNHOPI(e) {

if ((GetCheckState('u498')) == (true)) {

SetCheckState('u498', true);

SetCheckState('u500', true);

	SetPanelStateu497("pd1u497");

	MoveWidgetBy('u512',0,45);

	MoveWidgetBy('u515',0,45);

	MoveWidgetBy('u519',0,45);

	MoveWidgetBy('u558',0,45);

	MoveWidgetBy('u566',0,45);

	MoveWidgetBy('u691',0,45);

	MoveWidgetBy('u419',0,45);

}

}

function rdo19onUncheckRaceNHOPI(e) {

if ((GetCheckState('u500')) == (false)) {

SetCheckState('u500', false);

SetCheckState('u498', false);

	SetPanelStateu497("pd0u497");

	MoveWidgetBy('u512',0,-45);

	MoveWidgetBy('u515',0,-45);

	MoveWidgetBy('u519',0,-45);

	MoveWidgetBy('u558',0,-45);

	MoveWidgetBy('u566',0,-45);

	MoveWidgetBy('u691',0,-45);

	MoveWidgetBy('u419',0,-45);

}

}

function rdo25onChangeDisCon2(e) {

if ((GetSelectedOption('u576')) == (PopulateVariables('Other - Add new'))) {

	SetPanelStateu569("pd0u569");

	SetPanelVisibilityu569("");

	MoveWidgetBy('u589',0,32);

	MoveWidgetBy('u579',0,32);

	MoveWidgetBy('u569',0,32);

	MoveWidgetBy('u596',0,32);

	MoveWidgetBy('u602',0,32);

rdo23onChangeDisCon2(e);

}
else
if (true) {

rdo23onChangeDisCon2(e);

}

}

function rdo20onUncheckEthnicityHL(e) {

if ((GetCheckState('u523')) == (false)) {

SetCheckState('u523', false);

SetCheckState('u521', false);

	SetPanelStateu520("pd0u520");

	MoveWidgetBy('u547',0,-65);

	MoveWidgetBy('u540',0,-65);

	MoveWidgetBy('u543',0,-65);

	MoveWidgetBy('u558',0,-65);

	MoveWidgetBy('u566',0,-65);

	MoveWidgetBy('u691',0,-65);

	MoveWidgetBy('u419',0,-65);

}

}

function rdo20onCheckEthinicityHL(e) {

if ((GetCheckState('u521')) == (true)) {

SetCheckState('u521', true);

SetCheckState('u523', true);

	SetPanelStateu520("pd1u520");

	MoveWidgetBy('u547',0,65);

	MoveWidgetBy('u558',0,65);

	MoveWidgetBy('u540',0,65);

	MoveWidgetBy('u543',0,65);

	MoveWidgetBy('u566',0,65);

	MoveWidgetBy('u691',0,65);

	MoveWidgetBy('u419',0,65);

}

}

function rdo44onChangeDisConAge(e) {

}

function rdo45onCheckRaceAIAN(e) {

}

function rdo45onUncheckRaceAIAN(e) {

}

function rdo45onCheckRaceAsian(e) {

if ((GetCheckState('u1134')) == (true)) {

SetCheckState('u1134', true);

SetCheckState('u1136', true);

	SetPanelStateu1133("pd1u1133");

	MoveWidgetBy('u1152',0,65);

	MoveWidgetBy('u1155',0,65);

	MoveWidgetBy('u1170',0,65);

	MoveWidgetBy('u1173',0,65);

	MoveWidgetBy('u1177',0,65);

	MoveWidgetBy('u1221',0,65);

	MoveWidgetBy('u1229',0,65);

	MoveWidgetBy('u1371',0,65);

	MoveWidgetBy('u1039',0,65);

}

}

function rdo45onUncheckRaceAsian(e) {

if ((GetCheckState('u1136')) == (false)) {

SetCheckState('u1136', false);

SetCheckState('u1134', false);

	SetPanelStateu1133("pd0u1133");

	MoveWidgetBy('u1152',0,-65);

	MoveWidgetBy('u1155',0,-65);

	MoveWidgetBy('u1170',0,-65);

	MoveWidgetBy('u1173',0,-65);

	MoveWidgetBy('u1177',0,-65);

	MoveWidgetBy('u1221',0,-65);

	MoveWidgetBy('u1229',0,-65);

	MoveWidgetBy('u1371',0,-65);

	MoveWidgetBy('u1039',0,-65);

}

}

function rdo45onCheckRaceNHOPI(e) {

if ((GetCheckState('u1156')) == (true)) {

SetCheckState('u1156', true);

SetCheckState('u1158', true);

	SetPanelStateu1155("pd1u1155");

	MoveWidgetBy('u1170',0,45);

	MoveWidgetBy('u1173',0,45);

	MoveWidgetBy('u1177',0,45);

	MoveWidgetBy('u1221',0,45);

	MoveWidgetBy('u1229',0,45);

	MoveWidgetBy('u1371',0,45);

	MoveWidgetBy('u1039',0,45);

}

}

function rdo45onUncheckRaceNHOPI(e) {

if ((GetCheckState('u1158')) == (false)) {

SetCheckState('u1158', false);

SetCheckState('u1156', false);

	SetPanelStateu1155("pd0u1155");

	MoveWidgetBy('u1170',0,-45);

	MoveWidgetBy('u1173',0,-45);

	MoveWidgetBy('u1177',0,-45);

	MoveWidgetBy('u1221',0,-45);

	MoveWidgetBy('u1229',0,-45);

	MoveWidgetBy('u1371',0,-45);

	MoveWidgetBy('u1039',0,-45);

}

}

function rdo8onCheckRaceAIAN(e) {

}

function rdo8onUncheckRaceAIAN(e) {

}

function rdo8onCheckRaceAsian(e) {

if ((GetCheckState('u196')) == (true)) {

SetCheckState('u196', true);

SetCheckState('u198', true);

	SetPanelStateu195("pd1u195");

	MoveWidgetBy('u214',0,65);

	MoveWidgetBy('u217',0,65);

	MoveWidgetBy('u232',0,65);

	MoveWidgetBy('u235',0,65);

	MoveWidgetBy('u239',0,65);

	MoveWidgetBy('u278',0,65);

	MoveWidgetBy('u286',0,65);

	MoveWidgetBy('u411',0,65);

	MoveWidgetBy('u139',0,65);

}

}

function rdo8onUncheckRaceAsian(e) {

if ((GetCheckState('u198')) == (false)) {

SetCheckState('u198', false);

SetCheckState('u196', false);

	SetPanelStateu195("pd0u195");

	MoveWidgetBy('u214',0,-65);

	MoveWidgetBy('u217',0,-65);

	MoveWidgetBy('u232',0,-65);

	MoveWidgetBy('u235',0,-65);

	MoveWidgetBy('u239',0,-65);

	MoveWidgetBy('u278',0,-65);

	MoveWidgetBy('u286',0,-65);

	MoveWidgetBy('u411',0,-65);

	MoveWidgetBy('u139',0,-65);

}

}

function rdo8onCheckRaceNHOPI(e) {

if ((GetCheckState('u218')) == (true)) {

SetCheckState('u218', true);

SetCheckState('u220', true);

	SetPanelStateu217("pd1u217");

	MoveWidgetBy('u232',0,45);

	MoveWidgetBy('u235',0,45);

	MoveWidgetBy('u239',0,45);

	MoveWidgetBy('u278',0,45);

	MoveWidgetBy('u286',0,45);

	MoveWidgetBy('u411',0,45);

	MoveWidgetBy('u139',0,45);

}

}

function rdo8onUncheckRaceNHOPI(e) {

if ((GetCheckState('u220')) == (false)) {

SetCheckState('u220', false);

SetCheckState('u218', false);

	SetPanelStateu217("pd0u217");

	MoveWidgetBy('u232',0,-45);

	MoveWidgetBy('u235',0,-45);

	MoveWidgetBy('u239',0,-45);

	MoveWidgetBy('u278',0,-45);

	MoveWidgetBy('u286',0,-45);

	MoveWidgetBy('u411',0,-45);

	MoveWidgetBy('u139',0,-45);

}

}

function rdo47onClickHidePI(e) {

if (true) {

	SetPanelStateu1213("pd1u1213");

	SetPanelVisibilityu1043("hidden");

	MoveWidgetBy('u1221',0,-255);

	MoveWidgetBy('u1371',0,-255);

	MoveWidgetBy('u1229',0,-255);

	MoveWidgetBy('u1039',0,-255);

}

}

function rdo47onClickShowPI(e) {

if (true) {

	SetPanelStateu1213("pd0u1213");

	SetPanelVisibilityu1043("");

	MoveWidgetBy('u1229',0,475);

	MoveWidgetBy('u1221',0,475);

	MoveWidgetBy('u1371',0,475);

}

}

function rdo40onChangeDisCon1L1(e) {

if ((GetSelectedOption('u992')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u992'));

SetSelectedOption('u954', PopulateVariables('Cancer'));

	SetPanelVisibilityu947("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu961("hidden");

	SetPanelVisibilityu985("hidden");

	MoveWidgetBy('u975',0,35);

	MoveWidgetBy('u1031',0,35);

	MoveWidgetBy('u1003',0,35);

}
else
if ((GetSelectedOption('u992')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u992'));

SetSelectedOption('u971', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu961("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu947("hidden");

	SetPanelVisibilityu985("hidden");

	MoveWidgetBy('u975',0,35);

	MoveWidgetBy('u1031',0,35);

	MoveWidgetBy('u1003',0,35);

}

}

function rdo40onChangeDisConAgeL1(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u993'));

}

}

function rdo40onChangeDisCon1L2(e) {

if ((GetSelectedOption('u954')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u954'));

SetSelectedOption('u971', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu961("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu947("hidden");

	SetPanelVisibilityu985("hidden");

}

}

function rdo40onChangeDisCon2L2(e) {

if ((GetSelectedOption('u955')) == (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u954'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u955'));

SetSelectedOption('u937', PopulateVariables('Cancer'));

SetSelectedOption('u938', PopulateVariables('Other Cancer'));

	SetPanelVisibilityu930("");

	SetPanelVisibilityu947("hidden");

	SetPanelVisibilityu961("hidden");

	SetPanelVisibilityu985("hidden");

	MoveWidgetBy('u975',0,33);

	MoveWidgetBy('u1031',0,33);

	MoveWidgetBy('u1003',0,33);

}
else
if ((GetSelectedOption('u955')) != (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u954'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u955'));

	SetPanelVisibilityu975("");

}

}

function rdo40onChangeDisConAgeL2(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u958'));

}

}

function rdo40onClickAddDisCon2(e) {

if (true) {

SetWidgetRichText('u982', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u983', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u984', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u992', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u993', PopulateVariables(' '));

	SetPanelVisibilityu985("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu947("hidden");

	SetPanelVisibilityu961("hidden");

	MoveWidgetBy('u1003',0,-35);

	MoveWidgetBy('u975',0,-35);

	MoveWidgetBy('u1031',0,-35);

}

}

function rdo40onChangeDisCon1New(e) {

if ((GetSelectedOption('u971')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u971'));

SetSelectedOption('u954', PopulateVariables('Cancer'));

	SetPanelVisibilityu947("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu961("hidden");

	SetPanelVisibilityu985("hidden");

}
else
if ((GetSelectedOption('u971')) == (PopulateVariables('Select Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', PopulateVariables(''));

SetGlobalVariableValue('$varDisCon2Father', PopulateVariables(''));

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

	SetPanelVisibilityu985("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu947("hidden");

	SetPanelVisibilityu961("hidden");

	MoveWidgetBy('u975',0,-35);

	MoveWidgetBy('u1031',0,-35);

	MoveWidgetBy('u1003',0,-35);

}

}

function rdo40onChangeDisConAgeNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u972'));

}

}

function rdo40onClickAddDisConNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u970'));

SetWidgetRichText('u982', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

SetWidgetRichText('u983', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u984', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u992', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u993', PopulateVariables(' '));

	SetPanelVisibilityu985("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu947("hidden");

	SetPanelVisibilityu961("hidden");

	MoveWidgetBy('u975',0,-35);

	MoveWidgetBy('u1003',0,-35);

	MoveWidgetBy('u1031',0,-35);

}

}

function rdo40onChangeDisCon1L3(e) {

if ((GetSelectedOption('u937')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u937'));

SetSelectedOption('u971', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu961("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu947("hidden");

	SetPanelVisibilityu985("hidden");

	MoveWidgetBy('u975',0,-33);

	MoveWidgetBy('u1031',0,-33);

	MoveWidgetBy('u1003',0,-33);

}
else
if ((GetSelectedOption('u937')) == (PopulateVariables('Select Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', PopulateVariables(''));

SetGlobalVariableValue('$varDisCon2Father', PopulateVariables(''));

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

SetGlobalVariableValue('$varDisConAgeFather', PopulateVariables(''));

	SetPanelVisibilityu975("");

	SetPanelVisibilityu985("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu947("hidden");

	SetPanelVisibilityu961("hidden");

	MoveWidgetBy('u975',0,-68);

	MoveWidgetBy('u1031',0,-68);

	MoveWidgetBy('u1003',0,-68);

}

}

function rdo40onChangeDisCon2L3(e) {

if ((GetSelectedOption('u938')) != (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u937'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u938'));

SetSelectedOption('u954', PopulateVariables('Cancer'));

SetSelectedOption('u955', GetSelectedOption('u938'));

	SetPanelVisibilityu947("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu975("hidden");

	SetPanelVisibilityu985("hidden");

	MoveWidgetBy('u975',0,-33);

	MoveWidgetBy('u1031',0,-33);

	MoveWidgetBy('u1003',0,-33);

}

}

function rdo40onChangeDisConAgeL3(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u944'));

}

}

function rdo40onClickAddDisCon3(e) {

if (true) {

;

SetWidgetRichText('u982', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]: [[varDisCon3]]</span>'));

SetWidgetRichText('u983', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u984', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u992', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u993', PopulateVariables(' '));

	SetPanelVisibilityu985("");

	SetPanelVisibilityu930("hidden");

	SetPanelVisibilityu947("hidden");

	SetPanelVisibilityu961("hidden");

	MoveWidgetBy('u975',0,-68);

	MoveWidgetBy('u1003',0,-68);

	MoveWidgetBy('u1031',0,-68);

}

}

function rdo41onClickSaveInfo(e) {

if (true) {

rdo29onClickSaveRel(e);

}

}

function rdo41onClickCancelInfo(e) {

if (true) {

rdo29onClickCancelRel(e);

}

}

function rdo42onClickSaveRel(e) {

if (((GetSelectedOption('u1047')) == (PopulateVariables('Brother'))) || ((GetSelectedOption('u1056')) == (PopulateVariables('Brother')))) {

SetGlobalVariableValue('$varNameRel', GetWidgetFormText('u1058'));

SetWidgetRichText('u1354', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameRel]] ([[varRelationship]])</b></span>'));

SetWidgetRichText('u1366', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameRel]] ([[varRelationship]])</b></span>'));

SetWidgetRichText('u118', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:12px;"><b>[[varNameRel]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:12px;">BROTHER)</b></span></div>'));

	SetPanelStateu62("pd1u62");

	SetPanelStateu108("pd2u108");

	SetPanelVisibilityu129("");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo42onClickCancelRel(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo42onClickCloseRel(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo42onClickDisConAdd(e) {

}

function rdo42onClickDisConCancel(e) {

}

function rdo42onChangeDisCon1(e) {

if ((GetSelectedOption('u1236')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u1236'));

}
else
if ((GetSelectedOption('u1236')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u1233'));

}
else
if (((GetSelectedOption('u573')) != (PopulateVariables('Select Disease or Condition'))) && ((GetSelectedOption('u573')) != (PopulateVariables('Other - Add new')))) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u1236'));

}

}

function rdo42onChangeDisCon2(e) {

}

function rdo42onChangeDisConAge(e) {

}

function rdo37onChangeDisCon1(e) {

if ((GetSelectedOption('u896')) == (PopulateVariables('Cancer'))) {

	SetPanelVisibilityu898("");

	MoveWidgetBy('u912',0,32);

	MoveWidgetBy('u902',0,32);

	MoveWidgetBy('u919',0,32);

	MoveWidgetBy('u925',0,32);

rdo36onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u896')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu892("");

	MoveWidgetBy('u912',0,32);

	MoveWidgetBy('u902',0,32);

	MoveWidgetBy('u919',0,32);

	MoveWidgetBy('u925',0,32);

rdo36onChangeDisCon1(e);

}
else
if (true) {

rdo36onChangeDisCon1(e);

}

}

function rdo48onClickHideHI(e) {

if (true) {

	SetPanelStateu1221("pd1u1221");

	SetPanelVisibilityu1229("hidden");

	MoveWidgetBy('u1371',0,-285);

	MoveWidgetBy('u1039',0,-285);

}

}

function rdo48onClickShowHI(e) {

if (true) {

	SetPanelStateu1221("pd0u1221");

	SetPanelVisibilityu1229("");

	MoveWidgetBy('u1371',0,285);

	MoveWidgetBy('u1039',0,285);

}

}

function rdo31onChangeDisConAge(e) {

}

function rdo32onCheckRaceAIAN(e) {

}

function rdo32onUncheckRaceAIAN(e) {

}

function rdo32onCheckRaceAsian(e) {

if ((GetCheckState('u794')) == (true)) {

SetCheckState('u794', true);

SetCheckState('u796', true);

	SetPanelStateu793("pd1u793");

	MoveWidgetBy('u812',0,65);

	MoveWidgetBy('u815',0,65);

	MoveWidgetBy('u830',0,65);

	MoveWidgetBy('u833',0,65);

	MoveWidgetBy('u837',0,65);

	MoveWidgetBy('u881',0,65);

	MoveWidgetBy('u889',0,65);

	MoveWidgetBy('u1031',0,65);

	MoveWidgetBy('u699',0,65);

}

}

function rdo32onUncheckRaceAsian(e) {

if ((GetCheckState('u796')) == (false)) {

SetCheckState('u796', false);

SetCheckState('u794', false);

	SetPanelStateu793("pd0u793");

	MoveWidgetBy('u812',0,-65);

	MoveWidgetBy('u815',0,-65);

	MoveWidgetBy('u830',0,-65);

	MoveWidgetBy('u833',0,-65);

	MoveWidgetBy('u837',0,-65);

	MoveWidgetBy('u881',0,-65);

	MoveWidgetBy('u889',0,-65);

	MoveWidgetBy('u1031',0,-65);

	MoveWidgetBy('u699',0,-65);

}

}

function rdo32onCheckRaceNHOPI(e) {

if ((GetCheckState('u816')) == (true)) {

SetCheckState('u816', true);

SetCheckState('u818', true);

	SetPanelStateu815("pd1u815");

	MoveWidgetBy('u830',0,45);

	MoveWidgetBy('u833',0,45);

	MoveWidgetBy('u837',0,45);

	MoveWidgetBy('u881',0,45);

	MoveWidgetBy('u889',0,45);

	MoveWidgetBy('u1031',0,45);

	MoveWidgetBy('u699',0,45);

}

}

function rdo32onUncheckRaceNHOPI(e) {

if ((GetCheckState('u818')) == (false)) {

SetCheckState('u818', false);

SetCheckState('u816', false);

	SetPanelStateu815("pd0u815");

	MoveWidgetBy('u830',0,-45);

	MoveWidgetBy('u833',0,-45);

	MoveWidgetBy('u837',0,-45);

	MoveWidgetBy('u881',0,-45);

	MoveWidgetBy('u889',0,-45);

	MoveWidgetBy('u1031',0,-45);

	MoveWidgetBy('u699',0,-45);

}

}

function rdo33onUncheckEthnicityHL(e) {

if ((GetCheckState('u841')) == (false)) {

SetCheckState('u841', false);

SetCheckState('u839', false);

	SetPanelStateu838("pd0u838");

	MoveWidgetBy('u865',0,-65);

	MoveWidgetBy('u858',0,-65);

	MoveWidgetBy('u861',0,-65);

	MoveWidgetBy('u881',0,-65);

	MoveWidgetBy('u889',0,-65);

	MoveWidgetBy('u1031',0,-65);

	MoveWidgetBy('u699',0,-65);

}

}

function rdo33onCheckEthinicityHL(e) {

if ((GetCheckState('u839')) == (true)) {

SetCheckState('u839', true);

SetCheckState('u841', true);

	SetPanelStateu838("pd1u838");

	MoveWidgetBy('u865',0,65);

	MoveWidgetBy('u881',0,65);

	MoveWidgetBy('u858',0,65);

	MoveWidgetBy('u861',0,65);

	MoveWidgetBy('u889',0,65);

	MoveWidgetBy('u1031',0,65);

	MoveWidgetBy('u699',0,65);

}

}

function rdo0onNavClickHome(e) {

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

function rdo0onNavClickCreateHistory(e) {

if (true) {

	SetPanelStateu1444("pd0u1444");

	SetPanelVisibilityu1444("");

}

}

function rdo0onNavClickOpenHistory(e) {

if (true) {

	SetPanelStateu1444("pd1u1444");

	SetPanelVisibilityu1444("");

}

}

function rdo46onUncheckEthnicityHL(e) {

if ((GetCheckState('u1181')) == (false)) {

SetCheckState('u1181', false);

SetCheckState('u1179', false);

	SetPanelStateu1178("pd0u1178");

	MoveWidgetBy('u1205',0,-65);

	MoveWidgetBy('u1198',0,-65);

	MoveWidgetBy('u1201',0,-65);

	MoveWidgetBy('u1221',0,-65);

	MoveWidgetBy('u1229',0,-65);

	MoveWidgetBy('u1371',0,-65);

	MoveWidgetBy('u1039',0,-65);

}

}

function rdo46onCheckEthinicityHL(e) {

if ((GetCheckState('u1179')) == (true)) {

SetCheckState('u1179', true);

SetCheckState('u1181', true);

	SetPanelStateu1178("pd1u1178");

	MoveWidgetBy('u1205',0,65);

	MoveWidgetBy('u1221',0,65);

	MoveWidgetBy('u1198',0,65);

	MoveWidgetBy('u1201',0,65);

	MoveWidgetBy('u1229',0,65);

	MoveWidgetBy('u1371',0,65);

	MoveWidgetBy('u1039',0,65);

}

}

function rdo34onClickHidePI(e) {

if (true) {

	SetPanelStateu873("pd1u873");

	SetPanelVisibilityu703("hidden");

	MoveWidgetBy('u881',0,-255);

	MoveWidgetBy('u1031',0,-255);

	MoveWidgetBy('u889',0,-255);

	MoveWidgetBy('u699',0,-255);

}

}

function rdo34onClickShowPI(e) {

if (true) {

	SetPanelStateu873("pd0u873");

	SetPanelVisibilityu703("");

	MoveWidgetBy('u889',0,475);

	MoveWidgetBy('u881',0,475);

	MoveWidgetBy('u1031',0,475);

}

}

function rdo35onClickHideHI(e) {

if (true) {

	SetPanelStateu881("pd1u881");

	SetPanelVisibilityu889("hidden");

	MoveWidgetBy('u1031',0,-285);

	MoveWidgetBy('u699',0,-285);

}

}

function rdo35onClickShowHI(e) {

if (true) {

	SetPanelStateu881("pd0u881");

	SetPanelVisibilityu889("");

	MoveWidgetBy('u1031',0,285);

	MoveWidgetBy('u699',0,285);

}

}

function rdo36onChangeDisCon1(e) {

if ((GetSelectedOption('u896')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u896'));

	MoveWidgetBy('u1031',0,32);

	MoveWidgetBy('u699',0,32);

rdo29onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u896')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u893'));

	MoveWidgetBy('u1031',0,32);

	MoveWidgetBy('u699',0,32);

rdo29onChangeDisCon1(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Rel', GetSelectedOption('u896'));

rdo29onChangeDisCon1(e);

}

}

function rdo36onChangeDisCon2(e) {

if ((GetSelectedOption('u899')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u893'));

	MoveWidgetBy('u1031',0,32);

	MoveWidgetBy('u699',0,32);

rdo29onChangeDisCon2(e);

}
else
if (((GetSelectedOption('u899')) != (PopulateVariables('Select Specific Cancer'))) || ((GetSelectedOption('u899')) != (PopulateVariables('Other - Add new')))) {

SetGlobalVariableValue('$varDisCon2Me', GetSelectedOption('u899'));

rdo29onChangeDisCon2(e);

}

}

function rdo36onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeRel', GetSelectedOption('u926'));

rdo29onChangeDisConAge(e);

}

}

function rdo36onClickDisConSearch(e) {

}

function rdo36onCheckSearchResult(e) {

}

function rdo36onClickDisConAdd(e) {

if (((GetSelectedOption('u896')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u896')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u909', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Rel]]</span>'));

SetWidgetRichText('u910', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u911', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u896', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u899', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u926', PopulateVariables(' '));

SetWidgetFormText('u893', PopulateVariables(''));

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetBy('u1031',0,0);

	MoveWidgetBy('u699',0,0);

rdo29onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u896')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u893'));

SetWidgetRichText('u909', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewRel]]</span>'));

SetWidgetRichText('u910', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u911', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u896', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u899', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u926', PopulateVariables(' '));

SetWidgetFormText('u893', PopulateVariables(''));

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetBy('u1031',0,-32);

	MoveWidgetBy('u699',0,-32);

rdo29onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u899')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u899')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u909', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Rel]]: [[varDisCon2Rel]]</span>'));

SetWidgetRichText('u910', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u911', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u896', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u899', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u926', PopulateVariables(' '));

SetWidgetFormText('u893', PopulateVariables(''));

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetBy('u1031',0,-32);

	MoveWidgetBy('u699',0,-32);

rdo29onClickDisConAdd(e);

}

if ((GetSelectedOption('u899')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewRel', GetWidgetFormText('u893'));

SetWidgetRichText('u909', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon2Rel]]: [[varDisConNewRel]]</span>'));

SetWidgetRichText('u910', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeRel]]</span></div>'));

SetWidgetRichText('u911', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u896', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u899', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u926', PopulateVariables(' '));

SetWidgetFormText('u893', PopulateVariables(''));

	MoveWidgetBy('u1031',0,-64);

	MoveWidgetBy('u699',0,-64);

rdo29onClickDisConAdd(e);

}

}

function rdo36onClickDisConCancel(e) {

if (((GetSelectedOption('u896')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u896')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetBy('u1031',0,0);

	MoveWidgetBy('u699',0,0);

rdo29onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u896')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetBy('u1031',0,-32);

	MoveWidgetBy('u699',0,-32);

rdo29onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u899')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u899')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetBy('u1031',0,-32);

	MoveWidgetBy('u699',0,-32);

rdo29onClickDisConCancel(e);

}

if ((GetSelectedOption('u899')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u1031',0,-64);

	MoveWidgetBy('u699',0,-64);

rdo29onClickDisConCancel(e);

}

}

function rdo24onChangeDisCon1(e) {

if ((GetSelectedOption('u573')) == (PopulateVariables('Cancer'))) {

	SetPanelVisibilityu575("");

	MoveWidgetBy('u589',0,32);

	MoveWidgetBy('u579',0,32);

	MoveWidgetBy('u596',0,32);

	MoveWidgetBy('u602',0,32);

rdo23onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u573')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu569("");

	MoveWidgetBy('u589',0,32);

	MoveWidgetBy('u579',0,32);

	MoveWidgetBy('u596',0,32);

	MoveWidgetBy('u602',0,32);

rdo23onChangeDisCon1(e);

}
else
if (true) {

rdo23onChangeDisCon1(e);

}

}

function rdo30onChangeCauseOfDeath(e) {

if (((GetSelectedOption('u755')) == (PopulateVariables('Diabetes'))) || (((GetSelectedOption('u755')) == (PopulateVariables('Gastrointestinal Disease'))) || (((GetSelectedOption('u755')) == (PopulateVariables('Kidney Disease'))) || (((GetSelectedOption('u755')) == (PopulateVariables('Chronic Disease of Respiratory System'))) || (((GetSelectedOption('u755')) == (PopulateVariables('Blood Clots'))) || ((GetSelectedOption('u755')) == (PopulateVariables('Cancer')))))))) {

	SetPanelStateu748("pd1u748");

	SetPanelVisibilityu748("");

}
else
if ((GetSelectedOption('u755')) == (PopulateVariables('Other'))) {

	SetPanelStateu748("pd0u748");

	SetPanelVisibilityu748("");

}

}

function rdo26onChangeDisConAge(e) {

if (true) {

rdo23onChangeDisConAge(e);

}

}

function rdo27onChangeDisCon1L1(e) {

if ((GetSelectedOption('u669')) == (PopulateVariables('Cancer'))) {

;

SetSelectedOption('u631', PopulateVariables('Cancer'));

	SetPanelVisibilityu624("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu638("hidden");

	SetPanelVisibilityu662("hidden");

	MoveWidgetBy('u652',0,35);

	MoveWidgetBy('u691',0,35);

	MoveWidgetBy('u680',0,35);

}
else
if ((GetSelectedOption('u669')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u648', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu638("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu662("hidden");

	MoveWidgetBy('u652',0,35);

	MoveWidgetBy('u691',0,35);

	MoveWidgetBy('u680',0,35);

}

}

function rdo27onChangeDisConAgeL1(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u670'));

}

}

function rdo27onChangeDisCon1L2(e) {

if ((GetSelectedOption('u631')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u648', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu638("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu662("hidden");

}

}

function rdo27onChangeDisCon2L2(e) {

if ((GetSelectedOption('u632')) == (PopulateVariables('Other Cancer'))) {

;

;

SetSelectedOption('u614', PopulateVariables('Cancer'));

SetSelectedOption('u615', PopulateVariables('Other Cancer'));

	SetPanelVisibilityu607("");

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu638("hidden");

	SetPanelVisibilityu662("hidden");

	MoveWidgetBy('u652',0,33);

	MoveWidgetBy('u691',0,33);

	MoveWidgetBy('u680',0,33);

}
else
if ((GetSelectedOption('u632')) != (PopulateVariables('Other Cancer'))) {

;

;

	SetPanelVisibilityu652("");

}

}

function rdo27onChangeDisConAgeL2(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u635'));

}

}

function rdo27onClickAddDisCon2(e) {

if (true) {

SetWidgetRichText('u659', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u660', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u661', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u669', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u670', PopulateVariables(' '));

	SetPanelVisibilityu662("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu638("hidden");

	MoveWidgetBy('u680',0,-35);

	MoveWidgetBy('u652',0,-35);

	MoveWidgetBy('u691',0,-35);

}

}

function rdo27onChangeDisCon1New(e) {

if ((GetSelectedOption('u648')) == (PopulateVariables('Cancer'))) {

;

SetSelectedOption('u631', PopulateVariables('Cancer'));

	SetPanelVisibilityu624("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu638("hidden");

	SetPanelVisibilityu662("hidden");

}
else
if ((GetSelectedOption('u648')) == (PopulateVariables('Select Disease or Condition'))) {

;

;

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

	SetPanelVisibilityu662("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu638("hidden");

	MoveWidgetBy('u652',0,-35);

	MoveWidgetBy('u691',0,-35);

	MoveWidgetBy('u680',0,-35);

}

}

function rdo27onChangeDisConAgeNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u649'));

}

}

function rdo27onClickAddDisConNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u647'));

SetWidgetRichText('u659', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

SetWidgetRichText('u660', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u661', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u669', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u670', PopulateVariables(' '));

	SetPanelVisibilityu662("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu638("hidden");

	MoveWidgetBy('u652',0,-35);

	MoveWidgetBy('u680',0,-35);

	MoveWidgetBy('u691',0,-35);

}

}

function rdo27onChangeDisCon1L3(e) {

if ((GetSelectedOption('u614')) == (PopulateVariables('Other Disease or Condition'))) {

;

SetSelectedOption('u648', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu638("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu662("hidden");

	MoveWidgetBy('u652',0,-33);

	MoveWidgetBy('u691',0,-33);

	MoveWidgetBy('u680',0,-33);

}
else
if ((GetSelectedOption('u614')) == (PopulateVariables('Select Disease or Condition'))) {

;

;

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

SetGlobalVariableValue('$varDisConAgeFather', PopulateVariables(''));

	SetPanelVisibilityu652("");

	SetPanelVisibilityu662("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu638("hidden");

	MoveWidgetBy('u652',0,-68);

	MoveWidgetBy('u691',0,-68);

	MoveWidgetBy('u680',0,-68);

}

}

function rdo27onChangeDisCon2L3(e) {

if ((GetSelectedOption('u615')) != (PopulateVariables('Other Cancer'))) {

;

;

SetSelectedOption('u631', PopulateVariables('Cancer'));

SetSelectedOption('u632', GetSelectedOption('u615'));

	SetPanelVisibilityu624("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu652("hidden");

	SetPanelVisibilityu662("hidden");

	MoveWidgetBy('u652',0,-33);

	MoveWidgetBy('u691',0,-33);

	MoveWidgetBy('u680',0,-33);

}

}

function rdo27onChangeDisConAgeL3(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u621'));

}

}

function rdo27onClickAddDisCon3(e) {

if (true) {

;

SetWidgetRichText('u659', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]: [[varDisCon3]]</span>'));

SetWidgetRichText('u660', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u661', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u669', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u670', PopulateVariables(' '));

	SetPanelVisibilityu662("");

	SetPanelVisibilityu607("hidden");

	SetPanelVisibilityu624("hidden");

	SetPanelVisibilityu638("hidden");

	MoveWidgetBy('u652',0,-68);

	MoveWidgetBy('u680',0,-68);

	MoveWidgetBy('u691',0,-68);

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

function rdo21onClickHidePI(e) {

if (true) {

	SetPanelStateu550("pd1u550");

	SetPanelStateu468("pd0u468");

	SetPanelStateu475("pd0u475");

	SetPanelStateu497("pd0u497");

	SetPanelVisibilityu427("hidden");

	MoveWidgetBy('u558',0,-475);

	MoveWidgetBy('u691',0,-475);

	MoveWidgetBy('u566',0,-475);

	MoveWidgetBy('u419',0,-475);

}

}

function rdo21onClickShowPI(e) {

if (true) {

	SetPanelStateu550("pd0u550");

	SetPanelVisibilityu427("");

	MoveWidgetBy('u566',0,475);

	MoveWidgetBy('u558',0,475);

	MoveWidgetBy('u691',0,475);

	MoveWidgetBy('u419',0,475);

}

}

function rdo22onClickHideHI(e) {

if (true) {

	SetPanelStateu558("pd1u558");

	SetPanelVisibilityu566("hidden");

	MoveWidgetBy('u691',0,-285);

	MoveWidgetBy('u419',0,-285);

}

}

function rdo22onClickShowHI(e) {

if (true) {

	SetPanelStateu558("pd0u558");

	SetPanelVisibilityu566("");

	MoveWidgetBy('u691',0,285);

	MoveWidgetBy('u419',0,285);

}

}

function rdo23onChangeDisCon1(e) {

if ((GetSelectedOption('u573')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Me', GetSelectedOption('u573'));

	MoveWidgetBy('u419',0,32);

	MoveWidgetBy('u691',0,32);

rdo18onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u573')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u570'));

	MoveWidgetBy('u419',0,32);

	MoveWidgetBy('u691',0,32);

rdo18onChangeDisCon1(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Me', GetSelectedOption('u573'));

rdo18onChangeDisCon1(e);

}

}

function rdo23onChangeDisCon2(e) {

if ((GetSelectedOption('u576')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u570'));

	MoveWidgetBy('u419',0,32);

	MoveWidgetBy('u691',0,32);

rdo18onChangeDisCon2(e);

}
else
if (true) {

SetGlobalVariableValue('$varDisCon2Me', GetSelectedOption('u576'));

rdo18onChangeDisCon2(e);

}

}

function rdo23onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeMe', GetSelectedOption('u603'));

rdo18onChangeDisConAge(e);

}

}

function rdo23onClickDisConSearch(e) {

}

function rdo23onCheckSearchResult(e) {

}

function rdo23onClickDisConAdd(e) {

if (((GetSelectedOption('u573')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u573')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u586', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Me]]</span>'));

SetWidgetRichText('u587', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u588', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

	MoveWidgetBy('u419',0,0);

	MoveWidgetBy('u691',0,0);

rdo18onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u573')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u570'));

SetWidgetRichText('u586', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewMe]]</span>'));

SetWidgetRichText('u587', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u588', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

	MoveWidgetBy('u419',0,-32);

	MoveWidgetBy('u691',0,-32);

rdo18onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u576')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u576')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u586', PopulateVariables('<span style=" color:#000000; font-size:13px;"> [[varDisCon1Me]]: [[varDisCon2Me]]</span>'));

SetWidgetRichText('u587', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u588', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

	MoveWidgetBy('u419',0,-32);

	MoveWidgetBy('u691',0,-32);

rdo18onClickDisConAdd(e);

}

if ((GetSelectedOption('u576')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u570'));

SetWidgetRichText('u586', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Me]]: [[varDisConNewMe]]</span>'));

SetWidgetRichText('u587', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeMe]]</span></div>'));

SetWidgetRichText('u588', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	MoveWidgetBy('u419',0,-64);

	MoveWidgetBy('u691',0,-64);

rdo18onClickDisConAdd(e);

}

}

function rdo23onClickDisConCancel(e) {

if (((GetSelectedOption('u573')) != (PopulateVariables('Cancer'))) || ((GetSelectedOption('u573')) != (PopulateVariables('Other - Add new')))) {

	MoveWidgetBy('u419',0,0);

	MoveWidgetBy('u691',0,0);

rdo18onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u573')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u419',0,-32);

	MoveWidgetBy('u691',0,-32);

rdo18onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u576')) != (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u419',0,-32);

	MoveWidgetBy('u691',0,-32);

rdo18onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u576')) == (PopulateVariables('Other - Add new'))) {

	MoveWidgetBy('u419',0,-64);

	MoveWidgetBy('u691',0,-64);

rdo18onClickDisConCancel(e);

}

}

function rdo7onClickSaveMe(e) {

if (((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables(''))) || ((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables('Other')))) {

SetGlobalVariableValue('$varNameMe', GetWidgetFormText('u151'));

SetWidgetRichText('u144', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b>&nbsp; [[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:15px;">ME)</b></span>'));

SetWidgetRichText('u311', PopulateVariables('<div style="text-align:center"><span style=" color:#FFFFFF; font-size:12px;"><b>[[varNameMe]]\'s Diseases and Conditions</b></span></div>'));

SetWidgetRichText('u83', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u123', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

	SetPanelStateu65("pd1u65");

	SetPanelStateu72("pd1u72");

	SetPanelStateu79("pd1u79");

	SetPanelStateu39("pd2u39");

	SetPanelStateu121("pd0u121");

	SetPanelStateu94("pd1u94");

	SetPanelStateu101("pd1u101");

	SetPanelStateu136("pd5u136");

	SetPanelVisibilityu129("");

}
else
if ((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables('Male'))) {

SetGlobalVariableValue('$varNameMe', GetWidgetFormText('u151'));

SetWidgetRichText('u144', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b>&nbsp; [[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:15px;">ME)</b></span>'));

SetWidgetRichText('u311', PopulateVariables('<div style="text-align:center"><span style=" color:#FFFFFF; font-size:12px;"><b>[[varNameMe]]\'s Diseases and Conditions</b></span></div>'));

SetWidgetRichText('u87', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u127', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

	SetPanelStateu65("pd1u65");

	SetPanelStateu72("pd1u72");

	SetPanelStateu79("pd3u79");

	SetPanelStateu39("pd2u39");

	SetPanelStateu121("pd2u121");

	SetPanelStateu94("pd1u94");

	SetPanelStateu101("pd1u101");

	SetPanelStateu136("pd5u136");

	SetPanelVisibilityu129("");

}
else
if ((GetGlobalVariableValue('$varGenderMe')) == (PopulateVariables('Female'))) {

SetGlobalVariableValue('$varNameMe', GetWidgetFormText('u151'));

SetWidgetRichText('u144', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b>&nbsp; [[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:15px;">ME)</b></span>'));

SetWidgetRichText('u311', PopulateVariables('<div style="text-align:center"><span style=" color:#FFFFFF; font-size:12px;"><b>[[varNameMe]]\'s Diseases and Conditions</b></span></div>'));

SetWidgetRichText('u85', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

SetWidgetRichText('u125', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;"><b>[[varNameMe]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">ME)</b></span></div>'));

	SetPanelStateu65("pd1u65");

	SetPanelStateu72("pd1u72");

	SetPanelStateu79("pd2u79");

	SetPanelStateu39("pd2u39");

	SetPanelStateu121("pd1u121");

	SetPanelStateu94("pd1u94");

	SetPanelStateu101("pd1u101");

	SetPanelStateu136("pd5u136");

	SetPanelVisibilityu129("");

}

}

function rdo7onClickCancelMe(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo7onClickCloseMe(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo7onClickHelpMe(e) {

}

function rdo7onChangeDisCon1(e) {

}

function rdo7onChangeDisCon2(e) {

}

function rdo7onChangeDisConAge(e) {

}

function rdo7onClickDisConAdd(e) {

}

function rdo7onClickDisConCancel(e) {

}

function rdo38onChangeDisCon2(e) {

if ((GetSelectedOption('u899')) == (PopulateVariables('Other - Add new'))) {

	SetPanelStateu892("pd0u892");

	SetPanelVisibilityu892("");

	MoveWidgetBy('u912',0,32);

	MoveWidgetBy('u902',0,32);

	MoveWidgetBy('u892',0,32);

	MoveWidgetBy('u919',0,32);

	MoveWidgetBy('u925',0,32);

rdo36onChangeDisCon2(e);

}
else
if (true) {

rdo36onChangeDisCon2(e);

}

}

function rdo39onChangeDisConAge(e) {

if (true) {

rdo36onChangeDisConAge(e);

}

}

function rdo28onClickSaveInfo(e) {

if (true) {

rdo18onClickSaveMe(e);

}

}

function rdo28onClickCancelInfo(e) {

if (true) {

rdo18onClickCancelMe(e);

}

}

function rdo29onClickSaveRel(e) {

if (true) {

SetGlobalVariableValue('$varNameFather', GetWidgetFormText('u718'));

SetWidgetRichText('u1026', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetWidgetRichText('u78', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:12px;">FATHER)</b></span></div>'));

SetWidgetRichText('u107', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:12px;"><b>[[varNameFather]] (</b></span><b><span style=" font-family:\'Arial\'; color:#000000; font-size:12px;">FATHER)</b></span></div>'));

	SetPanelStateu72("pd2u72");

	SetPanelStateu101("pd2u101");

	SetPanelVisibilityu129("");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo29onClickCancelRel(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo29onClickCloseRel(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

function rdo29onClickDisConAdd(e) {

if (((GetSelectedOption('u896')) != (PopulateVariables('Select Disease or Condition'))) && (((GetSelectedOption('u896')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u896')) != (PopulateVariables('Other - Add new'))))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u896'));

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u926'));

SetWidgetRichText('u904', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]</span>'));

SetWidgetRichText('u906', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u908', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

}
else
if ((GetSelectedOption('u896')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u893'));

SetWidgetRichText('u906', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u908', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetWidgetRichText('u909', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisConNewFather]]</span>'));

}
else
if (((GetSelectedOption('u899')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u899')) != (PopulateVariables('Other - Add new')))) {

SetWidgetRichText('u904', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u906', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u908', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

}

if ((GetSelectedOption('u899')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u893'));

SetWidgetRichText('u906', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u908', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Remove</u></span></div>'));

SetWidgetRichText('u909', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

}

}

function rdo29onClickDisConCancel(e) {

}

function rdo29onChangeDisCon1(e) {

if ((GetSelectedOption('u896')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u896'));

}
else
if ((GetSelectedOption('u896')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewMe', GetWidgetFormText('u893'));

}
else
if (true) {

SetGlobalVariableValue('$varDisCon1Me', GetSelectedOption('u896'));

}

}

function rdo29onChangeDisCon2(e) {

if ((GetSelectedOption('u899')) == (PopulateVariables('Other - Add new'))) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u893'));

}
else
if (true) {

;

}

}

function rdo29onChangeDisConAge(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u926'));

}

}

function rdo54onClickSaveInfo(e) {

if (true) {

rdo42onClickSaveRel(e);

}

}

function rdo54onClickCancelInfo(e) {

if (true) {

rdo42onClickCancelRel(e);

}

}

function rdo55onClickDeleteRelYes(e) {

if (true) {

	SetPanelStateu62("pd0u62");

	SetPanelVisibilityu1444("hidden");

}

}

function rdo55onClickCloseMsgPleaseWait(e) {

}

function rdo55onClickReturnToSaveAs(e) {

}

function rdo9onUncheckEthnicityHL(e) {

if ((GetCheckState('u243')) == (false)) {

SetCheckState('u243', false);

SetCheckState('u241', false);

	SetPanelStateu240("pd0u240");

	MoveWidgetBy('u267',0,-65);

	MoveWidgetBy('u260',0,-65);

	MoveWidgetBy('u263',0,-65);

	MoveWidgetBy('u278',0,-65);

	MoveWidgetBy('u286',0,-65);

	MoveWidgetBy('u411',0,-65);

	MoveWidgetBy('u139',0,-65);

}

}

function rdo9onCheckEthinicityHL(e) {

if ((GetCheckState('u241')) == (true)) {

SetCheckState('u241', true);

SetCheckState('u243', true);

	SetPanelStateu240("pd1u240");

	MoveWidgetBy('u267',0,65);

	MoveWidgetBy('u278',0,65);

	MoveWidgetBy('u260',0,65);

	MoveWidgetBy('u263',0,65);

	MoveWidgetBy('u286',0,65);

	MoveWidgetBy('u411',0,65);

	MoveWidgetBy('u139',0,65);

}

}

function rdo53onChangeDisCon1L1(e) {

if ((GetSelectedOption('u1332')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1332'));

SetSelectedOption('u1294', PopulateVariables('Cancer'));

	SetPanelVisibilityu1287("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1301("hidden");

	SetPanelVisibilityu1325("hidden");

	MoveWidgetBy('u1315',0,35);

	MoveWidgetBy('u1371',0,35);

	MoveWidgetBy('u1343',0,35);

}
else
if ((GetSelectedOption('u1332')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1332'));

SetSelectedOption('u1311', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu1301("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1287("hidden");

	SetPanelVisibilityu1325("hidden");

	MoveWidgetBy('u1315',0,35);

	MoveWidgetBy('u1371',0,35);

	MoveWidgetBy('u1343',0,35);

}

}

function rdo53onChangeDisConAgeL1(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u1333'));

}

}

function rdo53onChangeDisCon1L2(e) {

if ((GetSelectedOption('u1294')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1294'));

SetSelectedOption('u1311', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu1301("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1287("hidden");

	SetPanelVisibilityu1325("hidden");

}

}

function rdo53onChangeDisCon2L2(e) {

if ((GetSelectedOption('u1295')) == (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1294'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u1295'));

SetSelectedOption('u1277', PopulateVariables('Cancer'));

SetSelectedOption('u1278', PopulateVariables('Other Cancer'));

	SetPanelVisibilityu1270("");

	SetPanelVisibilityu1287("hidden");

	SetPanelVisibilityu1301("hidden");

	SetPanelVisibilityu1325("hidden");

	MoveWidgetBy('u1315',0,33);

	MoveWidgetBy('u1371',0,33);

	MoveWidgetBy('u1343',0,33);

}
else
if ((GetSelectedOption('u1295')) != (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1294'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u1295'));

	SetPanelVisibilityu1315("");

}

}

function rdo53onChangeDisConAgeL2(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u1298'));

}

}

function rdo53onClickAddDisCon2(e) {

if (true) {

SetWidgetRichText('u1322', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]</span>'));

SetWidgetRichText('u1323', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u1324', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u1332', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1333', PopulateVariables(' '));

	SetPanelVisibilityu1325("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1287("hidden");

	SetPanelVisibilityu1301("hidden");

	MoveWidgetBy('u1343',0,-35);

	MoveWidgetBy('u1315',0,-35);

	MoveWidgetBy('u1371',0,-35);

}

}

function rdo53onChangeDisCon1New(e) {

if ((GetSelectedOption('u1311')) == (PopulateVariables('Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1311'));

SetSelectedOption('u1294', PopulateVariables('Cancer'));

	SetPanelVisibilityu1287("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1301("hidden");

	SetPanelVisibilityu1325("hidden");

}
else
if ((GetSelectedOption('u1311')) == (PopulateVariables('Select Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', PopulateVariables(''));

SetGlobalVariableValue('$varDisCon2Father', PopulateVariables(''));

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

	SetPanelVisibilityu1325("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1287("hidden");

	SetPanelVisibilityu1301("hidden");

	MoveWidgetBy('u1315',0,-35);

	MoveWidgetBy('u1371',0,-35);

	MoveWidgetBy('u1343',0,-35);

}

}

function rdo53onChangeDisConAgeNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u1312'));

}

}

function rdo53onClickAddDisConNew(e) {

if (true) {

SetGlobalVariableValue('$varDisConNewFather', GetWidgetFormText('u1310'));

SetWidgetRichText('u1322', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisConNewFather]]</span>'));

SetWidgetRichText('u1323', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u1324', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u1332', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1333', PopulateVariables(' '));

	SetPanelVisibilityu1325("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1287("hidden");

	SetPanelVisibilityu1301("hidden");

	MoveWidgetBy('u1315',0,-35);

	MoveWidgetBy('u1343',0,-35);

	MoveWidgetBy('u1371',0,-35);

}

}

function rdo53onChangeDisCon1L3(e) {

if ((GetSelectedOption('u1277')) == (PopulateVariables('Other Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1277'));

SetSelectedOption('u1311', PopulateVariables('Other Disease or Condition'));

	SetPanelVisibilityu1301("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1287("hidden");

	SetPanelVisibilityu1325("hidden");

	MoveWidgetBy('u1315',0,-33);

	MoveWidgetBy('u1371',0,-33);

	MoveWidgetBy('u1343',0,-33);

}
else
if ((GetSelectedOption('u1277')) == (PopulateVariables('Select Disease or Condition'))) {

SetGlobalVariableValue('$varDisCon1Father', PopulateVariables(''));

SetGlobalVariableValue('$varDisCon2Father', PopulateVariables(''));

;

SetGlobalVariableValue('$varDisConNewFather', PopulateVariables(''));

SetGlobalVariableValue('$varDisConAgeFather', PopulateVariables(''));

	SetPanelVisibilityu1315("");

	SetPanelVisibilityu1325("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1287("hidden");

	SetPanelVisibilityu1301("hidden");

	MoveWidgetBy('u1315',0,-68);

	MoveWidgetBy('u1371',0,-68);

	MoveWidgetBy('u1343',0,-68);

}

}

function rdo53onChangeDisCon2L3(e) {

if ((GetSelectedOption('u1278')) != (PopulateVariables('Other Cancer'))) {

SetGlobalVariableValue('$varDisCon1Father', GetSelectedOption('u1277'));

SetGlobalVariableValue('$varDisCon2Father', GetSelectedOption('u1278'));

SetSelectedOption('u1294', PopulateVariables('Cancer'));

SetSelectedOption('u1295', GetSelectedOption('u1278'));

	SetPanelVisibilityu1287("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1315("hidden");

	SetPanelVisibilityu1325("hidden");

	MoveWidgetBy('u1315',0,-33);

	MoveWidgetBy('u1371',0,-33);

	MoveWidgetBy('u1343',0,-33);

}

}

function rdo53onChangeDisConAgeL3(e) {

if (true) {

SetGlobalVariableValue('$varDisConAgeFather', GetSelectedOption('u1284'));

}

}

function rdo53onClickAddDisCon3(e) {

if (true) {

;

SetWidgetRichText('u1322', PopulateVariables('<span style=" color:#000000; font-size:13px;">[[varDisCon1Father]]: [[varDisCon2Father]]: [[varDisCon3]]</span>'));

SetWidgetRichText('u1323', PopulateVariables('<div style="text-align:center"><span style=" color:#000000; font-size:13px;">[[varDisConAgeFather]]</span></div>'));

SetWidgetRichText('u1324', PopulateVariables('<div style="text-align:center"><span style=" font-family:\'Arial\'; color:#0000FF; font-size:13px;"><u>Delete</u></span></div>'));

SetSelectedOption('u1332', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1333', PopulateVariables(' '));

	SetPanelVisibilityu1325("");

	SetPanelVisibilityu1270("hidden");

	SetPanelVisibilityu1287("hidden");

	SetPanelVisibilityu1301("hidden");

	MoveWidgetBy('u1315',0,-68);

	MoveWidgetBy('u1343',0,-68);

	MoveWidgetBy('u1371',0,-68);

}

}

function rdo50onChangeDisCon1(e) {

if ((GetSelectedOption('u1236')) == (PopulateVariables('Cancer'))) {

	SetPanelVisibilityu1238("");

	MoveWidgetBy('u1252',0,32);

	MoveWidgetBy('u1242',0,32);

	MoveWidgetBy('u1259',0,32);

	MoveWidgetBy('u1265',0,32);

rdo49onChangeDisCon1(e);

}
else
if ((GetSelectedOption('u1236')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu1232("");

	MoveWidgetBy('u1252',0,32);

	MoveWidgetBy('u1242',0,32);

	MoveWidgetBy('u1259',0,32);

	MoveWidgetBy('u1265',0,32);

rdo49onChangeDisCon1(e);

}
else
if (true) {

rdo49onChangeDisCon1(e);

}

}

function rdo51onChangeDisCon2(e) {

if ((GetSelectedOption('u1239')) == (PopulateVariables('Other - Add new'))) {

	SetPanelStateu1232("pd0u1232");

	SetPanelVisibilityu1232("");

	MoveWidgetBy('u1252',0,32);

	MoveWidgetBy('u1242',0,32);

	MoveWidgetBy('u1232',0,32);

	MoveWidgetBy('u1259',0,32);

	MoveWidgetBy('u1265',0,32);

rdo49onChangeDisCon2(e);

}
else
if (true) {

rdo49onChangeDisCon2(e);

}

}

function rdo52onChangeDisConAge(e) {

if (true) {

rdo49onChangeDisConAge(e);

}

}

function rdo43onChangeCauseOfDeath(e) {

if (((GetSelectedOption('u1095')) == (PopulateVariables('Diabetes'))) || (((GetSelectedOption('u1095')) == (PopulateVariables('Gastrointestinal Disease'))) || (((GetSelectedOption('u1095')) == (PopulateVariables('Kidney Disease'))) || (((GetSelectedOption('u1095')) == (PopulateVariables('Chronic Disease of Respiratory System'))) || (((GetSelectedOption('u1095')) == (PopulateVariables('Blood Clots'))) || ((GetSelectedOption('u1095')) == (PopulateVariables('Cancer')))))))) {

	SetPanelStateu1088("pd1u1088");

	SetPanelVisibilityu1088("");

}
else
if ((GetSelectedOption('u1095')) == (PopulateVariables('Other'))) {

	SetPanelStateu1088("pd0u1088");

	SetPanelVisibilityu1088("");

}

}

function rdo10onClickHidePI(e) {

if (true) {

	SetPanelStateu270("pd1u270");

	SetPanelStateu188("pd0u188");

	SetPanelStateu195("pd0u195");

	SetPanelStateu217("pd0u217");

	SetPanelVisibilityu147("hidden");

	MoveWidgetBy('u278',0,-475);

	MoveWidgetBy('u411',0,-475);

	MoveWidgetBy('u286',0,-475);

	MoveWidgetBy('u139',0,-475);

}

}

function rdo10onClickShowPI(e) {

if (true) {

	SetPanelStateu270("pd0u270");

	SetPanelVisibilityu147("");

	MoveWidgetBy('u286',0,475);

	MoveWidgetBy('u278',0,475);

	MoveWidgetBy('u411',0,475);

	MoveWidgetBy('u139',0,475);

}

}

var u289 = document.getElementById('u289');

var u733 = document.getElementById('u733');

var u966 = document.getElementById('u966');

var u233 = document.getElementById('u233');

var u381 = document.getElementById('u381');

u381.style.cursor = 'pointer';
if (bIE) u381.attachEvent("onclick", Clicku381);
else u381.addEventListener("click", Clicku381, true);
function Clicku381(e)
{

if (true) {

SetWidgetRichText('u379', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u381', PopulateVariables(''));

SetWidgetRichText('u380', PopulateVariables(''));

}

}
gv_vAlignTable['u381'] = 'top';
var u881 = document.getElementById('u881');

var u691 = document.getElementById('u691');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u143 = document.getElementById('u143');

var u1356 = document.getElementById('u1356');
gv_vAlignTable['u1356'] = 'center';
var u453 = document.getElementById('u453');

var u953 = document.getElementById('u953');
gv_vAlignTable['u953'] = 'center';
var u1353 = document.getElementById('u1353');

var u1352 = document.getElementById('u1352');

var u1351 = document.getElementById('u1351');

var u1257 = document.getElementById('u1257');

var u1046 = document.getElementById('u1046');
gv_vAlignTable['u1046'] = 'top';
var u134 = document.getElementById('u134');

var u1253 = document.getElementById('u1253');

var u1251 = document.getElementById('u1251');

u1251.style.cursor = 'pointer';
if (bIE) u1251.attachEvent("onclick", Clicku1251);
else u1251.addEventListener("click", Clicku1251, true);
function Clicku1251(e)
{

if (true) {

SetWidgetRichText('u1249', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u1251', PopulateVariables(''));

SetWidgetRichText('u1250', PopulateVariables(''));

}

}
gv_vAlignTable['u1251'] = 'top';
var u363 = document.getElementById('u363');

var u202 = document.getElementById('u202');

var u512 = document.getElementById('u512');

var u175 = document.getElementById('u175');

var u1048 = document.getElementById('u1048');
gv_vAlignTable['u1048'] = 'top';
var u1258 = document.getElementById('u1258');
gv_vAlignTable['u1258'] = 'center';
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

if (bIE) u648.attachEvent("onchange", Changeu648);
else u648.addEventListener("change", Changeu648, true);
function Changeu648(e)
{

if (true) {

rdo27onChangeDisCon1New(e);

}

}

var u1191 = document.getElementById('u1191');

var u1190 = document.getElementById('u1190');
gv_vAlignTable['u1190'] = 'top';
var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'center';
var u888 = document.getElementById('u888');
gv_vAlignTable['u888'] = 'center';
var u780 = document.getElementById('u780');
gv_vAlignTable['u780'] = 'top';
var u1227 = document.getElementById('u1227');

var u332 = document.getElementById('u332');

var u832 = document.getElementById('u832');
gv_vAlignTable['u832'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u980 = document.getElementById('u980');

var u790 = document.getElementById('u790');
gv_vAlignTable['u790'] = 'top';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u1504 = document.getElementById('u1504');
gv_vAlignTable['u1504'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'top';
var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'center';
var u391 = document.getElementById('u391');

u391.style.cursor = 'pointer';
if (bIE) u391.attachEvent("onclick", Clicku391);
else u391.addEventListener("click", Clicku391, true);
function Clicku391(e)
{

if (true) {

}

}

var u328 = document.getElementById('u328');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u1519 = document.getElementById('u1519');

var u992 = document.getElementById('u992');

if (bIE) u992.attachEvent("onchange", Changeu992);
else u992.addEventListener("change", Changeu992, true);
function Changeu992(e)
{

if (true) {

rdo40onChangeDisCon1L1(e);

}

}

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u702 = document.getElementById('u702');

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'top';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u801 = document.getElementById('u801');
gv_vAlignTable['u801'] = 'top';
var u674 = document.getElementById('u674');

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'top';
var u929 = document.getElementById('u929');
gv_vAlignTable['u929'] = 'center';
var u814 = document.getElementById('u814');
gv_vAlignTable['u814'] = 'top';
var u372 = document.getElementById('u372');

var u743 = document.getElementById('u743');
gv_vAlignTable['u743'] = 'top';
var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'top';
var u339 = document.getElementById('u339');

var u839 = document.getElementById('u839');

u839.style.cursor = 'pointer';
if (bIE) u839.attachEvent("onclick", Clicku839);
else u839.addEventListener("click", Clicku839, true);
function Clicku839(e)
{

if ((GetCheckState('u839')) == (true)) {

rdo33onCheckEthinicityHL(e);

}

}

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u931 = document.getElementById('u931');

var u741 = document.getElementById('u741');
gv_vAlignTable['u741'] = 'top';
var u249 = document.getElementById('u249');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u840 = document.getElementById('u840');
gv_vAlignTable['u840'] = 'top';
var u1271 = document.getElementById('u1271');

var u1270 = document.getElementById('u1270');

var u1357 = document.getElementById('u1357');

u1357.style.cursor = 'pointer';
if (bIE) u1357.attachEvent("onclick", Clicku1357);
else u1357.addEventListener("click", Clicku1357, true);
function Clicku1357(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u20 = document.getElementById('u20');

var u1355 = document.getElementById('u1355');

u1355.style.cursor = 'pointer';
if (bIE) u1355.attachEvent("onclick", Clicku1355);
else u1355.addEventListener("click", Clicku1355, true);
function Clicku1355(e)
{

if (true) {

rdo42onClickCloseRel(e);

}

}

var u1354 = document.getElementById('u1354');
gv_vAlignTable['u1354'] = 'center';
var u651 = document.getElementById('u651');
gv_vAlignTable['u651'] = 'center';
var u159 = document.getElementById('u159');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'top';
var u469 = document.getElementById('u469');

u469.style.cursor = 'pointer';
if (bIE) u469.attachEvent("onclick", Clicku469);
else u469.addEventListener("click", Clicku469, true);
function Clicku469(e)
{

if ((GetCheckState('u469')) == (true)) {

rdo19onCheckRaceAIAN(e);

}

}

var u308 = document.getElementById('u308');

u308.style.cursor = 'pointer';
if (bIE) u308.attachEvent("onclick", Clicku308);
else u308.addEventListener("click", Clicku308, true);
function Clicku308(e)
{

if (true) {

SetWidgetRichText('u306', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u308', PopulateVariables(''));

SetWidgetRichText('u307', PopulateVariables(''));

}

}
gv_vAlignTable['u308'] = 'top';
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

var u1358 = document.getElementById('u1358');
gv_vAlignTable['u1358'] = 'center';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

SetWidgetRichText('u1026', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u707', PopulateVariables('Father'));

SetSelectedOption('u716', PopulateVariables('Father'));

SetCheckState('u766', true);

	SetPanelStateu136("pd2u136");

	SetPanelStateu1012("pd2u1012");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

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

if ((GetCheckState('u218')) == (true)) {

rdo8onCheckRaceNHOPI(e);

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
gv_vAlignTable['u83'] = 'center';
var u471 = document.getElementById('u471');

u471.style.cursor = 'pointer';
if (bIE) u471.attachEvent("onclick", Clicku471);
else u471.addEventListener("click", Clicku471, true);
function Clicku471(e)
{

if ((GetCheckState('u471')) == (false)) {

rdo19onUncheckRaceAIAN(e);

}

}

var u486 = document.getElementById('u486');

var u620 = document.getElementById('u620');

var u824 = document.getElementById('u824');

var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'top';
var u938 = document.getElementById('u938');

if (bIE) u938.attachEvent("onchange", Changeu938);
else u938.addEventListener("change", Changeu938, true);
function Changeu938(e)
{

if (true) {

rdo40onChangeDisCon2L3(e);

}

}

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
var u1491 = document.getElementById('u1491');
gv_vAlignTable['u1491'] = 'top';
var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'top';
var u958 = document.getElementById('u958');

if (bIE) u958.attachEvent("onchange", Changeu958);
else u958.addEventListener("change", Changeu958, true);
function Changeu958(e)
{

if (true) {

rdo40onChangeDisConAgeL2(e);

}

}

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u382 = document.getElementById('u382');

var u658 = document.getElementById('u658');
gv_vAlignTable['u658'] = 'center';
var u15 = document.getElementById('u15');

var u46 = document.getElementById('u46');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u1366 = document.getElementById('u1366');
gv_vAlignTable['u1366'] = 'center';
var u750 = document.getElementById('u750');

var u954 = document.getElementById('u954');

if (bIE) u954.attachEvent("onchange", Changeu954);
else u954.addEventListener("change", Changeu954, true);
function Changeu954(e)
{

if (true) {

rdo40onChangeDisCon1L2(e);

}

}

var u292 = document.getElementById('u292');

var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'top';
var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u866 = document.getElementById('u866');

var u37 = document.getElementById('u37');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u1360 = document.getElementById('u1360');
gv_vAlignTable['u1360'] = 'center';
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

if ((GetCheckState('u478')) == (false)) {

rdo19onUncheckRaceAsian(e);

}

}

var u978 = document.getElementById('u978');

var u274 = document.getElementById('u274');

u274.style.cursor = 'pointer';
if (bIE) u274.attachEvent("onclick", Clicku274);
else u274.addEventListener("click", Clicku274, true);
function Clicku274(e)
{

if (true) {

rdo10onClickShowPI(e);

}

}

var u1057 = document.getElementById('u1057');
gv_vAlignTable['u1057'] = 'top';
var u1056 = document.getElementById('u1056');

if (bIE) u1056.attachEvent("onchange", Changeu1056);
else u1056.addEventListener("change", Changeu1056, true);
function Changeu1056(e)
{

if (((GetSelectedOption('u1056')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u1056')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u1056')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u1056')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u1056')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u1056')) != (PopulateVariables('Brother')))))))) {

	SetPanelStateu1045("pd1u1045");

	MoveWidgetBy('u1104',0,55);

	MoveWidgetBy('u1112',0,55);

	MoveWidgetBy('u1060',0,55);

	MoveWidgetBy('u1125',0,55);

	MoveWidgetBy('u1177',0,55);

	MoveWidgetBy('u1229',0,55);

	MoveWidgetBy('u1371',0,55);

	MoveWidgetBy('u1221',0,55);

	MoveWidgetBy('u1039',0,55);

	MoveWidgetBy('u1208',0,55);

}

}

var u423 = document.getElementById('u423');

var u923 = document.getElementById('u923');
gv_vAlignTable['u923'] = 'center';
var u1053 = document.getElementById('u1053');
gv_vAlignTable['u1053'] = 'top';
var u1052 = document.getElementById('u1052');
gv_vAlignTable['u1052'] = 'top';
var u1051 = document.getElementById('u1051');

var u1050 = document.getElementById('u1050');
gv_vAlignTable['u1050'] = 'top';
var u850 = document.getElementById('u850');
gv_vAlignTable['u850'] = 'top';
var u389 = document.getElementById('u389');

if (bIE) u389.attachEvent("onchange", Changeu389);
else u389.addEventListener("change", Changeu389, true);
function Changeu389(e)
{

if (true) {

rdo16onChangeDisCon1L1(e);

}

}

var u889 = document.getElementById('u889');

var u428 = document.getElementById('u428');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u19 = document.getElementById('u19');

var u1193 = document.getElementById('u1193');

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'top';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'center';
var u791 = document.getElementById('u791');
gv_vAlignTable['u791'] = 'top';
var u299 = document.getElementById('u299');

var u243 = document.getElementById('u243');

u243.style.cursor = 'pointer';
if (bIE) u243.attachEvent("onclick", Clicku243);
else u243.addEventListener("click", Clicku243, true);
function Clicku243(e)
{

if ((GetCheckState('u243')) == (false)) {

rdo9onUncheckEthnicityHL(e);

}

}

var u1350 = document.getElementById('u1350');

var u553 = document.getElementById('u553');

var u1507 = document.getElementById('u1507');

u1507.style.cursor = 'pointer';
if (bIE) u1507.attachEvent("onclick", Clicku1507);
else u1507.addEventListener("click", Clicku1507, true);
function Clicku1507(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

	SetPanelVisibilityu1444("hidden");

}

}

var u543 = document.getElementById('u543');

var u463 = document.getElementById('u463');

var u302 = document.getElementById('u302');

var u802 = document.getElementById('u802');

var u612 = document.getElementById('u612');

var u919 = document.getElementById('u919');

var u1273 = document.getElementById('u1273');

var u1509 = document.getElementById('u1509');
gv_vAlignTable['u1509'] = 'top';
var u279 = document.getElementById('u279');

u279.style.cursor = 'pointer';
if (bIE) u279.attachEvent("onclick", Clicku279);
else u279.addEventListener("click", Clicku279, true);
function Clicku279(e)
{

if (true) {

rdo11onClickHideHI(e);

}

}

var u373 = document.getElementById('u373');

var u38 = document.getElementById('u38');

var u88 = document.getElementById('u88');

var u522 = document.getElementById('u522');
gv_vAlignTable['u522'] = 'top';
var u1455 = document.getElementById('u1455');

u1455.style.cursor = 'pointer';
if (bIE) u1455.attachEvent("onclick", Clicku1455);
else u1455.addEventListener("click", Clicku1455, true);
function Clicku1455(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

	SetPanelVisibilityu1444("hidden");

}

}

var u1454 = document.getElementById('u1454');
gv_vAlignTable['u1454'] = 'center';
var u1453 = document.getElementById('u1453');

u1453.style.cursor = 'pointer';
if (bIE) u1453.attachEvent("onclick", Clicku1453);
else u1453.addEventListener("click", Clicku1453, true);
function Clicku1453(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

	SetPanelVisibilityu1444("hidden");

}

}

var u354 = document.getElementById('u354');

var u1450 = document.getElementById('u1450');
gv_vAlignTable['u1450'] = 'top';
var u488 = document.getElementById('u488');

var u988 = document.getElementById('u988');

var u1278 = document.getElementById('u1278');

if (bIE) u1278.attachEvent("onchange", Changeu1278);
else u1278.addEventListener("change", Changeu1278, true);
function Changeu1278(e)
{

if (true) {

rdo53onChangeDisCon2L3(e);

}

}

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

u432.style.cursor = 'pointer';
if (bIE) u432.attachEvent("onclick", Clicku432);
else u432.addEventListener("click", Clicku432, true);
function Clicku432(e)
{

if ((GetCheckState('u432')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Male'));

}

}

var u932 = document.getElementById('u932');
gv_vAlignTable['u932'] = 'center';
var u1458 = document.getElementById('u1458');
gv_vAlignTable['u1458'] = 'center';
var u480 = document.getElementById('u480');

var u580 = document.getElementById('u580');

var u1481 = document.getElementById('u1481');

u1481.style.cursor = 'pointer';
if (bIE) u1481.attachEvent("onclick", Clicku1481);
else u1481.addEventListener("click", Clicku1481, true);
function Clicku1481(e)
{

if (true) {

	SetPanelVisibilityu1444("hidden");

}

}

var u1480 = document.getElementById('u1480');
gv_vAlignTable['u1480'] = 'center';
var u398 = document.getElementById('u398');

var u876 = document.getElementById('u876');

var u264 = document.getElementById('u264');

var u342 = document.getElementById('u342');

u342.style.cursor = 'pointer';
if (bIE) u342.attachEvent("onclick", Clicku342);
else u342.addEventListener("click", Clicku342, true);
function Clicku342(e)
{

if (true) {

rdo16onClickAddDisCon3(e);

}

}

var u842 = document.getElementById('u842');
gv_vAlignTable['u842'] = 'top';
var u652 = document.getElementById('u652');

var u194 = document.getElementById('u194');

var u309 = document.getElementById('u309');

var u809 = document.getElementById('u809');
gv_vAlignTable['u809'] = 'top';
var u1155 = document.getElementById('u1155');

var u1239 = document.getElementById('u1239');

if (bIE) u1239.attachEvent("onchange", Changeu1239);
else u1239.addEventListener("change", Changeu1239, true);
function Changeu1239(e)
{

if (true) {

rdo51onChangeDisCon2(e);

}

}

var u266 = document.getElementById('u266');

u266.style.cursor = 'pointer';
if (bIE) u266.attachEvent("onclick", Clicku266);
else u266.addEventListener("click", Clicku266, true);
function Clicku266(e)
{

if (true) {

	NewWindow("help_Ashkenazi_Jew.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u266'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u901 = document.getElementById('u901');
gv_vAlignTable['u901'] = 'top';
var u711 = document.getElementById('u711');

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'top';
var u529 = document.getElementById('u529');

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u622 = document.getElementById('u622');

u622.style.cursor = 'pointer';
if (bIE) u622.attachEvent("onclick", Clicku622);
else u622.addEventListener("click", Clicku622, true);
function Clicku622(e)
{

if (true) {

rdo27onClickAddDisCon3(e);

}

}

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u972 = document.getElementById('u972');

if (bIE) u972.attachEvent("onchange", Changeu972);
else u972.addEventListener("change", Changeu972, true);
function Changeu972(e)
{

if (true) {

rdo40onChangeDisConAgeNew(e);

}

}

var u621 = document.getElementById('u621');

if (bIE) u621.attachEvent("onchange", Changeu621);
else u621.addEventListener("change", Changeu621, true);
function Changeu621(e)
{

if (true) {

rdo27onChangeDisConAgeL3(e);

}

}

var u825 = document.getElementById('u825');
gv_vAlignTable['u825'] = 'top';
var u443 = document.getElementById('u443');

var u439 = document.getElementById('u439');

var u939 = document.getElementById('u939');

var u722 = document.getElementById('u722');

u722.style.cursor = 'pointer';
if (bIE) u722.attachEvent("onclick", Clicku722);
else u722.addEventListener("click", Clicku722, true);
function Clicku722(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u722')) == (true))) {

SetCheckState('u722', true);

SetCheckState('u724', false);

SetCheckState('u726', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u722'));

SetCheckState('u740', true);

	SetPanelStateu720("pd1u720");

	MoveWidgetBy('u772',0,90);

	MoveWidgetBy('u785',0,90);

	MoveWidgetBy('u837',0,90);

	MoveWidgetBy('u889',0,90);

	MoveWidgetBy('u1031',0,90);

	MoveWidgetBy('u881',0,90);

	MoveWidgetBy('u699',0,90);

	MoveWidgetBy('u868',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u722')) == (true))) {

SetCheckState('u722', true);

SetCheckState('u724', false);

SetCheckState('u726', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u722'));

SetCheckState('u740', true);

	SetPanelStateu720("pd1u720");

	MoveWidgetBy('u699',0,90);

	MoveWidgetBy('u772',0,90);

	MoveWidgetBy('u785',0,90);

	MoveWidgetBy('u837',0,90);

	MoveWidgetBy('u889',0,90);

	MoveWidgetBy('u881',0,90);

	MoveWidgetBy('u1031',0,90);

	MoveWidgetBy('u868',0,90);

}

}

var u1291 = document.getElementById('u1291');
gv_vAlignTable['u1291'] = 'center';
var u1290 = document.getElementById('u1290');

var u882 = document.getElementById('u882');

u882.style.cursor = 'pointer';
if (bIE) u882.attachEvent("onclick", Clicku882);
else u882.addEventListener("click", Clicku882, true);
function Clicku882(e)
{

if (true) {

rdo35onClickHideHI(e);

}

}

var u235 = document.getElementById('u235');

var u349 = document.getElementById('u349');

var u383 = document.getElementById('u383');

var u883 = document.getElementById('u883');
gv_vAlignTable['u883'] = 'center';
var u763 = document.getElementById('u763');
gv_vAlignTable['u763'] = 'top';
var u1380 = document.getElementById('u1380');
gv_vAlignTable['u1380'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", Clicku80);
else u80.addEventListener("click", Clicku80, true);
function Clicku80(e)
{

if (true) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelStateu136("pd0u136");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

}

}

var u145 = document.getElementById('u145');

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{

if (true) {

rdo7onClickCloseMe(e);

}

}

var u1376 = document.getElementById('u1376');

var u751 = document.getElementById('u751');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'top';
var u293 = document.getElementById('u293');

if (bIE) u293.attachEvent("onchange", Changeu293);
else u293.addEventListener("change", Changeu293, true);
function Changeu293(e)
{

if (true) {

rdo13onChangeDisCon1(e);

}

}

var u569 = document.getElementById('u569');

var u408 = document.getElementById('u408');

var u908 = document.getElementById('u908');
gv_vAlignTable['u908'] = 'center';
var u1142 = document.getElementById('u1142');

var u21 = document.getElementById('u21');

var u1513 = document.getElementById('u1513');

var u1512 = document.getElementById('u1512');
gv_vAlignTable['u1512'] = 'center';
var u1510 = document.getElementById('u1510');
gv_vAlignTable['u1510'] = 'top';
var u661 = document.getElementById('u661');

u661.style.cursor = 'pointer';
if (bIE) u661.attachEvent("onclick", Clicku661);
else u661.addEventListener("click", Clicku661, true);
function Clicku661(e)
{

if (true) {

SetWidgetRichText('u659', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u661', PopulateVariables(''));

SetWidgetRichText('u660', PopulateVariables(''));

}

}
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

if ((GetCheckState('u818')) == (false)) {

rdo32onUncheckRaceNHOPI(e);

}

}

var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u93 = document.getElementById('u93');

var u571 = document.getElementById('u571');
gv_vAlignTable['u571'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u1066 = document.getElementById('u1066');

u1066.style.cursor = 'pointer';
if (bIE) u1066.attachEvent("onclick", Clicku1066);
else u1066.addEventListener("click", Clicku1066, true);
function Clicku1066(e)
{

if (true) {

}

}

var u720 = document.getElementById('u720');

var u924 = document.getElementById('u924');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u538 = document.getElementById('u538');
gv_vAlignTable['u538'] = 'top';
var u1061 = document.getElementById('u1061');
gv_vAlignTable['u1061'] = 'top';
var u1060 = document.getElementById('u1060');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", Clicku84);
else u84.addEventListener("click", Clicku84, true);
function Clicku84(e)
{

if (true) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelStateu136("pd1u136");

	SetPanelStateu550("pd1u550");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

	SetPanelVisibilityu427("hidden");

	MoveWidgetBy('u419',0,-475);

	MoveWidgetBy('u566',0,-475);

	MoveWidgetBy('u558',0,-475);

	MoveWidgetBy('u691',0,-475);

}

}

var u334 = document.getElementById('u334');

if (bIE) u334.attachEvent("onchange", Changeu334);
else u334.addEventListener("change", Changeu334, true);
function Changeu334(e)
{

if (true) {

rdo16onChangeDisCon1L3(e);

}

}

var u834 = document.getElementById('u834');

var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'top';
var u482 = document.getElementById('u482');

var u758 = document.getElementById('u758');

u758.style.cursor = 'pointer';
if (bIE) u758.attachEvent("onclick", Clicku758);
else u758.addEventListener("click", Clicku758, true);
function Clicku758(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u758')) == (true))) {

SetCheckState('u758', true);

SetCheckState('u760', false);

SetCheckState('u762', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u758'));

	SetPanelStateu720("pd1u720");

	MoveWidgetBy('u772',0,90);

	MoveWidgetBy('u785',0,90);

	MoveWidgetBy('u837',0,90);

	MoveWidgetBy('u889',0,90);

	MoveWidgetBy('u1031',0,90);

	MoveWidgetBy('u881',0,90);

	MoveWidgetBy('u699',0,90);

	MoveWidgetBy('u868',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u758')) == (true))) {

SetCheckState('u758', true);

SetCheckState('u760', false);

SetCheckState('u762', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u758'));

	SetPanelStateu720("pd1u720");

	MoveWidgetBy('u699',0,0);

	MoveWidgetBy('u772',0,0);

	MoveWidgetBy('u785',0,0);

	MoveWidgetBy('u837',0,0);

	MoveWidgetBy('u889',0,0);

	MoveWidgetBy('u881',0,0);

	MoveWidgetBy('u1031',0,0);

	MoveWidgetBy('u868',0,0);

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
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	self.location.href="View_History_Report_v3.html" + GetQuerystring();

}

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
gv_vAlignTable['u244'] = 'top';
var u296 = document.getElementById('u296');

if (bIE) u296.attachEvent("onchange", Changeu296);
else u296.addEventListener("change", Changeu296, true);
function Changeu296(e)
{

if (true) {

rdo14onChangeDisCon2(e);

}

}

var u554 = document.getElementById('u554');

u554.style.cursor = 'pointer';
if (bIE) u554.attachEvent("onclick", Clicku554);
else u554.addEventListener("click", Clicku554, true);
function Clicku554(e)
{

if (true) {

rdo21onClickShowPI(e);

}

}

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

SetWidgetRichText('u424', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> MOTHER</b></span>'));

	SetPanelStateu136("pd0u136");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

}

}

var u1467 = document.getElementById('u1467');

u1467.style.cursor = 'pointer';
if (bIE) u1467.attachEvent("onclick", Clicku1467);
else u1467.addEventListener("click", Clicku1467, true);
function Clicku1467(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

	SetPanelVisibilityu1444("hidden");

}

}

var u663 = document.getElementById('u663');

var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'top';
var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
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

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

var u1396 = document.getElementById('u1396');

var u1315 = document.getElementById('u1315');

var u732 = document.getElementById('u732');
gv_vAlignTable['u732'] = 'top';
var u670 = document.getElementById('u670');

if (bIE) u670.attachEvent("onchange", Changeu670);
else u670.addEventListener("change", Changeu670, true);
function Changeu670(e)
{

if (true) {

rdo27onChangeDisConAgeL1(e);

}

}

var u874 = document.getElementById('u874');

u874.style.cursor = 'pointer';
if (bIE) u874.attachEvent("onclick", Clicku874);
else u874.addEventListener("click", Clicku874, true);
function Clicku874(e)
{

if (true) {

rdo34onClickHidePI(e);

}

}

var u523 = document.getElementById('u523');

u523.style.cursor = 'pointer';
if (bIE) u523.attachEvent("onclick", Clicku523);
else u523.addEventListener("click", Clicku523, true);
function Clicku523(e)
{

if ((GetCheckState('u523')) == (false)) {

rdo20onUncheckEthnicityHL(e);

}

}

var u1319 = document.getElementById('u1319');
gv_vAlignTable['u1319'] = 'center';
var u773 = document.getElementById('u773');
gv_vAlignTable['u773'] = 'top';
var u989 = document.getElementById('u989');
gv_vAlignTable['u989'] = 'center';
var u718 = document.getElementById('u718');

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'top';
var u933 = document.getElementById('u933');

var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'center';
var u1246 = document.getElementById('u1246');
gv_vAlignTable['u1246'] = 'center';
var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'center';
var u892 = document.getElementById('u892');

var u1241 = document.getElementById('u1241');
gv_vAlignTable['u1241'] = 'top';
var u1018 = document.getElementById('u1018');
gv_vAlignTable['u1018'] = 'center';
var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u843 = document.getElementById('u843');

var u653 = document.getElementById('u653');

var u975 = document.getElementById('u975');

var u195 = document.getElementById('u195');

var u1308 = document.getElementById('u1308');

var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'top';
var u1249 = document.getElementById('u1249');
gv_vAlignTable['u1249'] = 'top';
var u1248 = document.getElementById('u1248');
gv_vAlignTable['u1248'] = 'center';
var u267 = document.getElementById('u267');

var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{

if ((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) {

SetWidgetRichText('u1026', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u707', PopulateVariables('Father'));

SetSelectedOption('u716', PopulateVariables('Father'));

SetCheckState('u766', true);

SetCheckState('u722', true);

SetCheckState('u740', true);

	SetPanelStateu136("pd2u136");

	SetPanelStateu1012("pd2u1012");

	SetPanelStateu873("pd1u873");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

	SetPanelVisibilityu703("hidden");

	MoveWidgetBy('u699',0,-355);

	MoveWidgetBy('u889',0,-355);

	MoveWidgetBy('u881',0,-355);

	MoveWidgetBy('u1031',0,-355);

}
else
if ((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) {

SetWidgetRichText('u1026', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetSelectedOption('u707', PopulateVariables('Father'));

SetSelectedOption('u716', PopulateVariables('Father'));

SetCheckState('u766', true);

SetCheckState('u722', true);

SetCheckState('u740', true);

	SetPanelStateu136("pd2u136");

	SetPanelStateu873("pd1u873");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

	SetPanelVisibilityu703("hidden");

	MoveWidgetBy('u699',0,-355);

	MoveWidgetBy('u889',0,-355);

	MoveWidgetBy('u881',0,-355);

	MoveWidgetBy('u1031',0,-355);

}

}

var u902 = document.getElementById('u902');

var u712 = document.getElementById('u712');
gv_vAlignTable['u712'] = 'top';
var u1222 = document.getElementById('u1222');

u1222.style.cursor = 'pointer';
if (bIE) u1222.attachEvent("onclick", Clicku1222);
else u1222.addEventListener("click", Clicku1222, true);
function Clicku1222(e)
{

if (true) {

rdo48onClickHideHI(e);

}

}

var u196 = document.getElementById('u196');

u196.style.cursor = 'pointer';
if (bIE) u196.attachEvent("onclick", Clicku196);
else u196.addEventListener("click", Clicku196, true);
function Clicku196(e)
{

if ((GetCheckState('u196')) == (true)) {

rdo8onCheckRaceAsian(e);

}

}

var u5 = document.getElementById('u5');

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'top';
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
gv_vAlignTable['u1228'] = 'center';
var u563 = document.getElementById('u563');
gv_vAlignTable['u563'] = 'center';
var u588 = document.getElementById('u588');

u588.style.cursor = 'pointer';
if (bIE) u588.attachEvent("onclick", Clicku588);
else u588.addEventListener("click", Clicku588, true);
function Clicku588(e)
{

if (true) {

SetWidgetRichText('u586', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u588', PopulateVariables(''));

SetWidgetRichText('u587', PopulateVariables(''));

}

}
gv_vAlignTable['u588'] = 'top';
var u965 = document.getElementById('u965');
gv_vAlignTable['u965'] = 'center';
var u1204 = document.getElementById('u1204');

u1204.style.cursor = 'pointer';
if (bIE) u1204.attachEvent("onclick", Clicku1204);
else u1204.addEventListener("click", Clicku1204, true);
function Clicku1204(e)
{

if (true) {

	NewWindow("help_Ashkenazi_Jew.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u1204'] = 'top';
var u39 = document.getElementById('u39');

var u89 = document.getElementById('u89');

var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'top';
var u680 = document.getElementById('u680');

var u884 = document.getElementById('u884');

var u498 = document.getElementById('u498');

u498.style.cursor = 'pointer';
if (bIE) u498.attachEvent("onclick", Clicku498);
else u498.addEventListener("click", Clicku498, true);
function Clicku498(e)
{

if ((GetCheckState('u498')) == (true)) {

rdo19onCheckRaceNHOPI(e);

}

}

var u998 = document.getElementById('u998');
gv_vAlignTable['u998'] = 'center';
var u701 = document.getElementById('u701');
gv_vAlignTable['u701'] = 'center';
var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'top';
var u942 = document.getElementById('u942');

var u752 = document.getElementById('u752');

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u981 = document.getElementById('u981');
gv_vAlignTable['u981'] = 'center';
var u409 = document.getElementById('u409');

u409.style.cursor = 'pointer';
if (bIE) u409.attachEvent("onclick", Clicku409);
else u409.addEventListener("click", Clicku409, true);
function Clicku409(e)
{

if (true) {

	NewWindow("help_Edit_Me.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u909 = document.getElementById('u909');
gv_vAlignTable['u909'] = 'top';
var u1259 = document.getElementById('u1259');

var u742 = document.getElementById('u742');

u742.style.cursor = 'pointer';
if (bIE) u742.attachEvent("onclick", Clicku742);
else u742.addEventListener("click", Clicku742, true);
function Clicku742(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u742')) == (true))) {

SetCheckState('u740', false);

SetCheckState('u742', true);

SetCheckState('u744', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u742'));

	SetPanelStateu720("pd2u720");

	MoveWidgetBy('u772',0,90);

	MoveWidgetBy('u837',0,90);

	MoveWidgetBy('u785',0,90);

	MoveWidgetBy('u889',0,90);

	MoveWidgetBy('u881',0,90);

	MoveWidgetBy('u1031',0,90);

	MoveWidgetBy('u699',0,90);

	MoveWidgetBy('u868',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u742')) == (true))) {

SetCheckState('u740', false);

SetCheckState('u742', true);

SetCheckState('u744', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u742'));

	SetPanelStateu720("pd2u720");

	MoveWidgetBy('u699',0,0);

	MoveWidgetBy('u772',0,0);

	MoveWidgetBy('u889',0,0);

	MoveWidgetBy('u868',0,0);

	MoveWidgetBy('u881',0,0);

	MoveWidgetBy('u1031',0,0);

	MoveWidgetBy('u785',0,0);

	MoveWidgetBy('u837',0,0);

}

}

var u662 = document.getElementById('u662');

var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'top';
var u319 = document.getElementById('u319');

u319.style.cursor = 'pointer';
if (bIE) u319.attachEvent("onclick", Clicku319);
else u319.addEventListener("click", Clicku319, true);
function Clicku319(e)
{

if (((GetSelectedOption('u293')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u296')) == (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u293', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u323', PopulateVariables(' '));

SetWidgetFormText('u290', PopulateVariables(''));

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

	MoveWidgetTo('u289',10,82);

	MoveWidgetTo('u309',10,180);

	MoveWidgetTo('u299',10,205);

	MoveWidgetTo('u316',10,114);

	MoveWidgetTo('u322',10,82);

rdo12onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u293')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u296')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u296')) != (PopulateVariables('Other - Add new'))))) {

SetSelectedOption('u293', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u323', PopulateVariables(' '));

SetWidgetFormText('u290', PopulateVariables(''));

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

	MoveWidgetTo('u309',10,180);

	MoveWidgetTo('u299',10,205);

	MoveWidgetTo('u316',10,114);

	MoveWidgetTo('u322',10,82);

rdo12onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u293')) == (PopulateVariables('Other - Add new'))) {

SetSelectedOption('u293', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u323', PopulateVariables(' '));

SetWidgetFormText('u290', PopulateVariables(''));

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

	MoveWidgetTo('u309',10,180);

	MoveWidgetTo('u299',10,205);

	MoveWidgetTo('u316',10,114);

	MoveWidgetTo('u322',10,82);

rdo12onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u293')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u293')) != (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u293', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u296', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u323', PopulateVariables(' '));

SetWidgetFormText('u290', PopulateVariables(''));

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

rdo12onClickDisConCancel(e);

}

}

var u819 = document.getElementById('u819');
gv_vAlignTable['u819'] = 'top';
var u629 = document.getElementById('u629');

var u1101 = document.getElementById('u1101');
gv_vAlignTable['u1101'] = 'top';
var u572 = document.getElementById('u572');

var u115 = document.getElementById('u115');

u115.style.cursor = 'pointer';
if (bIE) u115.attachEvent("onclick", Clicku115);
else u115.addEventListener("click", Clicku115, true);
function Clicku115(e)
{

if (true) {

	SetPanelStateu1444("pd5u1444");

	SetPanelVisibilityu1444("");

}

}

var u1076 = document.getElementById('u1076');
gv_vAlignTable['u1076'] = 'top';
var u425 = document.getElementById('u425');

u425.style.cursor = 'pointer';
if (bIE) u425.attachEvent("onclick", Clicku425);
else u425.addEventListener("click", Clicku425, true);
function Clicku425(e)
{

if (true) {

rdo18onClickCloseMe(e);

}

}

var u925 = document.getElementById('u925');

var u1073 = document.getElementById('u1073');

var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'top';
var u1071 = document.getElementById('u1071');

var u1070 = document.getElementById('u1070');

u1070.style.cursor = 'pointer';
if (bIE) u1070.attachEvent("onclick", Clicku1070);
else u1070.addEventListener("click", Clicku1070, true);
function Clicku1070(e)
{

if (true) {

	SetPanelStateu1069("pd1u1069");

}

}

var u1345 = document.getElementById('u1345');
gv_vAlignTable['u1345'] = 'center';
var u1344 = document.getElementById('u1344');

var u1084 = document.getElementById('u1084');

u1084.style.cursor = 'pointer';
if (bIE) u1084.attachEvent("onclick", Clicku1084);
else u1084.addEventListener("click", Clicku1084, true);
function Clicku1084(e)
{

if (true) {

}

}

var u631 = document.getElementById('u631');

if (bIE) u631.attachEvent("onchange", Changeu631);
else u631.addEventListener("change", Changeu631, true);
function Changeu631(e)
{

if (true) {

rdo27onChangeDisCon1L2(e);

}

}

var u835 = document.getElementById('u835');
gv_vAlignTable['u835'] = 'top';
var u1080 = document.getElementById('u1080');

u1080.style.cursor = 'pointer';
if (bIE) u1080.attachEvent("onclick", Clicku1080);
else u1080.addEventListener("click", Clicku1080, true);
function Clicku1080(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1080')) == (true))) {

SetCheckState('u1080', true);

SetCheckState('u1082', false);

SetCheckState('u1084', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1080'));

	SetPanelStateu1060("pd1u1060");

	MoveWidgetBy('u1112',0,90);

	MoveWidgetBy('u1125',0,90);

	MoveWidgetBy('u1177',0,90);

	MoveWidgetBy('u1229',0,90);

	MoveWidgetBy('u1371',0,90);

	MoveWidgetBy('u1221',0,90);

	MoveWidgetBy('u1039',0,90);

	MoveWidgetBy('u1208',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1080')) == (true))) {

SetCheckState('u1080', true);

SetCheckState('u1082', false);

SetCheckState('u1084', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1080'));

	SetPanelStateu1060("pd1u1060");

	MoveWidgetBy('u1039',0,0);

	MoveWidgetBy('u1112',0,0);

	MoveWidgetBy('u1125',0,0);

	MoveWidgetBy('u1177',0,0);

	MoveWidgetBy('u1229',0,0);

	MoveWidgetBy('u1221',0,0);

	MoveWidgetBy('u1371',0,0);

	MoveWidgetBy('u1208',0,0);

}

}

var u449 = document.getElementById('u449');

u449.style.cursor = 'pointer';
if (bIE) u449.attachEvent("onclick", Clicku449);
else u449.addEventListener("click", Clicku449, true);
function Clicku449(e)
{

if ((GetCheckState('u449')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Other'));

}

}

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'top';
var u983 = document.getElementById('u983');
gv_vAlignTable['u983'] = 'top';
var u1077 = document.getElementById('u1077');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u90 = document.getElementById('u90');

var u1457 = document.getElementById('u1457');

var u245 = document.getElementById('u245');

var u1492 = document.getElementById('u1492');
gv_vAlignTable['u1492'] = 'top';
var u359 = document.getElementById('u359');

var u393 = document.getElementById('u393');

var u669 = document.getElementById('u669');

if (bIE) u669.attachEvent("onchange", Changeu669);
else u669.addEventListener("change", Changeu669, true);
function Changeu669(e)
{

if (true) {

rdo27onChangeDisCon1L1(e);

}

}

var u508 = document.getElementById('u508');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u1499 = document.getElementById('u1499');

u1499.style.cursor = 'pointer';
if (bIE) u1499.attachEvent("onclick", Clicku1499);
else u1499.addEventListener("click", Clicku1499, true);
function Clicku1499(e)
{

if (true) {

rdo55onClickDeleteRelYes(e);

}

}

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u1476 = document.getElementById('u1476');
gv_vAlignTable['u1476'] = 'top';
var u761 = document.getElementById('u761');
gv_vAlignTable['u761'] = 'top';
var u304 = document.getElementById('u304');

var u804 = document.getElementById('u804');

var u579 = document.getElementById('u579');

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'center';
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
var u1474 = document.getElementById('u1474');
gv_vAlignTable['u1474'] = 'center';
var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

}

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

var u1471 = document.getElementById('u1471');

var u375 = document.getElementById('u375');

var u214 = document.getElementById('u214');

var u1475 = document.getElementById('u1475');
gv_vAlignTable['u1475'] = 'top';
var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'top';
var u1473 = document.getElementById('u1473');

u1473.style.cursor = 'pointer';
if (bIE) u1473.attachEvent("onclick", Clicku1473);
else u1473.addEventListener("click", Clicku1473, true);
function Clicku1473(e)
{

if (true) {

	SetPanelVisibilityu1444("hidden");

}

}

var u1309 = document.getElementById('u1309');

var u638 = document.getElementById('u638');

var u1477 = document.getElementById('u1477');

var u1478 = document.getElementById('u1478');
gv_vAlignTable['u1478'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u94 = document.getElementById('u94');

var u1479 = document.getElementById('u1479');

var u730 = document.getElementById('u730');

u730.style.cursor = 'pointer';
if (bIE) u730.attachEvent("onclick", Clicku730);
else u730.addEventListener("click", Clicku730, true);
function Clicku730(e)
{

if (true) {

	SetPanelStateu729("pd1u729");

}

}

var u934 = document.getElementById('u934');
gv_vAlignTable['u934'] = 'center';
var u548 = document.getElementById('u548');

var u286 = document.getElementById('u286');

var u865 = document.getElementById('u865');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u66 = document.getElementById('u66');

var u344 = document.getElementById('u344');

var u844 = document.getElementById('u844');
gv_vAlignTable['u844'] = 'top';
var u654 = document.getElementById('u654');
gv_vAlignTable['u654'] = 'center';
var u492 = document.getElementById('u492');

var u768 = document.getElementById('u768');

var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", Clicku57);
else u57.addEventListener("click", Clicku57, true);
function Clicku57(e)
{

if (true) {

	self.location.href="View_History_Report_v3.html" + GetQuerystring();

}

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
gv_vAlignTable['u517'] = 'top';
var u1287 = document.getElementById('u1287');

var u949 = document.getElementById('u949');
gv_vAlignTable['u949'] = 'center';
var u564 = document.getElementById('u564');

var u403 = document.getElementById('u403');

var u903 = document.getElementById('u903');

var u678 = document.getElementById('u678');

var u1127 = document.getElementById('u1127');

u1127.style.cursor = 'pointer';
if (bIE) u1127.attachEvent("onclick", Clicku1127);
else u1127.addEventListener("click", Clicku1127, true);
function Clicku1127(e)
{

if ((GetCheckState('u1127')) == (true)) {

rdo45onCheckRaceAIAN(e);

}

}

var u770 = document.getElementById('u770');

var u974 = document.getElementById('u974');
gv_vAlignTable['u974'] = 'center';
var u623 = document.getElementById('u623');
gv_vAlignTable['u623'] = 'center';
var u1182 = document.getElementById('u1182');
gv_vAlignTable['u1182'] = 'top';
var u385 = document.getElementById('u385');

var u1180 = document.getElementById('u1180');
gv_vAlignTable['u1180'] = 'top';
var u1275 = document.getElementById('u1275');

var u1129 = document.getElementById('u1129');

u1129.style.cursor = 'pointer';
if (bIE) u1129.attachEvent("onclick", Clicku1129);
else u1129.addEventListener("click", Clicku1129, true);
function Clicku1129(e)
{

if ((GetCheckState('u1129')) == (false)) {

rdo45onUncheckRaceAIAN(e);

}

}

var u589 = document.getElementById('u589');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u533 = document.getElementById('u533');

var u681 = document.getElementById('u681');

var u885 = document.getElementById('u885');

u885.style.cursor = 'pointer';
if (bIE) u885.attachEvent("onclick", Clicku885);
else u885.addEventListener("click", Clicku885, true);
function Clicku885(e)
{

if (true) {

rdo35onClickShowHI(e);

}

}

var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'top';
var u999 = document.getElementById('u999');

var u1037 = document.getElementById('u1037');

var u147 = document.getElementById('u147');

var u943 = document.getElementById('u943');

var u753 = document.getElementById('u753');

var u295 = document.getElementById('u295');

var u1369 = document.getElementById('u1369');

u1369.style.cursor = 'pointer';
if (bIE) u1369.attachEvent("onclick", Clicku1369);
else u1369.addEventListener("click", Clicku1369, true);
function Clicku1369(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u1496 = document.getElementById('u1496');
gv_vAlignTable['u1496'] = 'center';
var u278 = document.getElementById('u278');

var u838 = document.getElementById('u838');

var u1447 = document.getElementById('u1447');

var u367 = document.getElementById('u367');

var u502 = document.getElementById('u502');

var u959 = document.getElementById('u959');

u959.style.cursor = 'pointer';
if (bIE) u959.attachEvent("onclick", Clicku959);
else u959.addEventListener("click", Clicku959, true);
function Clicku959(e)
{

if (true) {

rdo40onClickAddDisCon2(e);

}

}

var u1441 = document.getElementById('u1441');
gv_vAlignTable['u1441'] = 'top';
var u573 = document.getElementById('u573');

if (bIE) u573.attachEvent("onchange", Changeu573);
else u573.addEventListener("change", Changeu573, true);
function Changeu573(e)
{

if (true) {

rdo24onChangeDisCon1(e);

}

}

var u58 = document.getElementById('u58');

var u1448 = document.getElementById('u1448');
gv_vAlignTable['u1448'] = 'center';
var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'center';
var u926 = document.getElementById('u926');

if (bIE) u926.attachEvent("onchange", Changeu926);
else u926.addEventListener("change", Changeu926, true);
function Changeu926(e)
{

if (true) {

rdo39onChangeDisConAge(e);

}

}

var u1179 = document.getElementById('u1179');

u1179.style.cursor = 'pointer';
if (bIE) u1179.attachEvent("onclick", Clicku1179);
else u1179.addEventListener("click", Clicku1179, true);
function Clicku1179(e)
{

if ((GetCheckState('u1179')) == (true)) {

rdo46onCheckEthinicityHL(e);

}

}

var u875 = document.getElementById('u875');
gv_vAlignTable['u875'] = 'center';
var u688 = document.getElementById('u688');

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

if (bIE) u49.attachEvent("onmouseout", MouseOutu49);
else u49.addEventListener("mouseout", MouseOutu49, true);
function MouseOutu49(e)
{
if (!IsTrueMouseOut('u49',e)) return;
if (true) {

	SetPanelStateu46("pd0u46");

}

}

var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if (true) {

	SetPanelStateu136("pd0u136");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

}

}

var u632 = document.getElementById('u632');

if (bIE) u632.attachEvent("onchange", Changeu632);
else u632.addEventListener("change", Changeu632, true);
function Changeu632(e)
{

if (true) {

rdo27onChangeDisCon2L2(e);

}

}

var u836 = document.getElementById('u836');
gv_vAlignTable['u836'] = 'top';
var u1307 = document.getElementById('u1307');
gv_vAlignTable['u1307'] = 'center';
var u484 = document.getElementById('u484');

var u984 = document.getElementById('u984');

u984.style.cursor = 'pointer';
if (bIE) u984.attachEvent("onclick", Clicku984);
else u984.addEventListener("click", Clicku984, true);
function Clicku984(e)
{

if (true) {

SetWidgetRichText('u982', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u984', PopulateVariables(''));

SetWidgetRichText('u983', PopulateVariables(''));

}

}
gv_vAlignTable['u984'] = 'top';
var u1304 = document.getElementById('u1304');

var u598 = document.getElementById('u598');
gv_vAlignTable['u598'] = 'center';
var u611 = document.getElementById('u611');
gv_vAlignTable['u611'] = 'center';
var u1301 = document.getElementById('u1301');

var u1300 = document.getElementById('u1300');
gv_vAlignTable['u1300'] = 'center';
var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'top';
var u401 = document.getElementById('u401');

var u394 = document.getElementById('u394');

var u894 = document.getElementById('u894');
gv_vAlignTable['u894'] = 'top';
var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u762 = document.getElementById('u762');

u762.style.cursor = 'pointer';
if (bIE) u762.attachEvent("onclick", Clicku762);
else u762.addEventListener("click", Clicku762, true);
function Clicku762(e)
{

if (true) {

}

}

var u601 = document.getElementById('u601');

var u805 = document.getElementById('u805');
gv_vAlignTable['u805'] = 'top';
var u419 = document.getElementById('u419');

var u799 = document.getElementById('u799');
gv_vAlignTable['u799'] = 'top';
var u72 = document.getElementById('u72');

var u1280 = document.getElementById('u1280');

var u672 = document.getElementById('u672');
gv_vAlignTable['u672'] = 'center';
var u215 = document.getElementById('u215');

var u525 = document.getElementById('u525');

var u1288 = document.getElementById('u1288');

var u1065 = document.getElementById('u1065');
gv_vAlignTable['u1065'] = 'top';
var u639 = document.getElementById('u639');

var u859 = document.getElementById('u859');

var u731 = document.getElementById('u731');

var u935 = document.getElementById('u935');

var u549 = document.getElementById('u549');
gv_vAlignTable['u549'] = 'top';
var u287 = document.getElementById('u287');

var u0 = document.getElementById('u0');

var u1131 = document.getElementById('u1131');
gv_vAlignTable['u1131'] = 'top';
var u1435 = document.getElementById('u1435');

var u1434 = document.getElementById('u1434');
gv_vAlignTable['u1434'] = 'top';
var u50 = document.getElementById('u50');

var u1431 = document.getElementById('u1431');
gv_vAlignTable['u1431'] = 'top';
var u345 = document.getElementById('u345');

var u845 = document.getElementById('u845');

var u163 = document.getElementById('u163');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u769 = document.getElementById('u769');
gv_vAlignTable['u769'] = 'top';
var u608 = document.getElementById('u608');

var u1386 = document.getElementById('u1386');
gv_vAlignTable['u1386'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u91 = document.getElementById('u91');

var u255 = document.getElementById('u255');

var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'center';
var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'center';
var u904 = document.getElementById('u904');
gv_vAlignTable['u904'] = 'center';
var u185 = document.getElementById('u185');

var u518 = document.getElementById('u518');
gv_vAlignTable['u518'] = 'top';
var u7 = document.getElementById('u7');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelStateu136("pd1u136");

	SetPanelStateu550("pd1u550");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

	SetPanelVisibilityu427("hidden");

	MoveWidgetBy('u566',0,-475);

	MoveWidgetBy('u558',0,-475);

	MoveWidgetBy('u691',0,-475);

}

}

var u63 = document.getElementById('u63');

var u1486 = document.getElementById('u1486');
gv_vAlignTable['u1486'] = 'center';
var u475 = document.getElementById('u475');

var u314 = document.getElementById('u314');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'top';
var u624 = document.getElementById('u624');

var u1147 = document.getElementById('u1147');
gv_vAlignTable['u1147'] = 'top';
var u738 = document.getElementById('u738');
gv_vAlignTable['u738'] = 'top';
var u1144 = document.getElementById('u1144');

var u54 = document.getElementById('u54');

var u928 = document.getElementById('u928');

var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u682 = document.getElementById('u682');
gv_vAlignTable['u682'] = 'center';
var u886 = document.getElementById('u886');
gv_vAlignTable['u886'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u95 = document.getElementById('u95');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'top';
var u944 = document.getElementById('u944');

if (bIE) u944.attachEvent("onchange", Changeu944);
else u944.addEventListener("change", Changeu944, true);
function Changeu944(e)
{

if (true) {

rdo40onChangeDisConAgeL3(e);

}

}

var u754 = document.getElementById('u754');

var u1387 = document.getElementById('u1387');

var u592 = document.getElementById('u592');

var u1384 = document.getElementById('u1384');
gv_vAlignTable['u1384'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u913 = document.getElementById('u913');

var u1381 = document.getElementById('u1381');

var u977 = document.getElementById('u977');
gv_vAlignTable['u977'] = 'center';
var u664 = document.getElementById('u664');
gv_vAlignTable['u664'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'top';
var u778 = document.getElementById('u778');
gv_vAlignTable['u778'] = 'top';
var u1388 = document.getElementById('u1388');
gv_vAlignTable['u1388'] = 'top';
var u1405 = document.getElementById('u1405');
gv_vAlignTable['u1405'] = 'center';
var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'top';
var u117 = document.getElementById('u117');

u117.style.cursor = 'pointer';
if (bIE) u117.attachEvent("onclick", Clicku117);
else u117.addEventListener("click", Clicku117, true);
function Clicku117(e)
{

if (true) {

	SetPanelStateu136("pd3u136");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

}

}

var u723 = document.getElementById('u723');
gv_vAlignTable['u723'] = 'top';
var u1237 = document.getElementById('u1237');
gv_vAlignTable['u1237'] = 'top';
var u1236 = document.getElementById('u1236');

if (bIE) u1236.attachEvent("onchange", Changeu1236);
else u1236.addEventListener("change", Changeu1236, true);
function Changeu1236(e)
{

if (true) {

rdo50onChangeDisCon1(e);

}

}

var u1235 = document.getElementById('u1235');

var u1234 = document.getElementById('u1234');
gv_vAlignTable['u1234'] = 'top';
var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'top';
var u689 = document.getElementById('u689');

u689.style.cursor = 'pointer';
if (bIE) u689.attachEvent("onclick", Clicku689);
else u689.addEventListener("click", Clicku689, true);
function Clicku689(e)
{

if (true) {

	NewWindow("help_Edit_Me.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u337 = document.getElementById('u337');

var u837 = document.getElementById('u837');

var u1317 = document.getElementById('u1317');
gv_vAlignTable['u1317'] = 'center';
var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'top';
var u985 = document.getElementById('u985');

var u1314 = document.getElementById('u1314');
gv_vAlignTable['u1314'] = 'center';
var u599 = document.getElementById('u599');

u599.style.cursor = 'pointer';
if (bIE) u599.attachEvent("onclick", Clicku599);
else u599.addEventListener("click", Clicku599, true);
function Clicku599(e)
{

if (((GetSelectedOption('u573')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u576')) == (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

	MoveWidgetTo('u569',10,82);

	MoveWidgetTo('u589',10,180);

	MoveWidgetTo('u579',10,205);

	MoveWidgetTo('u596',10,114);

	MoveWidgetTo('u602',10,82);

rdo23onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u573')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u576')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u576')) != (PopulateVariables('Other - Add new'))))) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

	MoveWidgetTo('u589',10,180);

	MoveWidgetTo('u579',10,205);

	MoveWidgetTo('u596',10,114);

	MoveWidgetTo('u602',10,82);

rdo23onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u573')) == (PopulateVariables('Other - Add new'))) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

	MoveWidgetTo('u589',10,180);

	MoveWidgetTo('u579',10,205);

	MoveWidgetTo('u596',10,114);

	MoveWidgetTo('u602',10,82);

rdo23onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u573')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u573')) != (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

rdo23onClickDisConCancel(e);

}

}

var u1312 = document.getElementById('u1312');

if (bIE) u1312.attachEvent("onchange", Changeu1312);
else u1312.addEventListener("change", Changeu1312, true);
function Changeu1312(e)
{

if (true) {

rdo53onChangeDisConAgeNew(e);

}

}

var u1311 = document.getElementById('u1311');

if (bIE) u1311.attachEvent("onchange", Changeu1311);
else u1311.addEventListener("change", Changeu1311, true);
function Changeu1311(e)
{

if (true) {

rdo53onChangeDisCon1New(e);

}

}

var u1310 = document.getElementById('u1310');

var u247 = document.getElementById('u247');

var u891 = document.getElementById('u891');
gv_vAlignTable['u891'] = 'top';
var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'center';
var u521 = document.getElementById('u521');

u521.style.cursor = 'pointer';
if (bIE) u521.attachEvent("onclick", Clicku521);
else u521.addEventListener("click", Clicku521, true);
function Clicku521(e)
{

if ((GetCheckState('u521')) == (true)) {

rdo20onCheckEthinicityHL(e);

}

}

var u1318 = document.getElementById('u1318');

var u1347 = document.getElementById('u1347');
gv_vAlignTable['u1347'] = 'center';
var u157 = document.getElementById('u157');

var u467 = document.getElementById('u467');

var u602 = document.getElementById('u602');

var u806 = document.getElementById('u806');

var u562 = document.getElementById('u562');

u562.style.cursor = 'pointer';
if (bIE) u562.attachEvent("onclick", Clicku562);
else u562.addEventListener("click", Clicku562, true);
function Clicku562(e)
{

if (true) {

rdo22onClickShowHI(e);

}

}

var u1006 = document.getElementById('u1006');

var u1005 = document.getElementById('u1005');
gv_vAlignTable['u1005'] = 'center';
var u1004 = document.getElementById('u1004');

var u1003 = document.getElementById('u1003');

var u1002 = document.getElementById('u1002');
gv_vAlignTable['u1002'] = 'center';
var u1001 = document.getElementById('u1001');

var u1000 = document.getElementById('u1000');
gv_vAlignTable['u1000'] = 'center';
var u673 = document.getElementById('u673');

var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{

if (true) {

SetWidgetRichText('u424', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> MOTHER</b></span>'));

	SetPanelStateu136("pd0u136");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

}

}

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'top';
var u1009 = document.getElementById('u1009');
gv_vAlignTable['u1009'] = 'center';
var u1008 = document.getElementById('u1008');

var u788 = document.getElementById('u788');
gv_vAlignTable['u788'] = 'top';
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
gv_vAlignTable['u436'] = 'top';
var u936 = document.getElementById('u936');
gv_vAlignTable['u936'] = 'center';
var u584 = document.getElementById('u584');

var u698 = document.getElementById('u698');
gv_vAlignTable['u698'] = 'center';
var u642 = document.getElementById('u642');
gv_vAlignTable['u642'] = 'center';
var u846 = document.getElementById('u846');
gv_vAlignTable['u846'] = 'top';
var u1407 = document.getElementById('u1407');
gv_vAlignTable['u1407'] = 'center';
var u494 = document.getElementById('u494');

var u994 = document.getElementById('u994');

u994.style.cursor = 'pointer';
if (bIE) u994.attachEvent("onclick", Clicku994);
else u994.addEventListener("click", Clicku994, true);
function Clicku994(e)
{

if (true) {

}

}

var u609 = document.getElementById('u609');
gv_vAlignTable['u609'] = 'center';
var u1403 = document.getElementById('u1403');

var u1402 = document.getElementById('u1402');
gv_vAlignTable['u1402'] = 'top';
var u276 = document.getElementById('u276');

var u1400 = document.getElementById('u1400');
gv_vAlignTable['u1400'] = 'center';
var u721 = document.getElementById('u721');
gv_vAlignTable['u721'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u566 = document.getElementById('u566');

var u405 = document.getElementById('u405');

var u905 = document.getElementById('u905');

var u1409 = document.getElementById('u1409');

var u519 = document.getElementById('u519');

var u1335 = document.getElementById('u1335');
gv_vAlignTable['u1335'] = 'center';
var u1334 = document.getElementById('u1334');

u1334.style.cursor = 'pointer';
if (bIE) u1334.attachEvent("onclick", Clicku1334);
else u1334.addEventListener("click", Clicku1334, true);
function Clicku1334(e)
{

if (true) {

}

}

var u369 = document.getElementById('u369');

if (bIE) u369.attachEvent("onchange", Changeu369);
else u369.addEventListener("change", Changeu369, true);
function Changeu369(e)
{

if (true) {

rdo16onChangeDisConAgeNew(e);

}

}

var u1332 = document.getElementById('u1332');

if (bIE) u1332.attachEvent("onchange", Changeu1332);
else u1332.addEventListener("change", Changeu1332, true);
function Changeu1332(e)
{

if (true) {

rdo53onChangeDisCon1L1(e);

}

}

var u772 = document.getElementById('u772');

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u815 = document.getElementById('u815');

var u625 = document.getElementById('u625');

var u1256 = document.getElementById('u1256');
gv_vAlignTable['u1256'] = 'center';
var u739 = document.getElementById('u739');
gv_vAlignTable['u739'] = 'top';
var u1339 = document.getElementById('u1339');

var u1338 = document.getElementById('u1338');
gv_vAlignTable['u1338'] = 'center';
var u1461 = document.getElementById('u1461');
gv_vAlignTable['u1461'] = 'top';
var u535 = document.getElementById('u535');

var u946 = document.getElementById('u946');
gv_vAlignTable['u946'] = 'center';
var u649 = document.getElementById('u649');

if (bIE) u649.attachEvent("onchange", Changeu649);
else u649.addEventListener("change", Changeu649, true);
function Changeu649(e)
{

if (true) {

rdo27onChangeDisConAgeNew(e);

}

}

var u683 = document.getElementById('u683');

var u887 = document.getElementById('u887');

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

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", Clicku169);
else u169.addEventListener("click", Clicku169, true);
function Clicku169(e)
{

if ((GetCheckState('u169')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Other'));

}

}

var u445 = document.getElementById('u445');

var u945 = document.getElementById('u945');

u945.style.cursor = 'pointer';
if (bIE) u945.attachEvent("onclick", Clicku945);
else u945.addEventListener("click", Clicku945, true);
function Clicku945(e)
{

if (true) {

rdo40onClickAddDisCon3(e);

}

}

var u559 = document.getElementById('u559');

u559.style.cursor = 'pointer';
if (bIE) u559.attachEvent("onclick", Clicku559);
else u559.addEventListener("click", Clicku559, true);
function Clicku559(e)
{

if (true) {

rdo22onClickHideHI(e);

}

}

var u297 = document.getElementById('u297');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

}

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

if (bIE) u355.attachEvent("onchange", Changeu355);
else u355.addEventListener("change", Changeu355, true);
function Changeu355(e)
{

if (true) {

rdo16onChangeDisConAgeL2(e);

}

}

var u855 = document.getElementById('u855');

var u665 = document.getElementById('u665');

var u504 = document.getElementById('u504');

var u779 = document.getElementById('u779');

var u618 = document.getElementById('u618');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u92 = document.getElementById('u92');

var u73 = document.getElementById('u73');

var u575 = document.getElementById('u575');

var u414 = document.getElementById('u414');

u414.style.cursor = 'pointer';
if (bIE) u414.attachEvent("onclick", Clicku414);
else u414.addEventListener("click", Clicku414, true);
function Clicku414(e)
{

if (true) {

rdo17onClickCancelInfo(e);

}

}

var u914 = document.getElementById('u914');
gv_vAlignTable['u914'] = 'center';
var u724 = document.getElementById('u724');

u724.style.cursor = 'pointer';
if (bIE) u724.attachEvent("onclick", Clicku724);
else u724.addEventListener("click", Clicku724, true);
function Clicku724(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u724')) == (true))) {

SetCheckState('u722', false);

SetCheckState('u724', true);

SetCheckState('u726', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u724'));

SetCheckState('u760', true);

	SetPanelStateu720("pd2u720");

	MoveWidgetBy('u772',0,90);

	MoveWidgetBy('u837',0,90);

	MoveWidgetBy('u785',0,90);

	MoveWidgetBy('u889',0,90);

	MoveWidgetBy('u881',0,90);

	MoveWidgetBy('u1031',0,90);

	MoveWidgetBy('u699',0,90);

	MoveWidgetBy('u868',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u724')) == (true))) {

SetCheckState('u722', false);

SetCheckState('u724', true);

SetCheckState('u726', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u724'));

SetCheckState('u760', true);

	SetPanelStateu720("pd2u720");

	MoveWidgetBy('u699',0,90);

	MoveWidgetBy('u772',0,90);

	MoveWidgetBy('u889',0,90);

	MoveWidgetBy('u868',0,90);

	MoveWidgetBy('u881',0,90);

	MoveWidgetBy('u1031',0,90);

	MoveWidgetBy('u785',0,90);

	MoveWidgetBy('u837',0,90);

}

}

var u864 = document.getElementById('u864');

u864.style.cursor = 'pointer';
if (bIE) u864.attachEvent("onclick", Clicku864);
else u864.addEventListener("click", Clicku864, true);
function Clicku864(e)
{

if (true) {

	NewWindow("help_Ashkenazi_Jew.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u864'] = 'top';
var u64 = document.getElementById('u64');

var u1157 = document.getElementById('u1157');
gv_vAlignTable['u1157'] = 'top';
var u634 = document.getElementById('u634');

var u140 = document.getElementById('u140');

var u782 = document.getElementById('u782');
gv_vAlignTable['u782'] = 'top';
var u986 = document.getElementById('u986');

var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{

if (true) {

	self.location.href="View_History_Report_v3.html" + GetQuerystring();

}

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
gv_vAlignTable['u1323'] = 'top';
var u1322 = document.getElementById('u1322');
gv_vAlignTable['u1322'] = 'top';
var u1321 = document.getElementById('u1321');
gv_vAlignTable['u1321'] = 'center';
var u1320 = document.getElementById('u1320');

var u544 = document.getElementById('u544');

var u396 = document.getElementById('u396');

var u896 = document.getElementById('u896');

if (bIE) u896.attachEvent("onchange", Changeu896);
else u896.addEventListener("change", Changeu896, true);
function Changeu896(e)
{

if (true) {

rdo37onChangeDisCon1(e);

}

}

var u1328 = document.getElementById('u1328');

var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if ((GetGlobalVariableValue('$varNameFather')) == (PopulateVariables(''))) {

SetWidgetRichText('u1026', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u707', PopulateVariables('Father'));

SetSelectedOption('u716', PopulateVariables('Father'));

SetCheckState('u766', true);

SetCheckState('u722', true);

SetCheckState('u740', true);

	SetPanelStateu136("pd2u136");

	SetPanelStateu1012("pd2u1012");

	SetPanelStateu873("pd1u873");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

	SetPanelVisibilityu703("hidden");

	MoveWidgetBy('u699',0,-355);

	MoveWidgetBy('u889',0,-355);

	MoveWidgetBy('u881',0,-355);

	MoveWidgetBy('u1031',0,-355);

}
else
if ((GetGlobalVariableValue('$varNameFather')) != (PopulateVariables(''))) {

SetWidgetRichText('u1026', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> [[varNameFather]] (FATHER)</b></span>'));

SetSelectedOption('u707', PopulateVariables('Father'));

SetSelectedOption('u716', PopulateVariables('Father'));

SetCheckState('u766', true);

SetCheckState('u722', true);

SetCheckState('u740', true);

	SetPanelStateu136("pd2u136");

	SetPanelStateu873("pd1u873");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

	SetPanelVisibilityu703("hidden");

	MoveWidgetBy('u699',0,-355);

	MoveWidgetBy('u889',0,-355);

	MoveWidgetBy('u881',0,-355);

	MoveWidgetBy('u1031',0,-355);

}

}

var u431 = document.getElementById('u431');

var u764 = document.getElementById('u764');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
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

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u1016 = document.getElementById('u1016');
gv_vAlignTable['u1016'] = 'center';
var u1015 = document.getElementById('u1015');

u1015.style.cursor = 'pointer';
if (bIE) u1015.attachEvent("onclick", Clicku1015);
else u1015.addEventListener("click", Clicku1015, true);
function Clicku1015(e)
{

if (true) {

rdo29onClickCloseRel(e);

}

}

var u1014 = document.getElementById('u1014');
gv_vAlignTable['u1014'] = 'center';
var u1013 = document.getElementById('u1013');

var u1012 = document.getElementById('u1012');

var u1011 = document.getElementById('u1011');

var u1010 = document.getElementById('u1010');

var u472 = document.getElementById('u472');
gv_vAlignTable['u472'] = 'top';
var u217 = document.getElementById('u217');

var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

SetWidgetRichText('u1026', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> FATHER</b></span>'));

SetSelectedOption('u707', PopulateVariables('Father'));

SetSelectedOption('u716', PopulateVariables('Father'));

SetCheckState('u766', true);

	SetPanelStateu136("pd2u136");

	SetPanelStateu1012("pd2u1012");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

}

}

var u1019 = document.getElementById('u1019');

var u570 = document.getElementById('u570');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u789 = document.getElementById('u789');

u789.style.cursor = 'pointer';
if (bIE) u789.attachEvent("onclick", Clicku789);
else u789.addEventListener("click", Clicku789, true);
function Clicku789(e)
{

if ((GetCheckState('u789')) == (false)) {

rdo32onUncheckRaceAIAN(e);

}

}

var u1027 = document.getElementById('u1027');

u1027.style.cursor = 'pointer';
if (bIE) u1027.attachEvent("onclick", Clicku1027);
else u1027.addEventListener("click", Clicku1027, true);
function Clicku1027(e)
{

if (true) {

rdo29onClickCloseRel(e);

}

}

var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (true) {

	SetPanelStateu1444("pd5u1444");

	SetPanelVisibilityu1444("");

}

}

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u1024 = document.getElementById('u1024');
gv_vAlignTable['u1024'] = 'center';
var u437 = document.getElementById('u437');

var u937 = document.getElementById('u937');

if (bIE) u937.attachEvent("onchange", Changeu937);
else u937.addEventListener("change", Changeu937, true);
function Changeu937(e)
{

if (true) {

rdo40onChangeDisCon1L3(e);

}

}

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'center';
var u699 = document.getElementById('u699');

var u1437 = document.getElementById('u1437');

var u1436 = document.getElementById('u1436');
gv_vAlignTable['u1436'] = 'top';
var u643 = document.getElementById('u643');

var u847 = document.getElementById('u847');

var u1433 = document.getElementById('u1433');
gv_vAlignTable['u1433'] = 'top';
var u1417 = document.getElementById('u1417');

u1417.style.cursor = 'pointer';
if (bIE) u1417.attachEvent("onclick", Clicku1417);
else u1417.addEventListener("click", Clicku1417, true);
function Clicku1417(e)
{

if (true) {

	NewWindow("help_Add_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u495 = document.getElementById('u495');

var u347 = document.getElementById('u347');

var u1414 = document.getElementById('u1414');

var u833 = document.getElementById('u833');

var u1412 = document.getElementById('u1412');

u1412.style.cursor = 'pointer';
if (bIE) u1412.attachEvent("onclick", Clicku1412);
else u1412.addEventListener("click", Clicku1412, true);
function Clicku1412(e)
{

if (true) {

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

var u1087 = document.getElementById('u1087');
gv_vAlignTable['u1087'] = 'top';
var u1086 = document.getElementById('u1086');
gv_vAlignTable['u1086'] = 'top';
var u1085 = document.getElementById('u1085');
gv_vAlignTable['u1085'] = 'top';
var u257 = document.getElementById('u257');

var u1083 = document.getElementById('u1083');
gv_vAlignTable['u1083'] = 'top';
var u567 = document.getElementById('u567');

var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'center';
var u906 = document.getElementById('u906');
gv_vAlignTable['u906'] = 'center';
var u1419 = document.getElementById('u1419');
gv_vAlignTable['u1419'] = 'top';
var u1418 = document.getElementById('u1418');
gv_vAlignTable['u1418'] = 'center';
var u1089 = document.getElementById('u1089');

var u1088 = document.getElementById('u1088');

var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u816 = document.getElementById('u816');

u816.style.cursor = 'pointer';
if (bIE) u816.attachEvent("onclick", Clicku816);
else u816.addEventListener("click", Clicku816, true);
function Clicku816(e)
{

if ((GetCheckState('u816')) == (true)) {

rdo32onCheckRaceNHOPI(e);

}

}

var u626 = document.getElementById('u626');
gv_vAlignTable['u626'] = 'center';
var u1107 = document.getElementById('u1107');
gv_vAlignTable['u1107'] = 'top';
var u1106 = document.getElementById('u1106');

var u1105 = document.getElementById('u1105');
gv_vAlignTable['u1105'] = 'top';
var u1104 = document.getElementById('u1104');

var u1103 = document.getElementById('u1103');
gv_vAlignTable['u1103'] = 'top';
var u1102 = document.getElementById('u1102');

u1102.style.cursor = 'pointer';
if (bIE) u1102.attachEvent("onclick", Clicku1102);
else u1102.addEventListener("click", Clicku1102, true);
function Clicku1102(e)
{

if (true) {

}

}

var u284 = document.getElementById('u284');

var u1100 = document.getElementById('u1100');

u1100.style.cursor = 'pointer';
if (bIE) u1100.attachEvent("onclick", Clicku1100);
else u1100.addEventListener("click", Clicku1100, true);
function Clicku1100(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1100')) == (true))) {

SetCheckState('u1098', false);

SetCheckState('u1100', true);

SetCheckState('u1102', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1100'));

	SetPanelStateu1060("pd2u1060");

	MoveWidgetBy('u1112',0,90);

	MoveWidgetBy('u1177',0,90);

	MoveWidgetBy('u1125',0,90);

	MoveWidgetBy('u1229',0,90);

	MoveWidgetBy('u1221',0,90);

	MoveWidgetBy('u1371',0,90);

	MoveWidgetBy('u1039',0,90);

	MoveWidgetBy('u1208',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1100')) == (true))) {

SetCheckState('u1098', false);

SetCheckState('u1100', true);

SetCheckState('u1102', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1100'));

	SetPanelStateu1060("pd2u1060");

	MoveWidgetBy('u1039',0,0);

	MoveWidgetBy('u1112',0,0);

	MoveWidgetBy('u1229',0,0);

	MoveWidgetBy('u1208',0,0);

	MoveWidgetBy('u1221',0,0);

	MoveWidgetBy('u1371',0,0);

	MoveWidgetBy('u1125',0,0);

	MoveWidgetBy('u1177',0,0);

}

}

var u1363 = document.getElementById('u1363');

u1363.style.cursor = 'pointer';
if (bIE) u1363.attachEvent("onclick", Clicku1363);
else u1363.addEventListener("click", Clicku1363, true);
function Clicku1363(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u1361 = document.getElementById('u1361');

u1361.style.cursor = 'pointer';
if (bIE) u1361.attachEvent("onclick", Clicku1361);
else u1361.addEventListener("click", Clicku1361, true);
function Clicku1361(e)
{

if (true) {

rdo42onClickCloseRel(e);

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
var u1487 = document.getElementById('u1487');

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u1485 = document.getElementById('u1485');

var u1484 = document.getElementById('u1484');
gv_vAlignTable['u1484'] = 'top';
var u1483 = document.getElementById('u1483');
gv_vAlignTable['u1483'] = 'top';
var u1482 = document.getElementById('u1482');
gv_vAlignTable['u1482'] = 'center';
var u446 = document.getElementById('u446');
gv_vAlignTable['u446'] = 'top';
var u137 = document.getElementById('u137');

var u1456 = document.getElementById('u1456');
gv_vAlignTable['u1456'] = 'center';
var u594 = document.getElementById('u594');

var u798 = document.getElementById('u798');

var u709 = document.getElementById('u709');

var u1489 = document.getElementById('u1489');

u1489.style.cursor = 'pointer';
if (bIE) u1489.attachEvent("onclick", Clicku1489);
else u1489.addEventListener("click", Clicku1489, true);
function Clicku1489(e)
{

if (true) {

	SetPanelVisibilityu1444("hidden");

}

}

var u1488 = document.getElementById('u1488');
gv_vAlignTable['u1488'] = 'center';
var u206 = document.getElementById('u206');

var u128 = document.getElementById('u128');

var u356 = document.getElementById('u356');

u356.style.cursor = 'pointer';
if (bIE) u356.attachEvent("onclick", Clicku356);
else u356.addEventListener("click", Clicku356, true);
function Clicku356(e)
{

if (true) {

rdo16onClickAddDisCon2(e);

}

}

var u856 = document.getElementById('u856');
gv_vAlignTable['u856'] = 'top';
var u666 = document.getElementById('u666');
gv_vAlignTable['u666'] = 'center';
var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'top';
var u1506 = document.getElementById('u1506');
gv_vAlignTable['u1506'] = 'center';
var u1505 = document.getElementById('u1505');

var u619 = document.getElementById('u619');

var u1503 = document.getElementById('u1503');

var u1502 = document.getElementById('u1502');
gv_vAlignTable['u1502'] = 'center';
var u1501 = document.getElementById('u1501');

u1501.style.cursor = 'pointer';
if (bIE) u1501.attachEvent("onclick", Clicku1501);
else u1501.addEventListener("click", Clicku1501, true);
function Clicku1501(e)
{

if (true) {

	SetPanelVisibilityu1444("hidden");

}

}

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u576 = document.getElementById('u576');

if (bIE) u576.attachEvent("onchange", Changeu576);
else u576.addEventListener("change", Changeu576, true);
function Changeu576(e)
{

if (true) {

rdo25onChangeDisCon2(e);

}

}

var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'center';
var u915 = document.getElementById('u915');

var u725 = document.getElementById('u725');
gv_vAlignTable['u725'] = 'top';
var u1508 = document.getElementById('u1508');
gv_vAlignTable['u1508'] = 'center';
var u783 = document.getElementById('u783');

var u1438 = document.getElementById('u1438');

var u316 = document.getElementById('u316');

var u635 = document.getElementById('u635');

if (bIE) u635.attachEvent("onchange", Changeu635);
else u635.addEventListener("change", Changeu635, true);
function Changeu635(e)
{

if (true) {

rdo27onChangeDisConAgeL2(e);

}

}

var u1128 = document.getElementById('u1128');
gv_vAlignTable['u1128'] = 'top';
var u749 = document.getElementById('u749');

var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'top';
var u987 = document.getElementById('u987');
gv_vAlignTable['u987'] = 'center';
var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", Clicku70);
else u70.addEventListener("click", Clicku70, true);
function Clicku70(e)
{

if (true) {

	SetPanelStateu136("pd0u136");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

}

}

var u510 = document.getElementById('u510');

var u659 = document.getElementById('u659');
gv_vAlignTable['u659'] = 'top';
var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'center';
var u897 = document.getElementById('u897');
gv_vAlignTable['u897'] = 'top';
var u200 = document.getElementById('u200');

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

var u1413 = document.getElementById('u1413');
gv_vAlignTable['u1413'] = 'center';
var u858 = document.getElementById('u858');

var u455 = document.getElementById('u455');

var u955 = document.getElementById('u955');

if (bIE) u955.attachEvent("onchange", Changeu955);
else u955.addEventListener("change", Changeu955, true);
function Changeu955(e)
{

if (true) {

rdo40onChangeDisCon2L2(e);

}

}

var u765 = document.getElementById('u765');
gv_vAlignTable['u765'] = 'top';
var u604 = document.getElementById('u604');
gv_vAlignTable['u604'] = 'top';
var u1082 = document.getElementById('u1082');

u1082.style.cursor = 'pointer';
if (bIE) u1082.attachEvent("onclick", Clicku1082);
else u1082.addEventListener("click", Clicku1082, true);
function Clicku1082(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1082')) == (true))) {

SetCheckState('u1080', false);

SetCheckState('u1082', true);

SetCheckState('u1084', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1082'));

	SetPanelStateu1060("pd2u1060");

	MoveWidgetBy('u1112',0,90);

	MoveWidgetBy('u1177',0,90);

	MoveWidgetBy('u1125',0,90);

	MoveWidgetBy('u1229',0,90);

	MoveWidgetBy('u1221',0,90);

	MoveWidgetBy('u1371',0,90);

	MoveWidgetBy('u1039',0,90);

	MoveWidgetBy('u1208',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1082')) == (true))) {

SetCheckState('u1080', false);

SetCheckState('u1082', true);

SetCheckState('u1084', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1082'));

	SetPanelStateu1060("pd2u1060");

	MoveWidgetBy('u1039',0,0);

	MoveWidgetBy('u1112',0,0);

	MoveWidgetBy('u1229',0,0);

	MoveWidgetBy('u1208',0,0);

	MoveWidgetBy('u1221',0,0);

	MoveWidgetBy('u1371',0,0);

	MoveWidgetBy('u1125',0,0);

	MoveWidgetBy('u1177',0,0);

}

}

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u1026 = document.getElementById('u1026');
gv_vAlignTable['u1026'] = 'center';
var u1025 = document.getElementById('u1025');

var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

}

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

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u1022 = document.getElementById('u1022');
gv_vAlignTable['u1022'] = 'center';
var u1021 = document.getElementById('u1021');

u1021.style.cursor = 'pointer';
if (bIE) u1021.attachEvent("onclick", Clicku1021);
else u1021.addEventListener("click", Clicku1021, true);
function Clicku1021(e)
{

if (true) {

rdo29onClickCloseRel(e);

}

}

var u1020 = document.getElementById('u1020');
gv_vAlignTable['u1020'] = 'center';
var u675 = document.getElementById('u675');
gv_vAlignTable['u675'] = 'center';
var u514 = document.getElementById('u514');
gv_vAlignTable['u514'] = 'top';
var u1349 = document.getElementById('u1349');
gv_vAlignTable['u1349'] = 'center';
var u1029 = document.getElementById('u1029');

u1029.style.cursor = 'pointer';
if (bIE) u1029.attachEvent("onclick", Clicku1029);
else u1029.addEventListener("click", Clicku1029, true);
function Clicku1029(e)
{

if (true) {

	NewWindow("help_Edit_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

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

var u240 = document.getElementById('u240');

var u586 = document.getElementById('u586');
gv_vAlignTable['u586'] = 'top';
var u65 = document.getElementById('u65');

var u1394 = document.getElementById('u1394');

u1394.style.cursor = 'pointer';
if (bIE) u1394.attachEvent("onclick", Clicku1394);
else u1394.addEventListener("click", Clicku1394, true);
function Clicku1394(e)
{

if (true) {

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

var u300 = document.getElementById('u300');

var u1331 = document.getElementById('u1331');
gv_vAlignTable['u1331'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u644 = document.getElementById('u644');
gv_vAlignTable['u644'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'top';
var u996 = document.getElementById('u996');

var u1424 = document.getElementById('u1424');
gv_vAlignTable['u1424'] = 'top';
var u771 = document.getElementById('u771');
gv_vAlignTable['u771'] = 'top';
var u1422 = document.getElementById('u1422');
gv_vAlignTable['u1422'] = 'top';
var u1097 = document.getElementById('u1097');
gv_vAlignTable['u1097'] = 'top';
var u1096 = document.getElementById('u1096');

if (bIE) u1096.attachEvent("onchange", Changeu1096);
else u1096.addEventListener("change", Changeu1096, true);
function Changeu1096(e)
{

if (true) {

rdo44onChangeDisConAge(e);

}

}

var u1095 = document.getElementById('u1095');

if (bIE) u1095.attachEvent("onchange", Changeu1095);
else u1095.addEventListener("change", Changeu1095, true);
function Changeu1095(e)
{

if (true) {

rdo43onChangeCauseOfDeath(e);

}

}

var u1094 = document.getElementById('u1094');

var u1093 = document.getElementById('u1093');

var u1092 = document.getElementById('u1092');

var u407 = document.getElementById('u407');

var u907 = document.getElementById('u907');

var u1225 = document.getElementById('u1225');

u1225.style.cursor = 'pointer';
if (bIE) u1225.attachEvent("onclick", Clicku1225);
else u1225.addEventListener("click", Clicku1225, true);
function Clicku1225(e)
{

if (true) {

rdo48onClickShowHI(e);

}

}

var u1224 = document.getElementById('u1224');

var u793 = document.getElementById('u793');

var u1099 = document.getElementById('u1099');
gv_vAlignTable['u1099'] = 'top';
var u1098 = document.getElementById('u1098');

u1098.style.cursor = 'pointer';
if (bIE) u1098.attachEvent("onclick", Clicku1098);
else u1098.addEventListener("click", Clicku1098, true);
function Clicku1098(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1098')) == (true))) {

SetCheckState('u1098', true);

SetCheckState('u1100', false);

SetCheckState('u1102', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1098'));

	SetPanelStateu1060("pd1u1060");

	MoveWidgetBy('u1112',0,90);

	MoveWidgetBy('u1125',0,90);

	MoveWidgetBy('u1177',0,90);

	MoveWidgetBy('u1229',0,90);

	MoveWidgetBy('u1371',0,90);

	MoveWidgetBy('u1221',0,90);

	MoveWidgetBy('u1039',0,90);

	MoveWidgetBy('u1208',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1098')) == (true))) {

SetCheckState('u1098', true);

SetCheckState('u1100', false);

SetCheckState('u1102', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1098'));

	SetPanelStateu1060("pd1u1060");

	MoveWidgetBy('u1039',0,0);

	MoveWidgetBy('u1112',0,0);

	MoveWidgetBy('u1125',0,0);

	MoveWidgetBy('u1177',0,0);

	MoveWidgetBy('u1229',0,0);

	MoveWidgetBy('u1221',0,0);

	MoveWidgetBy('u1371',0,0);

	MoveWidgetBy('u1208',0,0);

}

}

var u1238 = document.getElementById('u1238');

var u774 = document.getElementById('u774');

var u317 = document.getElementById('u317');

u317.style.cursor = 'pointer';
if (bIE) u317.attachEvent("onclick", Clicku317);
else u317.addEventListener("click", Clicku317, true);
function Clicku317(e)
{

if (((GetSelectedOption('u293')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u296')) == (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

	MoveWidgetTo('u289',10,82);

	MoveWidgetTo('u309',10,180);

	MoveWidgetTo('u299',10,205);

	MoveWidgetTo('u316',10,114);

	MoveWidgetTo('u322',10,82);

rdo12onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u293')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u296')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u296')) != (PopulateVariables('Other - Add new'))))) {

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

	MoveWidgetTo('u309',10,180);

	MoveWidgetTo('u299',10,205);

	MoveWidgetTo('u316',10,114);

	MoveWidgetTo('u322',10,82);

rdo12onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u293')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

	MoveWidgetTo('u309',10,180);

	MoveWidgetTo('u299',10,205);

	MoveWidgetTo('u316',10,114);

	MoveWidgetTo('u322',10,82);

rdo12onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u293')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u293')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu289("hidden");

	SetPanelVisibilityu295("hidden");

rdo12onClickDisConAdd(e);

}

}

var u817 = document.getElementById('u817');
gv_vAlignTable['u817'] = 'top';
var u1117 = document.getElementById('u1117');
gv_vAlignTable['u1117'] = 'top';
var u1116 = document.getElementById('u1116');

var u1115 = document.getElementById('u1115');
gv_vAlignTable['u1115'] = 'top';
var u1114 = document.getElementById('u1114');

var u1113 = document.getElementById('u1113');
gv_vAlignTable['u1113'] = 'top';
var u1112 = document.getElementById('u1112');

var u1111 = document.getElementById('u1111');
gv_vAlignTable['u1111'] = 'top';
var u1110 = document.getElementById('u1110');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u1262 = document.getElementById('u1262');

u1262.style.cursor = 'pointer';
if (bIE) u1262.attachEvent("onclick", Clicku1262);
else u1262.addEventListener("click", Clicku1262, true);
function Clicku1262(e)
{

if (((GetSelectedOption('u1236')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1239')) == (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u1236', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1239', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1266', PopulateVariables(' '));

SetWidgetFormText('u1233', PopulateVariables(''));

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetTo('u1232',10,82);

	MoveWidgetTo('u1252',10,180);

	MoveWidgetTo('u1242',10,205);

	MoveWidgetTo('u1259',10,114);

	MoveWidgetTo('u1265',10,82);

rdo49onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u1236')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u1239')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u1239')) != (PopulateVariables('Other - Add new'))))) {

SetSelectedOption('u1236', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1239', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1266', PopulateVariables(' '));

SetWidgetFormText('u1233', PopulateVariables(''));

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetTo('u1252',10,180);

	MoveWidgetTo('u1242',10,205);

	MoveWidgetTo('u1259',10,114);

	MoveWidgetTo('u1265',10,82);

rdo49onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u1236')) == (PopulateVariables('Other - Add new'))) {

SetSelectedOption('u1236', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1239', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1266', PopulateVariables(' '));

SetWidgetFormText('u1233', PopulateVariables(''));

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetTo('u1252',10,180);

	MoveWidgetTo('u1242',10,205);

	MoveWidgetTo('u1259',10,114);

	MoveWidgetTo('u1265',10,82);

rdo49onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u1236')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1236')) != (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u1236', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u1239', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u1266', PopulateVariables(' '));

SetWidgetFormText('u1233', PopulateVariables(''));

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

rdo49onClickDisConCancel(e);

}

}

var u537 = document.getElementById('u537');

var u520 = document.getElementById('u520');

var u1119 = document.getElementById('u1119');

var u685 = document.getElementById('u685');

var u1497 = document.getElementById('u1497');
gv_vAlignTable['u1497'] = 'top';
var u191 = document.getElementById('u191');

u191.style.cursor = 'pointer';
if (bIE) u191.attachEvent("onclick", Clicku191);
else u191.addEventListener("click", Clicku191, true);
function Clicku191(e)
{

if ((GetCheckState('u191')) == (false)) {

rdo8onUncheckRaceAIAN(e);

}

}

var u1495 = document.getElementById('u1495');

var u1494 = document.getElementById('u1494');
gv_vAlignTable['u1494'] = 'center';
var u1493 = document.getElementById('u1493');

var u1269 = document.getElementById('u1269');
gv_vAlignTable['u1269'] = 'center';
var u447 = document.getElementById('u447');

var u947 = document.getElementById('u947');

var u561 = document.getElementById('u561');

var u595 = document.getElementById('u595');
gv_vAlignTable['u595'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u756 = document.getElementById('u756');

if (bIE) u756.attachEvent("onchange", Changeu756);
else u756.addEventListener("change", Changeu756, true);
function Changeu756(e)
{

if (true) {

rdo31onChangeDisConAge(e);

}

}

var u1498 = document.getElementById('u1498');
gv_vAlignTable['u1498'] = 'top';
var u1244 = document.getElementById('u1244');
gv_vAlignTable['u1244'] = 'center';
var u1047 = document.getElementById('u1047');

if (bIE) u1047.attachEvent("onchange", Changeu1047);
else u1047.addEventListener("change", Changeu1047, true);
function Changeu1047(e)
{

if (((GetSelectedOption('u1047')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u1047')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u1047')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u1047')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u1047')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u1047')) != (PopulateVariables('Brother')))))))) {

	SetPanelStateu1045("pd1u1045");

	MoveWidgetBy('u1104',0,55);

	MoveWidgetBy('u1112',0,55);

	MoveWidgetBy('u1060',0,55);

	MoveWidgetBy('u1125',0,55);

	MoveWidgetBy('u1177',0,55);

	MoveWidgetBy('u1229',0,55);

	MoveWidgetBy('u1371',0,55);

	MoveWidgetBy('u1221',0,55);

	MoveWidgetBy('u1039',0,55);

	MoveWidgetBy('u1208',0,55);

}

}

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'center';
var u667 = document.getElementById('u667');

var u506 = document.getElementById('u506');

var u1516 = document.getElementById('u1516');
gv_vAlignTable['u1516'] = 'center';
var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u1075 = document.getElementById('u1075');

var u1074 = document.getElementById('u1074');
gv_vAlignTable['u1074'] = 'top';
var u1187 = document.getElementById('u1187');

var u1072 = document.getElementById('u1072');
gv_vAlignTable['u1072'] = 'top';
var u1185 = document.getElementById('u1185');

var u1184 = document.getElementById('u1184');
gv_vAlignTable['u1184'] = 'top';
var u1183 = document.getElementById('u1183');

var u577 = document.getElementById('u577');

var u416 = document.getElementById('u416');

var u916 = document.getElementById('u916');
gv_vAlignTable['u916'] = 'center';
var u726 = document.getElementById('u726');

u726.style.cursor = 'pointer';
if (bIE) u726.attachEvent("onclick", Clicku726);
else u726.addEventListener("click", Clicku726, true);
function Clicku726(e)
{

if (true) {

}

}

var u1518 = document.getElementById('u1518');
gv_vAlignTable['u1518'] = 'top';
var u1079 = document.getElementById('u1079');
gv_vAlignTable['u1079'] = 'top';
var u1078 = document.getElementById('u1078');
gv_vAlignTable['u1078'] = 'top';
var u1189 = document.getElementById('u1189');

var u1188 = document.getElementById('u1188');
gv_vAlignTable['u1188'] = 'top';
var u922 = document.getElementById('u922');

u922.style.cursor = 'pointer';
if (bIE) u922.attachEvent("onclick", Clicku922);
else u922.addEventListener("click", Clicku922, true);
function Clicku922(e)
{

if (((GetSelectedOption('u896')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u899')) == (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u896', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u899', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u926', PopulateVariables(' '));

SetWidgetFormText('u893', PopulateVariables(''));

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetTo('u892',10,82);

	MoveWidgetTo('u912',10,180);

	MoveWidgetTo('u902',10,205);

	MoveWidgetTo('u919',10,114);

	MoveWidgetTo('u925',10,82);

rdo36onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u896')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u899')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u899')) != (PopulateVariables('Other - Add new'))))) {

SetSelectedOption('u896', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u899', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u926', PopulateVariables(' '));

SetWidgetFormText('u893', PopulateVariables(''));

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetTo('u912',10,180);

	MoveWidgetTo('u902',10,205);

	MoveWidgetTo('u919',10,114);

	MoveWidgetTo('u925',10,82);

rdo36onClickDisConCancel(e);

}
else
if ((GetSelectedOption('u896')) == (PopulateVariables('Other - Add new'))) {

SetSelectedOption('u896', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u899', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u926', PopulateVariables(' '));

SetWidgetFormText('u893', PopulateVariables(''));

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetTo('u912',10,180);

	MoveWidgetTo('u902',10,205);

	MoveWidgetTo('u919',10,114);

	MoveWidgetTo('u925',10,82);

rdo36onClickDisConCancel(e);

}
else
if (((GetSelectedOption('u896')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u896')) != (PopulateVariables('Other - Add new')))) {

SetSelectedOption('u896', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u899', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u926', PopulateVariables(' '));

SetWidgetFormText('u893', PopulateVariables(''));

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

rdo36onClickDisConCancel(e);

}

}

var u79 = document.getElementById('u79');

var u693 = document.getElementById('u693');
gv_vAlignTable['u693'] = 'center';
var u636 = document.getElementById('u636');

u636.style.cursor = 'pointer';
if (bIE) u636.attachEvent("onclick", Clicku636);
else u636.addEventListener("click", Clicku636, true);
function Clicku636(e)
{

if (true) {

rdo27onClickAddDisCon2(e);

}

}

var u1207 = document.getElementById('u1207');
gv_vAlignTable['u1207'] = 'top';
var u1206 = document.getElementById('u1206');

var u1205 = document.getElementById('u1205');

var u784 = document.getElementById('u784');
gv_vAlignTable['u784'] = 'top';
var u1203 = document.getElementById('u1203');
gv_vAlignTable['u1203'] = 'top';
var u1091 = document.getElementById('u1091');

var u290 = document.getElementById('u290');

var u1200 = document.getElementById('u1200');
gv_vAlignTable['u1200'] = 'top';
var u963 = document.getElementById('u963');
gv_vAlignTable['u963'] = 'center';
var u546 = document.getElementById('u546');

u546.style.cursor = 'pointer';
if (bIE) u546.attachEvent("onclick", Clicku546);
else u546.addEventListener("click", Clicku546, true);
function Clicku546(e)
{

if (true) {

	NewWindow("help_Ashkenazi_Jew.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}
gv_vAlignTable['u546'] = 'top';
var u1209 = document.getElementById('u1209');

u1209.style.cursor = 'pointer';
if (bIE) u1209.attachEvent("onclick", Clicku1209);
else u1209.addEventListener("click", Clicku1209, true);
function Clicku1209(e)
{

if (true) {

	SetPanelStateu1208("pd1u1208");

	SetPanelVisibilityu1125("");

	SetPanelVisibilityu1177("");

	MoveWidgetBy('u1229',0,220);

	MoveWidgetBy('u1221',0,220);

	MoveWidgetBy('u1371',0,220);

	MoveWidgetBy('u1039',0,220);

}

}

var u694 = document.getElementById('u694');

u694.style.cursor = 'pointer';
if (bIE) u694.attachEvent("onclick", Clicku694);
else u694.addEventListener("click", Clicku694, true);
function Clicku694(e)
{

if (true) {

rdo28onClickCancelInfo(e);

}

}

var u420 = document.getElementById('u420');

var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'top';
var u956 = document.getElementById('u956');

var u766 = document.getElementById('u766');

var u605 = document.getElementById('u605');

var u719 = document.getElementById('u719');
gv_vAlignTable['u719'] = 'top';
var u1036 = document.getElementById('u1036');

var u1035 = document.getElementById('u1035');
gv_vAlignTable['u1035'] = 'center';
var u1034 = document.getElementById('u1034');

u1034.style.cursor = 'pointer';
if (bIE) u1034.attachEvent("onclick", Clicku1034);
else u1034.addEventListener("click", Clicku1034, true);
function Clicku1034(e)
{

if (true) {

rdo41onClickCancelInfo(e);

}

}

var u1033 = document.getElementById('u1033');
gv_vAlignTable['u1033'] = 'center';
var u1032 = document.getElementById('u1032');

u1032.style.cursor = 'pointer';
if (bIE) u1032.attachEvent("onclick", Clicku1032);
else u1032.addEventListener("click", Clicku1032, true);
function Clicku1032(e)
{

if (true) {

rdo41onClickSaveInfo(e);

}

}

var u1031 = document.getElementById('u1031');

var u1030 = document.getElementById('u1030');
gv_vAlignTable['u1030'] = 'center';
var u676 = document.getElementById('u676');

var u515 = document.getElementById('u515');

var u1393 = document.getElementById('u1393');
gv_vAlignTable['u1393'] = 'center';
var u226 = document.getElementById('u226');

var u1039 = document.getElementById('u1039');

var u1038 = document.getElementById('u1038');
gv_vAlignTable['u1038'] = 'center';
var u735 = document.getElementById('u735');

var u1306 = document.getElementById('u1306');

var u241 = document.getElementById('u241');

u241.style.cursor = 'pointer';
if (bIE) u241.attachEvent("onclick", Clicku241);
else u241.addEventListener("click", Clicku241, true);
function Clicku241(e)
{

if ((GetCheckState('u241')) == (true)) {

rdo9onCheckEthinicityHL(e);

}

}

var u587 = document.getElementById('u587');
gv_vAlignTable['u587'] = 'top';
var u1327 = document.getElementById('u1327');
gv_vAlignTable['u1327'] = 'center';
var u1303 = document.getElementById('u1303');
gv_vAlignTable['u1303'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u1324 = document.getElementById('u1324');

u1324.style.cursor = 'pointer';
if (bIE) u1324.attachEvent("onclick", Clicku1324);
else u1324.addEventListener("click", Clicku1324, true);
function Clicku1324(e)
{

if (true) {

SetWidgetRichText('u1322', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u1324', PopulateVariables(''));

SetWidgetRichText('u1323', PopulateVariables(''));

}

}
gv_vAlignTable['u1324'] = 'top';
var u645 = document.getElementById('u645');

var u336 = document.getElementById('u336');

var u759 = document.getElementById('u759');
gv_vAlignTable['u759'] = 'top';
var u497 = document.getElementById('u497');

var u997 = document.getElementById('u997');

var u593 = document.getElementById('u593');
gv_vAlignTable['u593'] = 'center';
var u800 = document.getElementById('u800');

var u1432 = document.getElementById('u1432');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u1430 = document.getElementById('u1430');

var u1490 = document.getElementById('u1490');
gv_vAlignTable['u1490'] = 'center';
var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'center';
var u377 = document.getElementById('u377');

var u704 = document.getElementById('u704');

var u863 = document.getElementById('u863');
gv_vAlignTable['u863'] = 'top';
var u1439 = document.getElementById('u1439');
gv_vAlignTable['u1439'] = 'top';
var u210 = document.getElementById('u210');

var u62 = document.getElementById('u62');

var u775 = document.getElementById('u775');
gv_vAlignTable['u775'] = 'top';
var u614 = document.getElementById('u614');

if (bIE) u614.attachEvent("onchange", Changeu614);
else u614.addEventListener("change", Changeu614, true);
function Changeu614(e)
{

if (true) {

rdo27onChangeDisCon1L3(e);

}

}

var u1139 = document.getElementById('u1139');
gv_vAlignTable['u1139'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u1126 = document.getElementById('u1126');

var u1125 = document.getElementById('u1125');

var u1124 = document.getElementById('u1124');
gv_vAlignTable['u1124'] = 'top';
var u1123 = document.getElementById('u1123');

var u1122 = document.getElementById('u1122');
gv_vAlignTable['u1122'] = 'top';
var u1121 = document.getElementById('u1121');

var u1120 = document.getElementById('u1120');
gv_vAlignTable['u1120'] = 'top';
var u973 = document.getElementById('u973');

u973.style.cursor = 'pointer';
if (bIE) u973.attachEvent("onclick", Clicku973);
else u973.addEventListener("click", Clicku973, true);
function Clicku973(e)
{

if (true) {

rdo40onClickAddDisConNew(e);

}

}

var u1515 = document.getElementById('u1515');

var u340 = document.getElementById('u340');

var u686 = document.getElementById('u686');
gv_vAlignTable['u686'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u1177 = document.getElementById('u1177');

var u1176 = document.getElementById('u1176');
gv_vAlignTable['u1176'] = 'top';
var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{

if (true) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelStateu136("pd1u136");

	SetPanelStateu550("pd1u550");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

	SetPanelVisibilityu427("hidden");

	MoveWidgetBy('u419',0,-475);

	MoveWidgetBy('u566',0,-475);

	MoveWidgetBy('u558',0,-475);

	MoveWidgetBy('u691',0,-475);

}

}

var u1174 = document.getElementById('u1174');

var u744 = document.getElementById('u744');

u744.style.cursor = 'pointer';
if (bIE) u744.attachEvent("onclick", Clicku744);
else u744.addEventListener("click", Clicku744, true);
function Clicku744(e)
{

if (true) {

}

}

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u596 = document.getElementById('u596');

var u964 = document.getElementById('u964');

var u167 = document.getElementById('u167');

var u1178 = document.getElementById('u1178');

var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'top';
var u236 = document.getElementById('u236');

var u1197 = document.getElementById('u1197');
gv_vAlignTable['u1197'] = 'top';
var u1196 = document.getElementById('u1196');
gv_vAlignTable['u1196'] = 'top';
var u1195 = document.getElementById('u1195');

var u1194 = document.getElementById('u1194');
gv_vAlignTable['u1194'] = 'top';
var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'top';
var u1192 = document.getElementById('u1192');
gv_vAlignTable['u1192'] = 'top';
var u417 = document.getElementById('u417');

var u917 = document.getElementById('u917');

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u450 = document.getElementById('u450');
gv_vAlignTable['u450'] = 'top';
var u1199 = document.getElementById('u1199');

var u1198 = document.getElementById('u1198');

var u1427 = document.getElementById('u1427');

var u151 = document.getElementById('u151');

var u327 = document.getElementById('u327');

var u827 = document.getElementById('u827');
gv_vAlignTable['u827'] = 'top';
var u637 = document.getElementById('u637');
gv_vAlignTable['u637'] = 'center';
var u1217 = document.getElementById('u1217');

u1217.style.cursor = 'pointer';
if (bIE) u1217.attachEvent("onclick", Clicku1217);
else u1217.addEventListener("click", Clicku1217, true);
function Clicku1217(e)
{

if (true) {

rdo47onClickShowPI(e);

}

}

var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u1215 = document.getElementById('u1215');
gv_vAlignTable['u1215'] = 'center';
var u785 = document.getElementById('u785');

var u940 = document.getElementById('u940');

var u1212 = document.getElementById('u1212');
gv_vAlignTable['u1212'] = 'center';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u1210 = document.getElementById('u1210');
gv_vAlignTable['u1210'] = 'center';
var u1500 = document.getElementById('u1500');
gv_vAlignTable['u1500'] = 'center';
var u1429 = document.getElementById('u1429');
gv_vAlignTable['u1429'] = 'top';
var u1428 = document.getElementById('u1428');
gv_vAlignTable['u1428'] = 'top';
var u547 = document.getElementById('u547');

var u1219 = document.getElementById('u1219');

var u695 = document.getElementById('u695');
gv_vAlignTable['u695'] = 'center';
var u873 = document.getElementById('u873');

var u1090 = document.getElementById('u1090');

var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u957 = document.getElementById('u957');

var u767 = document.getElementById('u767');
gv_vAlignTable['u767'] = 'top';
var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u895 = document.getElementById('u895');

var u1045 = document.getElementById('u1045');

var u1044 = document.getElementById('u1044');

var u1043 = document.getElementById('u1043');

var u1042 = document.getElementById('u1042');

var u1041 = document.getElementById('u1041');
gv_vAlignTable['u1041'] = 'center';
var u1040 = document.getElementById('u1040');

var u677 = document.getElementById('u677');
gv_vAlignTable['u677'] = 'center';
var u516 = document.getElementById('u516');

var u1049 = document.getElementById('u1049');

var u760 = document.getElementById('u760');

u760.style.cursor = 'pointer';
if (bIE) u760.attachEvent("onclick", Clicku760);
else u760.addEventListener("click", Clicku760, true);
function Clicku760(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u760')) == (true))) {

SetCheckState('u758', false);

SetCheckState('u760', true);

SetCheckState('u762', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u760'));

	SetPanelStateu720("pd2u720");

	MoveWidgetBy('u772',0,90);

	MoveWidgetBy('u837',0,90);

	MoveWidgetBy('u785',0,90);

	MoveWidgetBy('u889',0,90);

	MoveWidgetBy('u881',0,90);

	MoveWidgetBy('u1031',0,90);

	MoveWidgetBy('u699',0,90);

	MoveWidgetBy('u868',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u760')) == (true))) {

SetCheckState('u758', false);

SetCheckState('u760', true);

SetCheckState('u762', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u760'));

	SetPanelStateu720("pd2u720");

	MoveWidgetBy('u699',0,0);

	MoveWidgetBy('u772',0,0);

	MoveWidgetBy('u889',0,0);

	MoveWidgetBy('u868',0,0);

	MoveWidgetBy('u881',0,0);

	MoveWidgetBy('u1031',0,0);

	MoveWidgetBy('u785',0,0);

	MoveWidgetBy('u837',0,0);

}

}

var u1286 = document.getElementById('u1286');
gv_vAlignTable['u1286'] = 'center';
var u1285 = document.getElementById('u1285');

u1285.style.cursor = 'pointer';
if (bIE) u1285.attachEvent("onclick", Clicku1285);
else u1285.addEventListener("click", Clicku1285, true);
function Clicku1285(e)
{

if (true) {

rdo53onClickAddDisCon3(e);

}

}

var u1284 = document.getElementById('u1284');

if (bIE) u1284.attachEvent("onchange", Changeu1284);
else u1284.addEventListener("change", Changeu1284, true);
function Changeu1284(e)
{

if (true) {

rdo53onChangeDisConAgeL3(e);

}

}

var u1277 = document.getElementById('u1277');

if (bIE) u1277.attachEvent("onchange", Changeu1277);
else u1277.addEventListener("change", Changeu1277, true);
function Changeu1277(e)
{

if (true) {

rdo53onChangeDisCon1L3(e);

}

}

var u1276 = document.getElementById('u1276');
gv_vAlignTable['u1276'] = 'center';
var u136 = document.getElementById('u136');

var u1274 = document.getElementById('u1274');
gv_vAlignTable['u1274'] = 'center';
var u736 = document.getElementById('u736');
gv_vAlignTable['u736'] = 'top';
var u1272 = document.getElementById('u1272');
gv_vAlignTable['u1272'] = 'center';
var u1466 = document.getElementById('u1466');
gv_vAlignTable['u1466'] = 'center';
var u1465 = document.getElementById('u1465');

u1465.style.cursor = 'pointer';
if (bIE) u1465.attachEvent("onclick", Clicku1465);
else u1465.addEventListener("click", Clicku1465, true);
function Clicku1465(e)
{

if (true) {

	self.location.href="Open_Saved_History.html" + GetQuerystring();

	SetPanelVisibilityu1444("hidden");

}

}

var u1464 = document.getElementById('u1464');
gv_vAlignTable['u1464'] = 'center';
var u1463 = document.getElementById('u1463');

u1463.style.cursor = 'pointer';
if (bIE) u1463.attachEvent("onclick", Clicku1463);
else u1463.addEventListener("click", Clicku1463, true);
function Clicku1463(e)
{

if (true) {

	SetPanelVisibilityu1444("hidden");

}

}

var u1289 = document.getElementById('u1289');
gv_vAlignTable['u1289'] = 'center';
var u390 = document.getElementById('u390');

if (bIE) u390.attachEvent("onchange", Changeu390);
else u390.addEventListener("change", Changeu390, true);
function Changeu390(e)
{

if (true) {

rdo16onChangeDisConAgeL1(e);

}

}

var u890 = document.getElementById('u890');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u646 = document.getElementById('u646');

var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{

if ((GetCheckState('u152')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Male'));

}

}

var u794 = document.getElementById('u794');

u794.style.cursor = 'pointer';
if (bIE) u794.attachEvent("onclick", Clicku794);
else u794.addEventListener("click", Clicku794, true);
function Clicku794(e)
{

if ((GetCheckState('u794')) == (true)) {

rdo32onCheckRaceAsian(e);

}

}

var u1445 = document.getElementById('u1445');

var u1444 = document.getElementById('u1444');

var u1443 = document.getElementById('u1443');
gv_vAlignTable['u1443'] = 'top';
var u1442 = document.getElementById('u1442');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u1440 = document.getElementById('u1440');
gv_vAlignTable['u1440'] = 'top';
var u556 = document.getElementById('u556');

var u705 = document.getElementById('u705');

var u1449 = document.getElementById('u1449');
gv_vAlignTable['u1449'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u776 = document.getElementById('u776');

var u615 = document.getElementById('u615');

if (bIE) u615.attachEvent("onchange", Changeu615);
else u615.addEventListener("change", Changeu615, true);
function Changeu615(e)
{

if (true) {

rdo27onChangeDisCon2L3(e);

}

}

var u365 = document.getElementById('u365');

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u121 = document.getElementById('u121');

var u1136 = document.getElementById('u1136');

u1136.style.cursor = 'pointer';
if (bIE) u1136.attachEvent("onclick", Clicku1136);
else u1136.addEventListener("click", Clicku1136, true);
function Clicku1136(e)
{

if ((GetCheckState('u1136')) == (false)) {

rdo45onUncheckRaceAsian(e);

}

}

var u1135 = document.getElementById('u1135');
gv_vAlignTable['u1135'] = 'top';
var u1134 = document.getElementById('u1134');

u1134.style.cursor = 'pointer';
if (bIE) u1134.attachEvent("onclick", Clicku1134);
else u1134.addEventListener("click", Clicku1134, true);
function Clicku1134(e)
{

if ((GetCheckState('u1134')) == (true)) {

rdo45onCheckRaceAsian(e);

}

}

var u1133 = document.getElementById('u1133');

var u1132 = document.getElementById('u1132');

var u948 = document.getElementById('u948');

var u1130 = document.getElementById('u1130');
gv_vAlignTable['u1130'] = 'top';
var u1368 = document.getElementById('u1368');
gv_vAlignTable['u1368'] = 'center';
var u1181 = document.getElementById('u1181');

u1181.style.cursor = 'pointer';
if (bIE) u1181.attachEvent("onclick", Clicku1181);
else u1181.addEventListener("click", Clicku1181, true);
function Clicku1181(e)
{

if ((GetCheckState('u1181')) == (false)) {

rdo46onUncheckEthnicityHL(e);

}

}

var u341 = document.getElementById('u341');

if (bIE) u341.attachEvent("onchange", Changeu341);
else u341.addEventListener("change", Changeu341, true);
function Changeu341(e)
{

if (true) {

rdo16onChangeDisConAgeL3(e);

}

}

var u687 = document.getElementById('u687');

var u745 = document.getElementById('u745');
gv_vAlignTable['u745'] = 'top';
var u251 = document.getElementById('u251');

var u597 = document.getElementById('u597');

u597.style.cursor = 'pointer';
if (bIE) u597.attachEvent("onclick", Clicku597);
else u597.addEventListener("click", Clicku597, true);
function Clicku597(e)
{

if (((GetSelectedOption('u573')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u576')) == (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

	MoveWidgetTo('u569',10,82);

	MoveWidgetTo('u589',10,180);

	MoveWidgetTo('u579',10,205);

	MoveWidgetTo('u596',10,114);

	MoveWidgetTo('u602',10,82);

rdo23onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u573')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u576')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u576')) != (PopulateVariables('Other - Add new'))))) {

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

	MoveWidgetTo('u589',10,180);

	MoveWidgetTo('u579',10,205);

	MoveWidgetTo('u596',10,114);

	MoveWidgetTo('u602',10,82);

rdo23onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u573')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

	MoveWidgetTo('u589',10,180);

	MoveWidgetTo('u579',10,205);

	MoveWidgetTo('u596',10,114);

	MoveWidgetTo('u602',10,82);

rdo23onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u573')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u573')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu569("hidden");

	SetPanelVisibilityu575("hidden");

rdo23onClickDisConAdd(e);

}

}

var u400 = document.getElementById('u400');

var u900 = document.getElementById('u900');

var u655 = document.getElementById('u655');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u310 = document.getElementById('u310');

var u810 = document.getElementById('u810');

var u633 = document.getElementById('u633');

var u660 = document.getElementById('u660');
gv_vAlignTable['u660'] = 'top';
var u1377 = document.getElementById('u1377');

var u714 = document.getElementById('u714');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u1374 = document.getElementById('u1374');

u1374.style.cursor = 'pointer';
if (bIE) u1374.attachEvent("onclick", Clicku1374);
else u1374.addEventListener("click", Clicku1374, true);
function Clicku1374(e)
{

if (true) {

rdo54onClickCancelInfo(e);

}

}

var u220 = document.getElementById('u220');

u220.style.cursor = 'pointer';
if (bIE) u220.attachEvent("onclick", Clicku220);
else u220.addEventListener("click", Clicku220, true);
function Clicku220(e)
{

if ((GetCheckState('u220')) == (false)) {

rdo8onUncheckRaceNHOPI(e);

}

}

var u1373 = document.getElementById('u1373');
gv_vAlignTable['u1373'] = 'center';
var u1372 = document.getElementById('u1372');

u1372.style.cursor = 'pointer';
if (bIE) u1372.attachEvent("onclick", Clicku1372);
else u1372.addEventListener("click", Clicku1372, true);
function Clicku1372(e)
{

if (true) {

rdo54onClickSaveInfo(e);

}

}

var u1371 = document.getElementById('u1371');

var u1370 = document.getElementById('u1370');
gv_vAlignTable['u1370'] = 'center';
var u1167 = document.getElementById('u1167');
gv_vAlignTable['u1167'] = 'top';
var u1165 = document.getElementById('u1165');
gv_vAlignTable['u1165'] = 'top';
var u1379 = document.getElementById('u1379');

var u130 = document.getElementById('u130');

u130.style.cursor = 'pointer';
if (bIE) u130.attachEvent("onclick", Clicku130);
else u130.addEventListener("click", Clicku130, true);
function Clicku130(e)
{

if (true) {

	SetPanelStateu136("pd4u136");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

}

}

var u1226 = document.getElementById('u1226');
gv_vAlignTable['u1226'] = 'center';
var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'top';
var u786 = document.getElementById('u786');

var u1223 = document.getElementById('u1223');
gv_vAlignTable['u1223'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u1221 = document.getElementById('u1221');

var u1220 = document.getElementById('u1220');
gv_vAlignTable['u1220'] = 'center';
var u1169 = document.getElementById('u1169');
gv_vAlignTable['u1169'] = 'top';
var u1168 = document.getElementById('u1168');

var u1216 = document.getElementById('u1216');

var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u696 = document.getElementById('u696');

var u1213 = document.getElementById('u1213');

var u792 = document.getElementById('u792');

var u1211 = document.getElementById('u1211');

u1211.style.cursor = 'pointer';
if (bIE) u1211.attachEvent("onclick", Clicku1211);
else u1211.addEventListener("click", Clicku1211, true);
function Clicku1211(e)
{

if (true) {

	SetPanelStateu1208("pd0u1208");

	SetPanelVisibilityu1125("hidden");

	SetPanelVisibilityu1177("hidden");

	MoveWidgetBy('u1039',0,-220);

	MoveWidgetBy('u1229',0,-220);

	MoveWidgetBy('u1221',0,-220);

	MoveWidgetBy('u1371',0,-220);

}

}

var u607 = document.getElementById('u607');

var u1218 = document.getElementById('u1218');
gv_vAlignTable['u1218'] = 'center';
var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{

if (true) {

	SetPanelStateu136("pd3u136");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

}

}

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u1297 = document.getElementById('u1297');

var u1279 = document.getElementById('u1279');

var u1295 = document.getElementById('u1295');

if (bIE) u1295.attachEvent("onchange", Changeu1295);
else u1295.addEventListener("change", Changeu1295, true);
function Changeu1295(e)
{

if (true) {

rdo53onChangeDisCon2L2(e);

}

}

var u1294 = document.getElementById('u1294');

if (bIE) u1294.attachEvent("onchange", Changeu1294);
else u1294.addEventListener("change", Changeu1294, true);
function Changeu1294(e)
{

if (true) {

rdo53onChangeDisCon1L2(e);

}

}

var u1293 = document.getElementById('u1293');
gv_vAlignTable['u1293'] = 'center';
var u1292 = document.getElementById('u1292');

var u427 = document.getElementById('u427');

var u927 = document.getElementById('u927');
gv_vAlignTable['u927'] = 'top';
var u737 = document.getElementById('u737');

var u1521 = document.getElementById('u1521');
gv_vAlignTable['u1521'] = 'center';
var u1520 = document.getElementById('u1520');

u1520.style.cursor = 'pointer';
if (bIE) u1520.attachEvent("onclick", Clicku1520);
else u1520.addEventListener("click", Clicku1520, true);
function Clicku1520(e)
{

if (true) {

	SetPanelVisibilityu1444("hidden");

rdo55onClickCloseMsgPleaseWait(e);

}

}

var u1299 = document.getElementById('u1299');

u1299.style.cursor = 'pointer';
if (bIE) u1299.attachEvent("onclick", Clicku1299);
else u1299.addEventListener("click", Clicku1299, true);
function Clicku1299(e)
{

if (true) {

rdo53onClickAddDisCon2(e);

}

}

var u187 = document.getElementById('u187');

var u729 = document.getElementById('u729');

var u325 = document.getElementById('u325');

var u647 = document.getElementById('u647');

var u1055 = document.getElementById('u1055');
gv_vAlignTable['u1055'] = 'top';
var u582 = document.getElementById('u582');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'top';
var u795 = document.getElementById('u795');
gv_vAlignTable['u795'] = 'top';
var u1064 = document.getElementById('u1064');

u1064.style.cursor = 'pointer';
if (bIE) u1064.attachEvent("onclick", Clicku1064);
else u1064.addEventListener("click", Clicku1064, true);
function Clicku1064(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1064')) == (true))) {

SetCheckState('u1062', false);

SetCheckState('u1064', true);

SetCheckState('u1066', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1064'));

SetCheckState('u1100', true);

	SetPanelStateu1060("pd2u1060");

	MoveWidgetBy('u1112',0,90);

	MoveWidgetBy('u1177',0,90);

	MoveWidgetBy('u1125',0,90);

	MoveWidgetBy('u1229',0,90);

	MoveWidgetBy('u1221',0,90);

	MoveWidgetBy('u1371',0,90);

	MoveWidgetBy('u1039',0,90);

	MoveWidgetBy('u1208',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1064')) == (true))) {

SetCheckState('u1062', false);

SetCheckState('u1064', true);

SetCheckState('u1066', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1064'));

SetCheckState('u1100', true);

	SetPanelStateu1060("pd2u1060");

	MoveWidgetBy('u1039',0,90);

	MoveWidgetBy('u1112',0,90);

	MoveWidgetBy('u1229',0,90);

	MoveWidgetBy('u1208',0,90);

	MoveWidgetBy('u1221',0,90);

	MoveWidgetBy('u1371',0,90);

	MoveWidgetBy('u1125',0,90);

	MoveWidgetBy('u1177',0,90);

}

}

var u1063 = document.getElementById('u1063');
gv_vAlignTable['u1063'] = 'top';
var u1062 = document.getElementById('u1062');

u1062.style.cursor = 'pointer';
if (bIE) u1062.attachEvent("onclick", Clicku1062);
else u1062.addEventListener("click", Clicku1062, true);
function Clicku1062(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u1062')) == (true))) {

SetCheckState('u1062', true);

SetCheckState('u1064', false);

SetCheckState('u1066', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1062'));

SetCheckState('u1080', true);

	SetPanelStateu1060("pd1u1060");

	MoveWidgetBy('u1112',0,90);

	MoveWidgetBy('u1125',0,90);

	MoveWidgetBy('u1177',0,90);

	MoveWidgetBy('u1229',0,90);

	MoveWidgetBy('u1371',0,90);

	MoveWidgetBy('u1221',0,90);

	MoveWidgetBy('u1039',0,90);

	MoveWidgetBy('u1208',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u1062')) == (true))) {

SetCheckState('u1062', true);

SetCheckState('u1064', false);

SetCheckState('u1066', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u1062'));

SetCheckState('u1080', true);

	SetPanelStateu1060("pd1u1060");

	MoveWidgetBy('u1039',0,90);

	MoveWidgetBy('u1112',0,90);

	MoveWidgetBy('u1125',0,90);

	MoveWidgetBy('u1177',0,90);

	MoveWidgetBy('u1229',0,90);

	MoveWidgetBy('u1221',0,90);

	MoveWidgetBy('u1371',0,90);

	MoveWidgetBy('u1208',0,90);

}

}

var u1452 = document.getElementById('u1452');
gv_vAlignTable['u1452'] = 'center';
var u1451 = document.getElementById('u1451');

u1451.style.cursor = 'pointer';
if (bIE) u1451.attachEvent("onclick", Clicku1451);
else u1451.addEventListener("click", Clicku1451, true);
function Clicku1451(e)
{

if (true) {

	SetPanelVisibilityu1444("hidden");

}

}

var u366 = document.getElementById('u366');

var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'center';
var u706 = document.getElementById('u706');
gv_vAlignTable['u706'] = 'top';
var u1069 = document.getElementById('u1069');

var u1068 = document.getElementById('u1068');
gv_vAlignTable['u1068'] = 'top';
var u212 = document.getElementById('u212');

var u1426 = document.getElementById('u1426');
gv_vAlignTable['u1426'] = 'top';
var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'top';
var u1472 = document.getElementById('u1472');
gv_vAlignTable['u1472'] = 'center';
var u1423 = document.getElementById('u1423');

var u1470 = document.getElementById('u1470');
gv_vAlignTable['u1470'] = 'center';
var u1421 = document.getElementById('u1421');

var u692 = document.getElementById('u692');

u692.style.cursor = 'pointer';
if (bIE) u692.attachEvent("onclick", Clicku692);
else u692.addEventListener("click", Clicku692, true);
function Clicku692(e)
{

if (true) {

rdo28onClickSaveInfo(e);

}

}

var u777 = document.getElementById('u777');
gv_vAlignTable['u777'] = 'top';
var u616 = document.getElementById('u616');

var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{

if (true) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelStateu136("pd1u136");

	SetPanelStateu550("pd1u550");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

	SetPanelVisibilityu427("hidden");

	MoveWidgetBy('u566',0,-475);

	MoveWidgetBy('u558',0,-475);

	MoveWidgetBy('u691',0,-475);

}

}

var u1146 = document.getElementById('u1146');

var u1145 = document.getElementById('u1145');
gv_vAlignTable['u1145'] = 'top';
var u476 = document.getElementById('u476');

u476.style.cursor = 'pointer';
if (bIE) u476.attachEvent("onclick", Clicku476);
else u476.addEventListener("click", Clicku476, true);
function Clicku476(e)
{

if ((GetCheckState('u476')) == (true)) {

rdo19onCheckRaceAsian(e);

}

}

var u1143 = document.getElementById('u1143');
gv_vAlignTable['u1143'] = 'top';
var u962 = document.getElementById('u962');

var u1141 = document.getElementById('u1141');
gv_vAlignTable['u1141'] = 'top';
var u1140 = document.getElementById('u1140');

var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'top';
var u1149 = document.getElementById('u1149');
gv_vAlignTable['u1149'] = 'top';
var u1148 = document.getElementById('u1148');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u1385 = document.getElementById('u1385');

var u490 = document.getElementById('u490');

var u990 = document.getElementById('u990');

var u1382 = document.getElementById('u1382');
gv_vAlignTable['u1382'] = 'top';
var u1326 = document.getElementById('u1326');

var u1325 = document.getElementById('u1325');

var u746 = document.getElementById('u746');
gv_vAlignTable['u746'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u1389 = document.getElementById('u1389');
gv_vAlignTable['u1389'] = 'top';
var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'top';
var u656 = document.getElementById('u656');
gv_vAlignTable['u656'] = 'center';
var u1329 = document.getElementById('u1329');
gv_vAlignTable['u1329'] = 'center';
var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'top';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'center';
var u811 = document.getElementById('u811');
gv_vAlignTable['u811'] = 'top';
var u129 = document.getElementById('u129');

var u893 = document.getElementById('u893');

var u715 = document.getElementById('u715');
gv_vAlignTable['u715'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'top';
var u1316 = document.getElementById('u1316');

var u976 = document.getElementById('u976');

var u1313 = document.getElementById('u1313');

u1313.style.cursor = 'pointer';
if (bIE) u1313.attachEvent("onclick", Clicku1313);
else u1313.addEventListener("click", Clicku1313, true);
function Clicku1313(e)
{

if (true) {

rdo53onClickAddDisConNew(e);

}

}

var u335 = document.getElementById('u335');

if (bIE) u335.attachEvent("onchange", Changeu335);
else u335.addEventListener("change", Changeu335, true);
function Changeu335(e)
{

if (true) {

rdo16onChangeDisCon2L3(e);

}

}

var u899 = document.getElementById('u899');

if (bIE) u899.attachEvent("onchange", Changeu899);
else u899.addEventListener("change", Changeu899, true);
function Changeu899(e)
{

if (true) {

rdo38onChangeDisCon2(e);

}

}

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u879 = document.getElementById('u879');

var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u787 = document.getElementById('u787');

u787.style.cursor = 'pointer';
if (bIE) u787.attachEvent("onclick", Clicku787);
else u787.addEventListener("click", Clicku787, true);
function Clicku787(e)
{

if ((GetCheckState('u787')) == (true)) {

rdo32onCheckRaceAIAN(e);

}

}

var u1233 = document.getElementById('u1233');

var u1232 = document.getElementById('u1232');

var u995 = document.getElementById('u995');
gv_vAlignTable['u995'] = 'center';
var u1230 = document.getElementById('u1230');

var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'center';
var u862 = document.getElementById('u862');

var u351 = document.getElementById('u351');

if (bIE) u351.attachEvent("onchange", Changeu351);
else u351.addEventListener("change", Changeu351, true);
function Changeu351(e)
{

if (true) {

rdo16onChangeDisCon1L2(e);

}

}

var u697 = document.getElementById('u697');

var u500 = document.getElementById('u500');

u500.style.cursor = 'pointer';
if (bIE) u500.attachEvent("onclick", Clicku500);
else u500.addEventListener("click", Clicku500, true);
function Clicku500(e)
{

if ((GetCheckState('u500')) == (false)) {

rdo19onUncheckRaceNHOPI(e);

}

}

var u755 = document.getElementById('u755');

if (bIE) u755.attachEvent("onchange", Changeu755);
else u755.addEventListener("change", Changeu755, true);
function Changeu755(e)
{

if (true) {

rdo30onChangeCauseOfDeath(e);

}

}

var u261 = document.getElementById('u261');

var u1214 = document.getElementById('u1214');

u1214.style.cursor = 'pointer';
if (bIE) u1214.attachEvent("onclick", Clicku1214);
else u1214.addEventListener("click", Clicku1214, true);
function Clicku1214(e)
{

if (true) {

rdo47onClickHidePI(e);

}

}

var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'center';
var u910 = document.getElementById('u910');
gv_vAlignTable['u910'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u869 = document.getElementById('u869');

u869.style.cursor = 'pointer';
if (bIE) u869.attachEvent("onclick", Clicku869);
else u869.addEventListener("click", Clicku869, true);
function Clicku869(e)
{

if (true) {

	SetPanelStateu868("pd1u868");

	SetPanelVisibilityu785("");

	SetPanelVisibilityu837("");

	MoveWidgetBy('u889',0,220);

	MoveWidgetBy('u881',0,220);

	MoveWidgetBy('u1031',0,220);

	MoveWidgetBy('u699',0,220);

}

}

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u820 = document.getElementById('u820');

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u1166 = document.getElementById('u1166');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u1164 = document.getElementById('u1164');

var u230 = document.getElementById('u230');

var u540 = document.getElementById('u540');

var u358 = document.getElementById('u358');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'top';
var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u154 = document.getElementById('u154');

u154.style.cursor = 'pointer';
if (bIE) u154.attachEvent("onclick", Clicku154);
else u154.addEventListener("click", Clicku154, true);
function Clicku154(e)
{

if ((GetCheckState('u154')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Female'));

}

}

var u796 = document.getElementById('u796');

u796.style.cursor = 'pointer';
if (bIE) u796.attachEvent("onclick", Clicku796);
else u796.addEventListener("click", Clicku796, true);
function Clicku796(e)
{

if ((GetCheckState('u796')) == (false)) {

rdo32onUncheckRaceAsian(e);

}

}

var u1341 = document.getElementById('u1341');

var u268 = document.getElementById('u268');

var u1007 = document.getElementById('u1007');
gv_vAlignTable['u1007'] = 'center';
var u1118 = document.getElementById('u1118');
gv_vAlignTable['u1118'] = 'top';
var u708 = document.getElementById('u708');
gv_vAlignTable['u708'] = 'top';
var u1348 = document.getElementById('u1348');

var u707 = document.getElementById('u707');

if (bIE) u707.attachEvent("onchange", Changeu707);
else u707.addEventListener("change", Changeu707, true);
function Changeu707(e)
{

if (((GetSelectedOption('u707')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u707')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u707')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u707')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u707')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u707')) != (PopulateVariables('Brother')))))))) {

	SetPanelStateu705("pd1u705");

	MoveWidgetBy('u764',0,55);

	MoveWidgetBy('u772',0,55);

	MoveWidgetBy('u720',0,55);

	MoveWidgetBy('u785',0,55);

	MoveWidgetBy('u837',0,55);

	MoveWidgetBy('u889',0,55);

	MoveWidgetBy('u1031',0,55);

	MoveWidgetBy('u881',0,55);

	MoveWidgetBy('u699',0,55);

	MoveWidgetBy('u868',0,55);

}

}

var u860 = document.getElementById('u860');
gv_vAlignTable['u860'] = 'top';
var u178 = document.getElementById('u178');

var u1416 = document.getElementById('u1416');
gv_vAlignTable['u1416'] = 'center';
var u1415 = document.getElementById('u1415');

u1415.style.cursor = 'pointer';
if (bIE) u1415.attachEvent("onclick", Clicku1415);
else u1415.addEventListener("click", Clicku1415, true);
function Clicku1415(e)
{

if (true) {

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

var u1375 = document.getElementById('u1375');
gv_vAlignTable['u1375'] = 'center';
var u617 = document.getElementById('u617');

var u1411 = document.getElementById('u1411');
gv_vAlignTable['u1411'] = 'center';
var u1410 = document.getElementById('u1410');

u1410.style.cursor = 'pointer';
if (bIE) u1410.attachEvent("onclick", Clicku1410);
else u1410.addEventListener("click", Clicku1410, true);
function Clicku1410(e)
{

if (true) {

	SetPanelVisibilityu133("hidden");

	SetPanelVisibilityu136("hidden");

}

}

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u1156 = document.getElementById('u1156');

u1156.style.cursor = 'pointer';
if (bIE) u1156.attachEvent("onclick", Clicku1156);
else u1156.addEventListener("click", Clicku1156, true);
function Clicku1156(e)
{

if ((GetCheckState('u1156')) == (true)) {

rdo45onCheckRaceNHOPI(e);

}

}

var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'center';
var u1154 = document.getElementById('u1154');
gv_vAlignTable['u1154'] = 'top';
var u1153 = document.getElementById('u1153');

var u1152 = document.getElementById('u1152');

var u1151 = document.getElementById('u1151');
gv_vAlignTable['u1151'] = 'top';
var u1150 = document.getElementById('u1150');

var u527 = document.getElementById('u527');

var u1378 = document.getElementById('u1378');
gv_vAlignTable['u1378'] = 'center';
var u872 = document.getElementById('u872');
gv_vAlignTable['u872'] = 'center';
var u1159 = document.getElementById('u1159');
gv_vAlignTable['u1159'] = 'top';
var u1158 = document.getElementById('u1158');

u1158.style.cursor = 'pointer';
if (bIE) u1158.attachEvent("onclick", Clicku1158);
else u1158.addEventListener("click", Clicku1158, true);
function Clicku1158(e)
{

if ((GetCheckState('u1158')) == (false)) {

rdo45onUncheckRaceNHOPI(e);

}

}

var u181 = document.getElementById('u181');

var u1395 = document.getElementById('u1395');
gv_vAlignTable['u1395'] = 'center';
var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'top';
var u991 = document.getElementById('u991');
gv_vAlignTable['u991'] = 'center';
var u1392 = document.getElementById('u1392');

u1392.style.cursor = 'pointer';
if (bIE) u1392.attachEvent("onclick", Clicku1392);
else u1392.addEventListener("click", Clicku1392, true);
function Clicku1392(e)
{

if (true) {

SetWidgetRichText('u1366', PopulateVariables('<span style=" color:#000000; font-size:15px;"><b> BROTHER</b></span>'));

SetCheckState('u1106', true);

SetSelectedOption('u1047', PopulateVariables('Brother'));

SetSelectedOption('u1056', PopulateVariables('Brother'));

	SetPanelStateu136("pd3u136");

	SetPanelStateu1352("pd2u1352");

}

}

var u1391 = document.getElementById('u1391');

var u1390 = document.getElementById('u1390');

if (bIE) u1390.attachEvent("onchange", Changeu1390);
else u1390.addEventListener("change", Changeu1390, true);
function Changeu1390(e)
{

if (((GetSelectedOption('u1390')) == (PopulateVariables('Grandmother'))) || (((GetSelectedOption('u1390')) == (PopulateVariables('Grandfather'))) || (((GetSelectedOption('u1390')) == (PopulateVariables('Aunt'))) || (((GetSelectedOption('u1390')) == (PopulateVariables('Uncle'))) || (((GetSelectedOption('u1390')) == (PopulateVariables('Cousin'))) || (((GetSelectedOption('u1390')) == (PopulateVariables('Niece'))) || ((GetSelectedOption('u1390')) == (PopulateVariables('Nephew'))))))))) {

	var obj1 = document.getElementById("u1383");
	if (obj1.style.visibility == "" || obj1.style.visibility == "visible") { SetPanelVisibilityu1383("hidden"); }
	else {SetPanelVisibilityu1383("");}

	var obj1 = document.getElementById("u1401");
	if (obj1.style.visibility == "" || obj1.style.visibility == "visible") { SetPanelVisibilityu1401("hidden"); }
	else {SetPanelVisibilityu1401("");}

}
else
if (((GetSelectedOption('u1390')) == (PopulateVariables('Granddaughter'))) || ((GetSelectedOption('u1390')) == (PopulateVariables('Grandson')))) {

	var obj1 = document.getElementById("u1401");
	if (obj1.style.visibility == "" || obj1.style.visibility == "visible") { SetPanelVisibilityu1401("hidden"); }
	else {SetPanelVisibilityu1401("");}

}

}

var u747 = document.getElementById('u747');
gv_vAlignTable['u747'] = 'top';
var u253 = document.getElementById('u253');

var u1399 = document.getElementById('u1399');

u1399.style.cursor = 'pointer';
if (bIE) u1399.attachEvent("onclick", Clicku1399);
else u1399.addEventListener("click", Clicku1399, true);
function Clicku1399(e)
{

if (true) {

	NewWindow("help_Add_Relative.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u1398 = document.getElementById('u1398');
gv_vAlignTable['u1398'] = 'center';
var u657 = document.getElementById('u657');

var u370 = document.getElementById('u370');

u370.style.cursor = 'pointer';
if (bIE) u370.attachEvent("onclick", Clicku370);
else u370.addEventListener("click", Clicku370, true);
function Clicku370(e)
{

if (true) {

rdo16onClickAddDisConNew(e);

}

}

var u312 = document.getElementById('u312');

var u812 = document.getElementById('u812');

var u848 = document.getElementById('u848');
gv_vAlignTable['u848'] = 'top';
var u1267 = document.getElementById('u1267');
gv_vAlignTable['u1267'] = 'top';
var u1266 = document.getElementById('u1266');

if (bIE) u1266.attachEvent("onchange", Changeu1266);
else u1266.addEventListener("change", Changeu1266, true);
function Changeu1266(e)
{

if (true) {

rdo52onChangeDisConAge(e);

}

}

var u1265 = document.getElementById('u1265');

var u1264 = document.getElementById('u1264');

var u1263 = document.getElementById('u1263');
gv_vAlignTable['u1263'] = 'center';
var u716 = document.getElementById('u716');

if (bIE) u716.attachEvent("onchange", Changeu716);
else u716.addEventListener("change", Changeu716, true);
function Changeu716(e)
{

if (((GetSelectedOption('u716')) != (PopulateVariables('Mother'))) && (((GetSelectedOption('u716')) != (PopulateVariables('Father'))) && (((GetSelectedOption('u716')) != (PopulateVariables('Daughter'))) && (((GetSelectedOption('u716')) != (PopulateVariables('Son'))) && (((GetSelectedOption('u716')) != (PopulateVariables('Sister'))) && ((GetSelectedOption('u716')) != (PopulateVariables('Brother')))))))) {

	SetPanelStateu705("pd1u705");

	MoveWidgetBy('u764',0,55);

	MoveWidgetBy('u772',0,55);

	MoveWidgetBy('u720',0,55);

	MoveWidgetBy('u785',0,55);

	MoveWidgetBy('u837',0,55);

	MoveWidgetBy('u889',0,55);

	MoveWidgetBy('u1031',0,55);

	MoveWidgetBy('u881',0,55);

	MoveWidgetBy('u699',0,55);

	MoveWidgetBy('u868',0,55);

}

}

var u222 = document.getElementById('u222');

var u188 = document.getElementById('u188');

var u1268 = document.getElementById('u1268');

var u132 = document.getElementById('u132');

var u941 = document.getElementById('u941');

var u1245 = document.getElementById('u1245');

var u857 = document.getElementById('u857');
gv_vAlignTable['u857'] = 'top';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u1242 = document.getElementById('u1242');

var u590 = document.getElementById('u590');

var u1240 = document.getElementById('u1240');

var u1425 = document.getElementById('u1425');

var u781 = document.getElementById('u781');

var u352 = document.getElementById('u352');

if (bIE) u352.attachEvent("onchange", Changeu352);
else u352.addEventListener("change", Changeu352, true);
function Changeu352(e)
{

if (true) {

rdo16onChangeDisCon2L2(e);

}

}

var u852 = document.getElementById('u852');
gv_vAlignTable['u852'] = 'top';
var u1420 = document.getElementById('u1420');
gv_vAlignTable['u1420'] = 'top';
var u1517 = document.getElementById('u1517');
gv_vAlignTable['u1517'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u1108 = document.getElementById('u1108');

var u1514 = document.getElementById('u1514');
gv_vAlignTable['u1514'] = 'center';
var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u101 = document.getElementById('u101');

var u1511 = document.getElementById('u1511');

u1511.style.cursor = 'pointer';
if (bIE) u1511.attachEvent("onclick", Clicku1511);
else u1511.addEventListener("click", Clicku1511, true);
function Clicku1511(e)
{

if (true) {

	SetPanelVisibilityu1444("hidden");

rdo55onClickReturnToSaveAs(e);

}

}

var u411 = document.getElementById('u411');

var u911 = document.getElementById('u911');

u911.style.cursor = 'pointer';
if (bIE) u911.attachEvent("onclick", Clicku911);
else u911.addEventListener("click", Clicku911, true);
function Clicku911(e)
{

if (true) {

SetWidgetRichText('u909', PopulateVariables('<span style=" font-family:\'Arial\'; color:#000000; font-size:13px;">No Diseases or Conditions have been entered</span>'));

SetWidgetRichText('u911', PopulateVariables(''));

SetWidgetRichText('u910', PopulateVariables(''));

}

}
gv_vAlignTable['u911'] = 'top';
var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{

if (true) {

	SetPanelStateu1444("pd5u1444");

	SetPanelVisibilityu1444("");

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u703 = document.getElementById('u703');

var u321 = document.getElementById('u321');

var u821 = document.getElementById('u821');
gv_vAlignTable['u821'] = 'top';
var u139 = document.getElementById('u139');

var u967 = document.getElementById('u967');
gv_vAlignTable['u967'] = 'center';
var u270 = document.getElementById('u270');

var u1459 = document.getElementById('u1459');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u541 = document.getElementById('u541');

var u1247 = document.getElementById('u1247');

var u1337 = document.getElementById('u1337');

var u1336 = document.getElementById('u1336');

var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'top';
var u797 = document.getElementById('u797');
gv_vAlignTable['u797'] = 'top';
var u1333 = document.getElementById('u1333');

if (bIE) u1333.attachEvent("onchange", Changeu1333);
else u1333.addEventListener("change", Changeu1333, true);
function Changeu1333(e)
{

if (true) {

rdo53onChangeDisConAgeL1(e);

}

}

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'top';
var u108 = document.getElementById('u108');

var u1330 = document.getElementById('u1330');

var u841 = document.getElementById('u841');

u841.style.cursor = 'pointer';
if (bIE) u841.attachEvent("onclick", Clicku841);
else u841.addEventListener("click", Clicku841, true);
function Clicku841(e)
{

if ((GetCheckState('u841')) == (false)) {

rdo33onUncheckEthnicityHL(e);

}

}

var u1367 = document.getElementById('u1367');

u1367.style.cursor = 'pointer';
if (bIE) u1367.attachEvent("onclick", Clicku1367);
else u1367.addEventListener("click", Clicku1367, true);
function Clicku1367(e)
{

if (true) {

rdo42onClickCloseRel(e);

}

}

var u1365 = document.getElementById('u1365');

var u1364 = document.getElementById('u1364');
gv_vAlignTable['u1364'] = 'center';
var u361 = document.getElementById('u361');

var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'center';
var u1362 = document.getElementById('u1362');
gv_vAlignTable['u1362'] = 'center';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u513 = document.getElementById('u513');

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

u671.style.cursor = 'pointer';
if (bIE) u671.attachEvent("onclick", Clicku671);
else u671.addEventListener("click", Clicku671, true);
function Clicku671(e)
{

if (true) {

}

}

var u271 = document.getElementById('u271');

u271.style.cursor = 'pointer';
if (bIE) u271.attachEvent("onclick", Clicku271);
else u271.addEventListener("click", Clicku271, true);
function Clicku271(e)
{

if (true) {

rdo10onClickHidePI(e);

}

}

var u465 = document.getElementById('u465');

var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{

if (true) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelStateu136("pd1u136");

	SetPanelStateu550("pd1u550");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

	SetPanelVisibilityu427("hidden");

	MoveWidgetBy('u419',0,-475);

	MoveWidgetBy('u566',0,-475);

	MoveWidgetBy('u558',0,-475);

	MoveWidgetBy('u691',0,-475);

}

}

var u920 = document.getElementById('u920');

u920.style.cursor = 'pointer';
if (bIE) u920.attachEvent("onclick", Clicku920);
else u920.addEventListener("click", Clicku920, true);
function Clicku920(e)
{

if (((GetSelectedOption('u896')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u899')) == (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetTo('u892',10,82);

	MoveWidgetTo('u912',10,180);

	MoveWidgetTo('u902',10,205);

	MoveWidgetTo('u919',10,114);

	MoveWidgetTo('u925',10,82);

rdo36onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u896')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u899')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u899')) != (PopulateVariables('Other - Add new'))))) {

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetTo('u912',10,180);

	MoveWidgetTo('u902',10,205);

	MoveWidgetTo('u919',10,114);

	MoveWidgetTo('u925',10,82);

rdo36onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u896')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

	MoveWidgetTo('u912',10,180);

	MoveWidgetTo('u902',10,205);

	MoveWidgetTo('u919',10,114);

	MoveWidgetTo('u925',10,82);

rdo36onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u896')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u896')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu892("hidden");

	SetPanelVisibilityu898("hidden");

rdo36onClickDisConAdd(e);

}

}

var u951 = document.getElementById('u951');
gv_vAlignTable['u951'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u1163 = document.getElementById('u1163');
gv_vAlignTable['u1163'] = 'top';
var u1162 = document.getElementById('u1162');

var u1161 = document.getElementById('u1161');
gv_vAlignTable['u1161'] = 'top';
var u1160 = document.getElementById('u1160');

var u330 = document.getElementById('u330');

var u830 = document.getElementById('u830');

var u640 = document.getElementById('u640');
gv_vAlignTable['u640'] = 'center';
var u148 = document.getElementById('u148');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u458 = document.getElementById('u458');

var u603 = document.getElementById('u603');

if (bIE) u603.attachEvent("onchange", Changeu603);
else u603.addEventListener("change", Changeu603, true);
function Changeu603(e)
{

if (true) {

rdo26onChangeDisConAge(e);

}

}

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

var u550 = document.getElementById('u550');

var u1067 = document.getElementById('u1067');
gv_vAlignTable['u1067'] = 'top';
var u368 = document.getElementById('u368');

if (bIE) u368.attachEvent("onchange", Changeu368);
else u368.addEventListener("change", Changeu368, true);
function Changeu368(e)
{

if (true) {

rdo16onChangeDisCon1New(e);

}

}

var u868 = document.getElementById('u868');

var u17 = document.getElementById('u17');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u960 = document.getElementById('u960');
gv_vAlignTable['u960'] = 'center';
var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u813 = document.getElementById('u813');

var u1469 = document.getElementById('u1469');

var u1468 = document.getElementById('u1468');
gv_vAlignTable['u1468'] = 'center';
var u867 = document.getElementById('u867');
gv_vAlignTable['u867'] = 'top';
var u1446 = document.getElementById('u1446');
gv_vAlignTable['u1446'] = 'center';
var u717 = document.getElementById('u717');
gv_vAlignTable['u717'] = 'top';
var u870 = document.getElementById('u870');
gv_vAlignTable['u870'] = 'center';
var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u728 = document.getElementById('u728');
gv_vAlignTable['u728'] = 'top';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'top';
var u189 = document.getElementById('u189');

u189.style.cursor = 'pointer';
if (bIE) u189.attachEvent("onclick", Clicku189);
else u189.addEventListener("click", Clicku189, true);
function Clicku189(e)
{

if ((GetCheckState('u189')) == (true)) {

rdo8onCheckRaceAIAN(e);

}

}

var u627 = document.getElementById('u627');

var u581 = document.getElementById('u581');
gv_vAlignTable['u581'] = 'center';
var u133 = document.getElementById('u133');

var u1054 = document.getElementById('u1054');

var u1255 = document.getElementById('u1255');

var u1254 = document.getElementById('u1254');
gv_vAlignTable['u1254'] = 'center';
var u281 = document.getElementById('u281');

var u1252 = document.getElementById('u1252');

var u591 = document.getElementById('u591');
gv_vAlignTable['u591'] = 'center';
var u1250 = document.getElementById('u1250');
gv_vAlignTable['u1250'] = 'top';
var u1283 = document.getElementById('u1283');

var u851 = document.getElementById('u851');

var u1059 = document.getElementById('u1059');
gv_vAlignTable['u1059'] = 'top';
var u1058 = document.getElementById('u1058');

var u353 = document.getElementById('u353');

var u853 = document.getElementById('u853');

var u434 = document.getElementById('u434');

u434.style.cursor = 'pointer';
if (bIE) u434.attachEvent("onclick", Clicku434);
else u434.addEventListener("click", Clicku434, true);
function Clicku434(e)
{

if ((GetCheckState('u434')) == (true)) {

SetGlobalVariableValue('$varGenderMe', PopulateVariables('Female'));

}

}

var u1462 = document.getElementById('u1462');
gv_vAlignTable['u1462'] = 'top';
var u713 = document.getElementById('u713');
gv_vAlignTable['u713'] = 'top';
var u1460 = document.getElementById('u1460');
gv_vAlignTable['u1460'] = 'center';
var u387 = document.getElementById('u387');

var u757 = document.getElementById('u757');
gv_vAlignTable['u757'] = 'top';
var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'top';
var u263 = document.getElementById('u263');

var u102 = document.getElementById('u102');

var u412 = document.getElementById('u412');

u412.style.cursor = 'pointer';
if (bIE) u412.attachEvent("onclick", Clicku412);
else u412.addEventListener("click", Clicku412, true);
function Clicku412(e)
{

if (true) {

rdo17onClickSaveInfo(e);

}

}

var u912 = document.getElementById('u912');

var u260 = document.getElementById('u260');

var u1243 = document.getElementById('u1243');

var u173 = document.getElementById('u173');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u969 = document.getElementById('u969');

var u322 = document.getElementById('u322');

var u822 = document.getElementById('u822');

var u474 = document.getElementById('u474');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u982 = document.getElementById('u982');
gv_vAlignTable['u982'] = 'top';
var u232 = document.getElementById('u232');

var u380 = document.getElementById('u380');
gv_vAlignTable['u380'] = 'top';
var u880 = document.getElementById('u880');
gv_vAlignTable['u880'] = 'center';
var u690 = document.getElementById('u690');
gv_vAlignTable['u690'] = 'center';
var u198 = document.getElementById('u198');

u198.style.cursor = 'pointer';
if (bIE) u198.attachEvent("onclick", Clicku198);
else u198.addEventListener("click", Clicku198, true);
function Clicku198(e)
{

if ((GetCheckState('u198')) == (false)) {

rdo8onUncheckRaceAsian(e);

}

}

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
gv_vAlignTable['u1340'] = 'center';
var u877 = document.getElementById('u877');

u877.style.cursor = 'pointer';
if (bIE) u877.attachEvent("onclick", Clicku877);
else u877.addEventListener("click", Clicku877, true);
function Clicku877(e)
{

if (true) {

rdo34onClickShowPI(e);

}

}

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'top';
var u1305 = document.getElementById('u1305');
gv_vAlignTable['u1305'] = 'center';
var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'top';
var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u829 = document.getElementById('u829');
gv_vAlignTable['u829'] = 'top';
var u1302 = document.getElementById('u1302');

var u1296 = document.getElementById('u1296');

var u1231 = document.getElementById('u1231');
gv_vAlignTable['u1231'] = 'top';
var u898 = document.getElementById('u898');

var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'center';
var u921 = document.getElementById('u921');
gv_vAlignTable['u921'] = 'center';
var u1175 = document.getElementById('u1175');
gv_vAlignTable['u1175'] = 'top';
var u239 = document.getElementById('u239');

var u1173 = document.getElementById('u1173');

var u1172 = document.getElementById('u1172');
gv_vAlignTable['u1172'] = 'top';
var u1171 = document.getElementById('u1171');

var u1170 = document.getElementById('u1170');

var u861 = document.getElementById('u861');

var u1298 = document.getElementById('u1298');

if (bIE) u1298.attachEvent("onchange", Changeu1298);
else u1298.addEventListener("change", Changeu1298, true);
function Changeu1298(e)
{

if (true) {

rdo53onChangeDisConAgeL2(e);

}

}

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u831 = document.getElementById('u831');

var u641 = document.getElementById('u641');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u183 = document.getElementById('u183');

var u930 = document.getElementById('u930');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u1137 = document.getElementById('u1137');
gv_vAlignTable['u1137'] = 'top';
var u1282 = document.getElementById('u1282');

var u1281 = document.getElementById('u1281');

var u551 = document.getElementById('u551');

u551.style.cursor = 'pointer';
if (bIE) u551.attachEvent("onclick", Clicku551);
else u551.addEventListener("click", Clicku551, true);
function Clicku551(e)
{

if (true) {

rdo21onClickHidePI(e);

}

}

var u700 = document.getElementById('u700');

var u208 = document.getElementById('u208');

var u971 = document.getElementById('u971');

if (bIE) u971.attachEvent("onchange", Changeu971);
else u971.addEventListener("change", Changeu971, true);
function Changeu971(e)
{

if (true) {

rdo40onChangeDisCon1New(e);

}

}

var u461 = document.getElementById('u461');

var u961 = document.getElementById('u961');

var u1138 = document.getElementById('u1138');

var u610 = document.getElementById('u610');

var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u8 = document.getElementById('u8');

var u993 = document.getElementById('u993');

if (bIE) u993.attachEvent("onchange", Changeu993);
else u993.addEventListener("change", Changeu993, true);
function Changeu993(e)
{

if (true) {

rdo40onChangeDisConAgeL1(e);

}

}

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
gv_vAlignTable['u371'] = 'center';
var u871 = document.getElementById('u871');

u871.style.cursor = 'pointer';
if (bIE) u871.attachEvent("onclick", Clicku871);
else u871.addEventListener("click", Clicku871, true);
function Clicku871(e)
{

if (true) {

	SetPanelStateu868("pd0u868");

	SetPanelVisibilityu785("hidden");

	SetPanelVisibilityu837("hidden");

	MoveWidgetBy('u699',0,-220);

	MoveWidgetBy('u889',0,-220);

	MoveWidgetBy('u881',0,-220);

	MoveWidgetBy('u1031',0,-220);

}

}

var u224 = document.getElementById('u224');

var u1186 = document.getElementById('u1186');
gv_vAlignTable['u1186'] = 'top';
var u338 = document.getElementById('u338');

var u165 = document.getElementById('u165');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'top';
var u740 = document.getElementById('u740');

u740.style.cursor = 'pointer';
if (bIE) u740.attachEvent("onclick", Clicku740);
else u740.addEventListener("click", Clicku740, true);
function Clicku740(e)
{

if (((GetGlobalVariableValue('$varLivingRel')) == (PopulateVariables(''))) && ((GetCheckState('u740')) == (true))) {

SetCheckState('u740', true);

SetCheckState('u742', false);

SetCheckState('u744', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u740'));

	SetPanelStateu720("pd1u720");

	MoveWidgetBy('u772',0,90);

	MoveWidgetBy('u785',0,90);

	MoveWidgetBy('u837',0,90);

	MoveWidgetBy('u889',0,90);

	MoveWidgetBy('u1031',0,90);

	MoveWidgetBy('u881',0,90);

	MoveWidgetBy('u699',0,90);

	MoveWidgetBy('u868',0,90);

}
else
if (((GetGlobalVariableValue('$varLivingRel')) != (PopulateVariables(''))) && ((GetCheckState('u740')) == (true))) {

SetCheckState('u740', true);

SetCheckState('u742', false);

SetCheckState('u744', false);

SetGlobalVariableValue('$varLivingRel', GetCheckState('u740'));

	SetPanelStateu720("pd1u720");

	MoveWidgetBy('u699',0,0);

	MoveWidgetBy('u772',0,0);

	MoveWidgetBy('u785',0,0);

	MoveWidgetBy('u837',0,0);

	MoveWidgetBy('u889',0,0);

	MoveWidgetBy('u881',0,0);

	MoveWidgetBy('u1031',0,0);

	MoveWidgetBy('u868',0,0);

}

}

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u282 = document.getElementById('u282');

u282.style.cursor = 'pointer';
if (bIE) u282.attachEvent("onclick", Clicku282);
else u282.addEventListener("click", Clicku282, true);
function Clicku282(e)
{

if (true) {

rdo11onClickShowHI(e);

}

}

var u558 = document.getElementById('u558');

var u1261 = document.getElementById('u1261');
gv_vAlignTable['u1261'] = 'center';
var u1260 = document.getElementById('u1260');

u1260.style.cursor = 'pointer';
if (bIE) u1260.attachEvent("onclick", Clicku1260);
else u1260.addEventListener("click", Clicku1260, true);
function Clicku1260(e)
{

if (((GetSelectedOption('u1236')) == (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1239')) == (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetTo('u1232',10,82);

	MoveWidgetTo('u1252',10,180);

	MoveWidgetTo('u1242',10,205);

	MoveWidgetTo('u1259',10,114);

	MoveWidgetTo('u1265',10,82);

rdo49onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u1236')) == (PopulateVariables('Cancer'))) && (((GetSelectedOption('u1239')) != (PopulateVariables('Select Specific Cancer'))) && ((GetSelectedOption('u1239')) != (PopulateVariables('Other - Add new'))))) {

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetTo('u1252',10,180);

	MoveWidgetTo('u1242',10,205);

	MoveWidgetTo('u1259',10,114);

	MoveWidgetTo('u1265',10,82);

rdo49onClickDisConAdd(e);

}
else
if ((GetSelectedOption('u1236')) == (PopulateVariables('Other - Add new'))) {

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

	MoveWidgetTo('u1252',10,180);

	MoveWidgetTo('u1242',10,205);

	MoveWidgetTo('u1259',10,114);

	MoveWidgetTo('u1265',10,82);

rdo49onClickDisConAdd(e);

}
else
if (((GetSelectedOption('u1236')) != (PopulateVariables('Cancer'))) && ((GetSelectedOption('u1236')) != (PopulateVariables('Other - Add new')))) {

	SetPanelVisibilityu1232("hidden");

	SetPanelVisibilityu1238("hidden");

rdo49onClickDisConAdd(e);

}

}

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

SetSelectedOption('u573', PopulateVariables('Select Disease or Condition'));

SetSelectedOption('u576', PopulateVariables('Select Specific Cancer'));

SetSelectedOption('u603', PopulateVariables(' '));

SetWidgetFormText('u570', PopulateVariables(''));

	SetPanelStateu136("pd1u136");

	SetPanelStateu550("pd1u550");

	SetPanelVisibilityu133("");

	SetPanelVisibilityu136("");

	SetPanelVisibilityu427("hidden");

	MoveWidgetBy('u419',0,-475);

	MoveWidgetBy('u566',0,-475);

	MoveWidgetBy('u558',0,-475);

	MoveWidgetBy('u691',0,-475);

}

}

var u679 = document.getElementById('u679');
gv_vAlignTable['u679'] = 'center';
var u650 = document.getElementById('u650');

u650.style.cursor = 'pointer';
if (bIE) u650.attachEvent("onclick", Clicku650);
else u650.addEventListener("click", Clicku650, true);
function Clicku650(e)
{

if (true) {

rdo27onClickAddDisConNew(e);

}

}

var u854 = document.getElementById('u854');
gv_vAlignTable['u854'] = 'top';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'top';
var u468 = document.getElementById('u468');

var u968 = document.getElementById('u968');

var u1406 = document.getElementById('u1406');

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

var u1401 = document.getElementById('u1401');

var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u1081 = document.getElementById('u1081');
gv_vAlignTable['u1081'] = 'top';
var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'center';
var u878 = document.getElementById('u878');
gv_vAlignTable['u878'] = 'center';
var u1408 = document.getElementById('u1408');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u970 = document.getElementById('u970');

var u323 = document.getElementById('u323');

if (bIE) u323.attachEvent("onchange", Changeu323);
else u323.addEventListener("change", Changeu323, true);
function Changeu323(e)
{

if (true) {

rdo15onChangeDisConAge(e);

}

}

var u823 = document.getElementById('u823');
gv_vAlignTable['u823'] = 'top';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'center';
if (window.OnLoad) OnLoad();
