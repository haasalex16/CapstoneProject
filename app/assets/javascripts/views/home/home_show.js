EclecticEar.Views.HomeShow = Backbone.CompositeView.extend ({
  template: JST['home/show'],

  events: {
    'click .showStream': 'showStream',
    'click .showExplore' : 'showExplore'
  },

  initialize: function() {
    this.listenTo(EclecticEar.Collections.songs, 'remove', this.render);
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);
    this.showStream();

    return this;
  },

  showStream: function() {
    $('.showStream').addClass('active');
    $('.showExplore').removeClass('active');
    EclecticEar.Collections.songs.fetch({
      success: function() {
        var view = new EclecticEar.Views.SongsIndex({collection: EclecticEar.Collections.songs});
        this._swapView(view);
      }.bind(this)
    });
  },

  showExplore: function() {
    $('.showExplore').addClass('active');
    $('.showStream').removeClass('active');
    $.ajax({
      url: "/api/explore",
      type: "GET",
      success: function (users) {
        var collection = new EclecticEar.Collections.Songs(users);
        var view = new EclecticEar.Views.SongsIndex({collection: collection});
        this._swapView(view);
    }.bind(this)
  });
  },

  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;
    $('.home-content').html(view.render().$el);
  }
});
