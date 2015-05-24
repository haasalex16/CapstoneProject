json.partial! "api/playlists/playlist", playlist: @playlist

json.songs @playlist.songs do | song |
  json.partial! "api/songs/song", song: song
end
