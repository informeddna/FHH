
var PageName = 'My History Report';
var PageId = 'peea9123b00204988b71d01ba7dde7810'
var PageUrl = 'My_History_Report.html'
document.title = 'My History Report';

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

eval(GetDynamicPanelScript('u55', 3));

eval(GetDynamicPanelScript('u71', 3));

eval(GetDynamicPanelScript('u75', 3));

eval(GetDynamicPanelScript('u83', 3));

eval(GetDynamicPanelScript('u51', 3));

eval(GetDynamicPanelScript('u67', 3));

eval(GetDynamicPanelScript('u79', 3));

eval(GetDynamicPanelScript('u63', 3));

eval(GetDynamicPanelScript('u59', 3));

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

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{

if (true) {

	self.location.href="View_History_Report.html" + GetQuerystring();

}

}

var u256 = document.getElementById('u256');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
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
var u226 = document.getElementById('u226');

var u142 = document.getElementById('u142');

var u180 = document.getElementById('u180');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u190 = document.getElementById('u190');

var u59 = document.getElementById('u59');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u71 = document.getElementById('u71');

var u104 = document.getElementById('u104');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u73 = document.getElementById('u73');

if (bIE) u73.attachEvent("onmouseout", MouseOutu73);
else u73.addEventListener("mouseout", MouseOutu73, true);
function MouseOutu73(e)
{
if (!IsTrueMouseOut('u73',e)) return;
if (true) {

	SetPanelStateu71("pd0u71");

}

}

var u112 = document.getElementById('u112');

var u128 = document.getElementById('u128');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
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

InsertBeforeEnd(u56LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u56Clicku4885bf35e5554711a60a612f82695ab9(event)'>ifMyInfoSaved</div>");
function u56Clicku4885bf35e5554711a60a612f82695ab9(e)
{

	ToggleLinks(e, 'u56LinksClick');
}

InsertBeforeEnd(u56LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u56Clicku88975878eb3044efb774d5568df26fae(event)'>ifMyInfoNotSaved</div>");
function u56Clicku88975878eb3044efb774d5568df26fae(e)
{

	ToggleLinks(e, 'u56LinksClick');
}

if (bIE) u56.attachEvent("onmouseover", MouseOveru56);
else u56.addEventListener("mouseover", MouseOveru56, true);
function MouseOveru56(e)
{
if (!IsTrueMouseOver('u56',e)) return;
if (true) {

	SetPanelStateu55("pd1u55");

}

}

if (bIE) u56.attachEvent("onmouseout", MouseOutu56);
else u56.addEventListener("mouseout", MouseOutu56, true);
function MouseOutu56(e)
{
if (!IsTrueMouseOut('u56',e)) return;
if (true) {

	SetPanelStateu55("pd0u55");

}

}

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
var u206 = document.getElementById('u206');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u252 = document.getElementById('u252');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
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
var u246 = document.getElementById('u246');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
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

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

if (bIE) u54.attachEvent("onmouseover", MouseOveru54);
else u54.addEventListener("mouseover", MouseOveru54, true);
function MouseOveru54(e)
{
if (!IsTrueMouseOver('u54',e)) return;
if (true) {

	SetPanelStateu51("pd1u51");

}

}

if (bIE) u54.attachEvent("onmouseout", MouseOutu54);
else u54.addEventListener("mouseout", MouseOutu54, true);
function MouseOutu54(e)
{
if (!IsTrueMouseOut('u54',e)) return;
if (true) {

	SetPanelStateu51("pd2u51");

}

}

var u100 = document.getElementById('u100');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u37 = document.getElementById('u37');

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u68 = document.getElementById('u68');

if (bIE) u68.attachEvent("onmouseover", MouseOveru68);
else u68.addEventListener("mouseover", MouseOveru68, true);
function MouseOveru68(e)
{
if (!IsTrueMouseOver('u68',e)) return;
if (true) {

	SetPanelStateu67("pd1u67");

}

}

if (bIE) u68.attachEvent("onmouseout", MouseOutu68);
else u68.addEventListener("mouseout", MouseOutu68, true);
function MouseOutu68(e)
{
if (!IsTrueMouseOut('u68',e)) return;
if (true) {

	SetPanelStateu67("pd0u67");

}

}

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u248 = document.getElementById('u248');

var u21 = document.getElementById('u21');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u240 = document.getElementById('u240');

var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u194 = document.getElementById('u194');

var u156 = document.getElementById('u156');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u126 = document.getElementById('u126');

var u170 = document.getElementById('u170');

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u220 = document.getElementById('u220');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u63 = document.getElementById('u63');

var u84 = document.getElementById('u84');

if (bIE) u84.attachEvent("onmouseover", MouseOveru84);
else u84.addEventListener("mouseover", MouseOveru84, true);
function MouseOveru84(e)
{
if (!IsTrueMouseOver('u84',e)) return;
if (true) {

	SetPanelStateu83("pd1u83");

}

}

if (bIE) u84.attachEvent("onmouseout", MouseOutu84);
else u84.addEventListener("mouseout", MouseOutu84, true);
function MouseOutu84(e)
{
if (!IsTrueMouseOut('u84',e)) return;
if (true) {

	SetPanelStateu83("pd0u83");

}

}

var u106 = document.getElementById('u106');

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

var u46 = document.getElementById('u46');

var u198 = document.getElementById('u198');

var u81 = document.getElementById('u81');

if (bIE) u81.attachEvent("onmouseout", MouseOutu81);
else u81.addEventListener("mouseout", MouseOutu81, true);
function MouseOutu81(e)
{
if (!IsTrueMouseOut('u81',e)) return;
if (true) {

	SetPanelStateu71("pd0u71");

}

}

var u144 = document.getElementById('u144');

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u172 = document.getElementById('u172');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'center';
var u94 = document.getElementById('u94');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u77 = document.getElementById('u77');

if (bIE) u77.attachEvent("onmouseout", MouseOutu77);
else u77.addEventListener("mouseout", MouseOutu77, true);
function MouseOutu77(e)
{
if (!IsTrueMouseOut('u77',e)) return;
if (true) {

	SetPanelStateu67("pd0u67");

}

}

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'center';
var u61 = document.getElementById('u61');

u61.style.cursor = 'pointer';
if (bIE) u61.attachEvent("onclick", Clicku61);
else u61.addEventListener("click", Clicku61, true);
function Clicku61(e)
{

if (true) {

	self.location.href="View_History_Report.html" + GetQuerystring();

}

}

if (bIE) u61.attachEvent("onmouseover", MouseOveru61);
else u61.addEventListener("mouseover", MouseOveru61, true);
function MouseOveru61(e)
{
if (!IsTrueMouseOver('u61',e)) return;
if (true) {

	SetPanelStateu59("pd2u59");

}

}

if (bIE) u61.attachEvent("onmouseout", MouseOutu61);
else u61.addEventListener("mouseout", MouseOutu61, true);
function MouseOutu61(e)
{
if (!IsTrueMouseOut('u61',e)) return;
if (true) {

	SetPanelStateu59("pd1u59");

}

}

var u168 = document.getElementById('u168');

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
gv_vAlignTable['u95'] = 'center';
var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u96 = document.getElementById('u96');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u254 = document.getElementById('u254');

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'center';
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

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u2 = document.getElementById('u2');

var u75 = document.getElementById('u75');

var u132 = document.getElementById('u132');

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u148 = document.getElementById('u148');

var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", u58Click);
else u58.addEventListener("click", u58Click, true);
InsertAfterBegin(document.body, "<DIV class='intcases' id='u58LinksClick'></DIV>")
var u58LinksClick = document.getElementById('u58LinksClick');
function u58Click(e) 
{

	ToggleLinks(e, 'u58LinksClick');
}

InsertBeforeEnd(u58LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u58Clicku16977a42a5c44fa19f2624907562aef8(event)'>ifMyInfoSaved</div>");
function u58Clicku16977a42a5c44fa19f2624907562aef8(e)
{

	ToggleLinks(e, 'u58LinksClick');
}

InsertBeforeEnd(u58LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u58Clicku548aa8e3ab604a0da2638a3ce2893c71(event)'>ifMyInfoNotSaved</div>");
function u58Clicku548aa8e3ab604a0da2638a3ce2893c71(e)
{

	ToggleLinks(e, 'u58LinksClick');
}

if (bIE) u58.attachEvent("onmouseover", MouseOveru58);
else u58.addEventListener("mouseover", MouseOveru58, true);
function MouseOveru58(e)
{
if (!IsTrueMouseOver('u58',e)) return;
if (true) {

	SetPanelStateu55("pd1u55");

}

}

if (bIE) u58.attachEvent("onmouseout", MouseOutu58);
else u58.addEventListener("mouseout", MouseOutu58, true);
function MouseOutu58(e)
{
if (!IsTrueMouseOut('u58',e)) return;
if (true) {

	SetPanelStateu55("pd2u55");

}

}

var u140 = document.getElementById('u140');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u250 = document.getElementById('u250');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u234 = document.getElementById('u234');

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
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
gv_vAlignTable['u153'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u196 = document.getElementById('u196');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u160 = document.getElementById('u160');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u70 = document.getElementById('u70');

if (bIE) u70.attachEvent("onmouseover", MouseOveru70);
else u70.addEventListener("mouseover", MouseOveru70, true);
function MouseOveru70(e)
{
if (!IsTrueMouseOver('u70',e)) return;
if (true) {

	SetPanelStateu67("pd1u67");

}

}

if (bIE) u70.attachEvent("onmouseout", MouseOutu70);
else u70.addEventListener("mouseout", MouseOutu70, true);
function MouseOutu70(e)
{
if (!IsTrueMouseOut('u70',e)) return;
if (true) {

	SetPanelStateu67("pd2u67");

}

}

var u120 = document.getElementById('u120');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');

u53.style.cursor = 'pointer';
if (bIE) u53.attachEvent("onclick", Clicku53);
else u53.addEventListener("click", Clicku53, true);
function Clicku53(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

var u8 = document.getElementById('u8');

var u214 = document.getElementById('u214');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u222 = document.getElementById('u222');

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u238 = document.getElementById('u238');

var u20 = document.getElementById('u20');

var u67 = document.getElementById('u67');

var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{

if (true) {

	self.location.href="My_Family_History.html" + GetQuerystring();

}

}

if (bIE) u52.attachEvent("onmouseover", MouseOveru52);
else u52.addEventListener("mouseover", MouseOveru52, true);
function MouseOveru52(e)
{
if (!IsTrueMouseOver('u52',e)) return;
if (true) {

	SetPanelStateu51("pd1u51");

}

}

if (bIE) u52.attachEvent("onmouseout", MouseOutu52);
else u52.addEventListener("mouseout", MouseOutu52, true);
function MouseOutu52(e)
{
if (!IsTrueMouseOut('u52',e)) return;
if (true) {

	SetPanelStateu51("pd0u51");

}

}

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u184 = document.getElementById('u184');

var u85 = document.getElementById('u85');

if (bIE) u85.attachEvent("onmouseout", MouseOutu85);
else u85.addEventListener("mouseout", MouseOutu85, true);
function MouseOutu85(e)
{
if (!IsTrueMouseOut('u85',e)) return;
if (true) {

	SetPanelStateu83("pd0u83");

}

}

var u146 = document.getElementById('u146');

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u154 = document.getElementById('u154');

var u236 = document.getElementById('u236');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u202 = document.getElementById('u202');

var u17 = document.getElementById('u17');

var u218 = document.getElementById('u218');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u65 = document.getElementById('u65');

u65.style.cursor = 'pointer';
if (bIE) u65.attachEvent("onclick", Clicku65);
else u65.addEventListener("click", Clicku65, true);
function Clicku65(e)
{

if (true) {

	NewWindow("help_My_History_Report.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u48 = document.getElementById('u48');

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u210 = document.getElementById('u210');

var u242 = document.getElementById('u242');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u79 = document.getElementById('u79');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u188 = document.getElementById('u188');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u80 = document.getElementById('u80');

if (bIE) u80.attachEvent("onmouseover", MouseOveru80);
else u80.addEventListener("mouseover", MouseOveru80, true);
function MouseOveru80(e)
{
if (!IsTrueMouseOver('u80',e)) return;
if (true) {

	SetPanelStateu79("pd1u79");

}

}

if (bIE) u80.attachEvent("onmouseout", MouseOutu80);
else u80.addEventListener("mouseout", MouseOutu80, true);
function MouseOutu80(e)
{
if (!IsTrueMouseOut('u80',e)) return;
if (true) {

	SetPanelStateu79("pd0u79");

}

}

var u134 = document.getElementById('u134');

var u51 = document.getElementById('u51');

var u239 = document.getElementById('u239');
gv_vAlignTable['u239'] = 'center';
var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u76 = document.getElementById('u76');

if (bIE) u76.attachEvent("onmouseover", MouseOveru76);
else u76.addEventListener("mouseover", MouseOveru76, true);
function MouseOveru76(e)
{
if (!IsTrueMouseOver('u76',e)) return;
if (true) {

	SetPanelStateu75("pd1u75");

}

}

if (bIE) u76.attachEvent("onmouseout", MouseOutu76);
else u76.addEventListener("mouseout", MouseOutu76, true);
function MouseOutu76(e)
{
if (!IsTrueMouseOut('u76',e)) return;
if (true) {

	SetPanelStateu75("pd0u75");

}

}

var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u158 = document.getElementById('u158');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u204 = document.getElementById('u204');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{

if (true) {

	self.location.href="View_History_Report.html" + GetQuerystring();

}

}

if (bIE) u60.attachEvent("onmouseover", MouseOveru60);
else u60.addEventListener("mouseover", MouseOveru60, true);
function MouseOveru60(e)
{
if (!IsTrueMouseOver('u60',e)) return;
if (true) {

	SetPanelStateu59("pd2u59");

}

}

if (bIE) u60.attachEvent("onmouseout", MouseOutu60);
else u60.addEventListener("mouseout", MouseOutu60, true);
function MouseOutu60(e)
{
if (!IsTrueMouseOut('u60',e)) return;
if (true) {

	SetPanelStateu59("pd0u59");

}

}

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u150 = document.getElementById('u150');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u114 = document.getElementById('u114');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u174 = document.getElementById('u174');

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
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u124 = document.getElementById('u124');

var u74 = document.getElementById('u74');

if (bIE) u74.attachEvent("onmouseover", MouseOveru74);
else u74.addEventListener("mouseover", MouseOveru74, true);
function MouseOveru74(e)
{
if (!IsTrueMouseOver('u74',e)) return;
if (true) {

	SetPanelStateu71("pd1u71");

}

}

if (bIE) u74.attachEvent("onmouseout", MouseOutu74);
else u74.addEventListener("mouseout", MouseOutu74, true);
function MouseOutu74(e)
{
if (!IsTrueMouseOut('u74',e)) return;
if (true) {

	SetPanelStateu71("pd2u71");

}

}

var u122 = document.getElementById('u122');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u138 = document.getElementById('u138');

var u136 = document.getElementById('u136');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
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

InsertBeforeEnd(u57LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u57Clickubdf47192bdd9442f87625c7039c03f05(event)'>ifMyInfoSaved</div>");
function u57Clickubdf47192bdd9442f87625c7039c03f05(e)
{

	ToggleLinks(e, 'u57LinksClick');
}

InsertBeforeEnd(u57LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u57Clicku74ea4edb5f16419f801fdc0baea00049(event)'>ifMyInfoNotSaved</div>");
function u57Clicku74ea4edb5f16419f801fdc0baea00049(e)
{

	ToggleLinks(e, 'u57LinksClick');
}

var u92 = document.getElementById('u92');

var u5 = document.getElementById('u5');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u224 = document.getElementById('u224');

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

if (bIE) u72.attachEvent("onmouseover", MouseOveru72);
else u72.addEventListener("mouseover", MouseOveru72, true);
function MouseOveru72(e)
{
if (!IsTrueMouseOver('u72',e)) return;
if (true) {

	SetPanelStateu71("pd1u71");

}

}

if (bIE) u72.attachEvent("onmouseout", MouseOutu72);
else u72.addEventListener("mouseout", MouseOutu72, true);
function MouseOutu72(e)
{
if (!IsTrueMouseOut('u72',e)) return;
if (true) {

	SetPanelStateu71("pd0u71");

}

}

var u102 = document.getElementById('u102');

var u232 = document.getElementById('u232');

var u118 = document.getElementById('u118');

var u0 = document.getElementById('u0');

var u55 = document.getElementById('u55');

var u38 = document.getElementById('u38');

var u83 = document.getElementById('u83');

var u110 = document.getElementById('u110');

var u86 = document.getElementById('u86');

if (bIE) u86.attachEvent("onmouseover", MouseOveru86);
else u86.addEventListener("mouseover", MouseOveru86, true);
function MouseOveru86(e)
{
if (!IsTrueMouseOver('u86',e)) return;
if (true) {

	SetPanelStateu83("pd1u83");

}

}

if (bIE) u86.attachEvent("onmouseout", MouseOutu86);
else u86.addEventListener("mouseout", MouseOutu86, true);
function MouseOutu86(e)
{
if (!IsTrueMouseOut('u86',e)) return;
if (true) {

	SetPanelStateu83("pd2u83");

}

}

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u69 = document.getElementById('u69');

if (bIE) u69.attachEvent("onmouseout", MouseOutu69);
else u69.addEventListener("mouseout", MouseOutu69, true);
function MouseOutu69(e)
{
if (!IsTrueMouseOut('u69',e)) return;
if (true) {

	SetPanelStateu67("pd0u67");

}

}

var u216 = document.getElementById('u216');

var u258 = document.getElementById('u258');

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
gv_vAlignTable['u123'] = 'center';
var u212 = document.getElementById('u212');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u186 = document.getElementById('u186');

var u166 = document.getElementById('u166');

var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	NewWindow("help_My_History_Report.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u19 = document.getElementById('u19');

var u50 = document.getElementById('u50');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u15 = document.getElementById('u15');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u98 = document.getElementById('u98');

var u230 = document.getElementById('u230');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u208 = document.getElementById('u208');

var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{

if (true) {

	NewWindow("help_My_History_Report.html" + GetQuerystring(), "", "directories=0, height=500, location=0, menubar=0, resizable=1, scrollbars=1, status=1, toolbar=0, width=690", true, 690, 500);

}

}

var u164 = document.getElementById('u164');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u200 = document.getElementById('u200');

var u192 = document.getElementById('u192');

var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u82 = document.getElementById('u82');

if (bIE) u82.attachEvent("onmouseover", MouseOveru82);
else u82.addEventListener("mouseover", MouseOveru82, true);
function MouseOveru82(e)
{
if (!IsTrueMouseOver('u82',e)) return;
if (true) {

	SetPanelStateu79("pd1u79");

}

}

if (bIE) u82.attachEvent("onmouseout", MouseOutu82);
else u82.addEventListener("mouseout", MouseOutu82, true);
function MouseOutu82(e)
{
if (!IsTrueMouseOut('u82',e)) return;
if (true) {

	SetPanelStateu79("pd2u79");

}

}

var u116 = document.getElementById('u116');

var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u78 = document.getElementById('u78');

if (bIE) u78.attachEvent("onmouseover", MouseOveru78);
else u78.addEventListener("mouseover", MouseOveru78, true);
function MouseOveru78(e)
{
if (!IsTrueMouseOver('u78',e)) return;
if (true) {

	SetPanelStateu75("pd1u75");

}

}

if (bIE) u78.attachEvent("onmouseout", MouseOutu78);
else u78.addEventListener("mouseout", MouseOutu78, true);
function MouseOutu78(e)
{
if (!IsTrueMouseOut('u78',e)) return;
if (true) {

	SetPanelStateu75("pd2u75");

}

}

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
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

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
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

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u244 = document.getElementById('u244');

if (window.OnLoad) OnLoad();
