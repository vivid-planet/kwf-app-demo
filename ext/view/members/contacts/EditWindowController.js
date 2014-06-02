Ext4.define('App.view.members.contacts.EditWindowController', {
    extend: 'Kwf.Ext4.ViewController.EditWindow',

    autoSync: true,

    control: {
        form: 'form'
    },

    init: function()
    {
        this.bindable = this.getForm();
        this.callParent(arguments);
    }
});
