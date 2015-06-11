class SessionsController < ApplicationController
  # before_action :require_no_user!, only: [:create, :new]

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      flash.now[:errors] = ["Incorrect username and/or password"]
      render :new
    else
      login_user!(@user)
      redirect_to root_url
    end
  end

  def destroy
    @session = Session.find_by(token: session[:session_token])
    @session.destroy!
    @current_user = nil
    redirect_to root_url
  end

  def new
    render :new
  end
end
