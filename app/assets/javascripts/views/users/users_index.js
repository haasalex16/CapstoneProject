EclecticEar.Views.UsersIndex = Backbone.CompositeView.extend ({
  template: JST['users/index'],

  events: {
    'click .follow': 'follow',
    'click .unfollow': 'unfollow'
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    console.log("rendered!");
    var view = this.template({users: this.collection})
    this.$el.html(view);

    return this;
  },

  follow: function(event) {
    var id = $(event.currentTarget).attr('data-id');
    var follow = new EclecticEar.Models.Follow({followee_id: id});
    follow.save({},{
      success: function(){
        this.collection.fetch();
      }.bind(this)
    })
  },

  unfollow: function(event) {
    var id = $(event.currentTarget).attr('data-id');
    EclecticEar.Collections.follows.fetch({
      success: function() {
        var model = EclecticEar.Collections.follows.findWhere({followee_id: parseInt(id)});
        model.destroy({
          success: function() {
            this.collection.fetch();
          }.bind(this)
        });
      }.bind(this)
    });
  }

});
