<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<div id="importingFamilyHistoryLoading" style="display:none;">
    <div class="submodalContainer">
    <s:url id="helpUrl" action="popup/getHelp/helpDetailsImportFamilyHistory" />
    <fhh:accordianContainer helpUrl="${helpUrl}" titleTextKey="importLocal.loading.title">
        <div class="box_noshade">
            <br />
            <br />
            <div class="centered">
                <img src="<s:url value="/images/loading.gif"/>" alt="<fmt:message key="loading"/>"  />
                <br />
                <br />
                <fmt:message key="importLocal.loading.text"/>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    </fhh:accordianContainer>
    </div>
</div>