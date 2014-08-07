Ext4.define('App.view.members.contacts.EditWindowController', {
//     extend: 'Densa.editWindow.WindowController',
    extend: 'Ext.app.ViewController',
    alias: 'controller.members.contacts.editWindow',


    autoSync: true,

    control: {
        form: 'form'
    },

    init: function()
    {
//         this.bindable = this.getForm();
        this.callParent(arguments);
    },

    onSaveClick: function()
    {
        this.getView().getSession().save();
        var batch = this.getView().getSession().getParent().getSaveBatch();
        if (batch) {
            batch.start();
        }

        this.getView().hide();
    },

    onCancelClick: function()
    {
        this.getView().hide();
    }
});
