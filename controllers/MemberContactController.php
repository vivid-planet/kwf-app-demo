<?php
class MemberContactController extends Kwf_Controller_Action_Auto_Form
{
    protected $_permissions = array('save', 'add');
    protected $_modelName = 'MemberContacts';

    protected function _initFields()
    {
        $this->_form->add(new Kwf_Form_Field_TextField('subject', trl('Subject')))
            ->setWidth(300);
        $this->_form->add(new Kwf_Form_Field_TextArea('text', trl('Text')))
            ->setWidth(300);
    }

    protected function _beforeInsert(Kwf_Model_Row_Interface $row)
    {
        $row->member_id = $this->_getParam('member_id');
    }
}
