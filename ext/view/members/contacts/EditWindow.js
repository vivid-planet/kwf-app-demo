Ext.define('App.view.members.contacts.EditWindow', {
//     extend: 'Densa.editWindow.Window',
    extend: 'Densa.editWindow.Window',
    requires: [
        'App.view.members.contacts.Form',
        'App.view.members.contacts.EditWindowController'
    ],
//     controller: 'App.view.members.contacts.EditWindowController',
    controller: 'members.contacts.editWindow',
    stateId: 'MembersContactsEditWindow',

    initComponent: function()
    {
        this.form = Ext.create('App.view.members.contacts.Form', {
            stateId: this.stateId+'Form'
        });
        this.items = [this.form];
        this.callParent(arguments);
    }
});
