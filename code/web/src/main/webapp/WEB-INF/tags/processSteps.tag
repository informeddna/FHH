<%@ tag display-name="processSteps.tag"
        description="Renders the process steps heads up display"
        body-content="empty"%>
<%@ attribute name="activeStep" required="true" type="java.lang.Integer"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="fhh" %>

        <c:url value="/images/process_arrow_right.gif" var="rightArrowSrc" />
        <c:choose>
            <c:when test="${activeStep == 1}">
                <div id="process_steps">
                    <div class="process_step_selected">1. <fmt:message key="saveFamilyHistory.step1.title" /></div>
                    <div class="process_arrow_right"><img src="${rightArrowSrc}" alt="Right Arrow" /></div>
                    <div class="process_step">2. <fmt:message key="saveFamilyHistory.step2.title" /></div>
                </div>
            </c:when>
            <c:when test="${activeStep == 2}">
                <div id="process_steps">
                    <div class="process_step">1. <fmt:message key="saveFamilyHistory.step1.title" /></div>
                    <div class="process_arrow_right"><img src="${rightArrowSrc}" alt="Right Arrow" /></div>
                    <div class="process_step_selected">2. <fmt:message key="saveFamilyHistory.step2.title" /></div>
                </div>
            </c:when>
            <c:otherwise>
                <div id="process_steps">
                    <div class="process_step">1. <fmt:message key="saveFamilyHistory.step1.title" /></div>
                    <div class="process_arrow_right"><img src="${rightArrowSrc}" alt="Right Arrow" /></div>
                    <div class="process_step">2. <fmt:message key="saveFamilyHistory.step2.title" /></div>
                </div>
            </c:otherwise>
        </c:choose>
