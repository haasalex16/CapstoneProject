EclecticEar.Routers.Router = Backbone.Router.extend({

  routes: {
    "": 'home',
    'about': 'about',
    "session/new": "signIn",
    "users/new": "signUp",
    "upload": 'songForm',
    "users": 'usersIndex',
    "users/:id": 'usersShow',
    "songs/:id/edit": 'editSong',
    "playlists/:id": 'showPlaylist',
    "playlists/:id/edit": 'editPlaylist',
    'search': 'search',
    'users/:id/edit': 'userEdit',
    'tags/:id': 'showTag'
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = new EclecticEar.Collections.Users();
    this.collection.fetch();
  },

  home: function() {
    $('body').addClass('logged-in');
    $('.content').addClass('white');
    $('#query').removeClass('search-show').addClass('search-hide');
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var view = new EclecticEar.Views.HomeShow();
    this._swapView(view);
  },

  about: function() {
    $('body').removeClass('logged-in');
    $('.content').removeClass('white');
    $('#query').removeClass('search-show').addClass('search-hide');
    // var callback = this.home.bind(this);
    // if (!this._requireSignedIn(callback)) { return; }

    var view = new EclecticEar.Views.About();
    this._swapView(view);
  },

  search: function() {
    $('body').addClass('logged-in');
    $('.content').addClass('white');
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var view = new EclecticEar.Views.SearchShow();
    this._swapView(view);
  },

  songForm: function(){
    $('body').addClass('logged-in');
    $('.content').addClass('white');
    $('#query').removeClass('search-show').addClass('search-hide');
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var song = new EclecticEar.Models.Song()
    var view = new EclecticEar.Views.SongForm({
                    collection: EclecticEar.Collections.songs,
                    model: song
                    });
    this._swapView(view);
  },

  editSong: function(id) {
    $('body').addClass('logged-in');
    $('.content').addClass('white');
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var model = EclecticEar.Collections.songs.getOrFetch(id);
    var view = new EclecticEar.Views.SongEdit({model: model});

    this._swapView(view);
  },

  usersIndex: function(){
    $('body').addClass('logged-in');
    $('.content').addClass('white');
    $('#query').removeClass('search-show').addClass('search-hide');
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    this.collection.fetch();

    var view = new EclecticEar.Views.UsersIndex({collection: this.collection});

    this._swapView(view);
  },

  userEdit: function(id) {
    $('body').addClass('logged-in');
    $('.content').addClass('white');
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var user = this.collection.getOrFetch(id);
    var view = new EclecticEar.Views.UserEdit({model: user});

    this._swapView(view);
  },


  usersShow: function(id) {
    $('body').addClass('logged-in');
    $('.content').addClass('white');
    $('#query').removeClass('search-show').addClass('search-hide');
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var user = EclecticEar.Collections.users.getOrFetch(id);
    var view = new EclecticEar.Views.UserShow({model: user});

    this._swapView(view);
  },

  showPlaylist: function(id) {
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var model = EclecticEar.Collections.userPlaylists.getOrFetch(id);
    var view = new EclecticEar.Views.PlaylistShow({model: model});

    this._swapView(view);
  },

  editPlaylist: function(id) {
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var model = EclecticEar.Collections.userPlaylists.getOrFetch(id);
    var view = new EclecticEar.Views.PlaylistEdit({model: model});

    this._swapView(view);
  },

  showTag: function(id) {
    var callback = this.home.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var tag = new EclecticEar.Models.Tag({id: id});
    tag.fetch({
      success: function(model) {
        var view = new EclecticEar.Views.TagShow({model: model});

        this._swapView(view);
      }.bind(this)
    })
  },

  signIn: function(callback){
    $('body').removeClass('logged-in');
    $('.content').removeClass('white');
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new EclecticEar.Views.SignIn({
      callback: callback
    });
    this._swapView(signInView);
  },

  signUp: function(callback){
    $('body').removeClass('logged-in');
    $('.content').removeClass('white');
    if (!this._requireSignedOut()) { return; }

    var model = new this.collection.model();
    var formView = new EclecticEar.Views.UsersForm({
      collection: this.collection,
      model: model
    });
    this._swapView(formView);
  },

  _requireSignedIn: function(callback){
    if (!EclecticEar.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.signIn(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback){
    if (EclecticEar.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function(){
    $('body').removeClass('logged-in');
    $('.content').removeClass('white');
    Backbone.history.navigate("", { trigger: true });
  },

  _swapView: function (view) {
    if(this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
