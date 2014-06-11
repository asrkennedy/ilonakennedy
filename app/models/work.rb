class Work < ActiveRecord::Base
  belongs_to :category
  belongs_to :collection
  attr_accessible :category_id, :date, :name, :price, :collection_id, :works_image, :works_image_cache, :remove_works_image

  mount_uploader :works_image, WorksImageUploader
end
