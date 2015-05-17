class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :session_token, presence: true, uniqueness: true

  has_many :songs, dependent: :destroy
  has_many :in_follows,
    class_name: 'Follow',
    foreign_key: 'followee_id',
    primary_key: 'id', dependent: :destroy
  has_many :out_follows,
    class_name: 'Follow',
    foreign_key: 'follower_id',
    primary_key: 'id', dependent: :destroy
  has_many :followers,
    through: :in_follows,
    source: :follower, dependent: :destroy
  has_many :followees,
    through: :out_follows,
    source: :followee, dependent: :destroy

  has_many :playlists, dependent: :destroy


  def self.find_by_credentials (username, password)
    user = User.find_by(username: username)
    return nil if user.nil?

    if user.is_password? (password)
      user
    else
      nil
    end
  end

  def follow?(user)
    self.followees.include?(user)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password? (password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end


  private

    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
