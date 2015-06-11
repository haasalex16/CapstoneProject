EclecticEar.Views.Header = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(EclecticEar.currentUser, "signIn signOut", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut",
    'click #search': 'showSearch',
    "submit form": "search",
  },

  template: JST['shared/header'],

  render: function(){
    var html = this.template({ currentUser: EclecticEar.currentUser });
    this.$el.html(html);

    return this;
  },

  showSearch: function () {
    this.$el.find('#query').removeClass('search-hide').addClass('search-show');
  },

  search: function (event) {
    Backbone.history.navigate("/search", { trigger: true});
    event.preventDefault();
    EclecticEar.currentUser.trigger('search');

    // var $input = this.$("#query");
    // this.collection.searchInfo.query = $input.val();
    // this.collection.searchInfo.page = 1;
    //
    // var that = this;
    // this.collection.fetch({
    //   data: this.collection.searchInfo,
    //   success: function () {
    //     console.log(that.collection.length);
    //   }
    // });
  },

  signOut: function(event){
    event.preventDefault();
    EclecticEar.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("session/new", { trigger: true });
        $('body').removeClass('logged-in');
        EclecticEar.mediaView.pause();
      }
    });
  }

});
