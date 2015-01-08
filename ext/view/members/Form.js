Ext4.define('App.view.members.Form', {
    extend: 'Ext.form.Panel',
    uses: [ 'Ext.form.field.Text' ],
    requires: [
        'Densa.defaultButton.Save',
        'Densa.defaultButton.Delete',
        'App.view.members.FormController',
        'Kwf.Ext4.form.field.File'
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
    },{
        xtype: 'kwf.filefield',
        name: 'picture_id',
        fieldLabel: trl('Photo')
    }]
});
