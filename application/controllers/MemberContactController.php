<?php
class MemberContactController extends Vps_Controller_Action_Auto_Form
{
    protected $_permissions = array('save', 'add');
    protected $_tableName = 'MemberContacts';

    protected function _initFields()
    {
        $this->_form->add(new Vps_Form_Field_TextField('subject', 'Betreff'))
            ->setWidth(300);
        $this->_form->add(new Vps_Form_Field_TextArea('text', 'Text'))
            ->setWidth(300);
    }

    protected function _beforeInsert(Vps_Model_Row_Interface $row)
    {
        $row->member_id = $this->_getParam('member_id');
    }
}
