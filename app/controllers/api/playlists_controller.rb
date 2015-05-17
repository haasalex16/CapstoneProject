class PlaylistsController < ApplicationController

  def new
    @playlist = Playlist.new
    render json: @playlist
  end

  def create
    @playlist = current_user.playlists.new(playlist_params)
    if @playlist.save
      render json: @song
    else
      flash[:errors] = @song.errors.full_messages
      render json: @song.errors, status: 422
    end
  end

  private
    def playlist_params
      params.require(:playlist).permit(:title)
    end
end
