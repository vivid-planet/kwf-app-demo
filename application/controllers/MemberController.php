<?php
class MemberController extends Vps_Controller_Action_Auto_Form
{
    protected $_buttons = array('save');
    protected $_permissions = array('save', 'add');
    protected $_modelName = 'Members';

    protected function _initFields()
    {
        $tabs = $this->_form->add(new Vps_Form_Container_Tabs());
        $tabs->setActiveTab(0);

        // **** Persönliche Daten
        $tab = $tabs->add();
        $tab->setTitle('Person');

        $fs = new Vps_Form_Container_FieldSet('Name und Geburtsdaten');
        $fs->fields->add(new Vps_Form_Field_TextField('firstname', 'Vorname'))
            ->setAllowBlank(false)
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('lastname', 'Nachname'))
            ->setWidth(300)
            ->setAllowBlank(false);
        $fs->fields->add(new Vps_Form_Field_TextField('title', 'Titel'))
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_Select('sex', 'Anrede'))
            ->setValues(array('male' => 'Herr', 'female' => 'Frau'))
            ->setAllowBlank(false);
        $fs->fields->add(new Vps_Form_Field_DateField('birth_date', 'Geburtsdatum'));
        $fs->fields->add(new Vps_Form_Field_TextField('birth_place', 'Geburtsort'))
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_Checkbox('visible', 'Aktiv'));
        $fs->fields->add(new Vps_Form_Field_File('Picture', 'Foto'));
        $fs->fields->add(new Vps_Form_Field_GoogleMapsField('position', 'Position'));
        

        $tab->fields->add($fs);

        $fs = new Vps_Form_Container_FieldSet('Fremdsprachen');
        $multifields = new Vps_Form_Field_MultiFields('MemberLanguages');
        $multifields->setMinEntries(0);
        $multifields->fields->add(new Vps_Form_Field_PoolSelect('language_id', 'Sprache'))
            ->setPool('Languages')
            ->setAllowBlank(false);
        $fs->fields->add($multifields);
        $tab->fields->add($fs);

        // **** Beruf
        $tab = $tabs->add();
        $tab->setTitle('Beruf');

        $fs = new Vps_Form_Container_FieldSet('Beruf');
        $fs->setLabelWidth(150);
        $fs->fields->add(new Vps_Form_Field_PoolSelect('branch_id', 'Branche Kategorie'))
            ->setPool('Branches')
            ->setListWidth(300)
            ->setWidth(300)
            ->setShowNoSelection(true)
            ->setAllowBlank(true);
        $fs->fields->add(new Vps_Form_Field_TextField('subbranch', 'Branche'))
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('branch_note', 'Zusatz Branche'))
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextArea('business_title', 'Berufsbezeichnung / geschäftliche Stellung'))
            ->setWidth(300)
            ->setHeight(40)
            ->setMaxLength(170);
        $tab->fields->add($fs);

        $fs = new Vps_Form_Container_FieldSet('Firmenadresse');
        $fs->setLabelWidth(150);
        $fs->fields->add(new Vps_Form_Field_TextField('company', 'Firma'))
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('company_address', 'Adresse'))
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('company_postcode', 'PLZ'))
            ->setWidth(100);
        $fs->fields->add(new Vps_Form_Field_TextField('company_city', 'Ort'))
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_SelectCountry('company_country', 'Land'))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('company_email', 'E-Mail'))
            ->setWidth(300)
            ->setVtype('email');
        $fs->fields->add(new Vps_Form_Field_TextField('company_url', 'Url'))
            ->setWidth(300)
            ->setVtype('url');
        $tab->fields->add($fs);

        $fs = new Vps_Form_Container_FieldSet('Telefon');
        $fs->fields->add(new Vps_Form_Field_SelectCountry('company_telephone_country', 'Land'))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('company_telephone_pre', 'Vorwahl'));
        $fs->fields->add(new Vps_Form_Field_TextField('company_telephone', 'Nummer'));
        $tab->fields->add($fs);

        $fs = new Vps_Form_Container_FieldSet('Mobil');
        $fs->fields->add(new Vps_Form_Field_Select('company_mobile_country', 'Land'))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('company_mobile_pre', 'Vorwahl'));
        $fs->fields->add(new Vps_Form_Field_TextField('company_mobile', 'Nummer'));
        $tab->fields->add($fs);

        $fs = new Vps_Form_Container_FieldSet('Fax');
        $fs->fields->add(new Vps_Form_Field_Select('company_fax_country', 'Land'))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('company_fax_pre', 'Vorwahl'));
        $fs->fields->add(new Vps_Form_Field_TextField('company_fax', 'Nummer'));
        $tab->fields->add($fs);


        // **** Privat
        $tab = $tabs->add();
        $tab->setTitle('Privat');

        $fs = new Vps_Form_Container_FieldSet('Adresse');
        $fs->setLabelWidth(130);
        $fs->fields->add(new Vps_Form_Field_TextField('private_address', 'Adresse'))
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('private_postcode', 'PLZ'))
            //->setVtype('num')
            ->setWidth(100);
        $fs->fields->add(new Vps_Form_Field_TextField('private_city', 'Ort'))
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_Select('private_country', 'Land'))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('private_email', 'E-Mail'))
            ->setWidth(300)
            ->setVtype('email');
        $fs->fields->add(new Vps_Form_Field_TextField('private_url', 'Url'))
            ->setWidth(300)
            ->setVtype('url');
        $tab->fields->add($fs);

        $fs = new Vps_Form_Container_FieldSet('Telefon');
        $fs->fields->add(new Vps_Form_Field_Select('private_telephone_country', 'Land'))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('private_telephone_pre', 'Vorwahl'));
        $fs->fields->add(new Vps_Form_Field_TextField('private_telephone', 'Nummer'));
        $tab->fields->add($fs);

        $fs = new Vps_Form_Container_FieldSet('Mobil');
        $fs->fields->add(new Vps_Form_Field_Select('private_mobile_country', 'Land'))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('private_mobile_pre', 'Vorwahl'));
        $fs->fields->add(new Vps_Form_Field_TextField('private_mobile', 'Nummer'));
        $tab->fields->add($fs);

        $fs = new Vps_Form_Container_FieldSet('Fax');
        $fs->fields->add(new Vps_Form_Field_Select('private_fax_country', 'Land'))
            ->setShowNoSelection(true)
            ->setListWidth(300)
            ->setWidth(300);
        $fs->fields->add(new Vps_Form_Field_TextField('private_fax_pre', 'Vorwahl'));
        $fs->fields->add(new Vps_Form_Field_TextField('private_fax', 'Nummer'));
        $tab->fields->add($fs);

    }
}
