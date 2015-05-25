json.partial! "api/users/user", user: @user

json.followees @user.followees do |followee|
  json.follow   current_user.follow?(followee)
  json.avatar_url asset_path(followee.avatar.url(:original))
  json.id followee.id
  json.username followee.username
end

json.songs @user.songs do | song |
  json.partial! "api/songs/song", song: song
end

json.playlists @user.playlists do |playlist|
  json.id           playlist.id
  json.title        playlist.title
  json.cover_url    asset_path(playlist.cover.url(:original))
  json.created_at   playlist.created_at

  json.songs playlist.playlist_songs do | playlist_song |
    json.playlist_song_id   playlist_song.id
    json.id                 playlist_song.song.id
    json.title              playlist_song.song.title
    json.created_at         playlist_song.song.created_at
    json.owner do
      json.id       playlist_song.song.user_id
      json.username playlist_song.song.user.username
    end
    json.taggings   playlist_song.song.taggings do |tagging|
      json.id       tagging.id
      json.tag      tagging.tag.title
      # json.count    tagging.tag.amount
    end
  end
end
