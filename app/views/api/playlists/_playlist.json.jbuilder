json.id playlist.id
json.title playlist.title
json.user_id playlist.user_id
json.owner User.find(playlist.user_id).username

json._type "Playlist"
