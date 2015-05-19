json.id @song.id
json.title @song.title
json.album_art_url asset_path(@song.album_art.url(:original))
json.owner do
  json.id @song.user_id
  json.email User.find(@song.user_id).email
  json.username User.find(@song.user_id).username
  json.created_at User.find(@song.user_id).created_at
end
json.taggings @song.taggings do |tagging|
  json.id tagging.id
  json.tag Tag.find(tagging.tag_id).title
  json.count Tag.find(tagging.tag_id).amount
end
