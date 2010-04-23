<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title>Family Health History</title>
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

			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/fhh.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/submodal/common.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/submodal/subModal.js"></script>
			<script type="text/javascript" charset="ISO-8859-1" language="javascript" src="https://demo.5amsolutions.com/fhh-web/scripts/MM_swapImage.js"></script>
			
    	  <link rel="address bar icon" href="http://www.nsdev.us/5am/fhh/images/favicon.ico" />
		  <link rel="icon" href="http://www.nsdev.us/5am/fhh/images/favicon.ico" type="image/x-icon" />
		  <link rel="shortcut icon" href="http://www.nsdev.us/5am/fhh/images/favicon.ico" type="image/x-icon" />

        <script type="text/javascript">
            window.top.startLogoutTimer();
        </script>
    </head>
<body onload="window.top.centerPopWin();" class="submodal">
  <div>
    <div id="main">
      <div id="contentwrapper">
        <div id="logoutWarningDiv" style="display:none" class="outlineBox errorMessage">
          For security reasons, your session will automatically be terminated in <span id="warningCountdownDisplay"></span> seconds. To continue your session, PLEASE SAVE YOUR WORK NOW..
        </div>

        <div id="content">
          <script type="text/javascript" language="javascript" charset="ISO-8859-1">
//<![CDATA[
          // for multi-language support - this term is added dynamically by js when page is created
          var removeTxt = 'Remove';
          //]]>
          </script> <script type="text/javascript" language="javascript" charset="ISO-8859-1" src="https://demo.5amsolutions.com/fhh-web/scripts/addPerson.js">
</script> <script type="text/javascript" language="javascript" charset="ISO-8859-1" src="https://demo.5amsolutions.com/fhh-web/scripts/ItemSelectorUtils.js">
</script>

          <form id="personForm" onsubmit="return true;" action="https://demo.5amsolutions.com/fhh-web/popup/addPerson/submitPerson.action" method="post" class="form" name="personForm">
            <div class="submodalContainer">

    <div class="accordianContainer" id="saveFamilyHistory">
        <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="">
            <colgroup span="1" />

            <colgroup span="1" width="0*" />
            <tr>
                <td class="accordianTitleTd">
                    <h2>Save Your Family Health History</h2> 
                </td>
                
                <td class="accordianTitleTdBtn">
                     <a href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/helpDetailsSaveFamilyHistory.action">Get Help</a>
                </td>

            </tr>
        </table>
        
        <div class="accordianContent" id="">
        
        <p>Your Family Health History information will be saved with <strong><em>[proband name]</em></strong> as the center person. To make a blood relative the center person, first <a href="#">Center My Family History</a>.</p>
        
        <p><a href="javascript:;" onclick="Effect.toggle('saveinfo', 'blind');" class="toggledisplay">Why save your Family Health History?</a></p>
        
        <div id="saveinfo" style="display:none;">
        		<p>Due to privacy concerns, this website does not save your family history information. However, you can save your family history to your own local storage area (such as your computer's hard drive or other media).   In addition, you can save to a third-party system such as Microsoft HealthVault&reg;. Some doctors' offices and electronic health record systems can also use this stored history information (if you grant them permission). </p>
        </div>
        
        <hr />

        <div id="process_steps">
        		<div class="process_step">1. Download Data File</div>
        		<div class="process_arrow_right"><img src="../images/process_arrow_right.gif" alt="Right Arrow" /></div>
				<div class="process_step_selected">2. Manage Your Data</div>
        </div>
        
        <div class="clear"></div>
        
        <h3>2. Manage Your Data</h3>
        
        <div class="box">
        		
        		<div class="thumb">
        			<img src="../images/to_healthvault.gif" alt="Save to Microsoft HealthVault" />
        		</div>
        		
        		<div class="thumb_content">
        		
		        	<h4>Save to Microsoft HealthVault&reg;</h4>  	
					<p>Microsoft HealthVault&reg; allows you to store health information from many sources in one location, so it's always organized and available to you online. Your Family Health History data can be transferred from HealthVault to this website later to update your Family Health History.</p>

	        	</div>
	        		
	        <div class="clear"></div>
	        
            <hr />
	        
	         <div class="buttonContainer">
	         	<div class="centered">
	        			<div class="btn_float">
	        				<a href="../hv/">Save Now</a>
	        				<p><em>(You will be prompted to sign in or create an account)</em></p>
	        			</div>
						<div class="btn_float">
	        				<a href="#">Cancel/Close</a>
	        			</div>
	        		</div>
	        	</div>

	        <div class="clear"></div>
        	
        </div>
        
                    
            
        </div>
    </div>
</div>
</form>






                    </div>
                    <div class="clear" />
                </div>
            </div>
            <script type="text/javascript">
                startLogoutTimer();
            </script>
        </div>
    </body>
</html>
