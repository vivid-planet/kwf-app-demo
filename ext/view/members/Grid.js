Ext4.define('App.view.members.Grid', {
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
            text: trl('Lastname'),
            dataIndex: 'lastname',
            width: 60
        },{
            text: trl('Firstname'),
            dataIndex: 'firstname',
            width: 60
        }];

        this.callParent(arguments);
    }
});
