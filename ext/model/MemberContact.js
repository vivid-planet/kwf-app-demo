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

    belongsTo: [
        {
            name: 'member',
            instanceName: 'member',
            model: 'App.model.Member',
            foreignKey: 'member_id',
            getterName: 'getMember',
            setterName: 'setMember'
        }
    ],

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
