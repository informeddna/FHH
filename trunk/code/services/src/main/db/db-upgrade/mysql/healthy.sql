INSERT INTO observation (name, parent_id) VALUES ('no current problems or disability', null);

INSERT INTO code (codeName, status, codeSystem_id) VALUES ('160245001','ACTIVE', (select id from codesystem where name = 'SNOMED_CT')); 
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='no current problems or disability'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('en', 'Healthy'); 
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='no current problems or disability'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('es', 'Sano'); 
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='no current problems or disability'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('pt', 'Saud&#225;vel'); 
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='no current problems or disability'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('it', 'Sano'); 
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='no current problems or disability'), LAST_INSERT_ID());

commit;