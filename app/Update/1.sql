ALTER TABLE `members` CHANGE `id` `id` VARBINARY( 36 ) NOT NULL ;

ALTER TABLE `member_contacts` CHANGE `id` `id` VARBINARY( 36 ) NOT NULL ,
CHANGE `member_id` `member_id` VARBINARY( 36 ) NOT NULL ;

ALTER TABLE `member_languages` CHANGE `id` `id` VARBINARY( 36 ) NOT NULL ;

