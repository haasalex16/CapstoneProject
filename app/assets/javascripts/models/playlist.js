EclecticEar.Models.Playlist = Backbone.Model.extend({
  urlRoot: '/api/playlists',

  parse: function(response) {
    if (response.songs) {
      this.songs().set(response.songs, {parse: true});
      delete response.songs;
    }

    return response;
  },

  toJSON: function(){
    var json = {playlist: _.clone(this.attributes)};

    if (this._cover) {
      json.playlist.cover = this._cover;
    }

    return json;
  },


  songs: function() {
    if (!this._songs) {
      this._songs = new EclecticEar.Collections.Songs();
    }
    return this._songs;
  },

  hasSong: function(song_id) {
    this.result = false
    this.song_id = song_id;
    if (this.songs()) {
      this.songs().each(function(song){
        if (this.song_id === song.get('song_id')) {
          this.result = true;
        }
      }.bind(this))
    }
    return this.result;
  },

  timeSince: function(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    if (interval === 1) {
      return "1 year"
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    if (interval === 1) {
      return "1 month"
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    if (interval === 1) {
      return "1 day"
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    if (interval === 1) {
      return "1 hour"
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " mins";
    }
    if (interval === 1) {
      return "1 min"
    }
    if (Math.floor(seconds) === 0){
      return "now";
    }
    if (Math.floor(seconds) === 1){
      return "1 second";
    }
    return Math.floor(seconds) + " seconds";
  }


});
