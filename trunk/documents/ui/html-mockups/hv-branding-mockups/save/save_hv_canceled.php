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
                    <h2>Save Family Health History Information</h2> 
                </td>
                
                <td class="accordianTitleTdBtn">
                     <a href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/helpDetailsSaveFamilyHistory.action">Get Help</a>
                </td>

            </tr>
        </table>
        
        <div class="accordianContent">
        
				<div class="loginstatus">
						
					<p><strong>Status: You cancelled copying to HealthVault. <strong>Your family health history information has not been saved.</strong> You may save
your information to your computer or try connecting to HealthVault again by selecting from the choices below.</p>
					
				</div>

	        <div id="process_steps">
	        		<div class="process_step_selected">1. Save Your Information</div>
	        		<div class="process_arrow_right"><img src="../images/process_arrow_right.gif" alt="Right Arrow" /></div>
					<div class="process_step">2. Manage Your Information</div>
	        </div>
	
	        <p class="small"><a href="javascript:;" onclick="Effect.toggle('saveinfo', 'blind');" class="toggledisplay">Why save your family health history?</a></p>
	        
	        <div id="saveinfo" style="display:none;">
	        		<p>Due to privacy concerns, this website does not save your family history information. However, you can save your family history to your own local storage area (such as your computer's hard drive or other media).   In addition, you can save to a third-party system such as Microsoft HealthVault&reg;. Some doctors' offices and electronic health record systems can also use this stored history information (if you grant them permission). </p>
	        </div>
	        
	        <br />
	        
	        <div class="clear"></div>
	                
	        <div class="box_noshade">
	        		
	        		<div class="thumb"><img src="../images/download_xml.gif" alt="Save to Computer or Portable Device" /></div>
	        		
	        		<div class="thumb_content">
	        		
			        	<h2>Save to Computer or Portable Storage Device </h2>  	
						
						<p>In this step, you can save your family health history to your computer or portable storage device as an XML data file.  This data file can be uploaded to this website later to update your family health history. </p>
						
						<p class="small nopad"><a href="javascript:;" onclick="Effect.toggle('saving_locally', 'blind');" class="toggledisplay">Show me more information on downloading</a></p>
						
						<div id="saving_locally" style="display:none;">
						
							<p><strong>Save your history as an XML file.</strong> You are about to save your Family Health History to your computer or portable storage device (i.e. USB flash drive, etc.). The process for saving your health information to your computer may vary depending on your web browser, operating system, and personal settings. Please look below to see which set of instructions is applicable to your browser and operating system. </p>
							
							<p><strong>Please remember where you save the file.</strong> If you do not remember where the file is, you will need to reenter your family history again later! </p>
					
						</div>
						
						<div class="buttonContainer">
						
		         		<div class="text_float"><p>File Name: &nbsp;&nbsp; <strong>MyFamilyHealthHistory.xml</strong></p></div>
		         		
		        			<div class="btn_float_right"><a href="downloading.php">Download Now</a></div>
		        			
			        		<div class="clear"></div>
			        		
			        	</div>
	
			        	<p class="small"><em>(Your browser will save this file on your desktop or in your "Downloads" folder.  Please remember where you save the file.) </em></p>
			        	
		        	</div>
		        	
			      <div class="clear"></div>
			      
		         <hr />
		        	
		        	<br />
		        	
		        	<div class="thumb"><img src="../images/Tile_HealthVaultBlue_h_rgb_147width.png" alt="Open from Microsoft HealthVault" /></div>
	        		
       		  <div class="thumb_content">
	        		
			        	<h2>Copy to Microsoft&reg; HealthVault&trade;</h2>  	
	
						<p>Microsoft HealthVault lets you gather, store, and share health information online. My Family Health Portrait is
going to copy data to your HealthVault account and needs you to sign in.
</p><p>
When you choose to copy your family health history information to Microsoft HealthVault, please note that
your information will be retained in HealthVault, and will be subject to the HealthVault terms of use and
privacy policy.</p>
	
						<p class="small nopad"><a href="javascript:;" onclick="Effect.toggle('hv_info', 'blind');" class="toggledisplay">Tell me about how this web site interacts with Microsoft HealthVault</a></p>
						
						<div id="hv_info" style="display:none;">
						
							<p><strong>ADD HV INFO HERE!!!</strong> </p>
							
						</div>
						
						<div class="buttonContainer">
		         		
		        			<div class="btn_float_right"><a href="hv_transition.php">Copy to HealthVault</a></div>
		        			
			        		<div class="clear"></div>
			        		
			        		<p class="small alignright"><em>(You will be prompted to sign in or create an account)</em></p>
			        		
			        	</div>
			        	
						
		        	</div>
		        			        		
		        <div class="clear"></div>
		        
	           <hr />
		         	
		        <div class="text_float"><p><a href="javascript:;" onclick="Effect.toggle('howtosave', 'blind');" class="toggledisplay">Show me detailed download instructions</a></p></div>
		         		
		        <div class="buttonContainer">
		         	
		         	<div class="centered"><a href="javascript:;" onclick="window.top.hidePopWin()">Cancel</a></div>
		         	
		        	</div>
	
		        <div class="clear"></div>
	        	
	        </div>
        
        
            
            <div id="howtosave" style="display:none">
                        
            <hr />
            <h2 id="instructions">Detailed instructions on how to save a file:</h2>
            <div class="p"><a href="#firefoxWin" target="_self">Firefox users on Windows or Macs</a> | <a href="#ieWin" target="_self">Internet Explorer users on Windows</a> | <a href="#safariWin" target="_self">Safari users on Windows or Macs</a></div>
            <hr />
            <!-- BEGIN BROWSER SPECIFIC INSTRUCTIONS FOR SAVING (same content as used for Help file) -->

            <a name="firefoxWin"></a>

            <h2>Additional Instructions for Firefox users on Windows or Macs</h2>
            <ol>
                <li>
                    After clicking the  
                    <strong>Save Family History</strong> 
                    button, a new pop-up window will appear. In this window (as shown in the sample picture below),  
                    only select the  
                    <strong>Save to Disk</strong> 
                    radio button and click the  
                    <strong>OK </strong> 
                    button. (Mac users: OK and Cancel buttons are in the reverse position of what's shown in the below image.)
                </li>

                <li>Please remember to make note of where you saved your file! </li>
            </ol>
            <br />
            <img src="https://demo.5amsolutions.com/fhh-web/images/screenshot_saveHistory_firefoxWin.gif" alt="Sample Save window for Firefox users on Windows" />
            <div><a href="#top">Back To Top</a></div>
            
            <hr />
            <a name="ieWin"></a>
            <h2>Additional Instructions for Internet Explorer users on Windows</h2>

            <ol>
                <li>
                    After clicking the  
                    <strong>Save Family History</strong> 
                    button, a new pop-up window will appear. In this window (as shown in the sample picture below),  
                    only click the  
                    <strong>Save</strong> 
                    button. 
                </li>
                <li>Please remember to make note of where you saved your file! </li>
            </ol>

            <br />
            <img src="https://demo.5amsolutions.com/fhh-web/images/screenshot_saveHistory_ieWin.gif" alt="Sample Save window for Internet Explorer users on Windows" />
            <div><a href="#top">Back To Top</a></div>
            
            <hr />
            <a name="safariWin"></a>
            <h2>Additional Instructions for Safari users on Windows or Macs</h2>
            <ol>
                <li>

                    After clicking the  
                    <strong>Save Family History</strong> 
                    button, a new pop-up window will appear. In this window (as shown in the sample picture below),  
                    only click the  
                    <strong>Save</strong> 
                    button. 
                </li>
                <li>Please remember to make note of where you saved your file! </li>
            </ol>
            <br />
            <img src="https://demo.5amsolutions.com/fhh-web/images/screenshot_saveHistory_safariWin.gif" alt="Sample Save window for Safari users on Windows" />

            <div><a href="#top">Back To Top</a></div>
            <!-- END BROWSER SPECIFIC INSTRUCTIONS FOR SAVING -->
            
            </div>
            
            
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
