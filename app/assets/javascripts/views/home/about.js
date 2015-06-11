EclecticEar.Views.About = Backbone.CompositeView.extend ({
  template: JST['home/about'],

  render: function() {
    var view = this.template();
    this.$el.html(view);

    return this;
  },
});
