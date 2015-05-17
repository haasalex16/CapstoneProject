EclecticEar.Views.SongEdit = Backbone.CompositeView.extend({
  template: JST['songs/edit'],

  events: {
    'click .remove-tag' :'removeTag',
    'click .edit-song': 'submit',
  },

  className: 'edit-view group',

  initialize: function() {
    this.addTagForm();
    this.listenTo(this.model, 'sync change', this.render);
    this.listenTo(this.model.taggings(), 'add remove sync', this.render);
  },

  render: function() {
    var view = this.template({song: this.model});
    this.$el.html(view);
    this.attachSubviews();
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = this.$('.edit-form').serializeJSON();
    this.model.set(attrs);
    this.model.save();
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
