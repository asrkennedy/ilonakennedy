class Collection < ActiveRecord::Base
  has_many :works
  attr_accessible :year, :description, :name, :position

   has_ancestry
end
