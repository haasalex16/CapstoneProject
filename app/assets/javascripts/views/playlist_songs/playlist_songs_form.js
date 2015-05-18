EclecticEar.Views.PlaylistSongForm = Backbone.CompositeView.extend({
  template: JST['playlist_songs/form'],

  className: 'playlist_song_modal',

  events: {
    'click .new-playlist': 'newPlaylist',
    'click .add-playlist': 'addPlaylist',
    'click .close-modal' : 'closeModal'
  },

  initialize: function(options) {
    this.song_id = options.playlist_song.get('song_id');
  },

  render: function() {
    view = this.template();
    this.$el.html(view);

    return this;
  },

  newPlaylist: function() {
    var view = new EclecticEar.Views.PlaylistForm({song_id: this.song_id});
    this._swapView(view);
  },

  addPlaylist: function() {
    EclecticEar.Collections.userPlaylists.fetch();
    var view = new EclecticEar.Views.PlaylistIndex({
      song_id: this.song_id,
      collection: EclecticEar.Collections.userPlaylists
      });
    this._swapView(view);
  },

  closeModal: function() {
    this.$el.remove();
  },

  _swapView: function (view) {
    if(this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    this.$el.find('.new-or-old-playlist').html(view.render().$el);
  }


});
