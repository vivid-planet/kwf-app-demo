Ext4.define('App.view.members.contacts.EditWindowController', {
    extend: 'Densa.editWindow.WindowController',

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
