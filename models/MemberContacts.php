<?php
class MemberContacts extends Kwf_Model_Db
{
    protected $_table = 'member_contacts';
    protected $_referenceMap = array(
        'Member' => array(
            'column'           => 'member_id',
            'refModelClass'     => 'Members',
        )
    );
}
