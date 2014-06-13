class Work < ActiveRecord::Base
  belongs_to :category
  belongs_to :collection
  attr_accessible :category_id, :date, :name, :price, :collection_id, :works_image, :works_image_cache, :remove_works_image

  mount_uploader :works_image, WorksImageUploader

  def is_recent
    if self.category.name == "Recent Works"
      return true
    else
      return false
    end
  end

end
