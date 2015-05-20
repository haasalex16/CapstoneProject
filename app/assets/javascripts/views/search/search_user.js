EclecticEar.Views.SearchUser = Backbone.CompositeView.extend ({
  template: JST['search/user'],

  tagName: 'li',

  className: 'search-result',

  render: function() {
    var view = this.template({user: this.model});
    this.$el.html(view);

    return this;
  }
});
