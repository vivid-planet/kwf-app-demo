Ext4.define('App.model.MemberContact', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.UuidGenerator'],
    idProperty: 'id',
    idgen: 'uuid',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'subject', type: 'string'},
        {name: 'text', type: 'string'},
        {name: 'member_id', type: 'string'},
    ],

    belongsTo: ['App.model.Member'],

    proxy: {
        type: 'rest',
        url: '/api/member-contacts',

        reader: {
            type: 'json',
            root: 'data'
        },

        writer: {
            type: 'json',
            nameProperty: 'mapping',
            writeAllFields: false
        }
    }
});
