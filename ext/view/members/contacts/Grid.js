Ext4.define('App.view.members.contacts.Grid', {
    extend: 'Ext.grid.Panel',
    requires: ['Kwf.Ext4.Controller.Action.Add', 'Kwf.Ext4.Controller.Action.Delete', 'App.view.members.contacts.GridController'],
    controller: 'App.view.members.contacts.GridController',
    tbar: [
        new Kwf.Ext4.Controller.Action.Add(),
        new Kwf.Ext4.Controller.Action.Delete()
    ],
    columns: [{
        text: trl('Subject'),
        dataIndex: 'subject'
    },{
        text: trl('Text'),
        dataIndex: 'text'
    }]
});
