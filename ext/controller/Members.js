Ext4.define('App.controller.Members', {
    extend: 'Kwf.Ext4.App.MainController',

    requires: [
        'App.view.Members',
        'App.store.Members',
        'App.model.Member'
    ],

    views: [
        'Members',
    ],

    models: [
        'Member'
    ],

    stores: [
        'Members',
    ],

    controller: [
    ],

    onLaunch: function()
    {
        this.callParent(arguments);
    },

    init: function()
    {
        this.callParent(arguments);

        this.getMembersStore().load();

        this.mainPanel = this.getView('Members').create({
            membersStore: this.getMembersStore()
        });

        var grid = this.mainPanel.down('grid');
        var form = this.mainPanel.down('form');
        form.disable();
        grid.down('button#delete').disable();
        form.down('button#save').disable();

        grid.on('selectionchange', function(model, rows) {
            if (rows[0]) {
                var row = rows[0];
                form.getForm().loadRecord(row);
                form.enable();
                grid.down('button#delete').enable();
                form.down('button#save').enable();
            } else {
                form.disable();
                grid.down('button#delete').disable();
                form.down('button#save').disable();
            }
        }, this);
        grid.on('beforedeselect', function(sm, record) {
            if (!form.getForm().isValid()) {
                return false;
            }
        }, this);

        form.down('button#save').on('click', function() {
            var row = form.getRecord();
            form.updateRecord(row);
            grid.getStore().sync();
        }, this);
        grid.down('button#delete').on('click', function() {
            var sm = grid.getSelectionModel();
            grid.getStore().remove(sm.getSelection());
            grid.getStore().sync();
        }, this);
        grid.down('button#add').on('click', function() {
            if (!form.getForm().isValid()) {
                return false;
            }
            var s = grid.getStore();
            var row = s.model.create();
            s.add(row);
            grid.getSelectionModel().select(row);

            form.down('[name=firstname]').focus();
        }, this);
    }
});
