Ext4.define('App.view.members.Grid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Densa.defaultButton.Add',
        'Densa.defaultButton.ExportCsv',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Paging',
        'App.view.members.GridController'
    ],
    controller: 'App.view.members.GridController',
    tbar: [
        new Densa.defaultButton.Add(),
        new Densa.defaultButton.ExportCsv(),
        { xtype: 'tbseparator' },
        trl('Filter:'),
        {
            xtype: 'textfield',
            itemId: 'text',
            width: 150,
            name: 'query'
        }
    ],
    viewConfig: {
        preserveScrollOnRefresh: true
    },
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        displayInfo: false
    }],
    columns: [{
        text: trl('Lastname'),
        dataIndex: 'lastname',
        width: 120
    },{
        text: trl('Firstname'),
        dataIndex: 'firstname',
        flex: true
    },{
        text: trl('Contacts'),
        dataIndex: 'count_contacts',
        width: 50
    }]
});
