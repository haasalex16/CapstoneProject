EclecticEar.Views.SongPlaylistShow = Backbone.CompositeView.extend({
  template: JST['songs/playlist_show'],

  tagName: 'li',

  className: 'playlist-song-show group',

  render: function() {
    var view = this.template({song: this.model, currentUser: EclecticEar.currentUser});
    this.$el.html(view);

    return this;
  },


});
