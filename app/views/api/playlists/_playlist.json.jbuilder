json.id playlist.id
json.title playlist.title
json.songs playlist.songs.count
json.cover_url asset_path(playlist.cover.url(:original))
json.user_id playlist.user_id
json.owner User.find(playlist.user_id).username

json._type "Playlist"
