class Api::SongsController < ApplicationController

  def new
    @song = Song.new
    render json: @song
  end

  def create
    @song = current_user.songs.new(song_params)
    if @song.save
      render json: @song
    else
      flash[:errors] = @song.errors.full_messages
      render json: @song.errors, status: 422
    end
  end

  def index
    @songs = current_user.songs
    render :index
  end

  def show
    @song = Song.find(params[:id])
    render json: @song
  end

  private
    def song_params
      params.require(:song).permit(:title, :upload_id)
    end

end
