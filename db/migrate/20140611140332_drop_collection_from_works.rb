class DropCollectionFromWorks < ActiveRecord::Migration
  def up
    remove_column :works, :collection
  end

  def down
    radd_column :works, :collection, :string
  end
end
