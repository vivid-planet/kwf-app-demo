<?php
class IndexController extends Vps_Controller_Action
{
    public function indexAction()
    {
        $this->view->ext('Members');
    }
}
