
var PageName = 'View History Report_v2';
var PageId = 'p040e15f33a3d43ee8328aacd9cad911a'
var PageUrl = 'View_History_Report_v2.html'
document.title = 'View History Report_v2';

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

eval(GetDynamicPanelScript('u54', 3));

eval(GetDynamicPanelScript('u131', 1));

eval(GetDynamicPanelScript('u50', 3));

eval(GetDynamicPanelScript('u94', 3));

eval(GetDynamicPanelScript('u42', 3));

eval(GetDynamicPanelScript('u79', 2));

eval(GetDynamicPanelScript('u61', 1));

eval(GetDynamicPanelScript('u46', 3));

eval(GetDynamicPanelScript('u114', 1));

eval(GetDynamicPanelScript('u58', 1));

eval(GetDynamicPanelScript('u122', 1));

function rdo4onClickBrowseToSave(e) {

if (true) {

	SetPanelStateu79("pd0u79");

	SetPanelVisibilityu79("");

}

}

function rdo4onClickSaveHistory(e) {

if (true) {

	SetPanelVisibilityu58("hidden");

	SetPanelVisibilityu61("hidden");

	SetPanelVisibilityu79("hidden");

}

}

function rdo4onClickCancelSaveHistory(e) {

if (true) {

	SetPanelVisibilityu58("hidden");

	SetPanelVisibilityu61("hidden");

}

}

function rdo1onNavClickSaveHistory(e) {

}

function rdo0onNavClickHome(e) {

}

function rdo0onNavClickCreateHistory(e) {

}

function rdo0onNavClickOpenHistory(e) {

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

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u54 = document.getElementById('u54');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
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
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

if (bIE) u45.attachEvent("onmouseover", MouseOveru45);
else u45.addEventListener("mouseover", MouseOveru45, true);
function MouseOveru45(e)
{
if (!IsTrueMouseOver('u45',e)) return;
if (true) {

	SetPanelStateu42("pd1u42");

}

}

if (bIE) u45.attachEvent("onmouseout", MouseOutu45);
else u45.addEventListener("mouseout", MouseOutu45, true);
function MouseOutu45(e)
{
if (!IsTrueMouseOut('u45',e)) return;
if (true) {

	SetPanelStateu42("pd2u42");

}

}

var u83 = document.getElementById('u83');

var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

if (bIE) u51.attachEvent("onmouseover", MouseOveru51);
else u51.addEventListener("mouseover", MouseOveru51, true);
function MouseOveru51(e)
{
if (!IsTrueMouseOver('u51',e)) return;
if (true) {

	SetPanelStateu50("pd2u50");

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

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u79 = document.getElementById('u79');

var u42 = document.getElementById('u42');

var u80 = document.getElementById('u80');

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
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u5 = document.getElementById('u5');

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
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{

if (true) {

	SetPanelVisibilityu94("hidden");

}

}

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u20 = document.getElementById('u20');

var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

rdo4onClickSaveHistory(e);

}

}

var u48 = document.getElementById('u48');

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", u48Click);
else u48.addEventListener("click", u48Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u48LinksClick'></DIV>")
var u48LinksClick = document.getElementById('u48LinksClick');
function u48Click(e) 
{

	ToggleLinks(e, 'u48LinksClick');
}

InsertBeforeEnd(u48LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u48Clickueb0a86fa00ce496aa4d01892da71e0d5(event)'>ifMyInfoSaved</div>");
function u48Clickueb0a86fa00ce496aa4d01892da71e0d5(e)
{

	SetPanelVisibilityu58("");

	SetPanelVisibilityu61("");

	ToggleLinks(e, 'u48LinksClick');
}

InsertBeforeEnd(u48LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u48Clicku426ff0c4e1944449b9f99e91dcfa21f7(event)'>ifMyInfoNotSaved</div>");
function u48Clicku426ff0c4e1944449b9f99e91dcfa21f7(e)
{

	SetPanelStateu94("pd0u94");

	SetPanelVisibilityu94("");

	ToggleLinks(e, 'u48LinksClick');
}

var u4 = document.getElementById('u4');

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

var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u119 = document.getElementById('u119');

var u87 = document.getElementById('u87');

var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{

if (true) {

	NewWindow("help_View_History_Report.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u61 = document.getElementById('u61');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if (true) {

	SetPanelVisibilityu94("hidden");

}

}

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

if (bIE) u52.attachEvent("onmouseover", MouseOveru52);
else u52.addEventListener("mouseover", MouseOveru52, true);
function MouseOveru52(e)
{
if (!IsTrueMouseOver('u52',e)) return;
if (true) {

	SetPanelStateu50("pd2u50");

}

}

if (bIE) u52.attachEvent("onmouseout", MouseOutu52);
else u52.addEventListener("mouseout", MouseOutu52, true);
function MouseOutu52(e)
{
if (!IsTrueMouseOut('u52',e)) return;
if (true) {

	SetPanelStateu50("pd1u50");

}

}

var u90 = document.getElementById('u90');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u89 = document.getElementById('u89');

u89.style.cursor = 'pointer';
if (bIE) u89.attachEvent("onclick", Clicku89);
else u89.addEventListener("click", Clicku89, true);
function Clicku89(e)
{

if (true) {

	SetPanelVisibilityu79("hidden");

}

}

var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

	SetPanelVisibilityu79("hidden");

}

}

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
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u0 = document.getElementById('u0');

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
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if (true) {

rdo4onClickCancelSaveHistory(e);

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u100 = document.getElementById('u100');

var u58 = document.getElementById('u58');

var u15 = document.getElementById('u15');

var u21 = document.getElementById('u21');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", u49Click);
else u49.addEventListener("click", u49Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u49LinksClick'></DIV>")
var u49LinksClick = document.getElementById('u49LinksClick');
function u49Click(e) 
{

	ToggleLinks(e, 'u49LinksClick');
}

InsertBeforeEnd(u49LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u49Clicku089e2b8cdb864db88fc25cae8358db81(event)'>ifMyInfoSaved</div>");
function u49Clicku089e2b8cdb864db88fc25cae8358db81(e)
{

	SetPanelVisibilityu58("");

	SetPanelVisibilityu61("");

	ToggleLinks(e, 'u49LinksClick');
}

InsertBeforeEnd(u49LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u49Clicku28a5fd63ee9045cf9e55b5ed6299713e(event)'>ifMyInfoNotSaved</div>");
function u49Clicku28a5fd63ee9045cf9e55b5ed6299713e(e)
{

	SetPanelStateu94("pd0u94");

	SetPanelVisibilityu94("");

	ToggleLinks(e, 'u49LinksClick');
}

if (bIE) u49.attachEvent("onmouseover", MouseOveru49);
else u49.addEventListener("mouseover", MouseOveru49, true);
function MouseOveru49(e)
{
if (!IsTrueMouseOver('u49',e)) return;
if (true) {

	SetPanelStateu46("pd1u46");

}

}

if (bIE) u49.attachEvent("onmouseout", MouseOutu49);
else u49.addEventListener("mouseout", MouseOutu49, true);
function MouseOutu49(e)
{
if (!IsTrueMouseOut('u49',e)) return;
if (true) {

	SetPanelStateu46("pd2u46");

}

}

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u130 = document.getElementById('u130');

var u121 = document.getElementById('u121');

var u94 = document.getElementById('u94');

var u62 = document.getElementById('u62');

var u46 = document.getElementById('u46');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u117 = document.getElementById('u117');

var u85 = document.getElementById('u85');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u125 = document.getElementById('u125');

var u37 = document.getElementById('u37');

var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

if (bIE) u43.attachEvent("onmouseover", MouseOveru43);
else u43.addEventListener("mouseover", MouseOveru43, true);
function MouseOveru43(e)
{
if (!IsTrueMouseOver('u43',e)) return;
if (true) {

	SetPanelStateu42("pd1u42");

}

}

if (bIE) u43.attachEvent("onmouseout", MouseOutu43);
else u43.addEventListener("mouseout", MouseOutu43, true);
function MouseOutu43(e)
{
if (!IsTrueMouseOut('u43',e)) return;
if (true) {

	SetPanelStateu42("pd0u42");

}

}

var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", Clicku82);
else u82.addEventListener("click", Clicku82, true);
function Clicku82(e)
{

if (true) {

	SetPanelVisibilityu79("hidden");

}

}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
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
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

	SetPanelVisibilityu94("hidden");

}

}

var u59 = document.getElementById('u59');

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
var u75 = document.getElementById('u75');

u75.style.cursor = 'pointer';
if (bIE) u75.attachEvent("onclick", Clicku75);
else u75.addEventListener("click", Clicku75, true);
function Clicku75(e)
{

if (true) {

rdo4onClickBrowseToSave(e);

}

}

var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	SetPanelStateu79("pd0u79");

}

}

var u8 = document.getElementById('u8');

var u132 = document.getElementById('u132');

u132.style.cursor = 'pointer';
if (bIE) u132.attachEvent("onclick", Clicku132);
else u132.addEventListener("click", Clicku132, true);
function Clicku132(e)
{

if (true) {

	NewWindow("My_History_Report_v2.html" + GetQuerystring(), "", "directories=0, height=680, location=0, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=0, width=880", true, 880, 680);

}

}

var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{

if (true) {

	SetPanelVisibilityu114("");

	MoveWidgetBy('u122',0,120);

	MoveWidgetBy('u131',0,120);

}

}

var u72 = document.getElementById('u72');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'top';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	NewWindow("help_View_History_Report.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u131 = document.getElementById('u131');

var u95 = document.getElementById('u95');

var u122 = document.getElementById('u122');

var u108 = document.getElementById('u108');

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", Clicku108);
else u108.addEventListener("click", Clicku108, true);
function Clicku108(e)
{

if (true) {

	SetPanelVisibilityu94("hidden");

}

}

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", u47Click);
else u47.addEventListener("click", u47Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u47LinksClick'></DIV>")
var u47LinksClick = document.getElementById('u47LinksClick');
function u47Click(e) 
{

	ToggleLinks(e, 'u47LinksClick');
}

InsertBeforeEnd(u47LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u47Clickud16b46c9a3be4b4c8d28d04a701ac1ae(event)'>ifMyInfoSaved</div>");
function u47Clickud16b46c9a3be4b4c8d28d04a701ac1ae(e)
{

	SetPanelVisibilityu58("");

	SetPanelVisibilityu61("");

	ToggleLinks(e, 'u47LinksClick');
}

InsertBeforeEnd(u47LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u47Clicku513a4cf20b22437083ab78f0d8ce2d27(event)'>ifMyInfoNotSaved</div>");
function u47Clicku513a4cf20b22437083ab78f0d8ce2d27(e)
{

	SetPanelStateu94("pd0u94");

	SetPanelVisibilityu94("");

	ToggleLinks(e, 'u47LinksClick');
}

if (bIE) u47.attachEvent("onmouseover", MouseOveru47);
else u47.addEventListener("mouseover", MouseOveru47, true);
function MouseOveru47(e)
{
if (!IsTrueMouseOver('u47',e)) return;
if (true) {

	SetPanelStateu46("pd1u46");

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

var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u127 = document.getElementById('u127');

var u114 = document.getElementById('u114');

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
var u92 = document.getElementById('u92');

var u2 = document.getElementById('u2');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u7 = document.getElementById('u7');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u123 = document.getElementById('u123');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
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

var u66 = document.getElementById('u66');

var u105 = document.getElementById('u105');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", Clicku57);
else u57.addEventListener("click", Clicku57, true);
function Clicku57(e)
{

if (true) {

	NewWindow("help_View_History_Report.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u38 = document.getElementById('u38');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
