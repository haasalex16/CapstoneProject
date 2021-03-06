class Tag < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true

  has_many :taggings, dependent: :destroy
  has_many :songs, through: :taggings, source: :song

  def amount
    taggings.count
  end
end
