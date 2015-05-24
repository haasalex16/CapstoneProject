class Api::UsersController < ApplicationController
  def new
    @user = User.new
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render json: @user
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: @user.errors, ststus: 422
    end
  end

  def show
    @user = User.includes(:playlists)
                .includes(:songs)
                .find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    @user = User.find(params[:id])
    @user.destroy()
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :avatar, :city, :description)
    end

end
