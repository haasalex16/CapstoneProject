json.array! @users do |user|
  json.id       user.id
  json.username user.username
  json.email    user.email
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