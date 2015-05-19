EclecticEar.Views.SongForm = Backbone.CompositeView.extend({
  template: JST['songs/form'],

  tagName: 'form',

  className: 'uploader',

  events: {
    'click button': 'submit',
    "change #input-music": "fileInputChange"
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = $(this.$el).serializeJSON();
    var song = this.model;
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
  },

  fileInputChange: function(event){
    console.log(event.currentTarget.files[0]);

    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that.model._music = reader.result;
      console.log(that.model);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      delete that.model._music;
      console.log(that.model);
    }
  },


});
