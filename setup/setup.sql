INSERT INTO `kwf_pools` (`id`, `pool`, `pos`, `value`, `visible`) VALUES
(1, 'Languages', 1, 'English', 1),
(2, 'Languages', 2, 'German', 1),
(3, 'Languages', 3, 'French', 1),
(4, 'Languages', 4, 'Italian', 1),
(5, 'Languages', 5, 'Spanish', 1),
(7, 'Branches', 1, 'Education', 1),
(8, 'Branches', 2, 'IT', 1),
(9, 'Branches', 3, 'Medicine', 1),
(10, 'Branches', 4, 'Tourism', 1),
(11, 'Branches', 5, 'Forschung', 1);

INSERT INTO `members` (`id`, `title`, `firstname`, `lastname`, `visible`, `birth_date`, `birth_place`, `sex`, `external`, `spouse_firstname`, `spouse_title`, `spouse_lastname`, `spouse_birth_date`, `spouse_job`, `spouse_email`, `branch_id`, `subbranch`, `branch_note`, `business_title`, `club_role`, `company`, `company_address`, `company_country`, `company_postcode`, `company_city`, `company_telephone_country`, `company_telephone_pre`, `company_telephone`, `company_mobile_country`, `company_mobile_pre`, `company_mobile`, `company_fax_country`, `company_fax_pre`, `company_fax`, `company_email`, `company_url`, `private_address`, `private_country`, `private_postcode`, `private_city`, `private_telephone_country`, `private_telephone_pre`, `private_telephone`, `private_mobile_country`, `private_mobile_pre`, `private_mobile`, `private_fax_country`, `private_fax_pre`, `private_fax`, `private_email`, `private_url`, `miscellaneous`, `picture_id`, `position`) VALUES
(1, '', 'John', 'Doe', 0, NULL, '', 'male', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', NULL, 'asdf', 'asdf', NULL, '0815', 'asdfsadf', NULL, '', '', NULL, '', '', NULL, '', '', 'asdf@asdf.com', 'http://xxx.com', '', NULL, '', '', NULL, '', '', NULL, '', '', NULL, '', '', '', '', NULL, NULL, ''),
(2, '', 'Lorem', 'Ipsum', 0, NULL, '', 'male', 0, NULL, NULL, NULL, NULL, NULL, NULL, 35, '', '', '', NULL, '', '', 'AG', '', '', NULL, '', '', NULL, '', '', NULL, '', '', '', '', '', NULL, '', '', NULL, '', '', NULL, '', '', NULL, '', '', '', '', NULL, NULL, ''),
(3, '', 'Jane', 'Miller', 1, NULL, NULL, 'female', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ''),
(4, '', 'Dolor', 'Sit', 1, NULL, NULL, 'female', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '');
