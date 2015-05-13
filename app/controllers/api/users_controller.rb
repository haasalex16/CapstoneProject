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
    @user = User.find(params[:id])
    render json: @user
  end

  def index
    @users = User.all.where('id != ' + current_user.id.to_s)
    render json: @users
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password)
    end

end
