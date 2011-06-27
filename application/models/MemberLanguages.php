<?php
class MemberLanguages extends Vps_Db_Table
{
    protected $_name = 'member_languages';
    protected $_referenceMap = array(
        'Member' => array(
            'columns'           => array('member_id'),
            'refTableClass'     => 'Members',
            'refColumns'        => array('id')
        ),
        'Language' => array(
            'columns'           => array('language_id'),
            'refTableClass'     => 'Vps_Dao_Pool',
            'refColumns'        => array('id')
        )
    );
}
