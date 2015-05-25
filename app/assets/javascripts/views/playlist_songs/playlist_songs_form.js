EclecticEar.Views.PlaylistSongForm = Backbone.CompositeView.extend({
  template: JST['playlist_songs/form'],

  className: 'modal',

  events: {
    'click .new-playlist': 'newPlaylist',
    'click .add-playlist': 'addPlaylist',
    'click .close-modal' : 'closeModal'
  },

  initialize: function(options) {
    this.listenTo(EclecticEar.Collections.userPlaylists, 'sync', this.addPlaylist);
    this.song_id = options.playlist_song.get('song_id');
    EclecticEar.Collections.userPlaylists.fetch();
  },

  render: function() {
    view = this.template();
    this.$el.html(view);
    this.addPlaylist();

    return this;
  },

  newPlaylist: function() {
    $('.newPlaylist').addClass('active');
    $('.addPlaylist').removeClass('active');
    var view = new EclecticEar.Views.PlaylistForm({song_id: this.song_id});
    this._swapView(view);
  },

  addPlaylist: function() {
    $('.addPlaylist').addClass('active');
    $('.newPlaylist').removeClass('active');
    var view = new EclecticEar.Views.PlaylistIndex({
      song_id: this.song_id,
      collection: EclecticEar.Collections.userPlaylists
      });
    this._swapView(view);
  },

  closeModal: function() {
    $('html').removeClass('no-scroll');
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
