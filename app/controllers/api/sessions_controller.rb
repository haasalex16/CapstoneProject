class Api::SessionsController < ApplicationController

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def create
    user = User.find_by_credentials(
                  params[:user][:username],
                  params[:user][:password])

    if user.nil?
      head :unprocessable_entity
    else
      login_user!(user)
      render :show
    end
  end

  def destroy
    @session = Session.find_by(token: session[:session_token])
    @session.destroy!
    @current_user = nil
    render json: {}
  end
end
