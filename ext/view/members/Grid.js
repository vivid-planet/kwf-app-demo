Ext4.define('App.view.members.Grid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Kwf.Ext4.Controller.Action.Add', 'Ext.form.field.Text',
        'Ext.toolbar.TextItem', 'Ext.toolbar.Separator', 'Ext.toolbar.Paging'
    ],
    tbar: [
        new Kwf.Ext4.Controller.Action.Add(),
        { xtype: 'tbseparator' },
        trl('Filter:'),
        {
            xtype: 'textfield',
            itemId: 'text',
            width: 150,
            name: 'query'
        }
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        displayInfo: false
    }],
    columns: [{
        text: trl('Lastname'),
        dataIndex: 'lastname',
        width: 60
    },{
        text: trl('Firstname'),
        dataIndex: 'firstname',
        width: 60
    }]
});
