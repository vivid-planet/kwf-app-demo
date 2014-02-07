Ext4.define('App.controller.Members', {
    extend: 'Kwf.Ext4.App.MainController',

    requires: [
        'App.view.Members',
        'App.store.Members',
        'Kwf.Ext4.Controller.Binding.FormToGrid',
        'Kwf.Ext4.Controller.Binding.GridToGrid',
        'Kwf.Ext4.Controller.Grid',
        'Kwf.Ext4.Controller.GridEditWindow',
        'App.view.members.contacts.EditWindow',
        'Kwf.Ext4.Controller.Binding.BindableToGrid',
        'Kwf.Ext4.Controller.Bindable.Multiple',
        'Kwf.Ext4.Controller.Bindable.Form',
        'Kwf.Ext4.Controller.Bindable.Grid',
        'Kwf.Ext4.Controller.Form'
    ],

    views: [
        'Members',
        'members.contacts.EditWindow'
    ],

    models: [
    ],

    stores: [
        'Members',
    ],

    controller: [
    ],

    onLaunch: function()
    {
        this.callParent(arguments);
    },

    init: function()
    {
        this.callParent(arguments);

        this.getMembersStore().load();

        this.mainPanel = this.getView('Members').create();

        this.mainPanel.down('grid#members').bindStore(this.getMembersStore());
        this.membersGridController = new Kwf.Ext4.Controller.Grid({
            deleteButton: this.mainPanel.down('form #delete'),
            grid: this.mainPanel.down('grid#members')
        });
/*
        new Kwf.Ext4.Controller.Binding.BindableToGrid({
            gridController: this.contactsGridController,
            saveButton: this.mainPanel.down('button#save'),
            deleteButton: this.mainPanel.down('button#delete'),
            bindable: new Kwf.Ext4.Controller.Bindable.Multiple({
                items: [
                    new Kwf.Ext4.Controller.Bindable.Form({
                        formController: new Kwf.Ext4.Controller.Form({
                            form: this.mainPanel.down('form')
                        })
                    }),
                    new Kwf.Ext4.Controller.Bindable.Grid({
                        gridController: new Kwf.Ext4.Controller.Grid({
                            grid: this.mainPanel.down('grid#contacts')
                        }),
                        relation: 'contacts'
                    })
                ]
            })
        });
*/

        this.contactsGridController = new Kwf.Ext4.Controller.Grid({
            grid: this.mainPanel.down('grid#contacts')
        });

        new Kwf.Ext4.Controller.Binding.BindableToGrid({
            gridController: this.membersGridController,
            bindable: new Kwf.Ext4.Controller.Bindable.Form({
                formController: new Kwf.Ext4.Controller.Form({
                    form: this.mainPanel.down('form')
                })
            })
        });
        new Kwf.Ext4.Controller.Binding.BindableToGrid({
            gridController: this.membersGridController,
            bindable: new Kwf.Ext4.Controller.Bindable.Grid({
                gridController: new Kwf.Ext4.Controller.Grid({
                    grid: this.mainPanel.down('grid#contacts')
                }),
                relation: 'contacts'
            })
        });

        var editWindow = this.getView('members.contacts.EditWindow').create();
        new Kwf.Ext4.Controller.GridEditWindow({
            grid: this.mainPanel.down('grid#contacts'),
            editWindow: editWindow
        });
    }
});
