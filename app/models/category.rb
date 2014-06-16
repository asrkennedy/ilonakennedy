class Category < ActiveRecord::Base
  has_many :works
  attr_accessible :name

   has_ancestry
end
