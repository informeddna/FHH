
UPDATE displayname set text = 'Lynch Syndrome/Hereditary non-polyposis colon cancer' where text = 'Hereditary nonpolyposis colon cancer'; 

UPDATE observation set name  = 'Lynch Syndrome/Hereditary non-polyposis colon cancer' where name = 'Hereditary nonpolyposis colon cancer'; 

UPDATE observation set parent_id = 4 where name = 'Lynch Syndrome/Hereditary non-polyposis colon cancer';

commit;