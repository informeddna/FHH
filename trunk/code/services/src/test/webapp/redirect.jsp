
<%@page import="gov.hhs.fhh.web.integration.ShellUtils"%>
<%@page import="gov.hhs.fhh.web.integration.Config"%>
<%@page import="com.microsoft.hsg.ApplicationConfig"%>
<%@page import="java.net.URLEncoder"%><html>
<body>
<%
    ShellUtils.login(request, response, Config.RedirectUrl);
%>
</body>
</html>
