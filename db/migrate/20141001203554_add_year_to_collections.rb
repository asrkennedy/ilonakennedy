class AddYearToCollections < ActiveRecord::Migration
  def change
    add_column :collections, :year, :integer
  end
end
