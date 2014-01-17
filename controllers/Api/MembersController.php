<?php
class Api_MembersController extends Kwf_Rest_Controller_Model
{
    protected $_model = 'Members';
    protected $_saveColumns = array('firstname', 'lastname', 'title');
}
