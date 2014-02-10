// @require Ext.data.association.HasMany
// @require Ext.data.association.BelongsTo

Ext4.define('App.model.Member', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.UuidGenerator', 'App.model.MemberContact'],
    idProperty: 'id',
    idgen: 'uuid',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'firstname', type: 'string'},
        {name: 'lastname', type: 'string'},
        {name: 'title', type: 'string'}
    ],
    hasMany: [
        {
            name: 'contacts',
            model: 'App.model.MemberContact',
            primaryKey: 'id',
            foreignKey: 'member_id',
            autoLoad: false,
            storeConfig: { remoteFilter: true }
        }
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
            nameProperty: 'mapping',
            writeAllFields: false
        }
    }
});
