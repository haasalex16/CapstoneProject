EclecticEar.Collections.Users = Backbone.Collection.extend ({
  url: '/api/users',

  model: EclecticEar.Models.User,

  comparator: function(user) {
    return user.get('username');
  },

  getOrFetch: function(id) {
    var user = this.get(id);

    if (user) {
      user.fetch();
    } else {
      user = new EclecticEar.Models.User({id: id});
      user.fetch({
        success: function() {
          this.add(user);
        }.bind(this)
      });
    }

    return user;
  },

});

EclecticEar.Collections.users = new EclecticEar.Collections.Users();
