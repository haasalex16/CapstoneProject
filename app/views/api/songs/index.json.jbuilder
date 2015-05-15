json.array! @songs do | song |
  json.id song.id
  json.title song.title
  json.owner do
    json.id song.user_id
    json.email User.find(song.user_id).email
    json.username User.find(song.user_id).username
    json.created_at User.find(song.user_id).created_at
  end
  json.upload_id song.upload_id
  json.created_at song.created_at
end
