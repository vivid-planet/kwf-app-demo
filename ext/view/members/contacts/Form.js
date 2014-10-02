Ext.define('App.view.members.contacts.Form', {
    extend: 'Ext.form.Panel',
    uses: [ 'Ext.form.field.Text' ],
//     requires: [ 'App.view.members.contacts.FormController' ],
//     controller: 'App.view.members.contacts.FormController',
    stateful: true,
    bodyPadding: 10,
    border: false,
    items: [{
        xtype: 'textfield',
        name: 'subject',
        fieldLabel: trl('Subject'),
        bind: '{record.subject}'
    },{
        xtype: 'textarea',
        name: 'text',
        fieldLabel: trl('Text'),
        bind: '{record.text}'
    }]
});
