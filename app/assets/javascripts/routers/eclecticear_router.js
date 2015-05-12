EclecticEar.Routers.Router = Backbone.Router.extend({

  routes: {
    "": 'userShow'
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  songIndex: function() {
    EclecticEar.Collections.songs.fetch()

    var view = new EclecticEar.Views.SongIndex(collection: EclecticEar.Collections.songs);
  }




});
