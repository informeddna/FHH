
var PageName = 'View History Report_v3';
var PageId = 'p405a20994e1e4aa594d9eca936e63107'
var PageUrl = 'View_History_Report_v3.html'
document.title = 'View History Report_v3';

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

eval(GetDynamicPanelScript('u268', 1));

eval(GetDynamicPanelScript('u45', 3));

eval(GetDynamicPanelScript('u49', 3));

eval(GetDynamicPanelScript('u225', 1));

eval(GetDynamicPanelScript('u212', 1));

eval(GetDynamicPanelScript('u239', 3));

eval(GetDynamicPanelScript('u290', 1));

eval(GetDynamicPanelScript('u53', 3));

eval(GetDynamicPanelScript('u213', 3));

eval(GetDynamicPanelScript('u281', 1));

eval(GetDynamicPanelScript('u265', 1));

eval(GetDynamicPanelScript('u59', 1));

eval(GetDynamicPanelScript('u217', 3));

eval(GetDynamicPanelScript('u221', 3));

eval(GetDynamicPanelScript('u235', 3));

eval(GetDynamicPanelScript('u273', 1));

eval(GetDynamicPanelScript('u302', 8));

eval(GetDynamicPanelScript('u41', 3));

function rdo4onClickDeleteRelYes(e) {

}

function rdo4onClickCloseMsgPleaseWait(e) {

if (true) {

	SetPanelVisibilityu59("");

	SetPanelVisibilityu212("");

	SetPanelVisibilityu225("");

	SetPanelVisibilityu265("hidden");

	SetPanelVisibilityu268("hidden");

}

}

function rdo4onClickReturnToSaveAs(e) {

}

function rdo1onNavClickSaveHistory(e) {

}

function rdo0onNavClickHome(e) {

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

function rdo0onNavClickCreateHistory(e) {

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

function rdo0onNavClickOpenHistory(e) {

if (true) {

	self.location.href="Open_Saved_History.html" + GetQuerystring();

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

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u296 = document.getElementById('u296');

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u86 = document.getElementById('u86');

var u162 = document.getElementById('u162');

var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", Clicku42);
else u42.addEventListener("click", Clicku42, true);
function Clicku42(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

if (bIE) u42.attachEvent("onmouseover", MouseOveru42);
else u42.addEventListener("mouseover", MouseOveru42, true);
function MouseOveru42(e)
{
if (!IsTrueMouseOver('u42',e)) return;
if (true) {

	SetPanelStateu41("pd1u41");

}

}

if (bIE) u42.attachEvent("onmouseout", MouseOutu42);
else u42.addEventListener("mouseout", MouseOutu42, true);
function MouseOutu42(e)
{
if (!IsTrueMouseOut('u42',e)) return;
if (true) {

	SetPanelStateu41("pd0u41");

}

}

var u82 = document.getElementById('u82');

var u74 = document.getElementById('u74');

var u216 = document.getElementById('u216');

if (bIE) u216.attachEvent("onmouseover", MouseOveru216);
else u216.addEventListener("mouseover", MouseOveru216, true);
function MouseOveru216(e)
{
if (!IsTrueMouseOver('u216',e)) return;
if (true) {

	SetPanelStateu213("pd1u213");

}

}

if (bIE) u216.attachEvent("onmouseout", MouseOutu216);
else u216.addEventListener("mouseout", MouseOutu216, true);
function MouseOutu216(e)
{
if (!IsTrueMouseOut('u216',e)) return;
if (true) {

	SetPanelStateu213("pd2u213");

}

}

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u104 = document.getElementById('u104');

var u242 = document.getElementById('u242');

if (bIE) u242.attachEvent("onmouseover", MouseOveru242);
else u242.addEventListener("mouseover", MouseOveru242, true);
function MouseOveru242(e)
{
if (!IsTrueMouseOver('u242',e)) return;
if (true) {

	SetPanelStateu239("pd1u239");

}

}

if (bIE) u242.attachEvent("onmouseout", MouseOutu242);
else u242.addEventListener("mouseout", MouseOutu242, true);
function MouseOutu242(e)
{
if (!IsTrueMouseOut('u242',e)) return;
if (true) {

	SetPanelStateu239("pd2u239");

}

}

var u323 = document.getElementById('u323');

u323.style.cursor = 'pointer';
if (bIE) u323.attachEvent("onclick", Clicku323);
else u323.addEventListener("click", Clicku323, true);
function Clicku323(e)
{

if (true) {

	self.location.href="Open_Saved_History.html" + GetQuerystring();

	SetPanelVisibilityu302("hidden");

}

}

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'top';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'center';
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

InsertBeforeEnd(u51LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u51Clicku50ab0314c8394f67961b0041da9d0aeb(event)'>ifMyInfoSaved</div>");
function u51Clicku50ab0314c8394f67961b0041da9d0aeb(e)
{

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

	ToggleLinks(e, 'u51LinksClick');
}

InsertBeforeEnd(u51LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u51Clickuc2a8fad2490e43e281008b8f66e11a1a(event)'>ifMyInfoNotSaved</div>");
function u51Clickuc2a8fad2490e43e281008b8f66e11a1a(e)
{

	SetPanelStateu302("pd3u302");

	SetPanelVisibilityu302("");

	ToggleLinks(e, 'u51LinksClick');
}

if (bIE) u51.attachEvent("onmouseover", MouseOveru51);
else u51.addEventListener("mouseover", MouseOveru51, true);
function MouseOveru51(e)
{
if (!IsTrueMouseOver('u51',e)) return;
if (true) {

	SetPanelStateu49("pd2u49");

}

}

if (bIE) u51.attachEvent("onmouseout", MouseOutu51);
else u51.addEventListener("mouseout", MouseOutu51, true);
function MouseOutu51(e)
{
if (!IsTrueMouseOut('u51',e)) return;
if (true) {

	SetPanelStateu49("pd1u49");

}

}

var u331 = document.getElementById('u331');

u331.style.cursor = 'pointer';
if (bIE) u331.attachEvent("onclick", Clicku331);
else u331.addEventListener("click", Clicku331, true);
function Clicku331(e)
{

if (true) {

	SetPanelVisibilityu302("hidden");

}

}

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u128 = document.getElementById('u128');

var u68 = document.getElementById('u68');

var u257 = document.getElementById('u257');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u278 = document.getElementById('u278');

var u240 = document.getElementById('u240');

if (bIE) u240.attachEvent("onmouseover", MouseOveru240);
else u240.addEventListener("mouseover", MouseOveru240, true);
function MouseOveru240(e)
{
if (!IsTrueMouseOver('u240',e)) return;
if (true) {

	SetPanelStateu239("pd1u239");

}

}

if (bIE) u240.attachEvent("onmouseout", MouseOutu240);
else u240.addEventListener("mouseout", MouseOutu240, true);
function MouseOutu240(e)
{
if (!IsTrueMouseOut('u240',e)) return;
if (true) {

	SetPanelStateu239("pd0u239");

}

}

var u261 = document.getElementById('u261');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
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
var u192 = document.getElementById('u192');

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'top';
var u108 = document.getElementById('u108');

var u212 = document.getElementById('u212');

var u60 = document.getElementById('u60');

var u59 = document.getElementById('u59');

var u5 = document.getElementById('u5');

var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
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

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'top';
var u365 = document.getElementById('u365');

u365.style.cursor = 'pointer';
if (bIE) u365.attachEvent("onclick", Clicku365);
else u365.addEventListener("click", Clicku365, true);
function Clicku365(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

	SetPanelVisibilityu302("hidden");

}

}

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u295 = document.getElementById('u295');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u122 = document.getElementById('u122');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u138 = document.getElementById('u138');

var u345 = document.getElementById('u345');

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u231 = document.getElementById('u231');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u215 = document.getElementById('u215');

if (bIE) u215.attachEvent("onmouseout", MouseOutu215);
else u215.addEventListener("mouseout", MouseOutu215, true);
function MouseOutu215(e)
{
if (!IsTrueMouseOut('u215',e)) return;
if (true) {

}

}

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u102 = document.getElementById('u102');

var u180 = document.getElementById('u180');

var u369 = document.getElementById('u369');

u369.style.cursor = 'pointer';
if (bIE) u369.attachEvent("onclick", Clicku369);
else u369.addEventListener("click", Clicku369, true);
function Clicku369(e)
{

if (true) {

	SetPanelVisibilityu302("hidden");

rdo4onClickReturnToSaveAs(e);

}

}

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u300 = document.getElementById('u300');

u300.style.cursor = 'pointer';
if (bIE) u300.attachEvent("onclick", Clicku300);
else u300.addEventListener("click", Clicku300, true);
function Clicku300(e)
{

if (true) {

	NewWindow("help_View_History_Report.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u20 = document.getElementById('u20');

var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'top';
var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'center';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u255 = document.getElementById('u255');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u259 = document.getElementById('u259');

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

var u305 = document.getElementById('u305');

var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{

if (true) {

	NewWindow("help_My_History_Report.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u206 = document.getElementById('u206');

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u94 = document.getElementById('u94');

var u186 = document.getElementById('u186');

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'top';
var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u210 = document.getElementById('u210');

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u136 = document.getElementById('u136');

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'top';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u140 = document.getElementById('u140');

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

InsertBeforeEnd(u48LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u48Clicku16977a42a5c44fa19f2624907562aef8(event)'>ifMyInfoSaved</div>");
function u48Clicku16977a42a5c44fa19f2624907562aef8(e)
{

	self.location.href="Save_History_v2.html" + GetQuerystring();

	ToggleLinks(e, 'u48LinksClick');
}

InsertBeforeEnd(u48LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u48Clicku548aa8e3ab604a0da2638a3ce2893c71(event)'>ifMyInfoNotSaved</div>");
function u48Clicku548aa8e3ab604a0da2638a3ce2893c71(e)
{

	SetPanelStateu302("pd2u302");

	SetPanelVisibilityu302("");

	ToggleLinks(e, 'u48LinksClick');
}

if (bIE) u48.attachEvent("onmouseover", MouseOveru48);
else u48.addEventListener("mouseover", MouseOveru48, true);
function MouseOveru48(e)
{
if (!IsTrueMouseOver('u48',e)) return;
if (true) {

	SetPanelStateu45("pd1u45");

}

}

if (bIE) u48.attachEvent("onmouseout", MouseOutu48);
else u48.addEventListener("mouseout", MouseOutu48, true);
function MouseOutu48(e)
{
if (!IsTrueMouseOut('u48',e)) return;
if (true) {

	SetPanelStateu45("pd2u45");

}

}

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u106 = document.getElementById('u106');

var u88 = document.getElementById('u88');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u120 = document.getElementById('u120');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u302 = document.getElementById('u302');

var u289 = document.getElementById('u289');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u160 = document.getElementById('u160');

var u72 = document.getElementById('u72');

var u80 = document.getElementById('u80');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u281 = document.getElementById('u281');

var u168 = document.getElementById('u168');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'top';
var u96 = document.getElementById('u96');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u232 = document.getElementById('u232');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u276 = document.getElementById('u276');

var u154 = document.getElementById('u154');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u282 = document.getElementById('u282');

var u377 = document.getElementById('u377');

var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'top';
var u317 = document.getElementById('u317');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
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
var u284 = document.getElementById('u284');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u335 = document.getElementById('u335');

var u57 = document.getElementById('u57');

u57.style.cursor = 'pointer';
if (bIE) u57.attachEvent("onclick", Clicku57);
else u57.addEventListener("click", Clicku57, true);
function Clicku57(e)
{

if (true) {

	SetPanelVisibilityu265("");

	SetPanelVisibilityu268("");

}

}

var u134 = document.getElementById('u134');

var u92 = document.getElementById('u92');

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u190 = document.getElementById('u190');

var u353 = document.getElementById('u353');

var u37 = document.getElementById('u37');

var u198 = document.getElementById('u198');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u253 = document.getElementById('u253');

var u19 = document.getElementById('u19');

var u208 = document.getElementById('u208');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u66 = document.getElementById('u66');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'top';
var u280 = document.getElementById('u280');

var u118 = document.getElementById('u118');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
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
var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
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

if (bIE) u43.attachEvent("onmouseout", MouseOutu43);
else u43.addEventListener("mouseout", MouseOutu43, true);
function MouseOutu43(e)
{
if (!IsTrueMouseOut('u43',e)) return;
if (true) {

	SetPanelStateu41("pd0u41");

}

}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u222 = document.getElementById('u222');

if (bIE) u222.attachEvent("onmouseover", MouseOveru222);
else u222.addEventListener("mouseover", MouseOveru222, true);
function MouseOveru222(e)
{
if (!IsTrueMouseOver('u222',e)) return;
if (true) {

	SetPanelStateu221("pd1u221");

}

}

if (bIE) u222.attachEvent("onmouseout", MouseOutu222);
else u222.addEventListener("mouseout", MouseOutu222, true);
function MouseOutu222(e)
{
if (!IsTrueMouseOut('u222',e)) return;
if (true) {

	SetPanelStateu221("pd0u221");

}

}

var u213 = document.getElementById('u213');

var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u311 = document.getElementById('u311');

u311.style.cursor = 'pointer';
if (bIE) u311.attachEvent("onclick", Clicku311);
else u311.addEventListener("click", Clicku311, true);
function Clicku311(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

	SetPanelVisibilityu302("hidden");

}

}

var u152 = document.getElementById('u152');

var u239 = document.getElementById('u239');

var u237 = document.getElementById('u237');

if (bIE) u237.attachEvent("onmouseout", MouseOutu237);
else u237.addEventListener("mouseout", MouseOutu237, true);
function MouseOutu237(e)
{
if (!IsTrueMouseOut('u237',e)) return;
if (true) {

	SetPanelStateu235("pd0u235");

}

}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u202 = document.getElementById('u202');

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

InsertBeforeEnd(u52LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u52Clickuaca846c811e847b294e08af60c454caa(event)'>ifMyInfoSaved</div>");
function u52Clickuaca846c811e847b294e08af60c454caa(e)
{

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

	ToggleLinks(e, 'u52LinksClick');
}

InsertBeforeEnd(u52LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u52Clicku5f2ca64ea9f849bfb185ced04b680a87(event)'>ifMyInfoNotSaved</div>");
function u52Clicku5f2ca64ea9f849bfb185ced04b680a87(e)
{

	SetPanelStateu302("pd3u302");

	SetPanelVisibilityu302("");

	ToggleLinks(e, 'u52LinksClick');
}

if (bIE) u52.attachEvent("onmouseout", MouseOutu52);
else u52.addEventListener("mouseout", MouseOutu52, true);
function MouseOutu52(e)
{
if (!IsTrueMouseOut('u52',e)) return;
if (true) {

	SetPanelStateu49("pd0u49");

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u194 = document.getElementById('u194');

var u132 = document.getElementById('u132');

var u184 = document.getElementById('u184');

var u347 = document.getElementById('u347');

u347.style.cursor = 'pointer';
if (bIE) u347.attachEvent("onclick", Clicku347);
else u347.addEventListener("click", Clicku347, true);
function Clicku347(e)
{

if (true) {

	SetPanelVisibilityu302("hidden");

}

}

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
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
var u221 = document.getElementById('u221');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u293 = document.getElementById('u293');

u293.style.cursor = 'pointer';
if (bIE) u293.attachEvent("onclick", Clicku293);
else u293.addEventListener("click", Clicku293, true);
function Clicku293(e)
{

if (true) {

	SetPanelVisibilityu265("hidden");

	SetPanelVisibilityu268("hidden");

}

}

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'center';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'top';
var u78 = document.getElementById('u78');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u378 = document.getElementById('u378');

u378.style.cursor = 'pointer';
if (bIE) u378.attachEvent("onclick", Clicku378);
else u378.addEventListener("click", Clicku378, true);
function Clicku378(e)
{

if (true) {

	SetPanelVisibilityu302("hidden");

rdo4onClickCloseMsgPleaseWait(e);

}

}

var u21 = document.getElementById('u21');

var u236 = document.getElementById('u236');

if (bIE) u236.attachEvent("onmouseover", MouseOveru236);
else u236.addEventListener("mouseover", MouseOveru236, true);
function MouseOveru236(e)
{
if (!IsTrueMouseOver('u236',e)) return;
if (true) {

	SetPanelStateu235("pd1u235");

}

}

if (bIE) u236.attachEvent("onmouseout", MouseOutu236);
else u236.addEventListener("mouseout", MouseOutu236, true);
function MouseOutu236(e)
{
if (!IsTrueMouseOut('u236',e)) return;
if (true) {

	SetPanelStateu235("pd0u235");

}

}

var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u325 = document.getElementById('u325');

u325.style.cursor = 'pointer';
if (bIE) u325.attachEvent("onclick", Clicku325);
else u325.addEventListener("click", Clicku325, true);
function Clicku325(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

	SetPanelVisibilityu302("hidden");

}

}

var u166 = document.getElementById('u166');

var u70 = document.getElementById('u70');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u220 = document.getElementById('u220');

if (bIE) u220.attachEvent("onmouseover", MouseOveru220);
else u220.addEventListener("mouseover", MouseOveru220, true);
function MouseOveru220(e)
{
if (!IsTrueMouseOver('u220',e)) return;
if (true) {

	SetPanelStateu217("pd1u217");

}

}

if (bIE) u220.attachEvent("onmouseout", MouseOutu220);
else u220.addEventListener("mouseout", MouseOutu220, true);
function MouseOutu220(e)
{
if (!IsTrueMouseOut('u220',e)) return;
if (true) {

	SetPanelStateu217("pd2u217");

}

}

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u146 = document.getElementById('u146');

var u225 = document.getElementById('u225');

var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", u46Click);
else u46.addEventListener("click", u46Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u46LinksClick'></DIV>")
var u46LinksClick = document.getElementById('u46LinksClick');
function u46Click(e) 
{

	ToggleLinks(e, 'u46LinksClick');
}

InsertBeforeEnd(u46LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u46Clicku4359ea46222a41d58fba5387f1f54f78(event)'>ifMyInfoSaved</div>");
function u46Clicku4359ea46222a41d58fba5387f1f54f78(e)
{

	self.location.href="Save_History_v2.html" + GetQuerystring();

	ToggleLinks(e, 'u46LinksClick');
}

InsertBeforeEnd(u46LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u46Clicku31a1fb0515024bc6adacbfd69ea334f4(event)'>ifMyInfoNotSaved</div>");
function u46Clicku31a1fb0515024bc6adacbfd69ea334f4(e)
{

	SetPanelStateu302("pd2u302");

	SetPanelVisibilityu302("");

	ToggleLinks(e, 'u46LinksClick');
}

if (bIE) u46.attachEvent("onmouseover", MouseOveru46);
else u46.addEventListener("mouseover", MouseOveru46, true);
function MouseOveru46(e)
{
if (!IsTrueMouseOver('u46',e)) return;
if (true) {

	SetPanelStateu45("pd1u45");

}

}

if (bIE) u46.attachEvent("onmouseout", MouseOutu46);
else u46.addEventListener("mouseout", MouseOutu46, true);
function MouseOutu46(e)
{
if (!IsTrueMouseOut('u46',e)) return;
if (true) {

	SetPanelStateu45("pd0u45");

}

}

var u150 = document.getElementById('u150');

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u373 = document.getElementById('u373');

var u329 = document.getElementById('u329');

var u238 = document.getElementById('u238');

if (bIE) u238.attachEvent("onmouseover", MouseOveru238);
else u238.addEventListener("mouseover", MouseOveru238, true);
function MouseOveru238(e)
{
if (!IsTrueMouseOver('u238',e)) return;
if (true) {

	SetPanelStateu235("pd1u235");

}

}

if (bIE) u238.attachEvent("onmouseout", MouseOutu238);
else u238.addEventListener("mouseout", MouseOutu238, true);
function MouseOutu238(e)
{
if (!IsTrueMouseOut('u238',e)) return;
if (true) {

	SetPanelStateu235("pd2u235");

}

}

var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u269 = document.getElementById('u269');

var u130 = document.getElementById('u130');

var u315 = document.getElementById('u315');

var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{

if (true) {

	NewWindow("help_My_History_Report.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

if (bIE) u55.attachEvent("onmouseout", MouseOutu55);
else u55.addEventListener("mouseout", MouseOutu55, true);
function MouseOutu55(e)
{
if (!IsTrueMouseOut('u55',e)) return;
if (true) {

	SetPanelStateu53("pd0u53");

}

}

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u196 = document.getElementById('u196');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'top';
var u337 = document.getElementById('u337');

var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u351 = document.getElementById('u351');

var u359 = document.getElementById('u359');

u359.style.cursor = 'pointer';
if (bIE) u359.attachEvent("onclick", Clicku359);
else u359.addEventListener("click", Clicku359, true);
function Clicku359(e)
{

if (true) {

	SetPanelVisibilityu302("hidden");

}

}

var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'center';
var u116 = document.getElementById('u116');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u100 = document.getElementById('u100');

var u286 = document.getElementById('u286');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u291 = document.getElementById('u291');

u291.style.cursor = 'pointer';
if (bIE) u291.attachEvent("onclick", Clicku291);
else u291.addEventListener("click", Clicku291, true);
function Clicku291(e)
{

if (true) {

	SetPanelStateu302("pd7u302");

	SetPanelVisibilityu302("");

	SetPanelVisibilityu59("hidden");

	SetPanelVisibilityu212("hidden");

	SetPanelVisibilityu225("hidden");

	SetPanelVisibilityu268("hidden");

}

}

var u214 = document.getElementById('u214');

if (bIE) u214.attachEvent("onmouseover", MouseOveru214);
else u214.addEventListener("mouseover", MouseOveru214, true);
function MouseOveru214(e)
{
if (!IsTrueMouseOver('u214',e)) return;
if (true) {

	SetPanelStateu213("pd1u213");

}

}

if (bIE) u214.attachEvent("onmouseout", MouseOutu214);
else u214.addEventListener("mouseout", MouseOutu214, true);
function MouseOutu214(e)
{
if (!IsTrueMouseOut('u214',e)) return;
if (true) {

	SetPanelStateu213("pd0u213");

}

}

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u41 = document.getElementById('u41');

var u170 = document.getElementById('u170');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u45 = document.getElementById('u45');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u303 = document.getElementById('u303');

var u144 = document.getElementById('u144');

var u98 = document.getElementById('u98');

var u178 = document.getElementById('u178');

var u224 = document.getElementById('u224');

if (bIE) u224.attachEvent("onmouseover", MouseOveru224);
else u224.addEventListener("mouseover", MouseOveru224, true);
function MouseOveru224(e)
{
if (!IsTrueMouseOver('u224',e)) return;
if (true) {

	SetPanelStateu221("pd1u221");

}

}

if (bIE) u224.attachEvent("onmouseout", MouseOutu224);
else u224.addEventListener("mouseout", MouseOutu224, true);
function MouseOutu224(e)
{
if (!IsTrueMouseOut('u224',e)) return;
if (true) {

	SetPanelStateu221("pd2u221");

}

}

var u233 = document.getElementById('u233');

var u371 = document.getElementById('u371');

var u219 = document.getElementById('u219');

if (bIE) u219.attachEvent("onmouseout", MouseOutu219);
else u219.addEventListener("mouseout", MouseOutu219, true);
function MouseOutu219(e)
{
if (!IsTrueMouseOut('u219',e)) return;
if (true) {

}

}

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", u50Click);
else u50.addEventListener("click", u50Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u50LinksClick'></DIV>")
var u50LinksClick = document.getElementById('u50LinksClick');
function u50Click(e) 
{

	ToggleLinks(e, 'u50LinksClick');
}

InsertBeforeEnd(u50LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u50Clicku275ed3fbc556438da77f29fbca8b3a5b(event)'>ifMyInfoSaved</div>");
function u50Clicku275ed3fbc556438da77f29fbca8b3a5b(e)
{

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

	ToggleLinks(e, 'u50LinksClick');
}

InsertBeforeEnd(u50LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u50Clicku2560b693722c4e65903bf6956f920ecd(event)'>ifMyInfoNotSaved</div>");
function u50Clicku2560b693722c4e65903bf6956f920ecd(e)
{

	SetPanelStateu302("pd3u302");

	SetPanelVisibilityu302("");

	ToggleLinks(e, 'u50LinksClick');
}

if (bIE) u50.attachEvent("onmouseover", MouseOveru50);
else u50.addEventListener("mouseover", MouseOveru50, true);
function MouseOveru50(e)
{
if (!IsTrueMouseOver('u50',e)) return;
if (true) {

	SetPanelStateu49("pd2u49");

}

}

if (bIE) u50.attachEvent("onmouseout", MouseOutu50);
else u50.addEventListener("mouseout", MouseOutu50, true);
function MouseOutu50(e)
{
if (!IsTrueMouseOut('u50',e)) return;
if (true) {

	SetPanelStateu49("pd0u49");

}

}

var u4 = document.getElementById('u4');

var u273 = document.getElementById('u273');

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u90 = document.getElementById('u90');

var u8 = document.getElementById('u8');

var u268 = document.getElementById('u268');

var u327 = document.getElementById('u327');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
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
var u182 = document.getElementById('u182');

var u309 = document.getElementById('u309');

u309.style.cursor = 'pointer';
if (bIE) u309.attachEvent("onclick", Clicku309);
else u309.addEventListener("click", Clicku309, true);
function Clicku309(e)
{

if (true) {

	SetPanelVisibilityu302("hidden");

}

}

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'center';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u241 = document.getElementById('u241');

if (bIE) u241.attachEvent("onmouseout", MouseOutu241);
else u241.addEventListener("mouseout", MouseOutu241, true);
function MouseOutu241(e)
{
if (!IsTrueMouseOut('u241',e)) return;
if (true) {

	SetPanelStateu239("pd0u239");

}

}

var u172 = document.getElementById('u172');

var u361 = document.getElementById('u361');

var u204 = document.getElementById('u204');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u321 = document.getElementById('u321');

u321.style.cursor = 'pointer';
if (bIE) u321.attachEvent("onclick", Clicku321);
else u321.addEventListener("click", Clicku321, true);
function Clicku321(e)
{

if (true) {

	SetPanelVisibilityu302("hidden");

}

}

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u290 = document.getElementById('u290');

var u251 = document.getElementById('u251');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u164 = document.getElementById('u164');

var u298 = document.getElementById('u298');

u298.style.cursor = 'pointer';
if (bIE) u298.attachEvent("onclick", Clicku298);
else u298.addEventListener("click", Clicku298, true);
function Clicku298(e)
{

if (true) {

	SetPanelVisibilityu265("hidden");

	SetPanelVisibilityu268("hidden");

}

}

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u142 = document.getElementById('u142');

var u363 = document.getElementById('u363');

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
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
var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
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

if (bIE) u44.attachEvent("onmouseover", MouseOveru44);
else u44.addEventListener("mouseover", MouseOveru44, true);
function MouseOveru44(e)
{
if (!IsTrueMouseOver('u44',e)) return;
if (true) {

	SetPanelStateu41("pd1u41");

}

}

if (bIE) u44.attachEvent("onmouseout", MouseOutu44);
else u44.addEventListener("mouseout", MouseOutu44, true);
function MouseOutu44(e)
{
if (!IsTrueMouseOut('u44',e)) return;
if (true) {

	SetPanelStateu41("pd2u41");

}

}

var u84 = document.getElementById('u84');

var u124 = document.getElementById('u124');

var u76 = document.getElementById('u76');

var u223 = document.getElementById('u223');

if (bIE) u223.attachEvent("onmouseout", MouseOutu223);
else u223.addEventListener("mouseout", MouseOutu223, true);
function MouseOutu223(e)
{
if (!IsTrueMouseOut('u223',e)) return;
if (true) {

	SetPanelStateu221("pd0u221");

}

}

var u218 = document.getElementById('u218');

if (bIE) u218.attachEvent("onmouseover", MouseOveru218);
else u218.addEventListener("mouseover", MouseOveru218, true);
function MouseOveru218(e)
{
if (!IsTrueMouseOver('u218',e)) return;
if (true) {

	SetPanelStateu217("pd1u217");

}

}

if (bIE) u218.attachEvent("onmouseout", MouseOutu218);
else u218.addEventListener("mouseout", MouseOutu218, true);
function MouseOutu218(e)
{
if (!IsTrueMouseOut('u218',e)) return;
if (true) {

	SetPanelStateu217("pd0u217");

}

}

var u17 = document.getElementById('u17');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
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
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u38 = document.getElementById('u38');

var u112 = document.getElementById('u112');

var u53 = document.getElementById('u53');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u49 = document.getElementById('u49');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u313 = document.getElementById('u313');

u313.style.cursor = 'pointer';
if (bIE) u313.attachEvent("onclick", Clicku313);
else u313.addEventListener("click", Clicku313, true);
function Clicku313(e)
{

if (true) {

	self.location.href="Save_History_v2.html" + GetQuerystring();

	SetPanelVisibilityu302("hidden");

}

}

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
var u357 = document.getElementById('u357');

u357.style.cursor = 'pointer';
if (bIE) u357.attachEvent("onclick", Clicku357);
else u357.addEventListener("click", Clicku357, true);
function Clicku357(e)
{

if (true) {

rdo4onClickDeleteRelYes(e);

}

}

var u265 = document.getElementById('u265');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u339 = document.getElementById('u339');

u339.style.cursor = 'pointer';
if (bIE) u339.attachEvent("onclick", Clicku339);
else u339.addEventListener("click", Clicku339, true);
function Clicku339(e)
{

if (true) {

	SetPanelVisibilityu302("hidden");

}

}

var u2 = document.getElementById('u2');

var u156 = document.getElementById('u156');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u243 = document.getElementById('u243');

var u114 = document.getElementById('u114');

var u245 = document.getElementById('u245');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u247 = document.getElementById('u247');

var u148 = document.getElementById('u148');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u176 = document.getElementById('u176');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u200 = document.getElementById('u200');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u158 = document.getElementById('u158');

var u217 = document.getElementById('u217');

var u15 = document.getElementById('u15');

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u249 = document.getElementById('u249');

var u235 = document.getElementById('u235');

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

InsertBeforeEnd(u47LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u47Clickudb08687ef229462597dafd087477263a(event)'>ifMyInfoSaved</div>");
function u47Clickudb08687ef229462597dafd087477263a(e)
{

	self.location.href="Save_History_v2.html" + GetQuerystring();

	ToggleLinks(e, 'u47LinksClick');
}

InsertBeforeEnd(u47LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u47Clicku4262a355b09d46a4ac3644bd86ddf5a7(event)'>ifMyInfoNotSaved</div>");
function u47Clicku4262a355b09d46a4ac3644bd86ddf5a7(e)
{

	SetPanelStateu302("pd2u302");

	SetPanelVisibilityu302("");

	ToggleLinks(e, 'u47LinksClick');
}

if (bIE) u47.attachEvent("onmouseout", MouseOutu47);
else u47.addEventListener("mouseout", MouseOutu47, true);
function MouseOutu47(e)
{
if (!IsTrueMouseOut('u47',e)) return;
if (true) {

	SetPanelStateu45("pd0u45");

}

}

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u266 = document.getElementById('u266');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u7 = document.getElementById('u7');

var u110 = document.getElementById('u110');

var u271 = document.getElementById('u271');

u271.style.cursor = 'pointer';
if (bIE) u271.attachEvent("onclick", Clicku271);
else u271.addEventListener("click", Clicku271, true);
function Clicku271(e)
{

if ((GetCheckState('u271')) == (false)) {

	SetPanelVisibilityu273("hidden");

	MoveWidgetBy('u281',0,-122);

	MoveWidgetBy('u290',0,-122);

}
else
if ((GetCheckState('u271')) == (true)) {

	SetPanelVisibilityu273("");

	MoveWidgetBy('u281',0,122);

	MoveWidgetBy('u290',0,122);

}

}

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'top';
var u174 = document.getElementById('u174');

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
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{

if (true) {

	NewWindow("help_My_History_Report.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u263 = document.getElementById('u263');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u343 = document.getElementById('u343');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u188 = document.getElementById('u188');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
if (window.OnLoad) OnLoad();
