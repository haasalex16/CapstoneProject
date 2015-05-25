EclecticEar.Routers.Router = Backbone.Router.extend({

  routes: {
    "": 'home',
    "upload": 'songForm',
    "users": 'usersIndex',
    "users/:id": 'usersShow',
    "songs/:id/edit": 'editSong',
    "playlists/:id": 'showPlaylist',
    "playlists/:id/edit": 'editPlaylist',
    'search': 'search',
    'you/edit': 'userEdit',
    'tags/:id': 'showTag'
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

  userEdit: function() {
    var user = EclecticEar.currentUser;
    var view = new EclecticEar.Views.UserEdit({model: user});

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

  editPlaylist: function(id) {
    var model = EclecticEar.Collections.userPlaylists.getOrFetch(id);
    var view = new EclecticEar.Views.PlaylistEdit({model: model});

    this._swapView(view);
  },

  showTag: function(id) {
    var tag = new EclecticEar.Models.Tag({id: id});
    tag.fetch({
      success: function(model) {
        var view = new EclecticEar.Views.TagShow({model: model});

        this._swapView(view);
      }.bind(this)
    })
  },

  _swapView: function (view) {
    if(this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
