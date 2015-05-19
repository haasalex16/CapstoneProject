class AddAttachmentMusicToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :music
    end
  end

  def self.down
    remove_attachment :songs, :music
  end
end
