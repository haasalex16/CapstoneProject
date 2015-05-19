EclecticEar.Views.SongShow = Backbone.CompositeView.extend({
  template: JST['songs/show'],

  tagName: 'li',

  className: 'song-show',

  events: {
    'click .add-to-playlist': 'addToPlaylist',
    'click .play-button': 'playMusic'
  },

  render: function() {
    var view = this.template({song: this.model, currentUser: EclecticEar.currentUser});
    this.$el.html(view);
    return this;
  },

  addToPlaylist: function() {
    var playlistSong = new EclecticEar.Models.PlaylistSong({song_id: parseInt(this.model.get('id'))});
    var view = new EclecticEar.Views.PlaylistSongForm({playlist_song: playlistSong});
    $('body').append(view.render().$el);
  },

  playMusic: function() {
    alert('play!');
  }


});
