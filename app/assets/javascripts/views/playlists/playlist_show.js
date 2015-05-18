EclecticEar.Views.PlaylistShow = Backbone.CompositeView.extend ({
  template: JST['playlists/show'],
  className: 'playlist-show group',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.addSongs);
  },

  render: function() {
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
    var songView = new EclecticEar.Views.SongPlaylistShow({model: song});
    this.addSubview(".playlist-songs", songView);
  }

});
