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
    model.save({},{
      success: function(tag) {
        var tagging = new EclecticEar.Models.Tagging({tag_id: tag.get('id'), song_id: this.song.get('id')});
        tagging.save({},{
          success: function(tagging){
            this.song.taggings().add(tagging);
            this.song.fetch();
          }.bind(this)
        });
        this.render();
      }.bind(this)
    })

  }
});
