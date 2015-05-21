json.id @playlist.id
json.title @playlist.title
json.cover_url asset_path(@playlist.cover.url(:original))
json.created_at @playlist.created_at
json.owner do
  json.id @playlist.user_id
  json.username User.find(@playlist.user_id).username
end

json.songs @playlist.songs do | song |
  json.partial! "api/songs/song", song: song
end
