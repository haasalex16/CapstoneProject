EclecticEar.Views.TagForm = Backbone.CompositeView.extend ({
  template: JST['tags/form'],

  tagName: 'form',

  events: {
    'click button': 'submit'
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
    model.save({song_id: 3},{
      success: function() {
        alert("saved");
      }
    })

  }
});
