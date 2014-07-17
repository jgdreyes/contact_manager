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

        ContactManager.mainRegion.show(contactsListView);
      }
    }
  }
);
