class RemoveDateFromCollections < ActiveRecord::Migration
  def up
    remove_column :collections, :date
  end

  def down
    add_column :collections, :date, :date
  end
end
