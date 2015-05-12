window.EclecticEar = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('START!');
    new EclecticEar.Routers.Router({$rootEl: $('#main')});
    Backbone.history.start();
  }
};
//
// $(document).ready(function(){
//   EclecticEar.initialize();
// });
