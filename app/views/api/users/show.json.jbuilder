json.id @user.id
json.username @user.username
json.email @user.email
json.avatar_url asset_path(@user.avatar.url(:original))
json.followers @user.followers.count
json.followees @user.followees do |followee|
  json.follow   current_user.follow?(followee)
  json.id followee.id
  json.username followee.username
end
json.songs @user.songs do | song |
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
json.playlists @user.playlists do |playlist|
  json.id playlist.id
  json.title playlist.title
  json.created_at playlist.created_at

  json.songs playlist.songs do | song |
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
end
