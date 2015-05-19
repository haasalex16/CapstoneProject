class Api::SongsController < ApplicationController

  wrap_parameters false

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
    ids = current_user.followees.map{|user| user.id}
    ids << current_user.id
    @songs = Song.where('user_id IN (?)', ids)
    render :index
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end

  def update
    @song = Song.find(params[:id])
    @song.update(song_params)
    render json: @song
  end

  private
    def song_params
      params.require(:song).permit(:title, :album_art, :music)
    end

end
