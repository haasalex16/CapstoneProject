EclecticEar.Views.PlaylistForm = Backbone.CompositeView.extend ({
  template: JST['playlists/form'],

  events: {
    'click button': 'submit'
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
      success: function(){
        alert('saved');
      },
      errors: function() {
        alert('errors');
      }
    })
  }
});
