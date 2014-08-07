Ext4.define('App.model.MemberContact', {
    extend: 'App.model.Abstract',
    fields: [
//         {name: 'id', type: 'string'},
        {name: 'subject', type: 'string'},
        {name: 'text', type: 'string'},
        {name: 'member_id', type: 'string', reference: 'Member'},
    ],
        proxy: {
            url: '/api/member-contacts',
        }
});
