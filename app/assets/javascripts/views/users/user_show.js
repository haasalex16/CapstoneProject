EclecticEar.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  events: {
    'click .showFeed': 'showFeed',
    'click .showPlaylists': 'showPlaylists',
    'click .showFollowing': 'showFollowing',
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(EclecticEar.currentUser, "sync", this.render);
    this.listenTo(this.model, "sync", this.fillFeed);
    this.showFeed();
  },

  render: function() {
    var view = this.template({user: this.model});
    this.$el.html(view);
    return this;
  },

  showFeed: function() {
    var view = new EclecticEar.Views.SongsIndex({collection: this.model.songs()});
    this._swapView(view);
  },

  showPlaylists: function() {
    var view = new EclecticEar.Views.PlaylistUserIndex({collection: this.model.playlists()});
    this._swapView(view);
  },

  showFollowing: function() {
    var view = new EclecticEar.Views.UsersIndex({collection: this.model.followees()});
    this._swapView(view);
  },

  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    $('.user-content').html(view.render().$el);
  }

});
