Ext4.define('App.view.Members', {
    extend: 'Ext.panel.Panel',
    uses: [
        'App.view.members.Grid',
        'App.view.members.Form',
        'App.view.members.contacts.Grid'
    ],
    requires: [ 'App.view.MembersController' ],
    controller: 'App.view.MembersController',
    layout: 'border',
    stateid: 'Members',
    stateful: true,
    initComponent: function() {
        this.items = [Ext4.create('App.view.members.Grid', {
            region: 'west',
            width: 300,
            border: false,
            itemId: 'members',
            split: true,
            stateful: true,
            stateId: this.stateId+'Grid'
        }), {
            region: 'center',
            layout: 'border',
            items: [
                Ext4.create('App.view.members.Form', {
                    region: 'center',
                    bodyPadding: '10',
                    stateful: true,
                    stateId: this.stateId+'Form'
                }),
                Ext4.create('App.view.members.contacts.Grid', {
                    region: 'south',
                    itemId: 'contacts',
                    height: 200,
                    split: true,
                    stateful: true,
                    stateId: this.stateId+'ContactsGrid'
                })
            ]
        }];

        this.callParent(arguments);
    }
});
