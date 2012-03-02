<%@ tag display-name="accordianTitlebarOpened.tag"
        description="Renders the accordian title bar for a submodal"
        body-content="empty"%>
<%@ attribute name="titleTextKey" required="true" type="java.lang.String"%>
<%@ attribute name="helpUrl" required="true" type="java.lang.String"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="/struts-tags" prefix="s" %>

<table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened">
    <colgroup span="1" />
    <colgroup span="1" width="0" />
    <tr>
        <td class="accordianTitleTd">
            <h2><fmt:message key="${titleTextKey}"/></h2>
        </td>
        <td class="accordianTitleTdBtn">
            <a href="javascript://nop/" id="getHelp" tabindex="50" onclick="popupWindow('${helpUrl}');"><fmt:message key="menu.text.getHelp" /></a>
        </td>
    </tr>
</table>