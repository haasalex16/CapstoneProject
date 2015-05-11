# EclecticEar

Coming Soon...

[Heroku link][heroku]

## Minimum Viable Product
EclecticEar is a clone of SoundCloud built on Rails and Backbone and
utilizing Amazon S3 to store files. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Upload Music
- [ ] Follow Other Users
- [ ] Uploaded Music and Followed User's Music Adds to User Feed
- [ ] Tag Music
- [ ] Create Playlists
- [ ] Search for Songs and Playlist by Title
- [ ] Search for Users/Artists
- [ ] Repost Music to Feed

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Feed Creation (1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to sign up, sign in
and have a basic SongIndex view for their landing page. I will just display the
song's title at this time until completing phase 3 to actually upload the music
file. I will push the app to Heroku and ensuring that everything works before
moving on to phase 2.

[Details][phase-one]

### Phase 2: Following Users and Update Feed (1 day)
I will add the ability to see the other user's show pages as well as follow them.
Once following a user, their songs will show up on your feed.  Once again this
will still be a basic SongView until the completion of Phase 3.

[Details][phase-two]

### Phase 3: Uploading and Display/Playing of Music Files (1 day)
I have not yet looked into what the best platform for uploading/hosting files will
be (Amazon S3, S3 File Field, etc.) or playing the file (Jplayer?) will be (will
update README once a decision is made). At the end of Phase 3 users will be able
to upload music to the site and able to edit the song title.

[Details][phase-three]

### Phase 4: Update User Feeds and SongView (1 Day)
I will convert the feed into a Backbone composite view made up of multiple
SongShow views.  Phase 4 will also include completing the UserShow page with
proper Backbone to only show their songs.  


[Details][phase-four]

### Phase 5: Create Playlist and Add Songs to them (~2 days)
I will create a new playlist view to create a playlist and then functionality
to add previously uploaded songs or other user's songs to the playlist.  playlists
will also need to be added to the users feed in the same manner as normal songs.

[Details][phase-five]

### Phase 6: Searchable (~2 days)
Ability to search and it will provide a composite view of resulting 'users',
'song names', and 'playlist names' that match the search.

[Details][phase-six]

### Bonus Features (TBD)
- [ ] Add image uploads for playlist and song album art
- [ ] "Like" button for songs
- [ ] Playcount on SongShow
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
