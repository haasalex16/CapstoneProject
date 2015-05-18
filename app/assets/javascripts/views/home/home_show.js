EclecticEar.Views.HomeShow = Backbone.CompositeView.extend ({
  template: JST['home/show'],

  initialize: function() {
    this.showStream();
  },

  events: {
    'click .showStream': 'showStream',
    'click .showPlaylists': 'showPlaylists',
    'click .showFollowing': 'showFollowing',
  },

  render: function() {
    view = this.template();
    this.$el.html(view);

    return this;
  },

  showStream: function() {
    EclecticEar.Collections.songs.fetch({
      success: function() {
        var view = new EclecticEar.Views.SongsIndex({collection: EclecticEar.Collections.songs});
        this._swapView(view);
      }.bind(this)
    });
  },

  showPlaylists: function() {
    EclecticEar.Collections.userPlaylists.fetch({
      success: function() {
        var view = new EclecticEar.Views.PlaylistUserIndex({collection: EclecticEar.Collections.userPlaylists});
        this._swapView(view);
      }.bind(this)
    })
  },

  showFollowing: function() {
    alert('follow');
  },

  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    $('.home-content').html(view.render().$el);
  }
});
