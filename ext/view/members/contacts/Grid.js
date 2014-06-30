Ext4.define('App.view.members.contacts.Grid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Densa.defaultButton.Add',
        'Densa.defaultButton.Delete',
        'App.view.members.contacts.GridController'
    ],
    controller: 'App.view.members.contacts.GridController',
    tbar: [
        new Densa.defaultButton.Add(),
        new Densa.defaultButton.Delete()
    ],
    columns: [{
        text: trl('Subject'),
        dataIndex: 'subject'
    },{
        text: trl('Text'),
        dataIndex: 'text'
    }]
});
