json.id user.id
json.username user.username
json.followers user.followers.count
json.songs user.songs.count
json.email user.email
json.avatar_url asset_path(user.avatar.url(:original))

json._type "User"
