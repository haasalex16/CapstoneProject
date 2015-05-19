EclecticEar.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  parse: function(response) {
    if (response.songs) {
      this.songs().set(response.songs, {parse: true});
      delete response.songs;
    }
    if (response.followers) {
      this.followers().set(response.followers);
      delete response.followers;
    }
    if (response.playlists) {
      this.playlists().set(response.playlists, {parse: true});
      delete response.playlists;
    }

    return response;
  },

  songs: function() {
    if (!this._songs) {
      this._songs = new EclecticEar.Collections.Songs();
    }
    return this._songs;
  },

  followers: function() {
    if (!this._followers) {
      this._followers = new EclecticEar.Collections.Users();
    }
    return this._followers;
  },

  playlists: function() {
    if (!this._playlists) {
      this._playlists = new EclecticEar.Collections.Playlists();
    }
    return this._playlists;
  }
});
