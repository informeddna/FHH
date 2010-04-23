<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

	<head>
	<title>Family Health History - Family Health History</title>
	
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		
		<link href="styles/fhh_new2.css" rel="stylesheet" type="text/css" media="all" />
		
		<link rel="stylesheet" type="text/css" href="https://demo.5amsolutions.com/fhh-web/styles/submodal.css" />
		<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/prototype.js"></script>
		<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/scriptaculous.js"></script>
		<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/effects.js"></script>
		<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/builder.js"></script>
		<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/controls.js"></script>
		<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/dragdrop.js"></script>
		<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/slider.js"></script>
		<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/fhh.js"></script>
		<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/MM_swapImage.js"></script>
		
		<link rel="address bar icon" href="http://www.nsdev.us/5am/fhh/images/favicon.ico" />
		<link rel="icon" href="http://www.nsdev.us/5am/fhh/images/favicon.ico" type="image/x-icon" />
		<link rel="shortcut icon" href="http://www.nsdev.us/5am/fhh/images/favicon.ico" type="image/x-icon" />
		
		<!--SubModal (for mockup only)-->
		<script type="text/javascript" src="submodal.js"></script>
		<!--/SubModal (for mockup only)-->
		
		
	</head>
	
	<body onload="setFocusToFirstControl();">
	
	<SCRIPT LANGUAGE="javascript">
<!--
if (top.location != location) top.location.href = location.href;
//---> 
</SCRIPT>
	
	  <div id="wrapper" class="mainContainer">
		    
	    <!-- BEGIN INCLUDE - header -->
	
	    <div class="headerContainer">
	      <table border="0" cellpadding="0" cellspacing="0" class="bannerTable">
	        <tr>
	          <td class="bannerTdTitle"><img src="images/banner_subpage.jpg" alt="My Family Health Portrait - A tool from the Surgeon General" class="fhhBannerTitle" /></td>
	
	          <td class="bannerTdPhotos"><img src="images/photos_subpage.jpg" alt="Collection of family photos from diverse families." class="fhhBannerPhotos" /></td>
	        </tr>
	      </table>
	
	      <table border="0" cellpadding="0" cellspacing="0" class="mainNavTable">
	        <tr>
	          <td class="mainNavTd"><a href="./">Home</a><a href="javascript:;" class="selected">My Family History</a><a href="javascript:;">Copy for Family Member</a><a href="diagram.php">Diagram &amp; Table</a></td>
	          <td class="utilNavTd"><a href="javascript://nop/" id="navHelpUrl" onclick="popupWindow('https://demo.5amsolutions.com/fhh-web/popup/getHelp/help.action?create=true')" name="navHelpUrl">Get Help</a></td>
	        </tr>
	      </table>
	    </div>
	    
	    <!-- END INCLUDE - header -->
	
	    <div id="main" class="contentContainer">
	      <div id="contentwrapper">
	        <div id="logoutWarningDiv" style="display:none" class="outlineBox errorMessage">
	          For security reasons, your session will automatically be terminated in <span id="warningCountdownDisplay"></span> seconds. To continue your session, <a id="mainWarningRedirect" href="https://demo.5amsolutions.com/fhh-web/familyHistory/start.action?maintainState=true" name="mainWarningRedirect">click here</a>.
	        </div>
	
	        <div id="content">
	          <script type="text/javascript" charset="ISO-8859-1">
					//<![CDATA[
	
	          	document.getElementById('navHelpUrl').onclick = function(){popupWindow('https://demo.5amsolutions.com/fhh-web/popup/getHelp/helpDetailsUpdateFamilyHistory.action?create=true');};
	          	//]]>
	          </script>
	
	          <div class="boxpad" id="familyHistoryDetail">
	          
	           <form id="personForm" name="familyHistory" onsubmit="return true;" action="https://demo.5amsolutions.com/fhh-web/familyHistory/familyHistory.action" method="post" class="form">
	           
	           <table class="form"><tr><td>






    
    
        <h1>My Family Health History</h1>
        <h2>Update My Family History</h2>

        
        
            <div id="fileSavedDiv" style="display: none" class="saveMessageContainer">
                The Family Health History file you have saved is up to date.
            </div>
        
        <p>On this screen you can:</p>
        <ul>
            <li>Change your information or a family member's information by clicking on the pencil image ("Update History") next to the name in the list.</li>
            <li>Add information for a family member by clicking on the plus sign image ("Add History") next to their name in the list.</li>
            <li>Add another family member to your history by clicking "Add Another Family Member."</li>

            <li>Remove a family member from your history by clicking the Trash Can image ("Remove Relative") next to their name in the list. (You cannot remove yourself, your parents, or grandparents.)</li>
        </ul>
        <p>If you are finished filling out your family health history, click "Save Family History."  Then you can view a drawing or chart of your family tree by clicking "Diagram &amp; Table" at the top of this page. You can also copy this for a family member by clicking "Share with Family Member" at the top of this page.</p>
        <hr />
        

        <div class="buttonContainer">
            <!-- if we do have a person, show this button -->
            <a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/selectRelative/selectRelative.action');">Add Another Family Member</a>

            <a class="submodal-850-690" href="save/">Save Family History</a>
            <a href="diagram.php">View Diagram &amp; Table</a>
        </div>
        
<table class="datatableWrapper">
	<tr>
		<td class="datatableWrapperInner">
			<table border="0" cellpadding="0" cellspacing="0" class="dataListing" summary="This table lists the members of your family and groups them based on how they are related to you and which side of the family they are on. You may add, update or remove family members from the links within the table.">
    <colgroup span="2"></colgroup>

    <colgroup span="3" width="0*" class="action"></colgroup>

    <thead>
      <tr>
        <th scope="col" class="nowrap">Name</th>

        <th scope="col" abbr="Relationship" class="nowrap">Relationship to Me</th>

        <th scope="col" abbr="Add" class="nowrap actionth">Add History</th>

        <th scope="col" abbr="Update" class="nowrap actionth">Update</th>

        <th scope="col" abbr="Remove" class="nowrap actionth">Remove</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td class="sectionHead" colspan="5" scope="colgroup">My Family</td>
      </tr><!-- father -->

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Father</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=1');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td>&nbsp;</td>
      </tr><!-- mother -->

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Mother</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=0');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td>&nbsp;</td>
      </tr><!-- self -->

      <tr class="proband">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Matt</td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td>Self</td>
            </tr>
          </table>
        </td>

        <td class="action">&nbsp;</td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addPerson/addPerson.action');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_edit.gif" alt="Update History" title="Update History" /></a></td>

        <td class="action">&nbsp;</td>
      </tr><!-- children -->
      <!-- siblings -->

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Marc</td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>(full) Brother</td>
            </tr>
          </table>
        </td>

        <td class="action">&nbsp;</td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=6');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_edit.gif" alt="Update History" title="Update History" /></a></td>

        <td class="action"><a href="https://demo.5amsolutions.com/fhh-web/familyHistory/removeRelative.action?removeRelativeId=6"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_trash.gif" alt="Remove Relative" title="Remove Relative" /></a></td>
      </tr><!-- father's branch -->

      <tr>
        <td class="sectionHead" colspan="5" scope="colgroup">My Father's Side of the Family</td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Paternal Grandfather</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=5');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td>&nbsp;</td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Paternal Grandmother</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=4');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td>&nbsp;</td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Paternal Uncle</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=7');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td class="action"><a href="https://demo.5amsolutions.com/fhh-web/familyHistory/removeRelative.action?removeRelativeId=7"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_trash.gif" alt="Remove Relative" title="Remove Relative" /></a></td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Paternal Uncle</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=8');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td class="action"><a href="https://demo.5amsolutions.com/fhh-web/familyHistory/removeRelative.action?removeRelativeId=8"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_trash.gif" alt="Remove Relative" title="Remove Relative" /></a></td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Paternal Uncle</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=9');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td class="action"><a href="https://demo.5amsolutions.com/fhh-web/familyHistory/removeRelative.action?removeRelativeId=9"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_trash.gif" alt="Remove Relative" title="Remove Relative" /></a></td>
      </tr>

      <tr>
        <td class="sectionHead" colspan="5" scope="colgroup">My Mother's Side of the Family</td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Maternal Grandfather</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=3');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td>&nbsp;</td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Maternal Grandmother</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=2');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td>&nbsp;</td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Maternal Aunt</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=10');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td class="action"><a href="https://demo.5amsolutions.com/fhh-web/familyHistory/removeRelative.action?removeRelativeId=10"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_trash.gif" alt="Remove Relative" title="Remove Relative" /></a></td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Maternal Aunt</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=11');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td class="action"><a href="https://demo.5amsolutions.com/fhh-web/familyHistory/removeRelative.action?removeRelativeId=11"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_trash.gif" alt="Remove Relative" title="Remove Relative" /></a></td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Maternal Aunt</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=12');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td class="action"><a href="https://demo.5amsolutions.com/fhh-web/familyHistory/removeRelative.action?removeRelativeId=12"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_trash.gif" alt="Remove Relative" title="Remove Relative" /></a></td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td></td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Maternal Uncle</td>
            </tr>
          </table>
        </td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=13');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_add.gif" alt="Add History" title="Add History" /></a></td>

        <td class="action">&nbsp;</td>

        <td class="action"><a href="https://demo.5amsolutions.com/fhh-web/familyHistory/removeRelative.action?removeRelativeId=13"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_trash.gif" alt="Remove Relative" title="Remove Relative" /></a></td>
      </tr>

      <tr class="relative">
        <td scope="row">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Margaret</td>
            </tr>
          </table>
        </td>

        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td class="tdLabel"></td>

              <td>Maternal Aunt</td>
            </tr>
          </table>
        </td>

        <td class="action">&nbsp;</td>

        <td class="action"><a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/addRelative/addPerson.action?relativeId=14');"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_edit.gif" alt="Update History" title="Update History" /></a></td>

        <td class="action"><a href="https://demo.5amsolutions.com/fhh-web/familyHistory/removeRelative.action?removeRelativeId=14"><img src="https://demo.5amsolutions.com/fhh-web/images/icon_trash.gif" alt="Remove Relative" title="Remove Relative" /></a></td>
      </tr>
    </tbody>
  </table>		</td>
	</tr>
	
 </table>
 
</td></tr></table></form>






<div class="buttonContainer">

    
        <a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/selectRelative/selectRelative.action');">Add Another Family Member</a>

        <a href="javascript://nop/" onclick="handlePopup('/fhh-web/popup/saveFamilyHistory/saveFamilyHistory.action');">Save Family History</a>
        <a href="diagram.php">View Diagram &amp; Table</a>
    

</div>

	          
	         </div>

                    </div>
                </div>
            </div>
            









<!-- BEGIN INCLUDE - footer -->
<table border="0" cellpadding="0" cellspacing="0" class="footerTable">
	<tr>
		<td class="footerTdLinks">
            
    		<a href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/helpDetailsGlossary.action')">Glossary</a> | 
            
            <a href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/helpDetailsLearnMore.action')">FAQ</a> | 
            <a href="http://www.hhs.gov/Accessibility.html" target="_blank">Accessibility</a> | 
            <a href="http://www.hhs.gov/Privacy.html" target="_blank">Privacy &#38; Security Policy</a> | 
            
            <a href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/footerDetailsAboutThisSite.action')">About This Site</a> | 
            
            <a href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/footerDetailsContactUs.action')">Contact Us</a> | 
            
            <a href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/footerDetailsSiteUpdates.action')">Site Updates</a>

		</td>
		<td class="footerTdLogos">
			<img src="https://demo.5amsolutions.com/fhh-web/images/logo_hhs.gif" alt="HHS Logo" />&nbsp;&nbsp;<img src="https://demo.5amsolutions.com/fhh-web/images/logo_phs.gif" alt="PHS Logo" />
		</td>
	</tr>
</table>
<!-- END INCLUDE - footer -->

        </div>
       
    </body>
</html>
