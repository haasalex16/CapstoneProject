EclecticEar.Collections.Taggings = Backbone.Collection.extend ({
  url: '/api/songs/:song_id/taggings',
  model: EclecticEar.Models.Tagging
});
