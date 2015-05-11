# EclecticEar

[Heroku link][heroku]

## Minimum Viable Product
EclecticEar is a clone of SoundCloud built on Rails and Backbone and
utilizing Amazon S3 to store files. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Upload Music
- [ ] Tag Music
- [ ] Follow Other Users
- [ ] Repost Music to Feed
- [ ] Uploaded Music and Followed User's Music Adds to User Feed
- [ ] Create Playlists
- [ ] Search for Songs by Title
- [ ] Search for Users/Artists

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Feed Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to sign up, follow
users and have user's songs show up on their feed along with their own songs.
I will just display the song's title at this time until completing phase 2 to
actually upload the music file. I will push the app to Heroku and ensuring that
everything works before moving on to phase 2.

[Details][phase-one]

### Phase 2: Uploading Music Files (~2 days)


[Details][phase-two]

### Phase 3: Editing and Displaying Posts (~2 days)


[Details][phase-three]

### Phase 4: User Feeds (~1-2 days)


[Details][phase-four]

### Phase 5: Searching for Blogs and Posts (~2 days)


[Details][phase-five]

### Bonus Features (TBD)
- [ ] "Like" button for songs
- [ ] Reblogging
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
