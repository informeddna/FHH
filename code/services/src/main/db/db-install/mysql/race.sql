insert into race (id, code, codeSystemName, originalText, subType) values (1, '1002-5', 'HL7', 'American Indian or Alaska Native', 'Race');
insert into displaystring (id, appDisplay, displayName, language) values (12, 'American Indian or Alaska Native', 'American Indian or Alaska Native', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (1, 12);
insert into displaystring (id, appDisplay, displayName, language) values (260, 'Amerindio o nativo de Alaska', 'American Indian or Alaska Native', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (1, 260);

insert into race (id, code, codeSystemName, originalText, subType) values (2, '1000000', 'TBD', 'Asian', 'Race');
insert into displaystring (id, appDisplay, displayName, language) values (13, 'Asian', 'Asian', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (2, 13);
insert into displaystring (id, appDisplay, displayName, language) values (261, 'Asi&#225;tico', 'Asian', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (2, 261);

insert into race (id, code, codeSystemName, originalText, subType) values (3, '2054-5', 'HL7', 'Black or African-American', 'Race');
insert into displaystring (id, appDisplay, displayName, language) values (14, 'Black or African-American', 'Black or African-American', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (3, 14);
insert into displaystring (id, appDisplay, displayName, language) values (262, 'Africano o Afroamericano', 'Black or African-American', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (3, 262);

insert into race (id, code, codeSystemName, originalText, subType) values (4, '1000001', 'TBD', 'Native Hawaiian or Other Pacific Islander', 'Race');
insert into displaystring (id, appDisplay, displayName, language) values (15, 'Native Hawaiian or Other Pacific Islander', 'Native Hawaiian or Other Pacific Islander', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (4, 15);
insert into displaystring (id, appDisplay, displayName, language) values (263, 'Nativo  de Hawai o de Islas del Pac&#237;fico', 'Native Hawaiian or Other Pacific Islander', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (4, 263);

insert into race (id, code, codeSystemName, originalText, subType) values (5, '2106-3', 'HL7', 'White', 'Race');
insert into displaystring (id, appDisplay, displayName, language) values (16, 'White', 'White', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (5, 16);
insert into displaystring (id, appDisplay, displayName, language) values (264, 'Blanco o Cauc&#225;sico', 'White', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (5, 264);

-- sub-types of asian
insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (6, '2029-7', 'HL7', 'Asian Indian', 'Asian', 2);
insert into displaystring (id, appDisplay, displayName, language) values (17, 'Asian Indian', 'Asian Indian', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (6, 17);
insert into displaystring (id, appDisplay, displayName, language) values (265, 'Indoasi&#225;tico', 'Asian Indian', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (6, 265);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (7, '2034-7', 'HL7', 'Chinese', 'Asian', 2);
insert into displaystring (id, appDisplay, displayName, language) values (18, 'Chinese', 'Chinese', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (7, 18);
insert into displaystring (id, appDisplay, displayName, language) values (266, 'Chino', 'Chinese', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (7, 266);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (8, '2036-2', 'HL7', 'Filipino', 'Asian', 2);
insert into displaystring (id, appDisplay, displayName, language) values (19, 'Filipino', 'Filipino', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (8, 19);
insert into displaystring (id, appDisplay, displayName, language) values (267, 'Filipino', 'Filipino', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (8, 267);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (9, '2039-6', 'HL7', 'Japanese', 'Asian', 2);
insert into displaystring (id, appDisplay, displayName, language) values (20, 'Japanese', 'Japanese', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (9, 20);
insert into displaystring (id, appDisplay, displayName, language) values (268, 'Japon&#233;s', 'Japanese', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (9, 268);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (10, '2040-4', 'HL7', 'Korean', 'Asian', 2);
insert into displaystring (id, appDisplay, displayName, language) values (21, 'Korean', 'Korean', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (10, 21);
insert into displaystring (id, appDisplay, displayName, language) values (269, 'Coreano', 'Korean', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (10, 269);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (11, '2047-9', 'HL7', 'Vietnamese', 'Asian', 2);
insert into displaystring (id, appDisplay, displayName, language) values (22, 'Vietnamese', 'Vietnamese', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (11, 22);
insert into displaystring (id, appDisplay, displayName, language) values (270, 'Vietnamita', 'Vietnamese', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (11, 270);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (12, '186046006', 'SNOMED', 'Other Asian', 'Asian', 2);
insert into displaystring (id, appDisplay, displayName, language) values (23, 'Other Asian', 'Other Asian', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (12, 23);
insert into displaystring (id, appDisplay, displayName, language) values (271, 'Otro pa&#237;s de Asia', 'Other Asian', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (12, 271);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (13, '2028-9', 'HL7', 'Asian - Not Specified', 'Asian', 2);
insert into displaystring (id, appDisplay, displayName, language) values (24, 'Unknown', 'Asian - Not Specified', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (13, 24);
insert into displaystring (id, appDisplay, displayName, language) values (272, 'Desconocido', 'Asian - Not Specified', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (13, 272);

-- sub-types of hawaiian
insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (14, '2088-3', 'HL7', 'Chamorro', 'NativeHawaiian', 4);
insert into displaystring (id, appDisplay, displayName, language) values (25, 'Chamorro', 'Chamorro', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (14, 25);
insert into displaystring (id, appDisplay, displayName, language) values (273, 'Nativo de las Islas Marianas del Norte de Ocean&#237;a', 'Chamorro', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (14, 273);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (15, '2087-5', 'HL7', 'Guamanian', 'NativeHawaiian', 4);
insert into displaystring (id, appDisplay, displayName, language) values (26, 'Guamanian', 'Guamanian', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (15, 26);
insert into displaystring (id, appDisplay, displayName, language) values (274, 'Guamaniano', 'Guamanian', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (15, 274);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (16, '2079-2', 'HL7', 'Native Hawaiian', 'NativeHawaiian', 4);
insert into displaystring (id, appDisplay, displayName, language) values (27, 'Native Hawaiian', 'Native Hawaiian', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (16, 27);
insert into displaystring (id, appDisplay, displayName, language) values (275, 'Hawaiano', 'Native Hawaiian', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (16, 275);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (17, '2080-0', 'HL7', 'Samoan', 'NativeHawaiian', 4);
insert into displaystring (id, appDisplay, displayName, language) values (28, 'Samoan', 'Samoan', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (17, 28);
insert into displaystring (id, appDisplay, displayName, language) values (276, 'Samoano', 'Samoan', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (17, 276);

insert into race (id, code, codeSystemName, originalText, subType, parent_id) values (18, '2076-8', 'HL7', 'Unspecified Native Hawaiian or Other Pacific Islander', 'NativeHawaiian', 4);
insert into displaystring (id, appDisplay, displayName, language) values (29, 'Unknown', 'Unspecified Native Hawaiian or Other Pacific Islander', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values (18, 29);
insert into displaystring (id, appDisplay, displayName, language) values (277, 'Desconocido', 'Unspecified Native Hawaiian or Other Pacific Islander', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values (18, 277);


commit;
