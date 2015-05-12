EclecticEar.Views.SongShow = Backbone.CompositeView.extend({
  template: JST['songs/show'],

  tagName: 'li',

  render: function() {
    var view = this.template({song: this.model});
    this.$el.html(view);

    return this;
  }

});
