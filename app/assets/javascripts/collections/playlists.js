EclecticEar.Collections.Playlists = Backbone.Collection.extend({
  url: '/api/playlists',
  model: EclecticEar.Models.Playlist,

  getOrFetch: function(id) {
    var playlist = this.get(id);

    if (playlist) {
      playlist.fetch();
    } else {
      playlist = new EclecticEar.Models.Playlist({id: id});
      playlist.fetch({
        success: function() {
          this.add(playlist);
        }.bind(this)
      });
    }

    return playlist;
  }

});

EclecticEar.Collections.userPlaylists = new EclecticEar.Collections.Playlists ()
