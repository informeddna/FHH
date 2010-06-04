<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
    <div class="boxpad">
        <table class="form">
        <tr>
            <td>
            <h1><fmt:message key="hvManager.import.error.title"/></h1>
            <div class="box">
                <div class="thumb_content">
                    <h3><fmt:message key="hvManager.import.error.detail"/></h3> 
                    <s:if test="response != null">
                            ${response}
                    </s:if>
                        <div class="buttonContainer">
                            <c:url value="/familyHistory/familyHistory.action" var="familyHistory" />
                            <a id="hvBack" href="${familyHistory}"><fmt:message key="hvManager.save.button.back"/></a>
                        </div>
                </div>
                <div class="clear"></div>
            </div>
            </td>
        </tr>
        </table>  
    </div>
    <script type="text/javascript">
        window.onload = function() {activateNavAnchor("navFamilyHistory");};
    </script>
    <script type="text/javascript">
        setFocusById("hvBack");
    </script>
    