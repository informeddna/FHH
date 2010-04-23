<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title>Save Family Health History</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	  
	  		<link href="../styles/fhh_new2.css" rel="stylesheet" type="text/css" media="all" />
	  
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

    </head>
<body onload="window.top.centerPopWin();" class="submodal">
  <div>
    <div id="main">
      <div id="contentwrapper">


        <div id="content">


          <form id="personForm" onsubmit="return true;" action="https://demo.5amsolutions.com/fhh-web/popup/addPerson/submitPerson.action" method="post" class="form" name="personForm">
            <div class="submodalContainer">

    <div class="accordianContainer" id="saveFamilyHistory">
        <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened">
            <colgroup span="1" />

            <colgroup span="1" width="0" />
            <tr>
                <td class="accordianTitleTd">
                    <h2>Save Family Health History Information </h2> 
                </td>
                
                <td class="accordianTitleTdBtn">
                     <a href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/helpDetailsSaveFamilyHistory.action">Get Help</a>
                </td>

            </tr>
        </table>
        
        <div class="accordianContent">
        

        <div id="process_steps">
        		<div class="process_step_selected">1. Save Your Information</div>
        		<div class="process_arrow_right"><img src="../images/process_arrow_right.gif" alt="Right Arrow" /></div>
				<div class="process_step">2. Manage Your Information</div>
        </div>
                
        				
				<div class="box_noshade">
					
					<div class="box_float_inner">
					
						<div class="thumb"><img src="../images/Tile_HealthVaultBlue_h_rgb_147width.png" alt="Open from Microsoft HealthVault" /></div>
						
				  <div class="thumb_content">
						
							<h3>Please note: Joining a Third-party Website</h3>
							
							<p>You are about to be taken to a third-party website, <strong>Microsoft HealthVault</strong>. My Family Health Portrait is not affiliated with Microsoft and makes no claims regarding the HealthVault service. If you do not already have a HealthVault account, you will be given the opportunity to create one in the next step.</p>
							
						</div>
						
					</div>
					
					<div class="box_hilite">
							
						<h3>Connecting to HealthVault</h3> 
						
						<p>When you choose to copy your family health history information to Microsoft HealthVault, My Family Health Portrait will transfer you briefly to HealthVault so that you can sign in to your HealthVault account (or create one if you don't already have one).   This may involve several steps:</p>
<ul>
    <li>You may be asked to enter an email address with which to sign in to HealthVault.</li>
    <li>If you already have a Windows Live ID, you will be asked to sign in with it - if not, you will be guided through the process of creating one.</li>
    <li>Alternatively, you may sign in with an Open ID if you have one instead.</li>
    <li>If you do not already have a HealthVault account, you will be guided through the process of creating one as well. </li>
    <li>You may be asked to grant My Family Health Portrait access to your HealthVault account - you must grant access if you wish to copy your family health history information to HealthVault.</li>
    <li>Finally, you will be returned to My Family Health Portrait to proceed with copying your information to HealthVault.</li>
</ul>
					
					</div>
						
					<div class="clear"></div>
					
					<br />
						
					<hr /> 
					
					<div class="buttonContainer">
	         	
		         	<div class="btn_right">
							<div class="btn_float"><a href="hv.php">Continue</a></div>
		         	
			         	<div class="btn_float"><a href="save_hv_canceled.php">Cancel</a></div>


						</div>
					
					</div>
					
					<div class="clear"></div>
				
				</div>


	        <div class="clear"></div>
                    
        </div>
    </div>
</div>
</form>






                    </div>
                    <div class="clear" />
                </div>
            </div>
        </div>
    </body>
</html>
