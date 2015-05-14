class Api::TagsController < ApplicationController
  def new
    @tag = Tag.new
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render json: @tag
    else
      flash[:errors] = @tag.errors.full_messages
      render json: @tag.errors, status: 422
    end
  end

  def index
    @tags = Tag.all
    render json: @tags
  end

  private

    def tag_params
      params.require(:tag).permit(:title)
    end
end
