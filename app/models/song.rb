class Song < ActiveRecord::Base
  validates :user_id, presence: true
  validates :title, presence: true

  belongs_to :user
  has_many :taggings
  has_many :tags, through: :taggings, source: :tag
  has_many :playlist_songs
  has_many :playlists, through: :playlist_songs, source: :playlist

  # :styles => { :large => "300x300>", :medium => "130x130>", :thumb => "50x50>" },
  has_attached_file :album_art, default_url: "cover.jpg"
  validates_attachment_content_type :album_art, :content_type => /\Aimage\/.*\Z/
end
