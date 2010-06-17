insert into displaystring (appDisplay, displayName, language) values ('&#205;ndio Americano ou Nativo do Alasca', 'American Indian or Alaska Native', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1002-5'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Asi&#225;tico', 'Asian', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1000000'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Africano-Americano', 'Black or African-American', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2054-5'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Nativo do Hava&#237; ou de Outras Ilhas do Pac&#237;fico', 'Native Hawaiian or Other Pacific Islander', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1000001'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Branco', 'White', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2106-3'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('&#205;ndio Asi&#225;tico', 'Asian Indian', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2029-7'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Chin&#234;s', 'Chinese', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2034-7'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Filipino', 'Filipino', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2036-2'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Japon&#234;s', 'Japanese', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2039-6'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Coreano', 'Korean', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2040-4'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Vietnamita', 'Vietnamese', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2047-9'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Outro da &#193;sia', 'Other Asian', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '186046006'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Asi&#225;tico - N&#227;o Especificado', 'Asian - Not Specified', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2028-9'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Chamorro', 'Chamorro', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2088-3'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Guam&#234;s', 'Guamanian', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2087-5'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Nativo do Hava&#237;', 'Native Hawaiian', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2079-2'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Samoano', 'Samoan', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2080-0'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Nativo do Hava&#237; ou de Outras Ilhas do Pac&#237;fico - N&#227;o Especificado', 'Unspecified Native Hawaiian or Other Pacific Islander', 'pt');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2076-8'), LAST_INSERT_ID());


insert into displaystring (appDisplay, displayName, language) values ('Hisp&#226;nico ou Latino', 'Hispanic or Latino', 'pt');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2135-2'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Judeu Ashkenazi', 'Ashkenazi Jewish', 'pt');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '81706006'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('N&#227;o Hisp&#226;nico nem Latino', 'Not Hispanic or Latino', 'pt');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2186-5'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Centro-Americano', 'Central American', 'pt');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2155-0'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Cubano', 'Cuban', 'pt');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2182-4'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Dominicano', 'Dominican', 'pt');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2184-0'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Mexicano', 'Mexican', 'pt');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2148-5'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Outro Hisp&#226;nico ou Latino', 'Other Hispanic','pt');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '1000000'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Puerto Ricano', 'Puerto Rican', 'pt');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2180-8'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Sul-Americano', 'South American', 'pt');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2165-9'), LAST_INSERT_ID());



INSERT INTO displayname (language, text) VALUES ('pt','Dist&#250;rbio de Coagula&#231;&#227;o (mais op&#231;&#245;es...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Clotting Disorder type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer (mais op&#231;&#245;es...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Cancer type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Diabetes (mais op&#231;&#245;es...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Diabetes type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Dist&#250;rbio Gastrointestinal (mais op&#231;&#245;es...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Gastrointestinal Disorder type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Card&#237;aca (mais op&#231;&#245;es...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Heart Disease type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Colesterol Elevado');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='High Cholesterol'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Hipertens&#227;o');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Hypertension'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Renal (mais op&#231;&#245;es...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Kidney Disease type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Pulmonar (mais op&#231;&#245;es...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Lung Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Dem&#234;ncia/Alzheimer');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Dementia/Alzheimer\'s'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Osteoporosis');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Osteoporosis'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Dist&#250;rbio Psicol&#243;gico (mais op&#231;&#245;es...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Mental Disorder type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Septicemia');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Septicemia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Derrame/Ataque Cerebral');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Stroke/Brain Attack'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','S&#237;ndrome da Morte S&#250;bita Infantil');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Sudden Infant Death Syndrome'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Outra - Adicionar Nova');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Other Disease type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Desconhecida');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Diabetes Tipo 1');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Type 1 Diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Diabetes Tipo 2');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Type 2 Diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Diabetes Gestacional');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Gestational Diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Diabetes');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Diabetes Mellitus'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Diabetes Desconhecida');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Ansiedade');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Anxiety'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Transtorno de D&#233;ficit de Aten&#231;&#227;o-Hiperatividade');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Attention Deficit Disorder-Hyperactivity'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Autismo');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Autism'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Transtorno Bipolar');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Bipolar Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Dem&#234;ncia');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Dementia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Depress&#227;o');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Depression'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Transtorno Alimentar');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Eating Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Transtorno Obsessivo Compulsivo');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Obsessive Compulsive Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Transtorno do P&#226;nico');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Panic Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Transtorno de Personalidade');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Personality Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Transtorno de Estresse P&#243;s-Traum&#225;tico');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Post Traumatic Stress Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Esquizofrenia');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Schizophrenia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Fobia Social');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Social Phobia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Transtorno Mental');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unspecified'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Dist&#250;rbio Psicol&#243;gico Desconhecido');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Psychological Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Asma');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Asthma'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Bronquite Cr&#244;nica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Chronic Bronchitis'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Respirat&#243;ria Cr&#244;nica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Chronic Lower Respiratory Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Pulmonar Obstrutiva Cr&#244;nica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='COPD'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Enfisema');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Emphysema'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Gripe/Pneumonia');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Influenza/Pneumonia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Pulmonar Desconhecida');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Lung Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Renal C&#237;stica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Cystic Kidney Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Nefropatia Diab&#233;tica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Diabetic Kidney Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Nefrite');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Nephritis'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Nefrose Renal');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Kidney Nephrosis'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','S&#237;ndrome Nefr&#243;tica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Nephrotic Syndrome'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Renal Desconhecida');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Kidney Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Renal Desde o Nascimento');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Kidney Disease Present from Birth'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Outra Doen&#231;a Renal');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Other Kidney Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer &#211;sseo');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Bone Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de Mama');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Breast Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de C&#243;lon');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Colon Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de Es&#244;fago');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Esophageal Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer G&#225;strico');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Gastric Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de Rim');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Kidney Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Leucemia');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Leukemia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de Pulm&#227;o');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Lung Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer do M&#250;sculo');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Muscle Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de Ov&#225;rio');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Ovarian Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de Pr&#243;stata');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Prostate Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de Pele');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Skin Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de Tire&#243;ide');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Thyroid Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer Uterino');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Uterine Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de C&#243;lon Heredit&#225;rio sem Polipose');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Hereditary nonpolyposis colon cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de P&#226;ncreas');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Pancreatic cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer de F&#237;gado');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Liver cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer no C&#233;rebro');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Brain Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Cancro Rectal');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Rectal Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','S&#237;ndrome da Polipose M&#250;ltipla Familiar');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Familial multiple polyposis syndrome'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Outro C&#226;ncer');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Other Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','C&#226;ncer Desconhecido');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','P&#243;lipo de C&#243;lon');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Colon Polyp'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a de Crohn');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Crohn\'s Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','S&#237;ndrome do Indestino Irrit&#225;vel');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Irritable Bowel Syndrome'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Colite Ulcerativa');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Ulcerative Colitis'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Dist&#250;rbio Gastrointestinal');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Gastrointestinal Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Dist&#250;rbio Gastrointestinal Desconhecido');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Gastrointestinal Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Card&#237;aca');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Heart Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Ataque Card&#237;aco');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Heart Attack'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a das Art&#233;rias Coron&#225;rias');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Coronary Artery Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Angina');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Angina'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Doen&#231;a Card&#237;aca Desconhecida');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Heart Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Trombose Venosa Profunda');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Deep Vein Thrombosis (DVT)'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Embolia Pulmonar');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Pulmonary Embolism'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Dist&#250;rbio de Coagula&#231;&#227;o');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Clotting Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('pt','Dist&#250;rbio de Coagula&#231;&#227;o Desconhecido');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Clotting Disorder'), LAST_INSERT_ID());

commit;