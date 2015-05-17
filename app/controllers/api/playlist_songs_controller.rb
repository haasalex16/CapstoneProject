class Api::PlaylistSongsController < ApplicationController
  def create
    @playlist_song = PlaylistSong.new(playlist_songs_params)
    if @playlist_song.save
      render json: @playlist_song
    else
      flash[:errors] = @playlist_song.errors.full_messages
      render json: @playlist_song.errors, status: 422
    end
  end

  private
    def playlist_songs_params
        params.require(:playlist_song).permit(:song_id, :playlist_id, :order)
    end
end
