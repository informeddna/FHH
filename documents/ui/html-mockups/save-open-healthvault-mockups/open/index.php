<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Open Family Health History</title>

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
												<h2>Open Saved Family Health History Information</h2> 
											</td>	
											<td class="accordianTitleTdBtn">
												<a href="#">Get Help</a>
											</td>
										</tr>
									</table>
						 			
									<div class="accordianContent">
									
										<div class="box_noshade">
					        		
							        		<div class="thumb"><img src="../images/ico_open_local.gif" alt="Open from Computer" /></div>
							        		
							        		<div class="thumb_content">
							        		
									        	<h2>Open from Computer </h2>  	
												
												<p>In this step, you can open your Family Health History from a previously-saved XML data file on your computer or portable storage device. </p>
												
												<p>Click "Browse..." to select a file on your computer, then click "Open from Computer" to open it. </p>
												
												<input type="file" name="file" id="file" size="32" />
												
												<div class="buttonContainer">
													
								         		<div class="btn_float_right"><a href="loading.php">Open from Computer</a></div>
									        		
									        	</div>
							
								        	</div>
								        	
									      <div class="clear"></div>
									      
								         <hr />
								        	
								        	<br />
								        	
								        	<div class="thumb"><img src="../images/ico_open_hv.gif" alt="Open from Microsoft HealthVault" /></div>
							        		
							        		<div class="thumb_content">
							        		
									        	<h2>Open from Microsoft HealthVault&reg;</h2>  	
							
												<p>Microsoft HealthVault&reg; allows you to store health information from many sources in one location, so it's always organized and available to you online.  Family health history information in HealthVault, either previously saved from this web site or created within HealthVault, can be opened for viewing and editing here.</p>
												
												<div class="buttonContainer">
								         		
								        			<div class="btn_float_right"><a href="hv_transition.php">Open from Microsoft HealthVault&reg;</a></div>
								        			
									        		<div class="clear"></div>
									        		
									        		<p class="small alignright"><em>(You will be prompted to sign in)</em></p>
									        		
									        	</div>
									        								
								        	</div>
								        			        		
								        <div class="clear"></div>
								        
							           <hr />
		         	
								        <div class="text_float"><p><a href="javascript:;" onclick="Effect.toggle('howtoopen', 'blind');" class="toggledisplay">Show me detailed file opening instructions</a></p></div>
								         		
								        <div class="buttonContainer">
								         	
								         	<div class="centered"><a href="javascript:;" onclick="window.top.hidePopWin()">Cancel</a></div>
								         	
								        	</div>
							
								        <div class="clear"></div>
							        	        
						            </div>
						            
						            <div id="howtoopen" style="display:none">
						            	
						            	<hr />
            							
            							<h2 id="instructions">Detailed instructions on how to open a file:</h2>
										
											<p>Detailed instructions here!</p>
											
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
