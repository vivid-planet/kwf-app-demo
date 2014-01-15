Ext4.define('App.model.Member', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.UuidGenerator'],
    idProperty: 'id',
    idgen: 'uuid',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'firstname', type: 'string'},
        {name: 'lastname', type: 'string'},
        {name: 'title', type: 'string'}
    ],

    proxy: {
        type: 'rest',
        url: '/api/members',

        reader: {
            type: 'json',
            root: 'data'
        },

        writer: {
            type: 'json',
            nameProperty: 'mapping'
        }
    }
});
