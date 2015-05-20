class AddAttachmentCoverToPlaylists < ActiveRecord::Migration
  def self.up
    change_table :playlists do |t|
      t.attachment :cover
    end
  end

  def self.down
    remove_attachment :playlists, :cover
  end
end
