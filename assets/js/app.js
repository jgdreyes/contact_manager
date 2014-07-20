var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.navigate = function(route, options) {
  options || (options = {});
  Backbone.history.navigate(route, options);
};

ContactManager.getCurrentRoute = function() {
  return Backbone.history.fragment;
};

ContactManager.isCurrentRoute = function(route) {
  return ContactManager.getCurrentRoute() === route;
}

ContactManager.on("initialize:after", function() {
  if (Backbone.history) {
    Backbone.history.start();

    if (this.isCurrentRoute("")) {
      ContactManager.trigger("contacts:list");
    }
  }
});
