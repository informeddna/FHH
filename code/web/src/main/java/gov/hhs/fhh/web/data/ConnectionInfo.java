/**
 * (c) Copyright Microsoft Corporation. 
 * This source is subject to the Microsoft Public License.
 * See http://www.microsoft.com/opensource/licenses.mspx#Ms-PL       
 */
package gov.hhs.fhh.web.data;

import gov.hhs.fhh.service.PersonInfo;

import java.io.Serializable;

/**
 * The person info class contains enough information about the logged in user to access their record.
 */
public class ConnectionInfo implements Serializable, PersonInfo {

    private static final long serialVersionUID = 1L;

    /** The record id. */
    private String recordId;

    /** The user auth token. */
    private String userAuthToken;

    /** The session auth token. */
    private String sessionToken;

    private String displayName;

    private String personId;

    private String personName;

    private String recordName;

    /**
     * Gets the record id.
     * 
     * @return the record id
     */
    public String getRecordId() {
        return recordId;
    }

    /**
     * Sets the record id.
     * 
     * @param recordId the new record id
     */
    public void setRecordId(String recordId) {
        this.recordId = recordId;
    }

    /**
     * Gets the user auth token.
     * 
     * @return the user auth token
     */
    public String getUserAuthToken() {
        return userAuthToken;
    }

    /**
     * Sets the user auth token.
     * 
     * @param userAuthToken the new user auth token
     */
    public void setUserAuthToken(String userAuthToken) {
        this.userAuthToken = userAuthToken;
    }

    /**
     * @return the sessionToken
     */
    public String getSessionToken() {
        return sessionToken;
    }

    /**
     * @param sessionToken the sessionToken to set
     */
    public void setSessionToken(String sessionToken) {
        this.sessionToken = sessionToken;
    }

    /**
     * @return the displayName
     */
    public String getDisplayName() {
        return displayName;
    }

    /**
     * @param displayName the displayName to set
     */
    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    /**
     * @param personId the person's account identifier
     */
    public void setPersonId(String personId) {
        this.personId = personId;
        
    }

    /**
     * @param personName the person's name
     */
    public void setPersonName(String personName) {
        this.personName = personName;
        
    }

    /** 
     * @param recordName the record name
     */
    public void setRecordName(String recordName) {
        this.recordName = recordName;
        
    }

    /**
     * @return the personId
     */
    public String getPersonId() {
        return personId;
    }

    /**
     * @return the personName
     */
    public String getPersonName() {
        return personName;
    }

    /**
     * @return the recordName
     */
    public String getRecordName() {
        return recordName;
    }
}
