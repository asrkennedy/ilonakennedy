class ChangeDateFormatInWorks < ActiveRecord::Migration
  def up
    change_column :works, :date, :date
  end

  def down
    change_column :works, :date, :datetime
  end
end
