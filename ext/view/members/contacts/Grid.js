Ext4.define('App.view.members.contacts.Grid', {
    extend: 'Ext.grid.Panel',
    requires: ['Densa.action.Add', 'Densa.action.Delete', 'App.view.members.contacts.GridController'],
    controller: 'App.view.members.contacts.GridController',
    tbar: [
        new Densa.action.Add(),
        new Densa.action.Delete()
    ],
    columns: [{
        text: trl('Subject'),
        dataIndex: 'subject'
    },{
        text: trl('Text'),
        dataIndex: 'text'
    }]
});
