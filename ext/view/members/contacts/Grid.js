Ext4.define('App.view.members.contacts.Grid', {
    extend: 'Ext.grid.Panel',
    requires: ['Kwf.Ext4.Controller.Action.Grid.Add', 'Kwf.Ext4.Controller.Action.Grid.Delete'],
    tbar: [
        new Kwf.Ext4.Controller.Action.Grid.Add(),
        new Kwf.Ext4.Controller.Action.Grid.Delete()
    ],
    columns: [{
        text: trl('Subject'),
        dataIndex: 'subject'
    },{
        text: trl('Text'),
        dataIndex: 'text'
    }]
});
