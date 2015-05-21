EclecticEar.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  parse: function(response) {
    if (response.songs) {
      this.songs().set(response.songs, {parse: true});
      delete response.songs;
    }
    if (response.followees) {
      this.followees().set(response.followees);
      delete response.followees;
    }
    if (response.playlists) {
      this.playlists().set(response.playlists, {parse: true});
      delete response.playlists;
    }

    return response;
  },


  toJSON: function(){
    // We want proper namespacing of our attributes in Rails.
    var json = {user: _.clone(this.attributes)};

    if (this._avatar) {
      json.user.avatar = this._avatar;
    }

    return json;
  },


  songs: function() {
    if (!this._songs) {
      this._songs = new EclecticEar.Collections.Songs();
    }
    return this._songs;
  },

  followees: function() {
    if (!this._followees) {
      this._followees = new EclecticEar.Collections.Users();
    }
    return this._followees;
  },

  playlists: function() {
    if (!this._playlists) {
      this._playlists = new EclecticEar.Collections.Playlists();
    }
    return this._playlists;
  }
});
