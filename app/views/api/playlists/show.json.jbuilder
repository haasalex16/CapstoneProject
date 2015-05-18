json.id @playlist.id
json.title @playlist.title
json.created_at @playlist.created_at
json.owner do
  json.id @playlist.user_id
  json.username User.find(@playlist.user_id).username
end

json.songs @playlist.songs do | song |
  json.id song.id
  json.title song.title
  json.owner do
    json.id song.user_id
    json.username User.find(song.user_id).username
  end
  json.upload_id song.upload_id
  json.created_at song.created_at
  json.taggings song.taggings do |tagging|
    json.id tagging.id
    json.tag Tag.find(tagging.tag_id).title
    json.count Tag.find(tagging.tag_id).amount
  end
end
