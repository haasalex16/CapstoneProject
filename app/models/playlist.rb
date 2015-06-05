class Playlist < ActiveRecord::Base

  include PgSearch

  multisearchable against: :title

  validates :title, presence: true
  validates :user_id, presence: true

  belongs_to :user
  has_many :playlist_songs, dependent: :destroy
  has_many :songs, through: :playlist_songs, source: :song

  has_attached_file :cover, default_url: "playlist.png"
  validates_attachment_content_type :cover, :content_type => /\Aimage\/.*\Z/
end
