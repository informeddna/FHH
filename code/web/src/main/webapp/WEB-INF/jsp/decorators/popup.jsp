<%@ page language="java" errorPage="/error.jsp" pageEncoding="UTF-8" contentType="text/html;charset=utf-8" %>
<%@ include file="/WEB-INF/jsp/common/taglibs.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title><s:set value="getText('fhh.title')" name="defaultTitle"/><decorator:title default="${defaultTitle}" /></title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
        <%@ include file="/WEB-INF/jsp/decorators/headIncludes.jsp" %>
        <link rel="stylesheet" type="text/css" href="<c:url value='/styles/fhh.css'/>" media="all" />
        <decorator:head/>
        <script type="text/javascript">
            window.top.startLogoutTimer();
        </script>
    </head>
    <body onload="setFocusToFirstControl(); window.top.centerPopWin();" class="submodal">
        <div>
            <div id="main">
                <div id="contentwrapper">
                    <div id="logoutWarningDiv" style="display:none" class="outlineBox errorMessage">
                        <fmt:message key="logout.warning.popup.part1" /> <span id="warningCountdownDisplay"></span> <fmt:message key="logout.warning.popup.part1.seconds" />
                        <fmt:message key="logout.warning.popup.part2" />.
                    </div>
                    <%-- Content --%>
                    <div id="content">
                        <decorator:body/>
                    </div>
                    <div class="clear" />
                </div>
            </div>
            <script type="text/javascript">
                startLogoutTimer();
            </script>
        </div>
    </body>
</html>
