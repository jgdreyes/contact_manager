var ContactManager = new Marionette.Application();
ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.Contact = Backbone.Model.extend({});

ContactManager.ContactView = Marionette.ItemView.extend({
  template: "#contact-template"
});

ContactManager.on("initialize:after", function() {
  var alice, aliceView;

  alice = new ContactManager.Contact({
    firstName: "Alice",
    lastName: "Arten",
    phoneNumber: "555-0184"
  });

  aliceView = new ContactManager.ContactView({
    model: alice
  });

  ContactManager.mainRegion.show(aliceView);
});

ContactManager.start();
