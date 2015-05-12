window.EclecticEar = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new EclecticEar.Routers.Router({$rootEl: $('#main')});
    Backbone.history.start();
  }
};
