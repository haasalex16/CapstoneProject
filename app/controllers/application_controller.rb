class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user
  # helper_method :logged_in?

  def login_user!(user)
    @current_user = user
    @session = user.sessions.create()
    session[:session_token] = @session.token
  end

  def logged_in?
    !current_user.nil?
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= Session.find_user(session[:session_token])
  end

  def require_signed_in!
    redirect_to root_url  unless logged_in?
  end

end
