EclecticEar.Views.SongsIndex = Backbone.CompositeView.extend ({
  template: JST['songs/index'],

  className: 'feed group',

  initialize: function() {
    this.collection.forEach(function(song){
      this.addSong(song);
    }.bind(this));

    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);
    this.attachSubviews();

    return this;
  },

  addSong: function(song){
    var songView = new EclecticEar.Views.SongShow({model: song, collection: this.collection});
    this.addSubview(".songs", songView);
  }

});
