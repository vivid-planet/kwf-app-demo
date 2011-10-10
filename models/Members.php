<?php
class Members extends Kwf_Model_Db
{
    protected $_table = 'members';
    protected $_rowClass = 'Row_Member';
    protected $_referenceMap = array(
        'Picture' => array(
            'column'           => 'picture_id',
            'refModelClass'     => 'Kwf_Uploads_Model'
        )
    );
    protected $_dependentModels = array(
        'MemberLanguages' => 'MemberLanguages'
    );
}
