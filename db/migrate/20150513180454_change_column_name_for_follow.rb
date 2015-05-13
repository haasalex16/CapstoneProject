class ChangeColumnNameForFollow < ActiveRecord::Migration
  def change
    rename_column :follows, :user_id, :followee_id
  end
end
