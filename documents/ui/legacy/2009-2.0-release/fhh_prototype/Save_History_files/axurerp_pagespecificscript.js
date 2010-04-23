
var PageName = 'Save History';
var PageId = 'pb0c309209de841e4bd6c283b3040cf17'
var PageUrl = 'Save_History.html'
document.title = 'Save History';

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

eval(GetDynamicPanelScript('u89', 3));

eval(GetDynamicPanelScript('u93', 3));

eval(GetDynamicPanelScript('u43', 2));

eval(GetDynamicPanelScript('u101', 2));

eval(GetDynamicPanelScript('u85', 3));

eval(GetDynamicPanelScript('u116', 8));

eval(GetDynamicPanelScript('u97', 3));

function rdo1onNavClickSaveHistory(e) {

}

function rdo0onNavClickHome(e) {

}

function rdo0onNavClickCreateHistory(e) {

}

function rdo0onNavClickOpenHistory(e) {

}

function rdo5onClickDeleteRelYes(e) {

}

function rdo5onClickCloseMsgPleaseWait(e) {

}

function rdo5onClickReturnToSaveAs(e) {

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

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	SetPanelStateu116("pd6u116");

	SetPanelVisibilityu116("");

}

}

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
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
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{

if (true) {

	NewWindow("Preview_History.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=500", true, 500, 500);

}

}

var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{

if (true) {

	SetPanelVisibilityu101("hidden");

}

}

var u93 = document.getElementById('u93');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

	NewWindow("Preview_History.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=500", true, 500, 500);

}

}

var u112 = document.getElementById('u112');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u56 = document.getElementById('u56');

var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{

if (true) {

	SetPanelVisibilityu116("hidden");

}

}

var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", u91Click);
else u91.addEventListener("click", u91Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u91LinksClick'></DIV>")
var u91LinksClick = document.getElementById('u91LinksClick');
function u91Click(e) 
{

	ToggleLinks(e, 'u91LinksClick');
}

InsertBeforeEnd(u91LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u91Clickue3d9fea7bef4438a99d01b68c351b945(event)'>ifMyInfoSaved</div>");
function u91Clickue3d9fea7bef4438a99d01b68c351b945(e)
{

	ToggleLinks(e, 'u91LinksClick');
}

InsertBeforeEnd(u91LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u91Clickuf76c1aa7847e40169a26712db59c2071(event)'>ifMyInfoNotSaved</div>");
function u91Clickuf76c1aa7847e40169a26712db59c2071(e)
{

	ToggleLinks(e, 'u91LinksClick');
}

if (bIE) u91.attachEvent("onmouseover", MouseOveru91);
else u91.addEventListener("mouseover", MouseOveru91, true);
function MouseOveru91(e)
{
if (!IsTrueMouseOver('u91',e)) return;
if (true) {

	SetPanelStateu89("pd2u89");

}

}

if (bIE) u91.attachEvent("onmouseout", MouseOutu91);
else u91.addEventListener("mouseout", MouseOutu91, true);
function MouseOutu91(e)
{
if (!IsTrueMouseOut('u91',e)) return;
if (true) {

	SetPanelStateu89("pd1u89");

}

}

var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{

if (true) {

	SetPanelVisibilityu116("hidden");

}

}

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", u90Click);
else u90.addEventListener("click", u90Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u90LinksClick'></DIV>")
var u90LinksClick = document.getElementById('u90LinksClick');
function u90Click(e) 
{

	ToggleLinks(e, 'u90LinksClick');
}

InsertBeforeEnd(u90LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u90Clicku9b129f3df9254243a57b871c75983d10(event)'>ifMyInfoSaved</div>");
function u90Clicku9b129f3df9254243a57b871c75983d10(e)
{

	ToggleLinks(e, 'u90LinksClick');
}

InsertBeforeEnd(u90LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u90Clicku847b700d143a487a9f07b94fee87fd54(event)'>ifMyInfoNotSaved</div>");
function u90Clicku847b700d143a487a9f07b94fee87fd54(e)
{

	ToggleLinks(e, 'u90LinksClick');
}

if (bIE) u90.attachEvent("onmouseover", MouseOveru90);
else u90.addEventListener("mouseover", MouseOveru90, true);
function MouseOveru90(e)
{
if (!IsTrueMouseOver('u90',e)) return;
if (true) {

	SetPanelStateu89("pd2u89");

}

}

if (bIE) u90.attachEvent("onmouseout", MouseOutu90);
else u90.addEventListener("mouseout", MouseOutu90, true);
function MouseOutu90(e)
{
if (!IsTrueMouseOut('u90',e)) return;
if (true) {

	SetPanelStateu89("pd0u89");

}

}

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'top';
var u179 = document.getElementById('u179');

u179.style.cursor = 'pointer';
if (bIE) u179.attachEvent("onclick", Clicku179);
else u179.addEventListener("click", Clicku179, true);
function Clicku179(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

	SetPanelVisibilityu116("hidden");

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
var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

if (bIE) u88.attachEvent("onmouseover", MouseOveru88);
else u88.addEventListener("mouseover", MouseOveru88, true);
function MouseOveru88(e)
{
if (!IsTrueMouseOver('u88',e)) return;
if (true) {

	SetPanelStateu85("pd1u85");

}

}

if (bIE) u88.attachEvent("onmouseout", MouseOutu88);
else u88.addEventListener("mouseout", MouseOutu88, true);
function MouseOutu88(e)
{
if (!IsTrueMouseOut('u88',e)) return;
if (true) {

	SetPanelStateu85("pd2u85");

}

}

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{

if (true) {

	NewWindow("Help.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u159 = document.getElementById('u159');

var u21 = document.getElementById('u21');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u129 = document.getElementById('u129');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u185 = document.getElementById('u185');

var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if (true) {

	SetPanelStateu116("pd6u116");

	SetPanelVisibilityu116("");

}

}

var u131 = document.getElementById('u131');

var u109 = document.getElementById('u109');

var u97 = document.getElementById('u97');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
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

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{

if (true) {

	SetPanelStateu43("pd0u43");

	SetPanelVisibilityu43("");

}

}

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u151 = document.getElementById('u151');

var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", u94Click);
else u94.addEventListener("click", u94Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u94LinksClick'></DIV>")
var u94LinksClick = document.getElementById('u94LinksClick');
function u94Click(e) 
{

	ToggleLinks(e, 'u94LinksClick');
}

InsertBeforeEnd(u94LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u94Clicku5d8b95a7385546cc84baf925296053a5(event)'>ifMyInfoSaved</div>");
function u94Clicku5d8b95a7385546cc84baf925296053a5(e)
{

	self.location.href="View_History_Report.html" + GetQuerystring();

	ToggleLinks(e, 'u94LinksClick');
}

InsertBeforeEnd(u94LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u94Clickube2a40a8f6444b74906302e558aa4d3f(event)'>ifMyInfoNotSaved</div>");
function u94Clickube2a40a8f6444b74906302e558aa4d3f(e)
{

	ToggleLinks(e, 'u94LinksClick');
}

if (bIE) u94.attachEvent("onmouseover", MouseOveru94);
else u94.addEventListener("mouseover", MouseOveru94, true);
function MouseOveru94(e)
{
if (!IsTrueMouseOver('u94',e)) return;
if (true) {

	SetPanelStateu93("pd1u93");

}

}

if (bIE) u94.attachEvent("onmouseout", MouseOutu94);
else u94.addEventListener("mouseout", MouseOutu94, true);
function MouseOutu94(e)
{
if (!IsTrueMouseOut('u94',e)) return;
if (true) {

	SetPanelStateu93("pd0u93");

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u61 = document.getElementById('u61');

var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u7 = document.getElementById('u7');

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

var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", u95Click);
else u95.addEventListener("click", u95Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u95LinksClick'></DIV>")
var u95LinksClick = document.getElementById('u95LinksClick');
function u95Click(e) 
{

	ToggleLinks(e, 'u95LinksClick');
}

InsertBeforeEnd(u95LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u95Clicku3aafe28c1b864a2587da5e4d662be895(event)'>ifMyInfoSaved</div>");
function u95Clicku3aafe28c1b864a2587da5e4d662be895(e)
{

	self.location.href="View_History_Report.html" + GetQuerystring();

	ToggleLinks(e, 'u95LinksClick');
}

InsertBeforeEnd(u95LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u95Clicku97ed1a8275af405580c345166cb32aa4(event)'>ifMyInfoNotSaved</div>");
function u95Clicku97ed1a8275af405580c345166cb32aa4(e)
{

	ToggleLinks(e, 'u95LinksClick');
}

var u125 = document.getElementById('u125');

u125.style.cursor = 'pointer';
if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

	SetPanelVisibilityu116("hidden");

}

}

var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", u96Click);
else u96.addEventListener("click", u96Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u96LinksClick'></DIV>")
var u96LinksClick = document.getElementById('u96LinksClick');
function u96Click(e) 
{

	ToggleLinks(e, 'u96LinksClick');
}

InsertBeforeEnd(u96LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u96Clicku2b231f09b8b641709ab6405087e8ca9a(event)'>ifMyInfoSaved</div>");
function u96Clicku2b231f09b8b641709ab6405087e8ca9a(e)
{

	self.location.href="View_History_Report.html" + GetQuerystring();

	ToggleLinks(e, 'u96LinksClick');
}

InsertBeforeEnd(u96LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u96Clicku4bd3ecaf51454da8b12843672804f863(event)'>ifMyInfoNotSaved</div>");
function u96Clicku4bd3ecaf51454da8b12843672804f863(e)
{

	ToggleLinks(e, 'u96LinksClick');
}

if (bIE) u96.attachEvent("onmouseover", MouseOveru96);
else u96.addEventListener("mouseover", MouseOveru96, true);
function MouseOveru96(e)
{
if (!IsTrueMouseOver('u96',e)) return;
if (true) {

	SetPanelStateu93("pd1u93");

}

}

if (bIE) u96.attachEvent("onmouseout", MouseOutu96);
else u96.addEventListener("mouseout", MouseOutu96, true);
function MouseOutu96(e)
{
if (!IsTrueMouseOut('u96',e)) return;
if (true) {

	SetPanelStateu93("pd2u93");

}

}

var u137 = document.getElementById('u137');

u137.style.cursor = 'pointer';
if (bIE) u137.attachEvent("onclick", Clicku137);
else u137.addEventListener("click", Clicku137, true);
function Clicku137(e)
{

if (true) {

	self.location.href="Open_Saved_History.html" + GetQuerystring();

	SetPanelVisibilityu116("hidden");

}

}

var u44 = document.getElementById('u44');

var u165 = document.getElementById('u165');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
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
var u4 = document.getElementById('u4');

var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u183 = document.getElementById('u183');

u183.style.cursor = 'pointer';
if (bIE) u183.attachEvent("onclick", Clicku183);
else u183.addEventListener("click", Clicku183, true);
function Clicku183(e)
{

if (true) {

	SetPanelVisibilityu116("hidden");

rdo5onClickReturnToSaveAs(e);

}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');

u145.style.cursor = 'pointer';
if (bIE) u145.attachEvent("onclick", Clicku145);
else u145.addEventListener("click", Clicku145, true);
function Clicku145(e)
{

if (true) {

	SetPanelVisibilityu116("hidden");

}

}

var u191 = document.getElementById('u191');

var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{

if (true) {

	SetPanelVisibilityu101("hidden");

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
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{

if (true) {

	SetPanelVisibilityu116("hidden");

}

}

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

	SetPanelVisibilityu116("hidden");

}

}

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u187 = document.getElementById('u187');

var u87 = document.getElementById('u87');

u87.style.cursor = 'pointer';
if (bIE) u87.attachEvent("onclick", Clicku87);
else u87.addEventListener("click", Clicku87, true);
function Clicku87(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if (true) {

	SetPanelVisibilityu43("hidden");

}

}

var u8 = document.getElementById('u8');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u171 = document.getElementById('u171');

u171.style.cursor = 'pointer';
if (bIE) u171.attachEvent("onclick", Clicku171);
else u171.addEventListener("click", Clicku171, true);
function Clicku171(e)
{

if (true) {

rdo5onClickDeleteRelYes(e);

}

}

var u149 = document.getElementById('u149');

var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u141 = document.getElementById('u141');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u85 = document.getElementById('u85');

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{

if (true) {

	NewWindow("Help.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u17 = document.getElementById('u17');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u167 = document.getElementById('u167');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{

if (true) {

	SetPanelStateu101("pd0u101");

	SetPanelVisibilityu101("");

}

}

var u143 = document.getElementById('u143');

var u76 = document.getElementById('u76');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u101 = document.getElementById('u101');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u117 = document.getElementById('u117');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u43 = document.getElementById('u43');

var u114 = document.getElementById('u114');

var u89 = document.getElementById('u89');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
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
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u57 = document.getElementById('u57');

var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", u92Click);
else u92.addEventListener("click", u92Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u92LinksClick'></DIV>")
var u92LinksClick = document.getElementById('u92LinksClick');
function u92Click(e) 
{

	ToggleLinks(e, 'u92LinksClick');
}

InsertBeforeEnd(u92LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u92Clickuaa475dae8c614c71807184ab43ed38cd(event)'>ifMyInfoSaved</div>");
function u92Clickuaa475dae8c614c71807184ab43ed38cd(e)
{

	ToggleLinks(e, 'u92LinksClick');
}

InsertBeforeEnd(u92LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u92Clicku92f543a800cb48ecaf4fcf5231dc80c6(event)'>ifMyInfoNotSaved</div>");
function u92Clicku92f543a800cb48ecaf4fcf5231dc80c6(e)
{

	ToggleLinks(e, 'u92LinksClick');
}

var u5 = document.getElementById('u5');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u135 = document.getElementById('u135');

u135.style.cursor = 'pointer';
if (bIE) u135.attachEvent("onclick", Clicku135);
else u135.addEventListener("click", Clicku135, true);
function Clicku135(e)
{

if (true) {

	SetPanelVisibilityu116("hidden");

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
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u102 = document.getElementById('u102');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
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

if (true) {

	SetPanelStateu43("pd1u43");

	SetPanelVisibilityu43("");

}

}

var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{

if (true) {

	SetPanelStateu101("pd0u101");

}

}

var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", Clicku86);
else u86.addEventListener("click", Clicku86, true);
function Clicku86(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

if (bIE) u86.attachEvent("onmouseover", MouseOveru86);
else u86.addEventListener("mouseover", MouseOveru86, true);
function MouseOveru86(e)
{
if (!IsTrueMouseOver('u86',e)) return;
if (true) {

	SetPanelStateu85("pd1u85");

}

}

if (bIE) u86.attachEvent("onmouseout", MouseOutu86);
else u86.addEventListener("mouseout", MouseOutu86, true);
function MouseOutu86(e)
{
if (!IsTrueMouseOut('u86',e)) return;
if (true) {

	SetPanelStateu85("pd0u85");

}

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u69 = document.getElementById('u69');

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
var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{

if (true) {

	SetPanelVisibilityu116("hidden");

}

}

var u139 = document.getElementById('u139');

u139.style.cursor = 'pointer';
if (bIE) u139.attachEvent("onclick", Clicku139);
else u139.addEventListener("click", Clicku139, true);
function Clicku139(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

	SetPanelVisibilityu116("hidden");

}

}

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	SetPanelVisibilityu43("hidden");

}

}

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u157 = document.getElementById('u157');

var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u107 = document.getElementById('u107');

var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	NewWindow("Help.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');

var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{

if (true) {

	SetPanelStateu101("pd0u101");

	SetPanelVisibilityu101("");

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u111 = document.getElementById('u111');

u111.style.cursor = 'pointer';
if (bIE) u111.attachEvent("onclick", Clicku111);
else u111.addEventListener("click", Clicku111, true);
function Clicku111(e)
{

if (true) {

	SetPanelVisibilityu101("hidden");

}

}

var u192 = document.getElementById('u192');

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{

if (true) {

	SetPanelVisibilityu116("hidden");

rdo5onClickCloseMsgPleaseWait(e);

}

}

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u175 = document.getElementById('u175');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u116 = document.getElementById('u116');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
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

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
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
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
if (window.OnLoad) OnLoad();
