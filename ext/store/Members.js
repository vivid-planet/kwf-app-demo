Ext4.define('App.store.Members', {
    extend: 'Ext.data.Store',
    requires: [ 'App.model.Member' ],
    model: 'App.model.Member',
    remoteFilter: true,
    remoteSort: true
});
