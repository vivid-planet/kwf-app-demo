Ext4.define('App.view.Members', {
    extend: 'Ext.panel.Panel',
    requires: [
        'App.view.MembersController',
        'App.view.MembersModel',

        'App.view.members.Grid',
        'App.view.members.Form',
        'App.view.members.contacts.Grid',
        'Ext.tab.Panel',
        'Densa.defaultButton.Save',
        'Densa.defaultButton.Delete'
    ],
    controller: 'members',
    viewModel: {
        type: 'members'
    },
    layout: 'border',
    stateid: 'Members',
    stateful: true,
    session: true,
    initComponent: function() {
        this.items = [{
            xtype: 'members.grid',
            region: 'west',
            width: 400,
            border: false,
            reference: 'membersGrid',
            split: true,
            resizeable: true,
            stateful: true,
            stateId: this.stateId+'Grid',
            bind: '{members}'
        }, {
            region: 'center',
            layout: 'border',
            disabled: true,
            bind: {
                disabled: '{!membersGrid.selection}'
            },
            items: [{
                xtype: 'tabpanel',
                region: 'center',
                tbar: [
                    { xtype: 'densa.defaultButton.save' },
                    { xtype: 'densa.defaultButton.delete' }
                ],
                session: true,
                items: [{
                    title: trl('Member'),
                    xtype: 'members.form',
                    bodyPadding: '10',
                    reference: 'memberForm',
                    stateful: true,
                    stateId: this.stateId+'Form',
                    bind: '{membersGrid.selection}'
                },{
                    title: trl('Test'),
                    html: 'Test'
                }]
            },{
                xtype: 'members.contacts.grid',
                region: 'south',
                reference: 'contactsGrid',
                height: 200,
                split: true,
                stateful: true,
                stateId: this.stateId+'ContactsGrid',
                bind: '{membersGrid.selection.memberContacts}'
            }]
        }];

        this.callParent(arguments);
    }
});
