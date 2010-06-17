insert into race (code, codeSystemName, originalText, subType) values ('1002-5', 'HL7', 'American Indian or Alaska Native', 'Race');
insert into displaystring (appDisplay, displayName, language) values ('American Indian or Alaska Native', 'American Indian or Alaska Native', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1002-5'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Amerindio o nativo de Alaska', 'American Indian or Alaska Native', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1002-5'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType) values ('1000000', 'TBD', 'Asian', 'Race');
insert into displaystring (appDisplay, displayName, language) values ('Asian', 'Asian', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1000000'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Asi&#225;tico', 'Asian', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1000000'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType) values ('2054-5', 'HL7', 'Black or African-American', 'Race');
insert into displaystring (appDisplay, displayName, language) values ('Black or African-American', 'Black or African-American', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2054-5'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Africano o Afroamericano', 'Black or African-American', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2054-5'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType) values ('1000001', 'TBD', 'Native Hawaiian or Other Pacific Islander', 'Race');
insert into displaystring (appDisplay, displayName, language) values ('Native Hawaiian or Other Pacific Islander', 'Native Hawaiian or Other Pacific Islander', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1000001'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Nativo  de Hawai o de Islas del Pac&#237;fico', 'Native Hawaiian or Other Pacific Islander', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1000001'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType) values ('2106-3', 'HL7', 'White', 'Race');
insert into displaystring (appDisplay, displayName, language) values ('White', 'White', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2106-3'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Blanco o Cauc&#225;sico', 'White', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2106-3'), LAST_INSERT_ID());

-- sub-types of asian
insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2029-7', 'HL7', 'Asian Indian', 'Asian', 2);
insert into displaystring (appDisplay, displayName, language) values ('Asian Indian', 'Asian Indian', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2029-7'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Indoasi&#225;tico', 'Asian Indian', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2029-7'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2034-7', 'HL7', 'Chinese', 'Asian', 2);
insert into displaystring (appDisplay, displayName, language) values ('Chinese', 'Chinese', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2034-7'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Chino', 'Chinese', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2034-7'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2036-2', 'HL7', 'Filipino', 'Asian', 2);
insert into displaystring (appDisplay, displayName, language) values ('Filipino', 'Filipino', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2036-2'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Filipino', 'Filipino', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2036-2'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2039-6', 'HL7', 'Japanese', 'Asian', 2);
insert into displaystring (appDisplay, displayName, language) values ('Japanese', 'Japanese', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2039-6'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Japon&#233;s', 'Japanese', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2039-6'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2040-4', 'HL7', 'Korean', 'Asian', 2);
insert into displaystring (appDisplay, displayName, language) values ('Korean', 'Korean', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2040-4'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Coreano', 'Korean', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2040-4'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2047-9', 'HL7', 'Vietnamese', 'Asian', 2);
insert into displaystring (appDisplay, displayName, language) values ('Vietnamese', 'Vietnamese', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2047-9'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Vietnamita', 'Vietnamese', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2047-9'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('186046006', 'SNOMED', 'Other Asian', 'Asian', 2);
insert into displaystring (appDisplay, displayName, language) values ('Other Asian', 'Other Asian', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '186046006'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Otro pa&#237;s de Asia', 'Other Asian', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '186046006'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2028-9', 'HL7', 'Asian - Not Specified', 'Asian', 2);
insert into displaystring (appDisplay, displayName, language) values ('Unknown', 'Asian - Not Specified', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2028-9'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Desconocido', 'Asian - Not Specified', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2028-9'), LAST_INSERT_ID());

-- sub-types of hawaiian
insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2088-3', 'HL7', 'Chamorro', 'NativeHawaiian', 4);
insert into displaystring (appDisplay, displayName, language) values ('Chamorro', 'Chamorro', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2088-3'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Nativo de las Islas Marianas del Norte de Ocean&#237;a', 'Chamorro', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2088-3'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2087-5', 'HL7', 'Guamanian', 'NativeHawaiian', 4);
insert into displaystring (appDisplay, displayName, language) values ('Guamanian', 'Guamanian', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2087-5'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Guamaniano', 'Guamanian', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2087-5'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2079-2', 'HL7', 'Native Hawaiian', 'NativeHawaiian', 4);
insert into displaystring (appDisplay, displayName, language) values ('Native Hawaiian', 'Native Hawaiian', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2079-2'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Hawaiano', 'Native Hawaiian', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2079-2'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2080-0', 'HL7', 'Samoan', 'NativeHawaiian', 4);
insert into displaystring (appDisplay, displayName, language) values ('Samoan', 'Samoan', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2080-0'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Samoano', 'Samoan', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2080-0'), LAST_INSERT_ID());

insert into race (code, codeSystemName, originalText, subType, parent_id) values ('2076-8', 'HL7', 'Unspecified Native Hawaiian or Other Pacific Islander', 'NativeHawaiian', 4);
insert into displaystring (appDisplay, displayName, language) values ('Unknown', 'Unspecified Native Hawaiian or Other Pacific Islander', 'en');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2076-8'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Desconocido', 'Unspecified Native Hawaiian or Other Pacific Islander', 'es');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2076-8'), LAST_INSERT_ID());


commit;
