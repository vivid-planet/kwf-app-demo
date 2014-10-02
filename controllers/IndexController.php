<?php
class IndexController extends Zend_Controller_Action
{
    public function indexAction()
    {
        Kwf_Util_Redirect::redirect('/kwf/ext/members');
    }
}
