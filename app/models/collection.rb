class Collection < ActiveRecord::Base
  has_many :works
  attr_accessible :date, :description, :name

   has_ancestry
end
