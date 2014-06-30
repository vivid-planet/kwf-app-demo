Ext4.define('App.view.MembersController', {
    extend: 'Deft.mvc.ViewController',
    requires: [
        'Densa.grid.controller.Bind',
        'Densa.mvc.bindable.Multiple',
        'Densa.mvc.bindable.Grid'
    ],
    control: {
        memberForm: true,
        membersGrid: true,
        membersContactsGrid: true
    },
    init: function() {
        this.callParent(arguments);
        new Densa.grid.controller.Bind({
            grid: this.getMembersGrid(),
            bindable: new Densa.mvc.bindable.Multiple({
                items: [
                    this.getMemberForm(),
                    new Densa.mvc.bindable.Grid({
                        grid: this.getMembersContactsGrid(),
                        relation: 'contacts',
                        reloadRowOnSave: true
                    })
                ]
            })
        });
    }
});
