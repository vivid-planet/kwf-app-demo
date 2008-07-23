<?php
class MembersController extends Vps_Controller_Action_Auto_Grid
{
    protected $_tableName = 'Members';
    protected $_defaultOrder = 'lastname';
    protected $_paging = 20;
    protected $_buttons = array('add');

    protected function _initColumns()
    {
        $this->_filters = array('text' => 'Text');
        $this->_columns->add(new Vps_Grid_Column('lastname', 'Nachname', 140));
        $this->_columns->add(new Vps_Grid_Column('firstname', 'Vorname'));
        $this->_columns->add(new Vps_Grid_Column_Checkbox('visible', 'Aktiv', 40));
    }
}
