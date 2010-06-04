package gov.hhs.fhh.web.integration;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.microsoft.hsg.ApplicationConfig;

// TODO: Auto-generated Javadoc
/**
 * The Class ShellUtils.
 */
public class ShellUtils {

	/**
	 * Login.
	 * 
	 * @param request
	 *            the request
	 * @param response
	 *            the response
	 * @param returnUrl
	 *            the Url in the app where this should return
	 * @throws ServletException
	 *             the servlet exception
	 * @throws IOException
	 *             Signals that an I/O exception has occurred.
	 */
	public static void login(HttpServletRequest request,
			HttpServletResponse response, String returnUrl)
			throws ServletException, IOException {
		sendShellTarget(request, response, "AUTH", returnUrl);
	}

	/**
	 * Logout.
	 * 
	 * @param request
	 *            the request
	 * @param response
	 *            the response
	 * @param returnUrl
	 *            the Url in the app where this should return
	 * 
	 * @throws ServletException
	 *             the servlet exception
	 * @throws IOException
	 *             Signals that an I/O exception has occurred.
	 */
	public static void logout(HttpServletRequest request,
			HttpServletResponse response, String returnUrl)
			throws ServletException, IOException {
		sendShellTarget(request, response, "APPSIGNOUT", returnUrl);
	}

	/**
	 * 
	 * @param request
	 *            the request
	 * @param response
	 *            the response
	 * 
	 * @throws ServletException
	 *             the servlet exception
	 * @throws IOException
	 *             Signals that an I/O exception has occurred.
	 */
	public static void appAuth(HttpServletRequest request,
			HttpServletResponse response, String returnUrl)
			throws ServletException, IOException {
		sendShellTarget(request, response, "APPAUTH", returnUrl);
	}

	/**
	 * Login and Create.
	 * 
	 * @param request
	 *            the request
	 * @param response
	 *            the response
	 * 
	 * @throws ServletException
	 *             the servlet exception
	 * @throws IOException
	 *             Signals that an I/O exception has occurred.
	 */
	public static void createAccount(HttpServletRequest request,
			HttpServletResponse response, String returnUrl)
			throws ServletException, IOException {
		sendShellTarget(request, response, "CREATEACCOUNT", returnUrl);
	}

	/**
	 * Login and Create Record.
	 * 
	 * @param request
	 *            the request
	 * @param response
	 *            the response
	 * 
	 * @throws ServletException
	 *             the servlet exception
	 * @throws IOException
	 *             Signals that an I/O exception has occurred.
	 */
	public static void CreateRecord(HttpServletRequest request,
			HttpServletResponse response, String returnUrl)
			throws ServletException, IOException {
		sendShellTarget(request, response, "CREATERECORD", returnUrl);
	}

	
	
	/**
	 * Send shell target.
	 * 
	 * @param request the request
	 * @param response the response
	 * @param target the target
	 * @param returnUrl the return url
	 * 
	 * @throws ServletException the servlet exception
	 * @throws IOException Signals that an I/O exception has occurred.
	 */
	@SuppressWarnings("deprecation")
	public static void sendShellTarget(HttpServletRequest request,
			HttpServletResponse response, String target, String returnUrl)
			throws ServletException, IOException {

		StringBuffer url = new StringBuffer();
		url.append(Config.ShellUrl);
		url.append("/redirect.aspx?target=" + target + "&targetqs=?appid=");
		url.append(ApplicationConfig.APP_ID);
		if (Config.RedirectUrl != null
				&& Config.RedirectUrl.trim().length() != 0) {
			url.append("%26redirect=");
			url.append(request.getScheme());
			url.append("://");
			url.append(request.getServerName());
			url.append(":");
			url.append(request.getServerPort());
			url.append(request.getContextPath());
			url.append(Config.RedirectUrl);
		}
		
		if (returnUrl != null)
		{
			String encodedUrl = URLEncoder.encode(returnUrl);
			url.append("%26actionqs=");
			url.append(encodedUrl);
		}

		response.sendRedirect(url.toString());
	}

}
