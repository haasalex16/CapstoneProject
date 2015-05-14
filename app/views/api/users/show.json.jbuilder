json.id @user.id
json.username @user.username
json.email @user.email
json.songs @user.songs do | song |
  json.title song.title
  json.owner User.find(song.user_id)
  json.upload_id song.upload_id
  json.created_at song.created_at
end
