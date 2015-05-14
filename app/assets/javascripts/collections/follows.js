EclecticEar.Collections.Follows = Backbone.Collection.extend({
  url: '/api/follows',
  model: EclecticEar.Models.Follow
});

EclecticEar.Collections.follows = new EclecticEar.Collections.Follows();
