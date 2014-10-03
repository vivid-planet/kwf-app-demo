<?php
class Acl extends Kwf_Acl
{
    public function __construct()
    {
        parent::__construct();
        $this->addResource(new Kwf_Acl_Resource_MenuUrl('members_index',
                array('text'=>trlStatic('Customers'), 'icon'=>'user.png'),
                '/members/members'));
            $this->addResource(new Zend_Acl_Resource('members_members'), 'members_index');
                $this->addResource(new Zend_Acl_Resource('members_member'), 'members_members');
                $this->addResource(new Zend_Acl_Resource('members_member-contacts'), 'members_members');
                    $this->addResource(new Zend_Acl_Resource('members_member-contact'), 'members_member-contacts');

        $this->allow('guest', 'members_index');
        $this->allow('guest', 'kwf_media_upload');
        $this->allow('guest', 'default_index');
    }
}
