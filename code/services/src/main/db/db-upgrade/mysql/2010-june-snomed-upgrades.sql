
update code set status = 'INACTIVE' where codeName = '105592009' and status = 'ACTIVE';
INSERT INTO code (codeName, status, codeSystem_id) VALUES ('10001005','ACTIVE',1); 
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Septicemia'), LAST_INSERT_ID());

update code set status = 'INACTIVE' where codeName = '116288000' and status = 'ACTIVE';
INSERT INTO code (codeName, status, codeSystem_id) VALUES ('422504002','ACTIVE',1); 
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Stroke/Brain Attack'), LAST_INSERT_ID());

update code set status = 'INACTIVE' where codeName = '197480006' and status = 'ACTIVE';
INSERT INTO code (codeName, status, codeSystem_id) VALUES ('48694002','ACTIVE',1); 
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Anxiety'), LAST_INSERT_ID());

update code set status = 'INACTIVE' where codeName = '363358000' and status = 'ACTIVE';
INSERT INTO code (codeName, status, codeSystem_id) VALUES ('93880001','ACTIVE',1); 
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Lung Cancer'), LAST_INSERT_ID());

update code set status = 'INACTIVE' where codeName = '1000000' and status = 'ACTIVE';
INSERT INTO code (codeName, status, codeSystem_id) VALUES ('126952004','ACTIVE',1); 
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Brain Cancer'), LAST_INSERT_ID());


commit;

