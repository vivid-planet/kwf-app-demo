<?php
chdir(dirname(__FILE__));
if (file_exists('include_path')) {
    $path = str_replace('%vkwf_branch%', trim(file_get_contents('vkwf_branch')), trim(file_get_contents('include_path')));
} else {
    $path = dirname(__FILE__).'/vkwf-lib';
}
$include_path  = get_include_path();
$include_path .= PATH_SEPARATOR . 'controllers';
$include_path .= PATH_SEPARATOR . 'models';
$include_path .= PATH_SEPARATOR . 'components';
$include_path .= PATH_SEPARATOR . 'app';
set_include_path($include_path);
require_once $path.'/Vkwf/Setup.php';
Vkwf_Setup::setUp();
Vkwf_Setup::dispatchMedia();
Kwf_Assets_Loader::load();

$front = Kwf_Controller_Front::getInstance();
$response = $front->dispatch();
$response->sendResponse();
