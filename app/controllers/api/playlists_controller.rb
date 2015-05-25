class Api::PlaylistsController < ApplicationController

  def new
    @playlist = Playlist.new
    render json: @playlist
  end

  def create
    @playlist = current_user.playlists.new(playlist_params)
    if @playlist.save
      render json: @playlist
    else
      flash[:errors] = @playlist.errors.full_messages
      render json: @playlist.errors, status: 422
    end
  end

  def index
    @playlists = current_user.playlists
    render json: @playlists
  end

  def show
    @playlist = Playlist.includes(:user, playlist_songs: {song: [:taggings, :user, :tags]}).find(params[:id])
    render :show
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render json: @playlist
  end


  def update
    @playlist = Playlist.find(params[:id])
    @playlist.update(playlist_params)
    render json: @playlist
  end

  private
    def playlist_params
      params.require(:playlist).permit(:title, :cover)
    end
end
