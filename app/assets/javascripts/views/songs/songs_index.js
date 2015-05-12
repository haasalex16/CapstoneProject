EclecticEar.Views.SongsIndex = Backbone.View.extend ({
  template: JST['songs/index'],

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var view = this.template({songs: this.collection});
    this.$el.html(view);

    return this;
  }
});
