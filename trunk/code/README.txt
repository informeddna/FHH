In order to configure your development environment for this project, you must perform the following steps:

1.  Download and Install Maven 2.2.1 from http://maven.apache.org/

2.  Download and install Java 1.6.0_29 (or a later version of 1.6.0):
http://www.oracle.com/technetwork/java/archive-139210.html

3.  Download and install JBoss 5.1.0.GA with EJB3 support:
http://sourceforge.net/projects/jboss/files/JBoss/JBoss-5.1.0.GA
The install location of jboss-5.1.0.GA is subsequently referred to as $JBOSS_HOME

4.  Prepare Jboss Instance
4.0 Create a copy of the default server instance, we suggest to call it fhh (and use this name for the remainder of this document).

//change to the $JBOSS_HOME/server/ directory
cd $JBOSS_HOME/server/
cp -R $JBOSS_HOME/server/default $JBOSS_HOME/server/fhh

4.1  Install the mysql driver in to your JBoss instance, $JBOSS_HOME/server/fhh/lib directory,
Manually download the jar from http://www.mysql.com/downloads/mirror.php?id=404190

4.2  Install the EHCache v1.2.4 in to your Jboss instance, $JBOSS_HOME/server/fhh/lib directory,
either manually download the jar from http://mirrors.ibiblio.org/pub/mirrors/maven2/net/sf/ehcache/ehcache/1.2.4/ehcache-1.2.4.jar
or use the commandline (in the $JBOSS_HOME/server/fhh/lib directory)
LINUX  wget http://mirrors.ibiblio.org/pub/mirrors/maven2/net/sf/ehcache/ehcache/1.2.4/ehcache-1.2.4.jar
MACOSX curl -O http://mirrors.ibiblio.org/pub/mirrors/maven2/net/sf/ehcache/ehcache/1.2.4/ehcache-1.2.4.jar

4.3 Install two JAXB jars (jaxb-api-2.1.jar, jaxb-impl-2.1.4.jar) into your JBoss instance, $JBOSS_HOME/server/fhh/lib directory,
either manually download the jar from http://mirrors.ibiblio.org/pub/mirrors/maven2/net/sf/ehcache/ehcache/1.2.4/ehcache-1.2.4.jar
or use the commandline (in the $JBOSS_HOME/server/fhh/lib directory)
LINUX
wget http://mirrors.ibiblio.org/pub/mirrors/maven2/net/sf/ehcache/ehcache/1.2.4/ehcache-1.2.4.jar
wget https://ncisvn.nci.nih.gov/svn/maven-mirror/trunk/javax/xml/bind/jaxb-api/2.1/jaxb-api-2.1.jar
MACOSX
curl -O https://ncisvn.nci.nih.gov/svn/maven-mirror/trunk/com/sun/xml/bind/jaxb-impl/2.1.4/jaxb-impl-2.1.4.jar
curl -O https://ncisvn.nci.nih.gov/svn/maven-mirror/trunk/javax/xml/bind/jaxb-api/2.1/jaxb-api-2.1.jar

5. Adapt the installation for your local environment:
5.1 Configure your ~/.m2/settings.xml by copying settings/settings.ci.xml to ~/.m2/settings.xml and overwriting any build property needed.
most importantly check the values for: jboss.home, admin.db.username, admin.db.password

5.2 login into mysql and create a db called mfhp if it does not already exist

5.3 Make sure the property mshv.keystore.filename is pointing to the correct location
A keystore file is located in fhh_checkout_location/services/src/main/resources/keystore-demo
We recommend creating a hidden directory .fhh in the user home directory and copy the file in there.

6.  Make sure your JAVA_HOME and PATH variables are set to use Java 1.6.0_29

7.  Run a 1 time DB creation

cd services
mvn -Pnuke-db sql:execute
-OR-
mvn -Pnuke-db,local -f services/pom.xml sql:execute

8.  For a basic build, run this command, which will build the project into an EAR file which can then be dropped into JBoss and deployed:

mvn clean install (compiles code, builds packages, tests and verifies coding
            metrics - the most commonly used target)

9.  The following commands are important to know during development:

mvn install (compiles code, builds packages, tests and verifies coding
            metrics - the most commonly used target)
mvn clean (deletes all built artifacts)
mvn compile (just compiles the source)
mvn test (compiles and executes tests)
mvn site (compiles, packages, and builds a site of reports, but does
            not fail build if metrics do not pass)
mvn -f ear/pom.xml -Pci integration-test  (deploys to the container and runs the
            integration test suite - only needs to be run in the ear project)
mvn -Pnuke-db,local -f services/pom.xml sql:execute  (completely deletes and recreates the db)
mvn sql:execute (runs all of the sql scripts needed to initialize the
            database, needs one install to have succeeded before execution,
            so it is usually executed as mvn install sql:execute)
mvn cargo:deploy (depoys to your local jboss), this should be done from the ear directory of the project.

mvn nci-commons:copy-web-files (copys html, jsp, css,images, etc to the
            running container)
mvn nci-commons:jboss-undeploy (undeploys from the local jboss)
mvn -f ear/pom.xml -Pci integration-test -Dtest=*SerializeXMLFilesTest* (run a single integration test)
mvn -f ear/pom.xml -Pci-nostart-nodeploy integration-test -Dtest=*CreatePersonCancelCloseTest* (run a single integration test during development, when app is deployed locally)
mvn -Ppre-compile -f web/pom.xml install (precompiles jsps)
mvn -f services/pom.xml -Plocal -Dskip-liquibase=true clean generate-test-resources resources:resources resources:testResources compiler:compile compiler:testCompile


mvn clean install cargo:deploy -Plocal,pre-compile  pre-compiles the jsps in the war phase

Running selenium tests from inside of eclipse:
Download the selenium-remote-control,
cd selenium-remote-control-1.0.1/selenium-server-1.0.1/
java -jar selenium-server.jar -port 60001 (leave this shell tab alone, selenium should keep running)
Start your jboss thats running fhh
mvn -f ear/pom.xml -Pci clean resources:testResources compiler:testCompile
Right click on a selenium test of your choice and "debug as junit test". The break points you put into your selenium test code should now get hit.

Selenium submodal tip - the X(close) box is not in the popupFrame, so if you did selenium.selectFrame("popupFrame"), you must do selenium.selectFrame("relative=parent") in order to click it.
