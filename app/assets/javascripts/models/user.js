EclecticEar.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  parse: function(response) {
    if (response.songs) {
      this.songs().set(response.songs);
      delete response.songs;
    }
    return response;
  },

  songs: function() {
    if (!this._songs) {
      this._songs = new EclecticEar.Collections.Songs();
    }
    return this._songs;
  }
});
