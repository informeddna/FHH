insert into displaystring (appDisplay, displayName, language) values ('Indiano o nativo americano dell&#225;Alaska', 'American Indian or Alaska Native', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1002-5'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Asiatico', 'Asian', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1000000'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Africano-Americano', 'Il nero o African-American', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2054-5'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Isolano hawaiano o altro pacifico natale', 'Native Hawaiian or Other Pacific Islander', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '1000001'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Bianco', 'White', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2106-3'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Indiano asiatico', 'Asian Indian', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2029-7'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Cinese', 'Chinese', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2034-7'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Filippino', 'Filipino', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2036-2'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Giapponese', 'Japanese', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2039-6'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Coreano', 'Korean', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2040-4'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Vietnamita', 'Vietnamese', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2047-9'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('L&#225;altro asiatico', 'Other Asian', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '186046006'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Asiatico - non specificato', 'Asian - Not Specified', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2028-9'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Chamorro', 'Chamorro', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2088-3'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Guamanian', 'Guamanian', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2087-5'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Hawaiian natale', 'Native Hawaiian', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2079-2'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Samoano', 'Samoan', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2080-0'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Isolano hawaiano o altro pacifico natale non specificato', 'Unspecified Native Hawaiian or Other Pacific Islander', 'it');
insert into race_displaystring (Race_id, displayStrings_id) values ((select id from race where code = '2076-8'), LAST_INSERT_ID());


insert into displaystring (appDisplay, displayName, language) values ('Latino-americano o Latino', 'Hispanic or Latino', 'it');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2135-2'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Ashkenazi ebreo', 'Ashkenazi Jewish', 'it');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '81706006'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Non latino-americano o Latino', 'Not Hispanic or Latino', 'it');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2186-5'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Centro americano', 'Central American', 'it');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2155-0'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Cubano', 'Cuban', 'it');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2182-4'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Dominicano', 'Dominican', 'it');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2184-0'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Mexicano', 'Mexican', 'it');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2148-5'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('L&#225;altro latino-americano', 'Other Hispanic','it');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '1000000'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Portoricano', 'Puerto Rican', 'it');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2180-8'), LAST_INSERT_ID());

insert into displaystring (appDisplay, displayName, language) values ('Sudamericano', 'South American', 'it');
insert into ethnicity_displaystring (Ethnicity_id, displayStrings_id) values ((select id from ethnicity where code = '2165-9'), LAST_INSERT_ID());


INSERT INTO displayname (language, text) VALUES ('it','Disordini della coagulazione (ulteriori opzioni...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Clotting Disorder type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro   (ulteriori opzioni...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Cancer type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Diabete      (ulteriori opzioni...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Diabetes type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordini Gastrointestinali  (ulteriori opzioni...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Gastrointestinal Disorder type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattie Cardiache   (ulteriori opzioni...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Heart Disease type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Colesterolo Alto');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='High Cholesterol'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Ipertenosione');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Hypertension'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Renale   (ulteriori opzioni...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Kidney Disease type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Polmonare    (ulteriori opzioni...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Lung Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Demenza/Alzheimer');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Dementia/Alzheimer\'s'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Osteoporosi');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Osteoporosis'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine Psicologico (ulteriori opzioni...)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Mental Disorder type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Setticemia');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Septicemia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Stroke/Ictus Cerebrale');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Stroke/Brain Attack'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Sindrome di Morte Improvvisa del Lattante (SIDS)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Sudden Infant Death Syndrome'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Altro Ð Aggiungi Nuovo');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Other Disease type'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Sconosciuta');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Diabete Tipo 1 ');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Type 1 Diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Diabete Tipo 2');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Type 2 Diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Diabete Gestazionale');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Gestational Diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Diabete');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Diabetes Mellitus'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Diabete Sconosciuto');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Diabetes'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Ansiet&#225;');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Anxiety'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine dell&#8217;Attenzione-Iperattivit&#225;');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Attention Deficit Disorder-Hyperactivity'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Autismo');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Autism'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Bipolare');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Bipolar Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Demenza');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Dementia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Depressione');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Depression'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine dell&#8217;Alimentazione');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Eating Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine Ossessivo Compulsivo');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Obsessive Compulsive Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine di Panico');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Panic Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine della Personalit&#225;');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Personality Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine di Stress Post Traumatico');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Post Traumatic Stress Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Schizofrenia');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Schizophrenia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Fobia Socialie');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Social Phobia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine Mentale');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unspecified'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine Psicologico Sconosciuto');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Psychological Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Asma');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Asthma'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Bronchite Cronica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Chronic Bronchitis'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Respiratoria Cronica delle Vie Aeree Inferiori');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Chronic Lower Respiratory Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','COPD (Malattia Polmonare Ostruttiva Cronica)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='COPD'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Enfisema');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Emphysema'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Influenza/Polmonite');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Influenza/Pneumonia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Polmonare Sconosciuta ');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Lung Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Renale Cistica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Cystic Kidney Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Renal Diabetica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Diabetic Kidney Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Nefrite');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Nephritis'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Nefrosi Renale');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Kidney Nephrosis'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Sindrome Nefrotica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Nephrotic Syndrome'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Renale Sconosciuta');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Kidney Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it',' Malattia Renal Presente dalla Nascita');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Kidney Disease Present from Birth'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Alta Malattia Renale');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Other Kidney Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro delle Ossa');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Bone Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro del Seno');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Breast Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro del Colon');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Colon Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro Esofageo');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Esophageal Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro Gastrico');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Gastric Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro Renale');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Kidney Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Leucemia');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Leukemia'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro Polmonare');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Lung Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro Muscolare');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Muscle Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro Ovarico');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Ovarian Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro della Prostata');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Prostate Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro della Pelle');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Skin Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro Tiroideo');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Thyroid Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro Uterino');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Uterine Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Syndrome di Lynch/Cancro del colon ereditario non associato a poliposi');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Lynch Syndrome/Hereditary non-polyposis colon cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro del Pancreas');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Pancreatic cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro del Fegato');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Liver cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro del Cervello');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Brain Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro Rettale');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Rectal Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Poliposi adenomatosi familiare (PAF)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Familial adenomatous polyposis (FAP)'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Altro Cancro');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Other Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Cancro Sconosciuto');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Cancer'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Polipo del Colon');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Colon Polyp'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia di Crohn');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Crohn\'s Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Sindrome del Colon Irritabile');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Irritable Bowel Syndrome'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Colite Ulcerativa');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Ulcerative Colitis'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine Gastrointestinale');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Gastrointestinal Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine Gastrointestinale Sconosciuto');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Gastrointestinal Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Cardiaca');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Heart Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Attacco Cardiaco');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Heart Attack'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Coronarica');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Coronary Artery Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Angina');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Angina'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Malattia Cardiaca Sconosciuta');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Heart Disease'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Trombosi Venosa Profonda (TVP)');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Deep Vein Thrombosis (DVT)'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Embolia Polmonare');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Pulmonary Embolism'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine della Coagulazione');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Clotting Disorder'), LAST_INSERT_ID());

INSERT INTO displayname (language, text) VALUES ('it','Disordine della Coagulazione Sconosciuto');
INSERT INTO observation_displayname (observation_id, displayNames_id) VALUES ((select id from observation where name ='Unknown Clotting Disorder'), LAST_INSERT_ID());

commit;