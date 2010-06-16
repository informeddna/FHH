-- these views are solely for convenience in browsing the database so that objects and their names can be viewed in the same row
create view race_names as select r.*, ds.language, ds.displayName, ds.appDisplay from race r join race_displaystring rds on r.id = rds.race_id join displaystring ds on rds.displaystrings_id = ds.id where language = 'en';
create view ethnicity_names as select e.*, ds.language, ds.displayName, ds.appDisplay from ethnicity e join ethnicity_displaystring eds on e.id = eds.ethnicity_id join displaystring ds on eds.displaystrings_id = ds.id where language = 'en';
