Ext4.define('App.view.MembersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.members',
    requires: [
//         'Densa.grid.controller.Bind',
//         'Densa.mvc.bindable.Multiple',
//         'Densa.mvc.bindable.Grid'
    ],

    init: function() {
        this.callParent(arguments);
//         console.log(this.lookupReference('membersGrid'));
//         console.log(this.lookupReference('memberForm'));
//         console.log(this.lookupReference('contactsGrid'));
        /*
        new Densa.grid.controller.Bind({
            grid: this.getGrid(),
            bindable: new Densa.mvc.bindable.Multiple({
                items: [
                    this.getForm(),
                    new Densa.mvc.bindable.Grid({
                        grid: this.getContactsGrid(),
                        relation: 'contacts',
                        reloadRowOnSave: true
                    })
                ]
            })
        });
        */
/*
        this.lookupReference('membersGrid').on('selectionchange', function(sm, rows) {
            var vm = this.lookupReference('memberForm').getViewModel();
            if (rows.length) {
                vm.linkTo('currentRow', rows[0]);
            } else {
                vm.set('currentRow', undefined);
            }
        }, this);
*/
    }
});
