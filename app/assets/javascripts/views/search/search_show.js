EclecticEar.Views.SearchShow = Backbone.CompositeView.extend({

	template: JST["search/search"],

	className: 'group',

  initialize: function () {
		this.collection = new EclecticEar.Collections.SearchResults();
		this.listenTo(this.collection, "sync", this.renderResults);
	},

	events: {
		"click button": "search",
		"click .next-page": "nextPage"
	},


	render: function () {
		var content = this.template();
		this.$el.html(content);

		return this;
	},

	search: function (event) {
		event.preventDefault();
		var $input = this.$("#query");
		this.collection.searchInfo.query = $input.val();
		this.collection.searchInfo.page = 1;

		var that = this;
		this.collection.fetch({
			data: this.collection.searchInfo,
			// {
	// 			query: this.collection.searchInfo.query,
	// 			page: this.collection.searchInfo.pageNum
	// 		},
			success: function () {
				console.log(that.collection.length);
			}
		});
	},

	renderResults: function () {
		this.renderSearchInfo();
		var $container = this.$("#search-results");
		$container.empty();

		var view;
		this.collection.each(function (result) {
			if (result instanceof EclecticEar.Models.User) {
				view = new EclecticEar.Views.SearchUser({ model: result });
			} else if (result instanceof EclecticEar.Models.Song) {
				view = new EclecticEar.Views.SongShow({ model: result });
			} else if (result instanceof EclecticEar.Models.Playlist) {
				view = new EclecticEar.Views.SearchPlaylist({ model: result });
			}

			$container.append(view.render().$el);
		});
	},

	nextPage: function () {
		this.collection.searchInfo.page++
		this.collection.fetch({
			data: this.collection.searchInfo
		});
	},

	renderSearchInfo: function () {
		this.$("#pages").html(this.collection.searchInfo.totalPages);
	}

});
