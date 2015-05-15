EclecticEar.Views.TagForm = Backbone.CompositeView.extend ({
  template: JST['tags/form'],

  tagName: 'form',

  events: {
    'click button': 'submit'
  },

  initialize: function(options) {
    this.song = options.song;
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    var model = new EclecticEar.Models.Tag();
    model.set(attrs);
    model.save({song_id: this.song.get('id')},{
      success: function() {
        this.render();
      }.bind(this)
    })

  }
});
