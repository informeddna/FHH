<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<s:if test="#request.locale.language == 'es'">
    <fmt:setLocale value="es" scope="session" />
</s:if>
<s:elseif test="#request.locale.language == 'pt'">
    <fmt:setLocale value="pt" scope="session" />
</s:elseif>
<s:elseif test="#request.locale.language == 'it'">
    <fmt:setLocale value="it" scope="session" />
</s:elseif>
<s:else>
    <fmt:setLocale value="en" scope="session" />
</s:else>
<s:set name="help.context" scope="session" value="Home" />
<script type="text/javascript">
    <s:url value="/popup/familyHistory/importFamilyHistory.action" id="importXmlUrl" />
    <s:url value="/familyHistory/familyHistory.action" id="familyHistoryUrl" />
    loadFamilyHistoryDetail = function() {
        window.location = '${familyHistoryUrl}';
    }
    importXmlDocument = function() {
        showPopUpWindow('${importXmlUrl}', loadFamilyHistoryDetail, true);
    }
</script>
<c:url value="/familyHistory/start.action" var="createFamilyHistory">
</c:url>
<!-- BEGIN INCLUDE - headerHome -->
    <div class="headerContainerHome">
        <table border="0" cellpadding="0" cellspacing="0" class="mainNavTable">
            <tr>
                <s:url id="helpUrl" action="popup/getHelp/helpDetailsHome" />
                <td class="utilNavTd"><a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="icon.text.getHelp" /></a></td>
            </tr>
        </table>
    </div>
  <!-- END INCLUDE - headerHome -->

  <!-- BEGIN CONTENT -->
  <div class="contentContainerHome">
        <div class="bannerHome"><img src="<s:url value="/images/banner_homepage.gif"/>" width="550" height="60" alt="<fmt:message key="home.banner.text.tool" />" /></div>
        <table border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td class="homeTdContent">
                    <div class="homeContent">
                        <p><fmt:message key="home.text.using1" /> <em><fmt:message key="home.text.appName" /></em> <fmt:message key="home.text.using2" /></p>
                        <ul>
                            <li><fmt:message key="home.text.item.enter" /></li>
                            <li><fmt:message key="home.text.item.create" /></li>
                            <li><fmt:message key="home.text.item.use" /></li>
                        </ul>
                        <p><fmt:message key="home.text.talking" /></p>
                        <s:url value="/popup/getHelp/helpDetailsLearnMore.action" id="helpUrl" />
                        <p><a href="javascript://nop/" id="learnMore" onclick="popupWindow('${helpUrl}')"><fmt:message key="home.text.learn" /> <em><fmt:message key="home.text.appName" /></em></a></p>
                    </div>
                    <!--Start of throw away code, only meant to be temporary during testing on stage-->
                    <c:if test="%{@gov.hhs.fhh.web.Settings@isRiskCalculatorEnabled()}">
                        <% if(!request.getRequestURL().toString().contains("fhh.nci.nih.gov")
                                && !request.getRequestURL().toString().contains("familyhistory.hhs.gov")) { %>
                            <style type="text/css">
                              #announcements { float:right; width:99%; border:1px solid #656565; background:#ffffdc; -moz-box-shadow: 2px 2px 2px rgba(0,0,0,0.1); -webkit-box-shadow: 2px 2px 2px rgba(0,0,0,0.1); }
                              #announcements H3 { background:#ffe060 url("/fhh-web/images/bg_header_yellow.gif") repeat-x; padding:5px; margin:0; color:#000; font-family:arial,helvetica; font-size:100%; text-align:left; border-bottom:1px solid #656565; }
                              #announcements H3 DIV { background:url("/fhh-web/images/ico_important.gif") no-repeat 0 1px; padding-left:20px; }
                              #announcements P { padding:10px; margin:0; }
                            </style>

                            <div id="announcements">
                                <h3><div>Important Disclaimer</div></h3>
                                <p>This is a test web site for the purpose of a private study. This web site is <b>NOT</b> intended
                                for general use outside of the identified study group. <br><br>To track your family health history, please visit our public web site - My
                                 Family Health Portrait at <a href="http://familyhistory.hhs.gov/">http://familyhistory.hhs.gov/</a>.<br>Thank you.
                               </p>
                            </div>
                        <% } %>
                    </c:if>

                    <!--End of throw away code, only meant to be temporary during testing on stage-->
                    <div class="buttonContainer">
                        <a id="createNew" href="${createFamilyHistory}"><fmt:message key="home.fhh.button1" /></a>
                        <br />
                        <a id="loadExisting" href="javascript://nop/" onclick="importXmlDocument();"><fmt:message key="home.fhh.button2" /></a>
                    </div>
                    <div class="languagebuttonContainer">
                        <s:url id="en" action="home.action">
                            <s:param name="request_locale" value="'en'"/>
                            <s:param name="maintainState" value="true"/>
                        </s:url>
                        <s:url id="es" action="home.action">
                            <s:param name="request_locale" value="'es'"/>
                            <s:param name="maintainState" value="true"/>
                        </s:url>
                        <s:url id="pt" action="home.action">
                            <s:param name="request_locale" value="'pt'"/>
                            <s:param name="maintainState" value="true"/>
                        </s:url>
                        <s:url id="it" action="home.action">
                            <s:param name="request_locale" value="'it'"/>
                            <s:param name="maintainState" value="true"/>
                        </s:url>
                        <s:if test="#request.locale.language != 'en'">
                        <s:a id="en" href="%{en}"><fmt:message key="menu.text.inEnglish" /></s:a>
                        <br/>
                        </s:if>
                        <s:if test="#request.locale.language != 'es'">
                        <s:a id="es" href="%{es}"><fmt:message key="menu.text.enEspanol" /></s:a>
                        <br/>
                        </s:if>
                        <s:if test="#request.locale.language != 'pt' ">
                        <s:a id="pt" href="%{pt}"><fmt:message key="menu.text.enPortugues" /></s:a>
                        <br/>
                        </s:if>
                        <s:if test="#request.locale.language != 'it' ">
                        <s:a id="it" href="%{it}"><fmt:message key="menu.text.inItaliano" /></s:a>
                        <br/>
                        </s:if>
                    </div>
                    <noscript>
                        <div class="noscript_panel">
                            <h1>
                                <fmt:message key="home.js.h1" />
                                    <span>
                                    <s:if test="#request.locale.language != 'en'">
                                        [<s:a id="js_en" href="%{en}"><fmt:message key="menu.text.inEnglish" /></s:a>]
                                        |
                                    </s:if>
                                    <s:if test="#request.locale.language != 'es'">
                                        [<s:a id="js_es" href="%{es}"><fmt:message key="menu.text.enEspanol" /></s:a>]
                                        |
                                    </s:if>
                                    <s:if test="#request.locale.language != 'pt' ">
                                        [<s:a id="js_pt" href="%{pt}"><fmt:message key="menu.text.enPortugues" /></s:a>]
                                    </s:if>
                                    <s:if test="#request.locale.language != 'it' ">
                                        [<s:a id="js_it" href="%{it}"><fmt:message key="menu.text.inItaliano" /></s:a>]
                                    </s:if>
                                    </span>
                            </h1>
                            <p><fmt:message key="home.js.p1" /></p>
                            <p><fmt:message key="home.js.p2" /></p>
                        </div>
                    </noscript>

                </td>
                <td class="homeTdPhoto"><img src="<s:url value="/images/photos_homeBkgd.jpg"/>" alt="<fmt:message key="home.picture.text" />"></td>
            </tr>
        </table>
        <div class="orangeBox">
            <p>&nbsp;</p>
        </div>
        <div class="photoBox">
            <img src="<s:url value="/images/photos_home.jpg"/>" height="170" width="858" alt="<fmt:message key="home.picture1.text" />" />
        </div>
  </div>
  <!-- END CONTENT -->
<script type="text/javascript">
    setFocusById("learnMore");
</script>
<%@ include file="familyHistory/openHvLoadPopupOnLoad.jsp" %>
