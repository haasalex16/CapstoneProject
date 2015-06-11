window.EclecticEar = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.currentUser = new EclecticEar.Models.CurrentUser();
    this.currentUser.fetch();

    // this.currentUser = new EclecticEar.Models.User({id: options.current_user_id});
    this.mediaView = new EclecticEar.Views.Media();
    this.header = new EclecticEar.Views.Header({ el: "#header" });
    $('.backdrop').append(this.mediaView.render().$el);

    new EclecticEar.Routers.Router({$rootEl: $('#main')});
    Backbone.history.start();
  }
};
