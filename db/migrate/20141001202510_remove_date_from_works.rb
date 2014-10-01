class RemoveDateFromWorks < ActiveRecord::Migration
  def up
    remove_column :works, :date
  end

  def down
    add_column :works, :date, :date
  end
end
