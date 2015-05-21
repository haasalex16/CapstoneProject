EclecticEar.Views.UserEdit = Backbone.CompositeView.extend({
  template: JST['users/edit'],

  events: {
    'click .submit-button': 'submit',
    'click .delete-button': 'removeUser',
    "change #input-user-avatar": "fileInputChange"
  },

  className: 'edit-view group',

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(EclecticEar.currentUser, "sync", this.render);
  },

  render: function() {
    var view = this.template({user: this.model});
    this.$el.html(view);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$('.edit-form').serializeJSON();
    this.model.save(attrs);
  },

  removeUser: function (event) {
    this.model.destroy();
    // Backbone.history.navigate("", {trigger: true});
  },

  fileInputChange: function(event){
    console.log(event.currentTarget.files[0]);

    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function(){
      that._updatePreview(reader.result);
      that.model._avatar = reader.result;
      console.log(that.model);
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._updatePreview("");
      delete that.model._avatar;
      console.log(that.model);
    }
  },

  _updatePreview: function(src){
    this.$el.find(".user-thumb").attr("src", src);
  }

});
