<?php
chdir(dirname(__FILE__));
require_once 'kwf-lib/Kwf/Setup.php';
Kwf_Setup::setUp();
Kwf_Setup::dispatchMedia();

$front = Kwf_Controller_Front::getInstance();
$response = $front->dispatch();
$response->sendResponse();
