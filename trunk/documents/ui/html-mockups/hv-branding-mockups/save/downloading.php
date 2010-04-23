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
        

        <div id="process_steps">
        		<div class="process_step_selected">1. Save Your Information</div>
        		<div class="process_arrow_right"><img src="../images/process_arrow_right.gif" alt="Right Arrow" /></div>
				<div class="process_step">2. Manage Your Information</div>
        </div>

               
        <div class="clear"></div>
                
        <div class="box_noshade">
        		
        		
        		<div class="thumb_content">
        		
		        	<h2>Your Download Should Begin Shortly...</h2>  	
					
					<p>If your download does not begin within 10 seconds, <a href="javascript:;">click this link</a> to start immediately.</p>
					
					<p>After your download has finished saving, click the "Continue" button.</p>

					<p class="small nopad"><a href="javascript:;" onclick="Effect.toggle('saving_locally', 'blind');" class="toggledisplay">Need help with downloading?</a></p>
			     	
			     	<div id="saving_locally" style="display:none;">
					
						<p><strong>Save your history as an XML file.</strong> You are about to save your Family Health History to your computer or portable storage device (i.e. USB flash drive, etc.). The process for saving your health information to your computer may vary depending on your web browser, operating system, and personal settings. Please look below to see which set of instructions is applicable to your browser and operating system. </p>
						
						<p><strong>Please remember where you save the file.</strong> If you do not remember where the file is, you will need to reenter your family history again later! </p>
				
					</div>

			     	
	        	</div>
	        	
		     			        		
	        <div class="clear"></div>
	        
           <hr />
	         		
	        <div class="buttonContainer">
	         	
	         	<div class="btn_right">
	         	
		         	<div class="btn_float"><a href="manage.php">Continue</a></div>
		         	
		         	<div class="btn_float"><a href="save_local_canceled.php">Cancel</a></div>
	         	
	         	</div>
	         	
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
