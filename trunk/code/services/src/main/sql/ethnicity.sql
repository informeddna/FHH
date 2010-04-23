insert into ethnicity (id, code, codeSystemName, originalText, subType) values (1, '2135-2', 'HL7-TBD', 'Hispanic or Latino', 'Ethnicity');
insert into displaystring (id, appDisplay, displayName, language) values (1, 'Hispanic or Latino', 'Hispanic or Latino', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (1, 1);
insert into displaystring (id, appDisplay, displayName, language) values (249, 'Originario de Am&#233;rica Latina', 'Hispanic or Latino', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (1, 249);

insert into ethnicity (id, code, codeSystemName, originalText, subType) values (2, '81706006', 'SNOMED_CT', 'Ashkenazi Jewish', 'Ethnicity');
insert into displaystring (id, appDisplay, displayName, language) values (2, 'Ashkenazi Jewish', 'Ashkenazi Jewish', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (2, 2);
insert into displaystring (id, appDisplay, displayName, language) values (250, 'Jud&#237;o Ashkenazi', 'Ashkenazi Jewish', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (2, 250);

insert into ethnicity (id, code, codeSystemName, originalText, subType) values (3, '2186-5', 'HL7-TBD', 'Not Hispanic or Latino', 'Ethnicity');
insert into displaystring (id, appDisplay, displayName, language) values (3, 'Not Hispanic or Latino', 'Not Hispanic or Latino', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (3, 3);
insert into displaystring (id, appDisplay, displayName, language) values (251, 'No originario de Am&#233;rica Latina', 'Not Hispanic or Latino', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (3, 251);

-- sub-types of Hispanic
insert into ethnicity (id, code, codeSystemName, originalText, subType, parent_id) values (4, '2155-0', 'HL7', 'Central American', 'Hispanic', 1);
insert into displaystring (id, appDisplay, displayName, language) values (4, 'Central American', 'Central American', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (4, 4);
insert into displaystring (id, appDisplay, displayName, language) values (252, 'Centroamericano', 'Central American', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (4, 252);

insert into ethnicity (id, code, codeSystemName, originalText, subType, parent_id) values (5, '2182-4', 'HL7', 'Cuban', 'Hispanic', 1);
insert into displaystring (id, appDisplay, displayName, language) values (5, 'Cuban', 'Cuban', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (5, 5);
insert into displaystring (id, appDisplay, displayName, language) values (253, 'Cubano', 'Cuban', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (5, 253);

insert into ethnicity (id, code, codeSystemName, originalText, subType, parent_id) values (6, '2184-0', 'HL7', 'Dominican', 'Hispanic', 1);
insert into displaystring (id, appDisplay, displayName, language) values (6, 'Dominican', 'Dominican', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (6, 6);
insert into displaystring (id, appDisplay, displayName, language) values (254, 'Dominicano', 'Dominican', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (6, 254);

insert into ethnicity (id, code, codeSystemName, originalText, subType, parent_id) values (7, '2148-5', 'HL7', 'Mexican', 'Hispanic', 1);
insert into displaystring (id, appDisplay, displayName, language) values (7, 'Mexican', 'Mexican', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (7, 7);
insert into displaystring (id, appDisplay, displayName, language) values (255, 'Mexicano', 'Mexican', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (7, 255);

insert into ethnicity (id, originalText, subType, parent_id) values (8, 'Other Hispanic or Latino', 'Hispanic', 1);
insert into displaystring (id, appDisplay, displayName, language) values (8, 'Other Hispanic', 'Other Hispanic','en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (8, 8);
insert into displaystring (id, appDisplay, displayName, language) values (256, 'Otros grupos originarios de Am&#233;rica Latina', 'Other hispanic','es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (8, 256);

insert into ethnicity (id, code, codeSystemName, originalText, subType, parent_id) values (10, '2180-8', 'HL7', 'Puerto Rican', 'Hispanic', 1);
insert into displaystring (id, appDisplay, displayName, language) values (10, 'Puerto Rican', 'Puerto Rican', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (10, 10);
insert into displaystring (id, appDisplay, displayName, language) values (258, 'Puertorrique&#241;o', 'Puerto Rican', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (10, 258);

insert into ethnicity (id, code, codeSystemName, originalText, subType, parent_id) values (11, '2165-9', 'HL7', 'South American', 'Hispanic', 1);
insert into displaystring (id, appDisplay, displayName, language) values (11, 'South American', 'South American', 'en');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (11, 11);
insert into displaystring (id, appDisplay, displayName, language) values (259, 'Sudamericano', 'South American', 'es');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values (11, 259);

commit;
