class AddAncestryToWorks < ActiveRecord::Migration

  def up
    add_column :works, :ancestry, :string
    add_index :works, :ancestry
  end

  def down
    remove_column :works, :ancestry, :string
    remove_index :works, :ancestry
  end

end
