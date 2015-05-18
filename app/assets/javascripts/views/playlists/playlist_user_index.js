EclecticEar.Views.PlaylistUserIndex = Backbone.CompositeView.extend({
  template: JST['playlists/user_index'],

  className: 'group',

  render: function() {
    var view = this.template({playlists: this.collection});
    this.$el.html(view);

    return this;
  }
});
