# EclecticEar

[Live Link](http://www.eclecticear.us/)

##Description

EclecticEar is a social music site inspired by SoundCloud.  Built with a Backbone.js frontend using a RESTful Rails JSON API.  Features include:
* a custom user Auth system built in Rails to sign-up/log-in
* ability to upload music files (M4A, Mp3) to be stored on AWS S3
* Follow users and have their uploaded songs appear on your stream
* custom AJAX request to 'Explore' and pull 5 random tracks from the database
* Tag songs with custom tags/genres and then able to show all tracks with the same tag
* create custom playlists with all songs in database
* search returns results from Username, Song Title, Playlist Title and then you can filter by result type
* Add Avatar/Cover Art to users, playlists, and songs (stored on AWS)
* Edit/Delete songs, playlists, and user profile

## Languages

* Ruby on Rails
* SQL (PostgrSQL)
* JSON (jBuilder)
* Backbone (Javascript, jQuery)
* HTML
* CSS

##Technologies, gems, and libraries

* [BCrypt](https://github.com/codahale/bcrypt-ruby)
* [Figaro](https://github.com/laserlemon/figaro)
* [PgSearch](https://github.com/Casecommons/pg_search)
* [Kaminari](https://github.com/amatsuda/kaminari)
* [Paperclip](https://github.com/thoughtbot/paperclip)
* [SerializeJSON](https://github.com/marioizquierdo/jquery.serializeJSON)
* [AWS S3](http://aws.amazon.com/s3/)
* CompositeView

##Future Features
- [ ] "Like" button for songs
- [ ] Playcount on SongShow
- [ ] Typeahead search bar
- [ ] Repost other songs to your own stream/feed
