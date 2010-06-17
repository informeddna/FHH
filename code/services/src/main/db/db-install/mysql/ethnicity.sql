insert into ethnicity (code, codeSystemName, originalText, subType) values ('2135-2', 'HL7-TBD', 'Hispanic or Latino', 'Ethnicity');
insert into displaystring (appDisplay, displayName, language) values ('Hispanic or Latino', 'Hispanic or Latino', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2135-2'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Originario de Am&#233;rica Latina', 'Hispanic or Latino', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2135-2'), LAST_INSERT_ID());

insert into ethnicity (code, codeSystemName, originalText, subType) values ('81706006', 'SNOMED_CT', 'Ashkenazi Jewish', 'Ethnicity');
insert into displaystring (appDisplay, displayName, language) values ('Ashkenazi Jewish', 'Ashkenazi Jewish', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '81706006'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Jud&#237;o Ashkenazi', 'Ashkenazi Jewish', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '81706006'), LAST_INSERT_ID());

insert into ethnicity (code, codeSystemName, originalText, subType) values ('2186-5', 'HL7-TBD', 'Not Hispanic or Latino', 'Ethnicity');
insert into displaystring (appDisplay, displayName, language) values ('Not Hispanic or Latino', 'Not Hispanic or Latino', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2186-5'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('No originario de Am&#233;rica Latina', 'Not Hispanic or Latino', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2186-5'), LAST_INSERT_ID());

-- sub-types of Hispanic
insert into ethnicity (code, codeSystemName, originalText, subType, parent_id) values ('2155-0', 'HL7', 'Central American', 'Hispanic', 1);
insert into displaystring (appDisplay, displayName, language) values ('Central American', 'Central American', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2155-0'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Centroamericano', 'Central American', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2155-0'), LAST_INSERT_ID());

insert into ethnicity (code, codeSystemName, originalText, subType, parent_id) values ('2182-4', 'HL7', 'Cuban', 'Hispanic', 1);
insert into displaystring (appDisplay, displayName, language) values ('Cuban', 'Cuban', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2182-4'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Cubano', 'Cuban', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2182-4'), LAST_INSERT_ID());

insert into ethnicity (code, codeSystemName, originalText, subType, parent_id) values ('2184-0', 'HL7', 'Dominican', 'Hispanic', 1);
insert into displaystring (appDisplay, displayName, language) values ('Dominican', 'Dominican', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2184-0'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Dominicano', 'Dominican', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2184-0'), LAST_INSERT_ID());

insert into ethnicity (code, codeSystemName, originalText, subType, parent_id) values ('2148-5', 'HL7', 'Mexican', 'Hispanic', 1);
insert into displaystring (appDisplay, displayName, language) values ('Mexican', 'Mexican', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2148-5'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Mexicano', 'Mexican', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2148-5'), LAST_INSERT_ID());

insert into ethnicity (code, codeSystemName, originalText, subType, parent_id) values ('1000000', 'TBD', 'Other Hispanic or Latino', 'Hispanic', 1);
insert into displaystring (appDisplay, displayName, language) values ('Other Hispanic', 'Other Hispanic','en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '1000000'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Otros grupos originarios de Am&#233;rica Latina', 'Other hispanic','es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '1000000'), LAST_INSERT_ID());

insert into ethnicity (code, codeSystemName, originalText, subType, parent_id) values ('2180-8', 'HL7', 'Puerto Rican', 'Hispanic', 1);
insert into displaystring (appDisplay, displayName, language) values ('Puerto Rican', 'Puerto Rican', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2180-8'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Puertorrique&#241;o', 'Puerto Rican', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2180-8'), LAST_INSERT_ID());

insert into ethnicity (code, codeSystemName, originalText, subType, parent_id) values ('2165-9', 'HL7', 'South American', 'Hispanic', 1);
insert into displaystring (appDisplay, displayName, language) values ('South American', 'South American', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2165-9'), LAST_INSERT_ID());
insert into displaystring (appDisplay, displayName, language) values ('Sudamericano', 'South American', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2165-9'), LAST_INSERT_ID());

commit;
