EclecticEar.Views.SongPlaylistShow = Backbone.CompositeView.extend({
  template: JST['songs/playlist_show'],

  tagName: 'li',

  events: {
    'click .small-play-button': 'playMusic',
    'click .remove': 'removeSong'
  },

  className: 'playlist-song-show group',

  initialize: function(options) {
    this.edit = options.edit;
  },

  render: function() {
    var view = this.template({song: this.model,
                              currentUser: EclecticEar.currentUser,
                              edit: this.edit
                              });
    this.$el.html(view);

    return this;
  },

  playMusic: function() {
    this.collection && (EclecticEar.mediaView.queue = this.collection.models);
    EclecticEar.mediaView.idx = $('.playlist-song-show').index(this.$el);
    EclecticEar.mediaView.play(this.model);
  },

  removeSong: function(event) {
    var that = this;
    var id = parseInt($(event.currentTarget).attr('data-playlist-song-id'));
    var playlistSong = new EclecticEar.Models.PlaylistSong({id: id});
    playlistSong.fetch({
      success: function(model) {
        model.destroy()
      }
    })
  }


});
