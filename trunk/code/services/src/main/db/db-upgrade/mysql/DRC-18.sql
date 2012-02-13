INSERT INTO observation (name, parent_id) VALUES ('Maturity Onset Diabetes mellitus in Young (MODY)', 3);

INSERT INTO code (codeName, status, codeSystem_id) VALUES ('28453007','ACTIVE', (select id from codesystem where name = 'SNOMED_CT'));
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Maturity Onset Diabetes mellitus in Young (MODY)'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('en', 'Maturity Onset Diabetes mellitus in Young (MODY)');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Maturity Onset Diabetes mellitus in Young (MODY)'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('es', 'La diabetes mellitus Inicio en la madurez de los J&#243;venes');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Maturity Onset Diabetes mellitus in Young (MODY)'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('pt', 'Maturidade Onset Diabetes mellitus em Jovens');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Maturity Onset Diabetes mellitus in Young (MODY)'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('it', 'Maturit&#224; insorgenza di diabete mellito in giovani');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Maturity Onset Diabetes mellitus in Young (MODY)'), LAST_INSERT_ID());



INSERT INTO observation (name, parent_id) VALUES ('Pre-diabetes', 3);

INSERT INTO code (codeName, status, codeSystem_id) VALUES ('9414007','ACTIVE', (select id from codesystem where name = 'SNOMED_CT'));
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Pre-diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('en', 'Pre-diabetes');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Pre-diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('es', 'Comprobar la diabetes');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Pre-diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('pt', 'Pr&#233; diabetes');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Pre-diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('it', 'Controllare il diabete');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Pre-diabetes'), LAST_INSERT_ID());



INSERT INTO observation (name, parent_id) VALUES ('Impaired Glucose Tolerance', 3);

INSERT INTO code (codeName, status, codeSystem_id) VALUES ('9414007','ACTIVE', (select id from codesystem where name = 'SNOMED_CT'));
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Impaired Glucose Tolerance'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('en', 'Impaired Glucose Tolerance');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Impaired Glucose Tolerance'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('es', 'Intolerancia a la glucosa, diabetes latente');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Impaired Glucose Tolerance'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('pt', 'defeituoso toler&#226;ncia a glicose');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Impaired Glucose Tolerance'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('it', 'intolleranza al glucosio');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Impaired Glucose Tolerance'), LAST_INSERT_ID());




INSERT INTO observation (name, parent_id) VALUES ('Impaired Fasting Glucose', 3);

INSERT INTO code (codeName, status, codeSystem_id) VALUES ('390951007','ACTIVE', (select id from codesystem where name = 'SNOMED_CT'));
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Impaired Fasting Glucose'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('en', 'Impaired Fasting Glucose');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Impaired Fasting Glucose'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('es', 'Glucemia en ayunas');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Impaired Fasting Glucose'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('pt', 'Glicemia de jejum alterada');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Impaired Fasting Glucose'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('it', 'Alterata glicemia a digiuno');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Impaired Fasting Glucose'), LAST_INSERT_ID());




INSERT INTO observation (name, parent_id) VALUES ('Insulin Resistance', 3);

INSERT INTO code (codeName, status, codeSystem_id) VALUES ('237650006','ACTIVE', (select id from codesystem where name = 'SNOMED_CT'));
INSERT INTO observation_code (observation_id, codes_id) VALUES ((select id from observation where name ='Insulin Resistance'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('en', 'Insulin Resistance');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Insulin Resistance'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('es', 'Resistencia a la Insulina');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Insulin Resistance'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('pt', 'Resist&#234;ncia &#224; Insulina');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Insulin Resistance'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES('it', 'Resistenza all&#180;insulina');
INSERT INTO observation_displayname (observation_id, displaynames_id) VALUES ((select id from observation where name ='Insulin Resistance'), LAST_INSERT_ID());

UPDATE displayname set text = 'Diabetes/Pre-Diabetes/Metabolic Syndrome (more options...)' where text = 'Diabetes (more options...)';
UPDATE displayname set text = 'Diabetes/Comprobar la diabetes/S&#237;ndrome Metab&#243;lico (more options...)' where text = 'Diabetes (m&#225;s opciones ...)';
UPDATE displayname set text = 'Diabetes/Pr&#233; diabetes/S&#237;ndrome Metab&#243;lica (mais op&#231;&#245;es...)' where text = 'Diabetes (mais op&#231;&#245;es...)';
UPDATE displayname set text = 'Diabetes/Controllare il diabete/Sindrome Metabolica (ulteriori opzioni...)' where text = 'Diabete      (ulteriori opzioni...)';

commit;

