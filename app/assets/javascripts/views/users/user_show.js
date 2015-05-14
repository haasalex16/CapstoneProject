EclecticEar.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var view = this.template({user: this.model});
    this.$el.html(view);

    return this;
  }
});
