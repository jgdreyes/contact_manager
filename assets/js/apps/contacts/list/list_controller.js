ContactManager.module(
  "ContactsApp.List",
  function(List, ContactManager, Backbone, Marionette, $, _) {
    List.Controller = {
      listContacts: function() {
        var contacts, contactsListView;

        contacts = ContactManager.request("contact:entities");

        contactsListView = new List.Contacts({
          collection: contacts
        });

        contactsListView.on("itemview:contact:show", function(childView, model) {
          ContactManager.ContactsApp.Show.Controller.showContact(model);
        })

        contactsListView.on("itemview:contact:delete", function(childView, model) {
          contacts.remove(model);
        });

        ContactManager.mainRegion.show(contactsListView);
      }
    }
  }
);
