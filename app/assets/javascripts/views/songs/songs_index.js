EclecticEar.Views.SongsIndex = Backbone.CompositeView.extend ({
  template: JST['songs/index'],

  className: 'feed group',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    var formView = new EclecticEar.Views.SongForm({
                    collection: this.collection,
                    });
    this.addSubview(".add-form", formView);
  },

  render: function() {
    this.collection.forEach(function(song){
      this.addSong(song);
    }.bind(this));
    debugger;
    var view = this.template({songs: this.collection});
    this.$el.html(view);


    this.attachSubviews();

    return this;
  },

  addSong: function(song){
    var songView = new EclecticEar.Views.SongShow({model: song});
    this.addSubview(".songs", songView);
  }

});
