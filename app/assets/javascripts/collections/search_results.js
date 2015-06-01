EclecticEar.Collections.SearchResults = Backbone.Collection.extend({

  initialize: function () {
		this.searchInfo = {};
	},

	parse: function (response) {
		this.searchInfo.totalPages = response.total_pages;
		return response.search_results;
	},

  comparator: function(songOne, songTwo) {

    if (songOne.get('created_at') > songTwo.get('created_at')) {
      return -1;
    } else if (songOne.get('created_at') < songTwo.get('created_at')) {
      return 1;
    } else {
      return 0;
    }
  },

	url: "/search",

	model: function (attrs) {
		var type = attrs._type;
		delete attrs._type;

		var newModel;
		newModel = new EclecticEar.Models[type](attrs);

		return newModel;
	}

});
