<?php
class Members extends Vps_Db_Table
{
    protected $_name = 'members';
    protected $_rowClass = 'Row_Member';
    protected $_referenceMap = array(
        'Picture' => array(
            'columns'           => array('picture_id'),
            'refTableClass'     => 'Vps_Dao_File',
            'refColumns'        => array('id')
        ),
        'Branch' => array(
            'columns'           => array('branch_id'),
            'refTableClass'     => 'Misc_Branches',
            'refColumns'        => array('id')
        )
    );
}