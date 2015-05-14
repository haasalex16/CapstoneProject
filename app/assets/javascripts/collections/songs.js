EclecticEar.Collections.Songs = Backbone.Collection.extend ({
  url: '/api/songs',

  model: EclecticEar.Models.Song,

  comparator: function(songOne, songTwo) {

    if (songOne.get('created_at') > songTwo.get('created_at')) {
      return -1;
    } else if (songOne.get('created_at') < songTwo.get('created_at')) {
      return 1;
    } else {
      return 0;
    }
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
