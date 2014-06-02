Ext4.define('App.view.members.contacts.GridController', {
    extend: 'Kwf.Ext4.ViewController.Grid',
    requires: [
        'App.view.members.contacts.EditWindow',
        'Kwf.Ext4.Controller.Grid.EditWindow'
    ],
    init: function() {
        this.callParent(arguments);

        new Kwf.Ext4.Controller.Grid.EditWindow({
            grid: this.view,
            editWindow: new App.view.members.contacts.EditWindow()
        });
    }
});
