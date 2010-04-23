<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

	<head>
	<title>Family Health History - Family Health History</title>
	  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	  
	  <link href="../styles/fhh_new.css" rel="stylesheet" type="text/css" media="all" />
	  
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
	          <td class="bannerTdTitle"><img src="../images/banner_subpage.jpg" alt="My Family Health Portrait - A tool from the Surgeon General" class="fhhBannerTitle" /></td>
	
	          <td class="bannerTdPhotos"><img src="../images/photos_subpage.jpg" alt="Collection of family photos from diverse families." class="fhhBannerPhotos" /></td>
	        </tr>
	      </table>
	
	      <table border="0" cellpadding="0" cellspacing="0" class="mainNavTable">
	        <tr>
	          <td class="mainNavTd"><a href="#">My Family Health History</a><a href="diagram.php">Diagram &amp; Chart</a><a href="#">Share with Family Member</a><a href="./">Start Over</a></td>
	
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
	
	          <div class="boxpad" id="hv_manager">
	          
<form id="personForm" name="familyHistory" onsubmit="return true;" action="https://demo.5amsolutions.com/fhh-web/familyHistory/familyHistory.action" method="post" class="form">
	           
	<table class="form">
		<tr>
			<td>
			    
				<h1>Save Your Family Health History</h1>
				
				<h2 class="hv_manager">HealthVault Manager</h2>
				
				<div class="box">
				
					<div class="thumb">
						<img src="../images/to_healthvault.gif" alt="Microsoft HealthVault" />			
					</div>
					
					<div class="thumb_content">
						
						<h3 class="alert">Connection Timed Out</h3>
						
						<p class="alert">Your connection to Microsoft HealthVault has timed out. Would you like to try to connect again?</p>
						
						
						<br /><br />
						
						<hr /> 
						
						<div class="buttonContainer">
							<a href="connection_error.php">Yes, Try Again</a>
							<a href="../history.php">Cancel</a>
						</div>
					
					</div>
					
					<div class="clear"></div>
					
				</div>
	
			</td>
		</tr>
	</table>
</form>
	          
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
