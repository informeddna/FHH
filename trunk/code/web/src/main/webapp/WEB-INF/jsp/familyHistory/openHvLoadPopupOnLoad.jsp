<%-- BEGIN: Home -> Click Create Family History Button -> On Page Load, simulate user clicking $('addPersonAnchor') --%>
<%@ include file="../common/taglibs.jsp"%>
<%@ include file="../common/eventHandlers.jsp" %>
<%@page import="gov.hhs.fhh.web.util.FhhHttpSessionUtil"%>
<c:if test="${empty popup}">
    <c:set var="popup" value="${popupKey}" scope="session"/>
</c:if>

    <c:if test="${!empty popup}">
            <!-- get rid of popup in familyhistoryaction -->
                <c:choose>
                    <c:when test="${popup == 'hvloadError'}">
                        <s:url value="/popup/familyHistory/importFamilyHistory.action" id="hvManagerUrl" />
                    </c:when>
                    <c:when test="${popup == 'hvLoadCancelled'}">
                        <s:url value="/popup/familyHistory/importFamilyHistory.action" id="hvManagerUrl" />
                    </c:when>
                    <c:when test="${popup == 'hvload'}">
                        <s:url value="/popup/healthvault/loadHvConfirm.action" id="hvManagerUrl" />
                    </c:when>
                    <c:otherwise>
                        <s:set name="hvManagerUrl" value=""></s:set>
                    </c:otherwise>
                </c:choose>
               <c:if test="${!empty hvManagerUrl}">
                    <span style="display: none"><a id="openHVAnchor" href="#" onclick="handlePopup('${hvManagerUrl}');"><fmt:message key="button.createHistory"/></span>
                    <script type="text/javascript">
                        function openHVClick () {
                            initPopUp();
                            fireEvent($('openHVAnchor'), "click");
                        }
                        addEvent(window, "load", openHVClick);
                    </script>
                    <c:remove var="popup" scope="session"/>
                    <c:remove var="popupKey" scope="session"/>
               </c:if>
    </c:if>
<%-- END: Home -> Click Create Family History Button -> On Page Load, simulate user clicking $('addPersonAnchor') --%>