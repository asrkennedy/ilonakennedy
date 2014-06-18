class AddResumeToBios < ActiveRecord::Migration
  def change
    add_column :bios, :resume, :text
  end
end
