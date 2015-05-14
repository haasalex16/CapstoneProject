EclecticEar.Views.SongEdit = Backbone.CompositeView.extend({
  template: JST['songs/edit'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var view = this.template({song: this.model});
    this.$el.html(view);
    return this;
  }
});
