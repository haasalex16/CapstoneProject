class Api::TagsController < ApplicationController
  def new
    @tag = Tag.new
  end

  def create
    @tag = Tag.find_or_create_by(tag_params)
    # Tagging.create(song_id: params[:song_id], tag_id: @tag.id)
    render json: @tag
  end

  def show
    @tag = Tag.includes(songs: [:user, :taggings, :tags]).find(params[:id])
    render :show
  end

  def index
    @tags = Tag.all
    render :index
  end

  private

    def tag_params
      params.require(:tag).permit(:title)
    end
end
