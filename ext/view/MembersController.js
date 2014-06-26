Ext4.define('App.view.MembersController', {
    extend: 'Deft.mvc.ViewController',
    requires: [
        'Densa.grid.controller.Bind',
        'Densa.mvc.bindable.Multiple',
        'Densa.mvc.bindable.Grid'
    ],
    control: {
        form: 'form',
        grid: '> grid',
        contactsGrid: '#contacts'
    },
    init: function() {
        this.callParent(arguments);
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
    }
});
