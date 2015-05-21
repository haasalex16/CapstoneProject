EclecticEar.Views.Media = Backbone.CompositeView.extend ({
  template: JST['home/media'],

  events: {
    'pause audio': 'test',
    'click .universal-player-art': 'test'
  },

  initialize: function() {
    this.idx = 0;
    this.queue = [];
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

  nextSong: function() {
    this.idx++;
    var song = this.queue[this.idx];
    this.play(song);
  },

  test: function() {
    alert("test");
  }

});
