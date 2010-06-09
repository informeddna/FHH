In order to configure your development environment for this project, you must perform the following steps:

1.  Download and Install Maven 2.0.10 from http://maven.apache.org/

2.  Download and install Java 1.5.0_21 (or a later version of 1.5.0):
http://java.sun.com/javase/downloads/index_jdk5.jsp

3.  Download and install JBoss 4.0.5 with EJB3 support:
http://sourceforge.net/projects/jboss/files/JEMS-Installer/jems-installer-1.2.0.GA/jems-installer-1.2.0.GA.jar/download
The install location of jboss-4.0.5-ejb is subsequently referred to as $JBOSS_HOME

4.  Prepare Jboss Instance
4.0 Create a copy of the default server instance, we suggest to call it fhh (and use this name for the remainder of this document).

//change to the $JBOSS_HOME/server/ directory
cd $JBOSS_HOME/server/
cp -R $JBOSS_HOME/server/default $JBOSS_HOME/server/fhh

4.1  Install the mysql driver in to your JBoss instance, $JBOSS_HOME/server/fhh/lib directory, 
either manually download the jar from http://mirrors.ibiblio.org/pub/mirrors/maven2/mysql/mysql-connector-java/5.1.6/mysql-connector-java-5.1.6.jar
or use the commandline (in the $JBOSS_HOME/server/fhh/lib directory)
LINUX  wget http://mirrors.ibiblio.org/pub/mirrors/maven2/mysql/mysql-connector-java/5.1.6/mysql-connector-java-5.1.6.jar
MACOSX curl -O http://mirrors.ibiblio.org/pub/mirrors/maven2/mysql/mysql-connector-java/5.1.6/mysql-connector-java-5.1.6.jar

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

4.4 Upgrade the log4j libs for jboss 4.0.5
log4j.jar comes bundled with jboss-4.0.5.EJB in version 2.1.8, but the fhh application required log4j in version 2.1.14.
//change to $JBOSS_HOME/lib
cd $JBOSS_HOME/lib
//download Log4J v1.2.14 from https://ncisvn.nci.nih.gov/svn/maven-mirror/trunk/log4j/log4j/1.2.14/log4j-1.2.14.jar
LINUX  wget https://ncisvn.nci.nih.gov/svn/maven-mirror/trunk/log4j/log4j/1.2.14/log4j-1.2.14.jar
MACOSX curl -O https://ncisvn.nci.nih.gov/svn/maven-mirror/trunk/log4j/log4j/1.2.14/log4j-1.2.14.jar
//Overwrite the JBOSS_HOME/lib/log4j-boot.jar with the downloaded log4j-1.2.14.jar
mv log4j-1.2.14.jar log4j-boot.jar
//Remove the log4j.jar from the server instance - this jar does NOT need to be replaced
rm $JBOSS_HOME/server/fhh/lib

4.5 Securing the (jboss) tomcat instance 
Edit your $JBOSS_HOME/server/fhh/deploy/jbossweb-tomcat55.sar/server.xml 
change all occurrences of emptySessionPath="true" TO emptySessionPath="false"

5. Adapt the installation for your local environment:
5.1 Configure your profiles.xml by copying profiles.xml.example to profiles.xml and overwriting any build property needed.
Copy profiles.xml.mac.example to profiles.xml and specify the correct properties for your local setup:
most importantly check the values for: jboss.home, admin.db.username, admin.db.password

5.2 login into mysql and create a db called mfhp if it does not already exist

5.3 Make sure the property mshv.keystore.filename is pointing to the correct location
A keystore file is located in fhh_checkout_location/services/src/main/resources/keystore-demo
We recommend creating a hidden directory .fhh in the user home directory and copy the file in there.

6.  Make sure your JAVA_HOME and PATH variables are set to use Java 1.5.0_14

7.  Run a 1 time DB creation

cd services
mvn -Pnuke-db sql:execute
-OR-
mvn -Pnuke-db,local -f services/pom.xml sql:execute

8.  For a basic build, run this command, which will build the project into an EAR file which can then be dropped into JBoss and deployed:

mvn install (compiles code, builds packages, tests and verifies coding
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



mvn clean install cargo:deploy -Plocal,pre-compile  pre-compiles the jsps in the war phase

Running selenium tests from inside of eclipse:
Download the selenium-remote-control, 
cd selenium-remote-control-1.0.1/selenium-server-1.0.1/
java -jar selenium-server.jar -port 60001 (leave this shell tab alone, selenium should keep running)
Start your jboss thats running fhh
mvn -f ear/pom.xml -Pci clean resources:testResources compiler:testCompile
Right click on a selenium test of your choice and "debug as junit test". The break points you put into your selenium test code should now get hit.

Selenium submodal tip - the X(close) box is not in the popupFrame, so if you did selenium.selectFrame("popupFrame"), you must do selenium.selectFrame("relative=parent") in order to click it.
