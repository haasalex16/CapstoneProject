class Tagging < ActiveRecord::Base
  validates :tag_id, presence: true
  validates :song_id, presence: true
  validates_uniqueness_of :tag_id, scope: :song_id

  belongs_to :tag
  belongs_to :song
end
