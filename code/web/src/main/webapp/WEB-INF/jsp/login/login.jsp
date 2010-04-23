<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<page:applyDecorator name="main">
<html>
<head>
    <title>Login</title>
</head>
<body onload="setFocusToFirstControl();">
    <div class="glassbox_form">
        <form action="j_security_check" method="post" id="loginForm">
            <c:if test="${not empty param.failedLogin}">
              <p class="directions"><fmt:message key="errors.password.mismatch"/></p>
            </c:if>
             <div class="fieldrow">
                <label for="j_username">Username:</label>
                <div class="fieldbox_m required"><input name="j_username" maxlength="100" size="15" type="text"></div>
            </div>
            <div class="fieldrow">
                <label for="j_password">Password:</label>
                <div class="fieldbox_m required"><input name="j_password" maxlength="100" size="15" type="password"></div>
            </div>
            <input type="submit" value="Login" id="submitLogin" />
        </form>
    </div>
</body>
</html>
</page:applyDecorator>