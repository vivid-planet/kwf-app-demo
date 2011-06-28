<?php
class MemberLanguages extends Vps_Model_Db
{
    protected $_table = 'member_languages';
    protected $_referenceMap = array(
        'Member' => array(
            'column'           => 'member_id',
            'refModelClass'     => 'Members',
        ),
        'Language' => array(
            'column'           => 'language_id',
            'refModelClass'     => 'Vps_Util_Model_Pool',
        )
    );
}
