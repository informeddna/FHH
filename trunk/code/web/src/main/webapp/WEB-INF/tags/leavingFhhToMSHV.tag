<%@ tag display-name="leavingFhhToMSHV.tag"
        description="Renders the common leaving to visit MSHV warning page info"
        body-content="scriptless"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%@ taglib tagdir="/WEB-INF/tags" prefix="fhh" %>

<div class="box_noshade">
    <div class="box_float_inner"> 
        <div class="thumb">
        <a href="http://www.healthvault.com/personal" target="_blank"><img src="<s:url value="/images/tile_HealthVaultBlue_h_rgb_147width.png"/>" alt="<fmt:message key="thirdParty.leaving.mshv"/>" style="margin:10px, 10px, 10px, 10px"></a>
        </div>
        <div class="thumb_content">
            <h3><fmt:message key="thirdParty.leaving.title" /></h3>
            <p><fmt:message key="thirdParty.leaving.p1" /> <strong><fmt:message key="thirdParty.leaving.mshv" /></strong>.</p>
            <p><fmt:message key="thirdParty.leaving.p2" /></p>
            <p><fmt:message key="thirdParty.leaving.p3" /> <a href="http://www.healthvault.com/terms-of-use.html" target="_blank" alt="<fmt:message key="thirdParty.leaving.p3.terms" />"><fmt:message key="thirdParty.leaving.p3.terms" /></a>
            <fmt:message key="thirdParty.leaving.p3.and" /> <a href="http://www.healthvault.com/privacy-policy.html" target="_blank" alt="<fmt:message key="thirdParty.leaving.p3.privacy" />"><fmt:message key="thirdParty.leaving.p3.privacy" /></a>.</p>
            <p><fmt:message key="thirdParty.leaving.p4" /></p>
            <p><fmt:message key="thirdParty.leaving.p5" /></p>
        </div>
    </div>
    <div class="box_hilite">
        <fhh:hvGuidance />
    </div>
    <div class="clear"></div>
    <br>
    <hr>
    <jsp:doBody/>
    <div class="clear"></div>
</div>
<div class="clear"></div>