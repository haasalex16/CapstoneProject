class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validates :username, presence: true
  validates :email, presence: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password? (password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

    def ensure_session_token
      self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end
