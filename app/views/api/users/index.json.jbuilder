json.array! @users do |user|
  json.id       user.id
  json.username user.username
  json.avatar_url asset_path(user.avatar.url(:original))
  json.email    user.email
  json.follow   current_user.follow?(user)
  json.followers   user.followers do |follower|
    json.id       follower.id
    json.username follower.username
    json.email    follower.email
  end
  json.followees   user.followees do |followee|
    json.id       followee.id
    json.username followee.username
    json.email    followee.email
  end
end
