<?php
class MemberController extends Kwf_Controller_Action_Auto_Form
{
    protected $_buttons = array('save');
    protected $_permissions = array('save', 'add');
    protected $_modelName = 'Members';

    protected function _initFields()
    {
        $tabs = $this->_form->add(new Kwf_Form_Container_Tabs());
        $tabs->setActiveTab(0);

        // **** Persönliche Daten
        $tab = $tabs->add();
        $tab->setTitle('Person');

        $fs = new Kwf_Form_Container_FieldSet(trl('Name and Birthdate'));
        $fs->fields->add(new Kwf_Form_Field_TextField('firstname', trl('Firstname')))
            ->setAllowBlank(false)
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('lastname', trl('Lastname')))
            ->setWidth(300)
            ->setAllowBlank(false);
        $fs->fields->add(new Kwf_Form_Field_TextField('title', trl('Title')))
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_Select('sex', trl('Sex')))
            ->setValues(array('male' => trl('Male'), 'female' => trl('Female')))
            ->setAllowBlank(false);
        $fs->fields->add(new Kwf_Form_Field_DateField('birth_date', trl('Birthdate')));
        $fs->fields->add(new Kwf_Form_Field_TextField('birth_place', trl('Birthplace')))
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_Checkbox('visible', trl('Active')));
        $fs->fields->add(new Kwf_Form_Field_File('Picture', trl('Photo')));
        $fs->fields->add(new Kwf_Form_Field_GoogleMapsField('position', trl('Position')));
        

        $tab->fields->add($fs);

        $fs = new Kwf_Form_Container_FieldSet(trl('Foreign Languages'));
        $multifields = new Kwf_Form_Field_MultiFields('MemberLanguages');
        $multifields->setMinEntries(0);
        $multifields->fields->add(new Kwf_Form_Field_PoolSelect('language_id', trl('Language')))
            ->setPool('Languages')
            ->setAllowBlank(false);
        $fs->fields->add($multifields);
        $tab->fields->add($fs);

        // **** Beruf
        $tab = $tabs->add();
        $tab->setTitle(trl('Job'));

        $fs = new Kwf_Form_Container_FieldSet(trl('Job'));
        $fs->setLabelWidth(150);
        $fs->fields->add(new Kwf_Form_Field_PoolSelect('branch_id', trl('Branch Category')))
            ->setPool('Branches')
            ->setListWidth(300)
            ->setWidth(300)
            ->setShowNoSelection(true)
            ->setAllowBlank(true);
        $fs->fields->add(new Kwf_Form_Field_TextField('subbranch', trl('Branch')))
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('branch_note', trl('Branch Note')))
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextArea('business_title', trl('Business Title')))
            ->setWidth(300)
            ->setHeight(40)
            ->setMaxLength(170);
        $tab->fields->add($fs);

        $fs = new Kwf_Form_Container_FieldSet(trl('Company adresse'));
        $fs->setLabelWidth(150);
        $fs->fields->add(new Kwf_Form_Field_TextField('company', trl('Company')))
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('company_address', trl('Address')))
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('company_postcode', trl('ZIP')))
            ->setWidth(100);
        $fs->fields->add(new Kwf_Form_Field_TextField('company_city', trl('City')))
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_SelectCountry('company_country', trl('Country')))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('company_email', trl('E-Mail')))
            ->setWidth(300)
            ->setVtype('email');
        $fs->fields->add(new Kwf_Form_Field_TextField('company_url', trl('Url')))
            ->setWidth(300)
            ->setVtype('url');
        $tab->fields->add($fs);

        $fs = new Kwf_Form_Container_FieldSet(trl('Telephone'));
        $fs->fields->add(new Kwf_Form_Field_SelectCountry('company_telephone_country', trl('Country')))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('company_telephone_pre', trl('Area Code')));
        $fs->fields->add(new Kwf_Form_Field_TextField('company_telephone', trl('Number')));
        $tab->fields->add($fs);

        $fs = new Kwf_Form_Container_FieldSet(trl('Mobile'));
        $fs->fields->add(new Kwf_Form_Field_Select('company_mobile_country', trl('Country')))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('company_mobile_pre', trl('Area Code')));
        $fs->fields->add(new Kwf_Form_Field_TextField('company_mobile', trl('Number')));
        $tab->fields->add($fs);

        $fs = new Kwf_Form_Container_FieldSet(trl('Fax'));
        $fs->fields->add(new Kwf_Form_Field_Select('company_fax_country', trl('Country')))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('company_fax_pre', trl('Area Code')));
        $fs->fields->add(new Kwf_Form_Field_TextField('company_fax', trl('Number')));
        $tab->fields->add($fs);


        // **** Privat
        $tab = $tabs->add();
        $tab->setTitle(trl('Private'));

        $fs = new Kwf_Form_Container_FieldSet(trl('Adress'));
        $fs->setLabelWidth(130);
        $fs->fields->add(new Kwf_Form_Field_TextField('private_address', trl('Adress')))
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('private_postcode', trl('ZIP')))
            //->setVtype('num')
            ->setWidth(100);
        $fs->fields->add(new Kwf_Form_Field_TextField('private_city', trl('City')))
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_Select('private_country', trl('Country')))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('private_email', trl('E-Mail')))
            ->setWidth(300)
            ->setVtype('email');
        $fs->fields->add(new Kwf_Form_Field_TextField('private_url', trl('Url')))
            ->setWidth(300)
            ->setVtype('url');
        $tab->fields->add($fs);

        $fs = new Kwf_Form_Container_FieldSet(trl('Telephone'));
        $fs->fields->add(new Kwf_Form_Field_Select('private_telephone_country', trl('Country')))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('private_telephone_pre', trl('Area Code')));
        $fs->fields->add(new Kwf_Form_Field_TextField('private_telephone', trl('Number')));
        $tab->fields->add($fs);

        $fs = new Kwf_Form_Container_FieldSet(trl('Mobile'));
        $fs->fields->add(new Kwf_Form_Field_Select('private_mobile_country', trl('Country')))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('private_mobile_pre', trl('Area Code')));
        $fs->fields->add(new Kwf_Form_Field_TextField('private_mobile', trl('Number')));
        $tab->fields->add($fs);

        $fs = new Kwf_Form_Container_FieldSet(trl('Fax'));
        $fs->fields->add(new Kwf_Form_Field_Select('private_fax_country', trl('Country')))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Kwf_Form_Field_TextField('private_fax_pre', trl('Area Code')));
        $fs->fields->add(new Kwf_Form_Field_TextField('private_fax', trl('Number')));
        $tab->fields->add($fs);

    }
}
