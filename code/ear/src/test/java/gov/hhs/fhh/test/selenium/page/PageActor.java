package gov.hhs.fhh.test.selenium.page;

public interface PageActor<S extends Page<?,?,?>, T extends Content> {

    public void perform() throws PageActorException;

    /**
     * @return the page
     */
    public S getPage();

    /**
     * @return the content
     */
    public T getContent();

}