ContactManager.module(
  "ContactsApp.List",
  function(List, ContactManager, Backbone, Marionette, $, _) {
    List.Contact = Marionette.ItemView.extend({
      tagName: "tr",
      template: "#contact-list-item",

      events: {
        "click": "highlightName",

        "click button.js-delete": "deleteClicked"
      },

      highlightName: function(jsEvent) {
        jsEvent.preventDefault();
        this.$el.toggleClass("warning");
      },

      deleteClicked: function(jsEvent) {
        jsEvent.stopPropagation();
        this.trigger("contact:delete", this.model);
      },

      remove: function() {
        var self = this;
        this.$el.fadeOut(function() {
          Marionette.ItemView.prototype.remove.call(self);
        });
      }
    });

    List.Contacts = Marionette.CompositeView.extend({
      tagName: "table",
      className: "table table-hover table-condensed table-bordered",
      template: "#contact-list",
      itemView: List.Contact,
      itemViewContainer: "tbody"
    });
  }
);
