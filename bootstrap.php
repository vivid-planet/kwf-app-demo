<?php
chdir(dirname(__FILE__));
require 'vendor/koala-framework/koala-framework/Kwf/Setup.php';
Kwf_Setup::setUp();
Kwf_Setup::dispatchMedia();

$front = Kwf_Controller_Front::getInstance();
$response = $front->dispatch();
$response->sendResponse();
