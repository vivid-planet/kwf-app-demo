<?php
if (file_exists('application/include_path')) {
    define('VPS_PATH', trim(file_get_contents('application/include_path')));
} else {
    die ('VPS_PATH not found');
}
$include_path  = get_include_path();
$include_path .= PATH_SEPARATOR . 'application/controllers';
$include_path .= PATH_SEPARATOR . 'application/models';
$include_path .= PATH_SEPARATOR . VPS_PATH;
set_include_path($include_path);
require_once 'Vps/Setup.php';
Vps_Setup::setUp();
Vps_Setup::dispatchMedia();
Vps_Assets_Loader::load();

$front = Vps_Controller_Front::getInstance();


$acl = new Vps_Acl();

$acl->add(new Vps_Acl_Resource_MenuUrl('index',
        array('text'=>'Kunden', 'icon'=>'user.png'),
        '/'));
    $acl->add(new Zend_Acl_Resource('members'), 'index');
        $acl->add(new Zend_Acl_Resource('member'), 'members');
        $acl->add(new Zend_Acl_Resource('membercontacts'), 'members');
            $acl->add(new Zend_Acl_Resource('membercontact'), 'membercontacts');

$acl->allow('guest', 'index');
$acl->allow('guest', 'vps_media_upload');

Zend_Registry::set('acl', $acl);

$response = $front->dispatch();
$response->sendResponse();
