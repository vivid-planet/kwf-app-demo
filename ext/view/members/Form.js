Ext4.define('App.view.members.Form', {
    extend: 'Ext.form.Panel',
    uses: [ 'Ext.form.field.Text' ],
    requires: ['Kwf.Ext4.Controller.Action.Form.Save'],
    tbar: [
        new Kwf.Ext4.Controller.Action.Form.Save()
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
