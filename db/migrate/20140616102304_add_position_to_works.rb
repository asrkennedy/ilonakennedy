class AddPositionToWorks < ActiveRecord::Migration
  def change
    add_column :works, :position, :integer
  end
end
