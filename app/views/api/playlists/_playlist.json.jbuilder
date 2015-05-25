json.id playlist.id
json.title playlist.title
json.songs_count playlist.songs.count
json.cover_url asset_path(playlist.cover.url(:original))
json.created_at playlist.created_at
json.user_id playlist.user_id
json.owner do
  json.id playlist.user_id
  json.username playlist.user.username
end

json._type "Playlist"
