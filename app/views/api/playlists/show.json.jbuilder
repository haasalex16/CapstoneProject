json.id @playlist.id
json.title @playlist.title
json.created_at @playlist.created_at
json.owner do
  json.id @playlist.user_id
  json.username User.find(@playlist.user_id).username
end

json.songs @playlist.songs do |song|
  json.id song.id
  json.title song.title
  json.user_id song.user_id
  json.created_at song.created_at
end
