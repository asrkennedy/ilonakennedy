class AddAncestryToCollection < ActiveRecord::Migration
  def up
    add_column :collections, :ancestry, :string
    add_index :collections, :ancestry
  end

    def down
    remove_column :collections, :ancestry, :string
    remove_index :collections, :ancestry
  end

end
