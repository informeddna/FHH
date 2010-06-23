INSERT INTO code (codeName, status, codeSystem_id) VALUES ('315645005','ACTIVE', (select id from codesystem where name = 'SNOMED_CT')); 
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Unknown Disease'), LAST_INSERT_ID());

commit;