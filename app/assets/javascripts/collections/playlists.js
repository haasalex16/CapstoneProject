EclecticEar.Collections.Playlists = Backbone.Collection.extend({
  url: '/api/playlists',
  model: EclecticEar.Models.Playlist
});

EclecticEar.Collections.userPlaylists = new EclecticEar.Collections.Playlists ()
