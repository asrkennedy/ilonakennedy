class AddDescriptionToWorks < ActiveRecord::Migration
  def change
    add_column :works, :description, :text
  end
end
