<?php
class MemberContactsController extends Kwf_Controller_Action_Auto_Grid
{
    protected $_modelName = 'MemberContacts';
    protected $_defaultOrder = 'date';
    protected $_paging = 0;
    protected $_buttons = array('add', 'delete');
    protected $_editDialog = array(
        'controllerUrl' => '/member-contact',
        'width' => 450,
        'height' => 200
    );

    protected function _initColumns()
    {
        $this->_columns->add(new Kwf_Grid_Column_Date('date', trl('Date')));
        $this->_columns->add(new Kwf_Grid_Column('subject', trl('Subject')));
        $this->_columns->add(new Kwf_Grid_Column('text', trl('Text')))
            ->setRenderer('nl2Br')
            ->setWidth(300);
    }

    protected function _getWhere()
    {
        $ret = parent::_getWhere();
        $ret['member_id = ?'] = $this->_getParam('member_id');
        return $ret;
    }
}
