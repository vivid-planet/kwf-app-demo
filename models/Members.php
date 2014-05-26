<?php
class Members extends Kwf_Model_Db
{
    protected $_table = 'members';
    protected $_referenceMap = array(
        'Picture' => array(
            'column'           => 'picture_id',
            'refModelClass'     => 'Kwf_Uploads_Model'
        )
    );
    protected $_dependentModels = array(
        'MemberLanguages' => 'MemberLanguages',
        'MemberContacts' => 'MemberContacts',
    );

    protected $_filters = array(
        'id' => 'Kwf_Filter_Row_GenerateUuid'
    );

    protected function _init()
    {
        parent::_init();
        $this->_exprs['count_contacts'] = new Kwf_Model_Select_Expr_Child_Count('MemberContacts');
    }
}
