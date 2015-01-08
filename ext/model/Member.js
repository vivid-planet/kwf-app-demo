// @require Ext.data.association.HasMany
// @require Ext.data.association.BelongsTo

Ext4.define('App.model.Member', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.UuidGenerator',
        'App.model.MemberContact',
        'Kwf.Ext4.model.Uploads'
    ],
    idProperty: 'id',
    idgen: 'uuid',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'firstname', type: 'string'},
        {name: 'lastname', type: 'string'},
        {name: 'title', type: 'string'},
        {name: 'picture_id', type: 'string'},
        {name: 'count_contacts', type: 'int', persist: false}
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
    belongsTo: [
        {
            name: 'picture',
            instanceName: 'picture',
            model: 'Kwf.Ext4.model.Uploads',
            foreignKey: 'picture_id',
            getterName: 'getPicture',
            setterName: 'setPicture'
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
