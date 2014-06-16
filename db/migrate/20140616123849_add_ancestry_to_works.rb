class AddAncestryToWorks < ActiveRecord::Migration
  def change
    add_column :works, :ancestry, :string
  end

  def up
    add_index :works, :ancestry
  end

  def down
    remove_index :works, :ancestry
  end

end
