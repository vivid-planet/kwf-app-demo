Ext.define('App.controller.Members', {
    extend: 'Kwf.Ext.App.MainController',

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

    init: function()
    {
        this.callParent(arguments);
        this.mainPanel = this.getView('Members').create();
//         this.mainPanel.lookupReference('membersGrid').bindStore(this.getMembersStore());
    }
});
