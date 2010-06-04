<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div id="howtoopen" style="display: none">
    <hr/>
    <p>
    <strong><fmt:message key="importLocal.helpDetails.openFromPc" />:</strong>
    <ul>
	    <li><fmt:message key="importLocal.helpDetails.verifyConnection" /></li>
	    <li><fmt:message key="importLocal.helpDetails.pressBrowse" /></li>
	    <li><fmt:message key="importLocal.helpDetails.openSavedXml" /></li>
	    <li><fmt:message key="importLocal.helpDetails.selectPortableFile" /></li>
	    <li><fmt:message key="importLocal.helpDetails.pressButton" /></li>
    </ul>
    <p><fmt:message key="importLocal.helpDetails.openLocalNote" /></p>
    </p>
    <fhh:conditionalMshv>
	    <hr/>
	    <p><strong><fmt:message key="importLocal.helpDetails.openMshv" />:</strong></p>
	    <p><fmt:message key="importLocal.helpDetails.openMshvNote1" />
	    <a href="http://www.healthvault.com/Personal/" target="_blank"http://www.healthvault.com/personal/</a>.
	    <fmt:message key="importLocal.helpDetails.openMshvNote2" /></p> 
	     <ul>
	       <li>
	          <fmt:message key="importLocal.helpDetails.openMshvPress1" /> 
	          "<fmt:message key="importLocal.fromMshv" />" 
	          <fmt:message key="importLocal.helpDetails.openMshvPress2" /> 
	       </li>
	       <li><fmt:message key="importLocal.helpDetails.openMshvGuided" /></li>
	    </ul>
    </fhh:conditionalMshv>
</div>