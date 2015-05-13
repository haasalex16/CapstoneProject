# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references followee(user))
follower_id | integer   | not null, foreign key (references follower(user))

## songs

(need to look into uploading mp3 files further...)

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
title       | string    | not null
upload_id   | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
label       | string    | not null, unique

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song_id     | integer   | not null, foreign key (references song)
tag_id      | integer   | not null, foreign key (references tags)

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
title       | string    | not null

## playlist_songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
playlist_id | integer   | not null, foreign key (references playlist)
song_id     | integer   | not null, foreign key (references song)
order       | integer   | not null
