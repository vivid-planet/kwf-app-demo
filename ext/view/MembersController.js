Ext4.define('App.view.MembersController', {
    extend: 'Deft.mvc.ViewController',
    requires: [
        'Kwf.Ext4.Controller.Binding.BindableToGrid',
        'Kwf.Ext4.Controller.Bindable.Multiple',
        'Kwf.Ext4.Controller.Bindable.Grid'
    ],
    control: {
        form: 'form',
        grid: '> grid',
        contactsGrid: '#contacts'
    },
    init: function() {
        this.callParent(arguments);
        new Kwf.Ext4.Controller.Binding.BindableToGrid({
            grid: this.getGrid(),
            bindable: new Kwf.Ext4.Controller.Bindable.Multiple({
                items: [
                    this.getForm(),
                    new Kwf.Ext4.Controller.Bindable.Grid({
                        grid: this.getContactsGrid(),
                        relation: 'contacts'
                    })
                ]
            })
        });
    }
});
