class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.string :upload_id, null: false

      t.timestamps null: false
    end

    add_index :songs, :title
  end
end
