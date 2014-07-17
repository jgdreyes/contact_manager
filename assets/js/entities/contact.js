ContactManager.module(
  "Entities",
  function(Entities, ContactManager, Backbone, Marionette, $, _){
    var contacts, initializeContacts, API;

    Entities.Contact = Backbone.Model.extend({});

    Entities.ContactCollection = Backbone.Collection.extend({
      model: Entities.Contact,
      comparator: "firstName"
    });

    initializeContacts = function() {
      contacts = new Entities.ContactCollection([
        { id: 1, firstName: "Bob", lastName: "Bringham", phoneNumber: "555-0163" },
        { id: 2, firstName: "Alice", lastName: "Arten", phonNumber: "555-0184" },
        { id: 3, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }
      ]);
    };

    API = {
      getContactEntities: function() {
        if (contacts === undefined) {
          initializeContacts();
        }
        return contacts;
      }
    };

    ContactManager.reqres.setHandler("contact:entities", function() {
      return API.getContactEntities();
    });
  }
);
