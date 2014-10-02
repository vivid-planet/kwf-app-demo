Ext.define('App.model.Member', {
    extend: 'App.model.Abstract',
    requires: [
        'App.model.MemberContact',
        'Ext.data.validator.Presence',
        'Ext.data.validator.Email'
    ],
    fields: [
//         {name: 'id', type: 'string'},
//         {name: 'firstname', type: 'string'},
        {name: 'firstname', type: 'string', validators: [ { type: 'presence' } ] },
        {name: 'lastname', type: 'string', validators: [ { type: 'presence' } ] },
        {name: 'title', type: 'string'},
        {name: 'email', type: 'string' /*, validators: [ 'email']*/ },
        {name: 'count_contacts', type: 'int', persist: false}
    ]
});
