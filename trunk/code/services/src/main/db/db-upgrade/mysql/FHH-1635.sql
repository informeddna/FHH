INSERT INTO displayname (language, text) VALUES('pt', 'Familial adenomatous polyposis (FAP)'); 
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Familial adenomatous polyposis (FAP)'), LAST_INSERT_ID());

commit;