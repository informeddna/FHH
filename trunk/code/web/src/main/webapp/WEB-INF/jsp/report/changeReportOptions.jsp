<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>

<s:actionerror/>

<c:set var="actionUrl" value="/popup/viewReport/submitReportOptions.action" scope="request" /> 

<s:form action="%{#attr.actionUrl}" cssClass="form" method="post" id="reportForm" theme="simple">
<div class="submodalContainer">
    <div class="accordianContainer" id="reportOptions">
        <table border="0" cellpadding="0" cellspacing="0" class="accordianTitlebarOpened" id="">
            <colgroup span="1" />
            <colgroup span="1" width="0*" />
            <tr>
                <td class="accordianTitleTd">
                	<h2><fmt:message key="reportOptions.accordian.titlebar"/></h2> 
                </td>
                <s:url id="helpUrl" action="/popup/getHelp/helpDetailsChangeReportOptions" includeParams="none" />
                <td class="accordianTitleTdBtn">
                     <a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="menu.text.getHelp" /></a>
                </td>
            </tr>
        </table>
        
        <div class="accordianContent" id="ft">
            <p><fmt:message key="reportOptions.text.p1" /></p>
            <p><fmt:message key="reportOptions.text.p2" /> "<fmt:message key="button.report.update" />."</p>
            
            <table border="0" cellpadding="0" cellspacing="0" class="form" summary="<fmt:message key="form.reportOptions.table.summary"/>">
                <tr>
                    <th><label for="selectHighlighedDisease" class="label"><fmt:message key="reportOptions.label.highlightText"/></label></th>
                    <td>
                        <select name="selectedHighlightDisease" id="selectedHighlightDisease">
                            <option value=""><fmt:message key="reportOptions.select.header" /></option>
                            <c:forEach var="item" items="${legendList}">
                                <c:choose>
                                    <c:when test="${!empty selectedHighlightDisease && item.generatedAbbreviation == selectedHighlightDisease}">
                                        <option selected="selected" value="${item.generatedAbbreviation}">${item.reportDisplay}</option>
                                    </c:when>
                                    <c:otherwise>
                                        <option value="${item.generatedAbbreviation}">${item.reportDisplay}</option>
                                    </c:otherwise>
                                </c:choose>
                            </c:forEach>
                        </select>
                        <br /><i><fmt:message key="reportOptions.label.highlightText2"/></i>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><s:checkbox key="" name="showPersonalInfo" id="showPersonalInfo" /> <label for="showPersonalInfo" class="bold"><fmt:message key="reportOptions.label.personal" /></label></td>
                </tr>
                <tr>
                    <td colspan="2"><s:checkbox key="" name="showNames" id="showNames" /> <label for="showNames" class="bold"><fmt:message key="reportOptions.label.names" /></label></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <s:checkbox key="" name="showDiagram" id="showDiagram" /> <label for="showDiagram" class="bold"><fmt:message key="reportOptions.label.drawing" /></label>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><s:checkbox key="" name="showChart" id="showChart" /> <label for="showChart" class="bold"><fmt:message key="reportOptions.label.chart" /></label></td>
                </tr>
            </table>
            
            <!-- BEGIN INCLUDE = SAVE CANCEL BUTTONS -->
            <div class="buttonContainer">
                <a id="submitReportOptions" href="#" onclick="return $('reportForm').submit();"><fmt:message key="button.report.update"/></a>
                &nbsp;&nbsp;&nbsp;
                <a id="cancelReport" href="javascript:;" onclick="window.top.hidePopWin()"><fmt:message key="button.cancel"/></a>
            </div>
            <!-- END INCLUDE = SAVE CANCEL BUTTONS -->
        </div>
    </div>
</div>
</s:form>
    
