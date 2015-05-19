EclecticEar.Views.SongForm = Backbone.CompositeView.extend({
  template: JST['songs/form'],

  tagName: 'form',

  className: 'uploader',

  events: {
    'click button': 'submit'
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = $(this.$el).serializeJSON();
    var song = new EclecticEar.Models.Song()
    var collection = this.collection;
    song.set(attrs);
    song.save({},{
      success: function(){
        collection.add(song, {merge: true});
        Backbone.history.navigate("songs/"+song.get('id')+"/edit", {trigger: true});
      },
      error: function() {
        Backbone.history.navigate("", {trigger: true});
      }
    })
  }
});
