EclecticEar.Views.SongShow = Backbone.CompositeView.extend({
  template: JST['songs/show'],

  tagName: 'li',

  className: 'song-show',

  events: {
    'click .add-to-playlist': 'addToPlaylist',
    'click .play-button': 'playMusic',
    'click .stop-button': 'stopMusic'
  },

  render: function() {
    var tags = [];
    if (this.model._taggings) {
      tags = this.model._taggings.models
    }
    var view = this.template({song: this.model, currentUser: EclecticEar.currentUser,  tags: tags});
    this.$el.html(view);
    return this;
  },

  addToPlaylist: function() {
    var playlistSong = new EclecticEar.Models.PlaylistSong({song_id: parseInt(this.model.get('id'))});
    var view = new EclecticEar.Views.PlaylistSongForm({playlist_song: playlistSong});
    $('html').addClass('no-scroll');
    $('body').append(view.render().$el);
  },

  playMusic: function() {
    $('.stop-button').addClass('play-button').removeClass('stop-button');
    $('.stop').addClass('arrow').removeClass('stop');
    this.$el.find('.play-button').addClass('stop-button').removeClass('play-button');
    this.$el.find('.arrow').addClass('stop').removeClass('arrow');
    this.collection && (EclecticEar.mediaView.queue = this.collection.models);
    EclecticEar.mediaView.items = $('.song-show');
    EclecticEar.mediaView.idx = $('.song-show').index(this.$el);
    EclecticEar.mediaView.play(this.model);
  },

  stopMusic: function() {
    this.$el.find('.stop-button').addClass('play-button').removeClass('stop-button');
    this.$el.find('.stop').addClass('arrow').removeClass('stop');
    EclecticEar.mediaView.pause();
  }


});
