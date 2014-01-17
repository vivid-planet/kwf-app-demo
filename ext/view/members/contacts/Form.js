Ext4.define('App.view.members.contacts.Form', {
    extend: 'Ext.form.Panel',
    uses: [ 'Ext.form.field.Text' ],
    stateful: true,
    stateId: 'MemberContactsForm',
    bodyPadding: 10,
    items: [{
        xtype: 'textfield',
        name: 'subject',
        fieldLabel: trl('Subject')
    },{
        xtype: 'textarea',
        name: 'text',
        fieldLabel: trl('Text')
    }]
});
