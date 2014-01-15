Ext4.define('App.view.members.Form', {
    extend: 'Ext.form.Panel',
    uses: [ 'Ext.form.field.Text' ],
    tbar: [{
        text: trl('Save'),
        itemId: 'save'
    }],
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
