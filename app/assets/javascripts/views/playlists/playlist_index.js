EclecticEar.Views.PlaylistIndex = Backbone.CompositeView.extend ({
  template: JST['playlists/index'],

  events: {
    'click .add-to-playlist': 'addToPlaylist',
  },

  initialize: function(options){
    this.song_id = options.song_id;
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function(){
    var view = this.template({playlists: this.collection});
    this.$el.html(view);

    return this;
  },

  addToPlaylist: function(event) {
    var playlist_id = parseInt($(event.target).attr('data-id'));
    var playlist_song = new EclecticEar.Models.PlaylistSong({
      song_id: this.song_id,
      playlist_id: playlist_id
    });
    playlist_song.save({},{
      success: function() {
        $('.playlist_song_modal').remove();
      }
    })
  }
});
