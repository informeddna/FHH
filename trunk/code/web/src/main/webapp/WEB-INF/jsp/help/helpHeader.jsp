<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<html>
<head>
    <title><fmt:message key="fhh.title"/></title>
</head>
<body class="popup">
    <div class="boxpad" id="helpDetail">
    	<div class="helpContainer">
        	<div class="bannerPopup">
        	<img src="<s:url value="/images/banner_popup.jpg"/>" width="285" height="38" alt="<fmt:message key="icon.text.fhh"/>" /></div>
        	<div class="helpTopTitlebar">
            	<a id="closeHelp" class="helpTitlebar" href="javascript:window.close()" align="right"><fmt:message key="help.titlebar.text.closeThisWindow"/></a>
            </div>
            <div class="helpContentContainer">
