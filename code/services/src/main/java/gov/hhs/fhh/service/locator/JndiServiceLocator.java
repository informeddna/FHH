/**
 * 
 * Family Health History Portal 
 * END USER AGREEMENT
 * 
 * The U.S. Department of Health & Human Services ("HHS") hereby irrevocably 
 * grants to the user a non-exclusive, royalty-free right to use, display, 
 * reproduce, and distribute this Family Health History portal software 
 * (the "software") and prepare, use, display, reproduce and distribute 
 * derivative works thereof for any commercial or non-commercial purpose by any 
 * party, subject only to the following limitations and disclaimers, which 
 * are hereby acknowledged by the user.  
 * 
 * User agrees that it will not degrade the standards-based format of the software 
 * by materially altering the program architecture or data structure in a way 
 * that would render the data generated by the altered software incompatible 
 * with the original software. The intention of this clause is to ensure the 
 * long-term interoperability of family history information gathered by different 
 * versions of the tool.
 * 
 * User agrees that this END USER AGREEMENT will be provided to any party to 
 * whom user distributes the software, and that it will apply to the distributee.
 * 
 * User agrees that it will not use the HHS or Surgeon General logo or any HHS 
 * trademarks without permission from HHS, and will not imply endorsement of 
 * its product by HHS or the Surgeon General.
 * 
 * THIS SOFTWARE IS PROVIDED TO USER WITH NO WARRANTIES, EXPRESS OR IMPLIED, 
 * INCLUDING ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, 
 * OR THAT THE USE OF THE SOFWARE WILL NOT INFRINGE ANY PATENT, COPYRIGHT, 
 * TRADEMARK OR OTHER PROPRIETARY RIGHTS.
 * 
 */
package gov.hhs.fhh.service.locator;

import gov.hhs.fhh.service.GenericServiceLocal;
import gov.hhs.fhh.service.HealthVaultBean;
import gov.hhs.fhh.service.HealthVaultLocal;
import gov.hhs.fhh.service.MessagingGatewayBean;
import gov.hhs.fhh.service.MessagingGatewayLocal;
import gov.hhs.fhh.service.PersonServiceLocal;

import java.net.MalformedURLException;

/**
 * @author Scott Miller
 */
public class JndiServiceLocator implements ServiceLocator {

    private static HealthVaultLocal healthVaultBean = null;
    private static MessagingGatewayLocal messagingGatewayBean = null;
    
    /**
     * {@inheritDoc}
     */
    public GenericServiceLocal getGenericService() {
        return (GenericServiceLocal) JndiUtil.lookup("fhh/GenericServiceBean/local");
    }

    /**
     * {@inheritDoc}
     */
    public PersonServiceLocal getPersonService() {
        return (PersonServiceLocal) JndiUtil.lookup("fhh/PersonServiceBean/local");
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.service.locator.ServiceLocator#getMessageGatewayService()
     */
    public MessagingGatewayLocal getMessageGatewayService() {
        if (messagingGatewayBean == null) {
            messagingGatewayBean =  new MessagingGatewayBean();
        }
        return messagingGatewayBean;
    }

    /**
     * {@inheritDoc}
     * 
     * @see gov.hhs.fhh.service.locator.ServiceLocator#getHealthVault()
     */
    public HealthVaultLocal getHealthVault() {
        if (healthVaultBean == null) {
            try {
                healthVaultBean = new HealthVaultBean();
            } catch (MalformedURLException e) {
                throw new IllegalArgumentException("invalid url set in profiles.xml", e);
            }
        }
        return healthVaultBean;
    }
}