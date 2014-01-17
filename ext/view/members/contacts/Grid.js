Ext4.define('App.view.members.contacts.Grid', {
    extend: 'Ext.grid.Panel',
    tbar: [{
        text: trl('Hinzufügen'),
        itemId: 'add'
    },{
        text: trl('Löschen'),
        itemId: 'delete'
    }],
    initComponent: function()
    {
        this.columns = [{
            text: trl('Subject'),
            dataIndex: 'subject'
        },{
            text: trl('Text'),
            dataIndex: 'text'
        }];

        this.callParent(arguments);
    }
});
