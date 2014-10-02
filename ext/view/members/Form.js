Ext.define('App.view.members.Form', {
    extend: 'Densa.form.Panel',
    alias: 'widget.members.form',
    uses: [ 'Ext.form.field.Text' ],
    requires: [
        'App.view.members.FormModel',
        'App.view.members.FormController'
    ],
    viewModel: {
        type: 'members.form'
    },
    controller: 'members.form',
    items: [{
        xtype: 'textfield',
        name: 'firstname',
        fieldLabel: trl('Firstname'),
        bind: '{record.firstname}'
    },{
        xtype: 'textfield',
        name: 'lastname',
        fieldLabel: trl('Lastname'),
        bind: '{record.lastname}'
    },{
        xtype: 'textfield',
        name: 'title',
        fieldLabel: trl('Title'),
        bind: '{record.title}'
    },{
        xtype: 'textfield',
        name: 'email',
        fieldLabel: trl('E-Mail'),
        bind: '{record.email}'
    }]
});
