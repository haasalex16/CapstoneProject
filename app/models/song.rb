class Song < ActiveRecord::Base
  validates :user_id, presence: true
  validates :title, presence: true
  validates :upload_id, presence: true

  belongs_to :user

end
