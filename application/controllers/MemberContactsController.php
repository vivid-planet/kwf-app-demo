<?php
class MemberContactsController extends Vps_Controller_Action_Auto_Grid
{
    protected $_tableName = 'MemberContacts';
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
        $this->_columns->add(new Vps_Grid_Column_Date('date', 'Date'));
        $this->_columns->add(new Vps_Grid_Column('subject', 'Betreff'));
        $this->_columns->add(new Vps_Grid_Column('text', 'Text'));
    }
}
