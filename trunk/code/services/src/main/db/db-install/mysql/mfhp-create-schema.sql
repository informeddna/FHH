create table code (id bigint not null auto_increment, codeName varchar(255), status varchar(255) not null, codeSystem_id bigint, primary key (id));
create table codesystem (id bigint not null auto_increment, commonName varchar(255), name varchar(255), version varchar(255), primary key (id));
create table displayname (id bigint not null auto_increment, language varchar(255), text varchar(255), primary key (id));
create table displaystring (id bigint not null auto_increment, appDisplay varchar(255), language varchar(50) not null, displayName varchar(255), primary key (id));
create table ethnicity (subType varchar(31) not null, id bigint not null auto_increment, code varchar(50), codeSystemName varchar(255), originalText varchar(255), codeSystem varchar(255), codeSystemVersion varchar(255), parent_id bigint, primary key (id));
create table ethnicity_displaystring (ethnicity_id bigint not null, displayStrings_id bigint not null, primary key (ethnicity_id, displayStrings_id), unique (displayStrings_id));
create table observation (id bigint not null auto_increment, name varchar(255), parent_id bigint, primary key (id));
create table observation_code (observation_id bigint not null, codes_id bigint not null, primary key (observation_id, codes_id), unique (codes_id));
create table observation_displayname (observation_id bigint not null, displayNames_id bigint not null, primary key (observation_id, displayNames_id), unique (displayNames_id));
create table race (subType varchar(31) not null, id bigint not null auto_increment, code varchar(50), codeSystemName varchar(255), originalText varchar(255), codeSystem varchar(255), codeSystemVersion varchar(255), parent_id bigint, primary key (id));
create table race_displaystring (race_id bigint not null, displayStrings_id bigint not null, primary key (race_id, displayStrings_id), unique (displayStrings_id));
alter table code add index FK2EADED80B84B1 (codeSystem_id), add constraint FK2EADED80B84B1 foreign key (codeSystem_id) references codesystem (id);
alter table ethnicity add index ethnicity_parent_fk (parent_id), add constraint ethnicity_parent_fk foreign key (parent_id) references ethnicity (id);
alter table ethnicity_displaystring add index ethnicity_codeable_fk (ethnicity_id), add constraint ethnicity_codeable_fk foreign key (ethnicity_id) references ethnicity (id);
alter table ethnicity_displaystring add index ethnicity_displaystring_fk (displayStrings_id), add constraint ethnicity_displaystring_fk foreign key (displayStrings_id) references displaystring (id);
alter table observation add index FK74AD82C70067F85 (parent_id), add constraint FK74AD82C70067F85 foreign key (parent_id) references observation (id);
alter table observation_code add index FKDE3ACA20935B68C3 (observation_id), add constraint FKDE3ACA20935B68C3 foreign key (observation_id) references observation (id);
alter table observation_code add index FKDE3ACA20545DB758 (codes_id), add constraint FKDE3ACA20545DB758 foreign key (codes_id) references code (id);
alter table observation_displayname add index FK3572B6BA935B68C3 (observation_id), add constraint FK3572B6BA935B68C3 foreign key (observation_id) references observation (id);
alter table observation_displayname add index FK3572B6BA762CF92A (displayNames_id), add constraint FK3572B6BA762CF92A foreign key (displayNames_id) references displayname (id);
alter table race add index race_parent_fk (parent_id), add constraint race_parent_fk foreign key (parent_id) references race (id);
alter table race_displaystring add index race_codeable_fk (race_id), add constraint race_codeable_fk foreign key (race_id) references race (id);
alter table race_displaystring add index race_displaystring_fk (displayStrings_id), add constraint race_displaystring_fk foreign key (displayStrings_id) references displaystring (id);
