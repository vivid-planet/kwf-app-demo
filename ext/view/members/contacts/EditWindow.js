Ext4.define('App.view.members.contacts.EditWindow', {
    extend: 'Kwf.Ext4.View.EditWindow',
    requires: [
        'App.view.members.contacts.Form',
        'App.view.members.contacts.EditWindowController'
    ],
    controller: 'App.view.members.contacts.EditWindowController',
    stateId: 'MembersContactsEditWindow',
    initComponent: function()
    {
        this.form = Ext4.create('App.view.members.contacts.Form', {
            stateId: this.stateId+'Form'
        });
        this.items = [this.form];
        this.callParent(arguments);
    }
});
