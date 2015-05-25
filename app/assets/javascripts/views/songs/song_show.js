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
    // if (this.model.get('taggings')) {
    //   debugger;
    //   tags = this.model.get('taggings');
    // }
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
    this.$el.find('.play-button').addClass('stop-button').removeClass('play-button');
    this.collection && (EclecticEar.mediaView.queue = this.collection.models);
    EclecticEar.mediaView.items = $('.song-show');
    EclecticEar.mediaView.idx = $('.song-show').index(this.$el);
    EclecticEar.mediaView.play(this.model);
  },

  stopMusic: function() {
    this.$el.find('.stop-button').addClass('play-button').removeClass('stop-button');
    EclecticEar.mediaView.pause();
  }


});
