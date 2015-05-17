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

  private
    def playlist_params
      params.require(:playlist).permit(:title)
    end
end
