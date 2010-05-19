<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
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
<c:url value="familyHistory/start.action" var="createFamilyHistory">
<c:param name="create" value="true"/>
</c:url>
<!-- BEGIN INCLUDE - headerHome -->
	<div class="headerContainerHome">
		<table border="0" cellpadding="0" cellspacing="0" class="mainNavTable">
			<tr>
                <s:if test="#request.locale.language == 'es'">
                    <s:set name="newLocale" value="%{'en'}"/>
                    <fmt:setLocale value="es" scope="session" />
                </s:if>
                <s:else>
                    <s:set name="newLocale" value="%{'es'}"/>
                    <fmt:setLocale value="en" scope="session" />
                </s:else>
                <s:url id="changeLanguageUrl" action="home" includeParams="none">
                    <s:param name="request_locale" value="%{newLocale}"/>
                </s:url>
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
						<p><a href="javascript://nop/" onclick="popupWindow('${helpUrl}')"><fmt:message key="home.text.learn" /> <em><fmt:message key="home.text.appName" /></em></a></p>
					</div>
					<div class="buttonContainer">
					    <a href="${createFamilyHistory}"><fmt:message key="home.fhh.button1" /></a>
						<br />
						<a href="javascript://nop/" onclick="importXmlDocument();"><fmt:message key="home.fhh.button2" /></a>
					</div>
                    <div class="languagebuttonContainer">
                        <s:url id="changeLanguageUrl" action="home.action" includeParams="none">
                            <s:param name="request_locale" value="%{newLocale}"/>
                            <s:param name="maintainState" value="true"/>
                        </s:url>
                        <a href="${changeLanguageUrl}"><fmt:message key="menu.text.enEspanol" /></a>
                    </div>
				</td>
				<td class="homeTdPhoto"><img src="<s:url value="/images/photos_homeBkgd.jpg"/>" alt="<fmt:message key="home.picture.text" />"></td>
			</tr>
		</table>
		<div class="orangeBox">
			<p>&nbsp;</p>
		</div>
		<div class="photoBox">
			<img src="<s:url value="/images/photos_homeBtm1.jpg"/>" alt="<fmt:message key="home.picture1.text" />" /><img src="<s:url value="/images/photos_homeBtm2.jpg"/>" alt="<fmt:message key="home.picture2.text" />" /><img src="<s:url value="/images/photos_homeBtm3.jpg"/>"  alt="<fmt:message key="home.picture3.text" />" /><img src="<s:url value="/images/photos_homeBtm4.jpg"/>" alt="<fmt:message key="home.picture4.text" />" />
		</div>
  </div>
  <!-- END CONTENT -->