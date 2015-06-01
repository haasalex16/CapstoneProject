EclecticEar.Views.PlaylistShow = Backbone.CompositeView.extend ({
  template: JST['playlists/show'],
  className: 'playlist-show group',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click .play-button': 'playAll'
  },

  render: function() {
    var view = this.template({playlist: this.model});
    this.$el.html(view);

    this.model.songs().each(this.removeSongView.bind(this));
    this.model.songs().each(this.addSongView.bind(this));
    return this;
  },

  addSongView: function(song) {
    var songView = new EclecticEar.Views.SongPlaylistShow({
      model: song,
      collection: this.model.songs()});
    this.addSubview(".playlist-songs", songView);
  },

  removeSongView: function(song) {
    this.removeModelSubview(".playlist-songs", song)
  },

  playAll: function() {
    EclecticEar.mediaView.queue = this.model._songs.models;
    EclecticEar.mediaView.idx = 0;
    EclecticEar.mediaView.play(this.model._songs.models[0]);
  }
});
