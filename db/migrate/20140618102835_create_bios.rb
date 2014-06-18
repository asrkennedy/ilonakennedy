class CreateBios < ActiveRecord::Migration
  def change
    create_table :bios do |t|
      t.text :body
      t.string :bio_image

      t.timestamps
    end
  end
end
