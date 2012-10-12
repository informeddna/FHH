<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<c:url value="/familyHistory/familyHistory.action" var="familyHistory" />
<c:url value="/viewReport/viewReport.action" var="viewReport" />
<c:url value="/reindex/reindex.action" var="reindex" />
<c:url value="/risk/risk.action" var="risk" />
<script type="text/javascript" charset="ISO-8859-1">

homeWarn = function(locale) {
    // Characters will not be translated in windows when pulling from the properties file.
    if (locale == 'es') {
        var homeMessage = "Si regresa ahora a la página principal terminará la elaboración de su historia familiar. Cualquier cambio que haya hecho no sera registrado. Por favor, pulse el botón de cancelar si quiere continuar con su historia familiar, o pulse OK/Continuar para terminar su historia familiar y regresar a la página principal.";
    } else if (locale == 'pt') {
        var homeMessage = "Se voltar à página inicial, o histórico familiar atual vai fechar. Qualquer mudança que você tiver feito ao seu histórico será perdido. Clique no botão Cancelar para voltar e continuar com o histórico familiar atual, ou clique no botão OK/Continuar para fechar o histórico familiar atual e voltar à página inicial.";
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
<!-- Provide screen readers a way to skip navigation -->

<!-- BEGIN INCLUDE - header -->
<div id="skipNavBegin" style="width: 0; height: 0; overflow: hidden;">
    <a href="#skipNavEnd" accesskey="n">Skip navigation</a>
</div>
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
            <td class="mainNavTd">
                <!-- Note: Any line breaks here will add spacers in the header -->
                <a id="warnAndGoHome" href="${homeUrl}" onclick="javascript:return homeWarn('<%=gov.hhs.fhh.service.util.CurrentLanguageHolder.getCurrentLanguage()%>');"><fmt:message key="menu.text.home" /></a><a id="navFamilyHistory" href="${familyHistory}"><fmt:message key="menu.text.myHistory" /></a><a id="navReindex" href="${reindex}"><fmt:message key="menu.text.reindex" /></a><c:if test="%{@gov.hhs.fhh.web.Settings@isRiskCalculatorEnabled()}"><a id="navRisk" href="${risk}"><fmt:message key="menu.text.risk" /></a></c:if><a id="navViewDiagram" href="${viewReport}"><fmt:message key="menu.text.viewReport" /></a>
            </td>

            <s:url id="helpUrl" action="popup/getHelp/help" />
            <td class="utilNavTd"><a href="javascript://nop/" id="navHelpUrl" onclick="popupWindow('${helpUrl}')"><fmt:message key="menu.text.getHelp" /></a></td>
        </tr>
    </table>
</div>
<!-- END INCLUDE - header -->
<!-- Screen readers can skip to this point on the screen -->
<div id="skipNavEnd"></div>
