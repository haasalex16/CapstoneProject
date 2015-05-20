EclecticEar.Views.SearchPlaylist = Backbone.CompositeView.extend ({
  template: JST['search/playlist'],

  tagName: 'li',

  className: 'search-result',

  render: function() {
    var view = this.template({playlist: this.model});
    this.$el.html(view);

    return this;
  }
});
