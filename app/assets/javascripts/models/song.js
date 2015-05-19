EclecticEar.Models.Song = Backbone.Model.extend ({
  urlRoot: 'api/songs',

  parse: function(response) {
    if (response.taggings) {
      this.taggings().set(response.taggings);
      delete response.taggings;
    }
    return response;
  },

  toJSON: function(){
    // We want proper namespacing of our attributes in Rails.
    var json = {song: _.clone(this.attributes)};

    if (this._album_art) {
      json.song.album_art = this._album_art;
    }

    if (this._music) {
      json.song.music = this._music;
    }
    return json;
  },

  taggings: function() {
    if (!this._taggings) {
      this._taggings = new EclecticEar.Collections.Taggings();
    }
    return this._taggings;
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
