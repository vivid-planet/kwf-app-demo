
CREATE TABLE IF NOT EXISTS `members` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) NOT NULL DEFAULT '',
  `lastname` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `visible` tinyint(3) unsigned NOT NULL DEFAULT '1',
  `birth_date` date DEFAULT NULL,
  `birth_place` varchar(255) DEFAULT NULL,
  `sex` enum('male','female') NOT NULL DEFAULT 'male',
  `external` tinyint(3) unsigned NOT NULL,
  `spouse_firstname` varchar(255) DEFAULT NULL,
  `spouse_title` varchar(255) DEFAULT NULL,
  `spouse_lastname` varchar(255) DEFAULT NULL,
  `spouse_birth_date` date DEFAULT NULL,
  `spouse_job` varchar(255) DEFAULT NULL,
  `spouse_email` varchar(255) DEFAULT NULL,
  `branch_id` smallint(5) unsigned DEFAULT NULL,
  `subbranch` varchar(255) DEFAULT NULL,
  `branch_note` varchar(255) NOT NULL,
  `business_title` varchar(170) NOT NULL,
  `club_role` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `company_address` varchar(255) DEFAULT NULL,
  `company_country` varchar(5) DEFAULT NULL,
  `company_postcode` varchar(255) DEFAULT NULL,
  `company_city` varchar(50) DEFAULT NULL,
  `company_telephone_country` varchar(5) DEFAULT NULL,
  `company_telephone_pre` varchar(10) DEFAULT NULL,
  `company_telephone` varchar(255) DEFAULT NULL,
  `company_mobile_country` varchar(5) DEFAULT NULL,
  `company_mobile_pre` varchar(10) DEFAULT NULL,
  `company_mobile` varchar(255) DEFAULT NULL,
  `company_fax_country` varchar(5) DEFAULT NULL,
  `company_fax_pre` varchar(10) DEFAULT NULL,
  `company_fax` varchar(255) DEFAULT NULL,
  `company_email` varchar(255) DEFAULT NULL,
  `company_url` varchar(255) DEFAULT NULL,
  `private_address` varchar(50) DEFAULT NULL,
  `private_country` varchar(5) DEFAULT NULL,
  `private_postcode` varchar(255) DEFAULT NULL,
  `private_city` varchar(255) DEFAULT NULL,
  `private_telephone_country` varchar(5) DEFAULT NULL,
  `private_telephone_pre` varchar(10) DEFAULT NULL,
  `private_telephone` varchar(255) DEFAULT NULL,
  `private_mobile_country` varchar(5) DEFAULT NULL,
  `private_mobile_pre` varchar(10) DEFAULT NULL,
  `private_mobile` varchar(255) DEFAULT NULL,
  `private_fax_country` varchar(5) DEFAULT NULL,
  `private_fax_pre` varchar(10) DEFAULT NULL,
  `private_fax` varchar(255) DEFAULT NULL,
  `private_email` varchar(255) DEFAULT NULL,
  `private_url` varchar(255) DEFAULT NULL,
  `miscellaneous` text,
  `picture_id` int(11) DEFAULT NULL,
  `position` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `external` (`external`),
  KEY `branch_id` (`branch_id`),
  KEY `visible` (`visible`),
  KEY `picture_id` (`picture_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `member_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `member_id` int(11) unsigned NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `text` text NOT NULL,
  `subject` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `member_id` (`member_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `member_languages` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `pos` tinyint(3) unsigned NOT NULL,
  `language_id` int(5) unsigned DEFAULT NULL,
  `member_id` int(8) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `member_id` (`member_id`),
  KEY `language_id` (`language_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



ALTER TABLE `members` CHANGE `id` `id` VARBINARY( 36 ) NOT NULL ;

ALTER TABLE `member_contacts` CHANGE `id` `id` VARBINARY( 36 ) NOT NULL ,
CHANGE `member_id` `member_id` VARBINARY( 36 ) NOT NULL ;

ALTER TABLE `member_languages` CHANGE `id` `id` VARBINARY( 36 ) NOT NULL ;

