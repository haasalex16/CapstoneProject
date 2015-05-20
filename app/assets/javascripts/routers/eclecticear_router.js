EclecticEar.Routers.Router = Backbone.Router.extend({

  routes: {
    "": 'home',
    "upload": 'songForm',
    "users": 'usersIndex',
    "users/:id": 'usersShow',
    "songs/:id/edit": 'editSong',
    "playlists/:id": 'showPlaylist',
    'search': 'search'
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  home: function() {
    var view = new EclecticEar.Views.HomeShow();
    this._swapView(view);
  },

  search: function() {
    var view = new EclecticEar.Views.SearchShow();
    this._swapView(view);
  },

  songForm: function(){
    var song = new EclecticEar.Models.Song()
    var view = new EclecticEar.Views.SongForm({
                    collection: EclecticEar.Collections.songs,
                    model: song
                    });
    this._swapView(view);
  },

  editSong: function(id) {
    var model = EclecticEar.Collections.songs.getOrFetch(id);
    var view = new EclecticEar.Views.SongEdit({model: model});

    this._swapView(view);
  },

  usersIndex: function(){
    EclecticEar.Collections.users.fetch();

    var view = new EclecticEar.Views.UsersIndex({collection: EclecticEar.Collections.users});

    this._swapView(view);
  },


  usersShow: function(id) {
    var user = EclecticEar.Collections.users.getOrFetch(id);
    var view = new EclecticEar.Views.UserShow({model: user});

    this._swapView(view);
  },

  showPlaylist: function(id) {
    var model = EclecticEar.Collections.userPlaylists.getOrFetch(id);
    var view = new EclecticEar.Views.PlaylistShow({model: model});

    this._swapView(view);
  },

  _swapView: function (view) {
    if(this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
