class AddDescriptionAndCityToUser < ActiveRecord::Migration
  def change
    add_column :users, :description, :text
    add_column :users, :city, :string
  end
end
