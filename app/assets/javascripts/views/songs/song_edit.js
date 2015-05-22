EclecticEar.Views.SongEdit = Backbone.CompositeView.extend({
  template: JST['songs/edit'],

  events: {
    'click .remove-tag' :'removeTag',
    'click .submit-button': 'submit',
    'click .delete-button': 'removeSong',
    "change #input-post-album_art": "fileInputChange"
  },

  className: 'edit-view group',

  initialize: function() {
    this.addTagForm();
    this.listenTo(this.model, 'sync change', this.render);
    this.listenTo(this.model.taggings(), 'remove', this.render);
  },

  render: function() {
    console.log('rendered');
    var view = this.template({song: this.model});
    this.$el.html(view);
    this.attachSubviews();
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$('.edit-form').serializeJSON();
    this.model.save(attrs);
  },

  removeSong: function (event) {
    this.model.destroy();
    Backbone.history.navigate("", {trigger: true});
  },

  removeTag: function(event) {
    var id = parseInt($(event.currentTarget).attr('data-id'));
    var tagging = this.model.taggings().get(id);
    tagging.destroy();
  },

  addTagForm: function(){
    var view = new EclecticEar.Views.TagForm({song: this.model});
    this.addSubview(".add-tag", view);
  },

  fileInputChange: function(event){

    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that._updatePreview(reader.result);
      that.model._album_art = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._updatePreview("");
      delete that.model._album_art;
    }
  },

  _updatePreview: function(src){
    this.$el.find(".album-art-large").attr("src", src);
  }
});
