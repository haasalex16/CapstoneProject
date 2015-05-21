window.EclecticEar = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.currentUser = new EclecticEar.Models.User({id: options.current_user_id});
    this.currentUser.fetch();
    new EclecticEar.Routers.Router({$rootEl: $('#main')});
    Backbone.history.start();
    $('html').addClass('logged-in');
    $('body').addClass('logged-in');
    $('.content').addClass('white');
  }
};
