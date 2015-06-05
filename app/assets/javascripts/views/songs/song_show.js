EclecticEar.Views.SongShow = Backbone.CompositeView.extend({
  template: JST['songs/show'],

  tagName: 'li',

  className: 'song-show-container',

  events: {
    'click .add-to-playlist': 'addToPlaylist',
    'click .play-button': 'playMusic',
    'click .stop-button': 'stopMusic'
  },


  render: function() {
    var tags = null;
    var otherTags = null;
    if (this.model._taggings) {
      tags = this.model._taggings.models
    }
    if (this.model.get('taggings')) {
      otherTags = this.model.get('taggings');
    }
    var view = this.template({song: this.model, currentUser: EclecticEar.currentUser,  tags: tags, otherTags: otherTags});
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
    $('.song-show').removeClass('song-show').addClass('song-show-list');
    $('.album-art').removeClass('album-art').addClass('album-art-list');
    $('.top-row').addClass('top-row-list').removeClass('top-row');
    this.$el.find('.song-show-list').removeClass('song-show-list').addClass('song-show');
    $('.stop-button').addClass('play-button').removeClass('stop-button');
    this.$el.find('.play-button').addClass('stop-button').removeClass('play-button');
    this.$el.find('.album-art-list').addClass('album-art').removeClass('album-art-list');
    this.$el.find('.top-row-list').addClass('top-row').removeClass('top-row-list');
    this.collection && (EclecticEar.mediaView.queue = this.collection.models);
    EclecticEar.mediaView.items = $('.song-show-container');
    EclecticEar.mediaView.idx = $('.song-show-container').index(this.$el);
    EclecticEar.mediaView.play(this.model);
  },

  stopMusic: function() {
    this.$el.find('.stop-button').addClass('play-button').removeClass('stop-button');
    this.$el.find('.album-art').addClass('album-art-list').removeClass('album-art');
    this.$el.find('.top-row').addClass('top-row-list').removeClass('top-row');
    this.$el.find('.song-show').removeClass('song-show').addClass('song-show-list');
    EclecticEar.mediaView.pause();
  }


});
