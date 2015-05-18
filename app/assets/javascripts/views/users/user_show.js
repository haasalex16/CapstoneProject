EclecticEar.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  events: {
    'click .showFeed': 'showFeed',
    // 'click .showPlaylists': 'showPlaylists',
    // 'click .showFollowing': 'showFollowing',
  },

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(EclecticEar.currentUser, "sync", this.render);
    this.listenTo(this.model, "sync", this.fillFeed);
  },

  render: function() {
    var view = this.template({user: this.model});
    this.$el.html(view);
    // this.attachSubViews;
    return this;
  },

  showFeed: function() {
    this.model.songs().fetch({
      success: function() {
        var view = new EclecticEar.Views.SongsIndex({collection: this.model.songs()});
        this._swapView(view);
      }.bind(this)
    });

  },

  // fillFeed: function(){
  //   this.model.songs().each(function(song){
  //     this.addSong(song);
  //   }.bind(this));
  // },
  //
  // addSong: function(song){
  //   var songView = new EclecticEar.Views.SongShow({model: song});
  //   this.addSubview(".songs", songView);
  // },


  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    $('.user-content').html(view.render().$el);
  }

});
