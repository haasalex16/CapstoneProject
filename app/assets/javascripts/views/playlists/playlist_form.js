EclecticEar.Views.PlaylistForm = Backbone.CompositeView.extend ({
  template: JST['playlists/form'],

  events: {
    'click button': 'submit'
  },

  initialize: function(options) {
    this.song_id = options.song_id;
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);

    return this;
  },

  submit: function(event){
    event.preventDefault();
    var attrs = this.$el.find('form').serializeJSON()
    var playlist = new EclecticEar.Models.Playlist();
    playlist.save(attrs, {
      success: function(model, response){
        var playlist_id = model.get('id');
        var playlist_song = new EclecticEar.Models.PlaylistSong({
          song_id: this.song_id,
          playlist_id: playlist_id
        });
        playlist_song.save({},{
          success: function() {
          }
        })
      }.bind(this),
      errors: function() {
        alert('errors');
      }
    })
  }
});
