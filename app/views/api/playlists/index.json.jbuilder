json.array! @playlists do |playlist|
  json.id         playlist.id
  json.title      playlist.title
  json.created_at playlist.created_at
  json.songs      playlist.playlist_songs
end
