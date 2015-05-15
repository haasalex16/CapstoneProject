json.id @song.id
json.title @song.title
json.owner do
  json.id @song.user_id
  json.email User.find(@song.user_id).email
  json.username User.find(@song.user_id).username
  json.created_at User.find(@song.user_id).created_at
end
json.upload_id @song.upload_id
json.taggings @song.taggings do |tagging|
  json.id tagging.id
  json.tag Tag.find(tagging.tag_id).title
end
