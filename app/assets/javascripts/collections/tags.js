EclecticEar.Collections.Tags = Backbone.Collection.extend ({
  url: '/api/tags',
  model: EclecticEar.Models.Tag,

  // getOrFetch: function(id) {
  //   var tag = this.get(id);
  //
  //   if (tag) {
  //     tag.fetch();
  //   } else {
  //     tag = new EclecticEar.Models.Tag({id: id});
  //     tag.fetch({
  //       success: function() {
  //         this.add(tag);
  //       }.bind(this)
  //     });
  //   }
  //
  //   return tag;
  // },

});

// EclecticEar.Collections.tags = new EclecticEar.Collections.Tags();
