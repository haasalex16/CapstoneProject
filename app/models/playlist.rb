class Playlist < ActiveRecord::Base
  validates :title, presence: true
  validates :user_id, presence: true

  belongs_to :user
  has_many :playlist_songs
  has_many :songs, through: :playlist_songs, source: :song
end
