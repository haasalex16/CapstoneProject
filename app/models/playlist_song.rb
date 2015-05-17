class PlaylistSong < ActiveRecord::Base
  validates :song_id, presence: true
  validates :playlist_id, presence: true
  validates_uniqueness_of :playlist_id, scope: :song_id

  belongs_to :song
  belongs_to :playlist
end
