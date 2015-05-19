class RemoveUploadIdFromSongs < ActiveRecord::Migration
  def change
    remove_column :songs, :upload_id
  end
end
