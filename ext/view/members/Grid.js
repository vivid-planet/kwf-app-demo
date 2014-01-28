Ext4.define('App.view.members.Grid', {
    extend: 'Ext.grid.Panel',
    requires: ['Kwf.Ext4.Controller.Action.Grid.Add', 'Kwf.Ext4.Controller.Action.Grid.Delete'],
    tbar: [
        new Kwf.Ext4.Controller.Action.Grid.Add(),
        new Kwf.Ext4.Controller.Action.Grid.Delete()
    ],
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
