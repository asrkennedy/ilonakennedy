class Category < ActiveRecord::Base
  has_many :works
  attr_accessible :name

  # def group_by_collection
  #   self.works.each do |w|

  #   end
  # end
end
