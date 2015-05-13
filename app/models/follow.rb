class Follow < ActiveRecord::Base
  belongs_to :followee,
    class_name: "User",
    foreign_key: "followee_id",
    primary_key: 'id'
  belongs_to :follower,
    class_name: "User",
    foreign_key: 'follower_id',
    primary_key: 'id'

  validates :followee, :follower, presence: true
  validates :follower, uniqueness: { scope: :followee }

end
