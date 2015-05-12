EclecticEar.Routers.Router = Backbone.Router.extend({

  routes: {
    "": 'songIndex'
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  songIndex: function() {
    // EclecticEar.Collections.songs.fetch()
    // var view = new EclecticEar.Views.SongsIndex({collection: EclecticEar.Collections.songs});
    // this._swapView(view);
  },

  _swapView: function (view) {
    if(this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    this.$rootEl.hmtl(view.render().$el);
  }

});
