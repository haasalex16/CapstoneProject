EclecticEar.Views.PlaylistEdit = Backbone.CompositeView.extend ({
  template: JST['playlists/edit'],

  className: 'playlist-edit group',

  initialize: function() {
    // this.addSongs();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.addSongs);
  },

  events: {
    'click .edit-playlist': 'submit',
    "change #input-playlist-cover": "fileInputChange"
  },

  render: function() {
    var view = this.template({playlist: this.model});
    this.$el.html(view);
    this.attachSubviews();

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = this.$('.edit-form').serializeJSON();
    this.model.save(attrs,{
      success: function() {
        Backbone.history.navigate("#/playlists/"+ this.model.id,{trigger:true})
      }.bind(this)
    });
  },

  fileInputChange: function(event){
    console.log(event.currentTarget.files[0]);

    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that._updatePreview(reader.result);
      that.model._cover = reader.result;
      console.log(that.model);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._updatePreview("");
      delete that.model._cover;
      console.log(that.model);
    }
  },

  _updatePreview: function(src){
    this.$el.find(".cover-large").attr("src", src);
  },

  addSongs: function() {
    this.model.songs().each(function(song){
      this.addSong(song);
    }.bind(this));
  },

  addSong: function(song){
    var songView = new EclecticEar.Views.SongPlaylistShow({model: song});
    this.addSubview(".playlist-songs", songView);
  }

});
