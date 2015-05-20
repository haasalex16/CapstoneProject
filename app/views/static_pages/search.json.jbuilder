json.total_pages @search_results.total_pages

json.search_results @search_results.map(&:searchable) do |search_result|
  if search_result.is_a? User
    json.partial! "api/users/user", user: search_result
  end
  if  search_result.is_a? Song
    json.partial! "api/songs/song", song: search_result
  end
  if search_result.is_a? Playlist
    json.partial! "api/playlists/playlist", playlist: search_result
  end
end
