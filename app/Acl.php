<?php
class Acl extends Kwf_Acl
{
    public function __construct()
    {
        parent::__construct();

        $this->add(new Kwf_Ext_AclResource_Menu('members',
            array('text'=>trlStatic('Customers'), 'icon'=>'user.png'),
            'Members'
        ));

        $this->addResource(new Kwf_Acl_Resource_MenuUrl('members_members',
                array('text'=>trlStatic('Customers Ext2'), 'icon'=>'user.png'),
                '/members/members'));

        $this->add(new Zend_Acl_Resource('api'));
            $this->add(new Zend_Acl_Resource('api_members'), 'api');
            $this->add(new Zend_Acl_Resource('api_member-contacts'), 'api');
            $this->add(new Zend_Acl_Resource('kwf_media_uploads'), 'api');

        $this->allow('guest', 'default_index');
        $this->allow('guest', 'kwf_media_upload');
        $this->allow('guest', 'api');
        $this->allow('guest', 'members');
        $this->allow('guest', 'members_members');
    }
}
