Ext4.define('App.view.members.contacts.GridController', {
    extend: 'Densa.grid.PanelController',
    requires: [
        'App.view.members.contacts.EditWindow',
        'Densa.grid.controller.EditWindow'
    ],
    init: function() {
        this.callParent(arguments);

        new Densa.grid.controller.EditWindow({
            grid: this.view,
            editWindow: new App.view.members.contacts.EditWindow()
        });
    }
});
