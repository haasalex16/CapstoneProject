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
    this.addSongs();
    var view = this.template({playlist: this.model});
    this.$el.html(view);
    this.attachSubviews();

    return this;
  },

  addSongs: function() {
    this.model.songs().each(function(song){
      this.addSong(song);
    }.bind(this));
  },

  addSong: function(song){
    var songView = new EclecticEar.Views.SongPlaylistShow({model: song, collection: this.model.songs()});
    this.addSubview(".playlist-songs", songView);
  },

  playAll: function() {
    EclecticEar.mediaView.queue = this.model._songs.models;
    EclecticEar.mediaView.idx = 0;
    EclecticEar.mediaView.play(this.model._songs.models[0]);
  }


});
