<?php
chdir(dirname(__FILE__));
require 'vendor/koala-framework/koala-framework/Kwf/Setup.php';
Kwf_Setup::setUp();
Kwf_Setup::dispatchMedia();

$front = Kwf_Controller_Front::getInstance();
$front->addControllerDirectory('vendor/koala-framework/kwf-extjs/Kwf/Ext/Controller', 'kwf_ext_controller');
$router = $front->getRouter();
if ($router instanceof Kwf_Controller_Router) {
    $router->addRoute('ext4', new Kwf_Ext_Route());

    $apiRoute = new Zend_Controller_Router_Route('api');
    $restRoute = new Kwf_Rest_Route(
        $front,
        array(
            'module' => 'kwf_controller_action_media'
        ),
        array(
            'kwf_controller_action_media' => array(
                'uploads'
            )
        )
    );
    $chainedRoute = new Kwf_Controller_Router_Route_Chain();
    $chainedRoute->chain($apiRoute)
                ->chain($restRoute);
    $router->addRoute('api_uploads', $chainedRoute);
}

$response = $front->dispatch();
$response->sendResponse();
