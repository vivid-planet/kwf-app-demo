Ext4.define('App.controller.Members', {
    extend: 'Kwf.Ext4.App.MainController',

    requires: [
        'App.view.Members',
        'App.store.Members'
    ],

    views: [
        'Members'
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

        this.mainPanel = this.getView('Members').create();
        this.mainPanel.down('grid#members').bindStore(this.getMembersStore());
    }
});
