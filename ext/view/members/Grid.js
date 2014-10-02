Ext.define('App.view.members.Grid', {
    extend: 'Densa.grid.Panel',
    alias: 'widget.members.grid',
    requires: [
        'Densa.defaultButton.Add', 'Densa.defaultButton.ExportCsv', 'Ext.form.field.Text',
        'Ext.toolbar.TextItem', 'Ext.toolbar.Separator', 'Ext.toolbar.Paging',
        'App.view.members.GridController',
        'Densa.defaultButton.Delete',
    ],
    controller: 'members.grid',
    tbar: [
        { xtype: 'densa.defaultButton.add' },
        { xtype: 'densa.defaultButton.exportCsv' },
        { xtype: 'densa.defaultButton.delete' },
        { xtype: 'tbseparator' },
        trl('Filter:'),
        {
            xtype: 'textfield',
            itemId: 'text',
            width: 150,
            name: 'query',
            value: 'a'
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
