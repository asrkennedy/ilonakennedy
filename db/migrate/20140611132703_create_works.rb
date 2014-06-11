class CreateWorks < ActiveRecord::Migration
  def change
    create_table :works do |t|
      t.string :name
      t.string :date
      t.string :series
      t.string :price
      t.integer :category_id

      t.timestamps
    end
  end
end
