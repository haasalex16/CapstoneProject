class Api::TaggingsController < ApplicationController
  def new
    @tagging = Tagging.new()
  end

  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
      render json: @tagging
    else
      flash[:errors] = @tagging.errors.full_messages
      render json: @tagging.errors, status: 422
    end
  end

  def index
    @taggings = Tagging.where('song_id = ?', params[:song_id])
    render json: @taggings
  end

  def destroy
    @tagging = Tagging.find(params[:id]);
    @tagging.destroy
    render json: @tagging
  end


  private

    def tagging_params
      params.require(:tagging).permit(:song_id, :tag_id)
    end

end
