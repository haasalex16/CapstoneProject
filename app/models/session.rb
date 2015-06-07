class Session < ActiveRecord::Base
  belongs_to :user

  validates :token, :user_id, presence:true

  after_initialize :ensure_unique_token

  def self.find_user(session_token)
    session = Session.find_by(token: session_token)
    if session
      return session.user
    else
      return nil
    end
  end

  def ensure_unique_token
    token = SecureRandom.urlsafe_base64(16)

    until !Session.exists?(token: token)
      token = SecureRandom.urlsafe_base64(16)
    end

    self.token = token
  end
end
