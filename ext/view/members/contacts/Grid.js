Ext4.define('App.view.members.contacts.Grid', {
    extend: 'Ext.grid.Panel',
    requires: ['Densa.defaultButton.Add', 'Densa.defaultButton.Delete', 'App.view.members.contacts.GridController'],
//     controller: 'App.view.members.contacts.GridController',
    controller: 'members.contacts.grid',
    alias: 'widget.members.contacts.grid',
    tbar: [
        new Densa.defaultButton.Add({
            listeners: {
                click: 'onAddClick'
            }
        }),
        new Densa.defaultButton.Delete({
            listeners: {
                click: 'onDeleteClick'
            }
        })
    ],
    columns: [{
        text: trl('Subject'),
        dataIndex: 'subject'
    },{
        text: trl('Text'),
        dataIndex: 'text'
    }]
});
