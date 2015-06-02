EclecticEar.Views.Errors = Backbone.CompositeView.extend({
  template: JST['home/errors'],

  className: "errors",

  initialize: function(response) {
    this.resp = response;
  },

  render: function() {
    var view = this.template({response: this.resp});
    this.$el.html(view);

    this;
  }
});
