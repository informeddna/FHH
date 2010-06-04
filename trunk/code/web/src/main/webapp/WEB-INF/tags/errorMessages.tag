<%@ tag display-name="errorMessages.tag"
        description="Renders yellow error div w/ messages"
        body-content="empty"%>
        
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="fhh" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%-- Success Messages --%>
<c:if test="${not empty messages}">
        <c:forEach var="msg" items="${messages}">
            <c:choose>
                <c:when test="${msg=='failHvConnectToLoadError'}">
                    <div class="loginstatus">
                        <p><strong><fmt:message key="importLocal.getFromMshv.error"/></strong>
                        <fmt:message key="importLocal.getFromMshv.ms.connect.failed"/> <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.contact"/></a></p>
                    </div>
                </c:when>
                <c:when test="${msg=='failHvConnectToSaveError'}">
                    <div class="loginstatus">
                        <p><strong><fmt:message key="importLocal.getFromMshv.error"/></strong>
                        <fmt:message key="saveFamilyHistory.saveToMshv.ms.connect.failed"/> <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.contact"/></a></p>
                    </div>
                </c:when>
                <c:when test="${msg=='failedToSaveToMshv'}">
	                <div class="loginstatus">
	                    <p><strong><fmt:message key="importLocal.getFromMshv.error"/></strong>
	                    <fmt:message key="saveFamilyHistory.saveToMshv.ms.failed"/> <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.contact"/></a></p>
	                </div>
                </c:when>
                <c:when test="${msg=='failedToSaveToMshvMfhp'}">
                    <div class="loginstatus">
                        <s:url value="/popup/getHelp/footerDetailsContactUs.action" id="helpUrl" />
                        <p><strong><fmt:message key="importLocal.getFromMshv.error"/></strong>
                        <fmt:message key="saveFamilyHistory.saveToMshv.mfhp.failed"/> <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.contact"/></a></p>
                    </div>
                </c:when>
                <c:when test="${msg=='healthVaultPedigreeLoadError'}">
	                <div class="loginstatus">
	                    <p><strong><fmt:message key="importLocal.getFromMshv.error"/></strong>
	                    <fmt:message key="importLocal.getFromMshv.ms.failed"/> <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.contact"/></a></p>
	                </div>
                </c:when>
                <c:when test="${msg=='healthVaultPedigreeLoadMfhpError'}">
                    <div class="loginstatus">
                        <s:url value="/popup/getHelp/footerDetailsContactUs.action" id="helpUrl" />
                        <p><strong><fmt:message key="importLocal.getFromMshv.error"/></strong>
                        <fmt:message key="importLocal.getFromMshv.mfhp.failed"/> <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.contact"/></a></p>
                    </div>
                </c:when>
                <c:when test="${msg=='noDataInHealthVaultError'}">
                    <div class="loginstatus">
                        <p><strong><fmt:message key="importLocal.getFromMshv.error"/></strong>
                        <fmt:message key="importLocal.getFromMshv.ms.failed"/> <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="footer.text.contact"/></a></p>
                    </div>
                </c:when>
            </c:choose>
        </c:forEach>
        <c:remove var="messages" scope="session"/>
</c:if>