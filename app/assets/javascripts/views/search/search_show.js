EclecticEar.Views.SearchShow = Backbone.CompositeView.extend({
  template: JST['search/show'],

  className: 'group',

  render: function() {
    var view = this.template();
    this.$el.html(view);

    return this;
  }
});
