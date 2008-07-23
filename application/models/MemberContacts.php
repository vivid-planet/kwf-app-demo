<?php
class MemberContacts extends Vps_Db_Table
{
    protected $_name = 'member_contacts';
    protected $_referenceMap = array(
        'Member' => array(
            'columns'           => array('member_id'),
            'refTableClass'     => 'Members',
            'refColumns'        => array('id')
        )
    );
}
