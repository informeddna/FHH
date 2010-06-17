<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<c:url value="/familyHistory/familyHistory.action" var="familyHistory" />
<c:url value="/viewReport/viewReport.action" var="viewReport" />
<c:url value="/reindex/reindex.action" var="reindex" />
<script type="text/javascript" charset="ISO-8859-1">

homeWarn = function(locale) {
    // Characters will not be translated in windows when pulling from the properties file.
    if (locale == 'es') {
        var homeMessage = "Si regresa ahora a la página principal terminará la elaboración de su historia familiar. Cualquier cambio que haya hecho no sera registrado. Por favor, pulse el botón de cancelar si quiere continuar con su historia familiar, o pulse OK/Continuar para terminar su historia familiar y regresar a la página principal.";
    } else if (locale == 'pt') { 
        var homeMessage = "Returning to the home page will close the current family history. Any changes you have made to your family history will be lost. Please press the Cancel button to return and continue with the current family history, or press OK/Continue to close the current history and return to the home page.";
    }else {
        var homeMessage = "Returning to the home page will close the current family history. Any changes you have made to your family history will be lost. Please press the Cancel button to return and continue with the current family history, or press OK/Continue to close the current history and return to the home page.";
    }    
    return displayConfirm(homeMessage);
}

displayConfirm = function(message) {
    if (confirm(message)) {
        return true;
    } else {
        return false;
    }
}


</script>

<!-- BEGIN INCLUDE - header -->
<div class="headerContainer">
    <table border="0" cellpadding="0" cellspacing="0" class="bannerTable">
        <tr>
            <td class="bannerTdTitle"><img src="<s:url value="/images/banner_subpage.jpg"/>" alt="<fmt:message key="icon.text.fhh" />" class="fhhBannerTitle" /></td>
            <td class="bannerTdPhotos"><img src="<s:url value="/images/photos_subpage.jpg"/>" alt="<fmt:message key="icon.text.picFamily" />" class="fhhBannerPhotos" /></td>
        </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="mainNavTable">
        <tr>
            <s:url value="/home.action" includeParams="none" id="homeUrl" />
            <td class="mainNavTd"><a id="warnAndGoHome" href="${homeUrl}" onclick="javascript:return homeWarn('<%=gov.hhs.fhh.service.util.CurrentLanguageHolder.getCurrentLanguage()%>');"><fmt:message key="menu.text.home" /></a><a id="navFamilyHistory" href="${familyHistory}"><fmt:message key="menu.text.myHistory" /></a><a id="navReindex" href="${reindex}"><fmt:message key="menu.text.reindex" /></a><a id="navViewDiagram" href="${viewReport}"><fmt:message key="menu.text.viewReport" /></a></td>
            
            <s:url id="helpUrl" action="popup/getHelp/help" />
            <td class="utilNavTd"><a href="javascript://nop/" id="navHelpUrl" onclick="popupWindow('${helpUrl}')"><fmt:message key="menu.text.getHelp" /></a></td>
        </tr>
    </table>
</div>
<!-- END INCLUDE - header -->
