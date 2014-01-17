Ext4.define('App.view.members.contacts.EditWindow', {
    extend: 'Ext.window.Window',
    uses: [ 'App.view.members.contacts.Form' ],
    layout: 'fit',
    border: false,
    modal: true,
    closeAction: 'hide',
    stateful: true,
    stateId: 'MembersContactsEditWindow',
    bbar: ['->', {
        text: trlKwf('Save'),
        itemId: 'save'
    }, {
        text: trlKwf('Cancel'),
        itemId: 'cancel'
    }],
    initComponent: function()
    {
        this.items = [
            Ext4.create('App.view.members.contacts.Form', {
                stateId: this.stateId+'Form'
            })
        ];
        this.callParent(arguments);
    }
});
