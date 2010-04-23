In order to configure your development environment for this project, you must perform the following steps.

1.  Download and Install Maven 2.0.8 from http://maven.apache.org/

2.  Download and install Java 1.5.0_14

3.  Download and install JBoss 4.0.5 with EJB3 support

4.  Prepare Jboss Instance
4.1  Install the mysql driver in to your JBoss instance, <jboss_home>/server/<instance>/lib directory, -- http://mirrors.ibiblio.org/pub/mirrors/maven2/mysql/mysql-connector-java/5.1.6/mysql-connector-java-5.1.6.jar
4.2  Install the EHCache v1.2.4 in to your Jboss instance, <jboss_home>/server/<instance>/lib directory, -- http://mirrors.ibiblio.org/pub/mirrors/maven2/net/sf/ehcache/ehcache/1.2.4/ehcache-1.2.4.jar

5.  (If needed) Configure your profiles.xml by copying profiles.xml.example to profiles.xml and overwriting any build property needed.

6.  Make sure your JAVA_HOME and PATH variables are set to use Java 1.5.0_14

7.  Run a 1 time DB creation

cd services
mvn -Pnuke-db sql:execute

8.  The following commands are important to know during development:

mvn install (compiles code, builds packages, tests and verifies coding
            metrics - the most commonly used target)
mvn clean (deletes all built artifacts)
mvn compile (just compiles the source)
mvn test (compiles and executes tests)
mvn site (compiles, packages, and builds a site of reports, but does
            not fail build if metrics do not pass)
mvn -Pci integration-test  (deploys to the container and runs the
            integration test suite - only needs to be run in the ear project)
mvn -Pnuke-db sql:execute  (completely deletes and recreates the db)
mvn sql:execute (runs all of the sql scripts needed to initialize the
            database, needs one install to have succeeded before execution,
            so it is usually executed as mvn install sql:execute)
mvn cargo:deploy (depoys to your local jboss)
mvn nci-commons:copy-web-files (copys htmml, jsp, css,images, etc to the
            running container)
mvn nci-commons:jboss-undeploy (undeploys from the local jboss)
