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
    </head>
    <body onload="setFocusToFirstControl();">
        <div>
            <div id="main"> 
                <decorator:body/>
                <div class="clear" />
            </div>
        </div>
        <jsp:include page="/WEB-INF/jsp/common/footer.jsp"/>
    </body>
</html>
