class DropDateFromWorks < ActiveRecord::Migration
  def change
    remove_column :works, :date
  end
end
