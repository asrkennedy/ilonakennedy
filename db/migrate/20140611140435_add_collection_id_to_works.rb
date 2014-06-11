class AddCollectionIdToWorks < ActiveRecord::Migration
  def change
    add_column :works, :collection_id, :integer
  end
end
