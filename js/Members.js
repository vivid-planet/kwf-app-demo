var Members = Ext.extend(Ext.Panel,
{
    initComponent : function(test)
    {
        var form = new Kwf.Auto.FormPanel({
            controllerUrl   : '/member',
            region          : 'center'
        });

        var contacts = new Kwf.Auto.GridPanel({
            controllerUrl   : '/member-contacts',
            region          : 'south',
            height          : 200,
            resizable       : true,
            split           : true,
            collapsible     : true,
            title           : trl('Contacts')
        });

        var grid = new Kwf.Auto.GridPanel({
            controllerUrl   : '/members',
            region          : 'west',
            width           : 300,
            resizable       : true,
            split           : true,
            collapsible     : true,
            title           : trl('Customers'),
            bindings: [form, {
                queryParam: 'member_id',
                item: contacts
            }]
        });

        this.layout = 'border';
        this.items = [grid, {
            layout: 'border',
            region: 'center',
            items: [form, contacts]
        }];
        Members.superclass.initComponent.call(this);
    }
});
