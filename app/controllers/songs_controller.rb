class SongsController < ApplicationController
  before_action :require_signed_in!

  def create
    @song = current_user.songs.new(song_params)
    if @song.save
      redirect_to :back
    else
      flash[:errors] = @song.errors.full_messages
      redirect_to :root
    end
  end

  private
    def song_params
      params.require(:song).permit(:title, :album_art, :music)
    end
end
