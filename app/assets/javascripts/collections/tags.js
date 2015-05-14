EclecticEar.Collections.Tags = Backbone.Collection.extend ({
  url: '/api/tags',
  model: EclecticEar.Models.Tag,
});

EclecticEar.Collections.tags = new EclecticEar.Collections.Tags()
