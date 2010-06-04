package gov.hhs.fhh.test.selenium.page;

import com.thoughtworks.selenium.Selenium;

public interface HasSelenium {
    
    void setSelenium(Selenium selenium);
    
    
    Selenium getSelenium();

}
