EclecticEar.Models.Song = Backbone.Model.extend ({
  urlRoot: 'api/songs',

  parse: function(response) {
    return response;
  }
});
