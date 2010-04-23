
var PageName = 'FHH Detailed Flow';
var PageId = 'p876f5d2a98914667aa14047b6883e989'
var PageUrl = 'FHH_Detailed_Flow.html'
document.title = 'FHH Detailed Flow';

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

var u86 = document.getElementById('u86');

u86.style.cursor = 'pointer';
if (bIE) u86.attachEvent("onclick", ClickLinkToReferencePageu86);
else u86.addEventListener("click", ClickLinkToReferencePageu86, true);
function ClickLinkToReferencePageu86(e)
{
    self.location.href="Add_Family_Member_Flow_v3.html" + GetQuerystring();
}

x = 0;
y = (u86.offsetHeight) - 4;
InsertAfterBegin(u86ann, "<img src='Resources/newwindow.gif' id='u86PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u86PagePopup = document.getElementById('u86PagePopup');
if (bIE) u86PagePopup.attachEvent("onclick", u86PagePopupHandler);
else u86PagePopup.addEventListener("click", u86PagePopupHandler, true);

function u86PagePopupHandler(event)
{
    window.open("Add_Family_Member_Flow_v3.html" + GetQuerystring());
}

var u54 = document.getElementById('u54');

var u60 = document.getElementById('u60');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u42 = document.getElementById('u42');

var u80 = document.getElementById('u80');

u80.style.cursor = 'pointer';
if (bIE) u80.attachEvent("onclick", ClickLinkToReferencePageu80);
else u80.addEventListener("click", ClickLinkToReferencePageu80, true);
function ClickLinkToReferencePageu80(e)
{
    self.location.href="submodal_Report_Options.html" + GetQuerystring();
}

x = 0;
y = (u80.offsetHeight) - 4;
InsertAfterBegin(u80ann, "<img src='Resources/newwindow.gif' id='u80PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u80PagePopup = document.getElementById('u80PagePopup');
if (bIE) u80PagePopup.attachEvent("onclick", u80PagePopupHandler);
else u80PagePopup.addEventListener("click", u80PagePopupHandler, true);

function u80PagePopupHandler(event)
{
    window.open("submodal_Report_Options.html" + GetQuerystring());
}

var u26 = document.getElementById('u26');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u76 = document.getElementById('u76');

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", ClickLinkToReferencePageu76);
else u76.addEventListener("click", ClickLinkToReferencePageu76, true);
function ClickLinkToReferencePageu76(e)
{
    self.location.href="Save_History_v2.html" + GetQuerystring();
}

x = 0;
y = (u76.offsetHeight) - 4;
InsertAfterBegin(u76ann, "<img src='Resources/newwindow.gif' id='u76PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u76PagePopup = document.getElementById('u76PagePopup');
if (bIE) u76PagePopup.attachEvent("onclick", u76PagePopupHandler);
else u76PagePopup.addEventListener("click", u76PagePopupHandler, true);

function u76PagePopupHandler(event)
{
    window.open("Save_History_v2.html" + GetQuerystring());
}

var u14 = document.getElementById('u14');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u20 = document.getElementById('u20');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u48 = document.getElementById('u48');

var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", ClickLinkToReferencePageu4);
else u4.addEventListener("click", ClickLinkToReferencePageu4, true);
function ClickLinkToReferencePageu4(e)
{
    self.location.href="Home.html" + GetQuerystring();
}

x = 0;
y = (u4.offsetHeight) - 4;
InsertAfterBegin(u4ann, "<img src='Resources/newwindow.gif' id='u4PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u4PagePopup = document.getElementById('u4PagePopup');
if (bIE) u4PagePopup.attachEvent("onclick", u4PagePopupHandler);
else u4PagePopup.addEventListener("click", u4PagePopupHandler, true);

function u4PagePopupHandler(event)
{
    window.open("Home.html" + GetQuerystring());
}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');

u70.style.cursor = 'pointer';
if (bIE) u70.attachEvent("onclick", ClickLinkToReferencePageu70);
else u70.addEventListener("click", ClickLinkToReferencePageu70, true);
function ClickLinkToReferencePageu70(e)
{
    self.location.href="Preview_History.html" + GetQuerystring();
}

x = 0;
y = (u70.offsetHeight) - 4;
InsertAfterBegin(u70ann, "<img src='Resources/newwindow.gif' id='u70PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u70PagePopup = document.getElementById('u70PagePopup');
if (bIE) u70PagePopup.attachEvent("onclick", u70PagePopupHandler);
else u70PagePopup.addEventListener("click", u70PagePopupHandler, true);

function u70PagePopupHandler(event)
{
    window.open("Preview_History.html" + GetQuerystring());
}

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u84 = document.getElementById('u84');

u84.style.cursor = 'pointer';
if (bIE) u84.attachEvent("onclick", ClickLinkToReferencePageu84);
else u84.addEventListener("click", ClickLinkToReferencePageu84, true);
function ClickLinkToReferencePageu84(e)
{
    self.location.href="Add_Family_Member_Flow_v2.html" + GetQuerystring();
}

x = 0;
y = (u84.offsetHeight) - 4;
InsertAfterBegin(u84ann, "<img src='Resources/newwindow.gif' id='u84PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u84PagePopup = document.getElementById('u84PagePopup');
if (bIE) u84PagePopup.attachEvent("onclick", u84PagePopupHandler);
else u84PagePopup.addEventListener("click", u84PagePopupHandler, true);

function u84PagePopupHandler(event)
{
    window.open("Add_Family_Member_Flow_v2.html" + GetQuerystring());
}

var u52 = document.getElementById('u52');

var u36 = document.getElementById('u36');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u36ann'), "<div id='u36Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u36', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u36').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u36based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u36base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u36based = document.getElementById('u36based');
            
InsertBeforeEnd(u36based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> Personal data &amp; personal health history is required for the proband before a family history&nbsp; can be created.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Use Case:</span> Create or Edit Family Health History<BR><BR></div><div class='anncontent'><span class='annfieldname'>User Story:</span> Create/Edit Personal Profile<BR><BR></div>");

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u30 = document.getElementById('u30');

var u58 = document.getElementById('u58');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u74 = document.getElementById('u74');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", ClickLinkToReferencePageu12);
else u12.addEventListener("click", ClickLinkToReferencePageu12, true);
function ClickLinkToReferencePageu12(e)
{
    self.location.href="submodal_Add_Family_Member.html" + GetQuerystring();
}

x = 0;
y = (u12.offsetHeight) - 4;
InsertAfterBegin(u12ann, "<img src='Resources/newwindow.gif' id='u12PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u12PagePopup = document.getElementById('u12PagePopup');
if (bIE) u12PagePopup.attachEvent("onclick", u12PagePopupHandler);
else u12PagePopup.addEventListener("click", u12PagePopupHandler, true);

function u12PagePopupHandler(event)
{
    window.open("submodal_Add_Family_Member.html" + GetQuerystring());
}

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u12ann'), "<div id='u12Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u12', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u12').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u12based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u12base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u12based = document.getElementById('u12based');
            
InsertBeforeEnd(u12based, "<div class='anncontent'><span class='annfieldname'>Use Case:</span> Create or Edit Family Health History<BR><BR></div><div class='anncontent'><span class='annfieldname'>User Story:</span> - Create/Edit Family Member Health History; <br>- Associate Disease With Family Member;<br>- Add an Undefined Disease;<BR><BR></div>");

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", ClickLinkToReferencePageu62);
else u62.addEventListener("click", ClickLinkToReferencePageu62, true);
function ClickLinkToReferencePageu62(e)
{
    self.location.href="content_Update_History.html" + GetQuerystring();
}

x = 0;
y = (u62.offsetHeight) - 4;
InsertAfterBegin(u62ann, "<img src='Resources/newwindow.gif' id='u62PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u62PagePopup = document.getElementById('u62PagePopup');
if (bIE) u62PagePopup.attachEvent("onclick", u62PagePopupHandler);
else u62PagePopup.addEventListener("click", u62PagePopupHandler, true);

function u62PagePopupHandler(event)
{
    window.open("content_Update_History.html" + GetQuerystring());
}

var u46 = document.getElementById('u46');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u82 = document.getElementById('u82');

u82.style.cursor = 'pointer';
if (bIE) u82.attachEvent("onclick", ClickLinkToReferencePageu82);
else u82.addEventListener("click", ClickLinkToReferencePageu82, true);
function ClickLinkToReferencePageu82(e)
{
    self.location.href="Add_Family_Member_Flow_v1.html" + GetQuerystring();
}

x = 0;
y = (u82.offsetHeight) - 4;
InsertAfterBegin(u82ann, "<img src='Resources/newwindow.gif' id='u82PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u82PagePopup = document.getElementById('u82PagePopup');
if (bIE) u82PagePopup.attachEvent("onclick", u82PagePopupHandler);
else u82PagePopup.addEventListener("click", u82PagePopupHandler, true);

function u82PagePopupHandler(event)
{
    window.open("Add_Family_Member_Flow_v1.html" + GetQuerystring());
}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');

var u40 = document.getElementById('u40');

var u68 = document.getElementById('u68');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", ClickLinkToReferencePageu22);
else u22.addEventListener("click", ClickLinkToReferencePageu22, true);
function ClickLinkToReferencePageu22(e)
{
    self.location.href="Open_Saved_History.html" + GetQuerystring();
}

x = 0;
y = (u22.offsetHeight) - 4;
InsertAfterBegin(u22ann, "<img src='Resources/newwindow.gif' id='u22PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u22PagePopup = document.getElementById('u22PagePopup');
if (bIE) u22PagePopup.attachEvent("onclick", u22PagePopupHandler);
else u22PagePopup.addEventListener("click", u22PagePopupHandler, true);

function u22PagePopupHandler(event)
{
    window.open("Open_Saved_History.html" + GetQuerystring());
}

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u22ann'), "<div id='u22Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u22', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u22').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u22based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u22base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u22based = document.getElementById('u22based');
            
InsertBeforeEnd(u22based, "<div class='anncontent'><span class='annfieldname'>Use Case:</span> Create or Edit Family Health History<BR><BR></div><div class='anncontent'><span class='annfieldname'>User Story:</span> Upload Family Health History<BR><BR></div>");

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", ClickLinkToReferencePageu8);
else u8.addEventListener("click", ClickLinkToReferencePageu8, true);
function ClickLinkToReferencePageu8(e)
{
    self.location.href="submodal_Edit_My_Info.html" + GetQuerystring();
}

x = 0;
y = (u8.offsetHeight) - 4;
InsertAfterBegin(u8ann, "<img src='Resources/newwindow.gif' id='u8PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u8PagePopup = document.getElementById('u8PagePopup');
if (bIE) u8PagePopup.attachEvent("onclick", u8PagePopupHandler);
else u8PagePopup.addEventListener("click", u8PagePopupHandler, true);

function u8PagePopupHandler(event)
{
    window.open("submodal_Edit_My_Info.html" + GetQuerystring());
}

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u8ann'), "<div id='u8Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u8', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u8').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u8based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u8base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u8based = document.getElementById('u8based');
            
InsertBeforeEnd(u8based, "<div class='anncontent'><span class='annfieldname'>Use Case:</span> Create or Edit Family Health History<BR><BR></div><div class='anncontent'><span class='annfieldname'>User Story:</span> - Create/Edit Personal Profile;<br>- Associate Disease With Family Member;<br>- Add an Undefined Disease;<BR><BR></div>");

var u72 = document.getElementById('u72');

var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", ClickLinkToReferencePageu56);
else u56.addEventListener("click", ClickLinkToReferencePageu56, true);
function ClickLinkToReferencePageu56(e)
{
    self.location.href="content_Create_New_History.html" + GetQuerystring();
}

x = 0;
y = (u56.offsetHeight) - 4;
InsertAfterBegin(u56ann, "<img src='Resources/newwindow.gif' id='u56PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u56PagePopup = document.getElementById('u56PagePopup');
if (bIE) u56PagePopup.attachEvent("onclick", u56PagePopupHandler);
else u56PagePopup.addEventListener("click", u56PagePopupHandler, true);

function u56PagePopupHandler(event)
{
    window.open("content_Create_New_History.html" + GetQuerystring());
}

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u28 = document.getElementById('u28');

var u2 = document.getElementById('u2');

var u44 = document.getElementById('u44');

var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u78 = document.getElementById('u78');

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", ClickLinkToReferencePageu78);
else u78.addEventListener("click", ClickLinkToReferencePageu78, true);
function ClickLinkToReferencePageu78(e)
{
    self.location.href="View_History_Report_v3.html" + GetQuerystring();
}

x = 0;
y = (u78.offsetHeight) - 4;
InsertAfterBegin(u78ann, "<img src='Resources/newwindow.gif' id='u78PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u78PagePopup = document.getElementById('u78PagePopup');
if (bIE) u78PagePopup.attachEvent("onclick", u78PagePopupHandler);
else u78PagePopup.addEventListener("click", u78PagePopupHandler, true);

function u78PagePopupHandler(event)
{
    window.open("View_History_Report_v3.html" + GetQuerystring());
}

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u78ann'), "<div id='u78Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u78', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u78').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u78based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u78base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u78based = document.getElementById('u78based');
            
InsertBeforeEnd(u78based, "<div class='anncontent'><span class='annfieldname'>Use Case:</span> View Pedigree Chart<BR><BR></div>");

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u32 = document.getElementById('u32');

var u16 = document.getElementById('u16');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u66 = document.getElementById('u66');

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", ClickLinkToReferencePageu6);
else u6.addEventListener("click", ClickLinkToReferencePageu6, true);
function ClickLinkToReferencePageu6(e)
{
    self.location.href="My_Family_History.html" + GetQuerystring();
}

x = 0;
y = (u6.offsetHeight) - 4;
InsertAfterBegin(u6ann, "<img src='Resources/newwindow.gif' id='u6PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u6PagePopup = document.getElementById('u6PagePopup');
if (bIE) u6PagePopup.attachEvent("onclick", u6PagePopupHandler);
else u6PagePopup.addEventListener("click", u6PagePopupHandler, true);

function u6PagePopupHandler(event)
{
    window.open("My_Family_History.html" + GetQuerystring());
}

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u6ann'), "<div id='u6Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u6', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u6').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u6based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u6base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u6based = document.getElementById('u6based');
            
InsertBeforeEnd(u6based, "<div class='anncontent'><span class='annfieldname'>Use Case:</span> Create or Edit Family Health History<BR><BR></div>");

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", ClickLinkToReferencePageu10);
else u10.addEventListener("click", ClickLinkToReferencePageu10, true);
function ClickLinkToReferencePageu10(e)
{
    self.location.href="submodal_Edit_Family_Member.html" + GetQuerystring();
}

x = 0;
y = (u10.offsetHeight) - 4;
InsertAfterBegin(u10ann, "<img src='Resources/newwindow.gif' id='u10PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u10PagePopup = document.getElementById('u10PagePopup');
if (bIE) u10PagePopup.attachEvent("onclick", u10PagePopupHandler);
else u10PagePopup.addEventListener("click", u10PagePopupHandler, true);

function u10PagePopupHandler(event)
{
    window.open("submodal_Edit_Family_Member.html" + GetQuerystring());
}

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u10ann'), "<div id='u10Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u10', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u10').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u10based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u10base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u10based = document.getElementById('u10based');
            
InsertBeforeEnd(u10based, "<div class='anncontent'><span class='annfieldname'>Use Case:</span> Create or Edit Family Health History<BR><BR></div><div class='anncontent'><span class='annfieldname'>User Story:</span> - Create/Edit Family Member Health History;<br>- Associate Disease With Family Member;<br>- Add an Undefined Disease;<BR><BR></div>");

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", ClickLinkToReferencePageu38);
else u38.addEventListener("click", ClickLinkToReferencePageu38, true);
function ClickLinkToReferencePageu38(e)
{
    self.location.href="submodal_Edit_My_Info.html" + GetQuerystring();
}

x = 0;
y = (u38.offsetHeight) - 4;
InsertAfterBegin(u38ann, "<img src='Resources/newwindow.gif' id='u38PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u38PagePopup = document.getElementById('u38PagePopup');
if (bIE) u38PagePopup.attachEvent("onclick", u38PagePopupHandler);
else u38PagePopup.addEventListener("click", u38PagePopupHandler, true);

function u38PagePopupHandler(event)
{
    window.open("submodal_Edit_My_Info.html" + GetQuerystring());
}

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u38ann'), "<div id='u38Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u38', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u38').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u38based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u38base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u38based = document.getElementById('u38based');
            
InsertBeforeEnd(u38based, "<div class='anncontent'><span class='annfieldname'>Use Case:</span> Create or Edit Family Health History<BR><BR></div><div class='anncontent'><span class='annfieldname'>User Story:</span> - Create/Edit Personal Profile;<br>- Associate Disease With Family Member;<br>- Add an Undefined Disease;<BR><BR></div>");

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
