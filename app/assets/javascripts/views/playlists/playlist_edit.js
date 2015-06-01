EclecticEar.Views.PlaylistEdit = Backbone.CompositeView.extend ({
  template: JST['playlists/edit'],

  className: 'playlist-edit group',

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click .submit-button': 'submit',
    'click .delete-button': 'removePlaylist',
    "change #input-playlist-cover": "fileInputChange"
  },

  render: function() {
    var view = this.template({playlist: this.model});
    this.$el.html(view);
    this.model.songs().each(this.removeSongView.bind(this));
    this.model.songs().each(this.addSongView.bind(this));

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

  removePlaylist: function(event) {
    event.preventDefault();
    this.model.destroy();
    Backbone.history.navigate('#',{trigger: true})
  },


  addSongView: function(song) {
    var songView = new EclecticEar.Views.SongPlaylistShow({
      model: song,
      edit: true,
      collection: this.model});
    this.addSubview(".playlist-songs", songView);
  },

  removeSongView: function(song) {
    this.removeModelSubview(".playlist-songs", song)
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
});
