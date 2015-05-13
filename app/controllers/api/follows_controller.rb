class Api::FollowsController < ApplicationController
  def create
    @follow = current_user.out_follows.new(follow_params)
    if @follow.save
      render json: @follow
    else
      flash[:errors] = @follow.errors.full_messages
      render json: @follow.errors, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy!
    render json: @follow
  end

  private
    def follow_params
      params.require(:follow).permit(:followee_id);
    end
end
