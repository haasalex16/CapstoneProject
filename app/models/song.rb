class Song < ActiveRecord::Base

  include PgSearch

  multisearchable against: :title

  validates :user_id, presence: true
  validates :title, presence: true
  # validates_attachment_presence :music

  belongs_to :user
  has_many :taggings
  has_many :tags, through: :taggings, source: :tag
  has_many :playlist_songs
  has_many :playlists, through: :playlist_songs, source: :playlist

  has_attached_file :album_art, default_url: "cover.jpg"
  validates_attachment_content_type :album_art, :content_type => /\Aimage\/.*\Z/

  Paperclip.options[:content_type_mappings] = {
    :mp3 => "audio/mpeg"
  }
  
  has_attached_file :music
  do_not_validate_attachment_file_type :music
end
