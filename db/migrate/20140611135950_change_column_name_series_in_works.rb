class ChangeColumnNameSeriesInWorks < ActiveRecord::Migration

  def change
    rename_column :works, :series, :collection
  end

end
