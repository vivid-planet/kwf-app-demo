<?php
class Members extends Vps_Model_Db
{
    protected $_table = 'members';
    protected $_rowClass = 'Row_Member';
    protected $_referenceMap = array(
        'Picture' => array(
            'column'           => 'picture_id',
            'refModelClass'     => 'Vps_Uploads_Model'
        ),
        'Branch' => array(
            'columns'           => 'branch_id',
            'refModelClass'     => 'Misc_Branches'
        )
    );
    protected $_dependentModels = array(
        'MemberLanguages' => 'MemberLanguages'
    );
}
