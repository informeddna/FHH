<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>

<h1><fmt:message key="reindex.title"/></h1>
<p><fmt:message key="reindex.text.p1"/></p>
<p><fmt:message key="reindex.text.p2"/></p>

<div class="formBox">
    <table cellpadding="0" cellspacing="0" summary="<fmt:message key="reindex.table.summary"/>" class="form">
        <tbody>
            <tr>
                <td>
                    <b><label><fmt:message key="reindex.label.selectRel"/></label></b><br />
                	<!-- INSERT <select> -->
                    <div class="dynamicPanel">
                        <div><fmt:message key="reindex.text.preview"/></div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div class="buttonContainer">
    <label for="relativeId" class="label"><fmt:message key="reindex.label.generateHistory"/>: </label>
    <%-- Using html select tag to fix Spanish characters in windows --%>
    <select id="relativeId">
        <option value=""><fmt:message key="person.select.pleaseSpecify"/></option>
        <c:forEach items="${person.relatives}" var="currentItem" varStatus="status">
            <c:choose>
                <c:when test="${empty currentItem.name}">
                    <option value="${currentItem.id}"><fmt:message key="${currentItem.codeEnum.resourceKey}"/></option>
                </c:when>
                <c:otherwise>
                    <option value="${currentItem.id}">${currentItem.name}</option>
                </c:otherwise>
            </c:choose>
        </c:forEach>
    </select>
    <s:url id="previewUrl" value="/popup/reindex/previewReindex.action"/>
    <s:url id="saveXmlUrl" value="/reindex/saveXmlDocument.action"/>
    <a onclick="previewReindex('${previewUrl}', true);" href="javascript://nop/"><fmt:message key="button.reindex.preview"/></a>&nbsp;&nbsp;
    <a href="javascript:saveXmlDocument('${saveXmlUrl}', true);"><fmt:message key="button.reindex.saveXmlDocument"/></a>
</div>
