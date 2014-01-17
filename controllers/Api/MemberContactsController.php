<?php
class Api_MemberContactsController extends Kwf_Rest_Controller_Model
{
    protected $_model = 'MemberContacts';
    protected $_saveColumns = array('subject', 'text', 'member_id');
}
