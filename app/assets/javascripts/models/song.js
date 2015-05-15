EclecticEar.Models.Song = Backbone.Model.extend ({
  urlRoot: 'api/songs',

  parse: function(response) {
    if (response.taggings) {
      this.taggings().set(response.taggings);
      delete response.taggings;
    }
    return response;
  },

  taggings: function() {
    if (!this._taggings) {
      this._taggings = new EclecticEar.Collections.Taggings();
      {song_id: this.get('id')}
    }
    return this._taggings;
  }

});
