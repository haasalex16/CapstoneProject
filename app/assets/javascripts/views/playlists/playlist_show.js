EclecticEar.Views.PlaylistShow = Backbone.CompositeView.extend ({
  template: JST['playlists/show'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var view = this.template({playlist: this.model});
    this.$el.html(view);

    return this;
  }
});
