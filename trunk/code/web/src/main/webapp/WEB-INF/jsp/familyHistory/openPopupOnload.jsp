<%-- BEGIN: Home -> Click Create Family History Button -> On Page Load, simulate user clicking $('addPersonAnchor') --%>
<%@ include file="../common/taglibs.jsp"%>
<%@ include file="../common/eventHandlers.jsp" %>
<%@page import="gov.hhs.fhh.web.util.FhhHttpSessionUtil"%>
<c:if test="${empty popup}">
    <c:set var="popup" value="${popupKey}" scope="session"/>
</c:if>

<c:choose>
    <c:when test="${!empty popup}">
        <c:choose>
            <c:when test="${popup == 'create'}">
                <c:remove var="popup" scope="session"/>
                <c:remove var="popupKey" scope="session"/>
                <script type="text/javascript">
                function addPersonAnchorClick () {
                    activateNavAnchor("navFamilyHistory");
                    initPopUp();
                    fireEvent($('addPersonAnchor'), "click");
                }
                addEvent(window, "load", addPersonAnchorClick);
                </script>
            </c:when>
            <c:otherwise>
            <!-- get rid of popup in familyhistoryaction -->
                <c:choose>
                    <c:when test="${popup == 'hvSaveError'}">
                        <s:url value="/popup/saveFamilyHistory/step1.action" id="hvManagerUrl" />
                    </c:when>
                    <c:when test="${popup == 'hvsave'}">
                        <s:url value="/popup/healthvault/saveLoadHV.action" id="hvManagerUrl" />
                    </c:when>
                    <c:otherwise>
                        <s:set name="hvManagerUrl" value=""></s:set>
                    </c:otherwise>
                </c:choose>
                <c:if test="${!empty hvManagerUrl}">
                    <span style="display: none"><a id="openHVAnchor" href="#" onclick="handlePopup('${hvManagerUrl}');"><fmt:message key="button.createHistory"/></span>
                    <script type="text/javascript">
                        function openHVClick () {
                            activateNavAnchor("navFamilyHistory");
                            initPopUp();
                            fireEvent($('openHVAnchor'), "click");
                        }
                        addEvent(window, "load", openHVClick);
                    </script>
                    <c:remove var="popup" scope="session"/>
                    <c:remove var="popupKey" scope="session"/>
               </c:if>
            </c:otherwise>
        </c:choose>
    </c:when>
    <c:otherwise>
        <script type="text/javascript">
            window.onload = function() {activateNavAnchor("navFamilyHistory");};
        </script>
    </c:otherwise>
</c:choose>
<%-- END: Home -> Click Create Family History Button -> On Page Load, simulate user clicking $('addPersonAnchor') --%>