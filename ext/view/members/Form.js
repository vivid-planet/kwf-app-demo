Ext4.define('App.view.members.Form', {
    extend: 'Ext.form.Panel',
    uses: [ 'Ext.form.field.Text' ],
    requires: [
        'Densa.defaultButton.Save',
        'Densa.defaultButton.Delete',
        'App.view.members.FormController'
    ],
    controller: 'App.view.members.FormController',
    tbar: [
        new Densa.defaultButton.Save(),
        new Densa.defaultButton.Delete()
    ],
    items: [{
        xtype: 'textfield',
        name: 'firstname',
        fieldLabel: trl('Firstname')
    },{
        xtype: 'textfield',
        name: 'lastname',
        fieldLabel: trl('Lastname')
    },{
        xtype: 'textfield',
        name: 'title',
        fieldLabel: trl('Title')
    }]
});
