<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

	<head>
	<title>Family Health History - Family Health History</title>
	  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	  
	  <link href="styles/fhh_new.css" rel="stylesheet" type="text/css" media="all" />
	  
	  <link rel="stylesheet" type="text/css" href="https://demo.5amsolutions.com/fhh-web/styles/submodal.css" />
	  <script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/prototype.js"></script>
	  <script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/scriptaculous.js"></script>
	  <script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/effects.js"></script>
	  <script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/builder.js"></script>
	  <script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/controls.js"></script>
	  <script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/dragdrop.js"></script>
	  <script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/scriptaculous/slider.js"></script>
	  <script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/MM_swapImage.js"></script>
	  <link rel="address bar icon" href="http://www.nsdev.us/5am/fhh/images/favicon.ico" />
	  <link rel="icon" href="http://www.nsdev.us/5am/fhh/images/favicon.ico" type="image/x-icon" />
	  <link rel="shortcut icon" href="http://www.nsdev.us/5am/fhh/images/favicon.ico" type="image/x-icon" />
	  	</head>
	
	<body onload="setFocusToFirstControl();">
	
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
	           <td class="mainNavTd"><a href="history.php">My Family Health History</a><a href="diagram.php" class="selected">Diagram &amp; Chart</a><a href="#">Share with Family Member</a><a href="./">Start Over</a></td>
	
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
	          
    
<h1>View Diagram &amp; Chart</h1>

<p>You can print your family health portrait in a diagram and chart form to share with your healthcare worker. Talking with your health care worker about your family health history can help you stay healthy!</p>
<p>If you would like to change the way the information below is shown, click "Diagram &amp; Chart Options." The bottom and right scroll bars are useful navigation tools when viewing larger charts and diagrams.</p>

<div class="buttonContainer">
	<a href="https://demo.5amsolutions.com/fhh-web/familyHistory/familyHistory.action">My Family History</a>
   <a href="javascript://nop/" onclick="showPopUpWindow('/fhh-web/popup/viewReport/changeReport.action', loadViewReportDetail, true);">Diagram &amp; Chart Options</a>
   <a href="javascript://nop/" onclick="showPopUpWindow('/fhh-web/popup/saveFamilyHistory/saveFamilyHistory.action', loadViewReportDetail, true);">Save Family History</a>
   <a href="javascript:window.print();">Print History</a>
</div>

<hr />

<!-- show diagram only if selected -->

<h2>Diagram</h2>

<h5>Date of Report: Friday, September 11, 2009 9:05 AM</h5>

<div class="scrollingBox">
	<img src="images/diagram.png" alt="An image with a tree diagram of the family tree." title="An image with a tree diagram of the family tree. You can edit chart and diagram options by selecting the button above."/>
</div>

<table class="datatableWrapper">
	<tr>
		<td class="datatableWrapperInner">
			<table border="0" cellpadding="0" cellspacing="0" class="dataListing" summary="This table indicates the icons, shapes, colors, and words used on the family pedigree chart.">
				<tr>
					<th colspan="4">Diagram Legend</th>
				</tr>
				
				<tr>
					<td><img src="https://demo.5amsolutions.com/fhh-web/images/icon_male.gif" alt="A square indicates a male family member" /> Male family member</td>
					<td><img src="https://demo.5amsolutions.com/fhh-web/images/icon_female.gif" alt="A circle indicates a female family member" /> Female family member</td>
					<td><img src="https://demo.5amsolutions.com/fhh-web/images/icon_maleFemaleHighlight.gif" alt="A square or circle with color indicates a family member who has the disease that is the focus of this report" /> Family members with a history of disease</td>
					<td><img src="https://demo.5amsolutions.com/fhh-web/images/icon_maleFemaleDec.gif" alt="A square or circle with a strike-through indicates a deceased family member" /> Deceased family members</td>
				</tr>
				
				<tr>
					<td>BrC = Breast Cancer</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
					<td>&nbsp;</td>
				</tr>
	
			</table>
		</td>
	</tr>
</table>
<br />
<br />

<div class="buttonContainer">
    
    <a href="https://demo.5amsolutions.com/fhh-web/familyHistory/familyHistory.action">My Family History</a>
    <a href="javascript://nop/" onclick="showPopUpWindow('/fhh-web/popup/viewReport/changeReport.action', loadViewReportDetail, true);">Diagram & Chart Options</a>
    <a href="javascript://nop/" onclick="showPopUpWindow('/fhh-web/popup/saveFamilyHistory/saveFamilyHistory.action', loadViewReportDetail, true);">Save Family History</a>
    <a href="javascript:window.print();">Print History</a>
</div>



<!-- show chart only if selected -->

<hr />

<h2>Chart</h2>

<h5>Date of Report: Friday, September 11, 2009 9:05 AM</h5>


<!-- show personal info only if selected -->
<table border="0" cellpadding="0" cellspacing="0">
    <tr>
        <th scope="col">My Personal Information</th>
    </tr>
    <tr>
        <td>
            <b>Age:</b> 35<br />
            <b>Height:</b> 66 in<br />
            <b>Weight:</b> 162 lbs<br />
            <b>BMI:</b> 26.1<br />
        </td>
    </tr>
</table>

<table class="datatableWrapper">
    <tr>
      <td class="datatableWrapperInner">
        <table border="0" cellpadding="0" cellspacing="0" class="dataListing" summary="This table lists all members of the family, grouped based on how they are related to you and which side of the family they are on. It indicates what diseases each family member has.">
          <thead>
          
            <tr>
              <th scope="col">&nbsp;</th>
              <th scope="col">Still living?</th>
              <th scope="col">Heart Disease</th>
              <th scope="col">Stroke</th>
              <th scope="col">Diabetes</th>
              <th scope="col">Colon Cancer</th>
              <th scope="col">Breast Cancer</th>
              <th scope="col">Ovarian Cancer</th>
              <th scope="col">Additional Diseases</th>
            </tr>
            
          </thead>

          <tbody>
          
            <tr>
              <td class="sectionHead" colspan="9" scope="colgroup">My Family</td>
            </tr>

            <tr class="relative">
              <td>Matt (Self)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Father)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Mother)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>Marc ((full) Brother)</td>
              <td>Yes&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Paternal Grandfather)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Paternal Grandmother)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Paternal Uncle)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Paternal Uncle)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Paternal Uncle)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Maternal Grandfather)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Maternal Grandmother)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Maternal Aunt)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Maternal Aunt)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Maternal Aunt)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>(Maternal Uncle)</td>
              <td></td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>

            <tr class="relative">
              <td>Margaret (Maternal Aunt)</td>
              <td>Yes&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>Breast Cancer (age: 50-59 years )<br />
              &nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>

<br />
<div class="buttonContainer">
    
    <a href="javascript://nop/" onclick="showPopUpWindow('/fhh-web/popup/viewReport/changeReport.action', loadViewReportDetail, true);">Diagram & Chart Options</a>
    <a href="javascript://nop/" onclick="showPopUpWindow('/fhh-web/popup/saveFamilyHistory/saveFamilyHistory.action', loadViewReportDetail, true);">Save Family History</a>
    <a href="javascript:window.print();">Print History</a>

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
        <script type="text/javascript">
           logout = function() {
                window.location = "https://demo.5amsolutions.com/fhh-web/logout.action";
            }
            startLogoutTimer();
        </script>

    </body>
</html>
