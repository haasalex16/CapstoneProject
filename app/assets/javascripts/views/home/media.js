EclecticEar.Views.Media = Backbone.CompositeView.extend ({
  template: JST['home/media'],

  initialize: function() {
    this.idx = 0;
    this.queue = [];
    this.items = []
  },

  render: function() {
    view = this.template();
    this.$el.html(view);

    this.$('audio')[0].addEventListener('ended', this.nextSong.bind(this));

    return this;
  },

  play: function(song) {
    $('.universal-player-art')[0].setAttribute('src', song.get('album_art_url'));
    $('.universal-player-player')[0].setAttribute('src', song.get('music_url'));
    $('.universal-player-player')[0].play();
    $('.universal-player').removeClass('hide');
    $('.universal-player').addClass('show');
    $('.universal-player-title').html(song.get('title'));
  },

  pause: function() {
    $('.stop-button').addClass('play-button').removeClass('stop-button').removeClass('fadein');
    $('.universal-player-player')[0].pause();
    $('.universal-player').removeClass('show');
    $('.universal-player').addClass('hide');
  },

  nextSong: function() {
    $(this.items[this.idx]).find('.song-show').removeClass('song-show').addClass('song-show-list');
    $(this.items[this.idx]).find('.stop-button').removeClass('stop-button').addClass('play-button');
    $(this.items[this.idx]).find('.fa-stop').removeClass('fa-stop').addClass('fa-play').removeClass('fadein');
    $(this.items[this.idx]).find('.album-art').addClass('album-art-list').removeClass('album-art');
    $(this.items[this.idx]).find('.top-row').addClass('top-row-list').removeClass('top-row');
    $(this.items[this.idx]).find('.small-stop-button').removeClass('small-stop-button').addClass('small-play-button');
    this.idx++;
    $(this.items[this.idx]).find('.play-button').removeClass('play-button').addClass('stop-button');
    $(this.items[this.idx]).find('.fa-play').removeClass('fa-play').addClass('fa-stop').addClass('fadein');
    $(this.items[this.idx]).find('.album-art-list').addClass('album-art').removeClass('album-art-list');
    $(this.items[this.idx]).find('.top-row-list').addClass('top-row').removeClass('top-row-list');
    $(this.items[this.idx]).find('.song-show-list').removeClass('song-show-list').addClass('song-show');
    $(this.items[this.idx]).find('.small-play-button').removeClass('small-play-button').addClass('small-stop-button');
    var song = this.queue[this.idx];
    this.play(song);
  },


});
