EclecticEar.Views.SongEdit = Backbone.CompositeView.extend({
  template: JST['songs/edit'],

  events: {
    'click .remove-tag' :'removeTag'
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    EclecticEar.Collections.tags.fetch();
    var view = this.template({tags: EclecticEar.Collections.tags, song: this.model});
    this.$el.html(view);
    return this;
  },

  removeTag: function(event) {
    alert("remove!");

  }
});
