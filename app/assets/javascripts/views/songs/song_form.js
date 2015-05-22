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

  uploadProgress: function(evt) {
    debugger;
    if (evt.lengthComputable) {
      var percentComplete = Math.round(evt.loaded * 100 / evt.total);
      document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
    }
    else {
      document.getElementById('progressNumber').innerHTML = 'unable to compute';
    }
  },

  submit: function(event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest();
    // var fd = this.$el.getFormData();

    /* event listners */
    xhr.upload.addEventListener("progress", this.uploadProgress, false);


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
