Ext4.define('App.model.Member', {
    extend: 'App.model.Abstract',
    requires: [
        'App.model.MemberContact',
        'Ext.data.validator.Length',
        'Ext.data.validator.Email'
    ],
    fields: [
//         {name: 'id', type: 'string'},
        {name: 'firstname', type: 'string'},
        {name: 'lastname', type: 'string', validators: [ { type: 'length', 'min': 1 } ] },
        {name: 'title', type: 'string'},
        {name: 'email', type: 'string' /*, validators: [ 'email']*/ },
        {name: 'count_contacts', type: 'int', persist: false}
    ]
});
