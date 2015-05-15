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
    }
    return this._taggings;
  }

});
