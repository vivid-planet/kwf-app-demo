var Members = Ext.extend(Ext.Panel,
{
    initComponent : function(test)
    {
        var form = new Vps.Auto.FormPanel({
            controllerUrl   : '/member',
            region          : 'center'
        });

        var contacts = new Vps.Auto.GridPanel({
            controllerUrl   : '/member-contacts',
            region          : 'south',
            height          : 200,
            resizable       : true,
            split           : true,
            collapsible     : true,
            title           : 'Kontakte'
        });

        var grid = new Vps.Auto.GridPanel({
            controllerUrl   : '/members',
            region          : 'west',
            width           : 300,
            resizable       : true,
            split           : true,
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
