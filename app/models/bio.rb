class Bio < ActiveRecord::Base
  attr_accessible :bio_image, :body, :resume

  validate :limit_to_one, :on => :create

  def limit_to_one
    if Bio.all.length >= 1
      errors.add(:base, "Exceeded limit of number of bios")
    end
  end

end
