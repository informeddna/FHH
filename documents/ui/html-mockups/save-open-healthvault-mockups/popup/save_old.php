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
                    <h2>Save Family History File</h2> 
                </td>
                
                <td class="accordianTitleTdBtn">
                     <a href="javascript://nop/" onclick="popupWindow('/fhh-web/popup/getHelp/helpDetailsSaveFamilyHistory.action">Get Help</a>
                </td>

            </tr>
        </table>
        <div class="accordianContent" id="">
        
        <h3>Two Ways to Save Your Health History</h3>
        
        <p><strong>Why save your family history file?</strong> This system does not save your family history for you, for privacy reasons. So, you should save your family history file to your own hard drive (or other media) so that you have your own copy. What you're saving is an "xml file" that will be useful to you only with this system. You can come back to this web site and upload the file you're saving to make changes to your family history. Some doctor's offices and electronic health record systems can also use this family history file. <a href="#instructions">Learn how to save a file.</a></p>
            <hr />

        	<table class="twoCol">
        		<tr>
        			<td class="colOne">
	        			<!-- BEGIN INCLUDE = SAVE CANCEL BUTTONS -->
	        			<img src="../images/ico_large_xml.gif" alt="XML File" align="left" class="largeIcon" />
	        			<h4>Save to Use on This Website<br /> (XML File)</h4>
	            <p><strong>Save your history as a computer file.</strong> To continue working on your health history later, save your family health history to your computer or portable disk (i.e. floppy disk, USB flash drive, etc.).</p>
	
	            <p><strong>Please </strong> remember where you save the file. If you do not remember where the file is, you will need to enter in your family history again later!</p>
	            
	            
	                <div id="fileSavedDiv" style="display: none" class="saveMessageContainer">
	                    The Family Health History file you have saved is up to date.
	                </div>
	            
	            <div class="buttonContainer">
	                
	                <a href="javascript:saveAndDisplayMessage('/fhh-web/reindex/saveXmlDocument.action', false);">Save XML File</a>
	            </div>
	            	
	            <!-- END INCLUDE = SAVE CANCEL BUTTONS -->
	            </td>
	            
	            <td class="colTwo">
	            
	        			<img src="../images/ico_large_pdf.gif" alt="PDF File" align="left" class="largeIcon" />
	        			<h4>Save Visual Chart<br />(PDF File)</h4>
	        			
	            <p><strong>Save a visual family history file.</strong> Click 
            "Save Printable Family History" to save a printable family history. (This will be a PDF file.) You can print out the chart and diagram and bring it to your doctor's office or share it with your family members. You also can customize the information on the printable version by closing this window and selecting
            View Diagram & Chart from the top of the page.
            </p>

            <!-- BEGIN INCLUDE = SAVE CANCEL BUTTONS -->
            <div class="buttonContainer">
                <a href="https://demo.5amsolutions.com/fhh-web/viewReport/downloadPdf.action">Save PDF File</a> 
            </div>

            	            </td>
        		</tr>
        	</table>
        
                        
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
