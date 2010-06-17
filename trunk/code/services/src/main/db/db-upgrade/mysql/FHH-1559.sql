delete from code where id in (select codes_id from observation_code where observation_id = (select id from Observation where lower(name) = 'colorectal cancer'));

delete from observation_code where observation_id in (select o.id from Observation o where lower(o.name) = 'colorectal cancer' );

delete from displayname where id in (select displaynames_id from observation_displayname where observation_id = (select id from Observation where lower(name) = 'colorectal cancer'));

delete from observation_displayname where observation_id = (select id from Observation where lower(name) = 'colorectal cancer');

delete from Observation where lower(name) = 'colorectal cancer';


INSERT INTO observation (name, parent_id) VALUES ('Rectal Cancer', 2);

INSERT INTO code (codeName, status, codeSystem_id) VALUES ('254582000','ACTIVE', (select id from codesystem where name = 'SNOMED_CT')); 
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Rectal Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('en', 'Rectal Cancer'); 
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Rectal Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('es', 'C&aacute;ncer rectal'); 
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Rectal Cancer'), LAST_INSERT_ID());


commit;

