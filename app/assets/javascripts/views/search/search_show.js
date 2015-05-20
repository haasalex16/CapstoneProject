EclecticEar.Views.SearchShow = Backbone.CompositeView.extend({
  template: JST['search/show'],

  className: 'group',

  events: {
    'keyup #query': 'search'
  },

  initialize: function () {
    this.collection = new EclecticEar.Collections.SearchResults();
    // this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    var view = this.template();
    this.$el.html(view);

    return this;
  },

  search: function(event) {
    var input = this.$("#query").val();
    this.userSearch(input);
  },

  userSearch: function(input) {
    this.collection.searchInfo.query = input;
    var that = this;
    this.collection.fetch({
      data: {
    			query: this.collection.searchInfo.query
    		},
      success: function (collection, response) {
        debugger;
        console.log(that.collection.length);
      }
    });
  }


});
