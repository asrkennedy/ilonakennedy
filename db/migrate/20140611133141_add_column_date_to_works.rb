class AddColumnDateToWorks < ActiveRecord::Migration
  def change
    add_column :works, :date, :datetime
  end
end
