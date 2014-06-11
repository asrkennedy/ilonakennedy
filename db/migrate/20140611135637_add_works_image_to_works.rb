class AddWorksImageToWorks < ActiveRecord::Migration
  def change
    add_column :works, :works_image, :string
  end
end
