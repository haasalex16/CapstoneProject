EclecticEar.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(EclecticEar.currentUser, "sync", this.render);
    this.listenTo(this.model, "sync", this.fillFeed);
  },

  render: function() {
    var view = this.template({user: this.model});
    this.$el.html(view);
    this.attachSubViews;
    return this;
  },

  fillFeed: function(){
    this.model.songs().each(function(song){
      this.addSong(song);
    }.bind(this));
  },

  addSong: function(song){
    var songView = new EclecticEar.Views.SongShow({model: song});
    this.addSubview(".songs", songView);
  }
});
