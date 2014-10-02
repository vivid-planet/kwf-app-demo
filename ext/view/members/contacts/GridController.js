Ext.define('App.view.members.contacts.GridController', {
    //extend: 'Densa.grid.PanelController',
    extend: 'Ext.app.ViewController',
    alias: 'controller.members.contacts.grid',
    requires: [
        'App.view.members.contacts.EditWindow',
//         'Densa.grid.controller.EditWindow'
    ],
    init: function() {
        this.callParent(arguments);
        /*
        new Densa.grid.controller.EditWindow({
            grid: this.view,
            editWindow: new App.view.members.contacts.EditWindow()
        });
        */
        this.editWindow = new App.view.members.contacts.EditWindow({
            session: {
                parent: this.getView().lookupSession()
            },
            viewModel: {
                //parent: this.getView().lookupViewModel()
            }
        });
        this.editWindow.on('save', this.onSaveClick, this);

        this.getView().on('celldblclick', function(grid, td, cellIndex, row, tr, rowIndex, e) {
            this.editWindow.getViewModel().linkTo('record', row);
            this.editWindow.show();
        }, this);
    },

    onSaveClick: function()
    {
        var row = this.editWindow.getViewModel().get('record');
        if (row.phantom) {
            this.getView().getStore().add(row);
        }
    },

    onAddClick: function()
    {
        var row = this.getView().getStore().model.create();
        this.editWindow.getViewModel().set('record', row);
        this.editWindow.show();
    },

    onDeleteClick: function()
    {
        Ext.each(this.getView().getSelection(), function(i) {
            i.drop();
        }, this);
        var batch = this.getView().lookupSession().getSaveBatch();
        if (batch) batch.start();
    }
});
