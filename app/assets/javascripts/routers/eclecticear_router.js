EclecticEar.Routers.Router = Backbone.Router.extend({

  routes: {
    "": 'songIndex',
    "upload": 'songForm',
    "users": 'usersIndex',
    "users/:id": 'usersShow',
    "songs/:id/edit": 'editSong',
    'addtag': 'addTag'
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  songIndex: function() {
    EclecticEar.Collections.songs.fetch({
      success: function() {
        var view = new EclecticEar.Views.SongsIndex({collection: EclecticEar.Collections.songs});
        this._swapView(view);
      }.bind(this)
    });
  },

  addTag: function(){
    var view = new EclecticEar.Views.TagForm();
    this._swapView(view);
  },

  songForm: function(){
    var view = new EclecticEar.Views.SongForm({
                    collection: EclecticEar.Collections.songs
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

  _swapView: function (view) {
    if(this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
