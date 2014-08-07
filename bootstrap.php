<?php
chdir(dirname(__FILE__));
require 'vendor/koala-framework/koala-framework/Kwf/Setup.php';
Kwf_Setup::setUp();
Kwf_Setup::dispatchMedia();

$front = Kwf_Controller_Front::getInstance();
$front->addControllerDirectory('vendor/koala-framework/kwf-extjs/Kwf/Ext/Controller', 'kwf_ext_controller');
if ($front->getRouter() instanceof Kwf_Controller_Router) {
    $front->getRouter()->addRoute('ext4', new Kwf_Ext_Route());
}
$response = $front->dispatch();
$response->sendResponse();
