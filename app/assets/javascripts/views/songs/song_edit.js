EclecticEar.Views.SongEdit = Backbone.CompositeView.extend({
  template: JST['songs/edit'],

  events: {
    'click .remove-tag' :'removeTag'
  },

  initialize: function() {
    this.addTagForm();
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var view = this.template({song: this.model});
    this.$el.html(view);
    this.attachSubviews();
    return this;
  },

  removeTag: function(event) {
    var id = parseInt($(event.currentTarget).attr('data-id'));
    var tagging = this.model.taggings().get(id);
    tagging.destroy();
  },

  addTagForm: function(){
    var view = new EclecticEar.Views.TagForm({song: this.model});
    this.addSubview(".add-tag", view);
  }
});
