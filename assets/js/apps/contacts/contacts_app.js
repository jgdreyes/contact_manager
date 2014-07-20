ContactManager.module(
  "ContactsApp",
  function(ContactsApp, ContactManager, Backbone, Marionette, $, _) {
    var API;
    ContactsApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        "contacts": "listContacts"
      }
    });

    API = {
      listContacts: function() {
        ContactsApp.List.Controller.listContacts();
      }
    };

    ContactManager.on("contacts:list", function() {
      ContactManager.navigate("contacts");
      API.listContacts();
    });

    ContactManager.addInitializer(function() {
      new ContactsApp.Router({
        controller: API
      });
    });
  }
);
