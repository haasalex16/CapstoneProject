json.id song.id
json.title song.title
json.created_at song.created_at
json.album_art_url asset_path(song.album_art.url(:original))
json.music_url asset_path(song.music.url(:original))
json.owner do
  json.id song.user_id
  json.email song.user.email
  json.username song.user.username
  json.created_at song.user.created_at
end
json.taggings song.taggings do |tagging|
  json.id tagging.id
  json.tag tagging.tag.title
  json.tag_id tagging.tag.id
  # json.count tagging.tag.amount
end


json._type "Song"
