EclecticEar.Views.UsersIndex = Backbone.CompositeView.extend ({
  template: JST['users/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var view = this.template({users: this.collection})
    this.$el.html(view);

    return this;
  }

});
