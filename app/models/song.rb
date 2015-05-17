class Song < ActiveRecord::Base
  validates :user_id, presence: true
  validates :title, presence: true
  validates :upload_id, presence: true

  belongs_to :user
  has_many :taggings
  has_many :tags, through: :taggings, source: :tag
  has_many :playlist_songs
  has_many :playlists, through: :playlist_songs, source: :playlist

end
