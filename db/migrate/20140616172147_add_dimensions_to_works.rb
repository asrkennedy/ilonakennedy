class AddDimensionsToWorks < ActiveRecord::Migration
  def change
    add_column :works, :dimensions, :string
  end
end
