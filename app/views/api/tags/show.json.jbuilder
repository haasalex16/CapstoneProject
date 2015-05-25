json.id     @tag.id
json.title  @tag.title
json.songs  @tag.songs do | song |
  json.partial! "api/songs/song", song: song
end
