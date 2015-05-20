json.id @playlist.id
json.title @playlist.title
json.cover_url asset_path(@playlist.cover.url(:original))
json.created_at @playlist.created_at
json.owner do
  json.id @playlist.user_id
  json.username User.find(@playlist.user_id).username
end

json.songs @playlist.songs do | song |
  json.album_art_url asset_path(song.album_art.url(:original))
  json.id song.id
  json.title song.title
  json.owner do
    json.id song.user_id
    json.username User.find(song.user_id).username
  end
  json.created_at song.created_at
  json.taggings song.taggings do |tagging|
    json.id tagging.id
    json.tag Tag.find(tagging.tag_id).title
    json.count Tag.find(tagging.tag_id).amount
  end
end
