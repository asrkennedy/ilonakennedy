class Work < ActiveRecord::Base
  belongs_to :category
  belongs_to :collection
  attr_accessible :category_id, :date, :name, :price, :collection_id, :works_image, :works_image_cache, :remove_works_image
  validates_presence_of :name, :price, :collection_id, :works_image, :category_id

  mount_uploader :works_image, WorksImageUploader
  acts_as_nested_set

  rails_admin do
    nested_set({
      max_depth: 1,
      toggle_fields: [:enabled]
      })
  end

  def is_recent
    if self.category.name == "Recent Works"
      return true
    else
      return false
    end
  end

end
