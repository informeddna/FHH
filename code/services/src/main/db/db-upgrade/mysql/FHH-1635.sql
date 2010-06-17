INSERT INTO observation (name, parent_id) VALUES ('Familial adenomatous polyposis(FAP)', 2);

INSERT INTO code (codeName, status, codeSystem_id) VALUES ('72900001','ACTIVE', (select id from codesystem where name = 'SNOMED_CT')); 
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Familial adenomatous polyposis(FAP)'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('en', 'Familial adenomatous polyposis(FAP)'); 
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Familial adenomatous polyposis(FAP)'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('es', 'Familial adenomatous polyposis(FAP)'); 
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Familial adenomatous polyposis(FAP)'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('pt', 'Familial adenomatous polyposis(FAP)'); 
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Familial adenomatous polyposis(FAP)'), LAST_INSERT_ID());

commit;