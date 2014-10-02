Ext.define('App.view.MembersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.members',
    stores: {
        members: {
            model: 'Member',
            autoLoad: true,
            remoteFilter: true,
            session: true
        }
    }
});
