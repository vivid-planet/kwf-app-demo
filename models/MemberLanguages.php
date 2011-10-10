<?php
class MemberLanguages extends Kwf_Model_Db
{
    protected $_table = 'member_languages';
    protected $_referenceMap = array(
        'Member' => array(
            'column'           => 'member_id',
            'refModelClass'     => 'Members',
        ),
        'Language' => array(
            'column'           => 'language_id',
            'refModelClass'     => 'Kwf_Util_Model_Pool',
        )
    );
}
