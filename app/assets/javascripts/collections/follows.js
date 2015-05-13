EclecticEar.Collections.Follows = Backbone.Collection.extend({
  url: '/api/users/:user_id/follows',
  model: EclecticEar.Models.Follow
});
