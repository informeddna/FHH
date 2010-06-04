<%@ page language="java" errorPage="/error.jsp" pageEncoding="UTF-8" contentType="text/html;charset=utf-8" %>
<%@ include file="/WEB-INF/jsp/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title><fmt:message key="fhh.title"/></title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <META HTTP-EQUIV="Pragma" CONTENT="no-cache"/>
        <%@ include file="/WEB-INF/jsp/decorators/headIncludes.jsp" %>
        <link rel="address bar icon" href="<c:url value="/images/favicon.ico"/>" />
        <link rel="icon" href="<c:url value="/images/favicon.ico"/>" type="image/x-icon" />
        <link rel="shortcut icon" href="<c:url value="/images/favicon.ico"/>" type="image/x-icon" />
        <decorator:head/>
    </head>
    <body onload="setFocusToFirstControl();">
        <div id="wrapper" class="mainContainer">
            <jsp:include page="/WEB-INF/jsp/common/header.jsp"/>
            <div id="main" class="contentContainer">
                <div id="contentwrapper">
                    <div id="logoutWarningDiv" style="display:none" class="outlineBox errorMessage">
                        <s:url id="reloadUrl" action="familyHistory/start" includeParams="none">
                            <s:param name="maintainState" value="true"/>
                        </s:url>
                        <fmt:message key="logout.warning.part1" /> <span id="warningCountdownDisplay"></span> <fmt:message key="logout.warning.part1.seconds" />
                        <fmt:message key="logout.warning.part2" /> <a href="${reloadUrl}" id="mainWarningRedirect"><fmt:message key="logout.warning.part2.link" /></a>.
                    </div>
                    <%-- Content --%> 
                    <div id="content">
                        <s:set value="getText('fhh.title')" name="defaultTitle" />
                        <decorator:body/>
                    </div>
                </div>
            </div>
            <jsp:include page="/WEB-INF/jsp/common/footer.jsp"/>
        </div>
        <script type="text/javascript">
           logout = function() {
                window.location = "<s:url action="logout"/>";
            }
            startLogoutTimer();
        </script>
    </body>
</html>
