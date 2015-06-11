EclecticEar.Views.SearchShow = Backbone.CompositeView.extend({

	template: JST["search/search"],

	className: 'group',

  initialize: function () {
		this.collection = new EclecticEar.Collections.SearchResults();
		this.listenTo(this.collection, "sync", this.renderResults);
		this.listenTo(EclecticEar.currentUser, 'search', this.search);
		// $("#search-form").on("submit", function() {
		// 		this.search();
		// }.bind(this));
	},

	events: {
		// "submit form": "search",
		"click .next-page": "nextPage",
		'click .results-user': 'renderUserResults',
		'click .results-all': 'renderResults',
		'click .results-playlist': 'renderPlaylistResults',
		'click .results-song': 'renderSongResults'
	},


	render: function () {
		var content = this.template();
		this.$el.html(content);

		return this;
	},

	bindHeader: function () {
		$("#search-form").on("submit", function() {
				this.search();
		}.bind(this));
	},

	search: function (event) {
		  	console.log('searching!');
		// event.preventDefault();
		var $input = $("#query");
		this.collection.searchInfo.query = $input.val();
		this.collection.searchInfo.page = 1;

		var that = this;
		this.collection.fetch({
			data: this.collection.searchInfo,
			success: function () {
				console.log(that.collection.length);
			}
		});
		$("input[type=text]").val("");
	},

	renderResults: function () {
		$('.results-all').addClass('active');
		$('.results-user').removeClass('active');
		$('.results-song').removeClass('active');
		$('.results-playlist').removeClass('active');
		this.renderSearchInfo();
		var $container = this.$("#search-results");
		$container.empty();

		var view;
		if (this.collection.length === 0) {
			$container.append("<h1 class='none'>No Results</h1>");
		}
		this.collection.each(function (result) {
			if (result instanceof EclecticEar.Models.User) {
				view = new EclecticEar.Views.SearchUser({ model: result });
			} else if (result instanceof EclecticEar.Models.Song) {
				view = new EclecticEar.Views.SongShow({ model: result});
			} else if (result instanceof EclecticEar.Models.Playlist) {
				view = new EclecticEar.Views.SearchPlaylist({ model: result });
			}

			$container.append(view.render().$el);
		});
	},

	renderUserResults: function() {
		$('.results-user').addClass('active');
		$('.results-all').removeClass('active');
		$('.results-song').removeClass('active');
		$('.results-playlist').removeClass('active');
		this.renderSearchInfo();
		var $container = this.$("#search-results");
		$container.empty();

		var view;
		this.collection.each(function (result) {
			if (result instanceof EclecticEar.Models.User) {
				view = new EclecticEar.Views.SearchUser({ model: result });
			$container.append(view.render().$el);
			}
		});
	},

	renderPlaylistResults: function() {
		$('.results-playlist').addClass('active');
		$('.results-all').removeClass('active');
		$('.results-song').removeClass('active');
		$('.results-user').removeClass('active');
		this.renderSearchInfo();
		var $container = this.$("#search-results");
		$container.empty();

		var view;
		this.collection.each(function (result) {
			if (result instanceof EclecticEar.Models.Playlist) {
				view = new EclecticEar.Views.SearchPlaylist({ model: result });
			$container.append(view.render().$el);
			}
		});
	},

	renderSongResults: function() {
		$('.results-song').addClass('active');
		$('.results-all').removeClass('active');
		$('.results-user').removeClass('active');
		$('.results-playlist').removeClass('active');
		this.renderSearchInfo();
		var $container = this.$("#search-results");
		$container.empty();

		var view;
		this.collection.each(function (result) {
			if (result instanceof EclecticEar.Models.Song) {
				view = new EclecticEar.Views.SongShow({ model: result });
			$container.append(view.render().$el);
			}
		});
	},

	nextPage: function () {
		this.collection.searchInfo.page++
		this.collection.fetch({
			data: this.collection.searchInfo
		});
	},

	renderSearchInfo: function () {
		this.$("#pages").html(this.collection.searchInfo.page + " of " + this.collection.searchInfo.totalPages);
	}

});
