Ext4.define('App.store.MemberContacts', {
    extend: 'Ext.data.Store',
    requires: [ 'App.model.MemberContact' ],
    model: 'App.model.MemberContact',
    remoteFilter: true
});
