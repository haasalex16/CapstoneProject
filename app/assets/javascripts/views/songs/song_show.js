EclecticEar.Views.SongShow = Backbone.CompositeView.extend({
  template: JST['songs/show'],

  tagName: 'li',

  className: 'song-show',

  render: function() {
    var view = this.template({song: this.model, currentUser: EclecticEar.currentUser});
    this.$el.html(view);

    return this;
  }

});
