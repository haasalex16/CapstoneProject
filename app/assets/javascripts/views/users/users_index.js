EclecticEar.Views.UsersIndex = Backbone.CompositeView.extend ({
  template: JST['users/index'],

  events: {
    'click .follow': 'follow'
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var view = this.template({users: this.collection})
    this.$el.html(view);

    return this;
  },

  follow: function(event) {
    var id = $(event.currentTarget).attr('data-id');
    var follow = new EclecticEar.Models.Follow({followee_id: id});
    follow.save({},{
      success: function() {
        Backbone.history.navigate("/",{trigger: true});
      }
    })
  }

});
