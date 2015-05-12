class SongsController < ApplicationController

  def new
    @song = Song.new

  end

  def create
    @song = current_user.songs.new(song_params)
    if @song.save
      render json: @song
    else
      flash[:errors] = @song.errors.full_messages
      render :new
    end

  end

  private
    def song_params
      params.require(:song).permit(:title, :upload_id)
    end

end
