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
    $('.stop-button').addClass('play-button').removeClass('stop-button');
    $('.stop').addClass('arrow').removeClass('stop');
    $('.universal-player-player')[0].pause();
    $('.universal-player').removeClass('show');
    $('.universal-player').addClass('hide');
  },

  nextSong: function() {
    debugger;
    $(this.items[this.idx]).find('.stop-button').removeClass('stop-button').addClass('play-button');
    this.idx++;
    $(this.items[this.idx]).find('.play-button').removeClass('play-button').addClass('stop-button');
    var song = this.queue[this.idx];
    this.play(song);
  },


});
