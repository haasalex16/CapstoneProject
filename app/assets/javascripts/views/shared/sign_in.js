EclecticEar.Views.SignIn = Backbone.View.extend({

  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(EclecticEar.currentUser, "signIn", this.signInCallback);
  },

  events: {
    "submit form": "submit",
    'click #guest': 'guest'
  },

  template: JST['shared/sign_in'],

  render: function(){
    this.$el.html(this.template());

    return this;
  },

  submit: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    EclecticEar.currentUser.signIn({
      username: formData.username,
      password: formData.password,
      error: function(){
        alert("Wrong username/password combination. Please try again.");
      },
    });
  },

  guest: function(event){

    EclecticEar.currentUser.signIn({
      username: 'Guest',
      password: 'password'
    });
  },

  signInCallback: function(event){
    if(this.callback) {
      this.callback();
    } else {
      Backbone.history.navigate("", { trigger: true });
    }
  }

});
