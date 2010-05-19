/**
 * 
 * Family Health History Portal 
 * END USER AGREEMENT
 * 
 * The U.S. Department of Health & Human Services (�HHS�) hereby irrevocably 
 * grants to the user a non-exclusive, royalty-free right to use, display, 
 * reproduce, and distribute this Family Health History portal software 
 * (the �software�) and prepare, use, display, reproduce and distribute 
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
package gov.hhs.fhh.data.util;

import gov.hhs.fhh.data.Disease;
import gov.hhs.fhh.service.PersonServiceLocal;
import gov.hhs.fhh.service.locator.JndiServiceLocator;
import gov.hhs.fhh.service.locator.ServiceLocator;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author bpickeral
 *
 */
public final class FhhDataUtils {
    private static final FhhDataUtils FHH_DATA_UTILS = new FhhDataUtils();
    private static Map<Long, Disease> idToDiseaseMap = new HashMap<Long, Disease>();
    private ServiceLocator serviceLocator;

    /**
     * Constructor for the singleton instance.
     */
    private FhhDataUtils() {
        this.serviceLocator = new JndiServiceLocator();
    }
    
    /**
     * @return the FHH_REGISTRY
     */
    public static FhhDataUtils getInstance() {
        return FHH_DATA_UTILS;
    }
    
    /**
     * Gets the person service from the service locator.
     * @return the service.
     */
    public static PersonServiceLocal getPersonService() {
        return getInstance().getServiceLocator().getPersonService();
    }
    
    /**
     * Returns a Map of Disease IDs to all diseases.
     * @return id to disease map
     */
    public static Map<Long, Disease> getIdToDiseaseMap() {
        if (idToDiseaseMap.isEmpty()) {
            List<Disease> allDiseaseList = FhhDataUtils.getPersonService().getAllDiseases();
            for (Disease currDisease : allDiseaseList) {
                idToDiseaseMap.put(currDisease.getId(), currDisease);
            }
        }
        return idToDiseaseMap;
    }

    /**
     * @return the serviceLocator
     */
    public ServiceLocator getServiceLocator() {
        return serviceLocator;
    }

    /**
     * @param serviceLocator the serviceLocator to set
     */
    public void setServiceLocator(ServiceLocator serviceLocator) {
        this.serviceLocator = serviceLocator;
    }
}