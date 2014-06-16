class Work < ActiveRecord::Base
  belongs_to :category
  belongs_to :collection
  attr_accessible :category_id, :date, :name, :price, :collection_id, :works_image, :works_image_cache, :remove_works_image, :dimensions
  validates_presence_of :name, :price, :collection_id, :works_image, :category_id

  mount_uploader :works_image, WorksImageUploader
  has_ancestry

  def is_recent
    if self.category.name == "Recent Works"
      return true
    else
      return false
    end
  end

  def get_next_work
    current_position = self.position
    current_category = self.category.name
    next_work = Work.where("position > ?", current_position).order("position ASC").first
    if next_work.category.name == current_category
      return next_work
    else
      return false
    end
  end

    def get_prev_work
    current_position = self.position
    current_category = self.category.name
    prev_work = Work.where("position < ?", current_position).order("position ASC").last
    if prev_work.category.name == current_category
      return prev_work
    else
      return false
    end
  end

end
