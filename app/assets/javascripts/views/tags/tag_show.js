EclecticEar.Views.TagShow = Backbone.CompositeView.extend ({
  template: JST['tags/show'],

  render: function() {
    var view = this.template({tag: this.model});
    this.$el.html(view);

    var songs = new EclecticEar.Views.SongsIndex({collection: this.model.songs()});
    this.$('.tagged-songs').html(songs.render().$el);

    return this;
  }
});
