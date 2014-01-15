Ext4.define('App.view.Members', {
    extend: 'Ext.panel.Panel',
    uses: [ 'App.view.members.Grid', 'App.view.members.Form' ],
    layout: 'border',
    initComponent: function() {
        this.items = [Ext4.create('App.view.members.Grid', {
            region: 'west',
            width: 200,
            border: false,
            store: this.membersStore
        }), Ext4.create('App.view.members.Form', {
            region: 'center',
            bodyPadding: '10'
        })];

        this.callParent(arguments);
    }
});
