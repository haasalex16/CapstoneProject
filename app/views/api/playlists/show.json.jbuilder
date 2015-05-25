json.partial! "api/playlists/playlist", playlist: @playlist

json.songs @playlist.playlist_songs do | playlist_song |
  json.playlist_song_id playlist_song.id
  json.partial! "api/songs/song", song: playlist_song.song
end
