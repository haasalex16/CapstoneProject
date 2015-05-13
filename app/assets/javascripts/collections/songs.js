EclecticEar.Collections.Songs = Backbone.Collection.extend ({
  url: '/api/songs',

  model: EclecticEar.Models.Song,

  comparator: function(song) {
    return song.get('created_at');
  },

  getOrFetch: function(id) {
    var song = this.get(id);

    if (song) {
      song.fetch();
    } else {
      song = new EclecticEar.Models.Song({id: id});
      song.fetch({
        success: function() {
          this.add(song);
        }.bind(this)
      });
    }

    return song;
  }
});

EclecticEar.Collections.songs = new EclecticEar.Collections.Songs ();
