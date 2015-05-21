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
    $('.universal-player-art')[0].setAttribute('src', this.model.get('album_art_url'));
    $('.universal-player-player')[0].setAttribute('src', this.model.get('music_url'));
    $('.universal-player-player')[0].play();
    $('.universal-player').removeClass('hide');
    $('.universal-player').addClass('show');
    $('.universal-player-title').html(this.model.get('title'));
  }


});
