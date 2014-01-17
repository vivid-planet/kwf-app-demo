Ext4.define('App.controller.Members', {
    extend: 'Kwf.Ext4.App.MainController',

    requires: [
        'App.view.Members',
        'App.store.Members',
        'Kwf.Ext4.Controller.Binding.FormToGrid',
        'Kwf.Ext4.Controller.Binding.GridToGrid',
        'Kwf.Ext4.Controller.Grid',
        'Kwf.Ext4.Controller.GridEditWindow',
        'App.view.members.contacts.EditWindow'
    ],

    views: [
        'Members',
        'members.contacts.EditWindow'
    ],

    models: [
    ],

    stores: [
        'Members',
    ],

    controller: [
    ],

    onLaunch: function()
    {
        this.callParent(arguments);
    },

    init: function()
    {
        this.callParent(arguments);

        this.getMembersStore().load();

        this.mainPanel = this.getView('Members').create();

        this.mainPanel.down('grid#members').bindStore(this.getMembersStore());
        new Kwf.Ext4.Controller.Grid({
            grid: this.mainPanel.down('grid#members')
        });

        new Kwf.Ext4.Controller.Binding.FormToGrid({
            source: this.mainPanel.down('grid#members'),
            form: this.mainPanel.down('form')
        });

        new Kwf.Ext4.Controller.Grid({
            grid: this.mainPanel.down('grid#contacts')
        });
        new Kwf.Ext4.Controller.Binding.GridToGrid({
            source: this.mainPanel.down('grid#members'),
            grid: this.mainPanel.down('grid#contacts'),
            relation: 'contacts'
        });

        var editWindow = this.getView('members.contacts.EditWindow').create();
        new Kwf.Ext4.Controller.GridEditWindow({
            grid: this.mainPanel.down('grid#contacts'),
            editWindow: editWindow
        });
    }
});
